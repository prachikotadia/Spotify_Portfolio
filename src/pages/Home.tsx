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
    <div className="min-h-screen bg-black pb-20">
      {/* Fixed Search Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="fixed top-4 right-4 z-50"
      >
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 bg-black/80 backdrop-blur-xl border border-white/20 hover:bg-white/20 rounded-full"
          onClick={() => navigate('/search')}
        >
          <SearchIcon />
        </Button>
      </motion.div>

      {/* Spotify-style Header */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <SpotifyLogo size="lg" />
            <span className="text-white font-bold text-xl">Good afternoon</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/20">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/20">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 max-w-6xl mx-auto">
        {/* Made for You - Spotify Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Made for Prachi</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{project.title}</h3>
                <p className="text-gray-400 text-xs line-clamp-2">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recently Played */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recently played</h2>
            <Button variant="ghost" className="text-gray-400 hover:text-white text-sm font-bold">
              Show all
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {workExperience.slice(0, 6).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{exp.position}</h3>
                <p className="text-gray-400 text-xs line-clamp-2">{exp.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Jump back in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Jump back in</h2>
            <Button variant="ghost" className="text-gray-400 hover:text-white text-sm font-bold">
              Show all
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {recentProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{project.title}</h3>
                <p className="text-gray-400 text-xs line-clamp-2">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Your top mixes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Your top mixes</h2>
            <Button variant="ghost" className="text-gray-400 hover:text-white text-sm font-bold">
              Show all
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{testimonial.name}</h3>
                <p className="text-gray-400 text-xs line-clamp-2">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>





      </div>

    </div>
  );
};

export default Home;