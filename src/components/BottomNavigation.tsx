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

// Spotify-style Your Library icon (three vertical bars)
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

// Spotify-style Browse icon (stacked albums)
const WorkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
    <path d="M2 4h20v2H2V4zm0 5h20v2H2V9zm0 5h20v2H2v-2z" opacity="0.3"/>
  </svg>
);

// Spotify-style Search icon (magnifying glass)
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

// Spotify-style Radio icon (radio waves)
const SkillIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <circle cx="12" cy="12" r="2"/>
    <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" opacity="0.3"/>
    <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 2c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z" opacity="0.3"/>
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

          {/* Center Spotify Logo */}
          <Link to="/">
            <motion.div
              className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/' ? 'bg-white/10' : ''
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-black" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
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

        {/* Center Spotify Logo */}
        <Link to="/">
          <motion.div
            className={`flex flex-col items-center gap-1 text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors ${
              location.pathname === '/' ? 'bg-white/10' : ''
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-black" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
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