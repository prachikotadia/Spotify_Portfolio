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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    company: 'GroupedIn',
    position: 'Software Engineer',
    duration: 'Aug 2025 – Present',
    location: 'New Jersey, USA',
    description: 'Engineered and maintained cross-platform applications using React, Flutter, and FastAPI, supporting 1,000+ daily active users across web, iOS, and Android. Integrated AI-driven chat and recommendation engines, leveraging NLP and predictive analytics to boost user engagement by 25%.',
    achievements: [
      'Designed, developed, and deployed e-commerce systems (checkout, inventory, payments) handling ~500 daily transactions',
      'Architected real-time IoT and sensor data integration for 200+ users, increasing activity by 30%',
      'Built high-performance C/C++ Linux kernel modules, reducing latency by 15%',
      'Automated CI/CD pipelines for embedded builds, cutting integration/deployment time by 40%',
      'Used Trace32 debugging to resolve complex memory fragmentation issues',
      'Collaborated with hardware and QA teams to deliver reliable sprint releases'
    ],
    techStack: ['React', 'Flutter', 'FastAPI', 'AI/ML', 'NLP', 'Cross-platform', 'E-commerce', 'IoT', 'C/C++', 'Linux Kernel', 'CI/CD']
  },
  {
    id: '2',
    company: 'Illinois Institute of Technology',
    position: 'Research Assistant – Microservices & Distributed Systems Benchmarking',
    duration: 'Apr 2025 – May 2025',
    location: 'Chicago, USA',
    description: 'Benchmarked microservices in C++, Go, Rust, Java, and Node.js, focusing on runtime efficiency, memory footprint, and GC impact.',
    achievements: [
      'Migrated performance-critical components to Rust/Go, reducing memory usage by ~35%',
      'Increased system throughput by 30% with async I/O and rigorous load testing',
      'Used SonarQube + Valgrind to catch leaks, race conditions, and vulnerabilities early',
      'Designed low-latency, high-throughput data pipelines for real-time apps',
      'Authored a comparative study on distributed system performance trade-offs'
    ],
    techStack: ['C++', 'Go', 'Rust', 'Java', 'Node.js', 'Microservices', 'Distributed Systems', 'Benchmarking', 'JMeter', 'Locust', 'Linux Perf', 'SonarQube', 'Valgrind']
  },
  {
    id: '3',
    company: 'GroupedIn',
    position: 'Software Engineer',
    duration: 'Sep 2024 – Dec 2024',
    location: 'New Jersey, USA (Hybrid)',
    description: 'Built and optimized a full-stack expense management system with AWS Lambda, DynamoDB, and React.js.',
    achievements: [
      'Delivered serverless platform with AWS backend and React.js frontend',
      'Reduced API latency by 40% using DynamoDB auto-scaling and Lambda tuning',
      'Integrated AWS Cognito for secure authentication',
      'Automated deployments with GitHub Actions CI/CD pipelines',
      'Contributed in Agile sprints and team collaboration'
    ],
    techStack: ['React.js', 'AWS Lambda', 'DynamoDB', 'CI/CD', 'API Gateway', 'GitHub Actions']
  },
  {
    id: '4',
    company: 'GroupedIn',
    position: 'Software Engineer',
    duration: 'Jun 2024 – Aug 2024',
    location: 'New Jersey, USA (Hybrid)',
    description: 'Worked on scalable REST APIs with Python, Flask, and PostgreSQL; focused on performance, Docker deployments, and open-source collaboration.',
    achievements: [
      'Built APIs serving 5,000+ users',
      'Optimized SQL queries, cutting latency by 20%',
      'Designed dual-database architecture (MongoDB + PostgreSQL)',
      'Dockerized microservices for production deployment',
      'Collaborated via GitHub and open-source reviews'
    ],
    techStack: ['Python', 'Flask', 'PostgreSQL', 'MongoDB', 'Docker', 'Open Source']
  },
  {
    id: '5',
    company: 'CHARUSAT',
    position: 'Research Intern – Computational Antenna Design',
    duration: 'Jun 2022 – Jul 2022',
    location: 'Gujarat, India',
    description: 'Focused on circularly polarized antenna design optimization using computational modeling and algorithm-based tuning.',
    achievements: [
      'Automated antenna parameter tuning scripts',
      'Optimized bandwidth, gain, and axial ratio',
      'Strengthened RF and wireless design knowledge'
    ],
    techStack: ['Antenna Design', 'Data Modeling', 'RF Systems', 'Simulation', 'Optimization']
  },
  {
    id: '6',
    company: 'Ekarshi OpenSource Foundation',
    position: 'Software Engineer Intern',
    duration: 'Jun 2020 – Oct 2020',
    location: 'Ahmedabad, India',
    description: 'Worked on programming concepts, memory optimization, and efficient software design.',
    achievements: [
      'Explored advanced memory allocation and function optimization',
      'Contributed to open-source modules',
      'Improved coding practices and refactoring'
    ],
    techStack: ['C++', 'Algorithms', 'Memory Management', 'Design Analysis']
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
  // Programming Languages 💻
  { id: '1', name: 'Python', category: 'Programming Languages', level: 5 },
  { id: '2', name: 'JavaScript', category: 'Programming Languages', level: 5 },
  { id: '3', name: 'TypeScript', category: 'Programming Languages', level: 5 },
  { id: '4', name: 'C++', category: 'Programming Languages', level: 4 },
  { id: '5', name: 'C', category: 'Programming Languages', level: 4 },
  { id: '6', name: 'Dart', category: 'Programming Languages', level: 4 },
  { id: '7', name: 'SQL', category: 'Programming Languages', level: 4 },
  { id: '8', name: 'Shell Scripting', category: 'Programming Languages', level: 3 },
  { id: '9', name: 'HTML/CSS', category: 'Programming Languages', level: 5 },
  { id: '10', name: 'Node.js', category: 'Programming Languages', level: 4 },
  
  // Web Development 🌐
  { id: '11', name: 'React', category: 'Web Development', level: 5 },
  { id: '12', name: 'HTML5/CSS3', category: 'Web Development', level: 5 },
  { id: '13', name: 'JWT & OAuth2', category: 'Web Development', level: 4 },
  { id: '14', name: 'WebSockets', category: 'Web Development', level: 4 },
  { id: '15', name: 'REST API', category: 'Web Development', level: 5 },
  { id: '16', name: 'PWA', category: 'Web Development', level: 3 },
  { id: '17', name: 'Responsive Design', category: 'Web Development', level: 5 },
  { id: '18', name: 'Animations & UX', category: 'Web Development', level: 4 },
  
  // Databases & Cloud 🗄️
  { id: '19', name: 'PostgreSQL', category: 'Databases & Cloud', level: 4 },
  { id: '20', name: 'DynamoDB', category: 'Databases & Cloud', level: 4 },
  { id: '21', name: 'AWS Lambda', category: 'Databases & Cloud', level: 4 },
  { id: '22', name: 'Redis', category: 'Databases & Cloud', level: 3 },
  { id: '23', name: 'MySQL', category: 'Databases & Cloud', level: 4 },
  { id: '24', name: 'CRUD Operations', category: 'Databases & Cloud', level: 5 },
  { id: '25', name: 'AWS', category: 'Databases & Cloud', level: 4 },
  { id: '26', name: 'Microservices', category: 'Databases & Cloud', level: 4 },
  
  // Embedded & Systems 🔧
  { id: '27', name: 'Linux', category: 'Embedded & Systems', level: 4 },
  { id: '28', name: 'GStreamer', category: 'Embedded & Systems', level: 3 },
  { id: '29', name: 'CarPlay', category: 'Embedded & Systems', level: 3 },
  { id: '30', name: 'Vulkan', category: 'Embedded & Systems', level: 2 },
  { id: '31', name: 'Trace32', category: 'Embedded & Systems', level: 3 },
  { id: '32', name: 'Memory Management', category: 'Embedded & Systems', level: 4 },
  { id: '33', name: 'Debugging Tools', category: 'Embedded & Systems', level: 4 },
  { id: '34', name: 'Event-Driven Architecture', category: 'Embedded & Systems', level: 4 },
  
  // Mobile & AI/ML 🤖
  { id: '35', name: 'Flutter', category: 'Mobile & AI/ML', level: 4 },
  { id: '36', name: 'OpenAI API', category: 'Mobile & AI/ML', level: 4 },
  { id: '37', name: 'LangChain', category: 'Mobile & AI/ML', level: 3 },
  { id: '38', name: 'NLP', category: 'Mobile & AI/ML', level: 4 },
  { id: '39', name: 'Recommendation Systems', category: 'Mobile & AI/ML', level: 4 },
  { id: '40', name: 'Chatbots', category: 'Mobile & AI/ML', level: 4 },
  { id: '41', name: 'Text Processing', category: 'Mobile & AI/ML', level: 4 },
  
  // DevOps & Tools 🛠️
  { id: '42', name: 'Git/GitHub', category: 'DevOps & Tools', level: 5 },
  { id: '43', name: 'Docker', category: 'DevOps & Tools', level: 4 },
  { id: '44', name: 'CI/CD', category: 'DevOps & Tools', level: 4 },
  { id: '45', name: 'Monitoring & Logging', category: 'DevOps & Tools', level: 3 },
  { id: '46', name: 'SonarQube', category: 'DevOps & Tools', level: 3 },
  { id: '47', name: 'Perf', category: 'DevOps & Tools', level: 3 },
  { id: '48', name: 'Postman', category: 'DevOps & Tools', level: 4 },
  { id: '49', name: 'Swagger/OpenAPI', category: 'DevOps & Tools', level: 3 },
  { id: '50', name: 'Vite', category: 'DevOps & Tools', level: 4 },
  { id: '51', name: 'JMeter', category: 'DevOps & Tools', level: 3 },
  { id: '52', name: 'Locust', category: 'DevOps & Tools', level: 3 },
  { id: '53', name: 'Error Handling', category: 'DevOps & Tools', level: 4 }
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

// Certificate data
export const mockCertificates = [
  {
    id: 'cert-1',
    title: 'Crash Course on Python',
    issuer: 'Google (Coursera)',
    date: '2023',
    image: '/assets/google-logo.png',
    skills: ['Python Basics', 'Control Structures', 'Loops', 'Functions'],
    link: 'https://coursera.org/verify/LHGQ1SX2M40N',
    description: 'Comprehensive Python programming fundamentals for beginners.',
    longDescription: 'This certification covers Python programming fundamentals including variables, data types, control structures, loops, functions, and basic programming concepts. Perfect for beginners looking to start their programming journey with Python.',
    techStack: ['Python', 'Programming Fundamentals', 'Control Structures', 'Functions', 'Data Types']
  },
  {
    id: 'cert-2',
    title: 'Coding Interview Preparation',
    issuer: 'Meta (Coursera)',
    date: '2023',
    image: '/assets/meta-logo.png',
    skills: ['Data Structures', 'Algorithms', 'Interview Strategy', 'Problem Solving'],
    link: 'https://coursera.org/verify/B6DU13XTR6AT',
    description: 'Comprehensive preparation for technical coding interviews.',
    longDescription: 'This certification provides comprehensive preparation for technical coding interviews, covering data structures, algorithms, problem-solving strategies, and interview techniques. Includes practice problems and mock interviews.',
    techStack: ['Data Structures', 'Algorithms', 'Problem Solving', 'Interview Prep', 'Coding']
  },
  {
    id: 'cert-3',
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google (Coursera)',
    date: '2023',
    image: '/assets/google-logo.png',
    skills: ['Data Analysis', 'Data Lifecycle', 'Business Intelligence', 'Visualization'],
    link: 'https://coursera.org/verify/7NEFJ74GA66B',
    description: 'Foundational knowledge of data analysis and business intelligence.',
    longDescription: 'This certification covers the fundamentals of data analysis, data lifecycle, business intelligence, and data visualization. Perfect for understanding how data drives business decisions and insights.',
    techStack: ['Data Analysis', 'Business Intelligence', 'Data Visualization', 'Analytics', 'SQL']
  },
  {
    id: 'cert-4',
    title: 'Foundations of Project Management',
    issuer: 'Google (Coursera)',
    date: '2023',
    image: '/assets/google-logo.png',
    skills: ['Project Planning', 'Stakeholder Management', 'Agile', 'Scrum'],
    link: 'https://coursera.org/verify/5TH1FGFD1ZHJ',
    description: 'Essential project management skills and methodologies.',
    longDescription: 'This certification covers essential project management skills including project planning, stakeholder management, Agile methodologies, Scrum framework, and project execution. Perfect for managing technical projects effectively.',
    techStack: ['Project Management', 'Agile', 'Scrum', 'Planning', 'Stakeholder Management']
  },
  {
    id: 'cert-5',
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google (Coursera)',
    date: '2023',
    image: '/assets/google-logo.png',
    skills: ['UX Principles', 'Accessibility', 'Design Thinking', 'Wireframing'],
    link: 'https://coursera.org/verify/BPE6U7LVW7RM',
    description: 'Comprehensive UX design principles and methodologies.',
    longDescription: 'This certification covers user experience design principles, accessibility, design thinking, wireframing, and user research. Essential for creating user-centered digital products and interfaces.',
    techStack: ['UX Design', 'Accessibility', 'Design Thinking', 'Wireframing', 'User Research']
  },
  {
    id: 'cert-6',
    title: 'Technical Support Fundamentals',
    issuer: 'Google (Coursera)',
    date: '2023',
    image: '/assets/google-logo.png',
    skills: ['Computer Hardware', 'Networking', 'Troubleshooting', 'Linux'],
    link: 'https://coursera.org/verify/D15A5AY8QXSO',
    description: 'Fundamental technical support and troubleshooting skills.',
    longDescription: 'This certification covers computer hardware, networking fundamentals, troubleshooting techniques, and Linux basics. Essential for technical support roles and system administration.',
    techStack: ['Computer Hardware', 'Networking', 'Troubleshooting', 'Linux', 'System Administration']
  },
  {
    id: 'cert-7',
    title: 'The Data Scientist\'s Toolbox',
    issuer: 'Johns Hopkins University (Coursera)',
    date: '2023',
    image: '/assets/johns-hopkins-logo.png',
    skills: ['R Programming', 'Data Science Workflow', 'Version Control', 'GitHub'],
    link: 'https://coursera.org/verify/NSRORKMUYQG2',
    description: 'Essential tools and workflows for data science professionals.',
    longDescription: 'This certification covers R programming, data science workflows, version control with Git, GitHub collaboration, and essential tools for data science professionals. Perfect for aspiring data scientists.',
    techStack: ['R Programming', 'Data Science', 'Git', 'GitHub', 'Workflow']
  },
  {
    id: 'cert-8',
    title: 'What is Data Science?',
    issuer: 'IBM (Coursera)',
    date: '2023',
    image: '/assets/ibm-logo.png',
    skills: ['Data Science Basics', 'Big Data', 'Business Use Cases', 'Analytics'],
    link: 'https://coursera.org/verify/6ZVETUKCLJDI',
    description: 'Introduction to data science concepts and applications.',
    longDescription: 'This certification provides an introduction to data science concepts, big data technologies, business use cases, and analytics. Perfect for understanding the data science field and its applications.',
    techStack: ['Data Science', 'Big Data', 'Analytics', 'Business Intelligence', 'Statistics']
  },
  {
    id: 'cert-9',
    title: 'Amazon DynamoDB Service Introduction',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: '/assets/aws-logo.png',
    skills: ['NoSQL', 'DynamoDB', 'AWS Cloud', 'Key-Value Databases'],
    link: '',
    description: 'Introduction to Amazon DynamoDB NoSQL database service.',
    longDescription: 'This certification covers Amazon DynamoDB, a NoSQL database service. Learn about key-value databases, DynamoDB features, AWS cloud integration, and database design patterns for scalable applications.',
    techStack: ['DynamoDB', 'NoSQL', 'AWS', 'Database Design', 'Cloud Computing']
  }
];

// Research Paper data
export const mockResearchPapers = [
  {
    id: 'research-1',
    title: 'Software Engineering Techniques for Building Adaptive Awareness in Robotic Systems',
    authors: 'Prachi Kotadia',
    journal: 'Software Engineering Techniques for Building Adaptive Awareness in Robotic Systems',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=center',
    abstract: 'Explores strategies to engineer adaptive behavior in robotic systems through intelligent software design.',
    longDescription: 'This research paper explores strategies to engineer adaptive behavior in robotic systems through intelligent software design. The study focuses on developing software engineering techniques that enable robots to build adaptive awareness and respond dynamically to changing environments.',
    keywords: ['Software Engineering', 'Robotic Systems', 'Adaptive Behavior', 'Intelligent Software', 'AI'],
    link: 'https://prachikotadia.github.io/prachiKotadia/static/media/SE_ResearchPaper.dc470da4625f563f310c.pdf',
    doi: '10.1000/example.2024.001',
    citations: 25,
    techStack: ['Software Engineering', 'Robotics', 'AI', 'Machine Learning', 'Adaptive Systems']
  },
  {
    id: 'research-2',
    title: 'Emotional Intelligence in AI Quality Assurance: Ensuring Empathetic and Culturally Sensitive AI Interactions',
    authors: 'Prachi Kotadia',
    journal: 'Emotional Intelligence in AI Quality Assurance',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=center',
    abstract: 'Discusses the role of emotional and cultural intelligence in testing and evaluating AI-driven systems.',
    longDescription: 'This research paper discusses the role of emotional and cultural intelligence in testing and evaluating AI-driven systems. The study explores how to ensure empathetic and culturally sensitive AI interactions through advanced quality assurance methodologies.',
    keywords: ['Emotional Intelligence', 'AI Quality Assurance', 'Cultural Sensitivity', 'Empathetic AI', 'Testing'],
    link: 'https://prachikotadia.github.io/prachiKotadia/static/media/SQM_ResearchPaper.575492264598d7d63e9b.pdf',
    doi: '10.1000/example.2024.002',
    citations: 18,
    techStack: ['AI', 'Quality Assurance', 'Emotional Intelligence', 'Cultural Intelligence', 'Testing']
  },
  {
    id: 'research-3',
    title: 'Continuous Integration and Continuous Deployment, DevOps, and MLOps',
    authors: 'Prachi Kotadia',
    journal: 'Continuous Integration and Continuous Deployment, DevOps, and MLOps',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop&crop=center',
    abstract: 'A technical overview of CI/CD processes and DevOps practices with a focus on modern ML pipelines.',
    longDescription: 'This technical report provides a comprehensive overview of CI/CD processes and DevOps practices with a focus on modern ML pipelines. The study covers continuous integration, continuous deployment, DevOps methodologies, and MLOps practices for machine learning model deployment.',
    keywords: ['CI/CD', 'DevOps', 'MLOps', 'Machine Learning', 'Deployment'],
    link: 'https://prachikotadia.github.io/prachiKotadia/static/media/Final_Term_Paper_SPM.a61cf3aa573986568623.pdf',
    doi: '10.1000/example.2023.003',
    citations: 32,
    techStack: ['CI/CD', 'DevOps', 'MLOps', 'Docker', 'Kubernetes', 'Machine Learning']
  }
];