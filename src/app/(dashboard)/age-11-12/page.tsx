'use client';

import React from 'react';
import Link from 'next/link';

// Define subjects with their details for age 11-12
const subjects = [
  {
    id: 'english',
    name: 'English',
    icon: '🔤',
    color: 'bg-blue-500',
    description: 'Refine advanced reading and writing skills with text analysis, character studies, and various writing styles.',
    activities: [
      'Book Club Discussions',
      'Writing Workshop',
      'Media Literacy Analysis'
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: '🀄',
    color: 'bg-red-500',
    description: 'Develop greater confidence in Mandarin with reading comprehension, paragraph writing, and conversational fluency.',
    activities: [
      'Chinese Story Series',
      'Paragraph Writing',
      'Conversation Simulator'
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '🔢',
    color: 'bg-green-500',
    description: 'Cover advanced arithmetic, pre-algebra, complex fractions/decimals/percents, and geometry through problem-solving.',
    activities: [
      'Math Strategy Games',
      'Real-World Problem Solving',
      'Geometry Builder'
    ]
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    color: 'bg-purple-500',
    description: 'Engage with deeper scientific inquiries in biology, chemistry, physics, and earth science with the scientific method.',
    activities: [
      'Science Fair Project Builder',
      'Chemistry Lab Simulator',
      'Space Exploration Missions'
    ]
  },
  {
    id: 'hygiene',
    name: 'Hygiene',
    icon: '🚿',
    color: 'bg-cyan-500',
    description: 'Address evolving health needs including puberty education, mental health, and comprehensive wellness.',
    activities: [
      'Body Changes Guide',
      'Mental Wellness Toolkit',
      'Healthy Habits Planner'
    ]
  },
  {
    id: 'manners',
    name: 'Manners',
    icon: '👋',
    color: 'bg-yellow-500',
    description: 'Prepare for adolescence with character building, ethics, advanced interpersonal skills, and digital citizenship.',
    activities: [
      'Ethical Dilemmas',
      'Leadership Challenges',
      'Digital Ethics Simulator'
    ]
  },
  {
    id: 'art',
    name: 'Art',
    icon: '🎨',
    color: 'bg-pink-500',
    description: 'Undertake ambitious creative projects with advanced techniques in digital art, design, and animation.',
    activities: [
      'Digital Portfolio Project',
      'Animation Studio',
      'Art History Tour'
    ]
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    color: 'bg-indigo-500',
    description: 'Deepen musical engagement with notation, composition, diverse genres, and music production.',
    activities: [
      'Music Studio Pro',
      'Composition Workshop',
      'Genre Explorer'
    ]
  },
  {
    id: 'social-studies',
    name: 'Social Studies',
    icon: '🌍',
    color: 'bg-orange-500',
    description: 'Connect past, present, and future with in-depth history, civics, economics, and global awareness.',
    activities: [
      'Global Quest Time Machine',
      'Democracy Simulator',
      'Cultural Exchange Program'
    ]
  }
];

export default function YoungAchieversPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🚀</span>
            <div>
              <h1 className="text-2xl font-bold text-purple-800">Ages 11-12: Young Achievers</h1>
              <p className="text-purple-700">Middle School Prep</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">
          The 11-12 age group is on the cusp of adolescence and preparing for the more structured learning of middle school. 
          Our curriculum is designed to consolidate skills acquired so far and push learners into higher-order thinking, 
          all while still embracing interactive and gamified learning.
        </p>
        
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">Key Learning Goals</h3>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>Master foundational academic skills in preparation for middle school</li>
            <li>Develop critical thinking, reasoning, and problem-solving abilities</li>
            <li>Foster creativity, planning, and originality in projects</li>
            <li>Build self-awareness, identity, and preparation for teen years</li>
            <li>Integrate knowledge across subjects through interdisciplinary learning</li>
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
                href={`/age-11-12/${subject.id}`}
                className={`inline-block px-4 py-2 rounded-full text-white ${subject.color} hover:opacity-90 transition`}
              >
                Explore Activities
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-purple-50 rounded-lg border border-purple-200">
        <h2 className="text-xl font-bold text-purple-800 mb-2">Parent Tips for Young Achievers</h2>
        <p className="text-purple-700 mb-4">
          Children at this age are developing more independence and preparing for adolescence:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Support their growing independence while providing guidance when needed</li>
          <li>Encourage them to take on longer, multi-session projects requiring planning</li>
          <li>Discuss more complex topics and encourage critical thinking about content</li>
          <li>Help them connect online learning with school expectations</li>
          <li>Discuss digital citizenship, online safety, and responsible technology use</li>
        </ul>
      </div>
    </div>
  );
} 