'use client';

import React from 'react';
import Link from 'next/link';

// Define subjects with their details for age 8-10
const subjects = [
  {
    id: 'english',
    name: 'English',
    icon: '🔤',
    color: 'bg-blue-500',
    description: 'Advance reading comprehension, vocabulary expansion, grammar basics, and writing composition.',
    activities: [
      'Interactive Book Club',
      'Creative Writing Workshop',
      'Vocabulary Challenge'
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: '🀄',
    color: 'bg-red-500',
    description: 'Strengthen Chinese language proficiency with reading comprehension, writing, and conversational skills.',
    activities: [
      'Chinese Story Series',
      'Character Writing Practice',
      'Conversation Simulator'
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '🔢',
    color: 'bg-green-500',
    description: 'Tackle multi-digit arithmetic, geometry, fractions, and problem-solving through interactive challenges.',
    activities: [
      'Math Quest Adventure',
      'Fraction Pizza Game',
      'Shape Explorer'
    ]
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    color: 'bg-purple-500',
    description: 'Dive deeper into biology, earth science, physics, and technology with virtual experiments.',
    activities: [
      'Human Body Explorer',
      'Solar System Adventure',
      'Simple Machines Workshop'
    ]
  },
  {
    id: 'hygiene',
    name: 'Hygiene',
    icon: '🚿',
    color: 'bg-cyan-500',
    description: 'Explore broader health concepts including fitness, nutrition, and introductory understanding of body systems.',
    activities: [
      'Build a Healthy Day',
      'Nutrition Mission',
      'Exercise Challenge'
    ]
  },
  {
    id: 'manners',
    name: 'Manners',
    icon: '👋',
    color: 'bg-yellow-500',
    description: 'Develop advanced social etiquette, empathy, conflict resolution, and online safety skills.',
    activities: [
      'Team Project Simulator',
      'Conflict Resolution Stories',
      'Digital Citizenship Guide'
    ]
  },
  {
    id: 'art',
    name: 'Art',
    icon: '🎨',
    color: 'bg-pink-500',
    description: 'Channel creativity into more ambitious projects with design, storytelling, and art techniques.',
    activities: [
      'Comic Creator',
      'Digital Paint Studio',
      'Famous Art Explorer'
    ]
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    color: 'bg-indigo-500',
    description: 'Understand musical notation, compose simple tunes, and explore diverse musical genres.',
    activities: [
      'Music Composer Lab',
      'Rhythm Challenge',
      'World Music Tour'
    ]
  },
  {
    id: 'social-studies',
    name: 'Social Studies',
    icon: '🌍',
    color: 'bg-orange-500',
    description: 'Discover history, geography, civics, and cultural studies through interactive adventures.',
    activities: [
      'Time Travel Adventures',
      'Map Skills Challenge',
      'World Culture Explorer'
    ]
  }
];

export default function IndependentLearnersPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🔍</span>
            <div>
              <h1 className="text-2xl font-bold text-orange-800">Ages 8-10: Independent Learners</h1>
              <p className="text-orange-700">Upper Primary</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">
          Children 8 to 10 years old are more adept learners, capable of longer focus and more complex thought. 
          Our curriculum transitions into deeper content in each subject, resembling upper elementary school topics 
          but delivered in an interactive, gamified manner that keeps learning enjoyable.
        </p>
        
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">Key Learning Goals</h3>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>Strengthen academic skills (reading comprehension, math, scientific reasoning)</li>
            <li>Develop critical thinking through challenges and problem-solving</li>
            <li>Foster creativity through projects and design activities</li>
            <li>Build empathy, teamwork, and understanding of differences</li>
            <li>Encourage independent learning and research skills</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-purple-800 mb-4">Learning Subjects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className={`${subject.color} p-4 text-white`}>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{subject.name}</h3>
                <span className="text-3xl">{subject.icon}</span>
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <p className="text-gray-600 mb-4">{subject.description}</p>
              
              <h4 className="font-medium text-gray-800 mb-2">Sample Activities:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {subject.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
              
              <Link 
                href={`/age-8-10/${subject.id}`}
                className={`inline-block px-4 py-2 rounded-full text-white ${subject.color} hover:opacity-90 transition`}
              >
                Explore Activities
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-orange-50 rounded-lg border border-orange-200">
        <h2 className="text-xl font-bold text-orange-800 mb-2">Parent Tips for Independent Learners</h2>
        <p className="text-orange-700 mb-4">
          Children at this age are developing their independence but still benefit from your support:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Allow them to explore subjects at their own pace, following their interests</li>
          <li>Encourage them to complete multi-step projects and activities</li>
          <li>Discuss what they're learning and ask them to explain concepts to you</li>
          <li>Help them make connections between different subjects</li>
          <li>Establish reasonable screen time limits while supporting their digital learning</li>
        </ul>
      </div>
    </div>
  );
} 