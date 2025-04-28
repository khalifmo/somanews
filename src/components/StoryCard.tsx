import React from 'react';
import Link from 'next/link';
import BiasBar from './BiasBar'; // Assuming BiasBar is in the same directory

// Define the structure of a Story object passed to the card
interface Story {
  id: number;
  representative_headline: string;
  summary?: string | null;
  first_seen_date: string;
  last_updated_date: string;
  topic_tags?: string | null;
  bias_distribution: { [key: string]: number };
  total_articles: number;
}

interface StoryCardProps {
  story: Story;
}

// Helper function to format dates (optional)
const formatDate = (dateString: string) => {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch (e) {
    return dateString; // Fallback
  }
};

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <Link href={`/story/${story.id}`} className="block border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden bg-white">
      <div className="p-4">
        {/* Bias Bar */} 
        <BiasBar 
          biasDistribution={story.bias_distribution} 
          totalArticles={story.total_articles} 
        />
        
        {/* Headline */} 
        <h2 className="mt-2 text-lg font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">
          {story.representative_headline}
        </h2>
        
        {/* Summary (Optional) */} 
        {story.summary && (
          <p className="mt-1 text-sm text-gray-600 line-clamp-3">
            {story.summary}
          </p>
        )}
        
        {/* Metadata */} 
        <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
          <span>
            {story.total_articles} Source{story.total_articles !== 1 ? 's' : ''}
          </span>
          <span title={`Last updated: ${new Date(story.last_updated_date).toLocaleString()}`}>
            {formatDate(story.last_updated_date)}
          </span>
        </div>

        {/* Topic Tags (Optional) */} 
        {story.topic_tags && (
          <div className="mt-2 flex flex-wrap gap-1">
            {story.topic_tags.split(',').map(tag => tag.trim()).filter(tag => tag).map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default StoryCard;

