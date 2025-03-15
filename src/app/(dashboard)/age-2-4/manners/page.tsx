'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Manners subject for age 2-4
const activities = [
  {
    id: 'please-thank-you',
    title: 'Please & Thank You',
    description: 'Learn to use polite words with animated characters in everyday situations.',
    difficulty: 'Beginner',
    duration: '6 min',
    skills: ['Politeness', 'Speaking Skills', 'Social Awareness'],
    icon: '🙏',
    color: 'bg-yellow-500',
  },
  {
    id: 'taking-turns',
    title: 'Taking Turns',
    description: 'Practice sharing and waiting for your turn through simple games and stories.',
    difficulty: 'Beginner',
    duration: '8 min',
    skills: ['Patience', 'Sharing', 'Impulse Control'],
    icon: '🔄',
    color: 'bg-blue-500',
  },
  {
    id: 'feelings-friends',
    title: 'Feelings Friends',
    description: 'Identify and name different emotions with colorful characters and scenarios.',
    difficulty: 'Beginner',
    duration: '7 min',
    skills: ['Emotional Recognition', 'Empathy', 'Self-awareness'],
    icon: '😊',
    color: 'bg-pink-500',
  },
  {
    id: 'gentle-hands',
    title: 'Gentle Hands',
    description: 'Learn about using gentle touches and keeping hands to yourself through interactive stories.',
    difficulty: 'Beginner',
    duration: '5 min',
    skills: ['Body Awareness', 'Self-control', 'Respect'],
    icon: '👐',
    color: 'bg-green-500',
  },
];

// Basic emotions for recognition
const emotions = [
  { name: 'Happy', icon: '😊', color: 'bg-yellow-100 text-yellow-600', description: 'A good feeling when something nice happens' },
  { name: 'Sad', icon: '😢', color: 'bg-blue-100 text-blue-600', description: 'A down feeling when something upsetting happens' },
  { name: 'Angry', icon: '😠', color: 'bg-red-100 text-red-600', description: 'A strong feeling when something frustrating happens' },
  { name: 'Scared', icon: '😨', color: 'bg-purple-100 text-purple-600', description: 'A worried feeling when something seems scary' },
  { name: 'Excited', icon: '🤩', color: 'bg-pink-100 text-pink-600', description: 'A jumpy, happy feeling when something special is happening' },
  { name: 'Calm', icon: '😌', color: 'bg-green-100 text-green-600', description: 'A quiet, peaceful feeling when everything is okay' },
];

// Social scenarios for role play
const socialScenarios = [
  {
    title: 'Meeting Someone New',
    steps: ['Say "hello"', 'Tell them your name', 'Smile'],
    icon: '👋',
  },
  {
    title: 'Asking for Help',
    steps: ['Say "excuse me"', 'Wait for attention', 'Say "please help me"'],
    icon: '🙋',
  },
  {
    title: 'Getting a Gift',
    steps: ['Say "thank you"', 'Look at the gift', 'Tell them you like it'],
    icon: '🎁',
  },
  {
    title: 'Bumping Into Someone',
    steps: ['Say "I\'m sorry"', 'Check if they\'re okay', 'Be more careful'],
    icon: '💫',
  },
];

export default function MannersPage() {
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
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-5xl mr-4">👋</span>
            <div>
              <h1 className="text-3xl font-bold text-yellow-800">Manners</h1>
              <p className="text-yellow-700 text-lg">Ages 2-4: Social Skills & Emotional Development</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-lg">
          Our Manners curriculum for ages 2-4 helps children develop essential social skills 
          and emotional awareness through engaging activities and stories. Young children learn 
          best through modeling and practice, so our interactive approach makes manners fun!
        </p>
        
        <div className="bg-yellow-50 rounded-lg p-5 border border-yellow-200 mb-8">
          <h3 className="font-bold text-yellow-800 mb-3 text-xl">Learning Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Use polite words like "please" and "thank you"</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Take turns and practice sharing</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Identify and express different feelings</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Develop basic empathy for others</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Use gentle hands and appropriate touches</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Follow simple social rules in different settings</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4">Featured Activities</h2>
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
                      className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded"
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
        <h2 className="text-2xl font-bold text-yellow-800 mb-4">Feeling Friends</h2>
        <p className="text-gray-600 mb-4">
          Learning to recognize and name feelings is an important part of developing social skills. 
          Help your child identify these basic emotions in themselves and others.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {emotions.map((emotion, index) => (
            <div key={index} className={`${emotion.color} rounded-lg p-4 border shadow-sm`}>
              <div className="flex items-center mb-2">
                <span className="text-4xl mr-2">{emotion.icon}</span>
                <h3 className="text-xl font-semibold">{emotion.name}</h3>
              </div>
              <p className="text-sm">{emotion.description}</p>
              <button className="w-full mt-3 bg-yellow-500 text-white text-sm py-1.5 rounded hover:bg-yellow-600 transition">
                Practice {emotion.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Social Stories</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-yellow-100 to-orange-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">📚</span>
                <h3 className="text-xl font-bold text-yellow-800">Learning with Leo & Lily</h3>
                <p className="text-yellow-600">Stories that teach social skills</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Follow Leo and Lily as they navigate everyday social situations. These simple 
                stories help children understand social expectations and practice good manners.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🍎</span>
                    <span>Leo Shares His Snack</span>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Leo learns that sharing with friends makes snack time more fun for everyone.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🏠</span>
                    <span>Lily Uses Indoor Voice</span>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lily discovers when to use quiet voices and when it's okay to be loud.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">❤️</span>
                    <span>Leo & Lily Say Sorry</span>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    The friends learn how to apologize when they accidentally hurt someone's feelings.
                  </p>
                </div>
              </div>
              
              <button className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition">
                Read Stories
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Let's Practice!</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🎭</span>
              <h3 className="text-lg font-bold">Social Scenarios</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Role play these common situations with your child to practice good manners:
            </p>
            
            <div className="space-y-3">
              {socialScenarios.map((scenario, index) => (
                <div key={index} className="bg-yellow-50 p-3 rounded border border-yellow-200">
                  <div className="flex items-center mb-1">
                    <span className="text-xl mr-2">{scenario.icon}</span>
                    <h4 className="font-medium">{scenario.title}</h4>
                  </div>
                  <ol className="text-xs text-gray-600 list-decimal list-inside pl-1">
                    {scenario.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition mt-4">
              Try Role Play
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">⭐</span>
              <span>Good Manners Chart</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Track your child's progress with our printable good manners chart.
            </p>
            <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">
              Download Chart
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4">Manners Song</h2>
        <div className="bg-white rounded-lg shadow-md p-5">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">🎵</span>
            <h3 className="text-xl font-bold">The Magic Words Song</h3>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <p className="italic text-gray-700 text-sm">
              "Please" and "Thank you" are the magic words, <br />
              The magic words, the magic words. <br />
              "Please" and "Thank you" are the magic words, <br />
              They make people happy! <br /><br />
              
              "Excuse me" and "I'm sorry" are kind to say, <br />
              Kind to say, kind to say. <br />
              "Excuse me" and "I'm sorry" are kind to say, <br />
              They show that you care!
            </p>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            This catchy song helps children remember important polite phrases. Sing along 
            together and practice using these "magic words" in everyday situations.
          </p>
          <button className="w-full flex items-center justify-center bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
            <span className="mr-2">▶️</span>
            <span>Play Song</span>
          </button>
        </div>
      </div>
      
      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-2">Parent Tips for Social Skills Development</h2>
        <p className="text-yellow-700 mb-4">
          Young children learn social skills primarily through observation and practice. Here's how you can support your child:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Model the behavior you want to see - children learn by watching you</li>
          <li>Use puppets or stuffed animals to role-play social scenarios</li>
          <li>Provide specific praise when your child uses good manners</li>
          <li>Keep expectations age-appropriate - focus on basics first</li>
          <li>Help your child name their feelings during both calm and difficult moments</li>
          <li>Create opportunities for supervised play with other children</li>
          <li>Read books about feelings, sharing, and friendship</li>
        </ul>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-yellow-700 mb-2">Common Challenges</h3>
            <p className="text-sm text-gray-600 mb-3">
              Advice for handling typical social development hurdles like sharing struggles and emotional outbursts.
            </p>
            <button className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition">
              View Tips
            </button>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-yellow-700 mb-2">Recommended Books</h3>
            <p className="text-sm text-gray-600 mb-3">
              Age-appropriate books about manners, feelings, and social skills to read together.
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