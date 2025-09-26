import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ExternalLink, Building, Clock, Play, Heart, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
          <div className="text-center">
            <h1 className="text-lg font-bold text-white">Education</h1>
          </div>
          
          {/* Right: Menu */}
          <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/10 rounded-full">
            <MoreHorizontal className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>

      {/* Header Section */}
      <div className="pt-8 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block border-2 border-green-500 rounded-lg px-6 py-2 mb-4">
            <h1 className="text-3xl font-bold text-white">Education</h1>
          </div>
          <p className="text-gray-400 text-lg">
            My academic journey and qualifications.
          </p>
        </motion.div>
      </div>

      <div className="px-6">
        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Master's Degree Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-6 group cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              {/* Header with Play Button */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-black" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Master's in Computer Science</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </Button>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-white">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">Illinois Institute of Technology</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Chicago, IL, USA</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">August 2023 - May 2025</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed mb-6">
                Coursework includes Mobile App Development, Advanced Databases, Software Engineering, and Science of Programming. Focused on full-stack systems and cloud-native solutions.
              </p>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  Mobile Development
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  Databases
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  Software Engineering
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  Cloud Computing
                </Badge>
              </div>

              {/* Button */}
              <Button 
                variant="outline" 
                className="w-full border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://www.iit.edu/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit University Website
              </Button>
            </div>
          </motion.div>

          {/* Bachelor's Degree Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-green-800 p-6 group cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              {/* Header with Play Button */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-black" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Bachelor of Technology in Electronics and Communication</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </Button>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-white">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">Charotar University of Science and Technology</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">August 2019 - May 2023</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed mb-6">
                Gained comprehensive knowledge in electronic circuit design, embedded systems, signal processing, and communication technologies. Developed strong analytical and problem-solving skills through hands-on lab work, technical projects, and interdisciplinary coursework.
              </p>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  Circuit Design
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  Embedded Systems
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  Signal Processing
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  Communication Tech
                </Badge>
              </div>

              {/* Button */}
              <Button 
                variant="outline" 
                className="w-full border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://www.charusat.ac.in/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit University Website
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Education Timeline - Spotify Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Academic Timeline</h2>
          <div className="space-y-4">
            {/* Timeline Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 p-4 bg-[#181818] rounded-lg hover:bg-[#282828] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">Master's in Computer Science</h3>
                <p className="text-gray-400 text-sm">Illinois Institute of Technology • 2023-2025</p>
                <p className="text-gray-300 text-xs mt-1">Mobile Development, Databases, Software Engineering</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-4 h-4 text-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </Button>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 p-4 bg-[#181818] rounded-lg hover:bg-[#282828] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">Bachelor of Technology</h3>
                <p className="text-gray-400 text-sm">Charotar University • 2019-2023</p>
                <p className="text-gray-300 text-xs mt-1">Electronics & Communication Engineering</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-4 h-4 text-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Achievements - Spotify Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-[#181818] border-white/10 hover:bg-[#282828] transition-all duration-300 group cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-5 h-5 text-green-500" />
                  <h3 className="text-white font-semibold">Academic Excellence</h3>
                </div>
                <p className="text-gray-400 text-sm">Consistent high performance across all coursework and projects</p>
              </CardContent>
            </Card>

            <Card className="bg-[#181818] border-white/10 hover:bg-[#282828] transition-all duration-300 group cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <h3 className="text-white font-semibold">Research Focus</h3>
                </div>
                <p className="text-gray-400 text-sm">Active involvement in cutting-edge technology research</p>
              </CardContent>
            </Card>

            <Card className="bg-[#181818] border-white/10 hover:bg-[#282828] transition-all duration-300 group cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-purple-500" />
                  <h3 className="text-white font-semibold">Continuous Learning</h3>
                </div>
                <p className="text-gray-400 text-sm">Dedicated to staying current with latest technologies</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Education;
