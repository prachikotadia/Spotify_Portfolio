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
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI/UX',
    longDescription: 'A comprehensive e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. The application is fully responsive and optimized for performance.',
    image: ecommerceProject,
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Order tracking and history',
      'Admin dashboard for inventory management',
      'Responsive design for all devices'
    ],
    dateCompleted: 'March 2024'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    longDescription: 'A powerful task management application that enables teams to collaborate effectively. Built with React and Socket.io for real-time updates, featuring drag-and-drop functionality, file attachments, and comprehensive project analytics.',
    image: taskManagementProject,
    techStack: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis', 'AWS S3'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    features: [
      'Real-time collaboration with Socket.io',
      'Drag-and-drop task management',
      'File attachments and comments',
      'Project analytics and reporting',
      'Team member management',
      'Notification system',
      'Mobile-responsive interface'
    ],
    dateCompleted: 'February 2024'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts and interactive maps',
    longDescription: 'An elegant weather dashboard that provides current conditions, extended forecasts, and interactive weather maps. Features location-based weather data, severe weather alerts, and customizable widgets for a personalized experience.',
    image: weatherDashboardProject,
    techStack: ['React', 'TypeScript', 'OpenWeather API', 'Mapbox', 'Chart.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    features: [
      'Current weather conditions and forecasts',
      'Interactive weather maps with Mapbox',
      'Severe weather alerts and notifications',
      'Location-based weather data',
      'Customizable dashboard widgets',
      'Historical weather data visualization',
      'PWA with offline support'
    ],
    dateCompleted: 'January 2024'
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media performance tracking',
    longDescription: 'A comprehensive analytics platform for tracking social media performance across multiple platforms. Features include engagement metrics, audience insights, content performance analysis, and automated reporting.',
    image: socialAnalyticsProject,
    techStack: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    features: [
      'Multi-platform social media integration',
      'Real-time engagement tracking',
      'Advanced data visualization with D3.js',
      'Automated report generation',
      'Audience demographic analysis',
      'Content performance insights',
      'Exportable analytics reports'
    ],
    dateCompleted: 'December 2023'
  },
  {
    id: '5',
    title: 'AI Chat Application',
    description: 'Intelligent chatbot with natural language processing',
    longDescription: 'An AI-powered chat application that leverages natural language processing to provide intelligent responses. Features include conversation history, multiple AI models, and customizable personality settings.',
    image: aiChatProject,
    techStack: ['React', 'Python', 'OpenAI API', 'WebSocket', 'MongoDB', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    features: [
      'Integration with multiple AI models',
      'Real-time chat interface',
      'Conversation history and search',
      'Customizable AI personality',
      'File sharing and image analysis',
      'Multi-language support',
      'Voice-to-text capabilities'
    ],
    dateCompleted: 'November 2023'
  },
  {
    id: '6',
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness tracker with workout plans and nutrition',
    longDescription: 'A complete fitness tracking application that helps users monitor their workouts, nutrition, and progress. Includes personalized workout plans, calorie tracking, and social features to connect with other fitness enthusiasts.',
    image: fitnessTrackerProject,
    techStack: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'Stripe', 'Expo'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    features: [
      'Personalized workout plan generation',
      'Nutrition tracking and calorie counting',
      'Progress photos and measurements',
      'Social features and community challenges',
      'Wearable device integration',
      'Achievement system and rewards',
      'Offline workout tracking'
    ],
    dateCompleted: 'October 2023'
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
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    duration: '2022 - Present',
    location: 'San Francisco, CA',
    description: 'Leading development of enterprise-scale web applications and mentoring junior developers.',
    achievements: [
      'Led a team of 5 developers in building a microservices architecture',
      'Improved application performance by 40% through optimization',
      'Mentored 3 junior developers who were promoted within 6 months'
    ],
    techStack: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    id: '2',
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    duration: '2020 - 2022',
    location: 'Remote',
    description: 'Developed user-facing features and collaborated with design team to create intuitive interfaces.',
    achievements: [
      'Built responsive web applications serving 100k+ users',
      'Implemented design system used across all company products',
      'Reduced page load time by 60% through code optimization'
    ],
    techStack: ['React', 'TypeScript', 'Redux', 'Sass', 'Jest']
  },
  {
    id: '3',
    company: 'Digital Agency Pro',
    position: 'Junior Web Developer',
    duration: '2019 - 2020',
    location: 'New York, NY',
    description: 'Developed websites and web applications for various clients across different industries.',
    achievements: [
      'Delivered 15+ client projects on time and within budget',
      'Learned and implemented modern JavaScript frameworks',
      'Collaborated with designers to create pixel-perfect implementations'
    ],
    techStack: ['JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL']
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
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    duration: '2015 - 2019',
    location: 'Boston, MA',
    gpa: '3.8/4.0',
    achievements: [
      'Dean\'s List for 6 consecutive semesters',
      'President of Computer Science Club',
      'Research Assistant in AI/ML Lab'
    ]
  },
  {
    id: '2',
    institution: 'Online Learning Platform',
    degree: 'Certification',
    field: 'Full Stack Web Development',
    duration: '2020',
    location: 'Online',
    achievements: [
      'Completed intensive 6-month program',
      'Built 10+ full-stack applications',
      'Achieved 95% average across all modules'
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
  { id: '2', name: 'TypeScript', category: 'Frontend', level: 4 },
  { id: '3', name: 'Vue.js', category: 'Frontend', level: 3 },
  { id: '4', name: 'Angular', category: 'Frontend', level: 3 },
  { id: '5', name: 'HTML/CSS', category: 'Frontend', level: 5 },
  { id: '6', name: 'Tailwind CSS', category: 'Frontend', level: 4 },
  
  // Backend
  { id: '7', name: 'Node.js', category: 'Backend', level: 4 },
  { id: '8', name: 'Python', category: 'Backend', level: 4 },
  { id: '9', name: 'Express.js', category: 'Backend', level: 4 },
  { id: '10', name: 'FastAPI', category: 'Backend', level: 3 },
  { id: '11', name: 'Django', category: 'Backend', level: 3 },
  
  // Database
  { id: '12', name: 'PostgreSQL', category: 'Database', level: 4 },
  { id: '13', name: 'MongoDB', category: 'Database', level: 4 },
  { id: '14', name: 'Redis', category: 'Database', level: 3 },
  
  // Cloud & DevOps
  { id: '15', name: 'AWS', category: 'Cloud', level: 3 },
  { id: '16', name: 'Docker', category: 'DevOps', level: 4 },
  { id: '17', name: 'Kubernetes', category: 'DevOps', level: 3 },
  { id: '18', name: 'Git', category: 'Tools', level: 5 }
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
    title: 'Building Scalable React Applications',
    excerpt: 'Learn how to structure and optimize React applications for scale.',
    content: 'Full article content here...',
    author: 'Your Name',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['React', 'JavaScript', 'Performance'],
    featured: true
  },
  {
    id: '2',
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging technologies and trends in web development.',
    content: 'Full article content here...',
    author: 'Your Name',
    date: '2024-01-10',
    readTime: '8 min read',
    tags: ['Web Development', 'Technology', 'Trends'],
    featured: true
  },
  {
    id: '3',
    title: 'Getting Started with TypeScript',
    excerpt: 'A beginner\'s guide to TypeScript for JavaScript developers.',
    content: 'Full article content here...',
    author: 'Your Name',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript', 'Tutorial'],
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
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Solutions',
    content: 'An exceptional developer who consistently delivers high-quality code and innovative solutions. Their attention to detail and problem-solving skills are outstanding.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Senior Developer',
    company: 'StartupXYZ',
    content: 'Working with this developer was a pleasure. They have excellent communication skills and always go above and beyond to help the team succeed.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Design Director',
    company: 'Digital Agency Pro',
    content: 'A creative problem-solver who understands both technical and design requirements. Their ability to translate designs into pixel-perfect implementations is remarkable.',
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