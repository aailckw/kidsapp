// Learning Paths for Age 2-4
// These structured paths guide children through activities in a developmentally appropriate sequence

export interface LearningPath {
  id: string;
  title: string;
  subject: string;
  description: string;
  icon: string;
  color: string;
  progress: number;
  levels: LearningLevel[];
  // Age recommendation: 'early' (2-3), 'advanced' (3-4), or 'all'
  ageRecommendation: 'early' | 'advanced' | 'all';
  // Sensory elements included in this learning path
  sensoryElements: {
    audio: boolean;
    visual: boolean;
    tactile: boolean;
    movement: boolean;
  };
}

export interface LearningLevel {
  id: string;
  title: string;
  description: string;
  status: 'locked' | 'active' | 'completed';
  activities: LearningActivity[];
  milestones?: Milestone[];
  // Age-specific recommendation for this level (overrides path level if specified)
  ageRecommendation?: 'early' | 'advanced' | null;
  // Sensory elements specifically highlighted in this level
  sensoryFocus?: ('audio' | 'visual' | 'tactile' | 'movement')[];
}

export interface LearningActivity {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'locked' | 'active' | 'completed';
  type: 'interactive' | 'video' | 'game' | 'reading';
  // Sensory elements for this specific activity
  sensoryElements?: {
    audio?: boolean;
    visual?: boolean;
    tactile?: boolean;
    movement?: boolean;
  };
  // Offline extension activity
  offlineActivity?: {
    title: string;
    description: string;
    materials: string[];
  };
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

// Learning Paths

const englishLearningPath: LearningPath = {
  id: 'english-foundations',
  title: 'English Language Foundations',
  subject: 'english',
  description: 'Build early literacy skills through play, stories, and interactive activities',
  icon: '📚',
  color: 'blue',
  progress: 35,
  ageRecommendation: 'all',
  sensoryElements: {
    audio: true,
    visual: true,
    tactile: true,
    movement: true
  },
  levels: [
    {
      id: 'level-1',
      title: 'Sound Play',
      description: 'Explore sounds and rhythms in language',
      status: 'completed',
      ageRecommendation: 'early',
      sensoryFocus: ['audio', 'movement'],
      activities: [
        {
          id: 'activity-1',
          title: 'Animal Sounds',
          description: 'Listen and match animal sounds to pictures',
          duration: '5 mins',
          status: 'completed',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          },
          offlineActivity: {
            title: 'Farm Sounds Walk',
            description: 'Take a walk and listen for different sounds. Make animal sounds together.',
            materials: ['None required']
          }
        },
        {
          id: 'activity-2',
          title: 'Rhyme Time',
          description: 'Listen to rhyming words and clap along',
          duration: '7 mins',
          status: 'completed',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          }
        },
        // ... more activities
      ],
      milestones: [
        {
          id: 'milestone-1',
          title: 'Sound Explorer',
          description: 'Recognizes and imitates different sounds',
          unlocked: true,
          icon: '🎵'
        }
      ]
    },
    {
      id: 'level-2',
      title: 'Word Play',
      description: 'Begin recognizing and using simple words',
      status: 'active',
      ageRecommendation: 'early',
      sensoryFocus: ['visual', 'audio'],
      activities: [
        {
          id: 'activity-3',
          title: 'First Words',
          description: 'Match spoken words to pictures',
          duration: '8 mins',
          status: 'completed',
          type: 'game',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          }
        },
        {
          id: 'activity-4',
          title: 'Action Words',
          description: 'Learn verbs through movement and pictures',
          duration: '10 mins',
          status: 'active',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          },
          offlineActivity: {
            title: 'Action Charades',
            description: 'Take turns acting out actions like jumping, sleeping, eating.',
            materials: ['Open space', 'List of simple action words']
          }
        },
        // ... more activities
      ]
    },
    {
      id: 'level-3',
      title: 'First Stories',
      description: 'Engage with simple stories and narratives',
      status: 'locked',
      ageRecommendation: 'advanced',
      sensoryFocus: ['visual', 'audio', 'tactile'],
      activities: [
        {
          id: 'activity-5',
          title: 'Picture Stories',
          description: 'Follow simple stories through pictures',
          duration: '12 mins',
          status: 'locked',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: true
          }
        },
        // ... more activities
      ]
    },
    // ... more levels
  ]
};

const mathLearningPath: LearningPath = {
  id: 'math-discoveries',
  title: 'Math Discoveries',
  subject: 'mathematics',
  description: 'Explore numbers, shapes, and patterns through playful activities',
  icon: '🔢',
  color: 'green',
  progress: 20,
  ageRecommendation: 'all',
  sensoryElements: {
    audio: true,
    visual: true,
    tactile: true,
    movement: true
  },
  levels: [
    {
      id: 'level-1',
      title: 'Number Play',
      description: 'Discover numbers through songs and games',
      status: 'completed',
      ageRecommendation: 'early',
      sensoryFocus: ['audio', 'visual', 'movement'],
      activities: [
        {
          id: 'activity-1',
          title: 'Counting Songs',
          description: 'Sing along with numbers 1-5',
          duration: '6 mins',
          status: 'completed',
          type: 'video',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          },
          offlineActivity: {
            title: 'Counting Walk',
            description: 'Go for a walk and count objects you see (trees, cars, birds).',
            materials: ['None required']
          }
        },
        {
          id: 'activity-2',
          title: 'Number Hunt',
          description: 'Find and touch numbers 1-3',
          duration: '5 mins',
          status: 'completed',
          type: 'game',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: true
          }
        },
        // ... more activities
      ],
      milestones: [
        {
          id: 'milestone-1',
          title: 'Number Friend',
          description: 'Recognizes numbers 1-3',
          unlocked: true,
          icon: '1️⃣'
        }
      ]
    },
    {
      id: 'level-2',
      title: 'Shape Discovery',
      description: 'Explore basic shapes in the world around us',
      status: 'active',
      ageRecommendation: 'early',
      sensoryFocus: ['visual', 'tactile'],
      activities: [
        {
          id: 'activity-3',
          title: 'Shape Parade',
          description: 'Identify circles, squares, and triangles',
          duration: '7 mins',
          status: 'completed',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: true
          }
        },
        {
          id: 'activity-4',
          title: 'Shape Songs',
          description: 'Sing along and move with shape-themed songs',
          duration: '8 mins',
          status: 'active',
          type: 'video',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          },
          offlineActivity: {
            title: 'Shape Hunt',
            description: 'Find shapes in your home - circle plates, square windows, etc.',
            materials: ['Household objects of different shapes']
          }
        },
        // ... more activities
      ]
    },
    {
      id: 'level-3',
      title: 'Counting Adventures',
      description: 'Count objects and understand "how many"',
      status: 'locked',
      ageRecommendation: 'advanced',
      sensoryFocus: ['visual', 'tactile'],
      activities: [
        {
          id: 'activity-5',
          title: 'Counting Garden',
          description: 'Count flowers, bugs, and garden items',
          duration: '10 mins',
          status: 'locked',
          type: 'game',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: true
          }
        },
        // ... more activities
      ]
    },
    // ... more levels
  ]
};

const chineseLearningPath: LearningPath = {
  id: 'chinese-beginnings',
  title: 'Chinese Language Beginnings',
  subject: 'chinese',
  description: 'Start the journey of learning Mandarin through sounds, words, and cultural elements',
  icon: '🏮',
  color: 'red',
  progress: 15,
  ageRecommendation: 'all',
  sensoryElements: {
    audio: true,
    visual: true,
    tactile: true,
    movement: true
  },
  levels: [
    {
      id: 'level-1',
      title: 'Hello Chinese',
      description: 'Learn basic greetings and introductions',
      status: 'completed',
      ageRecommendation: 'early',
      sensoryFocus: ['audio', 'movement'],
      activities: [
        {
          id: 'activity-1',
          title: 'Greeting Song',
          description: 'Sing along with basic Chinese greetings',
          duration: '5 mins',
          status: 'completed',
          type: 'video',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          },
          offlineActivity: {
            title: 'Morning Greetings',
            description: 'Practice saying "Nǐ hǎo" (hello) each morning to family members.',
            materials: ['None required']
          }
        },
        {
          id: 'activity-2',
          title: 'Meeting Friends',
          description: 'Practice greetings with animated characters',
          duration: '6 mins',
          status: 'completed',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          }
        },
        // ... more activities
      ],
      milestones: [
        {
          id: 'milestone-1',
          title: 'Greeting Friend',
          description: 'Can say hello and goodbye in Chinese',
          unlocked: true,
          icon: '👋'
        }
      ]
    },
    {
      id: 'level-2',
      title: 'Numbers and Colors',
      description: 'Learn to count and name colors in Chinese',
      status: 'active',
      ageRecommendation: 'early',
      sensoryFocus: ['audio', 'visual'],
      activities: [
        {
          id: 'activity-3',
          title: 'Count with Pandas',
          description: 'Learn numbers 1-5 with panda friends',
          duration: '7 mins',
          status: 'completed',
          type: 'game',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          }
        },
        {
          id: 'activity-4',
          title: 'Rainbow Chinese',
          description: 'Learn color names through interactive scenes',
          duration: '8 mins',
          status: 'active',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          },
          offlineActivity: {
            title: 'Color Hunt',
            description: 'Find objects of different colors and say their Chinese names.',
            materials: ['Colored objects around the house']
          }
        },
        // ... more activities
      ]
    },
    {
      id: 'level-3',
      title: 'Animal Friends',
      description: 'Learn animal names and sounds in Chinese',
      status: 'locked',
      ageRecommendation: 'advanced',
      sensoryFocus: ['audio', 'movement', 'visual'],
      activities: [
        {
          id: 'activity-5',
          title: 'Zoo Adventure',
          description: 'Meet animals and learn their Chinese names',
          duration: '10 mins',
          status: 'locked',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          }
        },
        // ... more activities
      ]
    }
  ]
};

const scienceLearningPath: LearningPath = {
  id: 'science-explorers',
  title: 'Little Science Explorers',
  subject: 'science',
  description: 'Discover the natural world through observation and hands-on exploration',
  icon: '🔍',
  color: 'purple',
  progress: 25,
  ageRecommendation: 'all',
  sensoryElements: {
    audio: true,
    visual: true,
    tactile: true,
    movement: true
  },
  levels: [
    {
      id: 'level-1',
      title: 'World of Colors',
      description: 'Explore colors in nature and simple mixing',
      status: 'completed',
      ageRecommendation: 'early',
      sensoryFocus: ['visual', 'tactile'],
      activities: [
        {
          id: 'activity-1',
          title: 'Rainbow Discovery',
          description: 'Find colors in nature scenes',
          duration: '6 mins',
          status: 'completed',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          },
          offlineActivity: {
            title: 'Color Walk',
            description: 'Go outside and find objects of different colors in nature.',
            materials: ['None required']
          }
        },
        {
          id: 'activity-2',
          title: 'Mix & Match',
          description: 'Simple color mixing with digital paint',
          duration: '7 mins',
          status: 'completed',
          type: 'game',
          sensoryElements: {
            audio: false,
            visual: true,
            movement: false,
            tactile: true
          }
        },
        // ... more activities
      ],
      milestones: [
        {
          id: 'milestone-1',
          title: 'Color Scientist',
          description: 'Recognizes primary colors and simple mixing',
          unlocked: true,
          icon: '🌈'
        }
      ]
    },
    {
      id: 'level-2',
      title: 'Weather Wonders',
      description: 'Learn about different types of weather',
      status: 'active',
      ageRecommendation: 'early',
      sensoryFocus: ['visual', 'audio', 'tactile'],
      activities: [
        {
          id: 'activity-3',
          title: 'Weather Window',
          description: 'Match weather types to scenes and sounds',
          duration: '8 mins',
          status: 'completed',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          }
        },
        {
          id: 'activity-4',
          title: 'Rain Dance',
          description: 'Learn about rain through movement and sound',
          duration: '6 mins',
          status: 'active',
          type: 'video',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          },
          offlineActivity: {
            title: 'Weather Journal',
            description: 'Look out the window each day and draw the weather.',
            materials: ['Paper', 'Crayons or markers']
          }
        },
        // ... more activities
      ]
    },
    {
      id: 'level-3',
      title: 'Animal Habitats',
      description: 'Discover where different animals live',
      status: 'locked',
      ageRecommendation: 'advanced',
      sensoryFocus: ['visual', 'audio'],
      activities: [
        {
          id: 'activity-5',
          title: 'Home Sweet Home',
          description: 'Match animals to their habitats',
          duration: '10 mins',
          status: 'locked',
          type: 'game',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          }
        },
        // ... more activities
      ]
    }
  ]
};

// Early Literacy Learning Path (specifically for Ages 2-3)
const earlyLiteracyPath: LearningPath = {
  id: 'early-literacy',
  title: 'First Words & Sounds',
  subject: 'english',
  description: 'A gentle introduction to language for the youngest learners',
  icon: '🔤',
  color: 'blue',
  progress: 40,
  ageRecommendation: 'early',
  sensoryElements: {
    audio: true,
    visual: true,
    tactile: true,
    movement: true
  },
  levels: [
    {
      id: 'level-1',
      title: 'Listening Ears',
      description: 'Develop listening skills with sounds and music',
      status: 'completed',
      sensoryFocus: ['audio', 'movement'],
      activities: [
        {
          id: 'activity-1',
          title: 'Sound Safari',
          description: 'Listen and identify everyday sounds',
          duration: '4 mins',
          status: 'completed',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          },
          offlineActivity: {
            title: 'Sound Hunt',
            description: 'Walk around your home and listen for different sounds.',
            materials: ['None required']
          }
        },
        {
          id: 'activity-2',
          title: 'Music Moves',
          description: 'Dance and move to different rhythms',
          duration: '5 mins',
          status: 'completed',
          type: 'video',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          }
        }
      ],
      milestones: [
        {
          id: 'milestone-1',
          title: 'Sound Detective',
          description: 'Can identify common everyday sounds',
          unlocked: true,
          icon: '👂'
        }
      ]
    },
    {
      id: 'level-2',
      title: 'Picture Talk',
      description: 'Use pictures to build vocabulary',
      status: 'active',
      sensoryFocus: ['visual', 'audio'],
      activities: [
        {
          id: 'activity-3',
          title: 'My First Words',
          description: 'Name everyday objects with audio support',
          duration: '6 mins',
          status: 'completed',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: false
          }
        },
        {
          id: 'activity-4',
          title: 'Touch & Say',
          description: 'Touch pictures and hear words',
          duration: '5 mins',
          status: 'active',
          type: 'game',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: true
          },
          offlineActivity: {
            title: 'Object Naming',
            description: 'Walk around your home naming objects you touch.',
            materials: ['Household objects']
          }
        }
      ]
    }
  ]
};

// Advanced Math Learning Path (specifically for Ages 3-4)
const advancedMathPath: LearningPath = {
  id: 'advanced-early-math',
  title: 'Growing with Numbers',
  subject: 'mathematics',
  description: 'Expanding number and shape understanding for preschoolers',
  icon: '📊',
  color: 'green',
  progress: 15,
  ageRecommendation: 'advanced',
  sensoryElements: {
    audio: true,
    visual: true,
    tactile: true,
    movement: true
  },
  levels: [
    {
      id: 'level-1',
      title: 'Counting 1-10',
      description: 'Master counting up to ten objects',
      status: 'active',
      sensoryFocus: ['visual', 'tactile', 'audio'],
      activities: [
        {
          id: 'activity-1',
          title: 'Count with Me',
          description: 'Interactive counting up to 10 with feedback',
          duration: '7 mins',
          status: 'completed',
          type: 'interactive',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: true
          },
          offlineActivity: {
            title: 'Counting Collections',
            description: 'Gather small objects (buttons, pebbles) and practice counting them.',
            materials: ['Small objects for counting', 'Container']
          }
        },
        {
          id: 'activity-2',
          title: 'Number Line Jump',
          description: 'Move along a number line with animated character',
          duration: '8 mins',
          status: 'active',
          type: 'game',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          }
        }
      ]
    },
    {
      id: 'level-2',
      title: 'Simple Patterns',
      description: 'Recognize and create basic patterns',
      status: 'locked',
      sensoryFocus: ['visual', 'tactile'],
      activities: [
        {
          id: 'activity-3',
          title: 'Pattern Play',
          description: 'Complete simple patterns with shapes and colors',
          duration: '8 mins',
          status: 'locked',
          type: 'game',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: false,
            tactile: true
          }
        },
        {
          id: 'activity-4',
          title: 'Pattern Dance',
          description: 'Create movement patterns with music',
          duration: '6 mins',
          status: 'locked',
          type: 'video',
          sensoryElements: {
            audio: true,
            visual: true,
            movement: true,
            tactile: false
          },
          offlineActivity: {
            title: 'Everyday Patterns',
            description: 'Find patterns around your home (tiles, fabrics, etc.).',
            materials: ['None required']
          }
        }
      ]
    }
  ]
};

// Helper Functions
export function getAllLearningPaths(): LearningPath[] {
  return [
    englishLearningPath, 
    mathLearningPath, 
    chineseLearningPath, 
    scienceLearningPath,
    earlyLiteracyPath,
    advancedMathPath
  ];
}

export function getLearningPathsBySubject(subject: string): LearningPath[] {
  return getAllLearningPaths().filter(path => path.subject === subject);
}

export function getLearningPathsByAge(ageGroup: 'early' | 'advanced' | 'all'): LearningPath[] {
  if (ageGroup === 'all') {
    return getAllLearningPaths();
  }
  return getAllLearningPaths().filter(path => 
    path.ageRecommendation === ageGroup || path.ageRecommendation === 'all'
  );
}

export function getLearningPathById(id: string): LearningPath | undefined {
  return getAllLearningPaths().find(path => path.id === id);
} 