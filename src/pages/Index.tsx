import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import NowPlaying from '@/components/NowPlaying';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import { featuredProjects, recentProjects, mockProjects, type Project } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Play, Shuffle } from 'lucide-react';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectView = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background flex w-full">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <Topbar
          onMenuClick={() => setSidebarOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        {/* Main Content Area */}
        <main className="flex-1 p-6 pb-32 lg:ml-0 overflow-x-hidden">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  Good evening
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-muted-foreground"
                >
                  Welcome to my portfolio. Discover my latest projects and skills.
                </motion.p>
              </div>
              
              <div className="flex gap-4">
                <Button className="spotify-button">
                  <Play className="w-5 h-5 mr-2" />
                  Play All
                </Button>
                <Button variant="outline" className="border-muted hover:border-primary">
                  <Shuffle className="w-5 h-5 mr-2" />
                  Shuffle
                </Button>
              </div>
            </div>

            {/* Quick Access Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleProjectView(project)}
                  className="bg-secondary/50 hover:bg-secondary cursor-pointer rounded-lg p-4 flex items-center gap-4 transition-all duration-200"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-md flex-shrink-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" fill="currentColor" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {project.techStack.slice(0, 2).join(', ')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Featured Projects Carousel */}
          <ProjectsCarousel
            title="Featured Projects"
            projects={featuredProjects}
            onProjectView={handleProjectView}
          />

          {/* Recent Projects Carousel */}
          <ProjectsCarousel
            title="Recent Work"
            projects={recentProjects}
            onProjectView={handleProjectView}
          />

          {/* Made for You Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold hover-green cursor-pointer mb-6">
              Made for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockProjects.slice(0, 4).map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card rounded-lg p-4 hover:bg-secondary transition-colors cursor-pointer group"
                  onClick={() => handleProjectView(project)}
                >
                  <div className="aspect-square bg-gradient-to-br from-primary to-primary/60 rounded-md mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" fill="currentColor" />
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.techStack.slice(0, 2).join(', ')}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>

      {/* Now Playing Bar */}
      <NowPlaying />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
