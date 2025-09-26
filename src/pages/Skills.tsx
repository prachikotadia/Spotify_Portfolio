import { motion } from 'framer-motion';
import { Code, Star, TrendingUp, Zap, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { skills } from '@/data/mockData';
import type { Skill } from '@/data/mockData';

const Skills = () => {
  const skillCategories = [
    { name: 'Programming Languages', emoji: '💻', color: 'from-blue-500 to-cyan-500' },
    { name: 'Web Development', emoji: '🌐', color: 'from-green-500 to-emerald-500' },
    { name: 'Databases & Cloud', emoji: '🗄️', color: 'from-purple-500 to-violet-500' },
    { name: 'Embedded & Systems', emoji: '🔧', color: 'from-orange-500 to-red-500' },
    { name: 'Mobile & AI/ML', emoji: '🤖', color: 'from-pink-500 to-rose-500' },
    { name: 'DevOps & Tools', emoji: '🛠️', color: 'from-gray-500 to-slate-500' }
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

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

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-white">Skills & Expertise</h1>
            <p className="text-sm text-gray-400">Technical proficiency across multiple domains</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4">Skills Overview</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">53</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">6</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">4.2</div>
                <div className="text-sm text-gray-400">Avg. Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">5+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills by Category - Spotify Style */}
        {skillCategories.map((category, categoryIndex) => {
          const categorySkills = getSkillsByCategory(category.name);
          
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-2xl">{category.emoji}</span>
                  {category.name}
                </h2>
                <Button variant="link" className="text-green-500 hover:text-green-400 text-sm">
                  See all
                </Button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {categorySkills.slice(0, 10).map((skill, skillIndex) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-1 truncate w-full">{skill.name}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < skill.level ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{getLevelText(skill.level)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Skill Highlights</h2>
            <Button variant="link" className="text-green-500 hover:text-green-400 text-sm">
              See all
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Rapid Learning</h3>
                  <p className="text-sm text-gray-400">Quick to adapt and learn new technologies</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Problem Solving</h3>
                  <p className="text-sm text-gray-400">Strong analytical and debugging skills</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Clean Code</h3>
                  <p className="text-sm text-gray-400">Focus on maintainable and scalable solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Currently Learning</h2>
            <Button variant="link" className="text-green-500 hover:text-green-400 text-sm">
              See all
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              'Machine Learning',
              'Blockchain Development',
              'Rust Programming',
              'GraphQL',
              'Microservices',
              'DevOps Automation'
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.05 }}
                className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{skill}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
