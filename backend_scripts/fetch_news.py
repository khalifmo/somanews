import feedparser
import requests
from bs4 import BeautifulSoup
import subprocess
import json
from datetime import datetime
import sqlite3 # Using sqlite3 to interact with the local D1 file directly for simplicity
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

# Define the path to the local D1 database file
# Adjust this path based on where wrangler stores the local D1 data
DB_PATH = "/home/ubuntu/somalia_news_nextjs/.wrangler/state/v3/d1/somalia_news_db/db.sqlite"
PROJECT_DIR = "/home/ubuntu/somalia_news_nextjs"

def run_sql(sql, params=()):
    """Executes SQL against the local SQLite DB file."""
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute(sql, params)
        conn.commit()
        last_id = cursor.lastrowid
        conn.close()
        logging.debug(f"Executed SQL: {sql} with params: {params}")
        return last_id
    except sqlite3.Error as e:
        logging.error(f"SQLite error executing 
SQL: {sql}
Params: {params}
Error: {e}")
        return None

def query_sql(sql, params=()):
    """Queries SQL against the local SQLite DB file."""
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute(sql, params)
        results = cursor.fetchall()
        conn.close()
        logging.debug(f"Queried SQL: {sql} with params: {params}. Results: {len(results)}")
        return results
    except sqlite3.Error as e:
        logging.error(f"SQLite error querying 
SQL: {sql}
Params: {params}
Error: {e}")
        return []

def fetch_rss(source):
    """Fetches articles from an RSS feed."""
    articles = []
    try:
        feed = feedparser.parse(source["rss_url"])
        for entry in feed.entries:
            article = {
                "source_id": source["id"],
                "url": entry.link,
                "title": entry.title,
                "content_snippet": entry.get("summary", ""),
                "published_date": datetime(*entry.published_parsed[:6]) if hasattr(entry, "published_parsed") else datetime.now(),
                "fetched_date": datetime.now()
            }
            # Basic cleaning
            if article["content_snippet"]:
                soup = BeautifulSoup(article["content_snippet"], "html.parser")
                article["content_snippet"] = soup.get_text(separator=" ", strip=True)
            articles.append(article)
        logging.info(f"Fetched {len(articles)} articles from RSS: {source['name']}")
    except Exception as e:
        logging.error(f"Error fetching RSS feed for {source['name']} ({source['rss_url']}): {e}")
    return articles

def fetch_scrape(source):
    """Fetches articles by scraping (placeholder - needs specific implementation per site)."""
    articles = []
    logging.warning(f"Scraping not implemented for {source['name']}. Skipping.")
    # Example structure if implemented:
    # try:
    #     response = requests.get(source["url"], timeout=10)
    #     response.raise_for_status()
    #     soup = BeautifulSoup(response.content, "html.parser")
    #     # --- Add site-specific scraping logic here --- 
    #     # Find article links, titles, snippets, dates
    #     # Create article dictionaries similar to fetch_rss
    #     logging.info(f"Scraped X articles from {source['name']}")
    # except Exception as e:
    #     logging.error(f"Error scraping {source['name']} ({source['url']}): {e}")
    return articles

def insert_articles(articles):
    """Inserts new articles into the database, avoiding duplicates."""
    inserted_count = 0
    skipped_count = 0
    for article in articles:
        # Check if URL already exists
        exists = query_sql("SELECT 1 FROM articles WHERE url = ?", (article["url"],))
        if not exists:
            sql = """
            INSERT INTO articles (source_id, url, title, content_snippet, published_date, fetched_date)
            VALUES (?, ?, ?, ?, ?, ?)
            """
            params = (
                article["source_id"],
                article["url"],
                article["title"],
                article["content_snippet"],
                article["published_date"],
                article["fetched_date"]
            )
            if run_sql(sql, params) is not None:
                inserted_count += 1
            else:
                 skipped_count += 1 # Error during insert
        else:
            skipped_count += 1
            logging.debug(f"Skipping duplicate article: {article['url']}")
    logging.info(f"Inserted {inserted_count} new articles, skipped {skipped_count} duplicates/errors.")

def main():
    logging.info("Starting news fetching process...")
    
    # Ensure the DB directory exists
    db_dir = os.path.dirname(DB_PATH)
    if not os.path.exists(db_dir):
        logging.error(f"Database directory does not exist: {db_dir}")
        logging.error("Please run 'wrangler d1 execute DB --local --file=migrations/0001_initial.sql' first.")
        return
        
    # Check if the DB file exists
    if not os.path.exists(DB_PATH):
        logging.error(f"Database file does not exist: {DB_PATH}")
        logging.error("Please run 'wrangler d1 execute DB --local --file=migrations/0001_initial.sql' first.")
        return

    sources_data = query_sql("SELECT id, name, url, rss_url, bias_classification FROM sources")
    if not sources_data:
        logging.warning("No sources found in the database.")
        return

    sources = [
        {"id": row[0], "name": row[1], "url": row[2], "rss_url": row[3], "bias_classification": row[4]}
        for row in sources_data
    ]

    all_new_articles = []
    for source in sources:
        logging.info(f"Fetching from source: {source['name']}")
        if source["rss_url"]:
            articles = fetch_rss(source)
        else:
            # Placeholder for scraping if needed
            articles = fetch_scrape(source)
        
        if articles:
            insert_articles(articles)
            # Update last_checked timestamp for the source
            run_sql("UPDATE sources SET last_checked = ? WHERE id = ?", (datetime.now(), source["id"]))
        else:
            logging.warning(f"No articles fetched for source: {source['name']}")

    logging.info("News fetching process completed.")

if __name__ == "__main__":
    main()

