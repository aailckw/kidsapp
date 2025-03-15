'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Art subject for age 2-4
const activities = [
  {
    id: 'finger-painting',
    title: 'Finger Painting Fun',
    description: 'Explore colors and textures through hands-on finger painting activities.',
    difficulty: 'Beginner',
    duration: '15 min',
    skills: ['Sensory Exploration', 'Color Recognition', 'Creative Expression'],
    icon: '🎨',
    color: 'bg-purple-500',
  },
  {
    id: 'play-dough-creations',
    title: 'Play Dough Creations',
    description: 'Squish, roll, and shape colorful play dough to develop fine motor skills.',
    difficulty: 'Beginner',
    duration: '20 min',
    skills: ['Fine Motor Skills', '3D Forming', 'Imaginative Play'],
    icon: '🧠',
    color: 'bg-pink-500',
  },
  {
    id: 'nature-collage',
    title: 'Nature Collage',
    description: 'Collect leaves, flowers, and natural materials to create beautiful collages.',
    difficulty: 'Beginner',
    duration: '25 min',
    skills: ['Nature Awareness', 'Pattern Making', 'Gluing Skills'],
    icon: '🍃',
    color: 'bg-green-500',
  },
  {
    id: 'rainbow-scribbles',
    title: 'Rainbow Scribbles',
    description: 'Explore drawing with crayons, markers, and chalk in a variety of colors.',
    difficulty: 'Beginner',
    duration: '15 min',
    skills: ['Pre-Writing', 'Color Mixing', 'Hand Control'],
    icon: '🌈',
    color: 'bg-red-500',
  },
];

// Art materials for toddlers
const materials = [
  { name: 'Finger Paints', icon: '🎨', description: 'Non-toxic, washable paints perfect for little hands' },
  { name: 'Jumbo Crayons', icon: '✏️', description: 'Easy-to-hold crayons for small hands' },
  { name: 'Play Dough', icon: '🧠', description: 'Soft, colorful dough for squishing and molding' },
  { name: 'Large Paper', icon: '📃', description: 'Big sheets for unrestricted creativity' },
  { name: 'Safety Scissors', icon: '✂️', description: 'Rounded-tip scissors for practicing cutting' },
  { name: 'Dot Markers', icon: '🔵', description: 'No-mess bingo daubers for stamping fun' },
];

// Sensory art explorations
const sensoryExplorations = [
  {
    title: 'Texture Table',
    description: 'Explore different textures through art materials like sand, rice, and fabric scraps.',
    icon: '👐',
    color: 'bg-yellow-100'
  },
  {
    title: 'Scented Art',
    description: 'Add food extracts to play dough or paints for aromatic creations.',
    icon: '👃',
    color: 'bg-green-100'
  },
  {
    title: 'Sound Painting',
    description: 'Paint to music, changing colors and strokes with the rhythm and mood.',
    icon: '🎵',
    color: 'bg-blue-100'
  },
  {
    title: 'Light & Shadow',
    description: 'Use flashlights to cast shadows and trace them on paper.',
    icon: '🔦',
    color: 'bg-purple-100'
  },
];

export default function ArtPage() {
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
            <span className="text-5xl mr-4">🎨</span>
            <div>
              <h1 className="text-3xl font-bold text-purple-800">Art</h1>
              <p className="text-purple-700 text-lg">Ages 2-4: Creative Expression & Sensory Exploration</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-lg">
          Our Art curriculum for ages 2-4 focuses on exploration, sensory experiences, and 
          creative expression. For young children, the process of creating is more important 
          than the final product - we emphasize joy, discovery, and skill development.
        </p>
        
        <div className="bg-purple-50 rounded-lg p-5 border border-purple-200 mb-8">
          <h3 className="font-bold text-purple-800 mb-3 text-xl">Learning Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Develop fine motor skills through art activities</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Explore colors, shapes, textures, and patterns</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Express feelings and ideas through art</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Experience multi-sensory creative processes</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Build confidence through creative exploration</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span>Develop vocabulary through discussion about art</span>
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
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Art Materials for Little Hands</h2>
        <p className="text-gray-600 mb-4">
          Young artists need appropriate tools that support their developing motor skills.
          These materials are perfect for ages 2-4 and encourage open-ended creativity.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-2">{material.icon}</span>
                <h3 className="text-lg font-semibold">{material.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{material.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Color Exploration</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🌈</span>
                <h3 className="text-xl font-bold text-purple-800">Rainbow World</h3>
                <p className="text-purple-600">Discover the magic of colors!</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                For children ages 2-4, learning about colors is an exciting part of understanding 
                the world. Our color activities help children identify, name, and explore primary 
                and secondary colors.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-red-100 rounded-lg p-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-red-500 mx-auto mb-2"></div>
                  <h4 className="font-bold text-red-800">Red</h4>
                  <p className="text-xs text-red-700">Like apples and strawberries</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 mx-auto mb-2"></div>
                  <h4 className="font-bold text-blue-800">Blue</h4>
                  <p className="text-xs text-blue-700">Like the sky and ocean</p>
                </div>
                <div className="bg-yellow-100 rounded-lg p-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 mx-auto mb-2"></div>
                  <h4 className="font-bold text-yellow-800">Yellow</h4>
                  <p className="text-xs text-yellow-700">Like the sun and bananas</p>
                </div>
                <div className="bg-green-100 rounded-lg p-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 mx-auto mb-2"></div>
                  <h4 className="font-bold text-green-800">Green</h4>
                  <p className="text-xs text-green-700">Like leaves and grass</p>
                </div>
              </div>
              
              <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                Start Color Activities
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Sensory Art</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">👐</span>
              <h3 className="text-lg font-bold">Sensory Explorations</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Art engages all the senses! Try these multi-sensory art experiences:
            </p>
            
            <div className="space-y-3">
              {sensoryExplorations.map((exploration, index) => (
                <div key={index} className={`${exploration.color} p-3 rounded border shadow-sm`}>
                  <div className="flex items-center mb-1">
                    <span className="text-2xl mr-2">{exploration.icon}</span>
                    <h4 className="font-medium">{exploration.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600">{exploration.description}</p>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition mt-4">
              Explore Sensory Art
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">📱</span>
              <span>Art Gallery</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Save photos of your child's artwork in their personal digital gallery.
            </p>
            <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">
              Open Gallery
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Process Art Projects</h2>
        <div className="bg-white rounded-lg shadow-md p-5">
          <p className="text-gray-600 text-sm mb-4">
            Process art focuses on the experience of creating rather than the final product. 
            These open-ended projects encourage exploration and self-expression.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-purple-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3">
                <h4 className="font-bold text-purple-800 flex items-center">
                  <span className="text-xl mr-2">🧽</span>
                  <span>Sponge Stamping</span>
                </h4>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 mb-2">
                  Cut sponges into simple shapes and let your child dip them in paint and stamp patterns.
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside">
                  <li>Develops: Grip strength, cause & effect understanding</li>
                  <li>Materials: Sponges, child-safe scissors, washable paint, paper</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-purple-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-3">
                <h4 className="font-bold text-purple-800 flex items-center">
                  <span className="text-xl mr-2">🧵</span>
                  <span>String Painting</span>
                </h4>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 mb-2">
                  Dip yarn in paint and drag across paper to create swirling designs.
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside">
                  <li>Develops: Hand-eye coordination, creative thinking</li>
                  <li>Materials: Thick yarn or string, washable paint, paper</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-purple-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-100 to-red-100 p-3">
                <h4 className="font-bold text-purple-800 flex items-center">
                  <span className="text-xl mr-2">🛁</span>
                  <span>Bubble Wrap Prints</span>
                </h4>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 mb-2">
                  Paint onto bubble wrap and press onto paper for textured prints.
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside">
                  <li>Develops: Sensory awareness, pattern recognition</li>
                  <li>Materials: Bubble wrap, washable paint, paper, rolling pin</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-purple-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-3">
                <h4 className="font-bold text-purple-800 flex items-center">
                  <span className="text-xl mr-2">🧊</span>
                  <span>Ice Cube Painting</span>
                </h4>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 mb-2">
                  Freeze diluted food coloring in ice cube trays and paint as they melt.
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside">
                  <li>Develops: Scientific thinking, color mixing observation</li>
                  <li>Materials: Ice cube trays, food coloring, water, paper</li>
                </ul>
              </div>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-center bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">
            <span className="mr-2">🖼️</span>
            <span>View All Projects</span>
          </button>
        </div>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-2">Parent Tips for Art Exploration</h2>
        <p className="text-purple-700 mb-4">
          Art for toddlers and preschoolers is all about the process, not the product. Here's how you can support your child's artistic journey:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Focus on exploration rather than creating a specific end product</li>
          <li>Prepare your space for mess - use washable materials and cover surfaces</li>
          <li>Ask open-ended questions like "Tell me about your picture" rather than guessing what it is</li>
          <li>Provide a variety of materials to explore different textures and techniques</li>
          <li>Display your child's art proudly - it builds confidence and shows you value their creativity</li>
          <li>Join in the fun but avoid showing "the right way" - there are many ways to create art</li>
          <li>Use art vocabulary like colors, shapes, lines, and textures to build language skills</li>
        </ul>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-purple-700 mb-2">Art Clean-Up Tips</h3>
            <p className="text-sm text-gray-600 mb-3">
              Strategies for managing art messes and involving your child in the clean-up process.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
              View Tips
            </button>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-purple-700 mb-2">DIY Art Materials</h3>
            <p className="text-sm text-gray-600 mb-3">
              Simple recipes to make homemade play dough, finger paint, and more.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
              Get Recipes
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">📚</span>
          <h2 className="text-2xl font-bold text-purple-800">Recommended Art Books</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
              <span className="text-4xl">📗</span>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-gray-800">The Dot</h4>
              <p className="text-xs text-gray-500">by Peter H. Reynolds</p>
              <p className="text-sm text-gray-600 mt-1">
                A story about creativity and courage that inspires young artists.
              </p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center">
              <span className="text-4xl">📘</span>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-gray-800">Mouse Paint</h4>
              <p className="text-xs text-gray-500">by Ellen Stoll Walsh</p>
              <p className="text-sm text-gray-600 mt-1">
                Three mice discover primary colors and color mixing in this playful tale.
              </p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-yellow-100 to-orange-100 flex items-center justify-center">
              <span className="text-4xl">📙</span>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-gray-800">Beautiful Oops!</h4>
              <p className="text-xs text-gray-500">by Barney Saltzberg</p>
              <p className="text-sm text-gray-600 mt-1">
                Shows how mistakes can be transformed into creative opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 