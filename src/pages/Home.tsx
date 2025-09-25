import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Shuffle, Clock, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { featuredProjects, recentProjects } from '@/data/mockData';
import type { Project } from '@/data/mockData';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { name: 'Frontend', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Backend', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Full Stack', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Mobile', gradient: 'from-orange-500 to-red-500' },
    { name: 'AI/ML', gradient: 'from-indigo-500 to-purple-500' },
    { name: 'DevOps', gradient: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="hero-gradient pt-12 pb-8 px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-muted-foreground mb-2"
            >
              Good morning,
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold"
            >
              Developer
            </motion.h1>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="glass">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="glass">
              <Clock className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-3 mb-8"
        >
          {featuredProjects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card p-3 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm truncate">{project.title}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {project.techStack[0]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="px-6">
        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="welcome-card mb-8 text-white"
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">
              Welcome to my
            </h2>
            <h3 className="text-3xl font-bold mb-4">
              Portfolio of Projects
            </h3>
            <p className="text-white/80 mb-6">
              Discover my latest work and technical skills
            </p>
            <div className="flex gap-3">
              <Button className="bg-white text-black hover:bg-white/90 font-semibold px-6">
                Continue with Portfolio
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`category-card p-6 bg-gradient-to-br ${category.gradient}`}
              >
                <h3 className="text-white font-bold text-lg">{category.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Made for You */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Made for You</h2>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              See All
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {featuredProjects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-40">
                <ProjectCard 
                  project={project} 
                  onView={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Work</h2>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              See All
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-40">
                <ProjectCard 
                  project={project} 
                  onView={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;