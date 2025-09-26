import { motion } from 'framer-motion';
import { ArrowLeft, MoreVertical, Camera, Users, Music, ListMusic, Eye, Code, Github, Linkedin, Mail, Globe } from 'lucide-react';
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
                src="/src/assets/Add_a_subheading__1_-removebg-preview-removebg-preview.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
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
            Premium Developer
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
          
          {/* Social Cards */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div 
              className="aspect-square rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <Github className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div 
              className="aspect-square rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Linkedin className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div 
              className="aspect-square rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div 
              className="aspect-square rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <ListMusic className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium">Added new project</div>
                <div className="text-gray-400 text-sm">AI Chat Application</div>
              </div>
              <div className="text-gray-400 text-sm">2h ago</div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium">Viewed certificate</div>
                <div className="text-gray-400 text-sm">AWS Certified Developer</div>
              </div>
              <div className="text-gray-400 text-sm">1d ago</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <Users className="w-4 h-4 mr-2" />
            Share Profile
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Camera className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;