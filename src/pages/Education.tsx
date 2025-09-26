import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ExternalLink, Building, Clock, Play, Heart, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SpotifyLogo from '@/components/SpotifyLogo';

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Spotify App Header */}
      <div className="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Left: Back Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-8 h-8 hover:bg-white/10 rounded-full"
            onClick={() => navigate(-1)}
          >
            <ChevronDown className="w-5 h-5 text-white" />
          </Button>
          
          {/* Center: Title */}
          <div className="flex items-center justify-center gap-2">
            <SpotifyLogo size="sm" />
            <h1 className="text-lg font-bold text-white">Education</h1>
          </div>
          
          {/* Right: Menu */}
          <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/10 rounded-full">
            <MoreHorizontal className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>

      {/* Spotify-style Content */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 max-w-7xl mx-auto">
        {/* Recently Played Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Recently played</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { 
                title: "Master's in Computer Science", 
                subtitle: "Illinois Institute of Technology",
                image: "/assets/image copy.png",
                duration: "2 years"
              },
              { 
                title: "Bachelor of Technology", 
                subtitle: "Electronics & Communication",
                image: "/assets/image.png",
                duration: "4 years"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="flex-shrink-0 w-36 bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(index === 0 ? '/education/masters' : '/education/bachelors')}
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
                <p className="text-gray-400 text-xs line-clamp-2">{item.subtitle}</p>
                <p className="text-gray-500 text-xs mt-1">{item.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education List - Spotify Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
          <div className="space-y-2">
            {/* Master's Degree */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer group"
              onClick={() => navigate('/education/masters')}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="/assets/image copy.png"
                  alt="Master's Degree"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate text-white">Master's in Computer Science</h3>
                <p className="text-sm text-gray-400 truncate">
                  Illinois Institute of Technology • Chicago, IL
                </p>
                <p className="text-xs text-gray-500">August 2023 - May 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                >
                  <Play className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Bachelor's Degree */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer group"
              onClick={() => navigate('/education/bachelors')}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="/assets/image.png"
                  alt="Bachelor's Degree"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate text-white">Bachelor of Technology</h3>
                <p className="text-sm text-gray-400 truncate">
                  Electronics & Communication • Charotar University
                </p>
                <p className="text-xs text-gray-500">August 2019 - May 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                >
                  <Play className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Made for you - Spotify Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Made for you</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { 
                title: "Academic Excellence", 
                subtitle: "Consistent high performance",
                image: "/assets/image copy 2.png",
                type: "Achievement"
              },
              { 
                title: "Research Focus", 
                subtitle: "Cutting-edge technology",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop&crop=center",
                type: "Research"
              },
              { 
                title: "Continuous Learning", 
                subtitle: "Latest technologies",
                image: "/assets/image copy 3.png",
                type: "Growth"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex-shrink-0 w-36 bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-all duration-300 cursor-pointer group"
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
                <p className="text-gray-400 text-xs line-clamp-2">{item.subtitle}</p>
                <p className="text-gray-500 text-xs mt-1">{item.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Education;
