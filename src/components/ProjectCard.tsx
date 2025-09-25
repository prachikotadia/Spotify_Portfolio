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
      whileHover={{ y: -5 }}
      className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:bg-secondary/80 cursor-pointer group relative transition-all duration-300"
      onClick={() => onView(project)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <div className="w-full aspect-square bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-lg" />
        </div>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl backdrop-blur-sm"
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  onView(project);
                }}
              >
                <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground truncate">
          {project.techStack.slice(0, 2).join(', ')}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;