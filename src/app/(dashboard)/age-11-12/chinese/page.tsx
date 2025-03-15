'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Chinese subject for age 11-12
const activities = [
  {
    id: 'reading-comprehension',
    title: '阅读理解 (Reading Comprehension)',
    description: 'Read and comprehend longer texts, stories, and articles with more complex vocabulary and grammar structures.',
    difficulty: 'Intermediate to Advanced',
    duration: '40 min',
    skills: ['Reading', 'Vocabulary', 'Comprehension', 'Chinese Characters'],
    icon: '📚',
    color: 'bg-red-600',
  },
  {
    id: 'writing-practice',
    title: '写作练习 (Writing Practice)',
    description: 'Practice writing paragraphs, journal entries, and short stories using a broader range of expressions and structures.',
    difficulty: 'Advanced',
    duration: '45 min',
    skills: ['Writing', 'Grammar', 'Expression', 'Character Writing'],
    icon: '✍️',
    color: 'bg-orange-600',
  },
  {
    id: 'conversation-skills',
    title: '对话技巧 (Conversation Skills)',
    description: 'Engage in more complex conversations about daily life, opinions, and experiences with appropriate vocabulary and expressions.',
    difficulty: 'Intermediate to Advanced',
    duration: '35 min',
    skills: ['Speaking', 'Listening', 'Pronunciation', 'Communication'],
    icon: '🗣️',
    color: 'bg-yellow-600',
  },
  {
    id: 'cultural-exploration',
    title: '文化探索 (Cultural Exploration)',
    description: 'Learn about Chinese history, customs, festivals, and contemporary society through interactive lessons and projects.',
    difficulty: 'Varies',
    duration: '50 min',
    skills: ['Cultural Knowledge', 'History', 'Global Awareness', 'Critical Thinking'],
    icon: '🏮',
    color: 'bg-purple-600',
  },
];

export default function ChineseSubjectPage() {
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
        
        <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🀄</span>
            <div>
              <h1 className="text-2xl font-bold text-red-800">Chinese for Ages 11-12</h1>
              <p className="text-red-700">Advanced Language Skills & Cultural Understanding</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">
            Our Chinese curriculum for 11-12 year-olds builds on previous foundations to develop more 
            sophisticated language abilities. Students will expand their vocabulary, read and write longer 
            texts, engage in more complex conversations, and deepen their understanding of Chinese culture.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Key Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Reading and comprehending longer texts</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Writing paragraphs and short compositions</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Expanding vocabulary (800-1000 characters)</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Complex sentence structures and grammar</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Discussing topics with fluency and confidence</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Understanding Chinese culture and traditions</span>
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
                      className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded"
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
          <h2 className="text-xl font-bold text-purple-800 mb-4">Chinese Reading Challenge</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-red-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">📖</span>
                <h3 className="text-xl font-bold text-red-800">西游记 Journey to the West</h3>
                <p className="text-red-600">Adapted Classic Literature</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Explore this famous Chinese classic in a specially adapted version for young learners. 
                Follow the adventures of the Monkey King and his companions as they journey to India.
              </p>
              
              <div className="bg-gray-100 p-3 rounded mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Vocabulary Spotlight:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <div className="bg-white p-2 rounded border">
                    <div className="text-center">
                      <p className="text-lg font-bold">旅行</p>
                      <p className="text-xs text-gray-500">lǚ xíng</p>
                      <p className="text-sm">journey</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <div className="text-center">
                      <p className="text-lg font-bold">冒险</p>
                      <p className="text-xs text-gray-500">mào xiǎn</p>
                      <p className="text-sm">adventure</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <div className="text-center">
                      <p className="text-lg font-bold">勇气</p>
                      <p className="text-xs text-gray-500">yǒng qì</p>
                      <p className="text-sm">courage</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Progress: 3/12 chapters</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-purple-800 mb-4">Language Milestones</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-4">
              <h3 className="font-bold text-gray-800 flex items-center mb-2">
                <span className="text-xl mr-2">🎯</span>
                <span>Your Progress</span>
              </h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Characters Learned</span>
                    <span className="font-medium">687/800</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-red-500 rounded-full" style={{ width: "86%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Speaking Fluency</span>
                    <span className="font-medium">Level 4/6</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-red-500 rounded-full" style={{ width: "67%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Writing Skills</span>
                    <span className="font-medium">Level 3/6</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-red-500 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-3 border-t">
              <h4 className="font-medium text-gray-700 mb-2">Next Milestone:</h4>
              <div className="bg-red-50 p-2 rounded border border-red-200">
                <p className="text-sm font-medium text-red-800">Write a 200-character journal entry about your favorite hobby</p>
              </div>
              <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition mt-3">
                Start Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips</h2>
        <p className="text-blue-700 mb-4">
          Here are some ways to support your 11-12 year old\'s Chinese language development:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Encourage watching age-appropriate Chinese shows with subtitles</li>
          <li>Practice conversations in Chinese during daily activities</li>
          <li>Find Chinese pen pals or language exchange opportunities</li>
          <li>Celebrate Chinese festivals and discuss their cultural significance</li>
          <li>Use Chinese language apps and games to reinforce learning</li>
          <li>If possible, visit Chinese cultural events or centers in your area</li>
        </ul>
      </div>
    </div>
  );
} 