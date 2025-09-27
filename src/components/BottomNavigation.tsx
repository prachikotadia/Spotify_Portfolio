import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Spotify-style icons as SVG components
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

// Exact Spotify Your Library icon
const LibraryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <rect x="3" y="3" width="4" height="18" rx="1"/>
    <rect x="10" y="3" width="4" height="18" rx="1"/>
    <rect x="17" y="3" width="4" height="18" rx="1"/>
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

// Professional Work icon - briefcase design
const WorkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 14H4V8h16v10z"/>
    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);


// Exact Spotify Radio icon
const SkillIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <circle cx="12" cy="12" r="2"/>
    <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" opacity="0.3"/>
    <path d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" opacity="0.2"/>
  </svg>
);

const EducationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
  </svg>
);

const BottomNavigation = () => {
  const location = useLocation();

  const leftNavItems = [
    { name: 'Work', path: '/experience', icon: WorkIcon },
    { name: 'Project', path: '/library', icon: LibraryIcon },
  ];

  const rightNavItems = [
    { name: 'Skill', path: '/skills', icon: SkillIcon },
    { name: 'Profile', path: '/profile', icon: UserIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-40 safe-area-pb">
      {/* Mobile Layout - Spotify Style with Center Logo */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left Navigation */}
          <div className="flex items-center gap-6">
            {leftNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-2 py-2 rounded-lg transition-colors ${
                      isActive ? 'bg-white/10' : ''
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="text-xs">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Center Home Icon */}
          <Link to="/">
            <motion.div
              className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/' ? 'bg-white/10' : ''
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </motion.div>
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-6">
            {rightNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-2 py-2 rounded-lg transition-colors ${
                      isActive ? 'bg-white/10' : ''
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="text-xs">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Spotify Style with Center Logo */}
      <div className="hidden md:flex items-center justify-between px-6 py-3">
        {/* Left Navigation */}
        <div className="flex items-center gap-8">
          {leftNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path}>
                <motion.div
                  className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-white/10' : ''
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-7 h-7" />
                  <span className="text-xs">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Center Home Icon */}
        <Link to="/">
          <motion.div
            className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors ${
              location.pathname === '/' ? 'bg-white/10' : ''
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <HomeIcon className="w-7 h-7" />
            <span className="text-xs">Home</span>
          </motion.div>
        </Link>

        {/* Right Navigation */}
        <div className="flex items-center gap-8">
          {rightNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path}>
                <motion.div
                  className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-white/10' : ''
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-7 h-7" />
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