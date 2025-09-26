import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, Clock, TrendingUp, Star, Code, Briefcase, GraduationCap, Award, Heart, Mic, Camera } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SpotifyLogo from '@/components/SpotifyLogo';
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
    <div className="min-h-screen bg-[#121212] pb-20">
      {/* Professional Search Header */}
      <div className="sticky top-0 z-30 bg-[#121212]/95 backdrop-blur-xl border-b border-white/5">
        <div className="px-4 py-6">
          {/* Search Title with Profile */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-green-500/30">
                <img
                  src="/src/assets/2025-09-25_21-10-04.jpg"
                  alt="Prachi Kotadia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Search</h1>
                <p className="text-white/70 text-sm">Find your next project</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="w-10 h-10 border border-white/20 rounded-full hover:bg-white/10">
                <Mic className="w-5 h-5 text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 border border-white/20 rounded-full hover:bg-white/10">
                <Camera className="w-5 h-5 text-white" />
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
            className="relative mb-8"
        >
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
              placeholder="Search projects, skills, or experiences..."
            value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 pr-12 py-4 text-lg bg-[#181818] border-none rounded-xl focus:bg-[#282828] focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-white placeholder-gray-400"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white/10 rounded-lg"
            >
                <X className="w-5 h-5 text-white" />
            </Button>
          )}
        </motion.div>
        </div>
      </div>

      <div className="px-4">
        <AnimatePresence mode="wait">
          {!searchQuery ? (
            <motion.div
              key="browse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
            >
              {/* Professional Profile Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-[#1DB954] to-[#1ed760] rounded-2xl p-8 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-green-100 text-sm font-medium mb-2">Popular New Project</p>
                      <h2 className="text-3xl font-bold text-white mb-2">Full Stack Developer</h2>
                      <p className="text-green-100 text-lg">Prachi Kotadia</p>
                    </div>
                    
                    {/* Professional Profile Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                        <img
                          src="/src/assets/2025-09-25_21-10-04.jpg"
                          alt="Prachi Kotadia"
                          className="w-full h-full object-cover"
                          style={{
                            filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Professional Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Professional Skills</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Frontend Development', gradient: 'from-green-500 to-green-700', icon: '⚛️' },
                    { name: 'Backend Systems', gradient: 'from-purple-500 to-pink-500', icon: '🔧' },
                    { name: 'Full Stack Solutions', gradient: 'from-blue-500 to-cyan-500', icon: '🚀' },
                    { name: 'Mobile Applications', gradient: 'from-orange-500 to-red-500', icon: '📱' }
                  ].map((skill, index) => (
                  <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`bg-gradient-to-br ${skill.gradient} rounded-2xl p-6 h-28 relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 group`}
                    >
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <h3 className="text-white font-bold text-base">{skill.name}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <span className="text-white/80 text-sm">Expert Level</span>
                        </div>
                      </div>
                      <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform" />
                      <div className="absolute -right-1 -top-1 w-10 h-10 bg-white/10 rounded-full blur-lg group-hover:scale-110 transition-transform" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

              {/* Professional Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Browse All</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Portfolio Projects', gradient: 'from-blue-500 to-cyan-500', icon: '💼', count: '12+' },
                    { name: 'Technical Skills', gradient: 'from-purple-500 to-pink-500', icon: '⚡', count: '15+' },
                    { name: 'Certifications', gradient: 'from-blue-600 to-blue-800', icon: '🏆', count: '8+' },
                    { name: 'Experience', gradient: 'from-red-600 to-red-800', icon: '📈', count: '5+' }
                  ].map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-6 h-28 relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 group`}
                    >
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{category.icon}</span>
                          <h3 className="text-white font-bold text-base">{category.name}</h3>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/80 text-sm">{category.count} items</span>
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        </div>
                      </div>
                      <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform" />
                      <div className="absolute -right-1 -top-1 w-10 h-10 bg-white/10 rounded-full blur-lg group-hover:scale-110 transition-transform" />
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