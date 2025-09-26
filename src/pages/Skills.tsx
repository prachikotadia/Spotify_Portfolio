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

// Generate random AI-generated images for skill categories
const getCategoryImage = (categoryName: string) => {
  const categoryImages = {
    'Programming Languages': [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=600&fit=crop&crop=center'
    ],
    'Web Development': [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=600&fit=crop&crop=center'
    ],
    'Databases & Cloud': [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=600&fit=crop&crop=center'
    ],
    'Embedded & Systems': [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=center'
    ],
    'Mobile & AI/ML': [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=600&fit=crop&crop=center'
    ],
    'DevOps & Tools': [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=center'
    ]
  };
  
  const images = categoryImages[categoryName as keyof typeof categoryImages] || categoryImages['Programming Languages'];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// Category Card Component (Main Flashcard)
const CategoryCard = ({ category, index, isActive, onSelect, onSwipeLeft, onSwipeRight, imageRefreshKey }: { 
  category: any; 
  index: number; 
  isActive: boolean; 
  onSelect: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  imageRefreshKey: number;
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
      dragConstraints={{ left: -80, right: 80 }}
      dragElastic={0.3}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      style={{ x, scale, opacity, rotateY }}
      className={`relative cursor-grab active:cursor-grabbing ${isActive ? 'z-20' : 'z-10'} flex-shrink-0`}
      onClick={onSelect}
      whileDrag={{ scale: 1.05 }}
    >
      <motion.div
        className={`relative ${isActive ? 'w-56 h-80' : 'w-40 h-64'} rounded-2xl overflow-hidden shadow-2xl border-2 ${isActive ? 'border-green-500' : 'border-gray-600'}`}
        whileHover={{ scale: isActive ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Category poster image with overlay */}
        <div className="w-full h-full relative">
          <img
            key={`${category.name}-${imageRefreshKey}`}
            src={getCategoryImage(category.name)}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        {/* Category level badge */}
        <motion.div 
          className="absolute top-4 right-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white font-bold text-sm">{category.skillsCount}</span>
        </motion.div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-white text-sm font-semibold">{category.name.split(' ')[0]}</span>
        </div>

        {/* Category title at bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
          <p className="text-green-300 text-sm">{category.skillsCount} Skills</p>
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
  const [imageRefreshKey, setImageRefreshKey] = useState(0);
  
  // Define skill categories with icons and skill counts
  const skillCategories = [
    { 
      name: 'Programming Languages', 
      emoji: '💻', 
      icon: Code,
      color: 'from-green-500 to-green-600',
      skillsCount: skills.filter(s => s.category === 'Programming Languages').length
    },
    { 
      name: 'Web Development', 
      emoji: '🌐', 
      icon: Globe,
      color: 'from-green-500 to-green-600',
      skillsCount: skills.filter(s => s.category === 'Web Development').length
    },
    { 
      name: 'Databases & Cloud', 
      emoji: '🗄️', 
      icon: Database,
      color: 'from-green-500 to-green-600',
      skillsCount: skills.filter(s => s.category === 'Databases & Cloud').length
    },
    { 
      name: 'Embedded & Systems', 
      emoji: '🔧', 
      icon: Cpu,
      color: 'from-green-500 to-green-600',
      skillsCount: skills.filter(s => s.category === 'Embedded & Systems').length
    },
    { 
      name: 'Mobile & AI/ML', 
      emoji: '🤖', 
      icon: Smartphone,
      color: 'from-green-500 to-green-600',
      skillsCount: skills.filter(s => s.category === 'Mobile & AI/ML').length
    },
    { 
      name: 'DevOps & Tools', 
      emoji: '🛠️', 
      icon: Wrench,
      color: 'from-green-500 to-green-600',
      skillsCount: skills.filter(s => s.category === 'DevOps & Tools').length
    }
  ];

  const activeCategory = skillCategories[activeCategoryIndex];
  const activeCategorySkills = skills.filter(skill => skill.category === activeCategory.name);

  const handleNext = () => {
    setActiveCategoryIndex((prev) => (prev + 1) % skillCategories.length);
    setImageRefreshKey(prev => prev + 1); // Refresh images on swipe
  };

  const handlePrevious = () => {
    setActiveCategoryIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    setImageRefreshKey(prev => prev + 1); // Refresh images on swipe
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
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-green-500">Skills Carousel</h1>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <span>← Swipe or use arrows →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Horizontal Skill Carousel */}
      <div className="relative h-[calc(100vh-300px)] flex flex-col items-center justify-center overflow-hidden px-8">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />
        
        {/* Progress indicator */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {skillCategories.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeCategoryIndex ? 'bg-green-500 w-8' : 'bg-gray-600 w-2'
              }`}
              animate={{
                scale: index === activeCategoryIndex ? 1.2 : 1,
                opacity: index === activeCategoryIndex ? 1 : 0.5
              }}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <motion.button
          onClick={handlePrevious}
          className="absolute left-2 z-30 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          onClick={handleNext}
          className="absolute right-2 z-30 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Horizontal Skill Carousel */}
        <div className="flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide w-full">
          {skillCategories.map((category, index) => (
            <CategoryCard
              key={category.name}
              category={category}
              index={index}
              isActive={index === activeCategoryIndex}
              onSelect={() => setActiveCategoryIndex(index)}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
              imageRefreshKey={imageRefreshKey}
            />
          ))}
        </div>
      </div>

      {/* Category Details */}
      {activeCategory && (
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-center z-10 w-full max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-green-500/20"
          >
            <motion.h2 
              className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {activeCategory.name.toUpperCase()}
            </motion.h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-lg font-semibold">{activeCategorySkills.length} Skills</span>
              <span className="text-lg">•</span>
              <span className="text-lg font-semibold">Expert Level</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <motion.span 
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                {activeCategory.name.split(' ')[0].toUpperCase()}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                PROGRAMMING
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                DEVELOPMENT
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                TECHNOLOGY
              </motion.span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Sub-categories (Skills) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-black/50 backdrop-blur-md border-t border-green-500/20 p-4">
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            className="text-white font-bold mb-4 text-center text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Skills in {activeCategory?.name}
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-2 max-h-20 overflow-y-auto">
            {activeCategorySkills.slice(0, 6).map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
                }}
                className="bg-gradient-to-r from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30 text-green-300 hover:text-white px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 border border-green-500/30 hover:border-green-400/50"
              >
                {skill.name}
              </motion.div>
            ))}
            {activeCategorySkills.length > 6 && (
              <motion.div 
                className="bg-gradient-to-r from-gray-600/20 to-gray-700/20 text-gray-400 px-3 py-1 rounded-full text-sm font-medium border border-gray-600/30"
                whileHover={{ scale: 1.05 }}
              >
                +{activeCategorySkills.length - 6} more
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
