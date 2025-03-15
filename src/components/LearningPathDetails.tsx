'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LearningPath, LearningLevel, LearningActivity } from '@/app/(dashboard)/age-2-4/learningPaths';

interface LearningPathDetailsProps {
  path: LearningPath;
}

export default function LearningPathDetails({ path }: LearningPathDetailsProps) {
  const [activeLevel, setActiveLevel] = useState<string>(
    path.levels.find(level => level.status === 'active')?.id || path.levels[0].id
  );

  // Function to get age range text
  const getAgeRangeText = (recommendation: 'early' | 'advanced' | 'all'): string => {
    switch (recommendation) {
      case 'early': return 'Ages 2-3';
      case 'advanced': return 'Ages 3-4';
      case 'all': return 'All Ages (2-4)';
      default: return 'All Ages (2-4)';
    }
  };

  // Get the currently displayed level
  const currentLevel = path.levels.find(level => level.id === activeLevel);
  
  // Get age recommendation for current level (use path default if not specified)
  const levelAgeRecommendation = currentLevel?.ageRecommendation || path.ageRecommendation;

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
      </div>

      {/* Learning Path Header */}
      <div className="mt-4 flex items-start">
        <div className={`text-4xl bg-${path.color}-100 rounded-full p-4 mr-4`}>
          {path.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{path.title}</h1>
          <p className="mt-1 text-gray-600">{path.description}</p>
          
          {/* Age Recommendation Badge */}
          <div className="mt-2 flex items-center">
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
              <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              {getAgeRangeText(path.ageRecommendation)}
            </span>
            
            {/* Progress Badge */}
            <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {path.progress}% Complete
            </span>
          </div>
          
          {/* Multi-Sensory Indicators */}
          <div className="mt-3 flex flex-wrap gap-2">
            {path.sensoryElements.audio && (
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                🔊 Audio
              </span>
            )}
            {path.sensoryElements.visual && (
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                👁️ Visual
              </span>
            )}
            {path.sensoryElements.tactile && (
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                👆 Tactile
              </span>
            )}
            {path.sensoryElements.movement && (
              <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                💃 Movement
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900">Learning Journey</h3>
              <p className="mt-1 text-sm text-gray-500">
                {path.levels.length} levels, {path.levels.reduce((sum, level) => sum + level.activities.length, 0)} activities
              </p>
            </div>
            <nav className="flex flex-col divide-y divide-gray-200">
              {path.levels.map((level) => {
                // Determine status icon
                let statusIcon;
                let statusClass;
                
                if (level.status === 'completed') {
                  statusIcon = "✓";
                  statusClass = "text-green-600 bg-green-100";
                } else if (level.status === 'active') {
                  statusIcon = "→";
                  statusClass = "text-blue-600 bg-blue-100";
                } else {
                  statusIcon = "🔒";
                  statusClass = "text-gray-400 bg-gray-100";
                }
                
                return (
                  <button 
                    key={level.id}
                    onClick={() => setActiveLevel(level.id)}
                    disabled={level.status === 'locked'}
                    className={`
                      flex items-center px-4 py-3 text-left
                      ${level.id === activeLevel ? 'bg-blue-50' : 'hover:bg-gray-50'}
                      ${level.status === 'locked' ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    <span className={`flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full ${statusClass}`}>
                      {statusIcon}
                    </span>
                    <div className="ml-3 flex-1">
                      <p className={`text-sm font-medium ${level.status === 'locked' ? 'text-gray-400' : 'text-gray-700'}`}>
                        {level.title}
                      </p>
                      <p className="text-xs text-gray-500">{level.activities.length} activities</p>
                    </div>
                    
                    {/* Age-specific badge if different from path default */}
                    {level.ageRecommendation && level.ageRecommendation !== path.ageRecommendation && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800">
                        {level.ageRecommendation === 'early' ? '2-3' : '3-4'}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="md:col-span-3">
          {currentLevel && (
            <>
              {/* Level Header */}
              <div className="bg-white rounded-xl shadow px-6 py-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{currentLevel.title}</h2>
                    <p className="mt-1 text-gray-600">{currentLevel.description}</p>
                    
                    {/* Level Age Recommendation (if different from path) */}
                    {currentLevel.ageRecommendation && currentLevel.ageRecommendation !== path.ageRecommendation && (
                      <span className="mt-2 inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                        Recommended for {getAgeRangeText(currentLevel.ageRecommendation)}
                      </span>
                    )}
                    
                    {/* Sensory Focus for this Level */}
                    {currentLevel.sensoryFocus && currentLevel.sensoryFocus.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs text-gray-500">Sensory focus:</span>
                        {currentLevel.sensoryFocus.includes('audio') && (
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                            🔊 Audio
                          </span>
                        )}
                        {currentLevel.sensoryFocus.includes('visual') && (
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                            👁️ Visual
                          </span>
                        )}
                        {currentLevel.sensoryFocus.includes('tactile') && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                            👆 Tactile
                          </span>
                        )}
                        {currentLevel.sensoryFocus.includes('movement') && (
                          <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">
                            💃 Movement
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="flex flex-col items-end">
                    <div className="text-sm font-medium text-gray-500">
                      {currentLevel.activities.filter(a => a.status === 'completed').length} / {currentLevel.activities.length} completed
                    </div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full mt-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ 
                          width: `${(currentLevel.activities.filter(a => a.status === 'completed').length / currentLevel.activities.length) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Milestone Display if Applicable */}
                {currentLevel.milestones && currentLevel.milestones.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700">Milestones:</h3>
                    <div className="mt-2 flex space-x-4">
                      {currentLevel.milestones.map(milestone => (
                        <div 
                          key={milestone.id}
                          className={`
                            flex items-center px-3 py-2 rounded-lg
                            ${milestone.unlocked ? 'bg-green-100 border border-green-200' : 'bg-gray-100 border border-gray-200 opacity-60'}
                          `}
                        >
                          <span className="text-xl mr-2">{milestone.icon}</span>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{milestone.title}</p>
                            <p className="text-xs text-gray-600">{milestone.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Activities List */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Activities</h3>
                <div className="space-y-4">
                  {currentLevel.activities.map((activity) => (
                    <ActivityCard 
                      key={activity.id} 
                      activity={activity} 
                      ageRecommendation={levelAgeRecommendation}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
          
          {/* Parent Resources Section */}
          <div className="mt-8 bg-indigo-50 rounded-xl shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Tips for Parents</h3>
            <p className="mt-1 text-gray-600">
              Support your child's learning with these suggestions:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-gray-700">
                  Follow your child's pace and interest. If they're engaged, extend the activity; if not, try again later.
                </span>
              </li>
              <li className="flex">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-gray-700">
                  Reinforce learning with the suggested offline activities to bridge digital and real-world experiences.
                </span>
              </li>
              <li className="flex">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-gray-700">
                  Celebrate effort and progress, not just completion. Recognition builds confidence and motivation.
                </span>
              </li>
            </ul>
            
            {/* Parent Guide Download */}
            <div className="mt-6">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Parent Guide (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Activity Card Component
interface ActivityCardProps {
  activity: LearningActivity;
  ageRecommendation: 'early' | 'advanced' | 'all';
}

function ActivityCard({ activity, ageRecommendation }: ActivityCardProps) {
  // Determine the activity type icon
  const getTypeIcon = (type: string): string => {
    switch (type) {
      case 'interactive': return '🎮';
      case 'video': return '🎬';
      case 'game': return '🎯';
      case 'reading': return '📖';
      default: return '📝';
    }
  };
  
  // Determine status styling
  let statusElement;
  if (activity.status === 'completed') {
    statusElement = (
      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Completed
      </span>
    );
  } else if (activity.status === 'active') {
    statusElement = (
      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        In Progress
      </span>
    );
  } else {
    statusElement = (
      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Locked
      </span>
    );
  }
  
  return (
    <div className={`
      bg-white rounded-xl shadow overflow-hidden
      ${activity.status === 'locked' ? 'opacity-60' : ''}
    `}>
      <div className="px-6 py-5">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <span className="text-2xl mr-3">{getTypeIcon(activity.type)}</span>
            <div>
              <h4 className="font-medium text-gray-900">{activity.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              
              <div className="mt-2 flex flex-wrap gap-2">
                {statusElement}
                
                <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {activity.duration}
                </span>
                
                {/* Age Recommendation Badge */}
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {ageRecommendation === 'early' ? 'Ages 2-3' : ageRecommendation === 'advanced' ? 'Ages 3-4' : 'All Ages'}
                </span>
              </div>
              
              {/* Sensory Elements */}
              {activity.sensoryElements && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {activity.sensoryElements.audio && (
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                      🔊
                    </span>
                  )}
                  {activity.sensoryElements.visual && (
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                      👁️
                    </span>
                  )}
                  {activity.sensoryElements.tactile && (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      👆
                    </span>
                  )}
                  {activity.sensoryElements.movement && (
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">
                      💃
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Start Activity Button */}
          <button
            disabled={activity.status === 'locked'}
            className={`
              ml-4 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded 
              ${activity.status === 'locked' 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}
            `}
          >
            {activity.status === 'completed' ? 'Review' : activity.status === 'active' ? 'Continue' : 'Locked'}
          </button>
        </div>
        
        {/* Offline Activity Extension */}
        {activity.offlineActivity && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="bg-yellow-50 rounded-lg p-3">
              <h5 className="text-sm font-medium text-yellow-800 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Offline Activity: {activity.offlineActivity.title}
              </h5>
              <p className="text-xs text-yellow-700 mt-1">{activity.offlineActivity.description}</p>
              
              {activity.offlineActivity.materials.length > 0 && (
                <div className="mt-2">
                  <span className="text-xs font-medium text-yellow-800">Materials needed:</span>
                  <ul className="mt-1 text-xs text-yellow-700 list-disc list-inside">
                    {activity.offlineActivity.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 