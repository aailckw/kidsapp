'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Art subject for age 11-12
const activities = [
  {
    id: 'art-techniques',
    title: 'Advanced Art Techniques',
    description: 'Learn and practice various drawing, painting, and mixed media techniques through guided tutorials and exercises.',
    difficulty: 'Intermediate to Advanced',
    duration: '50 min',
    skills: ['Drawing', 'Painting', 'Color Theory', 'Composition'],
    icon: '🎨',
    color: 'bg-pink-600',
  },
  {
    id: 'art-history',
    title: 'Art Through Time',
    description: 'Explore famous artists, art movements, and masterpieces from different historical periods and cultural contexts.',
    difficulty: 'Intermediate',
    duration: '45 min',
    skills: ['Art History', 'Cultural Context', 'Visual Analysis', 'Artistic Influence'],
    icon: '🖼️',
    color: 'bg-purple-600',
  },
  {
    id: 'digital-art',
    title: 'Digital Art Studio',
    description: 'Create art using digital tools and learn techniques for digital illustration, design, and animation.',
    difficulty: 'Advanced',
    duration: '55 min',
    skills: ['Digital Illustration', 'Design Elements', 'Creative Software', 'Visual Communication'],
    icon: '💻',
    color: 'bg-blue-600',
  },
  {
    id: 'creative-projects',
    title: 'Creative Expression Projects',
    description: 'Develop personal art projects that express ideas, emotions, and stories through visual means.',
    difficulty: 'Varies',
    duration: '60 min',
    skills: ['Self-Expression', 'Project Planning', 'Creative Problem-Solving', 'Artistic Voice'],
    icon: '✨',
    color: 'bg-indigo-600',
  },
];

// Sample artists for the Artist Spotlight section
const featuredArtists = [
  {
    name: 'Vincent van Gogh',
    period: 'Post-Impressionism',
    famous_work: 'Starry Night',
    fun_fact: 'Painted over 2,100 artworks in just over a decade',
    image_class: 'bg-yellow-100',
  },
  {
    name: 'Frida Kahlo',
    period: 'Surrealism',
    famous_work: 'Self-Portraits',
    fun_fact: 'Created 55 self-portraits that reflected her life experiences',
    image_class: 'bg-red-100',
  },
  {
    name: 'Jean-Michel Basquiat',
    period: 'Neo-Expressionism',
    famous_work: 'Untitled (Skull)',
    fun_fact: 'Started as a graffiti artist before gallery success',
    image_class: 'bg-blue-100',
  },
];

export default function ArtSubjectPage() {
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
        
        <div className="bg-pink-100 border-l-4 border-pink-600 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🎨</span>
            <div>
              <h1 className="text-2xl font-bold text-pink-800">Art for Ages 11-12</h1>
              <p className="text-pink-700">Visual Arts & Creative Expression</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">
            Our Art curriculum for 11-12 year-olds develops technical skills, creative thinking, 
            and appreciation for various art forms and traditions. Students will explore different 
            media, learn about art history, develop their personal artistic voice, and gain confidence 
            in self-expression.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Key Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Advanced drawing and painting techniques</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Color theory and composition principles</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Art history and cultural appreciation</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Mixed media and digital art techniques</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Critical thinking and visual analysis</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Self-expression and personal style development</span>
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
                      className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded"
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
      
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Monthly Art Challenge</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-pink-100 to-purple-100 relative flex items-center justify-center">
            <div className="text-center">
              <span className="text-5xl block mb-2">🖌️</span>
              <h3 className="text-xl font-bold text-purple-800">Perspective Drawing Challenge</h3>
              <p className="text-purple-600">Create a cityscape using one and two-point perspective</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">
              This month, we're exploring the fascinating world of perspective! Learn how artists create 
              depth and dimension on a flat surface using perspective techniques. Your challenge is to 
              create a cityscape drawing that demonstrates your understanding of perspective principles.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
              <div className="bg-gray-50 p-3 rounded border">
                <h4 className="font-medium text-gray-800 text-sm">Materials</h4>
                <p className="text-xs text-gray-600">Paper, ruler, pencil, and eraser</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border">
                <h4 className="font-medium text-gray-800 text-sm">Skill Focus</h4>
                <p className="text-xs text-gray-600">Perspective, proportion, and architecture</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border">
                <h4 className="font-medium text-gray-800 text-sm">Submissions</h4>
                <p className="text-xs text-gray-600">237 students participating</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Due in: 12 days</span>
              <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
                Start Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Artist Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredArtists.map((artist, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              <div className={`${artist.image_class} h-32 flex items-center justify-center`}>
                <span className="text-4xl">👩‍🎨</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{artist.name}</h3>
                <p className="text-sm text-gray-500">{artist.period}</p>
                <div className="mt-2 pt-2 border-t">
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">Famous Work:</span> {artist.famous_work}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    <span className="font-medium">Fun Fact:</span> {artist.fun_fact}
                  </p>
                </div>
                <button className="w-full mt-3 bg-purple-600 text-white text-sm py-1 rounded hover:bg-purple-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-purple-800 mb-4">Your Art Gallery</h2>
          <div className="bg-white rounded-lg shadow-md p-5">
            <p className="text-gray-600 mb-4">
              A personal gallery of your artwork and creative projects. Track your progress and see 
              how your skills develop over time.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xl text-gray-400">🖼️</span>
              </div>
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xl text-gray-400">🖼️</span>
              </div>
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xl text-gray-400">🖼️</span>
              </div>
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xl text-gray-400">🖼️</span>
              </div>
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xl text-gray-400">🖼️</span>
              </div>
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-xl text-gray-400">+</span>
              </div>
            </div>
            <button className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
              View Gallery
            </button>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-purple-800 mb-4">Art Supplies</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">🧰</span>
              <span>Supply Checklist</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Recommended supplies for this month's art activities and challenges.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <input type="checkbox" className="mr-2 h-4 w-4" />
                <span>Drawing pencils (2B, 4B, 6B)</span>
              </div>
              <div className="flex items-center text-sm">
                <input type="checkbox" className="mr-2 h-4 w-4" />
                <span>Watercolor set</span>
              </div>
              <div className="flex items-center text-sm">
                <input type="checkbox" className="mr-2 h-4 w-4" />
                <span>Sketch pad (9×12 inches)</span>
              </div>
              <div className="flex items-center text-sm">
                <input type="checkbox" className="mr-2 h-4 w-4" />
                <span>Ruler and protractor</span>
              </div>
              <div className="flex items-center text-sm">
                <input type="checkbox" className="mr-2 h-4 w-4" />
                <span>Fine tip markers</span>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition mt-4">
              Print Checklist
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips</h2>
        <p className="text-blue-700 mb-4">
          Here are some ways to support your 11-12 year old's artistic development:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Create a dedicated space for art making with good lighting</li>
          <li>Visit art museums and galleries to expose them to different art forms</li>
          <li>Encourage experimentation with various media and techniques</li>
          <li>Ask open-ended questions about their art rather than just praise</li>
          <li>Display their artwork in your home to show you value their creativity</li>
          <li>Allow them to develop their own style without imposing too many rules</li>
        </ul>
      </div>
    </div>
  );
} 