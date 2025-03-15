'use client';

import React from 'react';
import Link from 'next/link';

// Define subjects with their details for age 2-4
const subjects = [
  {
    id: 'english',
    name: 'English',
    icon: '🔤',
    color: 'bg-blue-500',
    description: 'Early literacy through rhyming games, sing-along alphabet songs, and interactive storybooks.',
    activities: [
      'ABC Song Adventure',
      'Letter Recognition Games',
      'Simple Word Matching'
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: '🀄',
    color: 'bg-red-500',
    description: 'Introduction to Mandarin Chinese through songs, animated flashcards, and simple character recognition.',
    activities: [
      'Chinese Greetings',
      'Number Songs (1-10)',
      'Animal Names'
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '🔢',
    color: 'bg-green-500',
    description: 'Building number sense, shape recognition, and basic counting through interactive games.',
    activities: [
      'Counting Farm Animals',
      'Shape Sorter',
      'More vs. Less'
    ]
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    color: 'bg-purple-500',
    description: 'Exploring the natural world through sensory activities, animal sounds, and cause-effect experiments.',
    activities: [
      'Water Play: Sink or Float',
      'Animal Sounds & Habitats',
      'Plant a Virtual Seed'
    ]
  },
  {
    id: 'hygiene',
    name: 'Hygiene',
    icon: '🚿',
    color: 'bg-cyan-500',
    description: 'Learning personal care routines like handwashing, toothbrushing, and basic self-care habits.',
    activities: [
      'Handwashing Adventure',
      'Brush Your Teeth Song',
      'Get Dressed Game'
    ]
  },
  {
    id: 'manners',
    name: 'Manners',
    icon: '👋',
    color: 'bg-yellow-500',
    description: 'Developing social skills like saying please and thank you, sharing, and expressing feelings appropriately.',
    activities: [
      'Please & Thank You',
      'Taking Turns',
      'Feelings Friends'
    ]
  },
  {
    id: 'art',
    name: 'Art',
    icon: '🎨',
    color: 'bg-pink-500',
    description: 'Creative expression through finger painting, shape art, and colorful sensory experiences.',
    activities: [
      'Finger Painting',
      'Color Mixing Magic',
      'Shape Pictures'
    ]
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    color: 'bg-indigo-500',
    description: 'Introducing rhythm, songs, and sound exploration with interactive instruments and movement.',
    activities: [
      'Clap & Tap Rhythms',
      'Nursery Rhymes',
      'Musical Instruments'
    ]
  },
  {
    id: 'social-studies',
    name: 'Social Studies',
    icon: '🌍',
    color: 'bg-orange-500',
    description: 'Building awareness of family, community helpers, and the immediate world around them.',
    activities: [
      'Family Members',
      'Community Helpers',
      'My Home'
    ]
  }
];

// Featured activities for the home page
const featuredActivities = [
  {
    id: 'storytime-adventure',
    title: 'Interactive Storytime',
    description: 'Join our animated characters on a read-along adventure with sound effects and simple interactions.',
    icon: '📚',
    color: 'bg-blue-500',
    subject: 'English',
    duration: '10 min',
    path: '/age-2-4/english'
  },
  {
    id: 'counting-garden',
    title: 'Counting Garden',
    description: 'Help our friendly garden creatures count seeds, flowers, and butterflies in this colorful counting game.',
    icon: '🌻',
    color: 'bg-green-500',
    subject: 'Mathematics',
    duration: '8 min',
    path: '/age-2-4/mathematics'
  },
  {
    id: 'animal-sounds',
    title: 'Animal Concert',
    description: 'Listen to and match animal sounds in this fun musical game that builds listening skills and vocabulary.',
    icon: '🐘',
    color: 'bg-purple-500',
    subject: 'Science',
    duration: '7 min',
    path: '/age-2-4/science'
  }
];

// Developmental milestones for ages 2-4
const milestones = [
  {
    age: '2 years',
    language: 'Uses 50+ words, combines 2 words',
    cognitive: 'Follows 2-step instructions, sorts objects by shape',
    physical: 'Runs, kicks balls, builds tower of 4+ blocks',
    social: 'Plays alongside other children, imitates others'
  },
  {
    age: '3 years',
    language: 'Speaks in sentences, asks "why" questions',
    cognitive: 'Understands counting to 10, recognizes some letters',
    physical: 'Climbs well, uses tricycle, holds crayon properly',
    social: 'Takes turns, expresses various emotions, plays pretend'
  },
  {
    age: '4 years',
    language: 'Tells stories, uses complete sentences',
    cognitive: 'Names colors, understands time concepts',
    physical: 'Hops on one foot, catches bounced ball, uses scissors',
    social: 'Plays cooperatively, shows empathy, follows rules in games'
  }
];

export default function EarlyExplorersPage() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="bg-green-100 border-l-4 border-green-500 p-4 md:p-5 rounded-lg mb-4">
          <div className="flex items-center">
            <span className="text-4xl md:text-5xl mr-3 md:mr-4">🧸</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-green-800">Ages 2-4: Early Explorers</h1>
              <p className="text-green-700 text-base md:text-lg">Discover, Play, and Learn Together</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Children ages 2-4 learn primarily through play, imitation, and sensory exploration. Our curriculum
          introduces foundational concepts through colorful animations and interactive games, keeping
          sessions short and dynamic to match limited attention spans.
        </p>
        
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mb-5">
          <h3 className="font-bold text-yellow-800 mb-2 text-lg">Key Learning Goals</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-3 text-sm">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
              <span>Develop basic language skills in English and Chinese</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
              <span>Build early math sense and number recognition</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
              <span>Foster curiosity about the world</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
              <span>Establish self-care and hygiene habits</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
              <span>Practice social-emotional skills like sharing</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
              <span>Encourage creativity and self-expression</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Featured Activities Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-3">Today's Featured Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {featuredActivities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition"
            >
              <div className={`${activity.color} h-20 md:h-24 flex items-center justify-center`}>
                <span className="text-4xl md:text-5xl">{activity.icon}</span>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-bold text-gray-800 text-base mb-1">{activity.title}</h3>
                <div className="flex justify-between text-xs text-gray-600 mb-2">
                  <span>{activity.subject}</span>
                  <span>{activity.duration}</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-3">{activity.description}</p>
                <Link
                  href={activity.path}
                  className={`w-full block text-center py-1.5 text-sm rounded-lg text-white ${activity.color} hover:opacity-90 transition`}
                >
                  Start Activity
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Learning Paths Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 md:p-5 border border-blue-100">
          <div className="flex items-start justify-between flex-wrap sm:flex-nowrap gap-3">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-4xl md:text-5xl" role="img" aria-label="Learning Paths">🗺️</span>
              </div>
              <div className="ml-3 md:ml-4">
                <h2 className="text-xl md:text-2xl font-bold text-indigo-800">Learning Paths</h2>
                <p className="text-indigo-700 mt-1 text-xs md:text-sm">
                  Structured learning journeys designed to guide your child's development
                </p>
              </div>
            </div>
            <Link
              href="/age-2-4/learning-paths"
              className="px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition shadow-sm"
            >
              View All Paths
            </Link>
          </div>
          
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition flex">
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <span className="text-xl md:text-2xl">🔤</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base">Letter Explorer</h3>
                <p className="text-gray-600 text-xs mt-1">Journey through the alphabet, learning letters, sounds, and early reading skills</p>
                <div className="mt-2">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-600">40% complete</span>
                    <span className="text-gray-600">Level 2/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition flex">
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <span className="text-xl md:text-2xl">🔢</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base">Number Foundations</h3>
                <p className="text-gray-600 text-xs mt-1">Explore the world of numbers from counting to early math concepts</p>
                <div className="mt-2">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-600">15% complete</span>
                    <span className="text-gray-600">Level 1/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-3">Learning Subjects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {subjects.map((subject) => (
            <div 
              key={subject.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
            >
              <div className={`${subject.color} p-3 text-white`}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-white text-lg">{subject.name}</h3>
                  <span className="text-2xl">{subject.icon}</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-600 text-xs md:text-sm mb-3 line-clamp-3" style={{ minHeight: '3rem' }}>
                  {subject.description}
                </p>
                <ul className="mb-3 space-y-1">
                  {subject.activities.slice(0, 2).map((activity, index) => (
                    <li key={index} className="text-gray-700 text-xs flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-1.5 flex-shrink-0"></span>
                      {activity}
                    </li>
                  ))}
                  {subject.activities.length > 2 && (
                    <li className="text-gray-500 text-xs">+ {subject.activities.length - 2} more</li>
                  )}
                </ul>
                <Link 
                  href={`/age-2-4/${subject.id}`}
                  className={`block text-center text-white ${subject.color} hover:opacity-90 transition py-1.5 rounded text-sm`}
                >
                  Explore {subject.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 