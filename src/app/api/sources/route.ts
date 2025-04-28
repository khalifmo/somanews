import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";
import { D1Database } from "@cloudflare/workers-types";

// Define the structure of a Source with bias information
interface Source {
  id: number;
  name: string;
  url: string;
  rss_url: string | null;
  bias_classification: string;
  logo_url: string | null;
  last_checked: string | null;
}

export const runtime = "edge"; // Specify edge runtime

// GET handler to fetch sources with their bias classification
export async function GET(request: NextRequest) {
  try {
    // Access the D1 database binding
    const context = getRequestContext();
    const DB = context.env.DB as D1Database;

    if (!DB) {
      return NextResponse.json({ error: "Database binding not found" }, { status: 500 });
    }

    // Fetch all sources with their bias classification
    const sourcesQuery = `
      SELECT id, name, url, rss_url, bias_classification, logo_url, last_checked
      FROM sources
      ORDER BY name ASC
    `;
    const sourcesResult = await DB.prepare(sourcesQuery).all<Source>();

    if (!sourcesResult.results) {
      return NextResponse.json({ sources: [] });
    }

    // Get bias distribution statistics
    const biasStatsQuery = `
      SELECT 
        bias_classification, 
        COUNT(DISTINCT id) as source_count,
        SUM(CASE WHEN rss_url IS NOT NULL THEN 1 ELSE 0 END) as rss_count
      FROM sources
      GROUP BY bias_classification
      ORDER BY source_count DESC
    `;
    const biasStatsResult = await DB.prepare(biasStatsQuery).all<{ 
      bias_classification: string; 
      source_count: number;
      rss_count: number;
    }>();

    return NextResponse.json({ 
      sources: sourcesResult.results,
      bias_stats: biasStatsResult.results || []
    });

  } catch (error) {
    console.error("Error fetching sources:", error);
    // Type assertion for error handling
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: "Failed to fetch sources", details: errorMessage }, { status: 500 });
  }
}

// POST handler to add a new source or update an existing one
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, url, rss_url, bias_classification, logo_url } = body;

    // Basic validation
    if (!name || !url || !bias_classification) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Access the D1 database binding
    const context = getRequestContext();
    const DB = context.env.DB as D1Database;

    if (!DB) {
      return NextResponse.json({ error: "Database binding not found" }, { status: 500 });
    }

    // Check if source already exists
    const existingSource = await DB.prepare("SELECT id FROM sources WHERE url = ?").bind(url).first<{ id: number }>();

    let sourceId;
    if (existingSource) {
      // Update existing source
      const updateQuery = `
        UPDATE sources
        SET name = ?, rss_url = ?, bias_classification = ?, logo_url = ?
        WHERE id = ?
      `;
      await DB.prepare(updateQuery).bind(name, rss_url || null, bias_classification, logo_url || null, existingSource.id).run();
      sourceId = existingSource.id;
    } else {
      // Insert new source
      const insertQuery = `
        INSERT INTO sources (name, url, rss_url, bias_classification, logo_url, last_checked)
        VALUES (?, ?, ?, ?, ?, NULL)
      `;
      const result = await DB.prepare(insertQuery).bind(name, url, rss_url || null, bias_classification, logo_url || null).run();
      sourceId = result.meta?.last_row_id;
    }

    return NextResponse.json({ 
      success: true, 
      message: existingSource ? "Source updated" : "Source added", 
      sourceId 
    });

  } catch (error) {
    console.error("Error adding/updating source:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: "Failed to add/update source", details: errorMessage }, { status: 500 });
  }
}
