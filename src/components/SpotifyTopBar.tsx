import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bell, User, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SpotifyTopBar = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 bg-black/70 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 bg-black/70 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white"
            onClick={() => window.history.forward()}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-full bg-white text-black placeholder-gray-500 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
          >
            <Settings className="w-5 h-5" />
          </Button>
          
          {/* User Profile */}
          <Button
            variant="ghost"
            onClick={() => navigate('/profile')}
            className="flex items-center gap-2 px-3 py-2 bg-black/70 hover:bg-gray-800 rounded-full text-white"
          >
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">PK</span>
            </div>
            <span className="text-sm font-medium">Prachi Kotadia</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// Search Icon Component
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

// ChevronDown Icon Component
const ChevronDown = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M7 10l5 5 5-5z"/>
  </svg>
);

export default SpotifyTopBar;
