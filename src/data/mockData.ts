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
    title: 'Spotify-Style Portfolio',
    description: 'Modern portfolio website with Spotify-inspired design',
    longDescription: 'A comprehensive portfolio website built with React, TypeScript, and Tailwind CSS. Features a Spotify-inspired design with glass morphism effects, responsive layout, and interactive components. Includes sections for projects, experience, skills, and more.',
    image: ecommerceProject,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/prachikotadia/Spotify_Portfolio',
    liveUrl: 'https://prachikotadia.netlify.app',
    features: [
      'Spotify-inspired UI/UX design',
      'Responsive mobile-first layout',
      'Interactive animations with Framer Motion',
      'Glass morphism effects',
      'Search functionality across all content',
      'Multiple portfolio sections',
      'Modern React with TypeScript'
    ],
    dateCompleted: 'January 2024'
  },
  {
    id: '2',
    title: 'React Learning Projects',
    description: 'Collection of React projects for learning and practice',
    longDescription: 'Various React projects built during the learning journey, including components, hooks, state management, and API integration. Each project demonstrates different React concepts and best practices.',
    image: taskManagementProject,
    techStack: ['React', 'JavaScript', 'CSS', 'HTML', 'API Integration'],
    githubUrl: 'https://github.com/prachikotadia',
    liveUrl: 'https://prachikotadia.netlify.app',
    features: [
      'React components and hooks',
      'State management with useState and useEffect',
      'API integration and data fetching',
      'Responsive design with CSS',
      'Interactive user interfaces',
      'Form handling and validation',
      'Modern React patterns'
    ],
    dateCompleted: 'December 2023'
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