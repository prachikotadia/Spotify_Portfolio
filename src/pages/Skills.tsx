import { motion, useMotionValue, useTransform, useSpring, useDragControls } from 'framer-motion';
import { Code, Star, TrendingUp, Zap, ChevronRight, ChevronLeft, Globe, Server, Database, Smartphone, Cpu, Wrench, Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart, Share, MoreHorizontal, Bell, Search, Menu, List, Video, Ticket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { skills } from '@/data/mockData';
import type { Skill } from '@/data/mockData';
import { useState, useRef } from 'react';

// Helper functions (moved from main Skills component)
const getLevelColor = (level: number) => {
  if (level >= 5) return 'text-green-500';
  if (level >= 4) return 'text-blue-500';
  if (level >= 3) return 'text-yellow-500';
  return 'text-gray-500';
};

const getLevelText = (level: number) => {
  if (level >= 5) return 'Expert';
  if (level >= 4) return 'Advanced';
  if (level >= 3) return 'Intermediate';
  return 'Beginner';
};

// Generate AI image URL for skill
const getSkillImage = (skillName: string) => {
  // Generate AI-style images using Unsplash with skill-specific queries
  const skillQueries = {
    'Python': 'python programming code computer',
    'JavaScript': 'javascript code web development',
    'React': 'react js frontend development',
    'Node.js': 'nodejs backend server',
    'AWS': 'amazon web services cloud',
    'Docker': 'docker container technology',
    'Machine Learning': 'artificial intelligence neural network',
    'Data Science': 'data analysis visualization',
    'Mobile Development': 'mobile app smartphone',
    'DevOps': 'devops automation pipeline'
  };
  
  const query = skillQueries[skillName as keyof typeof skillQueries] || skillName.toLowerCase();
  return `https://source.unsplash.com/400x600/?${encodeURIComponent(query)}`;
};

// Horizontal Skill Card Component
const SkillCard = ({ skill, index, isActive, onSelect }: { 
  skill: Skill; 
  index: number; 
  isActive: boolean; 
  onSelect: () => void;
}) => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);
  const opacity = useTransform(x, [-200, 0, 200], [0.4, 1, 0.4]);
  const rotateY = useTransform(x, [-200, 0, 200], [15, 0, -15]);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -200, right: 200 }}
      dragElastic={0.1}
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
        {/* Skill poster image */}
        <div className="w-full h-full">
          <img
            src={getSkillImage(skill.name)}
            alt={skill.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Skill level badge */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xs">{skill.level}</span>
        </div>
        
        {/* Skill category badge */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-xs font-medium">{skill.category.split(' ')[0]}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Bottom Navigation Component
const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-gray-800">
      <div className="flex items-center justify-around py-4 px-6">
        <div className="flex flex-col items-center gap-1">
          <List className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400">Skills</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <Video className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400">Projects</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <Search className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400">Search</span>
        </div>
        
        <div className="flex flex-col items-center gap-1 relative">
          <Ticket className="w-6 h-6 text-gray-400" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">53</span>
          </div>
          <span className="text-xs text-gray-400">Certificates</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <Menu className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400">Menu</span>
        </div>
      </div>
      
      {/* Time indicator */}
      <div className="text-center pb-2">
        <span className="text-xs text-gray-500">0:00 - 16/07/20</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('Showing');
  
  // Get top skills for the carousel interface
  const topSkills = skills
    .sort((a, b) => b.level - a.level)
    .slice(0, 8);

  const activeSkill = topSkills[activeSkillIndex];

  const handleNext = () => {
    setActiveSkillIndex((prev) => (prev + 1) % topSkills.length);
  };

  const handlePrevious = () => {
    setActiveSkillIndex((prev) => (prev - 1 + topSkills.length) % topSkills.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900/20 to-black">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-red-500">skillsk</h1>
            <Bell className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-8 pb-4">
          <button
            onClick={() => setActiveTab('Showing')}
            className={`text-lg font-medium transition-colors ${
              activeTab === 'Showing' ? 'text-red-500' : 'text-white'
            }`}
          >
            Showing
          </button>
          <button
            onClick={() => setActiveTab('Coming')}
            className={`text-lg font-medium transition-colors ${
              activeTab === 'Coming' ? 'text-red-500' : 'text-white'
            }`}
          >
            Coming
          </button>
        </div>
      </div>

      {/* Main Content - Horizontal Skill Carousel */}
      <div className="relative h-[calc(100vh-200px)] flex items-center justify-center overflow-hidden px-4">
        {/* Horizontal Skill Carousel */}
        <div className="flex items-center justify-center gap-8">
          {topSkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
              isActive={index === activeSkillIndex}
              onSelect={() => setActiveSkillIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Skill Details */}
      {activeSkill && (
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-2">{activeSkill.name.toUpperCase()}</h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-lg">{activeSkill.level * 20}% Up</span>
              <span className="text-lg">•</span>
              <span className="text-lg">{activeSkill.level * 15} minutes</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {getLevelText(activeSkill.level).toUpperCase()}
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {activeSkill.category.split(' ')[0].toUpperCase()}
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                PROGRAMMING
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                DEVELOPMENT
              </span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Skills;
