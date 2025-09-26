import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Code, Star, TrendingUp, Zap, ChevronRight, ChevronLeft, Globe, Server, Database, Smartphone, Cpu, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { skills } from '@/data/mockData';
import type { Skill } from '@/data/mockData';
import { useState, useRef, useEffect } from 'react';

// Helper functions
const getLevelColor = (level: number) => {
  if (level >= 5) return 'text-green-500';
  if (level >= 4) return 'text-green-400';
  if (level >= 3) return 'text-green-300';
  return 'text-gray-500';
};

const getLevelText = (level: number) => {
  if (level >= 5) return 'Expert';
  if (level >= 4) return 'Advanced';
  if (level >= 3) return 'Intermediate';
  return 'Beginner';
};

// Get fixed images for skill categories
const getCategoryImage = (categoryName: string) => {
  const categoryImages = {
    'Programming Languages': '/src/assets/image copy 4.png',
    'Web Development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop&crop=center',
    'Databases & Cloud': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=600&fit=crop&crop=center',
    'Embedded & Systems': '/src/assets/image copy 5.png',
    'Mobile & AI/ML': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=600&fit=crop&crop=center',
    'DevOps & Tools': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=center'
  };
  
  return categoryImages[categoryName as keyof typeof categoryImages] || categoryImages['Programming Languages'];
};

// Category Card Component (Main Flashcard)
const CategoryCard = ({ category, index, isActive, isAdjacent, onSelect, onSwipeLeft, onSwipeRight }: { 
  category: any; 
  index: number; 
  isActive: boolean; 
  isAdjacent?: boolean;
  onSelect: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}) => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);
  const opacity = useTransform(x, [-200, 0, 200], [0.4, 1, 0.4]);
  const rotateY = useTransform(x, [-200, 0, 200], [15, 0, -15]);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 20; // Even lower threshold for more responsive swiping
    const velocity = info.velocity.x;
    
    // Check both offset and velocity for more responsive swiping
    if (info.offset.x > threshold || velocity > 300) {
      // Swiped right - go to previous
      onSwipeRight();
    } else if (info.offset.x < -threshold || velocity < -300) {
      // Swiped left - go to next
      onSwipeLeft();
    }
    // Reset position with smooth animation
    x.set(0);
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -60, right: 60 }}
      dragElastic={0.4}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      style={{ x, scale, opacity, rotateY }}
      className={`relative cursor-grab active:cursor-grabbing ${isActive ? 'z-20' : 'z-10'} flex-shrink-0 touch-pan-y`}
      onClick={onSelect}
      whileDrag={{ scale: 1.05 }}
    >
      <motion.div
        className={`relative ${isActive ? 'w-56 h-80 sm:w-64 sm:h-96' : isAdjacent ? 'w-40 h-60 sm:w-48 sm:h-72' : 'w-32 h-48 sm:w-40 sm:h-60'} rounded-2xl overflow-hidden shadow-2xl border-2 ${isActive ? 'border-green-500 shadow-green-500/50' : 'border-gray-600'} transition-all duration-500 hover:opacity-90`}
        whileHover={{ scale: isActive ? 1.02 : 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{ transformStyle: "preserve-3d" }}
        animate={isActive ? {
          boxShadow: "0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)"
        } : {}}
      >
        {/* Category poster image with overlay */}
        <div className="w-full h-full relative">
          <img
            src={getCategoryImage(category.name)}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        {/* Category title at bottom */}
        <div className={`absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 ${isActive ? 'bottom-4 sm:bottom-6' : ''}`}>
          <h3 className={`text-white font-bold ${isActive ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'} mb-2`}>{category.name}</h3>
          {/* Skills list */}
          <div className="flex flex-wrap gap-1">
            {category.skills.slice(0, isActive ? 4 : 2).map((skill, index) => (
              <span 
                key={skill}
                className={`text-white bg-black/50 backdrop-blur-sm rounded px-2 py-1 ${isActive ? 'text-xs sm:text-sm' : 'text-xs'} font-medium`}
              >
                {skill}
              </span>
            ))}
            {category.skills.length > (isActive ? 4 : 2) && (
              <span className={`text-white bg-black/50 backdrop-blur-sm rounded px-2 py-1 ${isActive ? 'text-xs sm:text-sm' : 'text-xs'} font-medium`}>
                +{category.skills.length - (isActive ? 4 : 2)}
              </span>
            )}
          </div>
        </div>

        {/* Media Player Control Bar */}
        <div className={`absolute bottom-0 left-0 right-0 ${isActive ? 'h-16' : 'h-12'} bg-gray-800/90 backdrop-blur-sm rounded-b-2xl flex flex-col justify-center px-3`}>
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-600 rounded-full mb-2 relative">
            <div className="h-full bg-white rounded-full" style={{ width: '33%' }}></div>
            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
          </div>
          
          {/* Control Icons */}
          <div className="flex items-center justify-between">
            {/* Shuffle Icon */}
            <button className="text-white hover:text-green-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
              </svg>
            </button>
            
            {/* Previous Icon */}
            <button className="text-white hover:text-green-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            
            {/* Play/Pause Icon */}
            <button className="text-white hover:text-green-400 transition-colors">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </button>
            
            {/* Next Icon */}
            <button className="text-white hover:text-green-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
            
            {/* Repeat Icon */}
            <button className="text-white hover:text-green-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Active indicator */}
        {isActive && (
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Define skill categories with real data
  const skillCategories = [
    { 
      name: 'Programming Languages', 
      emoji: '💻', 
      icon: Code,
      color: 'from-green-500 to-green-600',
      skillsCount: 10,
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'Dart', 'SQL', 'Shell Scripting', 'HTML/CSS', 'Node.js']
    },
    { 
      name: 'Web Development', 
      emoji: '🌐', 
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      skillsCount: 8,
      skills: ['React', 'HTML5/CSS3', 'JWT & OAuth2', 'WebSockets', 'REST API', 'PWA', 'Responsive Design', 'Animations & UX']
    },
    { 
      name: 'Databases & Cloud', 
      emoji: '🗄️', 
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skillsCount: 8,
      skills: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'Redis', 'MySQL', 'CRUD Operations', 'AWS', 'Microservices']
    },
    { 
      name: 'Embedded & Systems', 
      emoji: '🔧', 
      icon: Cpu,
      color: 'from-orange-500 to-orange-600',
      skillsCount: 8,
      skills: ['Linux', 'GStreamer', 'CarPlay', 'Vulkan', 'Trace32', 'Memory Management', 'Debugging Tools', 'Event-Driven Architecture']
    },
    { 
      name: 'Mobile & AI/ML', 
      emoji: '🤖', 
      icon: Smartphone,
      color: 'from-pink-500 to-pink-600',
      skillsCount: 7,
      skills: ['Flutter', 'OpenAI API', 'LangChain', 'NLP', 'Recommendation Systems', 'Chatbots', 'Text Processing']
    },
    { 
      name: 'DevOps & Tools', 
      emoji: '🛠️', 
      icon: Wrench,
      color: 'from-gray-500 to-gray-600',
      skillsCount: 12,
      skills: ['Git/GitHub', 'Docker', 'CI/CD', 'Monitoring & Logging', 'SonarQube', 'Perf', 'Postman', 'Swagger/OpenAPI', 'Vite', 'JMeter', 'Locust', 'Error Handling']
    }
  ];

  const activeCategory = skillCategories[activeCategoryIndex];
  const activeCategorySkills = activeCategory.skills;

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveCategoryIndex((prev) => (prev + 1) % skillCategories.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveCategoryIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleSwipeLeft = () => {
    handleNext();
  };

  const handleSwipeRight = () => {
    handlePrevious();
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Auto-rotation disabled for manual control
  // useEffect(() => {
  //   const autoRotate = setInterval(() => {
  //     if (!isTransitioning) {
  //       handleNext();
  //     }
  //   }, 5000); // Auto-rotate every 5 seconds

  //   return () => clearInterval(autoRotate);
  // }, [isTransitioning]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900/20 to-black">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <h1 className="text-lg sm:text-xl font-bold text-green-500">Skills Carousel</h1>
            <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400">
              <span>← Swipe or use arrows →</span>
            </div>
            <div className="sm:hidden text-xs text-gray-400">
              <span>← Swipe →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Horizontal Skill Carousel */}
      <div className="relative h-[calc(100vh-250px)] sm:h-[calc(100vh-300px)] flex flex-col items-center justify-center overflow-hidden px-2 sm:px-8">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />
        
        {/* Progress indicator */}
        <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
          {skillCategories.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 sm:h-2 rounded-full transition-all duration-300 ${
                index === activeCategoryIndex ? 'bg-green-500 w-6 sm:w-8' : 'bg-gray-600 w-1 sm:w-2'
              }`}
              animate={{
                scale: index === activeCategoryIndex ? 1.2 : 1,
                opacity: index === activeCategoryIndex ? 1 : 0.5
              }}
            />
          ))}
        </div>
        
        {/* Navigation Arrows - Transparent and always visible */}
        <motion.button
          onClick={handlePrevious}
          className="absolute left-2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 border border-white/20"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
        
        <motion.button
          onClick={handleNext}
          className="absolute right-2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 border border-white/20"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        {/* Circular Infinite Carousel - Center Focus */}
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Create a circular layout with center focus */}
          {skillCategories.map((category, index) => {
            const totalItems = skillCategories.length;
            const centerIndex = activeCategoryIndex;
            const distance = Math.min(
              Math.abs(index - centerIndex),
              Math.abs(index - centerIndex + totalItems),
              Math.abs(index - centerIndex - totalItems)
            );
            
            const isActive = index === centerIndex;
            const isAdjacent = distance === 1;
            const isVisible = distance <= 2; // Show only 5 cards (center + 2 on each side)
            
            if (!isVisible) return null;
            
            // Calculate position offset from center
            const positionOffset = index - centerIndex;
            const adjustedOffset = positionOffset > totalItems / 2 ? positionOffset - totalItems : 
                                 positionOffset < -totalItems / 2 ? positionOffset + totalItems : positionOffset;
            
            return (
              <motion.div
                key={`${category.name}-${index}`}
                className="absolute"
                animate={{
                  x: adjustedOffset * 120, // Horizontal spacing
                  scale: isActive ? 1 : isAdjacent ? 0.7 : 0.4,
                  opacity: isActive ? 1 : isAdjacent ? 0.8 : 0.3,
                  zIndex: isActive ? 30 : isAdjacent ? 20 : 10,
                  rotateY: adjustedOffset * 15, // 3D rotation effect
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <CategoryCard
                  category={category}
                  index={index}
                  isActive={isActive}
                  isAdjacent={isAdjacent}
                  onSelect={() => setActiveCategoryIndex(index)}
                  onSwipeLeft={handleSwipeLeft}
                  onSwipeRight={handleSwipeRight}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Category Details */}
      {activeCategory && (
        <div className="absolute bottom-32 sm:bottom-40 left-1/2 transform -translate-x-1/2 text-center z-10 w-full max-w-4xl px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-6 border border-green-500/20"
          >
            <motion.h2 
              className="text-xl sm:text-3xl font-bold mb-4 text-white"
            >
              {activeCategory.name}
            </motion.h2>
            <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
              {activeCategorySkills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  className="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium border border-green-500/30"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Skills;
