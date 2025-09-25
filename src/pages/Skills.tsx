import { motion } from 'framer-motion';
import { Code, Star, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/data/mockData';
import type { Skill } from '@/data/mockData';

const Skills = () => {
  const skillCategories = [
    'Frontend',
    'Backend', 
    'Database',
    'Cloud',
    'DevOps',
    'Tools'
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
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="hero-gradient pt-12 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Skills & Technologies</h1>
          <p className="text-xl text-muted-foreground">
            My technical expertise and proficiency levels
          </p>
        </motion.div>
      </div>

      <div className="px-6">
        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Skills Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">18</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.2</div>
                  <div className="text-sm text-muted-foreground">Avg. Level</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills by Category */}
        {skillCategories.map((category, categoryIndex) => {
          const categorySkills = getSkillsByCategory(category);
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                {category}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-lg">{skill.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                              {getLevelText(skill.level)}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < skill.level ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <Progress value={(skill.level / 5) * 100} className="h-2" />
                      </CardContent>
                    </Card>
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
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Skill Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Rapid Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Quick to adapt and learn new technologies
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20">
              <CardContent className="pt-6 text-center">
                <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Problem Solving</h3>
                <p className="text-sm text-muted-foreground">
                  Strong analytical and debugging skills
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
              <CardContent className="pt-6 text-center">
                <Code className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on maintainable and scalable solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Currently Learning</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  'Machine Learning',
                  'Blockchain Development',
                  'Rust Programming',
                  'GraphQL',
                  'Microservices',
                  'DevOps Automation'
                ].map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
