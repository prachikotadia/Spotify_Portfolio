import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Heart, MoreHorizontal, Github, ExternalLink, Calendar, Code, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { mockProjects } from '@/data/mockData';
import type { Project } from '@/data/mockData';

const ProjectsFullStack = () => {
  const navigate = useNavigate();
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());

  // Filter Full Stack projects
  const fullStackProjects = mockProjects.filter(project => 
    project.techStack.some(tech => 
      tech.toLowerCase().includes('react') || 
      tech.toLowerCase().includes('node') || 
      tech.toLowerCase().includes('express') ||
      tech.toLowerCase().includes('mongodb') ||
      tech.toLowerCase().includes('postgresql') ||
      tech.toLowerCase().includes('fastapi') ||
      tech.toLowerCase().includes('mern') ||
      tech.toLowerCase().includes('full stack')
    )
  );

  const toggleLike = (projectId: string) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-30 bg-[#121212]/95 backdrop-blur-xl border-b border-white/5"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10 rounded-full"
            onClick={() => navigate(-1)}
          >
            <MoreHorizontal className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-white">Full Stack Apps</h1>
          <div className="w-8"></div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-6 py-8"
      >
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Full Stack Applications</h2>
            <p className="text-blue-100 text-lg mb-4">Complete web applications with frontend and backend integration</p>
            <div className="flex items-center gap-4 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>{fullStackProjects.length} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>Featured Collection</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fullStackProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <Card 
                className="bg-[#181818] border-white/10 hover:bg-[#282828] transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute bottom-2 right-2 w-10 h-10 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                  
                  {/* Like Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(project.id);
                    }}
                  >
                    <Heart className={`w-4 h-4 ${likedProjects.has(project.id) ? 'text-red-500 fill-current' : 'text-white'}`} />
                  </Button>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-white/10 text-white">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-white/10 text-white">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-white/30 text-white hover:bg-white/10 text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-green-500 text-black hover:bg-green-400 text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.dateCompleted}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="w-3 h-3" />
                      <span>{project.techStack.length} tech</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsFullStack;
