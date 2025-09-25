import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Shuffle, Clock, Bell, Heart, Star, TrendingUp, Code, Briefcase, Award, MessageSquare, Plus, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import SpotifyLogo from '@/components/SpotifyLogo';
import { 
  featuredProjects, 
  recentProjects, 
  workExperience, 
  blogPosts, 
  testimonials, 
  awards,
  skills 
} from '@/data/mockData';
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
          <div className="flex items-center gap-4">
            {/* Spotify Logo */}
            <SpotifyLogo size="xl" animated={true} />
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
                        Prachi Kotadia
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground"
                      >
                        Full Stack Developer & Tech Enthusiast
                      </motion.p>
            </div>
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
            <h2 className="text-xl font-bold flex items-center gap-2">
              <SpotifyLogo size="sm" />
              Made for You
            </h2>
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
            <h2 className="text-xl font-bold flex items-center gap-2">
              <SpotifyLogo size="sm" />
              Recent Work
            </h2>
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

        {/* Recently Played - Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <SpotifyLogo size="sm" />
              Recently Played
            </h2>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              See All
            </Button>
          </div>
          <div className="space-y-2">
            {workExperience.slice(0, 3).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="spotify-card p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.duration}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Jump Back In - Blog Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <SpotifyLogo size="sm" />
              Jump Back In
            </h2>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              See All
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {blogPosts.slice(0, 4).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="spotify-card p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors mb-1">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{blog.readTime}</span>
                      <span>•</span>
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Made for You - Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <SpotifyLogo size="sm" />
              Made for You
            </h2>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              See All
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.slice(0, 8).map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.05 }}
                className="spotify-card p-3 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-muted-foreground">{skill.category}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < skill.level ? 'text-yellow-400 fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Your Top Mixes - Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <SpotifyLogo size="sm" />
              Your Top Mixes
            </h2>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              See All
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="spotify-card p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h3>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Access - Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <SpotifyLogo size="sm" />
              Quick Access
            </h2>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              See All
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {awards.slice(0, 6).map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.05 }}
                className="spotify-card p-3 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-white group-hover:text-primary transition-colors truncate">
                      {award.title}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">{award.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Create Playlist Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="mb-8"
        >
          <div className="spotify-card p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">
              Create New Project
            </h3>
            <p className="text-muted-foreground">
              Start building something amazing
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;