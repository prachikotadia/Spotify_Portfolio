import { motion, AnimatePresence } from 'framer-motion';
import { Home, Search, Library, Plus, Heart, Download, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SpotifyLogo from './SpotifyLogo';

const SpotifySidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showFavoritesPopup, setShowFavoritesPopup] = useState(false);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);

  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'search', label: 'Search', icon: Search, path: '/search' },
    { id: 'library', label: 'Your Library', icon: Library, path: '/library' },
  ];

  const playlistItems = [
    { 
      id: 'created', 
      label: 'Created Playlist', 
      icon: Plus,
      onClick: () => setShowCreatePopup(true)
    },
    { 
      id: 'liked', 
      label: 'Certificates', 
      icon: Heart,
      onClick: () => setShowFavoritesPopup(true)
    },
    { 
      id: 'downloaded', 
      label: 'Resume PDF', 
      icon: Download,
      onClick: () => setShowDownloadPopup(true)
    },
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
              onClick={item.onClick}
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

      {/* Popups */}
      <AnimatePresence>
        {/* Create Playlist Popup */}
        {showCreatePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowCreatePopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 max-w-xs mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-sm">Create Playlist</h3>
                <button
                  onClick={() => setShowCreatePopup(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-300 text-xs">
                Only admin can add new playlists to the library.
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Certificates Popup */}
        {showFavoritesPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowFavoritesPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 max-w-xs mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-sm">Certificates</h3>
                <button
                  onClick={() => setShowFavoritesPopup(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-300 text-xs mb-3">
                View all your professional certificates and achievements.
              </p>
              <button
                onClick={() => {
                  setShowFavoritesPopup(false);
                  navigate('/library?tab=certificates');
                }}
                className="w-full bg-green-500/80 backdrop-blur-sm text-black font-semibold py-2 px-3 rounded-full hover:bg-green-500 transition-colors text-xs"
              >
                View Certificates
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Resume PDF Popup */}
        {showDownloadPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowDownloadPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 max-w-xs mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-sm">Resume PDF</h3>
                <button
                  onClick={() => setShowDownloadPopup(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-300 text-xs mb-3">
                Download Prachi Kotadia's latest resume in PDF format.
              </p>
              <button
                onClick={() => {
                  setShowDownloadPopup(false);
                  window.open('https://prachikotadia.netlify.app/assets/Prachi_Kotadia_Resume_2025.pdf', '_blank');
                }}
                className="w-full bg-green-500/80 backdrop-blur-sm text-black font-semibold py-2 px-3 rounded-full hover:bg-green-500 transition-colors text-xs"
              >
                Download Resume
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpotifySidebar;
