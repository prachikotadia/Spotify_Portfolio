import { motion, useMotionValue, useTransform, useSpring, useDragControls } from 'framer-motion';
import { Code, Star, TrendingUp, Zap, ChevronRight, ChevronLeft, Globe, Server, Database, Smartphone, Cpu, Wrench, Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart, Share, MoreHorizontal } from 'lucide-react';
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
  return `https://source.unsplash.com/400x400/?${encodeURIComponent(query)}`;
};

// Stacked Circular Skill Component
const StackedSkillCard = ({ skill, index, isActive, onSelect }: { 
  skill: Skill; 
  index: number; 
  isActive: boolean; 
  onSelect: () => void;
}) => {
  const y = useMotionValue(0);
  const scale = useTransform(y, [-100, 0, 100], [0.8, 1, 0.8]);
  const opacity = useTransform(y, [-100, 0, 100], [0.3, 1, 0.3]);
  const zIndex = isActive ? 10 : 5 - index;

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: -200, bottom: 200 }}
      dragElastic={0.1}
      style={{ y, scale, opacity, zIndex }}
      className={`absolute inset-0 flex items-center justify-center ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
      onClick={onSelect}
    >
      <motion.div
        className={`relative ${isActive ? 'w-80 h-80' : 'w-64 h-64'}`}
        whileHover={{ scale: isActive ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Main circular image */}
        <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
          <img
            src={getSkillImage(skill.name)}
            alt={skill.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Skill level indicator */}
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">{skill.level}</span>
        </div>
        
        {/* Skill name overlay */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
          >
            <h3 className="text-white font-bold text-xl mb-1">{skill.name}</h3>
            <p className="text-gray-400 text-sm">{getLevelText(skill.level)}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

// Spotify Player Controls Component
const PlayerControls = ({ skill, isPlaying, onPlayPause, onNext, onPrevious }: {
  skill: Skill;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const [progress, setProgress] = useState(30);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-[#181818] rounded-t-3xl p-6">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-600 rounded-full h-1 mb-2">
          <div 
            className="bg-white h-1 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>1:23</span>
          <span>4:56</span>
        </div>
      </div>

      {/* Main Controls */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <Shuffle className="w-5 h-5" />
        </Button>
        
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" onClick={onPrevious}>
          <SkipBack className="w-6 h-6" />
        </Button>
        
        <Button
          className="w-14 h-14 rounded-full bg-white text-black hover:scale-105 transition-transform"
          onClick={onPlayPause}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </Button>
        
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" onClick={onNext}>
          <SkipForward className="w-6 h-6" />
        </Button>
        
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <Repeat className="w-5 h-5" />
        </Button>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Heart className={`w-5 h-5 ${isLiked ? 'text-green-500 fill-current' : ''}`} />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Share className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">52</span>
          <div className="w-4 h-4 bg-gray-600 rounded-sm" />
          <div className="w-4 h-1 bg-gray-600 rounded-full" />
          <span className="text-sm text-gray-400">Pretty V</span>
          <div className="w-4 h-4 bg-gray-600 rounded-sm" />
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Get top skills for the stacked interface
  const topSkills = skills
    .sort((a, b) => b.level - a.level)
    .slice(0, 10);

  const activeSkill = topSkills[activeSkillIndex];

  const handleNext = () => {
    setActiveSkillIndex((prev) => (prev + 1) % topSkills.length);
  };

  const handlePrevious = () => {
    setActiveSkillIndex((prev) => (prev - 1 + topSkills.length) % topSkills.length);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-white">Skills & Expertise</h1>
            <p className="text-sm text-gray-400">Swipe to explore my technical skills</p>
          </div>
        </div>
      </div>

      {/* Main Content - Stacked Circular Skills */}
      <div className="relative h-[calc(100vh-200px)] flex items-center justify-center overflow-hidden">
        {/* Stacked Circular Skills */}
        <div className="relative w-96 h-96">
          {topSkills.map((skill, index) => (
            <StackedSkillCard
              key={skill.id}
              skill={skill}
              index={index}
              isActive={index === activeSkillIndex}
              onSelect={() => setActiveSkillIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Spotify Player Controls */}
      <PlayerControls
        skill={activeSkill}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default Skills;
