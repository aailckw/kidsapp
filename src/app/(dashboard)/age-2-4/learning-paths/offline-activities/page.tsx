'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAllLearningPaths } from '../../learningPaths';

// Types for our offline activities page
interface OfflineActivity {
  id: string;
  title: string;
  description: string;
  subject: string;
  ageRecommendation: 'early' | 'advanced' | 'all';
  sensoryElements: {
    audio: boolean;
    visual: boolean;
    tactile: boolean;
    movement: boolean;
  };
  materials: string[];
  learningPath: string;
  levelTitle: string;
}

export default function OfflineActivitiesPage() {
  const [activeSubject, setActiveSubject] = useState<string>('all');
  const [activeAgeGroup, setActiveAgeGroup] = useState<'early' | 'advanced' | 'all'>('all');
  const [activeSensoryType, setActiveSensoryType] = useState<'all' | 'audio' | 'visual' | 'tactile' | 'movement'>('all');
  
  // Extract all offline activities from learning paths
  const allPaths = getAllLearningPaths();
  const offlineActivities: OfflineActivity[] = [];
  
  allPaths.forEach(path => {
    path.levels.forEach(level => {
      level.activities.forEach(activity => {
        if (activity.offlineActivity) {
          offlineActivities.push({
            id: `${path.id}-${level.id}-${activity.id}`,
            title: activity.offlineActivity.title,
            description: activity.offlineActivity.description,
            subject: path.subject,
            ageRecommendation: level.ageRecommendation || path.ageRecommendation,
            sensoryElements: {
              audio: activity.sensoryElements?.audio || false,
              visual: activity.sensoryElements?.visual || false,
              tactile: activity.sensoryElements?.tactile || false,
              movement: activity.sensoryElements?.movement || false
            },
            materials: activity.offlineActivity.materials,
            learningPath: path.title,
            levelTitle: level.title
          });
        }
      });
    });
  });
  
  // Apply filters
  let displayActivities = [...offlineActivities];
  
  // Subject filter
  if (activeSubject !== 'all') {
    displayActivities = displayActivities.filter(activity => activity.subject === activeSubject);
  }
  
  // Age filter
  if (activeAgeGroup !== 'all') {
    displayActivities = displayActivities.filter(activity => 
      activity.ageRecommendation === activeAgeGroup || activity.ageRecommendation === 'all'
    );
  }
  
  // Sensory type filter
  if (activeSensoryType !== 'all') {
    displayActivities = displayActivities.filter(activity => 
      activity.sensoryElements[activeSensoryType as keyof typeof activity.sensoryElements]
    );
  }
  
  // Group activities by subject for display
  const groupedActivities: Record<string, OfflineActivity[]> = {};
  
  displayActivities.forEach(activity => {
    if (!groupedActivities[activity.subject]) {
      groupedActivities[activity.subject] = [];
    }
    groupedActivities[activity.subject].push(activity);
  });
  
  // Function to get age range text
  const getAgeRangeText = (recommendation: 'early' | 'advanced' | 'all'): string => {
    switch (recommendation) {
      case 'early': return 'Ages 2-3';
      case 'advanced': return 'Ages 3-4';
      case 'all': return 'All Ages (2-4)';
      default: return 'All Ages (2-4)';
    }
  };
  
  // Function to get subject name
  const getSubjectName = (subject: string): string => {
    switch (subject) {
      case 'english': return 'English';
      case 'mathematics': return 'Mathematics';
      case 'chinese': return 'Chinese';
      case 'science': return 'Science';
      default: return subject.charAt(0).toUpperCase() + subject.slice(1);
    }
  };
  
  // Function to get subject color
  const getSubjectColor = (subject: string): string => {
    switch (subject) {
      case 'english': return 'blue';
      case 'mathematics': return 'green';
      case 'chinese': return 'red';
      case 'science': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div>
        <Link 
          href="/age-2-4/learning-paths"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
        >
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Learning Paths
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Offline Extension Activities</h1>
        <p className="mt-1 text-gray-600">
          Extend your child's digital learning with these hands-on activities at home
        </p>
      </div>
      
      {/* Filter Controls */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Age Group Filter */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-medium text-gray-700 mb-3">Age Group</h3>
          <div className="flex flex-wrap gap-2">
            {(['all', 'early', 'advanced'] as const).map((ageGroup) => (
              <button
                key={ageGroup}
                onClick={() => setActiveAgeGroup(ageGroup)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-full 
                  ${activeAgeGroup === ageGroup
                    ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                  }
                  transition-colors
                `}
              >
                {getAgeRangeText(ageGroup)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Subject Filter */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-medium text-gray-700 mb-3">Subject</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSubject('all')}
              className={`
                px-4 py-2 text-sm font-medium rounded-full 
                ${activeSubject === 'all'
                  ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }
                transition-colors
              `}
            >
              All Subjects
            </button>
            {['english', 'mathematics', 'chinese', 'science'].map((subject) => (
              <button
                key={subject}
                onClick={() => setActiveSubject(subject)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-full 
                  ${activeSubject === subject
                    ? `bg-${getSubjectColor(subject)}-100 text-${getSubjectColor(subject)}-800 border-2 border-${getSubjectColor(subject)}-200`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                  }
                  transition-colors
                `}
              >
                {getSubjectName(subject)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Sensory Type Filter */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-medium text-gray-700 mb-3">Sensory Type</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSensoryType('all')}
              className={`
                px-4 py-2 text-sm font-medium rounded-full 
                ${activeSensoryType === 'all'
                  ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }
                transition-colors
              `}
            >
              All Types
            </button>
            <button
              onClick={() => setActiveSensoryType('audio')}
              className={`
                px-4 py-2 text-sm font-medium rounded-full 
                ${activeSensoryType === 'audio'
                  ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }
                transition-colors
              `}
            >
              <span className="mr-1">🔊</span> Audio
            </button>
            <button
              onClick={() => setActiveSensoryType('visual')}
              className={`
                px-4 py-2 text-sm font-medium rounded-full 
                ${activeSensoryType === 'visual'
                  ? 'bg-blue-100 text-blue-800 border-2 border-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }
                transition-colors
              `}
            >
              <span className="mr-1">👁️</span> Visual
            </button>
            <button
              onClick={() => setActiveSensoryType('tactile')}
              className={`
                px-4 py-2 text-sm font-medium rounded-full 
                ${activeSensoryType === 'tactile'
                  ? 'bg-green-100 text-green-800 border-2 border-green-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }
                transition-colors
              `}
            >
              <span className="mr-1">👆</span> Tactile
            </button>
            <button
              onClick={() => setActiveSensoryType('movement')}
              className={`
                px-4 py-2 text-sm font-medium rounded-full 
                ${activeSensoryType === 'movement'
                  ? 'bg-purple-100 text-purple-800 border-2 border-purple-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }
                transition-colors
              `}
            >
              <span className="mr-1">💃</span> Movement
            </button>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mt-6 bg-white rounded-lg p-4 shadow">
        <p className="text-gray-700">
          Showing <span className="font-medium">{displayActivities.length}</span> offline activities
          {activeSubject !== 'all' && ` in ${getSubjectName(activeSubject)}`}
          {activeAgeGroup !== 'all' && ` for ${getAgeRangeText(activeAgeGroup)}`}
          {activeSensoryType !== 'all' && ` with ${activeSensoryType} focus`}
        </p>
      </div>
      
      {/* Activities List */}
      <div className="mt-8">
        {Object.keys(groupedActivities).length > 0 ? (
          Object.entries(groupedActivities).map(([subject, activities]) => (
            <div key={subject} className="mb-10">
              <div className="flex items-center mb-4">
                <div className={`w-2 h-10 bg-${getSubjectColor(subject)}-500 rounded-full mr-3`}></div>
                <h2 className="text-xl font-bold text-gray-900">{getSubjectName(subject)}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((activity) => (
                  <div 
                    key={activity.id} 
                    className="bg-white rounded-xl shadow overflow-hidden border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div className={`bg-${getSubjectColor(activity.subject)}-100 px-6 py-4 border-b border-${getSubjectColor(activity.subject)}-200`}>
                      <h3 className="font-medium text-gray-900">{activity.title}</h3>
                      <p className="text-sm text-gray-700 mt-1">{activity.description}</p>
                    </div>
                    
                    <div className="px-6 py-4">
                      {/* Activity Details */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">From Learning Path:</span> {activity.learningPath} ({activity.levelTitle})
                        </p>
                      </div>
                      
                      {/* Age and Sensory Badges */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                          {getAgeRangeText(activity.ageRecommendation)}
                        </span>
                        
                        {/* Sensory Elements */}
                        {activity.sensoryElements.audio && (
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                            🔊 Audio
                          </span>
                        )}
                        {activity.sensoryElements.visual && (
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            👁️ Visual
                          </span>
                        )}
                        {activity.sensoryElements.tactile && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            👆 Tactile
                          </span>
                        )}
                        {activity.sensoryElements.movement && (
                          <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                            💃 Movement
                          </span>
                        )}
                      </div>
                      
                      {/* Materials */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Materials Needed:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {activity.materials.map((material, index) => (
                            <li key={index}>{material}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Print Button */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                          </svg>
                          Print Activity Card
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="my-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No activities found</h3>
            <p className="mt-1 text-gray-500 max-w-md mx-auto">
              Try changing your filters to see more activities. We're adding new offline activities regularly.
            </p>
          </div>
        )}
      </div>
      
      {/* Parent Tips */}
      <div className="mt-12 bg-indigo-50 rounded-xl shadow p-6">
        <h2 className="text-xl font-bold text-gray-900">Tips for Multi-Sensory Learning at Home</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="flex items-center font-medium text-indigo-800 mb-3">
              <span className="text-2xl mr-2">🔊</span>
              Enhancing Audio Learning
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Create a quiet environment free from background noise when focusing on listening activities.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ask your child to repeat sounds or words to reinforce audio learning.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Use different tones of voice when reading stories to make them more engaging.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="flex items-center font-medium text-indigo-800 mb-3">
              <span className="text-2xl mr-2">👁️</span>
              Supporting Visual Learning
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Use bright, contrasting colors for visual activities to help information stand out.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Create a distraction-free visual space when doing focused activities.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Point to objects and images while naming them to reinforce visual connections.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="flex items-center font-medium text-indigo-800 mb-3">
              <span className="text-2xl mr-2">👆</span>
              Facilitating Tactile Learning
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Provide various textures for exploration – smooth, rough, soft, hard, etc.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Allow extra time for tactile activities as they often take longer but provide deeper learning.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Describe sensations as your child touches objects to build vocabulary and awareness.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="flex items-center font-medium text-indigo-800 mb-3">
              <span className="text-2xl mr-2">💃</span>
              Encouraging Movement Learning
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Create safe, open spaces for movement activities to prevent accidents.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Join in with the movements to motivate your child and make activities more fun.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Connect movements to words or concepts to reinforce learning (e.g., jump while counting).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 