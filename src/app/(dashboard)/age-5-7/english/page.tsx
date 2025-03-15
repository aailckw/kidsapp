'use client';

import React from 'react';
import Link from 'next/link';

// Define activities with their details
const activities = [
  {
    id: 'phonics-fun',
    title: 'Phonics Fun',
    description: 'Practice letter sounds and phonetic patterns through interactive games and exercises.',
    difficulty: 'Beginner',
    duration: '15 min',
    skills: ['Letter-sound recognition', 'Blending sounds', 'Word building'],
    icon: '🔤',
    color: 'bg-blue-500',
  },
  {
    id: 'sight-word-games',
    title: 'Sight Word Games',
    description: 'Learn common sight words through memory games, flashcards, and interactive stories.',
    difficulty: 'Beginner to Intermediate',
    duration: '20 min',
    skills: ['Word recognition', 'Reading fluency', 'Memory skills'],
    icon: '👁️',
    color: 'bg-purple-500',
  },
  {
    id: 'reading-short-stories',
    title: 'Reading Short Stories',
    description: 'Enjoy interactive storybooks with simple narratives and comprehension questions.',
    difficulty: 'Intermediate',
    duration: '25 min',
    skills: ['Reading comprehension', 'Vocabulary building', 'Story elements'],
    icon: '📚',
    color: 'bg-green-500',
  },
  {
    id: 'alphabet-adventure',
    title: 'Alphabet Adventure',
    description: 'Join a journey through the alphabet with fun characters and interactive letter tracing.',
    difficulty: 'Beginner',
    duration: '15 min',
    skills: ['Letter recognition', 'Handwriting', 'Alphabetical order'],
    icon: '✏️',
    color: 'bg-red-500',
  },
  {
    id: 'rhyme-time',
    title: 'Rhyme Time',
    description: 'Discover the fun of rhyming words through songs, poems, and word matching games.',
    difficulty: 'Beginner to Intermediate',
    duration: '15 min',
    skills: ['Phonological awareness', 'Word patterns', 'Listening skills'],
    icon: '🎵',
    color: 'bg-yellow-500',
  },
  {
    id: 'sentence-builder',
    title: 'Sentence Builder',
    description: 'Create simple sentences by arranging words in the correct order.',
    difficulty: 'Intermediate',
    duration: '20 min',
    skills: ['Grammar', 'Sentence structure', 'Reading fluency'],
    icon: '🔨',
    color: 'bg-indigo-500',
  },
];

// Define recent progress data (sample)
const recentProgress = [
  { activity: 'Phonics Fun', completed: '3/5 levels', date: '2 days ago' },
  { activity: 'Sight Word Games', completed: '7/10 words mastered', date: '1 week ago' },
  { activity: 'Reading Short Stories', completed: '2/6 stories', date: 'Today' },
];

export default function EnglishSubjectPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Link 
            href="/age-5-7"
            className="mr-2 text-blue-500 hover:text-blue-700"
          >
            ← Back to Ages 5-7
          </Link>
        </div>
        
        <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🔤</span>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">English for Ages 5-7</h1>
              <p className="text-blue-700">Strengthen reading and writing skills</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">
            The English curriculum for 5-7 year-olds focuses on strengthening early reading and writing skills 
            through phonics, vocabulary building, and beginning reading comprehension.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Key Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Phonics and letter-sound connections</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Sight word recognition</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Simple reading comprehension</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Handwriting and letter formation</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Basic sentence structure</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Storytelling and narrative basics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Activities</h2>
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-purple-800 mb-4">Learning Path</h2>
          <div className="space-y-6">
            <div className="relative pb-8 border-l-2 border-blue-300 pl-6">
              <div className="absolute -left-2 top-0 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
              <h3 className="font-bold text-lg text-gray-800">Phonics Foundations</h3>
              <p className="text-gray-600">Master letter sounds and basic phonetic patterns through interactive games and songs.</p>
            </div>
            
            <div className="relative pb-8 border-l-2 border-blue-300 pl-6">
              <div className="absolute -left-2 top-0 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center">2</div>
              <h3 className="font-bold text-lg text-gray-800">Sight Word Mastery</h3>
              <p className="text-gray-600">Learn to recognize common words to build reading fluency and confidence.</p>
            </div>
            
            <div className="relative pb-8 border-l-2 border-blue-300 pl-6">
              <div className="absolute -left-2 top-0 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center">3</div>
              <h3 className="font-bold text-lg text-gray-800">Simple Reading</h3>
              <p className="text-gray-600">Read short stories with guidance and answer comprehension questions.</p>
            </div>
            
            <div className="relative border-l-2 border-transparent pl-6">
              <div className="absolute -left-2 top-0 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center">4</div>
              <h3 className="font-bold text-lg text-gray-800">Writing Expression</h3>
              <p className="text-gray-600">Begin writing simple sentences and short creative stories with proper letter formation.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-purple-800 mb-4">Recent Progress</h2>
          {recentProgress.length > 0 ? (
            <div className="space-y-4">
              {recentProgress.map((item, index) => (
                <div key={index} className="border-b pb-3 last:border-0">
                  <h3 className="font-medium text-gray-800">{item.activity}</h3>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-blue-600">{item.completed}</span>
                    <span className="text-gray-500">{item.date}</span>
                  </div>
                </div>
              ))}
              <Link 
                href="/progress"
                className="block text-center bg-blue-100 text-blue-800 rounded py-2 mt-4 hover:bg-blue-200 transition"
              >
                View Full Progress
              </Link>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No activities completed yet. Start learning today!
            </p>
          )}
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips</h2>
        <p className="text-blue-700 mb-4">
          Here are some ways to support your child's English learning:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Read together daily and ask questions about the story</li>
          <li>Point out letter sounds in everyday words</li>
          <li>Practice sight words with flashcards or by labeling items around your home</li>
          <li>Encourage your child to write messages, lists, or simple stories</li>
          <li>Celebrate progress and keep learning sessions positive and engaging</li>
        </ul>
      </div>
    </div>
  );
} 