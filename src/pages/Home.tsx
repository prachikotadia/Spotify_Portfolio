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
      {/* Hero Section - Spotify Style */}
      <div className="relative overflow-hidden">
        {/* Gradient Background with Organic Shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-purple-600/10 to-blue-600/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative pt-12 pb-8 px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              {/* Large Profile Image with Spotify-style frame */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">PK</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 text-black ml-0.5" />
                </div>
              </motion.div>
              
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-muted-foreground mb-1"
                >
                  Good morning,
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl font-bold mb-2"
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
              <Button variant="ghost" size="icon" className="glass hover:bg-white/20">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="glass hover:bg-white/20">
                <Clock className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Spotify-style Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 mb-8"
          >
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full">
              <Play className="w-4 h-4 mr-2" />
              View Portfolio
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full">
              <Heart className="w-4 h-4 mr-2" />
              Follow
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="px-6">
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

        {/* Categories - Enhanced Spotify Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <SpotifyLogo size="md" />
              <h2 className="text-2xl font-bold">Browse Categories</h2>
            </div>
            <Button variant="ghost" className="text-muted-foreground hover:text-white">
              Show all
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${category.gradient} cursor-pointer group`}
              >
                {/* Organic shape overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg group-hover:text-white/90 transition-colors">
                    {category.name}
                  </h3>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2">
                      <Play className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
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
          <div className="space-y-3">
            {workExperience.slice(0, 3).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="glass-card p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm group-hover:text-green-400 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">
                      {exp.company} • {exp.duration}
                    </p>
                  </div>
                  <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity bg-green-500 hover:bg-green-600 text-black rounded-full p-2">
                    <Play className="w-4 h-4" />
                  </Button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts.slice(0, 2).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="glass-card p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm group-hover:text-purple-400 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
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
                className="glass-card p-3 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-green-400 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < skill.level ? 'text-yellow-400 fill-current' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="glass-card p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {awards.slice(0, 4).map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                className="glass-card p-3 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-yellow-400 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {award.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;