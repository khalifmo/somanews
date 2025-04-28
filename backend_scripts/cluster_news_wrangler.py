import sqlite3
import json
import logging
import datetime
import os
import subprocess
import shlex
from collections import Counter

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

def run_sql(sql, params=()):
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

def get_unclustered_articles(days=7):
    """Get articles that haven't been assigned to a story yet."""
    cutoff_date = (datetime.datetime.now() - datetime.datetime.timedelta(days=days)).isoformat()
    
    return query_sql(
        """
        SELECT a.id, a.title, a.content_snippet, a.source_id, s.bias_classification
        FROM articles a
        JOIN sources s ON a.source_id = s.id
        WHERE a.story_id IS NULL AND a.fetched_date > ?
        ORDER BY a.fetched_date DESC
        """,
        (cutoff_date,)
    )

def get_recent_stories(days=7):
    """Get recent stories for potential matching."""
    cutoff_date = (datetime.datetime.now() - datetime.datetime.timedelta(days=days)).isoformat()
    
    return query_sql(
        """
        SELECT id, representative_headline
        FROM stories
        WHERE last_updated_date > ?
        """,
        (cutoff_date,)
    )

def simple_text_similarity(text1, text2):
    """Calculate simple Jaccard similarity between two texts."""
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
    return run_sql(
        """
        UPDATE articles
        SET story_id = ?
        WHERE id = ?
        """,
        (story_id, article_id)
    )

def create_new_story(headline, article_id):
    """Create a new story and assign the article to it."""
    now = datetime.datetime.now().isoformat()
    
    # Create story
    success = run_sql(
        """
        INSERT INTO stories
        (representative_headline, first_seen_date, last_updated_date, created_at)
        VALUES (?, ?, ?, CURRENT_TIMESTAMP)
        """,
        (headline, now, now)
    )
    
    if not success:
        logging.error(f"Failed to create new story for article {article_id}")
        return False
        
    # Get the new story ID
    new_stories = query_sql(
        """
        SELECT id FROM stories
        WHERE representative_headline = ?
        ORDER BY created_at DESC
        LIMIT 1
        """,
        (headline,)
    )
    
    if not new_stories:
        logging.error(f"Failed to retrieve new story ID for article {article_id}")
        return False
        
    new_story_id = new_stories[0]['id']
    
    # Assign article to the new story
    success = assign_to_story(article_id, new_story_id)
    
    if success:
        logging.info(f"Created new story {new_story_id} and assigned article {article_id}")
        return new_story_id
    else:
        logging.error(f"Failed to assign article {article_id} to new story {new_story_id}")
        return False

def update_story_coverage():
    """Update the story_coverage table based on current article assignments."""
    # Clear existing coverage data
    run_sql("DELETE FROM story_coverage")
    
    # Get all stories with their articles' bias classifications
    story_articles = query_sql(
        """
        SELECT a.story_id, s.bias_classification
        FROM articles a
        JOIN sources s ON a.source_id = s.id
        WHERE a.story_id IS NOT NULL
        """
    )
    
    # Count articles by story and bias
    coverage = {}
    for item in story_articles:
        story_id = item['story_id']
        bias = item['bias_classification']
        
        if story_id not in coverage:
            coverage[story_id] = Counter()
            
        coverage[story_id][bias] += 1
    
    # Insert coverage data
    now = datetime.datetime.now().isoformat()
    for story_id, bias_counts in coverage.items():
        for bias, count in bias_counts.items():
            run_sql(
                """
                INSERT INTO story_coverage
                (story_id, bias_classification, article_count, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?)
                """,
                (story_id, bias, count, now, now)
            )
    
    logging.info(f"Updated coverage data for {len(coverage)} stories")

def update_story_timestamps(story_id):
    """Update the last_updated_date for a story."""
    now = datetime.datetime.now().isoformat()
    
    run_sql(
        """
        UPDATE stories
        SET last_updated_date = ?
        WHERE id = ?
        """,
        (now, story_id)
    )

def cluster_articles():
    """Main clustering algorithm."""
    logging.info("Starting article clustering")
    
    # Get unclustered articles
    articles = get_unclustered_articles()
    logging.info(f"Found {len(articles)} unclustered articles")
    
    if not articles:
        logging.info("No articles to cluster")
        return
    
    # Get recent stories
    stories = get_recent_stories()
    logging.info(f"Found {len(stories)} recent stories for matching")
    
    # Track which stories were updated
    updated_stories = set()
    
    # For each article, try to find a matching story
    for article in articles:
        article_id = article['id']
        article_title = article['title']
        article_content = article['content_snippet'] or ""
        article_text = f"{article_title} {article_content}"
        
        best_match = None
        best_score = 0.3  # Threshold for considering a match
        
        # Compare with existing stories
        for story in stories:
            story_id = story['id']
            story_headline = story['representative_headline']
            
            # Calculate similarity
            similarity = simple_text_similarity(article_text, story_headline)
            
            if similarity > best_score:
                best_score = similarity
                best_match = story_id
        
        # Assign to best matching story or create new one
        if best_match:
            success = assign_to_story(article_id, best_match)
            if success:
                logging.info(f"Assigned article {article_id} to story {best_match} (score: {best_score:.2f})")
                updated_stories.add(best_match)
        else:
            # Create new story using article title
            new_story_id = create_new_story(article_title, article_id)
            if new_story_id:
                stories.append({'id': new_story_id, 'representative_headline': article_title})
                updated_stories.add(new_story_id)
    
    # Update timestamps for all modified stories
    for story_id in updated_stories:
        update_story_timestamps(story_id)
    
    # Update coverage statistics
    update_story_coverage()
    
    logging.info(f"Clustering complete. Updated {len(updated_stories)} stories.")

if __name__ == "__main__":
    cluster_articles()
