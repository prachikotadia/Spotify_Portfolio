import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Award, Code, ArrowLeft, Play, Pause, Heart, MoreHorizontal, Clock, Users, Star, TrendingUp, Briefcase, GraduationCap, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { workExperience } from '@/data/mockData';
import type { WorkExperience } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';
import SpotifyLogo from '@/components/SpotifyLogo';
import { useState } from 'react';

const Experience = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredExperience = workExperience.filter(job => {
    const matchesSearch = job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || 
                         (filter === 'current' && job.duration.includes('Present')) ||
                         (filter === 'past' && !job.duration.includes('Present'));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#000000] pb-32">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-white/60 text-sm">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className="w-6 h-6 text-white/60 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <span>9:41</span>
        </div>
        <SpotifyLogo size="sm" />
        <div className="w-6 h-6"></div>
      </div>

      {/* Hero Section */}
      <div className="relative px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-400/30 rounded-full blur-lg animate-bounce"></div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-green-400 font-medium">Work Experience</p>
              <h1 className="text-3xl font-bold text-white">Professional Journey</h1>
              <p className="text-white/60 text-sm">Career milestones and achievements</p>
            </div>
          </div>

          {/* Play Controls */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Search and Filter */}
      <div className="px-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Input
              placeholder="Search work experience..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-green-500"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          {['all', 'current', 'past'].map((filterType) => (
            <Button
              key={filterType}
              variant={filter === filterType ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter(filterType)}
              className={filter === filterType ? "bg-green-500 text-black" : "text-white/60 hover:text-white hover:bg-white/10"}
            >
              {filterType === 'all' ? 'All' : filterType === 'current' ? 'Current' : 'Past'}
            </Button>
          ))}
        </div>
      </div>

      {/* Experience Tracks */}
      <div className="px-6">
        <div className="space-y-2">
          {filteredExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 p-3 hover:bg-white/10 rounded-lg group cursor-pointer"
              onClick={() => navigate(`/experience/${job.id}`)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-sm truncate group-hover:text-green-400 transition-colors">
                  {job.position}
                </h3>
                <p className="text-white/60 text-xs truncate">{job.company}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-white/40 text-xs">{job.duration}</span>
                  <span className="text-white/40 text-xs">•</span>
                  <span className="text-white/40 text-xs">{job.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" className="w-8 h-8 text-white/60 hover:text-white hover:bg-white/10">
                  <Play className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 text-white/60 hover:text-white hover:bg-white/10">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 text-white/60 hover:text-white hover:bg-white/10">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Experience */}
      <div className="px-6 mt-8">
        <h2 className="text-xl font-bold text-white mb-4">Featured Experience</h2>
        <div className="grid grid-cols-2 gap-4">
          {workExperience.slice(0, 4).map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => navigate(`/experience/${job.id}`)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1 truncate">{job.position}</h3>
              <p className="text-white/60 text-xs truncate">{job.company}</p>
              <div className="flex items-center gap-1 mt-2">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-white/40 text-xs">Featured</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-medium text-sm truncate">
              {workExperience[currentTrack]?.position || 'Select Experience'}
            </h4>
            <p className="text-white/60 text-xs truncate">
              {workExperience[currentTrack]?.company || 'Professional Journey'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="w-8 h-8 text-white/60 hover:text-white">
              <Play className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-white/60 hover:text-white">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
