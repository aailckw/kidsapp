'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Mathematics subject for age 11-12
const activities = [
  {
    id: 'pre-algebra',
    title: 'Pre-Algebra Foundations',
    description: 'Master expressions, equations, and prepare for algebra through interactive lessons and problems.',
    difficulty: 'Intermediate to Advanced',
    duration: '45 min',
    skills: ['Variables', 'Expressions', 'Equations', 'Order of Operations'],
    icon: '➗',
    color: 'bg-green-600',
  },
  {
    id: 'geometry-explorer',
    title: 'Geometry Explorer',
    description: 'Discover geometric principles through interactive visualizations and area/volume calculations.',
    difficulty: 'Advanced',
    duration: '40 min',
    skills: ['Spatial Reasoning', 'Measurement', 'Angles', 'Transformations'],
    icon: '📐',
    color: 'bg-orange-600',
  },
  {
    id: 'real-world-math',
    title: 'Real-World Math Applications',
    description: 'Apply math concepts to solve real-world problems involving percentages, ratios, and statistics.',
    difficulty: 'Intermediate to Advanced',
    duration: '45 min',
    skills: ['Problem Solving', 'Data Analysis', 'Percentages', 'Proportional Reasoning'],
    icon: '📊',
    color: 'bg-blue-600',
  },
  {
    id: 'math-challenge',
    title: 'Math Challenge Laboratory',
    description: 'Test your skills with multi-step problems that combine various mathematical concepts.',
    difficulty: 'Advanced',
    duration: '50 min',
    skills: ['Critical Thinking', 'Advanced Problem Solving', 'Mathematical Reasoning'],
    icon: '🧩',
    color: 'bg-purple-600',
  },
];

export default function MathematicsSubjectPage() {
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
        
        <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🧮</span>
            <div>
              <h1 className="text-2xl font-bold text-green-800">Mathematics for Ages 11-12</h1>
              <p className="text-green-700">Pre-Algebra & Mathematical Reasoning</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">
            Our Mathematics curriculum for 11-12 year-olds transitions from concrete arithmetic to abstract 
            algebraic thinking. Students will develop a strong foundation in pre-algebra, strengthen 
            problem-solving abilities, and explore mathematical concepts with real-world applications.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Key Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Variables, expressions, and equations</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Ratios, proportions, and percentages</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Advanced geometry and measurement</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Data analysis and statistical thinking</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Mathematical problem solving strategies</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Logical reasoning and critical thinking</span>
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-purple-800 mb-4">Math Skills Progress</h2>
          <div className="bg-white rounded-lg shadow-md p-5">
            <div className="mb-6">
              <h3 className="font-bold text-gray-700 mb-3">Your Pre-Algebra Journey</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      65%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                  <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-3 py-1">
                <h4 className="font-medium text-gray-800">Variables & Expressions</h4>
                <div className="flex mt-1">
                  <div className="bg-green-500 h-2 rounded-l" style={{ width: "85%" }}></div>
                  <div className="bg-gray-200 h-2 rounded-r" style={{ width: "15%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">17/20 activities completed</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-3 py-1">
                <h4 className="font-medium text-gray-800">Equations & Inequalities</h4>
                <div className="flex mt-1">
                  <div className="bg-green-500 h-2 rounded-l" style={{ width: "70%" }}></div>
                  <div className="bg-gray-200 h-2 rounded-r" style={{ width: "30%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">14/20 activities completed</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-3 py-1">
                <h4 className="font-medium text-gray-800">Geometry & Measurement</h4>
                <div className="flex mt-1">
                  <div className="bg-yellow-500 h-2 rounded-l" style={{ width: "50%" }}></div>
                  <div className="bg-gray-200 h-2 rounded-r" style={{ width: "50%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">10/20 activities completed</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-3 py-1">
                <h4 className="font-medium text-gray-800">Data & Statistics</h4>
                <div className="flex mt-1">
                  <div className="bg-red-500 h-2 rounded-l" style={{ width: "25%" }}></div>
                  <div className="bg-gray-200 h-2 rounded-r" style={{ width: "75%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">5/20 activities completed</p>
              </div>
            </div>
            
            <button className="mt-5 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full">
              Continue Learning
            </button>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-purple-800 mb-4">Math Challenge</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🏆</span>
              <h3 className="text-lg font-bold">Weekly Problem</h3>
            </div>
            <div className="bg-gray-100 p-3 rounded mb-4">
              <p className="text-gray-800 font-medium mb-2">
                A rectangular garden has a perimeter of 36 feet. If the length is twice the width, what is the area of the garden?
              </p>
              <p className="text-gray-600 text-sm italic">
                Hint: Use variables and equations to solve this problem.
              </p>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Difficulty:</span>
                <span className="font-medium text-orange-600">Intermediate</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Participants:</span>
                <span className="font-medium">248 students</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Average Score:</span>
                <span className="font-medium">72/100</span>
              </div>
            </div>
            <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
              Solve Challenge
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips</h2>
        <p className="text-blue-700 mb-4">
          Here are some ways to support your 11-12 year old's mathematical development:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Encourage algebraic thinking by discussing patterns and relationships</li>
          <li>Include your child in real-world math (budgeting, cooking, measuring)</li>
          <li>Ask them to explain their problem-solving process to strengthen understanding</li>
          <li>Point out math in everyday situations (sports statistics, news data)</li>
          <li>Celebrate perseverance and effort, not just correct answers</li>
        </ul>
      </div>
    </div>
  );
} 