'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for English subject for age 2-4
const activities = [
  {
    id: 'abc-adventure',
    title: 'ABC Song Adventure',
    description: 'An interactive sing-along alphabet song with colorful animations for each letter.',
    difficulty: 'Beginner',
    duration: '8 min',
    skills: ['Letter Recognition', 'Phonics Awareness', 'Listening Skills'],
    icon: '🔤',
    color: 'bg-blue-500',
  },
  {
    id: 'letter-games',
    title: 'Letter Recognition Games',
    description: 'Fun games that help children identify and match uppercase and lowercase letters.',
    difficulty: 'Beginner',
    duration: '10 min',
    skills: ['Visual Discrimination', 'Letter Recognition', 'Focus'],
    icon: '📝',
    color: 'bg-purple-500',
  },
  {
    id: 'word-matching',
    title: 'Simple Word Matching',
    description: 'Match simple words to colorful pictures to build early vocabulary and reading skills.',
    difficulty: 'Beginner to Intermediate',
    duration: '7 min',
    skills: ['Word Recognition', 'Vocabulary Building', 'Association'],
    icon: '🔍',
    color: 'bg-pink-500',
  },
  {
    id: 'storytime',
    title: 'Interactive Storytime',
    description: 'Listen to engaging stories with simple interactions and animations that respond to touch.',
    difficulty: 'All Levels',
    duration: '12 min',
    skills: ['Listening Comprehension', 'Vocabulary', 'Narrative Understanding'],
    icon: '📚',
    color: 'bg-teal-500',
  },
  {
    id: 'rhyme-time',
    title: 'Rhyme Time Fun',
    description: 'Play with rhyming words through interactive nursery rhymes and sound-matching games.',
    difficulty: 'Beginner',
    duration: '9 min',
    skills: ['Phonological Awareness', 'Rhyming', 'Auditory Discrimination'],
    icon: '🎭',
    color: 'bg-green-500',
  },
  {
    id: 'puppet-talks',
    title: 'Puppet Conversations',
    description: 'Engage in simple conversations with friendly puppet characters to build speaking skills.',
    difficulty: 'Beginner to Intermediate',
    duration: '8 min',
    skills: ['Conversation Skills', 'Vocabulary', 'Social Language'],
    icon: '🧸',
    color: 'bg-orange-500',
  },
];

// Weekly featured books
const featuredBooks = [
  { title: 'The Very Hungry Caterpillar', author: 'Eric Carle', image: '🐛' },
  { title: 'Brown Bear, Brown Bear', author: 'Bill Martin Jr.', image: '🐻' },
  { title: 'Goodnight Moon', author: 'Margaret Wise Brown', image: '🌙' },
  { title: 'Dear Zoo', author: 'Rod Campbell', image: '🦁' },
  { title: 'Where\'s Spot?', author: 'Eric Hill', image: '🐶' },
];

// Phonics categories for beginners
const phonicsCategories = [
  {
    letter: 'B',
    sound: '/b/',
    words: ['ball', 'baby', 'bear'],
    icon: '🏀',
    color: 'bg-blue-100'
  },
  {
    letter: 'D',
    sound: '/d/',
    words: ['dog', 'duck', 'door'],
    icon: '🐕',
    color: 'bg-yellow-100'
  },
  {
    letter: 'M',
    sound: '/m/',
    words: ['mom', 'milk', 'mouse'],
    icon: '🥛',
    color: 'bg-green-100'
  },
  {
    letter: 'S',
    sound: '/s/',
    words: ['sun', 'sock', 'snake'],
    icon: '☀️',
    color: 'bg-orange-100'
  },
];

// Sensory language activities
const sensoryActivities = [
  {
    title: 'Touch & Tell',
    description: 'Feel objects in a mystery bag and describe them with simple words',
    benefits: 'Builds descriptive vocabulary and tactile awareness',
    materials: 'Fabric bag, household objects with different textures',
    icon: '👐',
  },
  {
    title: 'Sound Stories',
    description: 'Listen to environmental sounds and create simple stories about them',
    benefits: 'Develops listening skills and narrative abilities',
    materials: 'Sound recordings or objects that make distinct sounds',
    icon: '👂',
  },
  {
    title: 'Picture Walks',
    description: 'Talk about what you see in book illustrations before reading the story',
    benefits: 'Builds prediction skills and encourages discussion',
    materials: 'Picture books with detailed illustrations',
    icon: '🖼️',
  },
  {
    title: 'Color & Chat',
    description: 'Name colors and talk about favorite things while coloring together',
    benefits: 'Reinforces color vocabulary and conversational turn-taking',
    materials: 'Crayons, coloring sheets, blank paper',
    icon: '🎨',
  },
];

export default function EnglishPage() {
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
            <span className="text-5xl mr-4">🔤</span>
            <div>
              <h1 className="text-3xl font-bold text-blue-800">English</h1>
              <p className="text-blue-700 text-lg">Ages 2-4: Early Literacy & Language</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-lg">
          Our English curriculum for ages 2-4 focuses on building early literacy skills in a fun, 
          engaging way. Through songs, stories, and playful activities, your child will develop 
          language skills naturally while having fun.
        </p>
        
        <div className="bg-yellow-50 rounded-lg p-5 border border-yellow-200 mb-8">
          <h3 className="font-bold text-yellow-800 mb-3 text-xl">Learning Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Recognize and name common letters</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Build vocabulary through stories and songs</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Understand simple story sequences</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Practice listening and comprehension</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Engage in early conversation skills</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Explore sounds and rhyming patterns</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Develop pre-writing motor skills</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Connect language with sensory experiences</span>
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
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Beginning Phonics Fun</h2>
        <p className="text-gray-600 mb-4">
          Introduce your child to letter sounds through these playful activities designed for very young learners.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {phonicsCategories.map((category, index) => (
            <div key={index} className={`${category.color} rounded-lg p-4 border shadow-sm`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-5xl font-bold text-gray-800">{category.letter}</span>
                <span className="text-3xl">{category.icon}</span>
              </div>
              <p className="text-sm font-medium mb-1">Sound: {category.sound}</p>
              <div className="bg-white bg-opacity-70 p-2 rounded">
                <p className="text-xs font-medium mb-1">Example Words:</p>
                <div className="flex flex-wrap gap-1">
                  {category.words.map((word, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full mt-3 bg-blue-500 text-white text-sm py-1.5 rounded hover:bg-blue-600 transition">
                Play Sound Game
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Explore All Letter Sounds
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Weekly Featured Books</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">📚</span>
                <h3 className="text-xl font-bold text-purple-800">Storytime Collection</h3>
                <p className="text-purple-600">Listen, watch, and interact with popular children's books</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Each week, we feature new stories to help your child develop a love for reading. 
                Stories include animated elements, read-along highlighting, and simple interactive features.
              </p>
              
              <div className="space-y-3 mb-4">
                {featuredBooks.map((book, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-3xl mr-3">{book.image}</span>
                    <div>
                      <h4 className="font-bold text-gray-800">{book.title}</h4>
                      <p className="text-sm text-gray-600">by {book.author}</p>
                    </div>
                    <button className="ml-auto bg-blue-500 text-white rounded-full p-2 text-sm">
                      Read
                    </button>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Explore All Stories
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Daily Challenge</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🎯</span>
              <h3 className="text-lg font-bold">Letter of the Day</h3>
            </div>
            <div className="bg-blue-100 h-32 w-32 mx-auto rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-800 text-7xl font-bold">A</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Can you find things that start with the letter A? 
              Listen to the A sound and practice tracing the letter!
            </p>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              Take the Challenge
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">🎵</span>
              <span>Rhyme Time</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Sing along with popular nursery rhymes and songs that help develop phonological awareness.
            </p>
            <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">
              Sing Along
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">✏️</span>
              <span>Scribble Fun</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Practice pre-writing skills with guided finger tracing and digital scribbling activities.
            </p>
            <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition">
              Start Scribbling
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Sensory Language Activities</h2>
        <p className="text-gray-600 mb-4">
          Young children learn language best through multi-sensory experiences. Try these hands-on activities to build language skills:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sensoryActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-4">
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-3">{activity.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-xs text-gray-700"><b>Benefits:</b> {activity.benefits}</p>
                <p className="text-xs text-gray-700 mt-1"><b>Materials:</b> {activity.materials}</p>
              </div>
              <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm">
                Activity Instructions
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips for Language Development</h2>
        <p className="text-blue-700 mb-4">
          Supporting your child's early literacy development is easy and can be done throughout your daily routine:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Read with your child daily, pointing to pictures and words as you read</li>
          <li>Talk about what you're doing during everyday activities to build vocabulary</li>
          <li>Sing songs and recite nursery rhymes to develop phonological awareness</li>
          <li>Ask simple questions about stories to encourage comprehension</li>
          <li>Label objects in your home to connect written words with objects</li>
          <li>Create a print-rich environment with books accessible to your child</li>
          <li>Respond to and expand on your child's comments to model proper language</li>
          <li>Use descriptive words during play to build vocabulary ("The soft, blue blanket")</li>
          <li>Be patient with language development - children understand more than they can say</li>
        </ul>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-blue-700 mb-2">Printable Resources</h3>
            <p className="text-sm text-gray-600 mb-3">
              Download letter flashcards, simple word games, and other activities to reinforce learning offline.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Download Resources
            </button>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-blue-700 mb-2">Progress Tracking</h3>
            <p className="text-sm text-gray-600 mb-3">
              See which letters and words your child has mastered and get recommendations for next steps.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              View Progress
            </button>
          </div>
        </div>
        
        <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-blue-700 mb-2 flex items-center">
            <span className="text-xl mr-2">💬</span>
            <span>Language Milestones: Ages 2-4</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
              <h4 className="text-sm font-bold text-yellow-800 mb-1">Ages 2-3</h4>
              <ul className="text-xs text-gray-700 list-disc list-inside space-y-1">
                <li>Uses 50+ words and short phrases</li>
                <li>Follows simple 2-step directions</li>
                <li>Asks simple questions</li>
                <li>Names familiar pictures and objects</li>
                <li>Enjoys being read to and looking at books</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-3 rounded border border-orange-200">
              <h4 className="text-sm font-bold text-orange-800 mb-1">Ages 3-4</h4>
              <ul className="text-xs text-gray-700 list-disc list-inside space-y-1">
                <li>Uses sentences of 4+ words</li>
                <li>Tells simple stories about experiences</li>
                <li>Understands basic concepts of print</li>
                <li>Recognizes some letters, especially in their name</li>
                <li>Follows a story and recalls details</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">
            Note: Children develop at different rates. If you have concerns about your child's language development, consult with your pediatrician.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">📅</span>
          <h2 className="text-2xl font-bold text-blue-800">Weekly Language Activities</h2>
        </div>
        
        <p className="text-gray-600 mb-4">
          Try these simple activities at home to reinforce language skills throughout the week:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-red-100 p-3">
              <h4 className="font-bold text-gray-800">Monday</h4>
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-600 font-medium mb-1">Letter Hunt</p>
              <p className="text-xs text-gray-500">
                Look for things around your home that start with the letter of the day.
              </p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-green-100 p-3">
              <h4 className="font-bold text-gray-800">Wednesday</h4>
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-600 font-medium mb-1">Story Creation</p>
              <p className="text-xs text-gray-500">
                Create a simple story together using three objects from around your house.
              </p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-purple-100 p-3">
              <h4 className="font-bold text-gray-800">Friday</h4>
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-600 font-medium mb-1">Rhyme Time</p>
              <p className="text-xs text-gray-500">
                Play a simple rhyming game during bath time or meal time.
              </p>
            </div>
          </div>
        </div>
        
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Get Full Weekly Activity Plan
        </button>
      </div>
    </div>
  );
} 