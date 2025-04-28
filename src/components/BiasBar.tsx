import React from 'react';

interface BiasBarProps {
  biasDistribution: { [key: string]: number };
  totalArticles: number;
  biasColors?: { [key: string]: string };
}

// Define default colors for bias categories (Tailwind classes)
const DEFAULT_BIAS_COLORS: { [key: string]: string } = {
  'Gov/Official': 'bg-blue-600',
  'Regional': 'bg-green-600',
  'Independent Local': 'bg-yellow-500',
  'Pan-African': 'bg-purple-600',
  'International': 'bg-red-600',
  'Western': 'bg-indigo-600',
  'Other': 'bg-gray-400', // Fallback
};

// Define the order for display
const BIAS_ORDER = [
  'Gov/Official',
  'Regional',
  'Independent Local',
  'Pan-African',
  'International',
  'Western',
  'Other'
];

const BiasBar: React.FC<BiasBarProps> = ({ 
  biasDistribution, 
  totalArticles, 
  biasColors = DEFAULT_BIAS_COLORS 
}) => {
  if (totalArticles === 0) {
    return <div className="h-2 w-full bg-gray-200 rounded-full"></div>; // Empty state
  }

  // Sort the distribution keys based on BIAS_ORDER for consistent display
  const sortedBiasKeys = Object.keys(biasDistribution).sort((a, b) => {
    const indexA = BIAS_ORDER.indexOf(a);
    const indexB = BIAS_ORDER.indexOf(b);
    // Handle keys not in BIAS_ORDER (put them at the end)
    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <div className="flex h-2 w-full rounded-full overflow-hidden bg-gray-200" title="Bias Distribution">
      {sortedBiasKeys.map((bias) => {
        const count = biasDistribution[bias];
        const percentage = (count / totalArticles) * 100;
        const colorClass = biasColors[bias] || biasColors['Other'];
        
        return (
          <div
            key={bias}
            className={`${colorClass} h-full transition-all duration-300 ease-in-out`}
            style={{ width: `${percentage}%` }}
            title={`${bias}: ${count} article${count !== 1 ? 's' : ''} (${percentage.toFixed(1)}%)`}
          ></div>
        );
      })}
    </div>
  );
};

export default BiasBar;

