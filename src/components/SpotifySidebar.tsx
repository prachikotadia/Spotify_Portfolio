import { motion } from 'framer-motion';
import { Home, Search, Library, Plus, Heart, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import SpotifyLogo from './SpotifyLogo';

const SpotifySidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'search', label: 'Search', icon: Search, path: '/search' },
    { id: 'library', label: 'Your Library', icon: Library, path: '/library' },
  ];

  const playlistItems = [
    { id: 'created', label: 'Created Playlist', icon: Plus },
    { id: 'liked', label: 'Liked Songs', icon: Heart },
    { id: 'downloaded', label: 'Downloaded', icon: Download },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="hidden lg:flex flex-col w-64 h-screen bg-black border-r border-gray-800"
    >
      {/* Logo */}
      <div className="p-6">
        <SpotifyLogo size="lg" />
      </div>

      {/* Main Navigation */}
      <nav className="px-3 mb-6">
        {mainNavItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-4 px-3 py-2 rounded-md text-left transition-colors mb-1 ${
              isActive(item.path)
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <item.icon className="w-6 h-6" />
            <span className="font-medium">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Playlist Section */}
      <div className="px-3 flex-1">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
            <Library className="w-5 h-5" />
            <span className="text-sm font-medium">Your Library</span>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Playlist Items */}
        <div className="space-y-1">
          {playlistItems.map((item) => (
            <motion.button
              key={item.id}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Custom Playlists */}
        <div className="mt-6 space-y-1">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Playlists</div>
          {['Projects', 'Certificates', 'Skills', 'Experience', 'Education'].map((playlist) => (
            <motion.button
              key={playlist}
              className="w-full text-left px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm">{playlist}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* User Section */}
      <div className="p-3 border-t border-gray-800">
        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">PK</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-sm font-medium truncate">Prachi Kotadia</div>
            <div className="text-gray-400 text-xs">Software Engineer</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpotifySidebar;
