import { motion } from 'framer-motion';
import { ChevronLeft, MoreVertical, Camera, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  const stats = [
    { label: 'Followed Singer', value: '25' },
    { label: 'Followed Albums', value: '35' },
    { label: 'Playlist Songs', value: '10' },
  ];

  const myArtists = [
    { name: 'Artist 1', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=face' },
    { name: 'Artist 2', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
    { name: 'Artist 3', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
    { name: 'Artist 4', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face' },
    { name: 'Artist 5', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Mobile Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-white text-sm">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-6 h-3 border border-white rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <Button variant="ghost" size="icon" className="text-white">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-lg font-bold text-white">Profile</h1>
        <Button variant="ghost" size="icon" className="text-white">
          <MoreVertical className="w-6 h-6" />
        </Button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center px-4 py-6">
        {/* Profile Image */}
        <div className="relative mb-4">
          <Avatar className="w-32 h-32 border-4 border-gray-600">
            <AvatarImage src="/src/assets/Add_a_subheading__1_-removebg-preview-removebg-preview.png" alt="Prachi Kotadia" />
            <AvatarFallback className="text-2xl bg-orange-500 text-white">
              PK
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Camera className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Name and Status */}
        <h2 className="text-2xl font-bold text-white mb-2">Prachi Kotadia</h2>
        <p className="text-green-500 font-medium mb-8">Premium User</p>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* My Artist Section */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">My Artist</h3>
            <Button variant="ghost" className="text-green-500 text-sm">
              View All
            </Button>
          </div>
          
          {/* Artist Carousel */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {myArtists.map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;