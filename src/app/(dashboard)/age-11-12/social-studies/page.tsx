'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Social Studies subject for age 11-12
const activities = [
  {
    id: 'world-civilizations',
    title: 'Ancient Civilizations Explorer',
    description: 'Discover ancient civilizations like Egypt, Greece, Rome, China, and Mesopotamia through interactive timelines and virtual tours.',
    difficulty: 'Intermediate to Advanced',
    duration: '45 min',
    skills: ['Historical Analysis', 'Cultural Comparison', 'Artifact Interpretation', 'Timeline Comprehension'],
    icon: '🏛️',
    color: 'bg-amber-600',
  },
  {
    id: 'world-geography',
    title: 'World Geography Challenge',
    description: 'Explore continents, countries, landforms, and climate zones through maps, quizzes, and interactive geography games.',
    difficulty: 'Advanced',
    duration: '40 min',
    skills: ['Map Reading', 'Geographical Analysis', 'Climate Understanding', 'Cultural Geography'],
    icon: '🌎',
    color: 'bg-blue-600',
  },
  {
    id: 'government-civics',
    title: 'Government & Civics Workshop',
    description: 'Learn about different forms of government, civic responsibilities, and how laws are made and enforced.',
    difficulty: 'Intermediate to Advanced',
    duration: '50 min',
    skills: ['Civic Literacy', 'Government Systems', 'Critical Thinking', 'Debate'],
    icon: '🏛️',
    color: 'bg-indigo-600',
  },
  {
    id: 'cultural-diversity',
    title: 'Cultural Diversity Project',
    description: 'Explore cultures around the world through their traditions, celebrations, art, food, and daily life practices.',
    difficulty: 'Varies',
    duration: '55 min',
    skills: ['Cultural Awareness', 'Global Perspectives', 'Research', 'Presentation'],
    icon: '🌍',
    color: 'bg-green-600',
  },
];

export default function SocialStudiesSubjectPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Link 
            href="/age-11-12"
            className="mr-2 text-blue-500 hover:text-blue-700"
          >
            ← Back to Ages 11-12
          </Link>
        </div>
        
        <div className="bg-amber-100 border-l-4 border-amber-600 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🌏</span>
            <div>
              <h1 className="text-2xl font-bold text-amber-800">Social Studies for Ages 11-12</h1>
              <p className="text-amber-700">History, Geography & Global Citizenship</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">
            Our Social Studies curriculum for 11-12 year-olds develops understanding of history, geography, 
            civics, and cultures around the world. Students will analyze historical events, explore geographical 
            concepts, examine civic responsibilities, and appreciate cultural diversity.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Key Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Historical thinking and chronological reasoning</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Map reading and geographical analysis</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Understanding government and civic responsibility</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Cultural appreciation and global awareness</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Research and presentation skills</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Critical thinking and evidence-based reasoning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Featured Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="bg-white rounded-lg border shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className={`${activity.color} p-4 text-white`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{activity.title}</h3>
                  <span className="text-2xl">{activity.icon}</span>
                </div>
                <div className="flex items-center text-sm mt-1">
                  <span className="bg-white bg-opacity-30 rounded-full px-2 py-0.5 mr-2">
                    {activity.difficulty}
                  </span>
                  <span className="bg-white bg-opacity-30 rounded-full px-2 py-0.5">
                    {activity.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-600 mb-3">{activity.description}</p>
                
                <h4 className="font-medium text-gray-700 mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-1 mb-4">
                  {activity.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button 
                  className={`w-full py-2 rounded-lg text-white ${activity.color} hover:opacity-90 transition`}
                >
                  Start Activity
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-purple-800 mb-4">Current Project: History Museum</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-amber-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🏛️</span>
                <h3 className="text-xl font-bold text-amber-800">Create Your Digital History Museum</h3>
                <p className="text-amber-600">Research, Curate, and Present Historical Artifacts</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                In this multi-week project, you'll research a historical period, collect digital artifacts, 
                organize them into exhibits, and create a virtual museum experience to share with classmates.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Project Timeline:</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <span className="text-green-700">Week 1: Choose historical period and begin research</span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <span className="text-green-700">Week 2: Identify key events, people, and artifacts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">→</span>
                      </div>
                    </div>
                    <span className="text-yellow-700">Week 3: Organize artifacts into themed exhibits (In Progress)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">4</span>
                      </div>
                    </div>
                    <span className="text-gray-500">Week 4: Design and build virtual museum experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">5</span>
                      </div>
                    </div>
                    <span className="text-gray-500">Week 5: Present to classmates and receive feedback</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition">
                Continue Project
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-purple-800 mb-4">Geography Challenge</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🗺️</span>
              <h3 className="text-lg font-bold">Weekly Map Quest</h3>
            </div>
            <div className="bg-gray-100 p-3 rounded mb-4">
              <p className="text-gray-800 font-medium mb-2">
                Identify these 10 countries and their capitals on the map of South America.
              </p>
              <p className="text-gray-600 text-sm italic">
                Challenge: Also name the major physical features in each country!
              </p>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Difficulty:</span>
                <span className="font-medium text-blue-600">Intermediate</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Participants:</span>
                <span className="font-medium">317 students</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Your Best Score:</span>
                <span className="font-medium">8/10 countries</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Start Challenge
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">📰</span>
              <span>Current Events Corner</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Explore age-appropriate news articles from around the world, updated weekly with 
              discussion questions to develop critical thinking skills.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
              Read This Week's Stories
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips</h2>
        <p className="text-blue-700 mb-4">
          Here are some ways to support your 11-12 year old's social studies development:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Discuss current events at an age-appropriate level</li>
          <li>Visit museums, historical sites, and cultural centers</li>
          <li>Explore different cultures through food, festivals, and community events</li>
          <li>Use maps during travel or when discussing world events</li>
          <li>Encourage questions about how government and society function</li>
          <li>Connect historical events to present-day situations</li>
        </ul>
      </div>
    </div>
  );
} 