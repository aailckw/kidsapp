'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Music subject for age 11-12
const activities = [
  {
    id: 'music-theory',
    title: 'Music Theory Explorer',
    description: 'Learn about musical notation, scales, chords, and harmonies through interactive lessons and exercises.',
    difficulty: 'Intermediate to Advanced',
    duration: '40 min',
    skills: ['Notation Reading', 'Scales & Keys', 'Chord Structure', 'Rhythmic Patterns'],
    icon: '🎵',
    color: 'bg-teal-600',
  },
  {
    id: 'world-music',
    title: 'World Music Journey',
    description: 'Explore musical traditions from different cultures around the world, their instruments, styles, and historical contexts.',
    difficulty: 'Intermediate',
    duration: '45 min',
    skills: ['Cultural Appreciation', 'Music History', 'Instrument Recognition', 'Global Awareness'],
    icon: '🌍',
    color: 'bg-purple-600',
  },
  {
    id: 'digital-composition',
    title: 'Digital Music Lab',
    description: 'Create your own music using digital tools, learning about composition, arrangement, and sound engineering basics.',
    difficulty: 'Advanced',
    duration: '55 min',
    skills: ['Composition', 'Digital Audio', 'Arrangement', 'Sound Design'],
    icon: '🎚️',
    color: 'bg-blue-600',
  },
  {
    id: 'performance-skills',
    title: 'Performance Workshop',
    description: 'Develop skills for solo and group performance, including practice techniques, expression, and overcoming stage fright.',
    difficulty: 'Varies',
    duration: '50 min',
    skills: ['Performance Techniques', 'Musical Expression', 'Confidence Building', 'Collaboration'],
    icon: '🎤',
    color: 'bg-red-600',
  },
];

// Sample music genres for the listening section
const musicGenres = [
  {
    name: 'Classical',
    description: 'Orchestral works, chamber music, and solo pieces spanning from Baroque to contemporary Classical composers.',
    recommended: 'Mozart - Symphony No. 40, Beethoven - Moonlight Sonata',
    icon: '🎻',
  },
  {
    name: 'Jazz',
    description: 'Improvisation-based music with complex rhythms and harmonies, from early Blues and Swing to modern Fusion.',
    recommended: 'Louis Armstrong - What a Wonderful World, Ella Fitzgerald - Summertime',
    icon: '🎷',
  },
  {
    name: 'World Music',
    description: 'Traditional and contemporary music from various cultures around the world.',
    recommended: 'African drumming, Indian classical ragas, Japanese koto music',
    icon: '🪘',
  },
];

export default function MusicSubjectPage() {
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
        
        <div className="bg-teal-100 border-l-4 border-teal-600 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🎵</span>
            <div>
              <h1 className="text-2xl font-bold text-teal-800">Music for Ages 11-12</h1>
              <p className="text-teal-700">Music Appreciation & Performance Skills</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">
            Our Music curriculum for 11-12 year-olds develops musical understanding, appreciation, 
            and performance skills. Students will explore music theory, different genres and cultural 
            traditions, composition techniques, and build confidence in musical expression.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Key Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Reading and understanding musical notation</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Music theory and structure recognition</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Active listening and genre identification</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Digital composition and music creation</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Performance techniques and expression</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Musical cultural awareness and appreciation</span>
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
                      className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded"
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
          <h2 className="text-xl font-bold text-purple-800 mb-4">Virtual Instrument Studio</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-teal-100 to-blue-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🎹</span>
                <h3 className="text-xl font-bold text-blue-800">Learn & Play</h3>
                <p className="text-blue-600">Interactive instrument learning experience</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Explore virtual instruments, learn proper techniques, and play along with tutorials 
                and guided practice sessions. Perfect for beginners or developing existing instrument skills.
              </p>
              
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="bg-gray-50 p-2 rounded border flex flex-col items-center">
                  <span className="text-2xl mb-1">🎹</span>
                  <span className="text-xs text-center">Piano</span>
                </div>
                <div className="bg-gray-50 p-2 rounded border flex flex-col items-center">
                  <span className="text-2xl mb-1">🎸</span>
                  <span className="text-xs text-center">Guitar</span>
                </div>
                <div className="bg-gray-50 p-2 rounded border flex flex-col items-center">
                  <span className="text-2xl mb-1">🥁</span>
                  <span className="text-xs text-center">Drums</span>
                </div>
                <div className="bg-gray-50 p-2 rounded border flex flex-col items-center">
                  <span className="text-2xl mb-1">🎺</span>
                  <span className="text-xs text-center">More</span>
                </div>
              </div>
              
              <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
                Open Virtual Studio
              </button>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Your Music Projects</h2>
            <div className="bg-white rounded-lg shadow-md p-5">
              <p className="text-gray-600 mb-4">
                Track your compositions, practice sessions, and musical achievements.
              </p>
              <div className="space-y-3 mb-4">
                <div className="border-l-4 border-teal-500 pl-3 py-1 bg-gray-50">
                  <h4 className="font-medium text-gray-800">Simple Melody Composition</h4>
                  <p className="text-xs text-gray-500">Created 3 days ago • 75% complete</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3 py-1 bg-gray-50">
                  <h4 className="font-medium text-gray-800">World Music Exploration Journal</h4>
                  <p className="text-xs text-gray-500">Created 1 week ago • 40% complete</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3 py-1 bg-gray-50">
                  <h4 className="font-medium text-gray-800">Practice Log: Beginning Piano</h4>
                  <p className="text-xs text-gray-500">Updated yesterday • 12 practice sessions</p>
                </div>
              </div>
              <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
                View All Projects
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-purple-800 mb-4">Music Listening Guide</h2>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">🎧</span>
              <span>Genre Exploration</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Develop active listening skills by exploring different music genres and styles.
            </p>
            <div className="space-y-4">
              {musicGenres.map((genre, index) => (
                <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                  <h4 className="font-medium text-gray-800 flex items-center">
                    <span className="mr-2">{genre.icon}</span>
                    <span>{genre.name}</span>
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {genre.description}
                  </p>
                  <p className="text-xs font-medium text-teal-700 mt-1">
                    Try listening to: {genre.recommended}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">🎯</span>
              <span>Practice Challenge</span>
            </h3>
            <div className="bg-gray-50 p-3 rounded border mb-3">
              <p className="text-sm font-medium text-gray-800">
                Weekly Goal: Practice 15 minutes daily
              </p>
              <div className="mt-2 grid grid-cols-7 gap-1">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-xs text-gray-500">{day}</span>
                    <div className={`w-6 h-6 rounded-full mt-1 flex items-center justify-center ${i < 3 ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}>
                      {i < 3 && '✓'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Log Practice Session
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips</h2>
        <p className="text-blue-700 mb-4">
          Here are some ways to support your 11-12 year old's musical development:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Encourage regular practice with a consistent schedule</li>
          <li>Expose them to a variety of musical genres and traditions</li>
          <li>Consider music lessons if they show particular interest in an instrument</li>
          <li>Attend live musical performances or watch concert videos together</li>
          <li>Celebrate their musical efforts and creativity, not just achievement</li>
          <li>Create opportunities for them to perform for family or friends</li>
        </ul>
      </div>
    </div>
  );
} 