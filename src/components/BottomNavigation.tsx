import { useLocation, Link } from 'react-router-dom';
import { Home, Search, Library, User } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Search', path: '/search', icon: Search },
    { name: 'Library', path: '/library', icon: Library },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-40 safe-area-pb">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path} className="flex-1">
                <motion.div
                  className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg transition-colors ${
                    isActive 
                      ? 'text-green-400' 
                      : 'text-gray-400'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-green-400' : 'text-gray-400'}`} />
                  <span className="text-xs font-medium text-center leading-tight">
                    {item.name}
                  </span>
                  {isActive && (
                    <div className="w-1 h-1 bg-green-400 rounded-full mt-1"></div>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-4 py-3">
        {/* Spotify Logo */}
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-black"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
          <span className="text-white font-bold text-lg">Portfolio</span>
        </motion.div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path}>
                <motion.div
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* User Profile */}
        <motion.div 
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BottomNavigation;