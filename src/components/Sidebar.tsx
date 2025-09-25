import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  FolderOpen, 
  BookOpen, 
  Award, 
  Mail, 
  Menu,
  X,
  Search,
  Briefcase,
  GraduationCap,
  Code,
  MessageSquare,
  Star,
  Heart,
  Info
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Me', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Work Experience', href: '/experience', icon: Briefcase },
  { name: 'Education', href: '/education', icon: GraduationCap },
  { name: 'Skills', href: '/skills', icon: Code },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Testimonials', href: '/testimonials', icon: MessageSquare },
  { name: 'Awards', href: '/awards', icon: Star },
  { name: 'Extras', href: '/extras', icon: Heart },
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Contact', href: '/contact', icon: Mail },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    closed: {
      x: "-100%",
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        className="fixed left-0 top-0 h-full w-64 bg-black z-50 lg:relative lg:translate-x-0 lg:z-auto"
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-white">Portfolio</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`sidebar-item ${isActive ? 'active' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Made with ❤️ using React
            </p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;