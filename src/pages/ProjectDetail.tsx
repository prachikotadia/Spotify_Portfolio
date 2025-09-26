import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, Play, Pause, Heart, Share2, ExternalLink, Github, Shuffle, SkipBack, SkipForward, Repeat, Queue, Tv } from 'lucide-react';
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
      {/* Header - Playing From */}
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
        <div className="text-center">
          <p className="text-white/70 text-xs">PLAYING FROM PROJECT</p>
          <h1 className="text-white font-bold text-lg">{project.title}</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
          <Share2 className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Project Image - Large Square */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center px-6 mb-8"
      >
        <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-6 mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
            <p className="text-white/70">{project.description}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsLiked(!isLiked)}
            className={`${isLiked ? 'text-red-500' : 'text-white/70'} hover:bg-white/10`}
          >
            <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-white/70 text-sm">1:41</span>
          <div className="flex-1 h-1 bg-white/20 rounded-full">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
          <span className="text-white/70 text-sm">3:35</span>
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
            <Shuffle className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
            <SkipBack className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-white text-black rounded-full hover:bg-white/90 flex items-center justify-center"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
            <SkipForward className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
            <Repeat className="w-6 h-6" />
          </Button>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-green-500">
            <Tv className="w-4 h-4" />
            <span className="text-sm font-medium">LA NUIT</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
              <Queue className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-6 mb-8"
      >
        <h3 className="text-xl font-bold text-white mb-4">About the project</h3>
        <p className="text-white/80 leading-relaxed mb-6">{project.longDescription}</p>
        
        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Links */}
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
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
