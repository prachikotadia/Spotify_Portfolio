import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Play, Shuffle, Clock, Bell, Heart, Star, TrendingUp, Award, MessageSquare, Plus, MoreHorizontal, Briefcase, Code, GraduationCap, BookOpen } from 'lucide-react';
import SpotifyLogo from '@/components/SpotifyLogo';
import SpotifySidebar from '@/components/SpotifySidebar';
import SpotifyTopBar from '@/components/SpotifyTopBar';
import SpotifyPlayer from '@/components/SpotifyPlayer';

// Spotify-style icons as SVG components
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const LibraryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const WorkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20 6h-2l-2-2H8L6 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
  </svg>
);

const SkillIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import { 
  featuredProjects, 
  recentProjects, 
  workExperience, 
  blogPosts, 
  testimonials, 
  awards,
  skills,
  mockCertificates,
  mockProjects 
} from '@/data/mockData';
import type { Project } from '@/data/mockData';

interface HomeProps {
  isLoading?: boolean;
}

const Home = ({ isLoading = false }: HomeProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();
  const analytics = useAnalytics();

  // Track page view
  useEffect(() => {
    if (!isLoading) {
      analytics.trackPageView('Home');
    }
  }, [isLoading, analytics]);

  const categories = [
    { name: 'Frontend', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Backend', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Full Stack', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Mobile', gradient: 'from-orange-500 to-red-500' },
    { name: 'AI/ML', gradient: 'from-indigo-500 to-purple-500' },
    { name: 'DevOps', gradient: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-black lg:flex">
      {/* Spotify Sidebar - Desktop Only, hide during loading */}
      {!isLoading && <SpotifySidebar />}
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Spotify Top Bar - Only show after loading */}
        {!isLoading && <SpotifyTopBar />}
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#000000] relative pb-20 lg:pb-0">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-green-400/5 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-600/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-300/10 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Featured Profile Image with Enhanced Effects */}
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex justify-center">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-green-400/10 to-green-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-2xl overflow-hidden shadow-2xl spotify-glass-enhanced">
                <img
                  src="/assets/Add_a_subheading__1_-removebg-preview-removebg-preview.png"
                  alt="Prachi Kotadia - Software Engineer"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700"></div>
              </div>
          </div>
          </div>
        </motion.div>

        {/* Recently Played Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Recently played
          </h2>
          <div className="spotify-card hover:spotify-glass-enhanced transition-all duration-300 cursor-pointer group relative overflow-hidden"
               onClick={() => {
                 analytics.trackNavClick('Lyrics', 'Home');
                 navigate('/lyrics');
               }}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center gap-4">
              {/* Album Art with Enhanced Effects */}
              <div className="relative w-16 h-16 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/assets/image copy 7.png"
                  alt="About Me"
                  className="relative w-full h-full object-cover rounded-lg shadow-lg"
                />
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Song Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-green-400 transition-colors duration-300">
                  About Me
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Prachi Kotadia
                </p>
              </div>
              
              {/* Action Buttons with Enhanced Effects */}
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-8 h-8 text-white hover:bg-green-500/20 hover:text-green-400 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Play className="w-5 h-5" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-8 h-8 text-gray-400 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
              
              {/* More Options */}
              <div className="flex-shrink-0">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full opacity-100 transition-all duration-200"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Browse All Section - First Priority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Browse all</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                analytics.trackButtonClick('Search', 'Home');
                navigate('/search');
              }}
              className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-gray-700/50 text-white hover:text-white transition-all duration-200"
            >
              <SearchIcon />
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { 
                name: 'Projects', 
                gradient: 'from-purple-500 to-pink-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/library',
                count: '25+ Projects',
                description: 'AI/ML, Full Stack, Mobile'
              },
              { 
                name: 'Education', 
                gradient: 'from-emerald-500 to-green-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/education',
                count: '2 Degrees',
                description: 'Masters & Bachelors'
              },
              { 
                name: 'Work Experience', 
                gradient: 'from-teal-500 to-cyan-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/experience',
                count: '5 Positions',
                description: 'Software Engineer'
              },
              { 
                name: 'Certificates', 
                gradient: 'from-yellow-500 to-orange-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/library?tab=certificates',
                count: '9 Certificates',
                description: 'Google, Meta, AWS'
              },
              { 
                name: 'Skills', 
                gradient: 'from-violet-500 to-purple-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/skills',
                count: '25+ Skills',
                description: 'Programming & Tools'
              },
              { 
                name: 'Courses', 
                gradient: 'from-emerald-500 to-teal-500',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=center',
                link: '/courses',
                count: '12 Courses',
                description: 'Academic Learning'
              },
              { 
                name: 'About Me', 
                gradient: 'from-pink-500 to-rose-500',
                image: '/assets/image copy 7.png',
                link: '/lyrics',
                count: 'Professional Bio',
                description: 'Get to know me'
              },
              { 
                name: 'Contact', 
                gradient: 'from-blue-500 to-cyan-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/profile',
                count: 'Get in Touch',
                description: 'Let\'s connect'
              }
            ].map((category, index) => (
            <motion.div
                key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className={`bg-gradient-to-br ${category.gradient} rounded-lg p-4 h-24 relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 group`}
                onClick={() => {
                  if (category.link) {
                    analytics.trackNavClick(category.name, 'Home');
                    navigate(category.link);
                  }
                }}
            >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{category.name}</h3>
                    <p className="text-white/80 text-xs mb-1">{category.count}</p>
                    <p className="text-white/60 text-xs">{category.description}</p>
                  </div>
                </div>
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/20 rounded-full group-hover:scale-110 transition-transform" />
                <div className="absolute -right-1 -top-1 w-8 h-8 bg-white/10 rounded-full group-hover:scale-110 transition-transform" />
                <div className="absolute -left-1 -bottom-1 w-6 h-6 bg-white/5 rounded-full group-hover:scale-110 transition-transform" />
            </motion.div>
          ))}
          </div>
        </motion.div>

        {/* Course Section - Like Spotify's Popular Artists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Course</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/courses')}
              className="text-gray-400 hover:text-white text-sm"
            >
              See all
            </Button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {[
              {
                name: 'Data Structures & Algorithms',
                image: '/assets/data-structures-algorithms.png',
                description: 'Mastered arrays, trees, graphs, and sorting/searching algorithms'
              },
              {
                name: 'Mobile Application Development',
                image: '/assets/mobile-app-development.png',
                description: 'Built intuitive, responsive, and cross-platform apps'
              },
              {
                name: 'Advanced Database Organization',
                image: '/assets/advanced-database.png',
                description: 'Focused on indexing strategies and query optimization'
              },
              {
                name: 'Software Project Management',
                image: '/assets/software-project-management.png',
                description: 'Studied Agile and Waterfall methodologies'
              },
              {
                name: 'Big Data Technology',
                image: '/assets/big-data-technology.png',
                description: 'Worked with distributed systems and big data frameworks'
              },
              {
                name: 'Computer Networks',
                image: '/assets/computer-networks.png',
                description: 'Explored OSI and TCP/IP models, data transmission'
              }
            ].map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => navigate('/courses')}
              >
                <div className="relative mb-3">
                  <div className="w-full aspect-square rounded-full overflow-hidden bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 truncate group-hover:text-green-400 transition-colors">
                    {course.name}
            </h3>
                  <p className="text-gray-400 text-xs line-clamp-2 hidden sm:block">
                    {course.description}
            </p>
            </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recently Played - Like Spotify's Recently Played */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
          
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex-shrink-0 w-32 bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>
            </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-gray-400 text-xs line-clamp-2">{item.artist}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section - Spotify "Made For You" Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Projects</h2>
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-white text-sm font-bold"
              onClick={() => navigate('/library?tab=projects')}
            >
              View all
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {mockProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex-shrink-0 w-32 bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-all duration-300 cursor-pointer group"
                onClick={() => {
                  analytics.trackProjectView(project.title, 'Featured Project');
                  navigate(`/project/${project.id}`);
                }}
              >
                <div className="relative mb-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                />
              </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
        {/* Certificates Section - Spotify "Recently Played" Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Certificates</h2>
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-white text-sm font-semibold hover:bg-white/10 px-3 py-2 rounded-full"
              onClick={() => navigate('/library?tab=certificates')}
            >
              Show all
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {mockCertificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex-shrink-0 w-44 h-64 bg-white/10 backdrop-blur-md rounded-2xl p-4 cursor-pointer hover:scale-105 transition-all duration-300 group relative overflow-hidden border border-white/20 hover:bg-white/20"
                onClick={() => navigate('/library?tab=certificates')}
              >
                {/* Glassmorphism Background Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/3 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-3">
                    <div className="w-full h-24 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden shadow-2xl border border-white/20">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover rounded-xl"
                />
              </div>
                    {/* Professional Award Icon */}
                    <div className="absolute top-1 left-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border border-yellow-300">
                      <svg className="w-4 h-4 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-3 h-3 text-white ml-0.5" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between h-20">
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">{cert.title}</h3>
                      <p className="text-white/90 text-xs mb-1">{cert.issuer}</p>
                      <p className="text-white/70 text-xs">{cert.date}</p>
                    </div>
                    
                    {/* Credentials Button - Fixed Position with Proper Spacing */}
                    <div className="mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full h-6 text-xs bg-green-500/20 border-green-400/30 text-green-300 hover:bg-green-500/30 hover:border-green-400/50 hover:text-green-200 transition-all duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cert.link, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        Credentials
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>






        {/* Skills Section - Magical Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mb-8 group relative overflow-hidden"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          {/* Magical Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
          
          {/* Floating Particles Effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-1000"></div>
            <div className="absolute bottom-6 left-1/4 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-800"></div>
            <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-900"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <motion.h2 
                className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-500"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(34, 197, 94, 0.5)"
                }}
              >
                Skills
              </motion.h2>
              <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-white text-sm font-semibold hover:bg-white/10 px-3 py-2 rounded-full group-hover:bg-green-500/20 group-hover:text-green-400 transition-all duration-300"
                onClick={() => navigate('/skills')}
              >
                Show all
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 group-hover:gap-3 transition-all duration-500">
              {[
                "Python", "JavaScript", "TypeScript", "Dart", "SQL",
                "React", "HTML5/CSS3", "JWT & OAuth2", "WebSockets", "REST API", "Responsive Design", "Animations & UX",
                "PostgreSQL", "MySQL", "CRUD Operations", "AWS", "Microservices",
                "Memory Management", "Debugging Tools",
                "CI/CD", "Postman", "Swagger/OpenAPI",
                "Error Handling"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1.4 + index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group-hover:scale-105 transition-all duration-300 cursor-pointer relative"
                  onClick={() => navigate('/skills')}
                  whileHover={{ 
                    scale: 1.15,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Magical Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  
                  <div className="relative px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:backdrop-blur-md">
                    <motion.span 
                      className="text-white text-xs font-medium hover:text-black transition-colors duration-300 relative z-10"
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
                      }}
                    >
                      {skill}
                    </motion.span>
                    
                    {/* Sparkle Effect */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

          </div>
        </div>
        
        {/* Spotify Player - Only show after loading */}
        {!isLoading && <SpotifyPlayer />}
      </div>
    </div>
  );
};

export default Home;