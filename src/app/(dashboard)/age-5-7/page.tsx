'use client';

import React from 'react';
import Link from 'next/link';

// Define subjects with their details for age 5-7
const subjects = [
  {
    id: 'english',
    name: 'English',
    icon: '🔤',
    color: 'bg-blue-500',
    description: 'Strengthen reading and writing skills with phonics, vocabulary building, and beginning reading comprehension.',
    activities: [
      'Phonics Fun',
      'Sight Word Games',
      'Reading Short Stories'
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: '🀄',
    color: 'bg-red-500',
    description: 'Expand oral vocabulary, recognize common Chinese characters, and understand basic phrases.',
    activities: [
      'Chinese Character Tracing',
      'Food Vocabulary',
      'Simple Conversations'
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '🔢',
    color: 'bg-green-500',
    description: 'Master counting (up to 100), understand addition and subtraction, recognize patterns, and identify shapes.',
    activities: [
      'Number Line Adventures',
      'Addition & Subtraction Games',
      'Shape Recognition'
    ]
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    color: 'bg-purple-500',
    description: 'Explore life science, earth science, and physical science through interactive experiments.',
    activities: [
      'Plant Life Cycle',
      'Weather Watch',
      'Magnet Play'
    ]
  },
  {
    id: 'hygiene',
    name: 'Hygiene',
    icon: '🚿',
    color: 'bg-cyan-500',
    description: 'Reinforce personal cleanliness, healthy eating, and safety habits with more independence.',
    activities: [
      'Morning Routine Chart',
      'Healthy Food Sorting',
      'Germ Fighters'
    ]
  },
  {
    id: 'manners',
    name: 'Manners',
    icon: '👋',
    color: 'bg-yellow-500',
    description: 'Develop more refined social skills focusing on communication, empathy, and respect.',
    activities: [
      'School Day Simulation',
      'Feelings Detective',
      'Polite Words Practice'
    ]
  },
  {
    id: 'art',
    name: 'Art',
    icon: '🎨',
    color: 'bg-pink-500',
    description: 'Provide more structured yet open-ended opportunities for creativity with various art techniques.',
    activities: [
      'Step-by-Step Drawing',
      'Virtual Crafts',
      'Color Theory Fun'
    ]
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    color: 'bg-indigo-500',
    description: 'Introduce basic musical concepts like rhythm, melody, and pitch through interactive play.',
    activities: [
      'Virtual Instrument Band',
      'Follow-the-Lights Piano',
      'Music Around the World'
    ]
  },
  {
    id: 'social-studies',
    name: 'Social Studies',
    icon: '🌍',
    color: 'bg-orange-500',
    description: 'Broaden understanding of community, introduce basic geography, and foster cultural awareness.',
    activities: [
      'Interactive Town Map',
      'World Map Puzzle',
      'Celebrations Around the World'
    ]
  }
];

export default function EmergingLearnersPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-4">📚</span>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">Ages 5-7: Emerging Learners</h1>
              <p className="text-blue-700">Kindergarten to Early Primary</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">
          Children ages 5-7 are developing stronger language and thinking skills, and many are beginning formal schooling.
          Our curriculum builds on early foundations and gently aligns with elementary curricula, while maintaining a playful,
          interactive approach. Children at this age can handle more structured tasks and longer stories.
        </p>
        
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">Key Learning Goals</h3>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>Develop basic literacy and numeracy skills</li>
            <li>Encourage logical thinking with puzzles and games</li>
            <li>Introduce broader concepts in science and social studies</li>
            <li>Practice cooperation, empathy, and good manners</li>
            <li>Foster problem-solving through challenges and activities</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-purple-800 mb-4">Learning Subjects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className={`${subject.color} p-4 text-white`}>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{subject.name}</h3>
                <span className="text-3xl">{subject.icon}</span>
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <p className="text-gray-600 mb-4">{subject.description}</p>
              
              <h4 className="font-medium text-gray-800 mb-2">Sample Activities:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {subject.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
              
              <Link 
                href={`/age-5-7/${subject.id}`}
                className={`inline-block px-4 py-2 rounded-full text-white ${subject.color} hover:opacity-90 transition`}
              >
                Explore Activities
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Parent Tips for Emerging Learners</h2>
        <p className="text-blue-700 mb-4">
          Children in this age group are becoming more independent learners but still benefit from your guidance:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Encourage them to follow instructions and complete activities independently</li>
          <li>Sessions can last 15-20 minutes as attention spans increase</li>
          <li>Ask questions about what they're learning to reinforce concepts</li>
          <li>Connect digital learning with school topics when possible</li>
          <li>Celebrate achievements and help them track their progress</li>
        </ul>
      </div>
    </div>
  );
} 