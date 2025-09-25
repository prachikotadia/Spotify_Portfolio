import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  longDescription?: string;
  features?: string[];
  dateCompleted?: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          >
            {/* Modal */}
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button
                      variant="secondary"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="backdrop-blur-sm bg-black/50 hover:bg-black/70"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="spotify-button"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Title & Meta */}
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      {project.dateCompleted && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.dateCompleted}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Code className="w-4 h-4" />
                        <span>{project.techStack.length} Technologies</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Features */}
                  {project.features && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                    </Button>
                    <Button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1 spotify-button"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Site
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;