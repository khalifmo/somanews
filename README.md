# Somalia News AI - Ground News Style

A modern news aggregation platform for Somalia news, inspired by Ground News. This project aggregates news from multiple Somali and international sources, clusters related stories, and provides bias analysis based on source classification.

## Project Overview

This project aims to create a news aggregation website for Somalia that:

1. Collects news from diverse sources (local and international)
2. Groups related articles into stories
3. Shows bias distribution across different source types
4. Highlights "blindspots" (stories with skewed coverage)
5. Allows user interaction (comments, likes)

## Technology Stack

- **Frontend**: Next.js with Tailwind CSS
- **Backend**: 
  - Next.js API Routes (TypeScript)
  - Python scripts for news fetching and clustering
- **Database**: Cloudflare D1 (SQLite-compatible)
- **Deployment**: Cloudflare Pages/Workers

## Project Structure

```
somalia_news_nextjs/
├── backend_scripts/           # Python scripts for news processing
│   ├── fetch_news.py          # Fetches articles from RSS feeds
│   └── cluster_news.py        # Clusters articles into stories
├── migrations/                # Database migrations
│   └── 0001_initial.sql       # Initial schema setup
├── src/
│   ├── app/                   # Next.js app router
│   │   ├── api/               # API routes
│   │   │   ├── blindspots/    # Blindspot detection API
│   │   │   ├── sources/       # Sources management API
│   │   │   └── stories/       # Stories and articles API
│   │   ├── page.tsx           # Homepage
│   │   └── ...                # Other pages
│   ├── components/            # React components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── wrangler.toml              # Cloudflare configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── ...                        # Other configuration files
```

## Key Components

### 1. Database Schema

The database schema (in `migrations/0001_initial.sql`) defines the following tables:

- **sources**: News sources with bias classification
- **stories**: Clustered news events
- **articles**: Individual news articles from sources
- **story_coverage**: Tracks bias distribution per story
- **users**: User authentication and profiles
- **comments**: User comments on stories
- **likes**: User likes on stories

### 2. Backend Scripts

#### News Fetching (`fetch_news.py`)

This script:
- Retrieves articles from RSS feeds
- Handles database interactions
- Prevents duplicate articles
- Updates source timestamps

Usage:
```bash
cd somalia_news_nextjs
python backend_scripts/fetch_news.py
```

#### Article Clustering (`cluster_news.py`)

This script:
- Groups related articles into stories based on text similarity
- Creates new stories when unique content is detected
- Updates story coverage statistics
- Maintains proper timestamps for stories

Usage:
```bash
cd somalia_news_nextjs
python backend_scripts/cluster_news.py
```

### 3. API Routes

#### Stories API (`/api/stories`)

- `GET /api/stories`: Returns a list of stories with bias distribution
- `GET /api/stories/[storyId]`: Returns details of a specific story with its articles grouped by bias

#### Sources API (`/api/sources`)

- `GET /api/sources`: Returns a list of sources with their bias classification
- `POST /api/sources`: Adds or updates a source

#### Blindspots API (`/api/blindspots`)

- `GET /api/blindspots`: Returns stories with skewed coverage (dominated by one bias category)

## Bias Classification Framework

Unlike Ground News' Left-Center-Right classification, this project uses a Somalia-specific framework:

1. **Government/Official**: Sources representing the federal government's perspective
2. **Regional**: Sources focused on specific regions or federal member states
3. **Independent Local**: Somali sources operating independently
4. **Pan-African**: African news sources covering Somalia
5. **International**: Non-African international sources
6. **Western**: Sources from Western countries

## Setup and Installation

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- Wrangler CLI (for Cloudflare integration)

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/somalia-news-ai.git
cd somalia-news-ai
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Configure the local database:
```bash
npx wrangler d1 execute DB --local --file=migrations/0001_initial.sql
```

5. Run the development server:
```bash
npm run dev
```

6. Fetch initial news data:
```bash
python backend_scripts/fetch_news.py
python backend_scripts/cluster_news.py
```

### Production Deployment

1. Create a Cloudflare D1 database:
```bash
npx wrangler d1 create somalia_news_db_prod
```

2. Update `wrangler.toml` with your production database ID.

3. Deploy to Cloudflare Pages:
```bash
npm run deploy
```

## Scheduled Tasks

For production, you'll need to set up scheduled tasks to regularly:

1. Fetch new articles:
```bash
python backend_scripts/fetch_news.py
```

2. Cluster articles into stories:
```bash
python backend_scripts/cluster_news.py
```

This can be done using Cloudflare Workers Cron Triggers or a separate scheduling service.

## Future Enhancements

1. **UI Components**: Complete the React components for the frontend
2. **Advanced Clustering**: Implement embedding-based clustering for better accuracy
3. **User Authentication**: Add user registration and login functionality
4. **Mobile App**: Develop a mobile app version
5. **More Sources**: Add more Somalia news sources
6. **Translation**: Add automatic translation for non-English sources

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Ground News (https://ground.news)
- Uses data from various Somalia news sources
