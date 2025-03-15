'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Science subject for age 2-4
const activities = [
  {
    id: 'water-play',
    title: 'Water Play Exploration',
    description: 'Experiment with objects that sink or float in our virtual water table, building early scientific thinking.',
    difficulty: 'Beginner',
    duration: '8 min',
    skills: ['Observation', 'Prediction', 'Cause and Effect'],
    icon: '💧',
    color: 'bg-blue-500',
  },
  {
    id: 'plant-growth',
    title: 'Plant a Virtual Seed',
    description: 'Watch a seed grow into a plant, learning about plant parts and what they need to grow.',
    difficulty: 'Beginner',
    duration: '10 min',
    skills: ['Life Cycles', 'Plant Parts', 'Growth Needs'],
    icon: '🌱',
    color: 'bg-green-500',
  },
  {
    id: 'animal-sounds',
    title: 'Animal Sounds & Habitats',
    description: 'Learn about different animals, the sounds they make, and where they live.',
    difficulty: 'Beginner',
    duration: '9 min',
    skills: ['Animal Recognition', 'Habitat Awareness', 'Auditory Discrimination'],
    icon: '🦁',
    color: 'bg-yellow-500',
  },
  {
    id: 'weather-watch',
    title: 'Weather Watcher',
    description: 'Explore different types of weather and the appropriate clothes for each weather type.',
    difficulty: 'Beginner to Intermediate',
    duration: '7 min',
    skills: ['Weather Recognition', 'Seasonal Changes', 'Appropriate Clothing'],
    icon: '☀️',
    color: 'bg-orange-500',
  },
];

// Sensory exploration categories
const sensoryCategories = [
  {
    name: 'Touch',
    icon: '👐',
    description: 'Explore different textures: soft, rough, bumpy, smooth',
    examples: ['Fabric scraps', 'Sandpaper', 'Bubble wrap', 'Smooth rocks'],
    color: 'bg-pink-100 text-pink-700'
  },
  {
    name: 'Sound',
    icon: '👂',
    description: 'Discover different sounds: loud, soft, high, low',
    examples: ['Bell ringing', 'Whispers', 'Animal noises', 'Musical instruments'],
    color: 'bg-purple-100 text-purple-700'
  },
  {
    name: 'Sight',
    icon: '👁️',
    description: 'Observe visual differences: colors, sizes, shapes',
    examples: ['Color mixing', 'Magnifying glass', 'Light and shadow', 'Finding shapes'],
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'Smell',
    icon: '👃',
    description: 'Identify different scents: sweet, sour, spicy',
    examples: ['Flowers', 'Fruits', 'Herbs', 'Cinnamon sticks'],
    color: 'bg-yellow-100 text-yellow-700'
  },
];

// Seasonal discovery projects
const seasonalProjects = [
  {
    season: 'Spring',
    title: 'Butterfly Life Cycle',
    description: 'Watch caterpillars transform into butterflies and learn about metamorphosis',
    icon: '🦋',
    color: 'from-green-100 to-yellow-100',
  },
  {
    season: 'Summer',
    title: 'Beach Science',
    description: 'Explore shells, sand, and ocean creatures through sensory activities',
    icon: '🏖️',
    color: 'from-blue-100 to-yellow-100',
  },
  {
    season: 'Fall',
    title: 'Leaf Collection',
    description: 'Discover different leaf shapes, colors, and textures during autumn',
    icon: '🍂',
    color: 'from-orange-100 to-red-100',
  },
  {
    season: 'Winter',
    title: 'Snow & Ice Experiments',
    description: 'Learn about freezing, melting, and states of matter with winter-themed activities',
    icon: '❄️',
    color: 'from-blue-100 to-gray-100',
  },
];

export default function SciencePage() {
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
        
        <div className="bg-purple-100 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-5xl mr-4">🔬</span>
            <div>
              <h1 className="text-3xl font-bold text-purple-800">Science</h1>
              <p className="text-purple-700 text-lg">Ages 2-4: Early Exploration & Discovery</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-lg">
          Our Science curriculum for ages 2-4 encourages curiosity about the world through 
          simple, hands-on exploration. At this stage, science learning is about sensory 
          experiences, discovering cause-and-effect relationships, and developing observational 
          skills through play.
        </p>
        
        <div className="bg-purple-50 rounded-lg p-5 border border-purple-200 mb-8">
          <h3 className="font-bold text-purple-800 mb-3 text-xl">Learning Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Explore nature and everyday phenomena</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Learn about animals, their sounds and habitats</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Discover plants and how they grow</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Experiment with simple physics concepts</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Observe weather and seasonal changes</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Develop observation and inquiry skills</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Featured Activities</h2>
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
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Sensory Exploration</h2>
        <p className="text-gray-600 mb-4">
          Young children learn best through their senses. These activities help develop sensory awareness and 
          vocabulary while introducing basic scientific concepts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sensoryCategories.map((category, index) => (
            <div key={index} className={`${category.color} rounded-lg p-4 border shadow-sm`}>
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-2">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <p className="text-sm mb-2">{category.description}</p>
              <div className="bg-white bg-opacity-50 rounded p-2">
                <h4 className="font-medium text-sm mb-1">Try These:</h4>
                <ul className="text-xs space-y-1">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-1.5"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Seasonal Discovery Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {seasonalProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className={`h-24 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                <span className="text-4xl">{project.icon}</span>
              </div>
              <div className="p-3">
                <div className="text-xs font-medium text-purple-500 mb-1">{project.season}</div>
                <h3 className="font-bold text-gray-800 mb-1">{project.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{project.description}</p>
                <button className="w-full bg-purple-500 text-white text-xs py-1.5 rounded hover:bg-purple-600 transition">
                  Explore Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Featured: Cause and Effect</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-purple-100 to-blue-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🧲</span>
                <h3 className="text-xl font-bold text-purple-800">Curious Connections</h3>
                <p className="text-purple-600">Discover what happens when we make changes</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Understanding cause and effect is a fundamental scientific concept that helps children make sense 
                of their world. These simple experiments help build critical thinking skills.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🔍</span>
                    <span>Shadow Play</span>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Move objects closer to and farther from a light source to see how shadows change
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🧊</span>
                    <span>Ice Melting Race</span>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Compare how quickly ice melts in different conditions (sun, shade, warm water)
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🧪</span>
                    <span>Color Mixing Magic</span>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Mix primary colors to create new colors in our virtual color lab
                  </p>
                </div>
              </div>
              
              <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                Try These Experiments
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Science Challenge</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🔎</span>
              <h3 className="text-lg font-bold">Daily Discovery</h3>
            </div>
            <div className="bg-purple-100 p-3 rounded mb-3">
              <p className="text-sm font-medium text-purple-800">
                Find something in your home that's magnetic. What happens when you put it near other things?
              </p>
            </div>
            <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">
              Log Your Discovery
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">📅</span>
              <span>Science Calendar</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              A new mini-experiment each day to keep curiosity growing!
            </p>
            <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">
              View Calendar
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-2">Parent Tips for Little Scientists</h2>
        <p className="text-yellow-700 mb-4">
          Young children are natural scientists! Here are some ways to support your child's scientific thinking:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Ask open-ended questions about what they observe ("What do you notice?" "I wonder why...")</li>
          <li>Take nature walks and collect leaves, rocks, or flowers to examine together</li>
          <li>Point out cause and effect in everyday situations ("What happens when we add soap to water?")</li>
          <li>Connect app activities to real-world experiences and extend the learning offline</li>
          <li>Encourage safe exploration and celebrate curiosity</li>
          <li>Use scientific vocabulary (observe, predict, experiment) even with very young children</li>
          <li>Create a "science corner" with magnifying glasses, measuring cups, and safe materials to explore</li>
        </ul>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-yellow-700 mb-2">Science Kit Essentials</h3>
            <p className="text-sm text-gray-600 mb-3">
              Create a simple science kit with these safe, household items for toddler-friendly experiments.
            </p>
            <button className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition">
              View Kit List
            </button>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-yellow-700 mb-2">Science Book Recommendations</h3>
            <p className="text-sm text-gray-600 mb-3">
              Age-appropriate science picture books that spark wonder and curiosity.
            </p>
            <button className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition">
              See Book List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 