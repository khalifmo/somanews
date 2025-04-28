import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";
import { D1Database } from "@cloudflare/workers-types";

// Define the structure of an Article with source information
interface Article {
  id: number;
  title: string;
  content_snippet: string | null;
  url: string;
  published_date: string | null;
  fetched_date: string;
  source_id: number;
  source_name: string;
  source_bias: string;
}

export const runtime = "edge"; // Specify edge runtime

// GET handler to fetch articles for a specific story
export async function GET(
  request: NextRequest,
  { params }: { params: { storyId: string } }
) {
  try {
    const storyId = parseInt(params.storyId, 10);
    
    if (isNaN(storyId)) {
      return NextResponse.json({ error: "Invalid story ID" }, { status: 400 });
    }

    // Access the D1 database binding
    const context = getRequestContext();
    const DB = context.env.DB as D1Database;

    if (!DB) {
      return NextResponse.json({ error: "Database binding not found" }, { status: 500 });
    }

    // First, get the story details
    const storyQuery = `
      SELECT id, representative_headline, summary, first_seen_date, last_updated_date, topic_tags
      FROM stories
      WHERE id = ?
    `;
    const storyResult = await DB.prepare(storyQuery).bind(storyId).first();

    if (!storyResult) {
      return NextResponse.json({ error: "Story not found" }, { status: 404 });
    }

    // Get all articles for this story with source information
    const articlesQuery = `
      SELECT 
        a.id, 
        a.title, 
        a.content_snippet, 
        a.url, 
        a.published_date, 
        a.fetched_date,
        a.source_id,
        s.name as source_name,
        s.bias_classification as source_bias
      FROM articles a
      JOIN sources s ON a.source_id = s.id
      WHERE a.story_id = ?
      ORDER BY a.published_date DESC, a.fetched_date DESC
    `;
    
    const articlesResult = await DB.prepare(articlesQuery).bind(storyId).all<Article>();

    // Get bias distribution for this story
    const biasQuery = `
      SELECT bias_classification, article_count
      FROM story_coverage
      WHERE story_id = ?
    `;
    
    const biasResult = await DB.prepare(biasQuery).bind(storyId).all<{
      bias_classification: string;
      article_count: number;
    }>();

    // Group articles by bias category
    const articlesByBias: { [key: string]: Article[] } = {};
    
    if (articlesResult.results) {
      for (const article of articlesResult.results) {
        if (!articlesByBias[article.source_bias]) {
          articlesByBias[article.source_bias] = [];
        }
        articlesByBias[article.source_bias].push(article);
      }
    }

    return NextResponse.json({
      story: storyResult,
      articles: articlesResult.results || [],
      articlesByBias,
      bias_distribution: biasResult.results || []
    });

  } catch (error) {
    console.error("Error fetching story articles:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: "Failed to fetch story articles", details: errorMessage }, { status: 500 });
  }
}
