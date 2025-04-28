import sqlite3
import json
import numpy as np
from datetime import datetime, timedelta
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

# Define the path to the local D1 database file
DB_PATH = "/home/ubuntu/somalia_news_nextjs/.wrangler/state/v3/d1/somalia_news_db/db.sqlite"

# Since we can't use sentence-transformers due to resource constraints,
# we'll implement a simpler clustering approach based on text similarity

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
        logging.error(f"SQLite error executing SQL: {sql}, Params: {params}, Error: {e}")
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
        logging.error(f"SQLite error querying SQL: {sql}, Params: {params}, Error: {e}")
        return []

def get_unclustered_articles(days=7):
    """Get articles that haven't been assigned to a story yet."""
    cutoff_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d %H:%M:%S')
    sql = """
    SELECT id, title, content_snippet, source_id 
    FROM articles 
    WHERE story_id IS NULL AND fetched_date > ?
    ORDER BY fetched_date DESC
    """
    return query_sql(sql, (cutoff_date,))

def get_recent_stories(days=7):
    """Get recent stories for potential matching."""
    cutoff_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d %H:%M:%S')
    sql = """
    SELECT id, representative_headline 
    FROM stories 
    WHERE last_updated_date > ?
    ORDER BY last_updated_date DESC
    """
    return query_sql(sql, (cutoff_date,))

def simple_text_similarity(text1, text2):
    """
    Calculate a simple text similarity score based on word overlap.
    This is a basic alternative to embedding-based similarity.
    """
    if not text1 or not text2:
        return 0
    
    # Convert to lowercase and split into words
    words1 = set(text1.lower().split())
    words2 = set(text2.lower().split())
    
    # Calculate Jaccard similarity
    intersection = len(words1.intersection(words2))
    union = len(words1.union(words2))
    
    if union == 0:
        return 0
    return intersection / union

def assign_to_story(article_id, story_id):
    """Assign an article to a story."""
    sql = "UPDATE articles SET story_id = ? WHERE id = ?"
    run_sql(sql, (story_id, article_id))

def create_new_story(headline, article_id):
    """Create a new story with the given headline."""
    now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    sql = """
    INSERT INTO stories (representative_headline, first_seen_date, last_updated_date)
    VALUES (?, ?, ?)
    """
    story_id = run_sql(sql, (headline, now, now))
    if story_id:
        assign_to_story(article_id, story_id)
    return story_id

def update_story_coverage():
    """Update the story_coverage table based on current article assignments."""
    # First, clear existing coverage data
    run_sql("DELETE FROM story_coverage")
    
    # Get all stories with articles
    stories = query_sql("""
        SELECT DISTINCT s.id 
        FROM stories s
        JOIN articles a ON s.id = a.story_id
    """)
    
    for (story_id,) in stories:
        # Get bias distribution for this story
        bias_counts = query_sql("""
            SELECT src.bias_classification, COUNT(a.id) as article_count
            FROM articles a
            JOIN sources src ON a.source_id = src.id
            WHERE a.story_id = ?
            GROUP BY src.bias_classification
        """, (story_id,))
        
        # Insert coverage data
        for bias, count in bias_counts:
            sql = """
            INSERT INTO story_coverage (story_id, bias_classification, article_count)
            VALUES (?, ?, ?)
            """
            run_sql(sql, (story_id, bias, count))
    
    logging.info(f"Updated coverage data for {len(stories)} stories")

def update_story_timestamps(story_id):
    """Update the last_updated_date for a story."""
    now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    sql = "UPDATE stories SET last_updated_date = ? WHERE id = ?"
    run_sql(sql, (now, story_id))

def cluster_articles():
    """
    Cluster unclustered articles into stories based on text similarity.
    This is a simplified version that doesn't require sentence-transformers.
    """
    logging.info("Starting article clustering process...")
    
    # Get unclustered articles
    unclustered = get_unclustered_articles()
    if not unclustered:
        logging.info("No unclustered articles found.")
        return
    
    logging.info(f"Found {len(unclustered)} unclustered articles.")
    
    # Get recent stories for matching
    recent_stories = get_recent_stories()
    logging.info(f"Found {len(recent_stories)} recent stories for potential matching.")
    
    # Process each unclustered article
    for article_id, title, snippet, source_id in unclustered:
        article_text = f"{title} {snippet}" if snippet else title
        best_match = None
        best_score = 0.5  # Threshold for considering a match
        
        # Try to match with existing stories
        for story_id, headline in recent_stories:
            similarity = simple_text_similarity(article_text, headline)
            if similarity > best_score:
                best_score = similarity
                best_match = story_id
        
        if best_match:
            # Assign to existing story
            assign_to_story(article_id, best_match)
            update_story_timestamps(best_match)
            logging.info(f"Assigned article {article_id} to existing story {best_match} with score {best_score:.2f}")
        else:
            # Create new story
            new_story_id = create_new_story(title, article_id)
            if new_story_id:
                logging.info(f"Created new story {new_story_id} for article {article_id}")
                # Add to recent stories for subsequent matches
                recent_stories.append((new_story_id, title))
    
    # Update story coverage statistics
    update_story_coverage()
    
    logging.info("Article clustering process completed.")

def main():
    logging.info("Starting news clustering process...")
    cluster_articles()
    logging.info("News clustering process completed.")

if __name__ == "__main__":
    main()
