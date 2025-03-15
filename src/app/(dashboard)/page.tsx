'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Dashboard navigation links
const navigation = [
  { name: 'Dashboard', href: '/', icon: '🏠', color: 'bg-blue-500' },
  { name: 'Profile', href: '/profile', icon: '👤', color: 'bg-purple-500' },
  { name: 'Progress', href: '/progress', icon: '📊', color: 'bg-green-500' },
  { name: 'Learning Paths', href: '/age-2-4/learning-paths', icon: '🗺️', color: 'bg-indigo-500' },
  { name: 'Settings', href: '/settings', icon: '⚙️', color: 'bg-gray-500' },
];

// Age groups
const ageGroups = [
  { 
    id: 'age-2-4', 
    name: 'Ages 2-4', 
    icon: '🧸', 
    color: 'bg-green-500',
    description: 'Early childhood exploration with sensory play and basic concepts'
  },
  { 
    id: 'age-5-7', 
    name: 'Ages 5-7', 
    icon: '🎨', 
    color: 'bg-blue-500',
    description: 'Building foundational skills in reading, math, and science'
  },
  { 
    id: 'age-8-10', 
    name: 'Ages 8-10', 
    icon: '🔍', 
    color: 'bg-purple-500',
    description: 'Developing critical thinking through interactive challenges'
  },
  { 
    id: 'age-11-12', 
    name: 'Ages 11-12', 
    icon: '🚀', 
    color: 'bg-orange-500',
    description: 'Advanced concepts and project-based learning experiences'
  },
];

export default function DashboardPage() {
  const pathname = usePathname();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">KidsLearn Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to your personalized learning platform. Choose an age group or explore your progress.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center p-4 rounded-lg border ${
                pathname === item.href
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:bg-gray-50'
              } transition duration-150 ease-in-out`}
            >
              <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white text-2xl mb-3`}>
                {item.icon}
              </div>
              <span className={`text-sm font-medium ${
                pathname === item.href ? 'text-blue-600' : 'text-gray-900'
              }`}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Learning Path */}
      <div className="mb-10">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <div className="flex items-start md:items-center justify-between">
            <div className="flex flex-col md:flex-row md:items-center">
              <span className="text-4xl md:text-5xl mr-4 mb-3 md:mb-0">🗺️</span>
              <div>
                <h2 className="text-xl font-bold text-indigo-900">Featured Learning Journey</h2>
                <p className="text-indigo-700 mt-1">Letter Explorer: Learn the alphabet step-by-step</p>
              </div>
            </div>
            <Link
              href="/learning-path/letter-explorer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue Journey
            </Link>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-gray-600">40% complete</span>
              <span className="text-gray-600">Level 2/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Age Groups */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Age Group</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ageGroups.map((ageGroup) => (
            <Link 
              key={ageGroup.id} 
              href={`/${ageGroup.id}`} 
              className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-150 ease-in-out border border-gray-200"
            >
              <div className={`${ageGroup.color} px-6 py-4 text-white`}>
                <div className="flex items-center">
                  <span className="text-4xl mr-3">{ageGroup.icon}</span>
                  <h3 className="text-xl font-bold">{ageGroup.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{ageGroup.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                  <span>Explore curriculum</span>
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  {['🔤', '🔢', '🧩'][i-1]}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {['Completed "Letter Sounds" activity', 'Started "Counting 1-10" lesson', 'Earned "Shape Master" milestone'][i-1]}
                  </p>
                  <p className="text-sm text-gray-500">
                    {['2 hours ago', 'Yesterday', '3 days ago'][i-1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Link href="/progress" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all activity <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  {['🏆', '🌟', '🎯'][i-1]}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {['Letter Spotter', 'Counting Star', 'Shape Master'][i-1]}
                  </p>
                  <p className="text-sm text-gray-500">
                    {['Identified all basic alphabet letters', 'Mastered counting from 1 to 10', 'Recognized all basic shapes'][i-1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Link href="/profile" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all achievements <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 