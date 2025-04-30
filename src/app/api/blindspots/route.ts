// /khalifmo/somanews/src/app/api/blindspots/route.ts

// Explicitly set the runtime to Node.js to avoid edge runtime conflicts
export const runtime = 'nodejs';

// Import NextRequest and NextResponse explicitly for nodejs runtime
import { NextRequest, NextResponse } from 'next/server';
// Import getRequestContext to access Cloudflare bindings
import { getRequestContext } from '@cloudflare/next-on-pages';
// Import D1Database type if needed elsewhere, or rely on inference
import { D1Database } from '@cloudflare/workers-types';

// Define the structure of a Blindspot story
interface BlindspotStory {
  id: number;
  representative_headline: string;
  summary: string | null;
  first_seen_date: string;
  last_updated_date: string;
  topic_tags: string | null; // Keep as string initially, process later if needed
  bias_distribution: { [key: string]: number };
  total_articles: number;
  dominant_bias: string;
  dominant_percentage: number;
}



// GET handler to fetch blindspot stories
export async function GET(request: NextRequest) {
  console.log("GET /api/blindspots called"); // Basic logging
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const threshold = parseFloat(searchParams.get("threshold") || "0.7"); // 70% threshold

    console.log(`Params: limit=${limit}, threshold=${threshold}`); // Log params

    // Access the D1 database binding via getRequestContext
    let DB: D1Database;
    try {
      // IMPORTANT: getRequestContext() must be called within the request handler
      const context = getRequestContext();
      // Ensure the binding name 'DB' matches your wrangler.toml or Cloudflare Pages settings
      DB = context.env.DB as D1Database;
      console.log("Accessing DB binding via getRequestContext");
    } catch (e) {
      console.error("Failed to get request context (ensure running in Cloudflare environment):", e);
      return NextResponse.json({ error: "Failed to access Cloudflare context" }, { status: 500 });
    }

    if (!DB) {
      console.error("Database binding 'DB' not found in context.env.");
      return NextResponse.json({ error: "Database binding not found" }, { status: 500 });
    }
    console.log("Database binding 'DB' found.");

    // SQL query to get stories and their coverage
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

    console.log("Executing stories query...");
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
    console.log(`Query success: ${storiesResult.success}, Found ${storiesResult?.results?.length ?? 0} rows.`);

    if (!storiesResult.success) {
        console.error("Database query failed:", storiesResult.error);
        return NextResponse.json({ error: "Database query failed", details: storiesResult.error }, { status: 500 });
    }

    if (!storiesResult.results || storiesResult.results.length === 0) {
      console.log("No story results found.");
      return NextResponse.json({ blindspots: [] });
    }

    console.log("Processing story results...");
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
      // Ensure bias_classification is treated as a string key
      const biasKey = String(row.bias_classification);
      // Ensure article_count is treated as a number
      const count = Number(row.article_count) || 0;
      storyData.coverage[biasKey] = (storyData.coverage[biasKey] || 0) + count;
      storyData.total += count;
    }
    console.log(`Processed ${storiesMap.size} unique stories.`);

    // Identify blindspots
    const blindspots: BlindspotStory[] = [];

    console.log("Identifying blindspots...");
    for (const [id, data] of storiesMap.entries()) {
      // Skip stories with too few articles (e.g., less than 3)
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
      const dominantPercentage = data.total > 0 ? (dominantCount / data.total) : 0;

      // If the dominant bias exceeds our threshold, it's a blindspot
      if (dominantPercentage >= threshold) {
        blindspots.push({
          ...data.story,
          bias_distribution: data.coverage,
          total_articles: data.total,
          dominant_bias: dominantBias,
          dominant_percentage: dominantPercentage // Store as fraction (0-1)
        });
      }
    }
    console.log(`Identified ${blindspots.length} blindspots meeting threshold ${threshold}.`);

    // Sort by dominant percentage (most skewed first) and limit results
    blindspots.sort((a, b) => b.dominant_percentage - a.dominant_percentage);
    const limitedBlindspots = blindspots.slice(0, limit);
    console.log(`Returning ${limitedBlindspots.length} blindspots.`);

    return NextResponse.json({ blindspots: limitedBlindspots });

  } catch (error) {
    console.error("Error fetching blindspots:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    // Add stack trace if available and in development mode potentially
    const errorDetails = error instanceof Error ? { message: error.message, stack: error.stack } : { message: errorMessage };
    return NextResponse.json({ error: "Failed to fetch blindspots", details: errorDetails }, { status: 500 });
  }
}
