'use client';

import React from 'react';
import Link from 'next/link';

// Sample activities for Music subject for age 2-4
const activities = [
  {
    id: 'rhythm-play',
    title: 'Rhythm Play',
    description: 'Explore basic rhythms through clapping, tapping, and using simple percussion instruments.',
    difficulty: 'Beginner',
    duration: '10 min',
    skills: ['Rhythm', 'Listening', 'Coordination'],
    icon: '🥁',
    color: 'bg-indigo-500',
  },
  {
    id: 'nursery-rhymes',
    title: 'Nursery Rhymes',
    description: 'Learn and sing along with classic nursery rhymes, developing language and musical skills.',
    difficulty: 'Beginner',
    duration: '8 min',
    skills: ['Singing', 'Memory', 'Language'],
    icon: '🎵',
    color: 'bg-pink-500',
  },
  {
    id: 'instrument-discovery',
    title: 'Instrument Discovery',
    description: 'Explore different musical instruments, their sounds, and how they are played.',
    difficulty: 'Beginner',
    duration: '12 min',
    skills: ['Sound Recognition', 'Instrument Knowledge', 'Listening'],
    icon: '🎺',
    color: 'bg-blue-500',
  },
  {
    id: 'dance-along',
    title: 'Dance & Move',
    description: 'Learn simple movements and dances to music, developing coordination and expression.',
    difficulty: 'Beginner',
    duration: '15 min',
    skills: ['Gross Motor', 'Creative Expression', 'Following Directions'],
    icon: '💃',
    color: 'bg-green-500',
  },
];

// Basic instruments for young children
const instruments = [
  {
    name: 'Drum',
    icon: '🥁',
    sound: 'Boom, boom!',
    action: 'Hit gently with hands or sticks',
    color: 'bg-red-100'
  },
  {
    name: 'Shakers',
    icon: '🎯',
    sound: 'Shake, shake!',
    action: 'Shake back and forth',
    color: 'bg-yellow-100'
  },
  {
    name: 'Bells',
    icon: '🔔',
    sound: 'Ding, ding!',
    action: 'Shake or tap',
    color: 'bg-green-100'
  },
  {
    name: 'Xylophone',
    icon: '🎹',
    sound: 'Ping, ping!',
    action: 'Tap with mallets',
    color: 'bg-blue-100'
  },
  {
    name: 'Tambourine',
    icon: '🎭',
    sound: 'Jingle, jingle!',
    action: 'Shake or hit',
    color: 'bg-purple-100'
  },
  {
    name: 'Clapping Hands',
    icon: '👏',
    sound: 'Clap, clap!',
    action: 'Clap your hands together',
    color: 'bg-pink-100'
  },
];

// Favorite children's songs
const songs = [
  {
    title: 'Twinkle, Twinkle Little Star',
    description: 'A gentle lullaby about stars twinkling in the night sky',
    actions: ['Point to the sky for "star"', 'Twinkle fingers for "twinkle"'],
    icon: '⭐',
    color: 'bg-indigo-100'
  },
  {
    title: 'Old MacDonald Had a Farm',
    description: 'A fun song about farm animals and the sounds they make',
    actions: ['Make animal sounds', 'Pretend to be different animals'],
    icon: '🐄',
    color: 'bg-green-100'
  },
  {
    title: 'The Wheels on the Bus',
    description: 'An action song about a bus and all the things it does',
    actions: ['Make wheel motions', 'Swish like wipers', 'Open and close hands for doors'],
    icon: '🚌',
    color: 'bg-yellow-100'
  },
  {
    title: 'If You\'re Happy and You Know It',
    description: 'An interactive song with actions to express emotions',
    actions: ['Clap hands', 'Stomp feet', 'Shout "Hooray!"'],
    icon: '😊',
    color: 'bg-pink-100'
  },
];

export default function MusicPage() {
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
        
        <div className="bg-indigo-100 border-l-4 border-indigo-500 p-6 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-5xl mr-4">🎵</span>
            <div>
              <h1 className="text-3xl font-bold text-indigo-800">Music</h1>
              <p className="text-indigo-700 text-lg">Ages 2-4: Rhythm, Song & Sound Exploration</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-lg">
          Our Music curriculum for ages 2-4 introduces young children to the joy of musical 
          exploration through singing, movement, rhythm activities, and instrument discovery. 
          These formative musical experiences help develop listening skills, coordination, 
          and creativity while fostering a lifelong love of music.
        </p>
        
        <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200 mb-8">
          <h3 className="font-bold text-indigo-800 mb-3 text-xl">Learning Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
              <span>Explore rhythm through clapping and simple instruments</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
              <span>Learn to sing simple songs and nursery rhymes</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
              <span>Recognize different musical instruments and sounds</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
              <span>Express feelings and ideas through musical play</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
              <span>Develop listening skills and auditory discrimination</span>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
              <span>Move and dance to different types of music</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Featured Activities</h2>
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
                      className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"
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
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Musical Instruments for Little Hands</h2>
        <p className="text-gray-600 mb-4">
          Introduce these easy-to-play instruments to help your child explore sounds and develop rhythm skills.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instruments.map((instrument, index) => (
            <div key={index} className={`${instrument.color} rounded-lg p-4 border shadow-sm`}>
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-2">{instrument.icon}</span>
                <h3 className="text-lg font-semibold">{instrument.name}</h3>
              </div>
              <p className="text-xs text-gray-700 mb-1"><b>Sound:</b> {instrument.sound}</p>
              <p className="text-xs text-gray-700"><b>How to play:</b> {instrument.action}</p>
              <button className="w-full mt-3 bg-indigo-500 text-white text-sm py-1.5 rounded hover:bg-indigo-600 transition">
                Hear Sound
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-4 bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h3 className="font-bold text-indigo-800 mb-2 flex items-center">
            <span className="text-xl mr-2">🧵</span>
            <span>DIY Instruments</span>
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Make simple instruments at home using everyday materials:
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Rice or bean shakers (in sealed containers)</li>
            <li>Pots and pans drums with wooden spoon drumsticks</li>
            <li>Rubber band guitars (stretched over empty tissue boxes)</li>
            <li>Jingle bells tied to pipe cleaners or shoelaces</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Featured: Musical Concepts</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🎶</span>
                <h3 className="text-xl font-bold text-indigo-800">Music Building Blocks</h3>
                <p className="text-indigo-600">Discover fundamental music elements</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Even young children can begin to understand basic musical concepts through playful 
                exploration. Here are some foundational elements presented in age-appropriate ways:
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🔊</span>
                    <span>Loud & Soft</span>
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Practice making sounds at different volumes, like roaring lions and tiny mice
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">⏱️</span>
                    <span>Fast & Slow</span>
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Experience tempo by moving quickly like rabbits or slowly like turtles
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">📈</span>
                    <span>High & Low</span>
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Explore pitch with high bird sounds and low bear growls
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="text-xl mr-2">🔄</span>
                    <span>Repeat & Pattern</span>
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Discover patterns by echoing simple rhythm sequences
                  </p>
                </div>
              </div>
              
              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
                Explore Music Concepts
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Sound Safari</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">👂</span>
              <h3 className="text-lg font-bold">Listen & Guess</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Test your child's listening skills with these sound challenges:
            </p>
            
            <div className="space-y-3">
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <h4 className="font-medium flex items-center mb-1">
                  <span className="text-xl mr-2">🐘</span>
                  <span>Animal Sounds</span>
                </h4>
                <p className="text-xs text-gray-600">
                  Can you identify different animal noises?
                </p>
              </div>
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <h4 className="font-medium flex items-center mb-1">
                  <span className="text-xl mr-2">🚗</span>
                  <span>Vehicle Sounds</span>
                </h4>
                <p className="text-xs text-gray-600">
                  Listen for cars, trains, airplanes and more!
                </p>
              </div>
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <h4 className="font-medium flex items-center mb-1">
                  <span className="text-xl mr-2">🏠</span>
                  <span>Household Sounds</span>
                </h4>
                <p className="text-xs text-gray-600">
                  Recognize sounds from around your home.
                </p>
              </div>
            </div>
            
            <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition mt-4">
              Start Sound Safari
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="font-bold text-gray-800 flex items-center mb-3">
              <span className="text-xl mr-2">🎧</span>
              <span>Music Styles</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Introduce your child to different types of music each day.
            </p>
            <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">
              Explore Music Styles
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Favorite Songs</h2>
        <p className="text-gray-600 mb-4">
          Sing along with these beloved children's songs that are perfect for little ones.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {songs.map((song, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className={`${song.color} p-4`}>
                <div className="flex items-center">
                  <span className="text-3xl mr-2">{song.icon}</span>
                  <h3 className="text-xl font-bold">{song.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">{song.description}</p>
                <div className="bg-gray-50 p-3 rounded mb-3">
                  <h4 className="text-sm font-medium mb-1">Fun Actions:</h4>
                  <ul className="text-xs text-gray-600 list-disc list-inside">
                    {song.actions.map((action, i) => (
                      <li key={i}>{action}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition flex items-center justify-center">
                    <span className="mr-1">▶️</span> Play
                  </button>
                  <button className="flex-1 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition">
                    Lyrics
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200 mb-8">
        <h2 className="text-xl font-bold text-indigo-800 mb-2">Parent Tips for Musical Development</h2>
        <p className="text-indigo-700 mb-4">
          Music is a powerful tool for early childhood development. Here's how you can nurture your child's musical abilities:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Make music a part of daily routines - sing during clean-up time or bath time</li>
          <li>Create a music basket with simple instruments for free exploration</li>
          <li>Use music for transitions between activities (a special song for bedtime)</li>
          <li>Add movements to songs to help develop coordination and memory</li>
          <li>Point out musical sounds in your environment (birds singing, rain falling)</li>
          <li>Respond positively to all musical expression - there's no "right way" at this age</li>
          <li>Listen to a variety of music styles and genres together</li>
        </ul>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-indigo-700 mb-2">Music & Brain Development</h3>
            <p className="text-sm text-gray-600 mb-3">
              Learn how early music experiences support cognitive, language, and social skills.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
              Read Article
            </button>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-indigo-700 mb-2">Musical Playdates</h3>
            <p className="text-sm text-gray-600 mb-3">
              Ideas for music-themed activities when friends come to play.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
              Get Ideas
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">📆</span>
          <h2 className="text-2xl font-bold text-indigo-800">Daily Music Moments</h2>
        </div>
        
        <p className="text-gray-600 mb-4">
          Small doses of musical activities throughout the day help develop skills while keeping things fun:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-yellow-100 p-3">
              <h4 className="font-bold text-gray-800">Morning</h4>
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-600 font-medium mb-1">Wake-Up Song</p>
              <p className="text-xs text-gray-500">
                Start the day with a cheerful good morning song while getting dressed.
              </p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-100 p-3">
              <h4 className="font-bold text-gray-800">Afternoon</h4>
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-600 font-medium mb-1">Rhythm Break</p>
              <p className="text-xs text-gray-500">
                Take a short movement break with clapping games or dancing after quiet activities.
              </p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-purple-100 p-3">
              <h4 className="font-bold text-gray-800">Evening</h4>
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-600 font-medium mb-1">Lullaby Time</p>
              <p className="text-xs text-gray-500">
                End the day with gentle lullabies as part of the bedtime routine.
              </p>
            </div>
          </div>
        </div>
        
        <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">
          Download Daily Music Plan
        </button>
      </div>
    </div>
  );
} 