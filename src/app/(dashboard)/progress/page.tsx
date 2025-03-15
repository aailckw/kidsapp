'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAllLearningPaths } from '../age-2-4/learningPaths';

// Enhanced subjects data with detailed activities for age 2-4
const subjects = [
  {
    id: 'english',
    name: 'English',
    icon: '🔤',
    color: 'bg-blue-500',
    progress: 65,
    description: 'Early literacy development through songs, stories, and interactive activities',
    ageGroup: 'age-2-4',
    activities: {
      total: 20,
      completed: 13,
      categories: [
        {
          name: 'Letter Recognition',
          completed: 5,
          total: 6,
          progress: 83,
          items: [
            { name: 'ABC Song Adventure', completed: true },
            { name: 'Letter Recognition Games', completed: true },
            { name: 'Letter of the Day', completed: true },
            { name: 'Alphabet Puzzles', completed: true },
            { name: 'Letter Tracing', completed: true },
            { name: 'Letter Sounds', completed: false }
          ]
        },
        {
          name: 'Vocabulary Building',
          completed: 4,
          total: 5,
          progress: 80,
          items: [
            { name: 'Simple Word Matching', completed: true },
            { name: 'Everyday Objects', completed: true },
            { name: 'Animal Names', completed: true },
            { name: 'Food Words', completed: true },
            { name: 'Color Names', completed: false }
          ]
        },
        {
          name: 'Listening & Comprehension',
          completed: 2,
          total: 4,
          progress: 50,
          items: [
            { name: 'Interactive Storytime', completed: true },
            { name: 'Rhyme Time Fun', completed: true },
            { name: 'Story Sequencing', completed: false },
            { name: 'Follow Simple Instructions', completed: false }
          ]
        },
        {
          name: 'Early Speaking',
          completed: 2,
          total: 5,
          progress: 40,
          items: [
            { name: 'Puppet Conversations', completed: true },
            { name: 'Song Time', completed: true },
            { name: 'Picture Talk', completed: false },
            { name: 'Simple Questions', completed: false },
            { name: 'Daily Routines Vocabulary', completed: false }
          ]
        }
      ]
    }
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: '🀄',
    color: 'bg-red-500',
    progress: 40,
    description: 'Introduction to Mandarin through immersive, playful activities and songs',
    ageGroup: 'age-2-4',
    activities: {
      total: 18,
      completed: 7,
      categories: [
        {
          name: 'Basic Greetings',
          completed: 3,
          total: 4,
          progress: 75,
          items: [
            { name: 'Chinese Greetings', completed: true },
            { name: 'Thank You & Please', completed: true },
            { name: 'Hello & Goodbye Songs', completed: true },
            { name: 'Simple Conversations', completed: false }
          ]
        },
        {
          name: 'Numbers & Counting',
          completed: 2,
          total: 5,
          progress: 40,
          items: [
            { name: 'Number Songs (1-5)', completed: true },
            { name: 'Finger Counting', completed: true },
            { name: 'Number Songs (6-10)', completed: false },
            { name: 'Counting Objects', completed: false },
            { name: 'Number Recognition', completed: false }
          ]
        },
        {
          name: 'Basic Vocabulary',
          completed: 1,
          total: 5,
          progress: 20,
          items: [
            { name: 'Animal Names', completed: true },
            { name: 'Color Fun', completed: false },
            { name: 'Family Members', completed: false },
            { name: 'Food Words', completed: false },
            { name: 'Body Parts', completed: false }
          ]
        },
        {
          name: 'Chinese Culture',
          completed: 1,
          total: 4,
          progress: 25,
          items: [
            { name: 'Dragon Dance', completed: true },
            { name: 'Chinese Music', completed: false },
            { name: 'Panda Bears', completed: false },
            { name: 'Moon Festival', completed: false }
          ]
        }
      ]
    }
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '🔢',
    color: 'bg-green-500',
    progress: 75,
    description: 'Building early number sense through playful, interactive counting and shape activities',
    ageGroup: 'age-2-4',
    activities: {
      total: 24,
      completed: 18,
      categories: [
        {
          name: 'Counting & Numbers',
          completed: 6,
          total: 7,
          progress: 86,
          items: [
            { name: 'Counting Farm Animals', completed: true },
            { name: 'Interactive Counting (1-5)', completed: true },
            { name: 'Interactive Counting (6-10)', completed: true },
            { name: 'Number Recognition', completed: true },
            { name: 'Counting Songs', completed: true },
            { name: 'Count with Me', completed: true },
            { name: 'Number Puzzles', completed: false }
          ]
        },
        {
          name: 'Shapes & Patterns',
          completed: 5,
          total: 6,
          progress: 83,
          items: [
            { name: 'Shape Sorter', completed: true },
            { name: 'Circle & Square', completed: true },
            { name: 'Triangle & Rectangle', completed: true },
            { name: 'Pattern Play', completed: true },
            { name: 'Shape Hunt', completed: true },
            { name: 'Shape Songs', completed: false }
          ]
        },
        {
          name: 'Comparisons',
          completed: 4,
          total: 6,
          progress: 67,
          items: [
            { name: 'More vs. Less', completed: true },
            { name: 'Big, Medium, Small', completed: true },
            { name: 'Same & Different', completed: true },
            { name: 'Long & Short', completed: true },
            { name: 'Heavy & Light', completed: false },
            { name: 'Empty & Full', completed: false }
          ]
        },
        {
          name: 'Sorting & Matching',
          completed: 3,
          total: 5,
          progress: 60,
          items: [
            { name: 'Color Sorting', completed: true },
            { name: 'Shape Matching', completed: true },
            { name: 'Size Ordering', completed: true },
            { name: 'Attribute Sorting', completed: false },
            { name: 'Pair Matching', completed: false }
          ]
        }
      ]
    }
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    color: 'bg-purple-500',
    progress: 55,
    description: 'Exploring the natural world through sensory experiences and simple experiments',
    ageGroup: 'age-2-4',
    activities: {
      total: 15,
      completed: 8,
      categories: [
        {
          name: 'Animals & Nature',
          completed: 3,
          total: 4,
          progress: 75,
          items: [
            { name: 'Animal Sounds & Habitats', completed: true },
            { name: 'Plant Growth', completed: true },
            { name: 'Insects Explorer', completed: true },
            { name: 'Ocean Creatures', completed: false }
          ]
        },
        {
          name: 'Weather & Seasons',
          completed: 2,
          total: 4,
          progress: 50,
          items: [
            { name: 'Weather Watcher', completed: true },
            { name: 'Seasons Cycle', completed: true },
            { name: 'Rain & Clouds', completed: false },
            { name: 'Sun & Shadows', completed: false }
          ]
        },
        {
          name: 'Sensory Exploration',
          completed: 2,
          total: 4,
          progress: 50,
          items: [
            { name: 'Touch & Feel', completed: true },
            { name: 'Sink or Float', completed: true },
            { name: 'Sounds All Around', completed: false },
            { name: 'Taste & Smell', completed: false }
          ]
        },
        {
          name: 'Simple Experiments',
          completed: 1,
          total: 3,
          progress: 33,
          items: [
            { name: 'Color Mixing', completed: true },
            { name: 'Magnets Play', completed: false },
            { name: 'Bubble Science', completed: false }
          ]
        }
      ]
    }
  },
  {
    id: 'hygiene',
    name: 'Hygiene',
    icon: '🚿',
    color: 'bg-cyan-500',
    progress: 90,
    description: 'Learning healthy habits for personal cleanliness and self-care',
    ageGroup: 'age-2-4',
    activities: {
      total: 10,
      completed: 9,
      categories: [
        {
          name: 'Hand Washing',
          completed: 3,
          total: 3,
          progress: 100,
          items: [
            { name: 'Washing Hands Song', completed: true },
            { name: 'Germs Go Away', completed: true },
            { name: 'When to Wash Hands', completed: true }
          ]
        },
        {
          name: 'Bath Time',
          completed: 2,
          total: 2,
          progress: 100,
          items: [
            { name: 'Bath Time Fun', completed: true },
            { name: 'Body Parts Cleaning', completed: true }
          ]
        },
        {
          name: 'Dental Care',
          completed: 2,
          total: 2,
          progress: 100,
          items: [
            { name: 'Brushing Teeth', completed: true },
            { name: 'Healthy Teeth Foods', completed: true }
          ]
        },
        {
          name: 'Health & Safety',
          completed: 2,
          total: 3,
          progress: 67,
          items: [
            { name: 'Tissues Please', completed: true },
            { name: 'Germ Stoppers', completed: true },
            { name: 'Rest & Sleep', completed: false }
          ]
        }
      ]
    }
  },
  {
    id: 'manners',
    name: 'Manners',
    icon: '👋',
    color: 'bg-yellow-500',
    progress: 80,
    description: 'Developing social skills, emotional intelligence, and age-appropriate etiquette',
    ageGroup: 'age-2-4',
    activities: {
      total: 12,
      completed: 10,
      categories: [
        {
          name: 'Polite Words',
          completed: 3,
          total: 3,
          progress: 100,
          items: [
            { name: 'Please & Thank You', completed: true },
            { name: 'Sorry & Excuse Me', completed: true },
            { name: 'Greetings & Goodbyes', completed: true }
          ]
        },
        {
          name: 'Social Skills',
          completed: 3,
          total: 3,
          progress: 100,
          items: [
            { name: 'Taking Turns', completed: true },
            { name: 'Sharing', completed: true },
            { name: 'Listening When Others Speak', completed: true }
          ]
        },
        {
          name: 'Feelings',
          completed: 2,
          total: 3,
          progress: 67,
          items: [
            { name: 'Feelings Friends', completed: true },
            { name: 'Using Words for Feelings', completed: true },
            { name: 'Calm Down Strategies', completed: false }
          ]
        },
        {
          name: 'Table Manners',
          completed: 2,
          total: 3,
          progress: 67,
          items: [
            { name: 'Eating Nicely', completed: true },
            { name: 'Using Utensils', completed: true },
            { name: 'Setting the Table', completed: false }
          ]
        }
      ]
    }
  },
  {
    id: 'art',
    name: 'Art',
    icon: '🎨',
    color: 'bg-pink-500',
    progress: 70,
    description: 'Expressing creativity through various art techniques and materials',
    ageGroup: 'age-2-4',
    activities: {
      total: 14,
      completed: 10,
      categories: [
        {
          name: 'Drawing & Coloring',
          completed: 3,
          total: 4,
          progress: 75,
          items: [
            { name: 'Scribble Fun', completed: true },
            { name: 'Crayon Exploration', completed: true },
            { name: 'First Shapes Drawing', completed: true },
            { name: 'Coloring Adventures', completed: false }
          ]
        },
        {
          name: 'Painting',
          completed: 3,
          total: 4,
          progress: 75,
          items: [
            { name: 'Finger Painting', completed: true },
            { name: 'Brush Basics', completed: true },
            { name: 'Color Mixing Magic', completed: true },
            { name: 'Watercolor Wonder', completed: false }
          ]
        },
        {
          name: 'Crafts',
          completed: 2,
          total: 3,
          progress: 67,
          items: [
            { name: 'Playdough Play', completed: true },
            { name: 'Collage Creations', completed: true },
            { name: 'Paper Folding', completed: false }
          ]
        },
        {
          name: 'Art Appreciation',
          completed: 2,
          total: 3,
          progress: 67,
          items: [
            { name: 'Colors All Around', completed: true },
            { name: 'Texture Touch', completed: true },
            { name: 'Simple Art Stories', completed: false }
          ]
        }
      ]
    }
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    color: 'bg-indigo-500',
    progress: 45,
    description: 'Developing rhythm, listening skills, and musical expression through songs and movement',
    ageGroup: 'age-2-4',
    activities: {
      total: 12,
      completed: 5,
      categories: [
        {
          name: 'Songs & Rhymes',
          completed: 2,
          total: 3,
          progress: 67,
          items: [
            { name: 'Nursery Rhymes', completed: true },
            { name: 'Action Songs', completed: true },
            { name: 'Seasonal Songs', completed: false }
          ]
        },
        {
          name: 'Rhythm & Movement',
          completed: 2,
          total: 3,
          progress: 67,
          items: [
            { name: 'Clap and Tap', completed: true },
            { name: 'Dance Along', completed: true },
            { name: 'March and Stomp', completed: false }
          ]
        },
        {
          name: 'Instruments',
          completed: 1,
          total: 3,
          progress: 33,
          items: [
            { name: 'Shakers & Rattles', completed: true },
            { name: 'Drum Time', completed: false },
            { name: 'Piano Intro', completed: false }
          ]
        },
        {
          name: 'Listening',
          completed: 0,
          total: 3,
          progress: 0,
          items: [
            { name: 'Animal Sounds', completed: false },
            { name: 'Nature Music', completed: false },
            { name: 'Classical for Kids', completed: false }
          ]
        }
      ]
    }
  },
  {
    id: 'social-studies',
    name: 'Social Studies',
    icon: '🌍',
    color: 'bg-orange-500',
    progress: 35,
    description: 'Building awareness of self, family, community, and cultural diversity',
    ageGroup: 'age-2-4',
    activities: {
      total: 16,
      completed: 6,
      categories: [
        {
          name: 'Self & Family',
          completed: 3,
          total: 4,
          progress: 75,
          items: [
            { name: 'All About Me', completed: true },
            { name: 'Family Members', completed: true },
            { name: 'My Home', completed: true },
            { name: 'Family Traditions', completed: false }
          ]
        },
        {
          name: 'Community',
          completed: 2,
          total: 4,
          progress: 50,
          items: [
            { name: 'Community Helpers', completed: true },
            { name: 'Places in Town', completed: true },
            { name: 'Transportation', completed: false },
            { name: 'Jobs People Do', completed: false }
          ]
        },
        {
          name: 'Cultural Awareness',
          completed: 1,
          total: 4,
          progress: 25,
          items: [
            { name: 'Hello Around the World', completed: true },
            { name: 'Celebrations', completed: false },
            { name: 'Foods from Everywhere', completed: false },
            { name: 'Music & Dance', completed: false }
          ]
        },
        {
          name: 'Nature & Environment',
          completed: 0,
          total: 4,
          progress: 0,
          items: [
            { name: 'Taking Care of Plants', completed: false },
            { name: 'Animal Homes', completed: false },
            { name: 'Clean Up Time', completed: false },
            { name: 'Water Wonders', completed: false }
          ]
        }
      ]
    }
  }
];

// Sample recent achievements
const recentAchievements = [
  {
    id: 1,
    title: 'Math Master',
    description: 'Completed all addition and subtraction activities',
    icon: '🧮',
    date: '2 days ago',
    subject: 'Mathematics'
  },
  {
    id: 2,
    title: 'Story Explorer',
    description: 'Read 5 interactive stories',
    icon: '📚',
    date: '1 week ago',
    subject: 'English'
  },
  {
    id: 3,
    title: 'Hygiene Hero',
    description: 'Learned all about germs and handwashing',
    icon: '🧼',
    date: '2 weeks ago',
    subject: 'Hygiene'
  },
  {
    id: 4,
    title: 'Manners Champion',
    description: 'Mastered all polite words and phrases',
    icon: '👋',
    date: '3 weeks ago',
    subject: 'Manners'
  }
];

export default function ProgressPage() {
  const [timeFrame, setTimeFrame] = useState<'all' | 'month' | 'year'>('all');
  const [activeTab, setActiveTab] = useState<'subjects' | 'paths'>('subjects');
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  
  // Calculate overall progress from subjects
  const totalActivities = subjects.reduce((sum, subject) => sum + subject.activities.total, 0);
  const completedActivities = subjects.reduce((sum, subject) => sum + subject.activities.completed, 0);
  const overallProgress = Math.round((completedActivities / totalActivities) * 100);

  // Get learning paths data
  const learningPaths = getAllLearningPaths();
  const pathsOverallProgress = Math.round(
    learningPaths.reduce((sum, path) => sum + path.progress, 0) / 
    learningPaths.length
  );
  
  // Toggle expanded subject view
  const toggleSubjectExpansion = (subjectId: string) => {
    if (expandedSubject === subjectId) {
      setExpandedSubject(null);
    } else {
      setExpandedSubject(subjectId);
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Learning Progress</h1>
        <p className="mt-1 text-gray-600">
          Track your child's achievements and learning across different subjects
        </p>
      </div>

      {/* Time Frame Selection */}
      <div className="mt-6 flex space-x-4">
        <button 
          onClick={() => setTimeFrame('all')}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            timeFrame === 'all' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          All Time
        </button>
        <button 
          onClick={() => setTimeFrame('month')}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            timeFrame === 'month' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          This Month
        </button>
        <button 
          onClick={() => setTimeFrame('year')}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            timeFrame === 'year' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          This Year
        </button>
      </div>

      {/* Overall Progress */}
      <div className="mt-6 bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-medium text-gray-900">Overall Progress</h2>
        <div className="mt-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-500">
              {activeTab === 'subjects' 
                ? `${completedActivities} of ${totalActivities} activities completed`
                : `${learningPaths.reduce((sum, path) => sum + path.completedLevels, 0)} of ${learningPaths.reduce((sum, path) => sum + path.totalLevels, 0)} levels completed`
              }
            </span>
            <span className="text-sm font-medium text-gray-500">
              {activeTab === 'subjects' ? overallProgress : pathsOverallProgress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${activeTab === 'subjects' ? overallProgress : pathsOverallProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Tabs for Subjects and Learning Paths */}
      <div className="mt-8 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('subjects')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'subjects'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            Subject Progress
          </button>
          <button
            onClick={() => setActiveTab('paths')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'paths'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            Learning Paths
          </button>
        </nav>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'subjects' ? (
        <>
          {/* Subject Progress */}
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Progress by Subject</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <div key={subject.id} className="bg-white rounded-xl shadow overflow-hidden">
                  <div className={`${subject.color} px-4 py-5 sm:px-6 text-white`}>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{subject.icon}</span>
                      <h3 className="text-lg font-medium">{subject.name}</h3>
                    </div>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-500">
                        {subject.activities.completed} of {subject.activities.total} activities
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {subject.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`${subject.color} h-2.5 rounded-full`} 
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="mt-4">
                      <Link 
                        href={`/${subject.ageGroup}/${subject.id}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-500"
                      >
                        View Activities <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Learning Paths Progress</h2>
              <Link 
                href="/age-2-4/learning-paths"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View All Paths <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {learningPaths.map((path) => (
                <div key={path.id} className="bg-white rounded-xl shadow overflow-hidden">
                  <div className={`${path.color} px-4 py-5 sm:px-6 text-white`}>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{path.icon}</span>
                      <div>
                        <h3 className="text-lg font-medium">{path.title}</h3>
                        <p className="text-white text-opacity-90 text-sm">{path.subject.charAt(0).toUpperCase() + path.subject.slice(1)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-500">
                        {path.completedLevels} of {path.totalLevels} levels
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {path.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`${path.color} h-2.5 rounded-full`} 
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      {path.levels.filter(level => level.completed || level.unlocked).slice(0, 2).map((level) => (
                        <div key={level.id} className="flex items-center">
                          <div 
                            className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                              level.completed 
                                ? `${path.color} text-white` 
                                : 'bg-gray-200 text-gray-500'
                            }`}
                          >
                            {level.completed ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : null}
                          </div>
                          <span className="text-sm text-gray-700">{level.title}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <Link 
                        href={`/learning-path/${path.id}`}
                        className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${path.color} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${path.color.split('-')[1]}-500`}
                      >
                        {path.levels.some(level => level.unlocked && !level.completed) 
                          ? 'Continue Path' 
                          : 'View Path'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
      {/* Recent Achievements */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Recent Achievements</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {recentAchievements.map((achievement) => (
              <li key={achievement.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-800">{achievement.title}</h3>
                      <span className="text-sm text-gray-500">{achievement.date}</span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                    <p className="text-sm text-gray-500 mt-1">Subject: {achievement.subject}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-purple-100 rounded-lg p-6 border border-purple-200 text-center">
        <h2 className="text-xl font-bold text-purple-800 mb-2">Keep Going!</h2>
        <p className="text-purple-700 mb-4">
          Continue your learning journey and earn more achievements.
        </p>
        <Link
          href="/home"
          className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
        >
          Explore More Activities
        </Link>
      </div>
    </div>
  );
} 