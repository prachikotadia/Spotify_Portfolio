import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Shuffle, Clock, Bell, Heart, Star, TrendingUp, Award, MessageSquare, Plus, MoreHorizontal, Briefcase, Code } from 'lucide-react';

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
import SpotifyLogo from '@/components/SpotifyLogo';
import { 
  featuredProjects, 
  recentProjects, 
  workExperience, 
  blogPosts, 
  testimonials, 
  awards,
  skills 
} from '@/data/mockData';
import type { Project } from '@/data/mockData';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const categories = [
    { name: 'Frontend', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Backend', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Full Stack', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Mobile', gradient: 'from-orange-500 to-red-500' },
    { name: 'AI/ML', gradient: 'from-indigo-500 to-purple-500' },
    { name: 'DevOps', gradient: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pb-20">
      {/* Spotify App Header */}
      <div className="sticky top-0 z-40 bg-[#121212]">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Left: Bell Icon */}
          <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/10">
            <Bell className="w-5 h-5 text-white" />
          </Button>
          
          {/* Center: Spotify Logo */}
          <SpotifyLogo size="md" />
          
          {/* Right: Menu */}
          <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/10">
            <MoreHorizontal className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4">
        {/* Featured Project Banner - Like Spotify's "Popular New Album" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-6">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            
            <div className="relative z-10 flex items-center justify-between">
              {/* Text Content */}
              <div className="flex-1 pr-4">
                <p className="text-green-100 text-sm font-medium mb-2">Popular New Project</p>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">Full Stack Developer</h1>
                <p className="text-green-100 text-sm">Prachi Kotadia</p>
              </div>
              
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/src/assets/2025-09-25_21-10-04.jpg"
                    alt="Prachi Kotadia"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-white">Good morning, Prachi</h2>
        </motion.div>

        {/* Categories - Like Spotify's category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { name: 'Newest', active: true },
              { name: 'Hot', icon: '🔥' },
              { name: 'Radio' },
              { name: 'Artists' },
              { name: 'Podcasts' }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
                  category.active 
                    ? 'bg-green-500 text-black font-semibold' 
                    : 'bg-[#181818] text-white hover:bg-[#282828]'
                }`}
              >
                {category.icon && <span>{category.icon}</span>}
                <span className="text-sm">{category.name}</span>
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
              { title: "AI Chat Application", artist: "React, OpenAI", image: "/src/assets/ai-chat-project.jpg" },
              { title: "E-commerce Platform", artist: "Next.js, Stripe", image: "/src/assets/ecommerce-project.jpg" },
              { title: "Weather Dashboard", artist: "Vue.js, APIs", image: "/src/assets/weather-dashboard-project.jpg" }
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

        {/* Playlists Section - Like Spotify's Playlists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Playlists</h2>
            <Button variant="ghost" className="text-gray-400 hover:text-white text-sm font-bold">
              See more
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { title: "Work Projects", image: "/src/assets/task-management-project.jpg" },
              { title: "Personal Projects", image: "/src/assets/fitness-tracker-project.jpg" },
              { title: "Open Source", image: "/src/assets/social-analytics-project.jpg" }
            ].map((playlist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex-shrink-0 w-32 bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={playlist.image}
                      alt={playlist.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{playlist.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section - Like Spotify's Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Certificates</h2>
            <Button variant="ghost" className="text-gray-400 hover:text-white text-sm font-bold">
              See all
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { 
                title: "AWS Certified Developer", 
                issuer: "Amazon Web Services",
                year: "2024",
                gradient: "from-orange-500 to-red-500"
              },
              { 
                title: "React Developer Certification", 
                issuer: "Meta",
                year: "2023",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                title: "Full Stack Web Development", 
                issuer: "freeCodeCamp",
                year: "2023",
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                title: "JavaScript Algorithms", 
                issuer: "freeCodeCamp",
                year: "2023",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex-shrink-0 w-40 bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-3">
                  <div className={`w-full aspect-square bg-gradient-to-br ${cert.gradient} rounded-lg flex items-center justify-center`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{cert.title}</h3>
                <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Browse All Section - Exact Spotify Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Browse all</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { 
                name: 'Podcasts', 
                gradient: 'from-red-500 to-red-700',
                image: '/src/assets/ai-chat-project.jpg'
              },
              { 
                name: 'New Releases', 
                gradient: 'from-pink-500 to-pink-700',
                image: '/src/assets/ecommerce-project.jpg'
              },
              { 
                name: 'Charts', 
                gradient: 'from-purple-500 to-purple-700',
                image: '/src/assets/weather-dashboard-project.jpg'
              },
              { 
                name: 'Live Events', 
                gradient: 'from-blue-500 to-purple-600',
                image: '/src/assets/fitness-tracker-project.jpg'
              },
              { 
                name: 'Made for You', 
                gradient: 'from-blue-600 to-blue-800',
                image: '/src/assets/task-management-project.jpg'
              },
              { 
                name: 'At Home', 
                gradient: 'from-green-600 to-blue-600',
                image: '/src/assets/social-analytics-project.jpg'
              },
              { 
                name: 'Only You', 
                gradient: 'from-purple-500 to-yellow-500',
                image: '/src/assets/ai-chat-project.jpg'
              },
              { 
                name: 'Bollywood', 
                gradient: 'from-red-600 to-red-800',
                image: '/src/assets/ecommerce-project.jpg'
              },
              { 
                name: 'Punjabi', 
                gradient: 'from-pink-600 to-purple-600',
                image: '/src/assets/weather-dashboard-project.jpg'
              },
              { 
                name: 'Tamil', 
                gradient: 'from-blue-600 to-green-600',
                image: '/src/assets/fitness-tracker-project.jpg'
              }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + index * 0.05 }}
                className={`bg-gradient-to-br ${category.gradient} rounded-lg p-4 h-24 relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 group`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <h3 className="text-white font-bold text-sm">{category.name}</h3>
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





      </div>

    </div>
  );
};

export default Home;