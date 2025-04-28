import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";
import { D1Database } from "@cloudflare/workers-types";

// Define the structure of a Blindspot story
interface BlindspotStory {
  id: number;
  representative_headline: string;
  summary: string | null;
  first_seen_date: string;
  last_updated_date: string;
  topic_tags: string | null;
  bias_distribution: { [key: string]: number };
  total_articles: number;
  dominant_bias: string;
  dominant_percentage: number;
}

export const runtime = "edge"; // Specify edge runtime

// GET handler to fetch blindspot stories
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const threshold = parseFloat(searchParams.get("threshold") || "0.7"); // 70% threshold for blindspot detection

    // Access the D1 database binding
    const context = getRequestContext();
    const DB = context.env.DB as D1Database;

    if (!DB) {
      return NextResponse.json({ error: "Database binding not found" }, { status: 500 });
    }

    // First, get all stories with their coverage data
    const storiesQuery = `
      SELECT 
        s.id, 
        s.representative_headline, 
        s.summary, 
        s.first_seen_date, 
        s.last_updated_date, 
        s.topic_tags,
        sc.bias_classification,
        sc.article_count
      FROM stories s
      JOIN story_coverage sc ON s.id = sc.story_id
      ORDER BY s.last_updated_date DESC
    `;
    
    const storiesResult = await DB.prepare(storiesQuery).all<{
      id: number;
      representative_headline: string;
      summary: string | null;
      first_seen_date: string;
      last_updated_date: string;
      topic_tags: string | null;
      bias_classification: string;
      article_count: number;
    }>();

    if (!storiesResult.results || storiesResult.results.length === 0) {
      return NextResponse.json({ blindspots: [] });
    }

    // Process the results to identify blindspots
    const storiesMap = new Map<number, {
      story: {
        id: number;
        representative_headline: string;
        summary: string | null;
        first_seen_date: string;
        last_updated_date: string;
        topic_tags: string | null;
      },
      coverage: { [key: string]: number },
      total: number
    }>();

    // Group by story and calculate totals
    for (const row of storiesResult.results) {
      if (!storiesMap.has(row.id)) {
        storiesMap.set(row.id, {
          story: {
            id: row.id,
            representative_headline: row.representative_headline,
            summary: row.summary,
            first_seen_date: row.first_seen_date,
            last_updated_date: row.last_updated_date,
            topic_tags: row.topic_tags
          },
          coverage: {},
          total: 0
        });
      }
      
      const storyData = storiesMap.get(row.id)!;
      storyData.coverage[row.bias_classification] = row.article_count;
      storyData.total += row.article_count;
    }

    // Identify blindspots
    const blindspots: BlindspotStory[] = [];
    
    for (const [id, data] of storiesMap.entries()) {
      // Skip stories with too few articles
      if (data.total < 3) continue;
      
      // Find the dominant bias category
      let dominantBias = "";
      let dominantCount = 0;
      
      for (const [bias, count] of Object.entries(data.coverage)) {
        if (count > dominantCount) {
          dominantCount = count;
          dominantBias = bias;
        }
      }
      
      // Calculate the percentage of the dominant bias
      const dominantPercentage = dominantCount / data.total;
      
      // If the dominant bias exceeds our threshold, it's a blindspot
      if (dominantPercentage >= threshold) {
        blindspots.push({
          ...data.story,
          bias_distribution: data.coverage,
          total_articles: data.total,
          dominant_bias: dominantBias,
          dominant_percentage: dominantPercentage
        });
      }
    }
    
    // Sort by dominant percentage (most skewed first) and limit results
    blindspots.sort((a, b) => b.dominant_percentage - a.dominant_percentage);
    const limitedBlindspots = blindspots.slice(0, limit);

    return NextResponse.json({ blindspots: limitedBlindspots });

  } catch (error) {
    console.error("Error fetching blindspots:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: "Failed to fetch blindspots", details: errorMessage }, { status: 500 });
  }
}
