import { motion } from 'framer-motion';
import { ArrowLeft, MoreVertical, Camera, Users, Music, ListMusic, Eye, Code, Github, Linkedin, Mail, Globe, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SpotifyLogo from '@/components/SpotifyLogo';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Status Bar */}
      <div className="flex items-center px-4 py-2 text-white text-sm">
        <button 
          onClick={() => navigate('/')}
          className="hover:bg-white/10 rounded-full p-1 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <SpotifyLogo size="sm" />
          <h1 className="text-xl font-bold text-white">Profile</h1>
        </div>
        <MoreVertical className="w-5 h-5 text-white" />
      </div>

      {/* Profile Section - Responsive Layout */}
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-12 items-start">
            {/* Left Column - Profile Info */}
            <div className="space-y-8">
              {/* Profile Picture & Info */}
              <div className="flex items-center gap-6">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img 
                    src="/assets/image copy 6.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    style={{
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                      WebkitTouchCallout: 'none',
                      KhtmlUserSelect: 'none'
                    } as React.CSSProperties}
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-3">Prachi Kotadia</h2>
                  <Badge className="bg-green-500 text-white hover:bg-green-600 text-base px-4 py-2">
                    Creative Technologist
                  </Badge>
                  <div className="flex items-center gap-2 text-gray-400 mt-3">
                    <MapPin className="w-4 h-4" />
                    <span>Chicago, USA</span>
                  </div>
                </div>
              </div>

              {/* Statistics - Desktop Grid */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-500 mb-2">25</div>
                  <div className="text-sm text-white">Projects</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-500 mb-2">9</div>
                  <div className="text-sm text-white">Certificates</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-500 mb-2">34</div>
                  <div className="text-sm text-white">Repositories</div>
                </div>
              </div>

              {/* Social Links - Desktop */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com/prachikotadia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer bg-white/5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/prachi-kotadia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer bg-white/5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a 
                    href="mailto:iprachikotadia@gmail.com" 
                    className="p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer bg-white/5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a 
                    href="https://prachikotadia.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer bg-white/5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Globe className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Right Column - Resume & Fun Facts */}
            <div className="space-y-8">
              {/* Resume Download */}
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Resume</h3>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full w-full"
                  onClick={() => {
                    window.open('https://prachikotadia.netlify.app/assets/Prachi_Kotadia_Resume_2025.pdf', '_blank');
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Fun Facts */}
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-300 italic">
                    "Software Engineer by day, Spotify playlist curator by night"
                  </p>
                  <p className="text-sm text-gray-300 italic">
                    "Debugging code while jamming to the perfect algorithm playlist"
                  </p>
                  <p className="text-sm text-gray-300 italic">
                    "Building the future, one commit at a time"
                  </p>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Top Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Python', 'JavaScript', 'C++', 'AWS', 'Docker'].map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/image copy 6.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  style={{
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    KhtmlUserSelect: 'none'
                  } as React.CSSProperties}
                />
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Prachi Kotadia</h2>
            <Badge className="bg-green-500 text-white hover:bg-green-600">
              Creative Technologist
            </Badge>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">25</div>
              <div className="text-sm text-white w-full text-center">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">9</div>
              <div className="text-sm text-white w-full text-center">Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">34</div>
              <div className="text-sm text-white w-full text-center">Repositories</div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="mb-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">Social</h3>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 justify-center">
              <motion.a 
                href="https://github.com/prachikotadia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/prachi-kotadia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a 
                href="mailto:iprachikotadia@gmail.com" 
                className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a 
                href="https://prachikotadia.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Download Resume */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Resume</h3>
            <div className="flex justify-center">
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full"
                onClick={() => {
                  window.open('https://prachikotadia.netlify.app/assets/Prachi_Kotadia_Resume_2025.pdf', '_blank');
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Chicago, USA</span>
            </div>
          </div>

          {/* Fun Spotify-style Sentences */}
          <div className="space-y-2 text-center">
            <p className="text-sm text-gray-400 italic">
              "Software Engineer by day, Spotify playlist curator by night"
            </p>
            <p className="text-sm text-gray-400 italic">
              "Debugging code while jamming to the perfect algorithm playlist"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;