import { useLocation, Link } from 'react-router-dom';
import { Home, Search, Library, User, Briefcase, FolderOpen, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Work', path: '/experience', icon: Briefcase },
    { name: 'Project', path: '/library', icon: FolderOpen },
    { name: 'Home', path: '/', icon: Home },
    { name: 'Search', path: '/search', icon: Search },
    { name: 'Skill', path: '/skills', icon: Code },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-40 safe-area-pb">
      {/* Mobile Layout - 5 Button Design */}
      <div className="block md:hidden">
        <div className="flex items-center justify-center px-2 py-3">
          <div className="flex items-center justify-between w-full max-w-md">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.name} to={item.path} className="flex-1">
                  <motion.div
                    className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors ${
                      isActive ? 'bg-white/10' : ''
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-xs">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Layout - 5 Button Design */}
      <div className="hidden md:flex items-center justify-center px-4 py-3">
        <div className="flex items-center justify-between w-full max-w-md">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path}>
                <motion.div
                  className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-white/10' : ''
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;