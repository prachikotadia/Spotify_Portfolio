import { useLocation, Link } from 'react-router-dom';
import { Home, Search, Library, Plus, User } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Search', path: '/search', icon: Search },
    { name: 'Your Library', path: '/library', icon: Library },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="bottom-nav">
      {/* Spotify Logo */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-primary"
          fill="currentColor"
        >
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </div>

      {/* Navigation Items */}
      <div className="flex items-center justify-center flex-1 gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.name} to={item.path}>
              <motion.div
                className={`nav-item ${isActive ? 'active' : 'text-muted-foreground'}`}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;