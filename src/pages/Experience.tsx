import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Award, Code, ArrowLeft, Clock, Users, Star, TrendingUp, Briefcase, GraduationCap, Zap } from 'lucide-react';
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

      {/* Professional Hero Section */}
      <div className="relative px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-green-400/15 rounded-full blur-lg"></div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl mx-auto mb-6">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                A comprehensive overview of my career journey, showcasing expertise, achievements, and professional growth across various roles and industries.
              </p>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{workExperience.length}</div>
                <div className="text-sm text-white/60">Positions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-white/60">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">3</div>
                <div className="text-sm text-white/60">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-white/60">Technologies</div>
              </div>
            </div>
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

      {/* Professional Experience Cards */}
      <div className="px-6">
        <div className="space-y-6">
          {filteredExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(`/experience/${job.id}`)}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg group-hover:text-green-400 transition-colors mb-1">
                        {job.position}
                      </h3>
                      <p className="text-green-400 font-semibold text-base mb-2">{job.company}</p>
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                        {job.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Key Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {job.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                        {tech}
                      </span>
                    ))}
                    {job.techStack.length > 4 && (
                      <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                        +{job.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Professional Highlights */}
      <div className="px-6 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Professional Highlights</h2>
          <p className="text-white/60">Key achievements and career milestones</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workExperience.slice(0, 3).map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-white/12 hover:border-white/20 transition-all duration-300 group"
              onClick={() => navigate(`/experience/${job.id}`)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base group-hover:text-green-400 transition-colors mb-1">
                    {job.position}
                  </h3>
                  <p className="text-green-400 font-medium text-sm">{job.company}</p>
                </div>
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
                {job.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/60 text-xs">Featured</span>
                </div>
                <div className="text-white/40 text-xs">{job.duration}</div>
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
        </div>
      </div>
    </div>
  );
};

export default Experience;
