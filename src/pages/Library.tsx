import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Grid3X3, List, ArrowUpDown, Search, Play, Heart, MoreHorizontal, Code, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import SpotifyLogo from '@/components/SpotifyLogo';
import { mockProjects, mockCertificates, mockResearchPapers } from '@/data/mockData';
import type { Project } from '@/data/mockData';

const Library = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates' | 'research'>('projects');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'research', label: 'Research Papers', icon: BookOpen },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'projects':
        return mockProjects;
      case 'certificates':
        return mockCertificates;
      case 'research':
        return mockResearchPapers;
      default:
        return mockProjects;
    }
  };

  const filteredData = getCurrentData().filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleLike = (id: string) => {
    setLikedItems(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  const handleItemClick = (item: any) => {
    if (activeTab === 'projects') {
      navigate(`/project/${item.id}`);
    } else if (activeTab === 'certificates') {
      navigate(`/certificate/${item.id}`);
    } else if (activeTab === 'research') {
      navigate(`/research/${item.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-12 pb-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <SpotifyLogo size="sm" />
            <h1 className="text-3xl font-bold text-white">Your Library</h1>
          </motion.div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="text-white hover:bg-white/10"
            >
              {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid3X3 className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowUpDown className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-4"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Find in Your Library"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-[#181818] border-none rounded-lg text-white placeholder-gray-400 focus:bg-[#282828]"
          />
        </motion.div>

        {/* Main Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-2 mb-6"
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id as any)}
                className={`whitespace-nowrap rounded-full px-4 flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? 'bg-white text-black' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </Button>
            );
          })}
        </motion.div>
      </div>

      {/* Content List/Grid */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {viewMode === 'list' ? (
          <div className="space-y-2">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer group"
                onClick={() => handleItemClick(item)}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 truncate">
                    {activeTab === 'projects' && 'Project'}
                    {activeTab === 'certificates' && 'Certificate'}
                    {activeTab === 'research' && 'Research Paper'}
                    {item.techStack && ` • ${item.techStack.slice(0, 2).join(', ')}`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(item.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                  >
                    <Heart className={`w-4 h-4 ${likedItems.has(item.id) ? 'text-red-500 fill-current' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-all duration-300">
                  <div className="relative mb-4">
                    <div className="w-full aspect-square bg-gradient-to-br from-green-500 to-green-600 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-2 right-2 w-10 h-10 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item.id);
                      }}
                      className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className={`w-4 h-4 ${likedItems.has(item.id) ? 'text-red-500 fill-current' : 'text-white'}`} />
                    </Button>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    {activeTab === 'projects' && item.description}
                    {activeTab === 'certificates' && item.issuer}
                    {activeTab === 'research' && item.authors}
                  </p>
                  {item.techStack && (
                    <div className="flex flex-wrap gap-1">
                      {item.techStack.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-white/10 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;