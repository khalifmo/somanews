import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import the components to test
import BiasBar from '../src/components/BiasBar';
import StoryCard from '../src/components/StoryCard';

// Mock data for testing
const mockStory = {
  id: 1,
  representative_headline: "Test Headline for Somalia News Story",
  summary: "This is a test summary for a Somalia news story that will be displayed in the StoryCard component.",
  first_seen_date: "2025-04-28T12:00:00Z",
  last_updated_date: "2025-04-28T14:30:00Z",
  topic_tags: "politics,security,economy",
  bias_distribution: {
    "Gov/Official": 3,
    "Independent Local": 5,
    "Western": 2
  },
  total_articles: 10
};

describe('BiasBar Component', () => {
  test('renders correctly with bias distribution', () => {
    render(
      <BiasBar 
        biasDistribution={mockStory.bias_distribution} 
        totalArticles={mockStory.total_articles} 
      />
    );
    
    // The BiasBar is primarily visual, so we just check if it renders
    const biasBarElement = document.querySelector('div[title="Bias Distribution"]');
    expect(biasBarElement).toBeInTheDocument();
    
    // Check if all bias categories are represented
    Object.keys(mockStory.bias_distribution).forEach(bias => {
      const percentage = (mockStory.bias_distribution[bias] / mockStory.total_articles) * 100;
      const biasElement = document.querySelector(`div[title^="${bias}:"]`);
      expect(biasElement).toBeInTheDocument();
      expect(biasElement).toHaveStyle(`width: ${percentage}%`);
    });
  });
  
  test('renders empty state when no articles', () => {
    render(
      <BiasBar 
        biasDistribution={{}} 
        totalArticles={0} 
      />
    );
    
    const emptyBiasBar = document.querySelector('div.bg-gray-200.rounded-full');
    expect(emptyBiasBar).toBeInTheDocument();
  });
});

describe('StoryCard Component', () => {
  test('renders story details correctly', () => {
    render(<StoryCard story={mockStory} />);
    
    // Check headline
    expect(screen.getByText(mockStory.representative_headline)).toBeInTheDocument();
    
    // Check summary
    expect(screen.getByText(mockStory.summary)).toBeInTheDocument();
    
    // Check source count
    expect(screen.getByText(/10 Sources/)).toBeInTheDocument();
    
    // Check tags
    mockStory.topic_tags.split(',').forEach(tag => {
      expect(screen.getByText(tag.trim())).toBeInTheDocument();
    });
    
    // Check if BiasBar is included
    const biasBarElement = document.querySelector('div[title="Bias Distribution"]');
    expect(biasBarElement).toBeInTheDocument();
  });
  
  test('renders without optional fields', () => {
    const minimalStory = {
      ...mockStory,
      summary: null,
      topic_tags: null
    };
    
    render(<StoryCard story={minimalStory} />);
    
    // Headline should still be there
    expect(screen.getByText(minimalStory.representative_headline)).toBeInTheDocument();
    
    // Summary should not be there
    expect(screen.queryByText(mockStory.summary)).not.toBeInTheDocument();
    
    // Tags should not be there
    const tagElements = document.querySelectorAll('.bg-gray-100.text-gray-700');
    expect(tagElements.length).toBe(0);
  });
});
