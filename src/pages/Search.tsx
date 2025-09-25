import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, Clock, TrendingUp, Star, Code, Briefcase, GraduationCap, Award, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  mockProjects, 
  workExperience, 
  education, 
  skills, 
  blogPosts, 
  testimonials, 
  awards, 
  sideProjects 
} from '@/data/mockData';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const recentSearches = [
    'React projects',
    'Full stack development',
    'AI/ML projects',
    'Mobile applications',
    'Web design',
    'Backend development'
  ];

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { projects: [], experiences: [], blogs: [], skills: [], awards: [] };

    const query = searchQuery.toLowerCase();
    
    return {
      projects: mockProjects.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some(tech => tech.toLowerCase().includes(query))
      ),
      experiences: workExperience.filter(exp => 
        exp.company.toLowerCase().includes(query) ||
        exp.position.toLowerCase().includes(query) ||
        exp.techStack.some(tech => tech.toLowerCase().includes(query))
      ),
      blogs: blogPosts.filter(blog => 
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.tags.some(tag => tag.toLowerCase().includes(query))
      ),
      skills: skills.filter(skill => 
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query)
      ),
      awards: awards.filter(award => 
        award.title.toLowerCase().includes(query) ||
        award.organization.toLowerCase().includes(query) ||
        award.category.toLowerCase().includes(query)
      )
    };
  }, [searchQuery]);

  const categories = [
    { name: 'Projects', icon: Code, color: 'from-purple-500 to-pink-500', count: mockProjects.length },
    { name: 'Experience', icon: Briefcase, color: 'from-blue-500 to-cyan-500', count: workExperience.length },
    { name: 'Education', icon: GraduationCap, color: 'from-green-500 to-emerald-500', count: education.length },
    { name: 'Skills', icon: Star, color: 'from-orange-500 to-red-500', count: skills.length },
    { name: 'Blog', icon: TrendingUp, color: 'from-indigo-500 to-purple-500', count: blogPosts.length },
    { name: 'Awards', icon: Award, color: 'from-yellow-500 to-orange-500', count: awards.length },
    { name: 'Testimonials', icon: Heart, color: 'from-pink-500 to-rose-500', count: testimonials.length },
    { name: 'Side Projects', icon: Code, color: 'from-teal-500 to-green-500', count: sideProjects.length },
  ];

  const filters = [
    { id: 'all', label: 'All', count: Object.values(searchResults).flat().length },
    { id: 'projects', label: 'Projects', count: searchResults.projects.length },
    { id: 'experience', label: 'Experience', count: searchResults.experiences.length },
    { id: 'blog', label: 'Blog', count: searchResults.blogs.length },
    { id: 'skills', label: 'Skills', count: searchResults.skills.length },
    { id: 'awards', label: 'Awards', count: searchResults.awards.length },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && !searchHistory.includes(query)) {
      setSearchHistory(prev => [query, ...prev.slice(0, 4)]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 pb-24">
      {/* Enhanced Spotify-style Header */}
      <div className="sticky top-0 z-30 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="px-6 pt-12 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <SearchIcon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Search
                </h1>
                <p className="text-muted-foreground text-sm">Discover amazing projects and content</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="glass hover:bg-white/20">
                <TrendingUp className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="glass hover:bg-white/20">
                <Clock className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative mb-6"
          >
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="What do you want to find?"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 pr-12 py-4 text-lg bg-white/10 border-white/20 rounded-xl backdrop-blur-sm focus:bg-white/20 transition-all duration-300"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </Button>
            )}
          </motion.div>
        </div>
      </div>

      <div className="px-6">
        <AnimatePresence mode="wait">
          {!searchQuery ? (
            <motion.div
              key="browse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
            >
              {/* Recent Searches */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Recent searches
                </h2>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <motion.div
                      key={search}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      onClick={() => handleSearch(search)}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 cursor-pointer transition-all duration-300 group"
                    >
                      <SearchIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="group-hover:text-white transition-colors">{search}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Browse All Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Browse all
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className={`bg-gradient-to-br ${category.color} rounded-xl p-6 h-32 relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 group`}
                    >
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-white font-bold text-lg mb-2 group-hover:scale-105 transition-transform">
                            {category.name}
                          </h3>
                          <p className="text-white/80 text-sm">{category.count} items</p>
                        </div>
                        <category.icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors" />
                      </div>
                      <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-white/20 rounded-full group-hover:scale-110 transition-transform" />
                      <div className="absolute -right-2 -top-2 w-12 h-12 bg-white/10 rounded-full group-hover:scale-110 transition-transform" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Search Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2"
              >
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className="rounded-full"
                  >
                    {filter.label}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {filter.count}
                    </Badge>
                  </Button>
                ))}
              </motion.div>

              {/* Search Results */}
              <div className="space-y-6">
                {/* Projects Results */}
                {searchResults.projects.length > 0 && (activeFilter === 'all' || activeFilter === 'projects') && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      Projects ({searchResults.projects.length})
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {searchResults.projects.map((project) => (
                        <Card key={project.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                          <CardContent className="pt-4">
                            <h4 className="font-semibold mb-2">{project.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {project.techStack.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Experience Results */}
                {searchResults.experiences.length > 0 && (activeFilter === 'all' || activeFilter === 'experience') && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Experience ({searchResults.experiences.length})
                    </h3>
                    <div className="space-y-3">
                      {searchResults.experiences.map((exp) => (
                        <Card key={exp.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                          <CardContent className="pt-4">
                            <h4 className="font-semibold">{exp.position}</h4>
                            <p className="text-primary font-medium">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">{exp.duration}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Blog Results */}
                {searchResults.blogs.length > 0 && (activeFilter === 'all' || activeFilter === 'blog') && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Blog Posts ({searchResults.blogs.length})
                    </h3>
                    <div className="space-y-3">
                      {searchResults.blogs.map((blog) => (
                        <Card key={blog.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                          <CardContent className="pt-4">
                            <h4 className="font-semibold mb-2">{blog.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{blog.excerpt}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{blog.readTime}</span>
                              <span>{new Date(blog.date).toLocaleDateString()}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Skills Results */}
                {searchResults.skills.length > 0 && (activeFilter === 'all' || activeFilter === 'skills') && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Skills ({searchResults.skills.length})
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {searchResults.skills.map((skill) => (
                        <Badge key={skill.id} variant="secondary" className="text-sm">
                          {skill.name} ({skill.category})
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Awards Results */}
                {searchResults.awards.length > 0 && (activeFilter === 'all' || activeFilter === 'awards') && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Awards ({searchResults.awards.length})
                    </h3>
                    <div className="space-y-3">
                      {searchResults.awards.map((award) => (
                        <Card key={award.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                          <CardContent className="pt-4">
                            <h4 className="font-semibold">{award.title}</h4>
                            <p className="text-primary font-medium">{award.organization}</p>
                            <p className="text-sm text-muted-foreground">{award.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* No Results */}
                {Object.values(searchResults).flat().length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground">Try searching for something else</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Search;