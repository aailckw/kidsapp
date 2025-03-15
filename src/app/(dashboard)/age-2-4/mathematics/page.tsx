'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Mathematics subject for age 2-4
const activities = [
  {
    id: 'counting-farm',
    title: 'Counting Farm Animals',
    description: 'Count different animals on the farm with fun sounds and animations as rewards.',
    difficulty: 'Beginner',
    duration: '8 min',
    skills: ['Counting 1-10', 'Number Recognition', 'Animal Identification'],
    icon: '🐄',
    color: 'bg-green-500',
  },
  {
    id: 'shape-sorter',
    title: 'Shape Sorter',
    description: 'Match shapes to their corresponding slots in this digital shape sorter game.',
    difficulty: 'Beginner',
    duration: '7 min',
    skills: ['Shape Recognition', 'Spatial Awareness', 'Fine Motor Skills'],
    icon: '🔶',
    color: 'bg-orange-500',
  },
  {
    id: 'more-less',
    title: 'More vs. Less',
    description: 'Compare groups of objects to determine which has more or less items.',
    difficulty: 'Beginner to Intermediate',
    duration: '6 min',
    skills: ['Comparison', 'Quantity Recognition', 'Early Addition/Subtraction'],
    icon: '⚖️',
    color: 'bg-purple-500',
  },
  {
    id: 'pattern-play',
    title: 'Pattern Play',
    description: 'Complete simple patterns with colors, shapes, and objects to develop pattern recognition.',
    difficulty: 'Intermediate',
    duration: '10 min',
    skills: ['Pattern Recognition', 'Logical Thinking', 'Sequential Ordering'],
    icon: '🔄',
    color: 'bg-teal-500',
  },
  {
    id: 'size-ordering',
    title: 'Big, Medium, Small',
    description: 'Sort objects by size and learn concepts like bigger, smaller, tallest, and shortest.',
    difficulty: 'Beginner',
    duration: '8 min',
    skills: ['Size Comparison', 'Ordering', 'Visual Discrimination'],
    icon: '📏',
    color: 'bg-blue-500',
  },
  {
    id: 'number-puzzles',
    title: 'Number Puzzles',
    description: 'Match numbers with the correct quantity of objects in fun puzzle games.',
    difficulty: 'Beginner to Intermediate',
    duration: '9 min',
    skills: ['Number-Quantity Association', 'Problem Solving', 'Memory'],
    icon: '🧩',
    color: 'bg-indigo-500',
  },
];

// Numbers for interactive counting
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Basic shapes for recognition
const shapes = [
  { name: 'Circle', icon: '⭕', color: 'bg-red-100 text-red-500' },
  { name: 'Square', icon: '⬛', color: 'bg-blue-100 text-blue-500' },
  { name: 'Triangle', icon: '🔺', color: 'bg-green-100 text-green-500' },
  { name: 'Rectangle', icon: '▬', color: 'bg-purple-100 text-purple-500' },
  { name: 'Star', icon: '⭐', color: 'bg-yellow-100 text-yellow-500' },
  { name: 'Heart', icon: '❤️', color: 'bg-pink-100 text-pink-500' },
];

// Counting rhymes for young children
const countingRhymes = [
  {
    title: 'Five Little Ducks',
    preview: 'Five little ducks went out one day...',
    skill: 'Counting backwards from 5',
    icon: '🦆',
    color: 'bg-blue-100'
  },
  {
    title: 'Ten in the Bed',
    preview: 'There were ten in the bed and the little one said...',
    skill: 'Counting backwards from 10',
    icon: '🛏️',
    color: 'bg-purple-100'
  },
  {
    title: 'Five Little Monkeys',
    preview: 'Five little monkeys jumping on the bed...',
    skill: 'Subtraction concepts',
    icon: '🐒',
    color: 'bg-yellow-100'
  },
  {
    title: 'One, Two, Buckle My Shoe',
    preview: 'One, two, buckle my shoe...',
    skill: 'Sequence counting to 10',
    icon: '👞',
    color: 'bg-green-100'
  },
];

// Math concepts with examples
const mathConcepts = [
  {
    concept: 'Sorting',
    description: 'Grouping objects by color, shape, or size',
    example: 'Put all red blocks together, blue blocks together',
    icon: '🧮',
    color: 'bg-pink-50'
  },
  {
    concept: 'Matching',
    description: 'Finding pairs that go together',
    example: 'Match the sock pairs or shoes',
    icon: '🧦',
    color: 'bg-blue-50'
  },
  {
    concept: 'Comparing',
    description: 'Understanding more, less, same, different',
    example: 'Which bowl has more strawberries?',
    icon: '⚖️',
    color: 'bg-purple-50'
  },
  {
    concept: 'Sequencing',
    description: 'Arranging objects in a logical order',
    example: 'Ordering blocks from smallest to biggest',
    icon: '📊',
    color: 'bg-yellow-50'
  },
];

// Math activities for home
const homeActivities = [
  {
    title: 'Counting Steps',
    description: 'Count steps as you walk up stairs or down hallways',
    materials: 'Just your feet!',
    benefits: 'Practices counting in a real-world context',
    icon: '👣'
  },
  {
    title: 'Shape Hunt',
    description: 'Find different shapes around your home',
    materials: 'Everyday objects in your home',
    benefits: 'Connects math shapes to real objects',
    icon: '🔍'
  },
  {
    title: 'Sorting Laundry',
    description: 'Sort socks by color or size together',
    materials: 'Clean laundry, especially socks',
    benefits: 'Practices categorization and matching',
    icon: '🧦'
  },
  {
    title: 'Baking Together',
    description: 'Count ingredients and use measuring cups',
    materials: 'Simple recipe ingredients',
    benefits: 'Introduces measurement and counting',
    icon: '🧁'
  },
];

export default function MathematicsPage() {
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
        
        <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-5xl mr-4">🔢</span>
            <div>
              <h1 className="text-3xl font-bold text-green-800">Mathematics</h1>
              <p className="text-green-700 text-lg">Ages 2-4: Early Number Skills</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-lg">
          Our Mathematics curriculum for ages 2-4 focuses on building early number sense through playful, 
          interactive activities. Children will develop foundational math skills through counting games, 
          shape recognition, and basic comparisons.
        </p>
        
        <div className="bg-yellow-50 rounded-lg p-5 border border-yellow-200 mb-8">
          <h3 className="font-bold text-yellow-800 mb-3 text-xl">Learning Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Count with one-to-one correspondence up to 10</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Recognize and name basic shapes</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Compare quantities (more, less, same)</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Identify and continue simple patterns</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Sort objects by color, size, and shape</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Develop spatial awareness and reasoning</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Use mathematical language in everyday situations</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Build foundation for early addition and subtraction</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Featured Activities</h2>
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
                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Count with Me!</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🔢</span>
              <h3 className="text-lg font-bold">Interactive Counting</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Touch each number to hear it pronounced and see objects to count!
            </p>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {numbers.map((number) => (
                <button 
                  key={number} 
                  className="h-12 w-12 bg-green-100 rounded-lg hover:bg-green-200 flex items-center justify-center text-xl font-bold text-green-800"
                >
                  {number}
                </button>
              ))}
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
              Start Counting Game
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">🧩</span>
              <span>Today's Challenge</span>
            </h3>
            <div className="bg-yellow-100 p-3 rounded mb-3">
              <p className="text-sm font-medium text-yellow-800">
                Can you find and count all the red objects in your home?
              </p>
            </div>
            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
              Mark Complete
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">📊</span>
              <span>Progress Tracker</span>
            </h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">Counting Skills</span>
                  <span>70%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">Shape Recognition</span>
                  <span>85%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">Patterns</span>
                  <span>45%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">Comparisons</span>
                  <span>60%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded mt-3 hover:bg-green-600 transition">
              View Detailed Progress
            </button>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Shape Explorer</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-gradient-to-r from-green-100 to-blue-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🔶 ⭕ ⬛</span>
                <h3 className="text-xl font-bold text-green-800">Learn Basic Shapes</h3>
                <p className="text-green-600">Touch, explore and match shapes</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Learning to recognize shapes helps develop visual discrimination skills and early 
                geometry concepts. Explore these basic shapes through fun interactive activities.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                {shapes.map((shape, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg ${shape.color} flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition`}
                  >
                    <span className="text-3xl mb-1">{shape.icon}</span>
                    <span className="font-medium">{shape.name}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                Play Shape Games
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-5 mt-6">
            <h2 className="text-xl font-bold text-green-800 mb-3">Math Through Songs & Rhymes</h2>
            <p className="text-gray-600 mb-4">
              Young children learn math concepts easily through fun songs and rhymes. These musical activities reinforce counting, 
              number sequence, and early arithmetic concepts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {countingRhymes.map((rhyme, index) => (
                <div key={index} className={`${rhyme.color} p-4 rounded-lg border hover:shadow-md transition`}>
                  <div className="flex items-start">
                    <span className="text-3xl mr-3">{rhyme.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{rhyme.title}</h3>
                      <p className="text-sm text-gray-600 italic mb-1">"{rhyme.preview}"</p>
                      <p className="text-xs text-gray-500">Skill: {rhyme.skill}</p>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-green-500 text-white text-sm py-1.5 rounded hover:bg-green-600 transition flex items-center justify-center">
                    <span className="mr-1">▶️</span>
                    <span>Listen & Sing Along</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Early Math Concepts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mathConcepts.map((concept, index) => (
                <div key={index} className={`${concept.color} rounded-lg p-4 border`}>
                  <div className="flex items-start mb-2">
                    <span className="text-3xl mr-3">{concept.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{concept.concept}</h3>
                      <p className="text-sm text-gray-600">{concept.description}</p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-70 p-2 rounded">
                    <p className="text-xs font-medium">Try this:</p>
                    <p className="text-sm">{concept.example}</p>
                  </div>
                  <button className="w-full mt-3 bg-green-500 text-white text-sm py-1.5 rounded hover:bg-green-600 transition">
                    Play Activity
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-5 mb-10">
        <h2 className="text-xl font-bold text-green-800 mb-3 flex items-center">
          <span className="text-3xl mr-2">🏠</span>
          <span>Math at Home Activities</span>
        </h2>
        <p className="text-gray-600 mb-4">
          Reinforce math concepts through these simple activities you can do at home with everyday objects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {homeActivities.map((activity, index) => (
            <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-start">
                <span className="text-3xl mr-3">{activity.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{activity.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                  <div className="bg-white p-2 rounded text-xs">
                    <p><b>Materials:</b> {activity.materials}</p>
                    <p className="mt-1"><b>Benefits:</b> {activity.benefits}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Download More Home Activities
        </button>
      </div>
      
      <div className="bg-green-50 rounded-lg p-6 border border-green-200 mb-8">
        <h2 className="text-xl font-bold text-green-800 mb-4">Parent Tips for Math Development</h2>
        <p className="text-green-700 mb-4">
          Young children are natural mathematicians! Support their learning with these simple strategies:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <li className="bg-white p-3 rounded shadow-sm flex items-start">
            <span className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">1</span>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">Use Math Talk Daily</h3>
              <p className="text-xs text-gray-600">Include words like "more," "less," "same," "different," "bigger," "smaller" in everyday conversations.</p>
            </div>
          </li>
          <li className="bg-white p-3 rounded shadow-sm flex items-start">
            <span className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">2</span>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">Count Everything</h3>
              <p className="text-xs text-gray-600">Count steps, toys, snacks, books - anything and everything throughout the day.</p>
            </div>
          </li>
          <li className="bg-white p-3 rounded shadow-sm flex items-start">
            <span className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">3</span>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">Find Shapes Everywhere</h3>
              <p className="text-xs text-gray-600">Point out shapes in your environment - the round plate, square window, rectangular door.</p>
            </div>
          </li>
          <li className="bg-white p-3 rounded shadow-sm flex items-start">
            <span className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">4</span>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">Sort During Clean-up</h3>
              <p className="text-xs text-gray-600">Make cleanup educational by sorting toys by type, color, or size.</p>
            </div>
          </li>
          <li className="bg-white p-3 rounded shadow-sm flex items-start">
            <span className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">5</span>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">Create Patterns</h3>
              <p className="text-xs text-gray-600">Make simple patterns with toys, food, or clothing and ask your child to continue them.</p>
            </div>
          </li>
          <li className="bg-white p-3 rounded shadow-sm flex items-start">
            <span className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">6</span>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">Measure While Cooking</h3>
              <p className="text-xs text-gray-600">Let your child help measure ingredients during cooking and baking activities.</p>
            </div>
          </li>
        </ul>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-green-700 mb-2 flex items-center">
              <span className="text-xl mr-2">📱</span>
              <span>Download Resources</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Get printable math games, number flashcards, and shape activities to use at home.
            </p>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Get Free Math Resources
            </button>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-green-700 mb-2 flex items-center">
              <span className="text-xl mr-2">📅</span>
              <span>Weekly Math Calendar</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Follow our simple weekly math activity calendar with quick daily activities.
            </p>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              View Math Calendar
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-green-800">Math Milestones: Ages 2-4</h2>
          <span className="text-3xl">🌱</span>
        </div>
        
        <p className="text-gray-600 mb-4">
          Children develop math skills at different rates. Here's a general guide to math milestones:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-2">Ages 2-3</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Recognizes groups of 1-2 items without counting</li>
              <li>• Begins to count with assistance (often skipping numbers)</li>
              <li>• Understands concepts of "more" and "all gone"</li>
              <li>• Recognizes and names some basic shapes</li>
              <li>• Begins to sort objects by one attribute (e.g., color)</li>
              <li>• Completes simple shape puzzles</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
            <h3 className="font-bold text-teal-800 mb-2">Ages 3-4</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Counts up to 10 objects with one-to-one correspondence</li>
              <li>• Recognizes written numerals 1-5</li>
              <li>• Understands concepts like "more," "less," and "same"</li>
              <li>• Creates and extends simple patterns</li>
              <li>• Sorts objects by multiple attributes</li>
              <li>• Shows beginning understanding of time concepts (today, tomorrow)</li>
            </ul>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mt-3 italic">
          Note: These are general guidelines. Each child develops at their own pace. If you have concerns about your child's math development, consult with their teacher or pediatrician.
        </p>
      </div>
    </div>
  );
} 