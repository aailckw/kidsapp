'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Hygiene subject for age 2-4
const activities = [
  {
    id: 'hand-washing-heroes',
    title: 'Hand Washing Heroes',
    description: 'Learn the proper way to wash hands with fun characters and a special song.',
    difficulty: 'Beginner',
    duration: '5 min',
    skills: ['Cleanliness', 'Following Steps', 'Health Awareness'],
    icon: '🧼',
    color: 'bg-blue-500',
  },
  {
    id: 'toothy-time',
    title: 'Toothy Time',
    description: 'Discover how to brush teeth properly with animated tooth friends.',
    difficulty: 'Beginner',
    duration: '6 min',
    skills: ['Dental Care', 'Routine Building', 'Motor Skills'],
    icon: '🪥',
    color: 'bg-teal-500',
  },
  {
    id: 'bath-time-fun',
    title: 'Bath Time Fun',
    description: 'Make bathing fun with water play, bubbles, and cleaning games.',
    difficulty: 'Beginner',
    duration: '7 min',
    skills: ['Body Awareness', 'Self-Care', 'Sensory Play'],
    icon: '🛁',
    color: 'bg-indigo-500',
  },
  {
    id: 'germy-no-more',
    title: 'Germy No More',
    description: 'Learn about germs and how to stay healthy through interactive stories.',
    difficulty: 'Beginner',
    duration: '8 min',
    skills: ['Health Concepts', 'Cause & Effect', 'Prevention'],
    icon: '🦠',
    color: 'bg-green-500',
  },
];

// Hygiene routines
const routines = [
  {
    title: "Morning Routine",
    steps: [
      { action: "Wash face", icon: "🧼" },
      { action: "Brush teeth", icon: "🪥" },
      { action: "Comb hair", icon: "🧹" },
      { action: "Change clothes", icon: "👕" }
    ],
    color: "bg-yellow-100"
  },
  {
    title: "After Eating",
    steps: [
      { action: "Wipe mouth", icon: "🧻" },
      { action: "Wash hands", icon: "🧼" },
      { action: "Clean table", icon: "🧽" }
    ],
    color: "bg-orange-100"
  },
  {
    title: "Bedtime Routine",
    steps: [
      { action: "Take a bath", icon: "🛁" },
      { action: "Put on pajamas", icon: "🧸" },
      { action: "Brush teeth", icon: "🪥" },
      { action: "Wash hands", icon: "🧼" }
    ],
    color: "bg-blue-100"
  }
];

// Hygiene songs
const songs = [
  {
    title: "Washy Washy Clean",
    duration: "1:30",
    icon: "🧼",
    color: "bg-blue-100"
  },
  {
    title: "Brush Brush Smile",
    duration: "1:15",
    icon: "🪥",
    color: "bg-teal-100"
  },
  {
    title: "Splish Splash Bath Song",
    duration: "1:45",
    icon: "🛁",
    color: "bg-indigo-100"
  }
];

export default function HygienePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <Link 
            href="/age-2-4" 
            className="text-blue-500 hover:text-blue-700 mr-2"
          >
            ← Back to Early Explorers
          </Link>
        </div>
        
        <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-5xl mr-4">🧼</span>
            <div>
              <h1 className="text-3xl font-bold text-blue-800">Hygiene</h1>
              <p className="text-blue-700 text-lg">Ages 2-4: Healthy Habits & Self-Care</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-lg">
          Our Hygiene curriculum for ages 2-4 helps young children develop essential self-care 
          skills through playful, interactive activities. We make hygiene fun while building 
          healthy habits that will benefit children throughout their lives.
        </p>
        
        <div className="bg-blue-50 rounded-lg p-5 border border-blue-200 mb-8">
          <h3 className="font-bold text-blue-800 mb-3 text-xl">Learning Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Develop proper hand washing technique</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Learn basic tooth brushing skills</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Understand the importance of bathing</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Build awareness of germs and cleanliness</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Establish basic hygiene routines</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Connect hygiene practices with staying healthy</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Featured Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="bg-white rounded-lg border shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className={`${activity.color} p-4 text-white`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                  <span className="text-3xl">{activity.icon}</span>
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
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Daily Hygiene Routines</h2>
        <p className="text-gray-600 mb-4">
          Establishing consistent hygiene routines helps children develop good habits. 
          Follow these simple routines with your child every day.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {routines.map((routine, index) => (
            <div key={index} className={`${routine.color} rounded-lg p-4 border shadow-sm`}>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{routine.title}</h3>
              <ol className="space-y-2">
                {routine.steps.map((step, i) => (
                  <li key={i} className="flex items-center bg-white p-2 rounded-lg shadow-sm">
                    <span className="text-2xl mr-2">{step.icon}</span>
                    <span className="text-gray-700">{step.action}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex justify-center">
                <button className="bg-blue-500 text-white py-1.5 px-4 rounded hover:bg-blue-600 transition text-sm">
                  Print Routine Chart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Meet the Hygiene Heroes</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-100 to-teal-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🧼 🪥 🛁</span>
                <h3 className="text-xl font-bold text-blue-800">Squeaky Clean Squad</h3>
                <p className="text-blue-600">Join the adventure to stay healthy!</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Meet our friendly hygiene heroes who teach children about staying clean and healthy 
                through exciting adventures and challenges!
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🧼</span>
                    <span>Sudsy the Soap Bubble</span>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Sudsy helps children learn about hand washing and keeping clean.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🪥</span>
                    <span>Bristles the Toothbrush</span>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Bristles teaches the importance of dental hygiene and how to brush properly.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🛁</span>
                    <span>Bubbles the Bath Drop</span>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Bubbles makes bath time fun and teaches about body cleanliness.
                  </p>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Watch Hygiene Heroes
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Hygiene Songs</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🎵</span>
              <h3 className="text-lg font-bold">Catchy Tunes</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Sing along to these fun songs to make hygiene practices more engaging:
            </p>
            
            <div className="space-y-3">
              {songs.map((song, index) => (
                <div key={index} className={`${song.color} p-3 rounded border shadow-sm`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{song.icon}</span>
                      <h4 className="font-medium">{song.title}</h4>
                    </div>
                    <span className="text-xs bg-white px-2 py-0.5 rounded-full">{song.duration}</span>
                  </div>
                  <div className="mt-2 text-center">
                    <button className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full hover:bg-blue-600 transition">
                      ▶️ Play
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition mt-4">
              View All Songs
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">🦠</span>
              <span>Germ Detective</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Use our special UV light activity to show your child how germs hide on hands.
            </p>
            <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">
              Try This Activity
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Handwashing Steps</h2>
        <div className="bg-white rounded-lg shadow-md p-5">
          <p className="text-gray-600 text-sm mb-4">
            Teaching proper handwashing is one of the most important hygiene skills. 
            Follow these simple steps with your child:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <span className="text-2xl block mb-1">💧</span>
              <h4 className="text-sm font-medium mb-1">Step 1</h4>
              <p className="text-xs">Wet hands</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <span className="text-2xl block mb-1">🧼</span>
              <h4 className="text-sm font-medium mb-1">Step 2</h4>
              <p className="text-xs">Add soap</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <span className="text-2xl block mb-1">👏</span>
              <h4 className="text-sm font-medium mb-1">Step 3</h4>
              <p className="text-xs">Rub together</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <span className="text-2xl block mb-1">🎵</span>
              <h4 className="text-sm font-medium mb-1">Step 4</h4>
              <p className="text-xs">Scrub & sing</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <span className="text-2xl block mb-1">💦</span>
              <h4 className="text-sm font-medium mb-1">Step 5</h4>
              <p className="text-xs">Rinse well</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <span className="text-2xl block mb-1">🧻</span>
              <h4 className="text-sm font-medium mb-1">Step 6</h4>
              <p className="text-xs">Dry hands</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <h4 className="font-bold text-blue-800 flex items-center mb-2">
              <span className="text-xl mr-2">🎵</span>
              <span>Handwashing Song</span>
            </h4>
            <p className="text-sm text-gray-700 italic">
              "Wash, wash, wash your hands, <br />
              Make them nice and clean! <br />
              Scrub the tops and in between, <br />
              Count slowly to fifteen!"
            </p>
            <p className="text-xs text-gray-500 mt-2">
              (Sing to the tune of "Row, Row, Row Your Boat")
            </p>
          </div>
          
          <button className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            <span className="mr-2">📥</span>
            <span>Download Handwashing Poster</span>
          </button>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips for Hygiene Skills Development</h2>
        <p className="text-blue-700 mb-4">
          Young children are still developing motor skills needed for self-care. Here's how you can support your child:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Make hygiene routines fun, not a chore - use songs, stories, and games</li>
          <li>Be consistent with daily routines to build habits</li>
          <li>Demonstrate proper techniques first, then guide your child through each step</li>
          <li>Use visual reminders like bathroom charts with pictures</li>
          <li>Provide child-sized supplies (small toothbrush, step stool for sink)</li>
          <li>Offer specific praise for efforts ("Great job scrubbing between your fingers!")</li>
          <li>Read books about hygiene and staying healthy</li>
        </ul>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-blue-700 mb-2">Making Bath Time Fun</h3>
            <p className="text-sm text-gray-600 mb-3">
              Techniques to make bathing enjoyable while teaching about body care and cleanliness.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              View Tips
            </button>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-blue-700 mb-2">Sensory Sensitivities</h3>
            <p className="text-sm text-gray-600 mb-3">
              Helpful advice for children who may be sensitive to water, textures, or sounds during hygiene routines.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 