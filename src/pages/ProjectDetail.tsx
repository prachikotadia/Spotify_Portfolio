import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, Play, Pause, Heart, Share2, ExternalLink, Github, Calendar, Code, Star, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { mockProjects } from '@/data/mockData';
import type { Project } from '@/data/mockData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (id) {
      const foundProject = mockProjects.find(p => p.id === id);
      setProject(foundProject || null);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-4 z-10"
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/20 rounded-full"
          onClick={() => navigate(-1)}
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>

      {/* Project Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-6 mb-8"
      >
        <div className="flex items-end gap-6">
          {/* Project Image */}
          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Project Info */}
          <div className="flex-1">
            <p className="text-white/70 text-sm mb-2">Project</p>
            <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-white/90 text-lg mb-6">{project.description}</p>
            
            {/* Project Stats */}
            <div className="flex items-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.dateCompleted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>{project.techStack.length} Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>Featured Project</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-6 space-y-6"
      >
        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white/90 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Project Links</h2>
          <div className="flex gap-4">
            {project.githubUrl && (
              <Button
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="bg-white text-black hover:bg-white/90 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, '_blank')}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>

        {/* Long Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About This Project</h2>
          <p className="text-white/80 leading-relaxed">{project.longDescription}</p>
        </div>
      </motion.div>

      {/* Player Controls - Fixed Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="fixed bottom-20 left-0 right-0 p-4 bg-[#121212]/95 backdrop-blur-xl border-t border-white/5"
      >
        <div className="flex items-center justify-between">
          {/* Project Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">{project.title}</h3>
              <p className="text-white/70 text-xs">Prachi Kotadia</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLiked(!isLiked)}
              className={`${isLiked ? 'text-red-500' : 'text-white/70'} hover:bg-white/10`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:bg-white/10"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:bg-white/10"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
