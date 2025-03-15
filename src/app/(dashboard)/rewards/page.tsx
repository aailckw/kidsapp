'use client';

import React from 'react';
import Link from 'next/link';

interface Reward {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
  progress: number;
  pointsRequired: number;
  earnedPoints: number;
}

interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
  dateEarned: string;
}

const rewards: Reward[] = [
  {
    id: 1,
    name: 'Star Explorer Badge',
    description: 'Complete 10 science activities',
    icon: '⭐',
    category: 'Achievement',
    progress: 70,
    pointsRequired: 100,
    earnedPoints: 70
  },
  {
    id: 2,
    name: 'Math Wizard Trophy',
    description: 'Master all math skills in your age group',
    icon: '🏆',
    category: 'Trophy',
    progress: 45,
    pointsRequired: 200,
    earnedPoints: 90
  },
  {
    id: 3,
    name: 'Reading Champion',
    description: 'Read 20 interactive stories',
    icon: '📚',
    category: 'Achievement',
    progress: 60,
    pointsRequired: 150,
    earnedPoints: 90
  },
  {
    id: 4,
    name: 'Art Gallery Pass',
    description: 'Create 15 art projects',
    icon: '🎨',
    category: 'Pass',
    progress: 80,
    pointsRequired: 120,
    earnedPoints: 96
  },
  {
    id: 5,
    name: 'Music Maestro',
    description: 'Complete all music activities',
    icon: '🎵',
    category: 'Trophy',
    progress: 30,
    pointsRequired: 180,
    earnedPoints: 54
  },
  {
    id: 6,
    name: 'Digital Pet',
    description: 'Earn a virtual pet to take care of',
    icon: '🐶',
    category: 'Prize',
    progress: 90,
    pointsRequired: 300,
    earnedPoints: 270
  }
];

// Sample data for earned badges
const earnedBadges: Badge[] = [
  {
    id: 1,
    name: 'Early Explorer',
    description: 'Completed your first 5 activities',
    icon: '🔍',
    dateEarned: '2023-02-15'
  },
  {
    id: 2,
    name: 'Alphabet Master',
    description: 'Learned all letters of the alphabet',
    icon: '🔤',
    dateEarned: '2023-03-01'
  },
  {
    id: 3,
    name: 'Number Navigator',
    description: 'Completed counting from 1 to 100',
    icon: '🔢',
    dateEarned: '2023-03-22'
  },
  {
    id: 4,
    name: 'Clean Machine',
    description: 'Mastered all hygiene activities',
    icon: '🧼',
    dateEarned: '2023-04-10'
  }
];

export default function RewardsPage() {
  // Sample points balance
  const pointsBalance = 450;
  
  // Group rewards by category
  const rewardsByCategory = rewards.reduce<Record<string, Reward[]>>((acc, reward) => {
    if (!acc[reward.category]) {
      acc[reward.category] = [];
    }
    acc[reward.category].push(reward);
    return acc;
  }, {});
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-2">Rewards & Achievements</h1>
        <p className="text-gray-600">
          Earn points by completing activities and unlock special rewards!
        </p>
      </div>
      
      {/* Points Balance */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-md p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-1">Your Points Balance</h2>
            <p className="text-purple-100">Keep earning points to unlock rewards!</p>
          </div>
          <div className="text-4xl font-bold">{pointsBalance} ✨</div>
        </div>
      </div>
      
      {/* Available Rewards */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Available Rewards</h2>
        
        {Object.entries(rewardsByCategory).map(([category, categoryRewards]) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">{category}s</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryRewards.map((reward: Reward) => (
                <div key={reward.id} className="bg-white rounded-lg shadow-sm p-4 border hover:shadow-md transition">
                  <div className="flex items-center mb-3">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl flex-shrink-0">
                      {reward.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">{reward.name}</h4>
                      <p className="text-sm text-gray-500">{reward.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{reward.earnedPoints} / {reward.pointsRequired} points</span>
                      <span>{reward.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full"
                        style={{ width: `${reward.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button
                    className={`w-full py-2 rounded-lg text-sm font-medium ${
                      reward.earnedPoints >= reward.pointsRequired
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={reward.earnedPoints < reward.pointsRequired}
                  >
                    {reward.earnedPoints >= reward.pointsRequired ? 'Claim Reward' : `Need ${reward.pointsRequired - reward.earnedPoints} more points`}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Earned Badges */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Your Badges</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {earnedBadges.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
              {earnedBadges.map((badge: Badge) => (
                <div key={badge.id} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl mx-auto mb-2">
                    {badge.icon}
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">{badge.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">Earned on {new Date(badge.dateEarned).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              You haven't earned any badges yet. Keep learning!
            </p>
          )}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-yellow-100 rounded-lg p-6 border border-yellow-200 text-center">
        <h2 className="text-xl font-bold text-yellow-800 mb-2">Earn More Points!</h2>
        <p className="text-yellow-700 mb-4">
          Complete learning activities to earn points and unlock exciting rewards.
        </p>
        <Link
          href="/home"
          className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
} 