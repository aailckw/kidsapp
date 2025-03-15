'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Science subject for age 11-12
const activities = [
  {
    id: 'scientific-method',
    title: 'Scientific Investigation Lab',
    description: 'Design and conduct experiments following the scientific method to answer testable questions.',
    difficulty: 'Intermediate to Advanced',
    duration: '50 min',
    skills: ['Scientific Method', 'Data Collection', 'Analysis', 'Drawing Conclusions'],
    icon: '🔬',
    color: 'bg-purple-600',
  },
  {
    id: 'earth-systems',
    title: 'Earth Systems Explorer',
    description: 'Investigate the interactions between Earth\'s major systems: atmosphere, biosphere, hydrosphere, and geosphere.',
    difficulty: 'Advanced',
    duration: '45 min',
    skills: ['Earth Science', 'Systems Thinking', 'Climate Patterns', 'Geological Processes'],
    icon: '🌍',
    color: 'bg-blue-600',
  },
  {
    id: 'living-systems',
    title: 'Living Systems & Ecosystems',
    description: 'Explore the complexity of ecosystems, food webs, and how living organisms interact with their environment.',
    difficulty: 'Intermediate to Advanced',
    duration: '40 min',
    skills: ['Ecology', 'Classification', 'Adaptation', 'Environmental Science'],
    icon: '🌱',
    color: 'bg-green-600',
  },
  {
    id: 'physical-science',
    title: 'Physical Science Laboratory',
    description: 'Investigate matter, energy, forces, and motion through interactive simulations and experiments.',
    difficulty: 'Advanced',
    duration: '45 min',
    skills: ['Chemistry Basics', 'Physics Concepts', 'Energy Transfer', 'Scientific Models'],
    icon: '⚡',
    color: 'bg-amber-600',
  },
];

export default function ScienceSubjectPage() {
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
        
        <div className="bg-purple-100 border-l-4 border-purple-600 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🧪</span>
            <div>
              <h1 className="text-2xl font-bold text-purple-800">Science for Ages 11-12</h1>
              <p className="text-purple-700">Advanced Scientific Inquiry & Discovery</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">
            Our Science curriculum for 11-12 year-olds emphasizes scientific inquiry and critical thinking 
            while exploring more complex scientific concepts. Students will conduct investigations, 
            analyze data, and develop deeper understanding of Earth, life, and physical sciences.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Key Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Scientific inquiry and investigation</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Data collection, analysis, and interpretation</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Understanding of Earth\'s systems and cycles</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Life sciences and ecosystem interactions</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Chemistry and physics fundamentals</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Scientific modeling and prediction</span>
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
                      className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded"
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
          <h2 className="text-xl font-bold text-purple-800 mb-4">Current Science Project</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🌡️</span>
                <h3 className="text-xl font-bold text-blue-800">Weather Patterns Investigation</h3>
                <p className="text-blue-600">Climate Science Project</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Track local weather patterns over time, analyze the data, and investigate relationships 
                between atmospheric conditions. Compare your findings with historical climate data.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Project Phases:</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <span className="text-green-700">Phase 1: Set up weather station and data collection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <span className="text-green-700">Phase 2: Gather daily weather measurements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">→</span>
                      </div>
                    </div>
                    <span className="text-yellow-700">Phase 3: Analyze data and identify patterns (In Progress)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">4</span>
                      </div>
                    </div>
                    <span className="text-gray-500">Phase 4: Compare with historical data</span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">5</span>
                      </div>
                    </div>
                    <span className="text-gray-500">Phase 5: Create final report and presentation</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Continue Project
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-purple-800 mb-4">Science in the News</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="space-y-4">
              <div className="border-b pb-3">
                <span className="text-xs text-purple-600 font-semibold">SPACE EXPLORATION</span>
                <h3 className="font-bold text-gray-800">New Images from Mars Rover</h3>
                <p className="text-sm text-gray-600 mt-1">
                  NASA has released fascinating new images from the Perseverance rover showing evidence of ancient water flows.
                </p>
              </div>
              
              <div className="border-b pb-3">
                <span className="text-xs text-green-600 font-semibold">BIOLOGY</span>
                <h3 className="font-bold text-gray-800">Amazing Adaptations</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Scientists discover remarkable new adaptation in deep-sea creatures that allows them to survive extreme pressure.
                </p>
              </div>
              
              <div>
                <span className="text-xs text-amber-600 font-semibold">TECHNOLOGY</span>
                <h3 className="font-bold text-gray-800">Clean Energy Breakthrough</h3>
                <p className="text-sm text-gray-600 mt-1">
                  New solar panel technology achieves record-breaking efficiency, potentially making renewable energy more accessible.
                </p>
              </div>
            </div>
            
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition mt-4">
              Explore Science News
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips</h2>
        <p className="text-blue-700 mb-4">
          Here are some ways to support your 11-12 year old\'s scientific development:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Encourage questions about how things work and research answers together</li>
          <li>Visit science museums, nature centers, or attend science events</li>
          <li>Watch science documentaries and discuss the concepts presented</li>
          <li>Help them set up simple experiments at home with household materials</li>
          <li>Connect science concepts to real-world issues and current events</li>
          <li>Discuss careers in STEM fields and potential pathways</li>
        </ul>
      </div>
    </div>
  );
} 