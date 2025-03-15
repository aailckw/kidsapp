'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Chinese subject for age 2-4
const activities = [
  {
    id: 'greetings',
    title: 'Chinese Greetings',
    description: 'Learn basic Chinese greetings with animated characters and interactive practice.',
    difficulty: 'Beginner',
    duration: '8 min',
    skills: ['Speaking', 'Listening', 'Cultural Awareness'],
    icon: '👋',
    color: 'bg-red-500',
  },
  {
    id: 'number-songs',
    title: 'Number Songs (1-10)',
    description: 'Count from 1-10 in Chinese with catchy songs and animated number characters.',
    difficulty: 'Beginner',
    duration: '7 min',
    skills: ['Counting', 'Number Recognition', 'Listening'],
    icon: '🔢',
    color: 'bg-blue-500',
  },
  {
    id: 'animal-names',
    title: 'Animal Names',
    description: 'Learn the Chinese names for common animals through interactive flashcards and sounds.',
    difficulty: 'Beginner',
    duration: '10 min',
    skills: ['Vocabulary', 'Animal Recognition', 'Pronunciation'],
    icon: '🐼',
    color: 'bg-green-500',
  },
  {
    id: 'color-fun',
    title: 'Color Fun',
    description: 'Explore basic colors in Chinese through interactive games and simple matching activities.',
    difficulty: 'Beginner',
    duration: '6 min',
    skills: ['Color Recognition', 'Vocabulary', 'Matching'],
    icon: '🎨',
    color: 'bg-purple-500',
  },
  {
    id: 'action-words',
    title: 'Action Words & Songs',
    description: 'Learn Chinese verbs through movement and songs that encourage physical activity.',
    difficulty: 'Beginner',
    duration: '9 min',
    skills: ['Action Words', 'Movement', 'Body Coordination'],
    icon: '🏃',
    color: 'bg-orange-500',
  },
  {
    id: 'family-members',
    title: 'Family Members',
    description: 'Learn Chinese words for family members through a sweet interactive story.',
    difficulty: 'Beginner',
    duration: '8 min',
    skills: ['Family Vocabulary', 'Social Awareness', 'Memory'],
    icon: '👪',
    color: 'bg-pink-500',
  },
];

// Basic vocabulary for everyday objects
const basicVocabulary = [
  { chinese: '水', pinyin: 'shuǐ', english: 'water', icon: '💧' },
  { chinese: '苹果', pinyin: 'píng guǒ', english: 'apple', icon: '🍎' },
  { chinese: '猫', pinyin: 'māo', english: 'cat', icon: '🐱' },
  { chinese: '狗', pinyin: 'gǒu', english: 'dog', icon: '🐶' },
  { chinese: '书', pinyin: 'shū', english: 'book', icon: '📕' },
  { chinese: '球', pinyin: 'qiú', english: 'ball', icon: '⚽' },
  { chinese: '花', pinyin: 'huā', english: 'flower', icon: '🌸' },
  { chinese: '星星', pinyin: 'xīng xīng', english: 'star', icon: '⭐' },
];

// Chinese cultural elements for toddlers
const culturalElements = [
  {
    title: 'Dragon Dance',
    description: 'Learn about this festive tradition with a simple animated story',
    icon: '🐉',
    color: 'bg-red-100'
  },
  {
    title: 'Chinese Music',
    description: 'Listen to traditional Chinese lullabies and children\'s songs',
    icon: '🎵',
    color: 'bg-yellow-100'
  },
  {
    title: 'Panda Bears',
    description: 'Discover China\'s famous animal and its bamboo habitat',
    icon: '🐼',
    color: 'bg-green-100'
  },
  {
    title: 'Moon Festival',
    description: 'Enjoy a simple story about mooncakes and lanterns',
    icon: '🌙',
    color: 'bg-blue-100'
  }
];

// Chinese tone practice for toddlers
const toneExamples = [
  {
    tone: 'First Tone (High)',
    symbol: 'ˉ',
    example: '妈 (mā)',
    meaning: 'mom',
    sound: 'like singing a high note',
    color: 'bg-red-100',
    icon: '➖'
  },
  {
    tone: 'Second Tone (Rising)',
    symbol: 'ˊ',
    example: '花 (huá)',
    meaning: 'flower',
    sound: 'like asking a question',
    color: 'bg-orange-100',
    icon: '📈'
  },
  {
    tone: 'Third Tone (Falling-Rising)',
    symbol: 'ˇ',
    example: '小 (xiǎo)',
    meaning: 'small',
    sound: 'like showing doubt',
    color: 'bg-green-100',
    icon: '〰️'
  },
  {
    tone: 'Fourth Tone (Falling)',
    symbol: 'ˋ',
    example: '大 (dà)',
    meaning: 'big',
    sound: 'like giving a command',
    color: 'bg-blue-100',
    icon: '📉'
  }
];

// Simple Chinese characters for toddlers
const simpleCharacters = [
  {
    character: '人',
    pinyin: 'rén',
    meaning: 'person',
    strokes: 2,
    icon: '🧍',
    description: 'Looks like a person walking'
  },
  {
    character: '山',
    pinyin: 'shān',
    meaning: 'mountain',
    strokes: 3,
    icon: '⛰️',
    description: 'Looks like three mountain peaks'
  },
  {
    character: '口',
    pinyin: 'kǒu',
    meaning: 'mouth',
    strokes: 3,
    icon: '👄',
    description: 'A square like an open mouth'
  },
  {
    character: '日',
    pinyin: 'rì',
    meaning: 'sun/day',
    strokes: 4,
    icon: '☀️',
    description: 'A window with the sun shining'
  }
];

// Family activities for Chinese language practice
const familyActivities = [
  {
    title: 'Chinese Storytime',
    description: 'Read bilingual picture books together, pointing to objects and saying their Chinese names',
    materials: 'Chinese-English children\'s books or free online resources',
    time: '10-15 minutes',
    icon: '📚'
  },
  {
    title: 'Mealtime Mandarin',
    description: 'Name common foods in Chinese during meals and snack times',
    materials: 'Regular meals and snacks',
    time: '5 minutes at each meal',
    icon: '🍽️'
  },
  {
    title: 'Chinese Number Hunt',
    description: 'Count everyday objects in Chinese while doing daily activities',
    materials: 'Household items, toys, or objects outside',
    time: '5-10 minutes',
    icon: '🔍'
  },
  {
    title: 'Color Song Dance',
    description: 'Sing Chinese color songs while touching objects of each color around your home',
    materials: 'Colored toys or household items',
    time: '10 minutes',
    icon: '🌈'
  }
];

export default function ChinesePage() {
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
        
        <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-5xl mr-4">🀄</span>
            <div>
              <h1 className="text-3xl font-bold text-red-800">Chinese</h1>
              <p className="text-red-700 text-lg">Ages 2-4: Early Mandarin Skills</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-lg">
          Our Chinese curriculum for ages 2-4 introduces Mandarin in an immersive, playful manner. 
          Toddlers learn basic words and phrases through songs, animated flashcards, and interactive 
          activities, developing an ear for the language and building a foundation for future learning.
        </p>
        
        <div className="bg-yellow-50 rounded-lg p-5 border border-yellow-200 mb-8">
          <h3 className="font-bold text-yellow-800 mb-3 text-xl">Learning Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Learn basic greetings (你好/Hello, 谢谢/Thank you)</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Recognize numbers 1-10 in Chinese</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Learn names of common animals and colors</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Develop an ear for Chinese tones</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Recognize a few simple characters</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Build awareness of Chinese culture</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Integrate Chinese into daily routines</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Develop positive attitudes toward language learning</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-red-800 mb-4">Featured Activities</h2>
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
                      className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded"
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
        <h2 className="text-2xl font-bold text-red-800 mb-4">Basic Vocabulary</h2>
        <p className="text-gray-600 mb-4">
          These everyday words are great for young language learners to practice. Touch each card to hear the correct pronunciation.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {basicVocabulary.map((word, index) => (
            <div key={index} className="bg-white border border-red-200 rounded-lg p-3 text-center hover:shadow-md transition cursor-pointer">
              <span className="text-3xl block mb-1">{word.icon}</span>
              <div className="text-xl font-bold text-red-800 mb-1">{word.chinese}</div>
              <div className="text-xs text-gray-500 mb-1">{word.pinyin}</div>
              <div className="text-sm text-gray-700">{word.english}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition">
            Explore More Words
          </button>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-red-800 mb-4">Fun with Chinese Tones</h2>
        <p className="text-gray-600 mb-4">
          Chinese is a tonal language with four main tones. Learning to hear and practice these tones is fun with these simple examples!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {toneExamples.map((tone, index) => (
            <div key={index} className={`${tone.color} rounded-lg p-4 border shadow-sm`}>
              <div className="flex justify-between items-end mb-2">
                <span className="text-3xl font-bold">{tone.icon}</span>
                <span className="text-xl">{tone.symbol}</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{tone.tone}</h3>
              <div className="bg-white bg-opacity-70 p-2 rounded mb-2">
                <p className="text-lg font-bold mb-1">{tone.example}</p>
                <p className="text-sm text-gray-600">{tone.meaning}</p>
              </div>
              <p className="text-sm text-gray-700">Sounds {tone.sound}</p>
              <button className="w-full mt-2 bg-red-500 text-white text-sm py-1.5 rounded hover:bg-red-600 transition">
                Listen & Practice
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Chinese Song Time</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-red-100 to-yellow-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🎵</span>
                <h3 className="text-xl font-bold text-red-800">Two Tigers (两只老虎)</h3>
                <p className="text-red-600">A popular Chinese children's song</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                "Two Tigers" (Liǎng Zhī Lǎohǔ) is one of the most popular Chinese children's songs, 
                similar to "Frère Jacques" in English. This simple melody helps children practice 
                animal vocabulary and basic Chinese sounds.
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-red-800 mb-2">Lyrics:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-medium">两只老虎，两只老虎</p>
                    <p className="italic text-xs text-gray-600">Liǎng zhī lǎohǔ, liǎng zhī lǎohǔ</p>
                    <p className="text-gray-700">Two tigers, two tigers</p>
                  </div>
                  <div>
                    <p className="font-medium">跑得快，跑得快</p>
                    <p className="italic text-xs text-gray-600">Pǎo de kuài, pǎo de kuài</p>
                    <p className="text-gray-700">Run very fast, run very fast</p>
                  </div>
                  <div>
                    <p className="font-medium">一只没有眼睛</p>
                    <p className="italic text-xs text-gray-600">Yī zhī méi yǒu yǎnjīng</p>
                    <p className="text-gray-700">One has no eyes</p>
                  </div>
                  <div>
                    <p className="font-medium">一只没有尾巴</p>
                    <p className="italic text-xs text-gray-600">Yī zhī méi yǒu wěiba</p>
                    <p className="text-gray-700">One has no tail</p>
                  </div>
                  <div>
                    <p className="font-medium">真奇怪，真奇怪</p>
                    <p className="italic text-xs text-gray-600">Zhēn qíguài, zhēn qíguài</p>
                    <p className="text-gray-700">So strange, so strange</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                  Listen & Sing
                </button>
                <button className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
                  Watch Animation
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Characters for Little Ones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {simpleCharacters.map((char, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-4">
                  <div className="flex items-start">
                    <div className="bg-red-50 h-20 w-20 flex items-center justify-center rounded-lg mr-3">
                      <span className="text-4xl font-bold text-red-800">{char.character}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-1">{char.pinyin} • {char.meaning}</h3>
                      <p className="text-xs text-gray-500 mb-1">{char.strokes} strokes</p>
                      <p className="text-sm text-gray-600">{char.description}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-xl mr-2">{char.icon}</span>
                        <button className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded hover:bg-red-200 transition">
                          Practice Writing
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
                Explore More Characters
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-red-800 mb-4">Daily Challenges</h2>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🎯</span>
              <h3 className="text-lg font-bold">Word of the Day</h3>
            </div>
            <div className="bg-red-100 p-4 rounded-lg flex flex-col items-center justify-center mb-4">
              <span className="text-red-800 text-5xl font-bold mb-1">妈妈</span>
              <span className="text-sm text-gray-700 mb-1">māma</span>
              <span className="text-lg">Mom/Mother</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Practice saying "māma" and try to use it throughout the day!
            </p>
            <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
              Listen & Practice
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">👆</span>
              <span>Finger Counting</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Did you know? Chinese people count 1-5 using just one hand, starting with the thumb!
            </p>
            <div className="grid grid-cols-5 gap-1 mb-3">
              <div className="bg-red-50 rounded p-1 text-center">
                <span className="text-xl">👍</span>
                <p className="text-xs font-bold">1</p>
                <p className="text-xs">yī</p>
              </div>
              <div className="bg-red-50 rounded p-1 text-center">
                <span className="text-xl">✌️</span>
                <p className="text-xs font-bold">2</p>
                <p className="text-xs">èr</p>
              </div>
              <div className="bg-red-50 rounded p-1 text-center">
                <span className="text-xl">🤟</span>
                <p className="text-xs font-bold">3</p>
                <p className="text-xs">sān</p>
              </div>
              <div className="bg-red-50 rounded p-1 text-center">
                <span className="text-xl">🖖</span>
                <p className="text-xs font-bold">4</p>
                <p className="text-xs">sì</p>
              </div>
              <div className="bg-red-50 rounded p-1 text-center">
                <span className="text-xl">✋</span>
                <p className="text-xs font-bold">5</p>
                <p className="text-xs">wǔ</p>
              </div>
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
              Practice Counting
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">🌟</span>
              <span>Progress Tracker</span>
            </h3>
            <div className="bg-yellow-50 p-3 rounded-lg mb-3">
              <h4 className="text-sm font-bold text-yellow-800 mb-2">Words Learned: 12</h4>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">12 of 40 basic words</p>
            </div>
            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
              View Full Progress
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-red-800 mb-4">Explore Chinese Culture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {culturalElements.map((element, index) => (
            <div 
              key={index}
              className={`${element.color} rounded-lg p-4 border hover:shadow-md transition cursor-pointer`}
            >
              <div className="text-center mb-2">
                <span className="text-5xl">{element.icon}</span>
              </div>
              <h3 className="font-bold text-gray-800 text-center mb-1">{element.title}</h3>
              <p className="text-sm text-gray-600 text-center">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-red-50 rounded-lg p-6 border border-red-200 mb-8">
        <h2 className="text-xl font-bold text-red-800 mb-4">Family Chinese Activities</h2>
        <p className="text-red-700 mb-4">
          Learning Chinese with your child can be fun! Here are some simple activities you can do together at home:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {familyActivities.map((activity, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-start">
                <span className="text-3xl mr-3">{activity.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{activity.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                  <div className="flex text-xs text-gray-500">
                    <span className="mr-3"><b>Materials:</b> {activity.materials}</span>
                    <span><b>Time:</b> {activity.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-red-800 mb-2 flex items-center">
            <span className="text-xl mr-2">📱</span>
            <span>Parent Resources</span>
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Download our parent guide for more tips on supporting your child's Chinese language learning at home, 
            including pronunciation guides, additional vocabulary lists, and more activity ideas.
          </p>
          <div className="flex space-x-3">
            <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition text-sm">
              Download Parent Guide
            </button>
            <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition text-sm">
              Join Parent Community
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">📋</span>
          <h2 className="text-2xl font-bold text-red-800">Weekly Language Plan</h2>
        </div>
        
        <p className="text-gray-600 mb-4">
          Follow this simple weekly plan to introduce Chinese language learning into your daily routine:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2 mb-4">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="bg-red-100 p-2">
                <h4 className="font-bold text-gray-800 text-sm">{day}</h4>
              </div>
              <div className="p-2">
                <p className="text-xs text-gray-600 font-medium">
                  {index === 0 ? 'Greetings' :
                   index === 1 ? 'Numbers' :
                   index === 2 ? 'Colors' :
                   index === 3 ? 'Animals' :
                   index === 4 ? 'Songs' :
                   index === 5 ? 'Review Game' :
                   'Chinese Story'}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
          Get Full Weekly Plan
        </button>
      </div>
    </div>
  );
} 