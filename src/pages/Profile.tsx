import { motion } from 'framer-motion';
import { ArrowLeft, MoreVertical, Camera, Users, Music, ListMusic, Eye, Code, Github, Linkedin, Mail, Globe, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SpotifyLogo from '@/components/SpotifyLogo';

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-white text-sm">
        <div className="flex items-center gap-2">
          <span>9:41</span>
          <ArrowLeft className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
        </div>
        <MoreVertical className="w-4 h-4" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <SpotifyLogo size="sm" />
          <h1 className="text-xl font-bold text-white">Profile</h1>
        </div>
        <MoreVertical className="w-5 h-5 text-white" />
      </div>

      {/* Profile Section */}
      <div className="px-4 py-6">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center overflow-hidden">
              <img 
                src="/src/assets/image copy 6.png" 
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
            <Button 
              size="icon" 
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full"
            >
              <Camera className="w-4 h-4 text-white" />
            </Button>
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
            <div className="text-sm text-white">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500 mb-1">9</div>
            <div className="text-sm text-white">Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500 mb-1">34</div>
            <div className="text-sm text-white">Repositories</div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Social</h3>
            <Button variant="ghost" className="text-green-500 hover:text-green-400 p-0">
              View All
            </Button>
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
  );
};

export default Profile;