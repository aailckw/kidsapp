'use client';

import React from 'react';
import Link from 'next/link';
import { LearningPath } from '@/app/(dashboard)/age-2-4/learningPaths';

interface LearningPathCardProps {
  path: LearningPath;
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({ path }) => {
  // Helper function to get human-readable age range text
  const getAgeRangeText = (ageRecommendation: 'early' | 'advanced' | 'all') => {
    switch (ageRecommendation) {
      case 'early':
        return 'Ages 2-3';
      case 'advanced':
        return 'Ages 3-4';
      case 'all':
        return 'All Ages';
      default:
        return 'All Ages';
    }
  };

  return (
    <Link href={`/learning-path/${path.id}`} className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className={`${path.color} h-2 w-full`}></div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-4xl" role="img" aria-label={path.title}>
                {path.icon}
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{path.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{path.description}</p>
                
                {/* Age Recommendation Badge */}
                <div className="mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                  <svg className="mr-1.5 h-2 w-2 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {getAgeRangeText(path.ageRecommendation)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">
                Progress: {path.completedLevels}/{path.totalLevels} levels
              </span>
              <span className="text-sm font-medium text-gray-700">
                {path.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${path.color} h-2.5 rounded-full`}
                style={{ width: `${path.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {path.levels.slice(0, 3).map((level) => (
              <div key={level.id} className="flex items-center">
                <div 
                  className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                    level.completed 
                      ? `${path.color} text-white` 
                      : level.unlocked 
                        ? 'bg-gray-200 text-gray-500' 
                        : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {level.completed && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div>
                  <span className={`text-sm ${
                    level.unlocked ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {level.title}
                  </span>
                  
                  {/* Level Age Badge - only show if different from path's recommendation */}
                  {level.recommendedAge && level.recommendedAge !== path.ageRecommendation && (
                    <span className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800">
                      {getAgeRangeText(level.recommendedAge)}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {path.levels.length > 3 && (
              <div className="text-sm text-gray-500 pl-8">
                + {path.levels.length - 3} more levels
              </div>
            )}
          </div>

          {/* Multi-sensory Learning Indicators */}
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="flex items-center bg-yellow-50 rounded-full px-3 py-1" title="Audio elements">
              <span className="text-sm mr-1">🔊</span>
              <span className="text-xs text-yellow-800">Audio</span>
            </div>
            <div className="flex items-center bg-blue-50 rounded-full px-3 py-1" title="Visual elements">
              <span className="text-sm mr-1">👁️</span>
              <span className="text-xs text-blue-800">Visual</span>
            </div>
            <div className="flex items-center bg-green-50 rounded-full px-3 py-1" title="Tactile elements">
              <span className="text-sm mr-1">👆</span>
              <span className="text-xs text-green-800">Tactile</span>
            </div>
            <div className="flex items-center bg-purple-50 rounded-full px-3 py-1" title="Movement activities">
              <span className="text-sm mr-1">💃</span>
              <span className="text-xs text-purple-800">Movement</span>
            </div>
          </div>

          <div className="mt-5">
            <button className={`px-4 py-2 rounded-lg ${path.color} text-white text-sm font-medium hover:opacity-90 transition-opacity`}>
              {path.levels.some(level => level.unlocked && !level.completed) 
                ? 'Continue Learning' 
                : 'Start Learning'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LearningPathCard; 