import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Code, Star, TrendingUp, Zap, ChevronRight, ChevronLeft, Globe, Server, Database, Smartphone, Cpu, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { skills } from '@/data/mockData';
import type { Skill } from '@/data/mockData';
import { useState, useRef } from 'react';

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

// Generate AI image URL for skill category
const getCategoryImage = (categoryName: string) => {
  const categoryQueries = {
    'Programming Languages': 'programming code computer technology',
    'Web Development': 'web development frontend backend',
    'Databases & Cloud': 'database cloud server technology',
    'Embedded & Systems': 'embedded systems hardware electronics',
    'Mobile & AI/ML': 'mobile app artificial intelligence machine learning',
    'DevOps & Tools': 'devops automation pipeline tools'
  };
  
  const query = categoryQueries[categoryName as keyof typeof categoryQueries] || categoryName.toLowerCase();
  return `https://source.unsplash.com/400x600/?${encodeURIComponent(query)}`;
};

// Category Card Component (Main Flashcard)
const CategoryCard = ({ category, index, isActive, onSelect, onSwipeLeft, onSwipeRight }: { 
  category: any; 
  index: number; 
  isActive: boolean; 
  onSelect: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}) => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);
  const opacity = useTransform(x, [-200, 0, 200], [0.4, 1, 0.4]);
  const rotateY = useTransform(x, [-200, 0, 200], [15, 0, -15]);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      // Swiped right - go to previous
      onSwipeRight();
    } else if (info.offset.x < -threshold) {
      // Swiped left - go to next
      onSwipeLeft();
    }
    // Reset position
    x.set(0);
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -200, right: 200 }}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      style={{ x, scale, opacity, rotateY }}
      className={`relative cursor-pointer ${isActive ? 'z-10' : 'z-0'}`}
      onClick={onSelect}
    >
      <motion.div
        className={`relative ${isActive ? 'w-64 h-96' : 'w-48 h-72'} rounded-2xl overflow-hidden shadow-2xl`}
        whileHover={{ scale: isActive ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Category poster image */}
        <div className="w-full h-full">
          <img
            src={getCategoryImage(category.name)}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Category level badge */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xs">{category.skillsCount}</span>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-xs font-medium">{category.name.split(' ')[0]}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  
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
  };

  const handlePrevious = () => {
    setActiveCategoryIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  const handleSwipeLeft = () => {
    handleNext();
  };

  const handleSwipeRight = () => {
    handlePrevious();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900/20 to-black">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-green-500">skillsk</h1>
          </div>
        </div>
      </div>

      {/* Main Content - Horizontal Skill Carousel */}
      <div className="relative h-[calc(100vh-200px)] flex items-center justify-center overflow-hidden px-4">
        {/* Horizontal Skill Carousel */}
        <div className="flex items-center justify-center gap-8">
          {skillCategories.map((category, index) => (
            <CategoryCard
              key={category.name}
              category={category}
              index={index}
              isActive={index === activeCategoryIndex}
              onSelect={() => setActiveCategoryIndex(index)}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
            />
          ))}
        </div>
      </div>

      {/* Category Details */}
      {activeCategory && (
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-2">{activeCategory.name.toUpperCase()}</h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-lg">{activeCategorySkills.length} Skills</span>
              <span className="text-lg">•</span>
              <span className="text-lg">Expert Level</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {activeCategory.name.split(' ')[0].toUpperCase()}
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                PROGRAMMING
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                DEVELOPMENT
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                TECHNOLOGY
              </span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Sub-categories (Skills) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-gray-800 p-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-white font-bold mb-4 text-center">Skills in {activeCategory?.name}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {activeCategorySkills.slice(0, 8).map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-green-500/20 hover:bg-green-500/30 text-green-300 hover:text-white px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-all duration-300"
              >
                {skill.name}
              </motion.div>
            ))}
            {activeCategorySkills.length > 8 && (
              <div className="bg-gray-600/20 text-gray-400 px-3 py-1 rounded-full text-sm font-medium">
                +{activeCategorySkills.length - 8} more
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
