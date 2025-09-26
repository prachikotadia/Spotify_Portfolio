// Mock data for the portfolio
import ecommerceProject from '@/assets/ecommerce-project.jpg';
import taskManagementProject from '@/assets/task-management-project.jpg';
import weatherDashboardProject from '@/assets/weather-dashboard-project.jpg';
import socialAnalyticsProject from '@/assets/social-analytics-project.jpg';
import aiChatProject from '@/assets/ai-chat-project.jpg';
import fitnessTrackerProject from '@/assets/fitness-tracker-project.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  dateCompleted: string;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'OmniLife – Unified AI Personal Platform',
    description: 'A modern, cloud-native full-stack application combining AI-powered personal finance, e-commerce marketplace, health & fitness tracking, travel planning, social features, and real-time chat into one unified platform.',
    longDescription: 'OmniLife is a comprehensive personal platform that integrates multiple life management tools into a single, AI-powered application. It combines personal finance management, e-commerce marketplace, health & fitness tracking, travel planning, social networking, and real-time chat functionality. The platform uses advanced AI/ML algorithms to provide personalized recommendations and insights across all integrated services.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
    techStack: ['React', 'TypeScript', 'Python', 'AI/ML', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSocket', 'TailwindCSS'],
    githubUrl: 'https://github.com/prachikotadia/Unified-AI-Personal-Platform',
    liveUrl: 'https://omnilife-demo.netlify.app',
    features: [
      'AI-powered personal finance management',
      'Integrated e-commerce marketplace',
      'Health & fitness tracking with AI insights',
      'Smart travel planning and booking',
      'Social networking and community features',
      'Real-time chat with AI assistance',
      'Cloud-native architecture with microservices',
      'Advanced data analytics and reporting'
    ],
    dateCompleted: 'January 2024'
  },
  {
    id: '2',
    title: 'High Performance Database Indexing Framework',
    description: 'Implements a B+-tree index manager with key operations like insertion, deletion, and scanning, essential for database indexing.',
    longDescription: 'A high-performance database indexing framework built in C that implements B+-tree data structures for efficient database operations. The framework provides essential database indexing operations including insertion, deletion, and scanning with optimized memory management and file I/O operations.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center',
    techStack: ['C', 'B+-Tree', 'Database', 'Indexing', 'Data Structures', 'Memory Management', 'File I/O'],
    githubUrl: 'https://github.com/prachikotadia/high-performance-database-indexing-framework',
    liveUrl: '',
    features: [
      'B+-tree index implementation',
      'Efficient insertion and deletion operations',
      'Optimized scanning and search algorithms',
      'Memory management optimization',
      'File I/O operations for persistence',
      'Performance benchmarking tools',
      'Comprehensive test suite',
      'Documentation and examples'
    ],
    dateCompleted: 'December 2023'
  },
  {
    id: '3',
    title: 'GStreamer Infotainment Pipeline with Real-Time Synchronization',
    description: 'Developed a C++ GStreamer pipeline for synchronized audio-video playback with low latency. Optimized buffer sizes, integrated RTP jitter buffer, and used GStreamer logs for debugging and profiling.',
    longDescription: 'A sophisticated multimedia pipeline built with GStreamer in C++ for synchronized audio-video playback in infotainment systems. The project focuses on achieving low-latency, real-time synchronization between audio and video streams with optimized buffer management and RTP jitter buffer integration.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center',
    techStack: ['C++', 'GStreamer', 'Real-time Systems', 'Audio/Video', 'Linux', 'CMake', 'Web Dashboard'],
    githubUrl: 'https://github.com/prachikotadia/GStreamer-Infotainment-Pipeline-with-Sync',
    liveUrl: '',
    features: [
      'Real-time audio-video synchronization',
      'Low-latency multimedia processing',
      'RTP jitter buffer integration',
      'Optimized buffer size management',
      'GStreamer pipeline debugging tools',
      'Performance profiling and monitoring',
      'Cross-platform compatibility',
      'Web-based monitoring dashboard'
    ],
    dateCompleted: 'November 2023'
  },
  {
    id: '4',
    title: 'Expense-Management-System',
    description: 'Full-stack MERN application with authentication, dashboard, and expense tracking. Supports filtering, analytics, and custom user accounts.',
    longDescription: 'A comprehensive expense management system built with the MERN stack featuring user authentication, intuitive dashboard, and advanced expense tracking capabilities. The application supports expense categorization, filtering, analytics, and personalized user accounts with secure authentication.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop&crop=center',
    techStack: ['React', 'TypeScript', 'MongoDB', 'Express', 'Tailwind', 'JWT'],
    githubUrl: 'https://github.com/prachikotadia/Expense_Tracker_Full-Stack-Project',
    liveUrl: 'https://expense-tracker-demo.netlify.app',
    features: [
      'User authentication and authorization',
      'Intuitive expense tracking dashboard',
      'Advanced filtering and search capabilities',
      'Expense categorization and tagging',
      'Analytics and reporting features',
      'Data visualization with charts',
      'Export functionality for reports',
      'Responsive design for all devices'
    ],
    dateCompleted: 'October 2023'
  },
  {
    id: '5',
    title: 'Task Management App',
    description: 'Microservices-based task manager with FastAPI, PostgreSQL, and JWT authentication. React frontend with CRUD operations and service orchestration.',
    longDescription: 'A modern task management application built with microservices architecture using FastAPI for the backend and React for the frontend. The system features JWT authentication, PostgreSQL database, and comprehensive CRUD operations with service orchestration for scalable task management.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&crop=center',
    techStack: ['JavaScript', 'React', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT'],
    githubUrl: 'https://github.com/prachikotadia/Task-Manager',
    liveUrl: 'https://task-manager-demo.netlify.app',
    features: [
      'Microservices architecture',
      'JWT-based authentication',
      'PostgreSQL database integration',
      'CRUD operations for tasks',
      'Service orchestration',
      'Docker containerization',
      'RESTful API design',
      'React frontend with modern UI'
    ],
    dateCompleted: 'September 2023'
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'Beautifully animated, Apple-inspired personal portfolio built with React, TailwindCSS, and Framer Motion. Includes dark mode, theme switcher, and smooth transitions.',
    longDescription: 'A stunning personal portfolio website inspired by Apple\'s design language, built with React, TailwindCSS, and Framer Motion. Features include dark mode toggle, smooth animations, responsive design, and modern UI components with attention to detail and user experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center',
    techStack: ['React', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    githubUrl: 'https://github.com/prachikotadia/Portfolio',
    liveUrl: 'https://prachikotadia.netlify.app',
    features: [
      'Apple-inspired design language',
      'Smooth animations with Framer Motion',
      'Dark mode and theme switching',
      'Responsive design for all devices',
      'Interactive components and transitions',
      'Modern UI with TailwindCSS',
      'Performance optimized',
      'SEO-friendly structure'
    ],
    dateCompleted: 'August 2023'
  },
  {
    id: '7',
    title: 'Stack-Overflow Q&A Data Storage & Analysis',
    description: 'Data engineering project for storing and analyzing Q&A data from Stack Overflow using SQL, MongoDB, and data transformation techniques.',
    longDescription: 'A comprehensive data engineering project focused on collecting, storing, and analyzing Stack Overflow Q&A data. The project involves data extraction, transformation, and loading (ETL) processes using SQL and MongoDB, with advanced analytics and visualization capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
    techStack: ['SQL', 'MongoDB', 'Data Cleaning', 'EDA', 'Python'],
    githubUrl: 'https://github.com/prachikotadia/Stack-Overflow-Q-A-Data-Storage-Analysis',
    liveUrl: '',
    features: [
      'Stack Overflow data extraction',
      'SQL and MongoDB data storage',
      'Data cleaning and preprocessing',
      'Exploratory data analysis (EDA)',
      'Data transformation pipelines',
      'Analytics and insights generation',
      'Data visualization',
      'Performance optimization'
    ],
    dateCompleted: 'July 2023'
  },
  {
    id: '8',
    title: 'Content Management System',
    description: 'CMS with admin login, content creation, article previews, and page management. Built using PHP, Bootstrap, and MySQL.',
    longDescription: 'A full-featured Content Management System with admin authentication, content creation tools, article previews, and comprehensive page management. Built with PHP backend, Bootstrap frontend, and MySQL database for efficient content management workflows.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center',
    techStack: ['Python', 'MySQL', 'Bootstrap', 'Admin Panel'],
    githubUrl: 'https://github.com/prachikotadia/Content_Management_System-',
    liveUrl: 'https://cms-demo.netlify.app',
    features: [
      'Admin authentication and authorization',
      'Content creation and editing tools',
      'Article preview functionality',
      'Page management system',
      'User role management',
      'Media file handling',
      'Search and filtering capabilities',
      'Responsive admin interface'
    ],
    dateCompleted: 'June 2023'
  },
  {
    id: '9',
    title: 'News Mobile Application',
    description: 'React Native app displaying real-time news using NewsAPI. Features category-based filtering and light/dark theme toggle.',
    longDescription: 'A modern mobile news application built with React Native that displays real-time news from various sources. Features include category-based filtering, light/dark theme toggle, and seamless user experience with NewsAPI integration for up-to-date content.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=400&fit=crop&crop=center',
    techStack: ['Flutter', 'NewsAPI', 'Styled Components', 'Expo'],
    githubUrl: 'https://github.com/prachikotadia/News_App',
    liveUrl: '',
    features: [
      'Real-time news updates',
      'Category-based filtering',
      'Light/dark theme toggle',
      'NewsAPI integration',
      'Responsive mobile design',
      'Offline reading capabilities',
      'Search functionality',
      'Bookmark and share features'
    ],
    dateCompleted: 'May 2023'
  },
  {
    id: '10',
    title: 'Battleship Mobile Application',
    description: 'React Native mobile version of Battleship game with drag-and-drop ships, turn-based logic, and multiplayer local support.',
    longDescription: 'A mobile implementation of the classic Battleship game built with React Native. Features drag-and-drop ship placement, turn-based gameplay logic, and local multiplayer support with an intuitive mobile interface and smooth animations.',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=400&fit=crop&crop=center',
    techStack: ['Flutter', 'Game Logic', 'Expo', 'JavaScript'],
    githubUrl: 'https://github.com/prachikotadia/BattleshipApp',
    liveUrl: '',
    features: [
      'Drag-and-drop ship placement',
      'Turn-based gameplay logic',
      'Local multiplayer support',
      'Interactive game board',
      'Ship hit/miss tracking',
      'Game state management',
      'Smooth animations',
      'Mobile-optimized interface'
    ],
    dateCompleted: 'April 2023'
  },
  {
    id: '11',
    title: 'Flashcards Mobile Application',
    description: 'Mobile flashcard quiz app built with React Native, Redux for state management, and local storage for data persistence.',
    longDescription: 'A mobile flashcard application designed for learning and memorization. Built with React Native and Redux for state management, featuring local storage for data persistence, customizable flashcard sets, and quiz functionality with progress tracking.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center',
    techStack: ['Flutter', 'Redux', 'AsyncStorage', 'Quiz App'],
    githubUrl: 'https://github.com/prachikotadia/Flashcards_App',
    liveUrl: '',
    features: [
      'Customizable flashcard sets',
      'Redux state management',
      'Local data persistence',
      'Quiz functionality',
      'Progress tracking',
      'Study statistics',
      'Import/export capabilities',
      'Offline learning support'
    ],
    dateCompleted: 'March 2023'
  },
  {
    id: '12',
    title: 'Yahtzee Mobile Application',
    description: 'Full Yahtzee dice game in mobile format built with React Native. Supports score tracking, re-rolls, and rule-based logic.',
    longDescription: 'A complete mobile implementation of the Yahtzee dice game built with React Native. Features comprehensive score tracking, dice re-roll mechanics, and full rule-based game logic with an intuitive mobile interface and engaging gameplay experience.',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=400&fit=crop&crop=center',
    techStack: ['Flutter', 'Game Development', 'Expo'],
    githubUrl: 'https://github.com/prachikotadia/YahtzeeApp',
    liveUrl: '',
    features: [
      'Complete Yahtzee game logic',
      'Score tracking and calculation',
      'Dice re-roll mechanics',
      'Rule-based gameplay',
      'Score history tracking',
      'Game statistics',
      'Mobile-optimized interface',
      'Smooth dice animations'
    ],
    dateCompleted: 'February 2023'
  }
];

export const featuredProjects = mockProjects.slice(0, 3);
export const recentProjects = mockProjects.slice(3, 6);

// Work Experience Data
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  logo?: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    company: 'Freelance Developer',
    position: 'Full Stack Developer',
    duration: '2021 - Present',
    location: 'Remote',
    description: 'Providing end-to-end web development services to clients across various industries.',
    achievements: [
      'Delivered 20+ successful projects for diverse clients',
      'Built scalable web applications using modern technologies',
      'Maintained 100% client satisfaction rate'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript']
  },
  {
    id: '2',
    company: 'Open Source Contributor',
    position: 'Contributor',
    duration: '2020 - Present',
    location: 'Remote',
    description: 'Contributing to open source projects and building personal projects.',
    achievements: [
      'Active contributor to multiple open source repositories',
      'Built and maintained personal portfolio projects',
      'Published technical articles and tutorials'
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git']
  },
  {
    id: '3',
    company: 'Student Projects',
    position: 'Student Developer',
    duration: '2019 - 2021',
    location: 'Academic',
    description: 'Developed various projects as part of academic coursework and personal learning.',
    achievements: [
      'Completed multiple full-stack development projects',
      'Learned modern web development technologies',
      'Built responsive and interactive web applications'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL']
  }
];

// Education Data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: string;
  achievements: string[];
  logo?: string;
}

export const education: Education[] = [
  {
    id: '1',
    institution: 'Self-Taught Developer',
    degree: 'Self-Directed Learning',
    field: 'Full Stack Web Development',
    duration: '2019 - Present',
    location: 'Online',
    achievements: [
      'Completed multiple online courses and bootcamps',
      'Built 20+ personal and client projects',
      'Continuously learning new technologies and frameworks'
    ]
  },
  {
    id: '2',
    institution: 'Academic Background',
    degree: 'Bachelor\'s Degree',
    field: 'Relevant Field',
    duration: '2015 - 2019',
    location: 'University',
    achievements: [
      'Strong foundation in problem-solving and analytical thinking',
      'Experience with project management and teamwork',
      'Excellent communication and presentation skills'
    ]
  }
];

// Skills Data
export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-5
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', category: 'Frontend', level: 5 },
  { id: '2', name: 'JavaScript', category: 'Frontend', level: 5 },
  { id: '3', name: 'HTML/CSS', category: 'Frontend', level: 5 },
  { id: '4', name: 'Tailwind CSS', category: 'Frontend', level: 4 },
  { id: '5', name: 'TypeScript', category: 'Frontend', level: 3 },
  { id: '6', name: 'Next.js', category: 'Frontend', level: 4 },
  
  // Backend
  { id: '7', name: 'Node.js', category: 'Backend', level: 4 },
  { id: '8', name: 'Express.js', category: 'Backend', level: 4 },
  { id: '9', name: 'Python', category: 'Backend', level: 3 },
  { id: '10', name: 'MongoDB', category: 'Database', level: 4 },
  { id: '11', name: 'SQL', category: 'Database', level: 3 },
  
  // Tools & Others
  { id: '12', name: 'Git', category: 'Tools', level: 5 },
  { id: '13', name: 'VS Code', category: 'Tools', level: 5 },
  { id: '14', name: 'Netlify', category: 'Deployment', level: 4 },
  { id: '15', name: 'Vercel', category: 'Deployment', level: 3 },
  { id: '16', name: 'Figma', category: 'Design', level: 3 },
  { id: '17', name: 'Responsive Design', category: 'Frontend', level: 5 },
  { id: '18', name: 'Web Development', category: 'General', level: 5 }
];

// Blog Data
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building My First React Portfolio',
    excerpt: 'A journey through creating my first React-based portfolio website.',
    content: 'Full article content here...',
    author: 'Prachi Kotadia',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['React', 'Portfolio', 'Web Development'],
    featured: true
  },
  {
    id: '2',
    title: 'Learning Full Stack Development',
    excerpt: 'My experience learning both frontend and backend technologies.',
    content: 'Full article content here...',
    author: 'Prachi Kotadia',
    date: '2024-01-10',
    readTime: '7 min read',
    tags: ['Learning', 'Full Stack', 'Development'],
    featured: true
  },
  {
    id: '3',
    title: 'Responsive Design Tips',
    excerpt: 'Essential techniques for creating mobile-friendly websites.',
    content: 'Full article content here...',
    author: 'Prachi Kotadia',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['CSS', 'Responsive', 'Mobile'],
    featured: false
  }
];

// Testimonials Data
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Client Feedback',
    role: 'Client',
    company: 'Freelance Project',
    content: 'Prachi delivered an excellent website that exceeded our expectations. The attention to detail and responsiveness was outstanding.',
    rating: 5
  },
  {
    id: '2',
    name: 'Peer Review',
    role: 'Developer',
    company: 'Open Source Community',
    content: 'Great collaboration skills and always willing to help others learn. A valuable contributor to the community.',
    rating: 5
  },
  {
    id: '3',
    name: 'Mentor Feedback',
    role: 'Mentor',
    company: 'Learning Platform',
    content: 'Shows strong dedication to learning and improving. Always asks thoughtful questions and implements feedback well.',
    rating: 5
  }
];

// Awards Data
export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
  image?: string;
}

export const awards: Award[] = [
  {
    id: '1',
    title: 'Best Web Application',
    organization: 'Tech Innovation Awards 2023',
    date: '2023-12-15',
    description: 'Awarded for the innovative e-commerce platform with exceptional user experience.',
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'Hackathon Winner',
    organization: 'CodeFest 2023',
    date: '2023-10-20',
    description: 'First place in 48-hour hackathon for AI-powered productivity tool.',
    category: 'Competition'
  },
  {
    id: '3',
    title: 'Open Source Contributor',
    organization: 'GitHub',
    date: '2023-08-10',
    description: 'Recognized for significant contributions to popular open source projects.',
    category: 'Community'
  }
];

// Extras/Side Projects Data
export interface SideProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  status: 'active' | 'completed' | 'archived';
}

export const sideProjects: SideProject[] = [
  {
    id: '1',
    title: 'Personal Blog Engine',
    description: 'A custom blog engine built with Next.js and MDX for technical writing.',
    techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://blog.example.com',
    category: 'Web Development',
    status: 'active'
  },
  {
    id: '2',
    title: 'Weather CLI Tool',
    description: 'Command-line weather application with beautiful terminal output.',
    techStack: ['Node.js', 'Commander.js', 'Chalk', 'OpenWeather API'],
    githubUrl: 'https://github.com',
    category: 'CLI Tools',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Chrome Extension',
    description: 'Productivity extension for developers with code snippets and shortcuts.',
    techStack: ['JavaScript', 'Chrome APIs', 'HTML', 'CSS'],
    githubUrl: 'https://github.com',
    category: 'Browser Extensions',
    status: 'active'
  }
];