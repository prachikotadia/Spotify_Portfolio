import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Grid3X3, List, ArrowUpDown, Search, Play, Heart, MoreHorizontal, Code, Award, BookOpen, ArrowLeft, Shuffle, Repeat, SkipBack, SkipForward, Volume2, Share2, Clock, Star, Users, Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import { mockProjects, mockCertificates, mockResearchPapers } from '@/data/mockData';
import type { Project } from '@/data/mockData';
import SpotifyLogo from '@/components/SpotifyLogo';

const Library = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates' | 'research'>('projects');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  // Handle URL parameters to set active tab
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['projects', 'certificates', 'research'].includes(tab)) {
      setActiveTab(tab as 'projects' | 'certificates' | 'research');
    }
  }, [searchParams]);

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

  const getItemType = (item: any) => {
    if (activeTab === 'projects') return 'Project';
    if (activeTab === 'certificates') return 'Certificate';
    if (activeTab === 'research') return 'Research Paper';
    return 'Item';
  };

  const getItemDescription = (item: any) => {
    if (activeTab === 'projects') return item.description;
    if (activeTab === 'certificates') return item.issuer;
    if (activeTab === 'research') return item.authors;
    return '';
  };

  const getItemTechStack = (item: any) => {
    if (activeTab === 'projects') return item.techStack;
    if (activeTab === 'certificates') return [item.issuer, item.date];
    if (activeTab === 'research') return [item.journal, item.year];
    return [];
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'projects': return 'My Projects';
      case 'certificates': return 'My Certificates';
      case 'research': return 'My Research';
      default: return 'My Library';
    }
  };

  const getTabDescription = () => {
    switch (activeTab) {
      case 'projects': return 'Software development projects and applications';
      case 'certificates': return 'Professional certifications and achievements';
      case 'research': return 'Research papers and academic publications';
      default: return 'Your personal collection';
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] pb-32">
      {/* Header with Gradient Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/20 to-transparent"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-12 pb-6 sm:pb-8 max-w-7xl mx-auto">
          {/* Navigation */}
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="w-8 h-8 text-white hover:bg-white/10 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <SpotifyLogo size="sm" />
          </div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
              <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-2xl flex items-center justify-center flex-shrink-0">
                {activeTab === 'projects' && <Code className="w-16 h-16 sm:w-24 sm:h-24 text-white" />}
                {activeTab === 'certificates' && <Award className="w-16 h-16 sm:w-24 sm:h-24 text-white" />}
                {activeTab === 'research' && <BookOpen className="w-16 h-16 sm:w-24 sm:h-24 text-white" />}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs sm:text-sm text-gray-300 mb-2">PLAYLIST</p>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">{getTabTitle()}</h1>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{getTabDescription()}</p>
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                  <span>{filteredData.length} items</span>
                  <span>•</span>
                  <span>Prachi Kotadia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Play Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-bold rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button variant="ghost" size="icon" className="w-10 h-10 sm:w-12 sm:h-12 text-white hover:bg-white/10 rounded-full">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="w-10 h-10 sm:w-12 sm:h-12 text-white hover:bg-white/10 rounded-full">
              <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-4 sm:mb-6">
        <div className="flex flex-col gap-4 mb-4 sm:mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search in your library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#181818] border-gray-600 text-white placeholder-gray-400 h-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`whitespace-nowrap text-xs sm:text-sm flex items-center gap-2 ${
                    activeTab === tab.id 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'border-gray-600 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content List - Spotify Style */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6">
        <div className="bg-[#181818] rounded-lg overflow-hidden">
          {/* Header Row - Hidden on mobile */}
          <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-3 text-gray-400 text-sm border-b border-gray-700">
            <div className="col-span-1">#</div>
            <div className="col-span-5">TITLE</div>
            <div className="col-span-2">TYPE</div>
            <div className="col-span-2">TECH STACK</div>
            <div className="col-span-1">DATE</div>
            <div className="col-span-1">ACTIONS</div>
          </div>

          {/* Item Rows */}
          {filteredData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-4 py-3 hover:bg-[#282828] group cursor-pointer border-b border-gray-800 last:border-b-0"
              onClick={() => handleItemClick(item)}
            >
              {/* Mobile Layout */}
              <div className="sm:hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded overflow-hidden bg-gradient-to-br from-green-500 to-green-700 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm truncate group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs truncate">
                      {getItemType(item)}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 text-white hover:bg-white/10 rounded-full"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date || '2024'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>Featured</span>
                  </div>
                </div>
                {getItemTechStack(item).length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {getItemTechStack(item).slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:contents">
                <div className="col-span-1 flex items-center justify-center">
                  <span className="text-gray-400 group-hover:hidden">{index + 1}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 text-white hover:bg-white/10 rounded-full hidden group-hover:flex"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
                <div className="col-span-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded overflow-hidden bg-gradient-to-br from-green-500 to-green-700 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-medium truncate group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm truncate">
                      {getItemDescription(item)}
                    </p>
                  </div>
                </div>
                <div className="col-span-2 flex items-center">
                  <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                    {getItemType(item)}
                  </Badge>
                </div>
                <div className="col-span-2 flex items-center text-gray-400 text-sm">
                  <span className="truncate">
                    {getItemTechStack(item).slice(0, 2).join(', ')}
                  </span>
                </div>
                <div className="col-span-1 flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date || item.year || '2024'}
                </div>
                <div className="col-span-1 flex items-center gap-1 flex-wrap">
                  {activeTab === 'certificates' && (item as any).link && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-20 h-5 text-xs bg-green-500/20 border-green-400/30 text-green-300 hover:bg-green-500/30 hover:border-green-400/50 hover:text-green-200 transition-all duration-200 flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open((item as any).link, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      Credentials
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="w-6 h-6 text-white hover:bg-white/10 rounded-full flex-shrink-0">
                    <Heart className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-6 h-6 text-white hover:bg-white/10 rounded-full flex-shrink-0">
                    <MoreHorizontal className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Items - Album Style */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8 sm:mt-12 mb-20">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Featured {activeTab === 'projects' ? 'Projects' : activeTab === 'certificates' ? 'Certificates' : 'Research'}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredData.slice(0, 6).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <div className="relative mb-2 sm:mb-3">
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-green-500 to-green-700 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {activeTab === 'certificates' && (item as any).link ? (
                  <div className="absolute bottom-4 right-4 p-2">
                    <Button
                      size="sm"
                      className="w-20 h-6 bg-green-500/20 border-green-400/30 text-green-300 hover:bg-green-500/30 hover:border-green-400/50 hover:text-green-200 text-xs rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open((item as any).link, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      Credentials
                    </Button>
                  </div>
                ) : (
                  <Button
                    size="icon"
                    className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-8 h-8 sm:w-12 sm:h-12 bg-green-500 hover:bg-green-600 text-black rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Play className="w-4 h-4 sm:w-6 sm:h-6" />
                  </Button>
                )}
              </div>
              <div>
                <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 truncate group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-2 hidden sm:block">
                  {getItemDescription(item)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Player - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-gray-700 p-2 sm:p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center">
              {activeTab === 'projects' && <Code className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
              {activeTab === 'certificates' && <Award className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
              {activeTab === 'research' && <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-medium text-sm">{getTabTitle()}</p>
              <p className="text-gray-400 text-xs">Prachi Kotadia</p>
            </div>
            <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:bg-white/10 rounded-full">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>

          <div className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-8">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:bg-white/10 rounded-full">
                <Shuffle className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:bg-white/10 rounded-full">
                <SkipBack className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                size="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black hover:bg-gray-200 rounded-full"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <SkipForward className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:bg-white/10 rounded-full">
                <SkipForward className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:bg-white/10 rounded-full">
                <Repeat className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="flex-1 h-1 bg-gray-600 rounded-full">
                <div className="h-full bg-white rounded-full w-0"></div>
              </div>
              <span className="text-xs text-gray-400">3:45</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/10 rounded-full">
              <Volume2 className="w-4 h-4" />
            </Button>
            <div className="w-20 h-1 bg-gray-600 rounded-full">
              <div className="h-full bg-white rounded-full w-3/4"></div>
            </div>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/10 rounded-full">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;