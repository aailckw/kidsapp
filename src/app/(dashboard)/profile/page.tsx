'use client';

import React from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  // Sample profile data
  const profile = {
    name: 'Alex Smith',
    age: 8,
    ageGroup: 'Independent Learners (8-10)',
    joinDate: 'January 15, 2023',
    totalActivities: 42,
    completedActivities: 28,
    favoriteSubjects: ['Mathematics', 'Science', 'Art'],
    achievements: [
      { name: 'Early Explorer', description: 'Completed 5 activities', icon: '🏅' },
      { name: 'Math Whiz', description: 'Mastered addition and subtraction', icon: '🧮' },
      { name: 'Bookworm', description: 'Read 10 interactive stories', icon: '📚' },
    ],
    recentProgress: [
      { subject: 'Mathematics', progress: 75, color: 'bg-green-500' },
      { subject: 'English', progress: 60, color: 'bg-blue-500' },
      { subject: 'Science', progress: 45, color: 'bg-purple-500' },
      { subject: 'Art', progress: 80, color: 'bg-pink-500' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="bg-purple-600 text-white p-6">
          <div className="flex items-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl">
              👧
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-purple-200">{profile.ageGroup}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">Account Information</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Member since:</span>
                  <span className="font-medium">{profile.joinDate}</span>
                </li>
                <li className="flex justify-between">
                  <span>Age:</span>
                  <span className="font-medium">{profile.age} years</span>
                </li>
                <li className="flex justify-between">
                  <span>Activities completed:</span>
                  <span className="font-medium">{profile.completedActivities} of {profile.totalActivities}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">Favorite Subjects</h2>
              <div className="flex flex-wrap gap-2">
                {profile.favoriteSubjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Learning Progress</h2>
            <div className="space-y-4">
              {profile.recentProgress.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.subject}</span>
                    <span className="text-sm font-medium text-gray-700">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`${item.color} h-2.5 rounded-full`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {profile.achievements.map((achievement, index) => (
              <div key={index} className="border rounded-lg p-4 flex items-center">
                <span className="text-3xl mr-3">{achievement.icon}</span>
                <div>
                  <h3 className="font-medium">{achievement.name}</h3>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link
          href="/home"
          className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Back to Dashboard
        </Link>
        
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
} 