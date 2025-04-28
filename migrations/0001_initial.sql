-- Migration number: 0001 	 2025-04-28T16:20:32.000Z
-- Somalia News Website Database Schema

-- Drop existing tables if they exist
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS story_coverage;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS stories;
DROP TABLE IF EXISTS sources;

-- Sources table - stores information about news sources
CREATE TABLE IF NOT EXISTS sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  rss_url TEXT,
  bias_classification TEXT NOT NULL, -- 'Gov/Official', 'Regional', 'Independent Local', 'Pan-African', 'International', 'Western'
  logo_url TEXT,
  last_checked DATETIME,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Stories table - represents clustered news events
CREATE TABLE IF NOT EXISTS stories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  representative_headline TEXT NOT NULL,
  summary TEXT,
  first_seen_date DATETIME NOT NULL,
  last_updated_date DATETIME NOT NULL,
  topic_tags TEXT, -- Comma-separated tags
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Articles table - individual news articles from sources
CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_id INTEGER NOT NULL,
  url TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content_snippet TEXT,
  full_content TEXT,
  published_date DATETIME,
  fetched_date DATETIME NOT NULL,
  story_id INTEGER,
  embedding TEXT, -- JSON string of embedding vector
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (source_id) REFERENCES sources(id),
  FOREIGN KEY (story_id) REFERENCES stories(id)
);

-- StoryCoverage table - tracks bias distribution per story
CREATE TABLE IF NOT EXISTS story_coverage (
  story_id INTEGER NOT NULL,
  bias_classification TEXT NOT NULL, -- 'Gov/Official', 'Regional', 'Independent Local', 'Pan-African', 'International', 'Western'
  article_count INTEGER NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (story_id, bias_classification),
  FOREIGN KEY (story_id) REFERENCES stories(id)
);

-- Users table - for user authentication and profiles
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  email TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Comments table - user comments on stories
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  story_id INTEGER NOT NULL,
  content TEXT NOT NULL,
  timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  moderation_status TEXT DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  moderation_flags TEXT, -- JSON string of flags
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (story_id) REFERENCES stories(id)
);

-- Likes table - tracks user likes on stories
CREATE TABLE IF NOT EXISTS likes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  story_id INTEGER NOT NULL,
  timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (story_id) REFERENCES stories(id),
  UNIQUE(user_id, story_id)
);

-- Create indexes for performance
CREATE INDEX idx_articles_story_id ON articles(story_id);
CREATE INDEX idx_articles_source_id ON articles(source_id);
CREATE INDEX idx_articles_published_date ON articles(published_date);
CREATE INDEX idx_stories_first_seen_date ON stories(first_seen_date);
CREATE INDEX idx_stories_last_updated_date ON stories(last_updated_date);
CREATE INDEX idx_comments_story_id ON comments(story_id);
CREATE INDEX idx_comments_user_id ON comments(user_id);
CREATE INDEX idx_likes_story_id ON likes(story_id);
CREATE INDEX idx_likes_user_id ON likes(user_id);

-- Insert initial sample sources
INSERT INTO sources (name, url, rss_url, bias_classification, logo_url) VALUES 
  ('Horseed Media', 'https://horseedmedia.net/', 'https://horseedmedia.net/feed/', 'Independent Local', '/images/sources/horseed.png'),
  ('SONNA', 'https://sonna.so/en/', 'https://sonna.so/en/feed/', 'Gov/Official', '/images/sources/sonna.png'),
  ('Al Jazeera - Somalia', 'https://www.aljazeera.com/where/somalia/', NULL, 'International', '/images/sources/aljazeera.png'),
  ('BBC News - Somalia', 'https://www.bbc.com/news/topics/cnx753jejqwt', NULL, 'Western', '/images/sources/bbc.png');
