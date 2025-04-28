import feedparser
import requests
import logging
import datetime
import time
import re
import os
import subprocess
import shlex
import json
from bs4 import BeautifulSoup
from urllib.parse import urlparse

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[logging.StreamHandler()]
)

# Get database name from environment variable
DB_NAME = os.environ.get('PROD_DB_NAME')
if not DB_NAME:
    logging.error("PROD_DB_NAME environment variable not set.")
    exit(1)

# Sources to fetch (these will come from the database in the full version)
SOURCES = [
    {
        "id": 1,
        "name": "Horseed Media",
        "url": "https://horseedmedia.net/",
        "rss_url": "https://horseedmedia.net/feed/",
        "bias_classification": "Independent Local"
    },
    {
        "id": 2,
        "name": "SONNA",
        "url": "https://sonna.so/en/",
        "rss_url": "https://sonna.so/en/feed/",
        "bias_classification": "Gov/Official"
    },
    {
        "id": 3,
        "name": "Hiiraan Online",
        "url": "https://www.hiiraan.com/",
        "rss_url": "https://www.hiiraan.com/rss/somali-news-rss.xml",
        "bias_classification": "Independent Local"
    },
    {
        "id": 4,
        "name": "Halqabsi News",
        "url": "https://halqabsinews.com/",
        "rss_url": "https://halqabsinews.com/feed/",
        "bias_classification": "Regional"
    }
]

def run_sql(sql, params=() ):
    """Executes SQL against the remote Cloudflare D1 database using wrangler CLI."""
    if not DB_NAME:
        logging.error("PROD_DB_NAME environment variable not set.")
        return None
    
    try:
        # WARNING: Basic substitution, not safe for user input!
        formatted_sql = sql.replace("?", "{}").format(*[repr(p) for p in params])
    except Exception as e:
        logging.error(f"Error formatting SQL: {sql} with params {params}: {e}")
        return None

    command = [
        'wrangler',
        'd1',
        'execute',
        DB_NAME,
        '--remote',
        '--command',
        formatted_sql
    ]
    logging.info(f"Executing Wrangler command: {' '.join(shlex.quote(c) for c in command)}")
    try:
        # Run the wrangler command via subprocess
        result = subprocess.run(command, capture_output=True, text=True, check=True, encoding='utf-8')
        logging.info(f"Wrangler stdout: {result.stdout}")
        return True # Indicate success
    except subprocess.CalledProcessError as e:
        logging.error(f"Wrangler command failed: {e}\nStderr: {e.stderr}")
        return None
    except Exception as e:
        logging.error(f"Error running subprocess: {e}")
        return None

def query_sql(sql, params=()):
    """Queries SQL against the remote Cloudflare D1 database using wrangler CLI and returns results."""
    if not DB_NAME:
        logging.error("PROD_DB_NAME environment variable not set.")
        return []
    
    try:
        # WARNING: Basic substitution, not safe for user input!
        formatted_sql = sql.replace("?", "{}").format(*[repr(p) for p in params])
    except Exception as e:
        logging.error(f"Error formatting SQL: {sql} with params {params}: {e}")
        return []

    command = [
        'wrangler',
        'd1',
        'execute',
        DB_NAME,
        '--remote',
        '--json', # Add --json flag to get results back
        '--command',
        formatted_sql
    ]
    logging.info(f"Executing Wrangler command: {' '.join(shlex.quote(c) for c in command)}")
    try:
        # Run the wrangler command via subprocess
        result = subprocess.run(command, capture_output=True, text=True, check=True, encoding='utf-8')
        # Parse the JSON output from wrangler
        output = json.loads(result.stdout)
        # D1 JSON output structure might be nested, adjust parsing
        return output[0]['results'] if output and len(output) > 0 and 'results' in output[0] else []
    except subprocess.CalledProcessError as e:
        logging.error(f"Wrangler command failed: {e}\nStderr: {e.stderr}")
        return []
    except Exception as e:
        logging.error(f"Error running subprocess or parsing JSON: {e}")
        return []

def clean_html(html_content):
    """Remove HTML tags and clean up text."""
    if not html_content:
        return ""
    soup = BeautifulSoup(html_content, 'html.parser')
    text = soup.get_text(separator=' ', strip=True)
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def fetch_rss(source):
    """Fetch articles from an RSS feed."""
    articles = []
    try:
        logging.info(f"Fetching RSS from {source['name']}: {source['rss_url']}")
        feed = feedparser.parse(source['rss_url'])
        
        for entry in feed.entries:
            # Extract data from feed entry
            title = entry.get('title', '').strip()
            link = entry.get('link', '').strip()
            
            if not title or not link:
                continue
                
            # Get content or summary
            content = ""
            if 'content' in entry:
                content = entry[0].get('value', '')
            elif 'summary' in entry:
                content = entry.get('summary', '')
                
            # Clean content
            content_snippet = clean_html(content)[:500]  # Limit snippet length
            
            # Get published date
            published_date = None
            if 'published_parsed' in entry and entry.published_parsed:
                published_date = datetime.datetime(*entry.published_parsed[:6])
            else:
                published_date = datetime.datetime.now()
                
            articles.append({
                'source_id': source['id'],
                'url': link,
                'title': title,
                'content_snippet': content_snippet,
                'full_content': content,
                'published_date': published_date.isoformat(),
                'fetched_date': datetime.datetime.now().isoformat()
            })
            
        logging.info(f"Fetched {len(articles)} articles from {source['name']}")
        return articles
    except Exception as e:
        logging.error(f"Error fetching RSS from {source['name']}: {e}")
        return []

def fetch_scrape(source):
    """Placeholder for web scraping non-RSS sources."""
    # This would be implemented for sources without RSS feeds
    # For example, scraping Al Jazeera or BBC Somalia pages
    logging.info(f"Scraping not implemented for {source['name']}")
    return []

def insert_articles(articles):
    """Insert new articles into the database, avoiding duplicates."""
    inserted = 0
    for article in articles:
        # Check if article already exists
        existing = query_sql(
            "SELECT id FROM articles WHERE url = ?",
            (article['url'],)
        )
        
        if existing:
            logging.info(f"Article already exists: {article['title']}")
            continue
            
        # Insert new article
        success = run_sql(
            """
            INSERT INTO articles 
            (source_id, url, title, content_snippet, full_content, published_date, fetched_date, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            """,
            (
                article['source_id'],
                article['url'],
                article['title'],
                article['content_snippet'],
                article['full_content'],
                article['published_date'],
                article['fetched_date']
            )
        )
        
        if success:
            inserted += 1
        else:
            logging.error(f"Failed to insert article: {article['title']}")
    
    return inserted

def update_source_timestamp(source_id):
    """Update the last_checked timestamp for a source."""
    run_sql(
        "UPDATE sources SET last_checked = CURRENT_TIMESTAMP WHERE id = ?",
        (source_id,)
    )

def main():
    """Main function to fetch news from all sources."""
    logging.info("Starting news fetching process")
    
    total_articles = 0
    for source in SOURCES:
        articles = []
        
        # Use RSS feed if available
        if source.get('rss_url'):
            articles = fetch_rss(source)
        else:
            # Fall back to scraping
            articles = fetch_scrape(source)
            
        # Insert articles into database
        inserted = insert_articles(articles)
        total_articles += inserted
        
        # Update source timestamp
        update_source_timestamp(source['id'])
        
        logging.info(f"Inserted {inserted} new articles from {source['name']}")
        
        # Be nice to servers
        time.sleep(2)
    
    logging.info(f"Completed news fetching. Total new articles: {total_articles}")

if __name__ == "__main__":
    main()
