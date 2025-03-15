'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAllLearningPaths, getLearningPathsBySubject, getLearningPathsByAge } from '../learningPaths';
import LearningPathCard from '@/components/LearningPathCard';

const SUBJECTS = [
  { id: 'all', name: 'All Paths', color: 'bg-blue-600' },
  { id: 'english', name: 'English', color: 'bg-blue-500' },
  { id: 'mathematics', name: 'Mathematics', color: 'bg-green-500' },
  { id: 'chinese', name: 'Chinese', color: 'bg-red-500' },
  { id: 'science', name: 'Science', color: 'bg-purple-600' },
];

const AGE_GROUPS = [
  { id: 'all', name: 'All Ages' },
  { id: 'early', name: 'Ages 2-3' },
  { id: 'advanced', name: 'Ages 3-4' },
];

export default function LearningPathsPage() {
  const [activeSubject, setActiveSubject] = useState<string>('all');
  const [activeAgeGroup, setActiveAgeGroup] = useState<'all' | 'early' | 'advanced'>('all');
  
  // Filter paths by both subject and age group
  let displayPaths = activeSubject === 'all' 
    ? getAllLearningPaths() 
    : getLearningPathsBySubject(activeSubject);
    
  // Apply age filter
  if (activeAgeGroup !== 'all') {
    displayPaths = displayPaths.filter(path => 
      path.ageRecommendation === activeAgeGroup || path.ageRecommendation === 'all'
    );
  }

  const overallProgress = Math.round(
    getAllLearningPaths().reduce((sum, path) => sum + path.progress, 0) / 
    getAllLearningPaths().length
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <Link 
            href="/age-2-4"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Age 2-4 Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Learning Journeys (Ages 2-4)</h1>
          <p className="mt-1 text-gray-600">
            Follow these learning paths to build skills step-by-step
          </p>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="mt-6 bg-white rounded-xl shadow p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 rounded-full p-3">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Overall Learning Progress</h3>
            <div className="flex items-center mt-1">
              <div className="w-64 bg-gray-200 rounded-full h-2.5 mr-3">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${overallProgress}%` }}></div>
              </div>
              <span className="text-sm font-medium text-gray-700">{overallProgress}%</span>
            </div>
          </div>
        </div>
        
        {/* Offline Activities Link */}
        <div className="mt-5 pt-5 border-t border-gray-200">
          <Link 
            href="/age-2-4/learning-paths/offline-activities"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            View offline extension activities
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Age Group Selection */}
      <div className="mt-8 bg-white rounded-xl shadow p-4">
        <h3 className="font-medium text-gray-700 mb-3">Filter by Age Group</h3>
        <div className="flex space-x-2">
          {AGE_GROUPS.map((ageGroup) => (
            <button
              key={ageGroup.id}
              onClick={() => setActiveAgeGroup(ageGroup.id as 'all' | 'early' | 'advanced')}
              className={`
                px-4 py-2 text-sm font-medium rounded-full 
                ${activeAgeGroup === ageGroup.id
                  ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }
                transition-colors
              `}
            >
              {ageGroup.name}
            </button>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <strong>Ages 2-3:</strong> Early stage activities focus on sensory exploration, basic recognition, and simple interactions
            </span>
          </p>
          <p className="flex items-center mt-1">
            <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <strong>Ages 3-4:</strong> Advanced stage activities include more complex skills, early writing, and deeper cognitive challenges
            </span>
          </p>
        </div>
      </div>

      {/* Subject Tabs */}
      <div className="mt-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {SUBJECTS.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setActiveSubject(subject.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeSubject === subject.id
                    ? `border-${subject.color.split('-')[1]}-500 text-${subject.color.split('-')[1]}-600`
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {subject.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Multi-Sensory Learning Guide */}
      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
        <h3 className="font-semibold text-indigo-800 text-lg">Multi-Sensory Learning Approach</h3>
        <p className="text-indigo-700 mt-1 mb-4">
          Our activities engage multiple senses to support different learning styles and enhance development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-yellow-100">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">🔊</span>
              <h4 className="font-medium text-gray-900">Audio</h4>
            </div>
            <p className="text-sm text-gray-600">
              Narration, sound effects, music, and phonetic sounds to develop listening skills
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">👁️</span>
              <h4 className="font-medium text-gray-900">Visual</h4>
            </div>
            <p className="text-sm text-gray-600">
              Colorful animations, clear visualizations, and engaging graphics to enhance understanding
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-green-100">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">👆</span>
              <h4 className="font-medium text-gray-900">Tactile</h4>
            </div>
            <p className="text-sm text-gray-600">
              Touch interactions, tracing activities, and textured materials for hands-on learning
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">💃</span>
              <h4 className="font-medium text-gray-900">Movement</h4>
            </div>
            <p className="text-sm text-gray-600">
              Physical actions, dance, and gesture-based activities for kinesthetic learners
            </p>
          </div>
        </div>
      </div>

      {/* Learning Path Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPaths.length > 0 ? (
          displayPaths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No learning paths found</h3>
            <p className="mt-1 text-gray-500">
              Try changing your subject or age filters to see more learning paths.
            </p>
          </div>
        )}
      </div>

      {/* Get Started Guide */}
      <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-900">How Learning Paths Work</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
              1
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Choose a Path</h3>
              <p className="mt-1 text-gray-500">
                Select a learning path that interests your child based on their skills and interests.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
              2
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Complete Activities</h3>
              <p className="mt-1 text-gray-500">
                Work through activities in each level to build skills step-by-step.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
              3
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Earn Milestones</h3>
              <p className="mt-1 text-gray-500">
                Collect milestone rewards as your child completes levels and masters new skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Tips */}
      <div className="mt-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold text-gray-900">Tips for Parents</h2>
        <div className="mt-4 space-y-4">
          <div className="flex">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-700">
              <span className="font-medium">Consistency is key:</span> Just 10-15 minutes a day can help build important skills.
            </p>
          </div>
          <div className="flex">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-700">
              <span className="font-medium">Celebrate progress:</span> Acknowledge achievements to build confidence and motivation.
            </p>
          </div>
          <div className="flex">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-700">
              <span className="font-medium">Extend learning:</span> Use the suggested offline activities to reinforce concepts.
            </p>
          </div>
          <div className="flex">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-700">
              <span className="font-medium">Follow your child's lead:</span> Choose the learning style that matches their preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 