import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";
import { D1Database } from "@cloudflare/workers-types";

// Define the structure of a Story with bias information
interface Story {
  id: number;
  representative_headline: string;
  summary: string | null;
  first_seen_date: string;
  last_updated_date: string;
  topic_tags: string | null;
  bias_distribution: { [key: string]: number }; // e.g., {"Gov/Official": 2, "Independent Local": 5}
  total_articles: number;
}

// Define the structure for bias coverage from the DB
interface BiasCoverage {
  bias_classification: string;
  article_count: number;
}

export const runtime = "edge"; // Specify edge runtime

// GET handler to fetch stories with bias distribution
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    // Access the D1 database binding
    const context = getRequestContext();
    const DB = context.env.DB as D1Database;

    if (!DB) {
      return NextResponse.json({ error: "Database binding not found" }, { status: 500 });
    }

    // Fetch recent stories
    const storiesQuery = `
      SELECT id, representative_headline, summary, first_seen_date, last_updated_date, topic_tags
      FROM stories
      ORDER BY last_updated_date DESC
      LIMIT ? OFFSET ?
    `;
    const storiesResult = await DB.prepare(storiesQuery).bind(limit, offset).all<{ id: number; representative_headline: string; summary: string | null; first_seen_date: string; last_updated_date: string; topic_tags: string | null; }>();

    if (!storiesResult.results) {
      return NextResponse.json({ stories: [] });
    }

    const stories: Story[] = [];
    const storyIds = storiesResult.results.map(s => s.id);

    if (storyIds.length === 0) {
        return NextResponse.json({ stories: [] });
    }

    // Fetch bias coverage for these stories
    // Using JSON_GROUP_OBJECT to aggregate bias counts per story directly in SQL
    // Note: D1 supports JSON functions
    const coverageQuery = `
        SELECT 
            story_id, 
            JSON_GROUP_OBJECT(bias_classification, article_count) as bias_distribution,
            SUM(article_count) as total_articles
        FROM story_coverage
        WHERE story_id IN (${storyIds.map(() => ":").join(", ")}) -- Use positional parameters
        GROUP BY story_id
    `;
    
    // Prepare positional parameters for the IN clause
    const coverageParams = storyIds;

    const coverageResult = await DB.prepare(coverageQuery).bind(...coverageParams).all<{ story_id: number; bias_distribution: string; total_articles: number; }>();

    const coverageMap = new Map<number, { bias_distribution: { [key: string]: number }; total_articles: number }>();
    if (coverageResult.results) {
      coverageResult.results.forEach(row => {
        try {
            // Parse the JSON string from JSON_GROUP_OBJECT
            const parsedDistribution = JSON.parse(row.bias_distribution);
            coverageMap.set(row.story_id, { bias_distribution: parsedDistribution, total_articles: row.total_articles });
        } catch (e) {
            console.error(`Failed to parse bias distribution for story ${row.story_id}: ${row.bias_distribution}`, e);
            coverageMap.set(row.story_id, { bias_distribution: {}, total_articles: row.total_articles });
        }
      });
    }

    // Combine story data with coverage data
    for (const storyData of storiesResult.results) {
      const coverage = coverageMap.get(storyData.id) || { bias_distribution: {}, total_articles: 0 };
      stories.push({
        ...storyData,
        bias_distribution: coverage.bias_distribution,
        total_articles: coverage.total_articles,
      });
    }

    return NextResponse.json({ stories });

  } catch (error) {
    console.error("Error fetching stories:", error);
    // Type assertion for error handling
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: "Failed to fetch stories", details: errorMessage }, { status: 500 });
  }
}

