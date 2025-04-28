# Somalia News AI - Developer Guide

This document provides detailed technical information for developers working on the Somalia News AI project.

## Architecture Overview

The Somalia News AI project follows a hybrid architecture:

1. **Frontend**: Next.js application with React components and Tailwind CSS
2. **Backend**: 
   - Next.js API Routes (TypeScript) for serving data
   - Python scripts for news fetching and clustering
3. **Database**: Cloudflare D1 (SQLite-compatible)

## Database Schema Details

### Sources Table
```sql
CREATE TABLE sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  rss_url TEXT,
  bias_classification TEXT NOT NULL, 
  logo_url TEXT,
  last_checked DATETIME,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

The `bias_classification` field uses one of the following values:
- 'Gov/Official'
- 'Regional'
- 'Independent Local'
- 'Pan-African'
- 'International'
- 'Western'

### Stories Table
```sql
CREATE TABLE stories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  representative_headline TEXT NOT NULL,
  summary TEXT,
  first_seen_date DATETIME NOT NULL,
  last_updated_date DATETIME NOT NULL,
  topic_tags TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

### Articles Table
```sql
CREATE TABLE articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_id INTEGER NOT NULL,
  url TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content_snippet TEXT,
  full_content TEXT,
  published_date DATETIME,
  fetched_date DATETIME NOT NULL,
  story_id INTEGER,
  embedding TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (source_id) REFERENCES sources(id),
  FOREIGN KEY (story_id) REFERENCES stories(id)
);
```

### Story Coverage Table
```sql
CREATE TABLE story_coverage (
  story_id INTEGER NOT NULL,
  bias_classification TEXT NOT NULL,
  article_count INTEGER NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (story_id, bias_classification),
  FOREIGN KEY (story_id) REFERENCES stories(id)
);
```

## Backend Scripts Technical Details

### fetch_news.py

This script fetches news articles from various sources. Key functions:

- `fetch_rss(source)`: Fetches articles from RSS feeds using feedparser
- `fetch_scrape(source)`: Placeholder for web scraping (needs implementation per site)
- `insert_articles(articles)`: Inserts new articles into the database, avoiding duplicates
- `main()`: Orchestrates the fetching process

The script connects directly to the SQLite database file created by Cloudflare D1 in local development mode.

### cluster_news.py

This script clusters articles into stories based on text similarity. Key functions:

- `get_unclustered_articles(days=7)`: Retrieves articles not yet assigned to a story
- `get_recent_stories(days=7)`: Gets recent stories for potential matching
- `simple_text_similarity(text1, text2)`: Calculates Jaccard similarity between texts
- `assign_to_story(article_id, story_id)`: Assigns an article to a story
- `create_new_story(headline, article_id)`: Creates a new story
- `update_story_coverage()`: Updates the story_coverage table
- `cluster_articles()`: Main clustering algorithm

## API Routes Documentation

### Stories API

#### GET /api/stories
Returns a list of stories with bias distribution.

**Query Parameters:**
- `limit` (optional): Maximum number of stories to return (default: 20)
- `offset` (optional): Number of stories to skip (default: 0)

**Response:**
```json
{
  "stories": [
    {
      "id": 1,
      "representative_headline": "Example Headline",
      "summary": "Optional summary text",
      "first_seen_date": "2025-04-28T12:00:00Z",
      "last_updated_date": "2025-04-28T14:30:00Z",
      "topic_tags": "politics,security",
      "bias_distribution": {
        "Gov/Official": 2,
        "Independent Local": 5,
        "Western": 3
      },
      "total_articles": 10
    },
    // More stories...
  ]
}
```

#### GET /api/stories/[storyId]
Returns details of a specific story with its articles grouped by bias.

**Response:**
```json
{
  "story": {
    "id": 1,
    "representative_headline": "Example Headline",
    "summary": "Optional summary text",
    "first_seen_date": "2025-04-28T12:00:00Z",
    "last_updated_date": "2025-04-28T14:30:00Z",
    "topic_tags": "politics,security"
  },
  "articles": [
    {
      "id": 1,
      "title": "Article Title",
      "content_snippet": "Article snippet...",
      "url": "https://example.com/article",
      "published_date": "2025-04-28T12:00:00Z",
      "fetched_date": "2025-04-28T12:30:00Z",
      "source_id": 1,
      "source_name": "Source Name",
      "source_bias": "Independent Local"
    },
    // More articles...
  ],
  "articlesByBias": {
    "Gov/Official": [
      // Articles with Gov/Official bias
    ],
    "Independent Local": [
      // Articles with Independent Local bias
    ],
    // More bias categories...
  },
  "bias_distribution": [
    {
      "bias_classification": "Gov/Official",
      "article_count": 2
    },
    // More bias categories...
  ]
}
```

### Sources API

#### GET /api/sources
Returns a list of sources with their bias classification.

**Response:**
```json
{
  "sources": [
    {
      "id": 1,
      "name": "Horseed Media",
      "url": "https://horseedmedia.net/",
      "rss_url": "https://horseedmedia.net/feed/",
      "bias_classification": "Independent Local",
      "logo_url": "/images/sources/horseed.png",
      "last_checked": "2025-04-28T12:00:00Z"
    },
    // More sources...
  ],
  "bias_stats": [
    {
      "bias_classification": "Independent Local",
      "source_count": 5,
      "rss_count": 3
    },
    // More bias categories...
  ]
}
```

#### POST /api/sources
Adds or updates a source.

**Request Body:**
```json
{
  "name": "New Source",
  "url": "https://example.com",
  "rss_url": "https://example.com/feed",
  "bias_classification": "Independent Local",
  "logo_url": "/images/sources/newsource.png"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Source added",
  "sourceId": 5
}
```

### Blindspots API

#### GET /api/blindspots
Returns stories with skewed coverage (dominated by one bias category).

**Query Parameters:**
- `limit` (optional): Maximum number of blindspots to return (default: 10)
- `threshold` (optional): Minimum percentage for dominant bias (default: 0.7)

**Response:**
```json
{
  "blindspots": [
    {
      "id": 3,
      "representative_headline": "Example Blindspot",
      "summary": "Optional summary text",
      "first_seen_date": "2025-04-28T12:00:00Z",
      "last_updated_date": "2025-04-28T14:30:00Z",
      "topic_tags": "politics,security",
      "bias_distribution": {
        "Gov/Official": 8,
        "Independent Local": 1
      },
      "total_articles": 9,
      "dominant_bias": "Gov/Official",
      "dominant_percentage": 0.89
    },
    // More blindspots...
  ]
}
```

## Planned UI Components

### StoryCard Component
Displays a story card on the homepage with:
- Headline
- Bias distribution bar
- Source count
- Timestamp

### BiasBar Component
Visualizes the bias distribution for a story:
- Segmented bar showing proportion of sources from each category
- Color-coded by bias category
- Tooltip with detailed counts

### StoryDetailView Component
Displays the full story view with:
- Story overview
- Bias distribution visualization
- Articles grouped by bias category
- Comments section

### SourceArticleCard Component
Displays an individual article within a story:
- Source name/logo
- Headline
- Snippet
- Link to original
- Timestamp

## Development Workflow

1. **Local Development**:
   - Run `npm run dev` to start the Next.js development server
   - Run Python scripts manually to fetch and cluster news

2. **Database Operations**:
   - Reset database: `npx wrangler d1 execute DB --local --file=migrations/0001_initial.sql`
   - Apply migrations: `npx wrangler d1 migrations apply DB --local`
   - Reset local DB: `rm -rf .wrangler/state/v3` then re-execute SQL file

3. **Testing API Routes**:
   - Use browser or tools like Postman to test API endpoints
   - Example: `http://localhost:3000/api/stories`

4. **Deployment**:
   - Update `wrangler.toml` with production database ID
   - Run `npm run deploy` to deploy to Cloudflare Pages

## Troubleshooting

### Common Issues

1. **Database Connection Issues**:
   - Ensure the D1 database is properly initialized
   - Check the path to the SQLite file in backend scripts
   - Verify `wrangler.toml` configuration

2. **API Route Errors**:
   - Check browser console for error messages
   - Verify database binding is properly configured
   - Check for TypeScript errors in API route files

3. **News Fetching Issues**:
   - Verify source URLs and RSS feeds are accessible
   - Check for changes in source website structures
   - Look for error logs in the fetch_news.py output

## Contributing Guidelines

1. **Code Style**:
   - Follow TypeScript best practices for API routes
   - Use PEP 8 style guide for Python scripts
   - Use Tailwind CSS utility classes for styling

2. **Adding New Sources**:
   - Update the sources table with new source information
   - Implement custom scraping logic if RSS is not available
   - Test the source with fetch_news.py before deployment

3. **Enhancing Clustering**:
   - Improve the similarity algorithm in cluster_news.py
   - Consider implementing embedding-based clustering if resources allow
   - Test with a diverse set of articles to ensure accuracy
