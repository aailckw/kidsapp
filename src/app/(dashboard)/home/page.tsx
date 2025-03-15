'use client';

import React from 'react';
import Link from 'next/link';

const ageGroups = [
  {
    id: '2-4',
    name: 'Early Explorers',
    ageRange: '2-4',
    description: 'Learn through play, imitation, and sensory exploration.',
    color: 'bg-green-500',
    icon: '🧸',
  },
  {
    id: '5-7',
    name: 'Emerging Learners',
    ageRange: '5-7',
    description: 'Build language and thinking skills with structured tasks.',
    color: 'bg-blue-500',
    icon: '📚',
  },
  {
    id: '8-10',
    name: 'Independent Learners',
    ageRange: '8-10',
    description: 'Strengthen academic skills with deeper content.',
    color: 'bg-orange-500',
    icon: '🔍',
  },
  {
    id: '11-12',
    name: 'Young Achievers',
    ageRange: '11-12',
    description: 'Prepare for middle school with advanced content.',
    color: 'bg-purple-500',
    icon: '🚀',
  },
];

const subjects = [
  { id: 'english', name: 'English', icon: '🔤' },
  { id: 'chinese', name: 'Chinese', icon: '🀄' },
  { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'hygiene', name: 'Hygiene', icon: '🚿' },
  { id: 'manners', name: 'Manners', icon: '👋' },
  { id: 'art', name: 'Art', icon: '🎨' },
  { id: 'music', name: 'Music', icon: '🎵' },
  { id: 'social-studies', name: 'Social Studies', icon: '🌍' },
];

// Recent activities (sample data)
const recentActivities = [
  {
    id: 1,
    title: 'ABC Song',
    subject: 'English',
    completed: true,
    icon: '🔤',
  },
  {
    id: 2,
    title: 'Counting Game',
    subject: 'Mathematics',
    completed: false,
    icon: '🔢',
  },
  {
    id: 3,
    title: 'Animal Sounds',
    subject: 'Science',
    completed: true,
    icon: '🔬',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-2">Welcome to KidsLearn!</h1>
        <p className="text-lg text-gray-600">
          Explore our learning curriculum for children ages 2-12.
        </p>
      </section>

      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-800">Age Groups</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ageGroups.map((group) => (
            <div
              key={group.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className={`${group.color} p-4 text-white`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{group.name}</h3>
                  <span className="text-3xl">{group.icon}</span>
                </div>
                <p className="text-sm mt-1">Ages {group.ageRange}</p>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-600 mb-3">{group.description}</p>
                <Link
                  href={`/age-${group.id}`}
                  className={`inline-block px-4 py-2 rounded-md text-white ${group.color} hover:opacity-90 transition`}
                >
                  Explore Activities
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Learning Subjects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="border rounded-lg p-4 text-center hover:shadow-md transition"
            >
              <div className="text-3xl mb-2">{subject.icon}</div>
              <h3 className="font-medium mb-2">{subject.name}</h3>
              <Link href={`/subjects/${subject.id}`} className="text-blue-500 text-sm">
                View Lessons
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Recent Activities</h2>
        <div className="bg-white rounded-lg border p-4">
          {recentActivities.length > 0 ? (
            <ul className="divide-y">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{activity.icon}</span>
                    <div>
                      <h4 className="font-medium">{activity.title}</h4>
                      <p className="text-sm text-gray-500">{activity.subject}</p>
                    </div>
                  </div>
                  <div>
                    {activity.completed ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        In progress
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center py-4">
              No recent activities yet. Start exploring!
            </p>
          )}
        </div>
      </section>

      <section>
        <div className="bg-yellow-100 rounded-lg p-5 border border-yellow-200">
          <h2 className="text-xl font-bold text-yellow-800 mb-2">Ready to Learn?</h2>
          <p className="text-yellow-700 mb-4">
            Choose an age group above to begin exploring our curriculum with fun, interactive activities!
          </p>
          <Link 
            href="/profile"
            className="bg-yellow-500 text-white font-medium px-4 py-2 rounded inline-block hover:bg-yellow-600 transition"
          >
            View Your Progress
          </Link>
        </div>
      </section>
    </div>
  );
} 