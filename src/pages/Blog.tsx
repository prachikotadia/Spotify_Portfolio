import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts } from '@/data/mockData';
import type { BlogPost } from '@/data/mockData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="hero-gradient pt-12 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Blog & Articles</h1>
          <p className="text-xl text-muted-foreground">
            My thoughts on technology, development, and industry trends
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
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={selectedTag === '' ? 'default' : 'outline'}
                    onClick={() => setSelectedTag('')}
                    size="sm"
                  >
                    All
                  </Button>
                  {allTags.slice(0, 4).map(tag => (
                    <Button
                      key={tag}
                      variant={selectedTag === tag ? 'default' : 'outline'}
                      onClick={() => setSelectedTag(tag)}
                      size="sm"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Tag Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Filter className="w-4 h-4" />
                  Filter by tags:
                </span>
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'outline'}
                    className="cursor-pointer hover:bg-primary/10"
                    onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-4xl">📝</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full">Read Article</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-2xl">📄</span>
                      </div>
                      <h3 className="font-bold mb-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to get notified about new articles and insights
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
