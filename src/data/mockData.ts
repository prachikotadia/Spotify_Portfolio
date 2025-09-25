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