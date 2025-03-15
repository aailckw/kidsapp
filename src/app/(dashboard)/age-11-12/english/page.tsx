'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for English subject for age 11-12
const activities = [
  {
    id: 'book-discussions',
    title: 'Book Club Discussions',
    description: 'Analyze themes, characters, and plot in grade-appropriate novels through guided discussion forums.',
    difficulty: 'Intermediate to Advanced',
    duration: '45 min',
    skills: ['Text Analysis', 'Critical Thinking', 'Discussion Skills'],
    icon: '📚',
    color: 'bg-blue-600',
  },
  {
    id: 'writing-workshop',
    title: 'Writing Workshop',
    description: 'Learn various writing styles and techniques with feedback and revision tools.',
    difficulty: 'Advanced',
    duration: '50 min',
    skills: ['Composition', 'Editing', 'Style', 'Voice'],
    icon: '✍️',
    color: 'bg-indigo-600',
  },
  {
    id: 'media-literacy',
    title: 'Media Literacy Analysis',
    description: 'Develop skills to critically evaluate media content, distinguish fact from opinion, and identify persuasive techniques.',
    difficulty: 'Advanced',
    duration: '40 min',
    skills: ['Critical Analysis', 'Information Literacy', 'Digital Citizenship'],
    icon: '📱',
    color: 'bg-purple-600',
  },
  {
    id: 'debate-club',
    title: 'Debate & Public Speaking',
    description: 'Structure arguments, deliver persuasive speeches, and participate in friendly debates on age-appropriate topics.',
    difficulty: 'Advanced',
    duration: '45 min',
    skills: ['Persuasive Speaking', 'Logical Reasoning', 'Active Listening'],
    icon: '🎙️',
    color: 'bg-red-600',
  },
];

export default function EnglishSubjectPage() {
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
        
        <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">📝</span>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">English for Ages 11-12</h1>
              <p className="text-blue-700">Advanced Language Arts & Communication</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">
            The English curriculum for 11-12 year-olds refines advanced reading and writing skills, 
            introduces analytical thinking in literature, and prepares students for middle school 
            language arts. Students will engage with more complex texts, develop their writing voice, 
            and learn to approach literature with a critical eye.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Key Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>In-depth reading comprehension & character analysis</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Advanced writing with complex sentence structure</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Persuasive writing and debate skills</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Research and citation skills</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Media literacy and critical evaluation</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Confident public speaking and presentation</span>
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-purple-800 mb-4">Current Reading Challenge</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-indigo-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">📘</span>
                <h3 className="text-xl font-bold text-indigo-800">The Giver</h3>
                <p className="text-indigo-600">by Lois Lowry</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Join our community read of this classic novel that explores themes of individuality, 
                conformity, and the importance of memories. Complete the chapter activities to earn badges!
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Progress: 3/24 chapters</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-purple-800 mb-4">Writing Project</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">📝</span>
              <h3 className="text-lg font-bold">Personal Narrative</h3>
            </div>
            <p className="text-gray-600 mb-3">
              Write a personal narrative about an important moment in your life. Use descriptive language and 
              show character growth.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                <span>Planning: Complete</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></span>
                <span>Drafting: In Progress</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-4 h-4 rounded-full bg-gray-300 mr-2"></span>
                <span>Revising: Not Started</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Continue Project
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips</h2>
        <p className="text-blue-700 mb-4">
          Here are some ways to support your 11-12 year old's advanced language arts development:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Discuss different interpretations of books and media they consume</li>
          <li>Encourage writing in different genres (poetry, essays, stories)</li>
          <li>Help them identify credible sources when researching topics</li>
          <li>Practice respectful debate about age-appropriate current events</li>
          <li>Support presenting ideas clearly and with confidence</li>
        </ul>
      </div>
    </div>
  );
} 