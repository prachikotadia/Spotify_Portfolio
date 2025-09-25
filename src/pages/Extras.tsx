import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, ExternalLink, Code, Filter, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sideProjects } from '@/data/mockData';
import type { SideProject } from '@/data/mockData';

const Extras = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const categories = Array.from(new Set(sideProjects.map(project => project.category)));
  const statuses = ['active', 'completed', 'archived'];

  const filteredProjects = sideProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    const matchesStatus = !selectedStatus || project.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500 bg-green-500/10';
      case 'completed': return 'text-blue-500 bg-blue-500/10';
      case 'archived': return 'text-gray-500 bg-gray-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="hero-gradient pt-12 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Side Projects & Extras</h1>
          <p className="text-xl text-muted-foreground">
            Personal projects, experiments, and passion work
          </p>
        </motion.div>
      </div>

      <div className="px-6">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={selectedCategory === '' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('')}
                    size="sm"
                  >
                    All Categories
                  </Button>
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Filter className="w-4 h-4" />
                  Filter by status:
                </span>
                {statuses.map(status => (
                  <Badge
                    key={status}
                    variant={selectedStatus === status ? 'default' : 'outline'}
                    className="cursor-pointer hover:bg-primary/10 capitalize"
                    onClick={() => setSelectedStatus(selectedStatus === status ? '' : status)}
                  >
                    {status}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Project Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{sideProjects.length}</div>
                  <div className="text-sm text-muted-foreground">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {sideProjects.filter(p => p.status === 'active').length}
                  </div>
                  <div className="text-sm text-muted-foreground">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {sideProjects.filter(p => p.status === 'completed').length}
                  </div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{categories.length}</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <Badge variant="outline" className="text-xs mb-3">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Passion Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Passion Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Open Source Contributions',
                description: 'Contributing to popular open source projects and maintaining my own libraries',
                icon: Github,
                color: 'from-green-500 to-teal-500',
                stats: '50+ contributions'
              },
              {
                title: 'Technical Writing',
                description: 'Writing technical articles and tutorials to share knowledge with the community',
                icon: Code,
                color: 'from-blue-500 to-purple-500',
                stats: '20+ articles'
              },
              {
                title: 'Community Building',
                description: 'Organizing meetups and mentoring developers in the local tech community',
                icon: Heart,
                color: 'from-pink-500 to-red-500',
                stats: '100+ developers helped'
              },
              {
                title: 'Experiments & Prototypes',
                description: 'Building experimental projects to explore new technologies and ideas',
                icon: Code,
                color: 'from-orange-500 to-yellow-500',
                stats: '15+ experiments'
              }
            ].map((passion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br ${passion.color}/10 border-${passion.color.split('-')[1]}-500/20 hover:shadow-lg transition-shadow`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${passion.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <passion.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{passion.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{passion.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {passion.stats}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Interested in Collaborating?</h2>
              <p className="text-muted-foreground mb-6">
                I'm always open to new ideas and collaborations. Let's build something amazing together!
              </p>
              <div className="flex gap-3 justify-center">
                <Button>
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
                <Button variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  Start a Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Extras;
