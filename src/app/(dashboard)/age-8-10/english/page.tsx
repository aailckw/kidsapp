'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for English subject for age 8-10
const activities = [
  {
    id: 'book-club',
    title: 'Interactive Book Club',
    description: 'Join our virtual book club with interactive stories and comprehension activities.',
    difficulty: 'Intermediate',
    duration: '30 min',
    skills: ['Reading Comprehension', 'Critical Thinking', 'Literary Analysis'],
    icon: '📚',
    color: 'bg-blue-500',
  },
  {
    id: 'writing-workshop',
    title: 'Creative Writing Workshop',
    description: 'Express your imagination by crafting your own stories with our guided writing tools.',
    difficulty: 'Intermediate to Advanced',
    duration: '40 min',
    skills: ['Writing', 'Storytelling', 'Grammar', 'Vocabulary'],
    icon: '✏️',
    color: 'bg-indigo-500',
  },
  {
    id: 'vocabulary-challenge',
    title: 'Vocabulary Challenge',
    description: 'Build your word power through fun quizzes, games, and interactive exercises.',
    difficulty: 'Varies',
    duration: '20 min',
    skills: ['Vocabulary', 'Word Relationships', 'Context Clues'],
    icon: '🔤',
    color: 'bg-green-500',
  },
  {
    id: 'grammar-quest',
    title: 'Grammar Quest',
    description: 'Master parts of speech and sentence structure through an adventure game format.',
    difficulty: 'Intermediate',
    duration: '25 min',
    skills: ['Grammar', 'Sentence Construction', 'Editing'],
    icon: '🏰',
    color: 'bg-red-500',
  },
];

export default function EnglishSubjectPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Link 
            href="/age-8-10"
            className="mr-2 text-blue-500 hover:text-blue-700"
          >
            ← Back to Ages 8-10
          </Link>
        </div>
        
        <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">📖</span>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">English for Ages 8-10</h1>
              <p className="text-blue-700">Advanced Reading & Writing Skills</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">
            The English curriculum for 8-10 year-olds advances reading, writing, and communication 
            skills through interactive literature and creative writing exercises, focusing on reading 
            comprehension, vocabulary expansion, grammar basics, and writing composition.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Key Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Reading comprehension & analysis</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Advanced vocabulary building</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Grammar and sentence structure</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Creative and expository writing</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Research and information literacy</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Public speaking and presentation</span>
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
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
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
      
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Interactive Library</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            Our interactive e-book library offers stories tailored to 8-10 year-olds with 
            clickable vocabulary words, comprehension questions, and fun challenges.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="border rounded-lg overflow-hidden">
              <div className="h-32 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">🧙</span>
              </div>
              <div className="p-3">
                <h3 className="font-medium">The Wizard's Apprentice</h3>
                <p className="text-xs text-gray-500">Fantasy Adventure</p>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="h-32 bg-green-100 flex items-center justify-center">
                <span className="text-4xl">🔎</span>
              </div>
              <div className="p-3">
                <h3 className="font-medium">Mystery at Blackwood School</h3>
                <p className="text-xs text-gray-500">Detective Story</p>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="h-32 bg-purple-100 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="p-3">
                <h3 className="font-medium">Journey to the Stars</h3>
                <p className="text-xs text-gray-500">Science Fiction</p>
              </div>
            </div>
          </div>
          
          <Link
            href="#"
            className="block text-center bg-blue-100 text-blue-800 rounded py-2 hover:bg-blue-200 transition"
          >
            Explore Full Library
          </Link>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips</h2>
        <p className="text-blue-700 mb-4">
          Here are some ways to support your 8-10 year old's language arts development:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Discuss books your child is reading and ask open-ended questions</li>
          <li>Encourage writing in everyday situations (lists, letters, journals)</li>
          <li>Play word games to build vocabulary</li>
          <li>Visit the library regularly to find books on topics they enjoy</li>
          <li>Have your child read aloud to practice fluency and expression</li>
        </ul>
      </div>
    </div>
  );
} 