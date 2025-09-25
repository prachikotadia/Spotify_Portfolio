import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
  onView: (project: Project) => void;
}

const ProjectCard = ({ project, onView }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative overflow-hidden rounded-xl cursor-pointer group transition-all duration-300"
      onClick={() => onView(project)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Spotify-style gradient background with organic shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-purple-500/10 to-pink-500/20">
        <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <div className="w-full aspect-square bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Demo Image Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=center')`
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            {/* Organic shape overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-2 right-2 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg backdrop-blur-sm"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    onView(project);
                  }}
                >
                  <Play className="w-5 h-5 text-black ml-0.5" fill="black" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-foreground group-hover:text-green-400 transition-colors truncate">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground truncate">
            {project.techStack.slice(0, 2).join(', ')}
          </p>
          
          {/* Floating action button */}
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
              className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
            >
              <Play className="w-4 h-4 text-black" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;