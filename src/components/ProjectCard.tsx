import { motion } from 'framer-motion';
import { Play, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group cursor-pointer"
      onClick={() => onView(project)}
    >
      <div className="spotify-card relative overflow-hidden">
        {/* Project Image */}
        <div className="relative mb-4 overflow-hidden rounded-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Hover Overlay with Play Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg"
            >
              <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-full">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 flex gap-2"
        >
          <Button
            size="icon"
            variant="secondary"
            className="w-8 h-8 backdrop-blur-sm bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubUrl, '_blank');
            }}
          >
            <Github className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="w-8 h-8 backdrop-blur-sm bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.liveUrl, '_blank');
            }}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;