import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Play, Heart, MoreHorizontal, Shuffle, Repeat, SkipBack, SkipForward, Volume2, Download, Share2, Clock, Star, Users, BookOpen, Award, TrendingUp, Calendar, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import SpotifyLogo from '@/components/SpotifyLogo';

const Courses = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const courses = [
    {
      id: 1,
      name: 'Data Structures & Algorithms',
      image: '/assets/data-structures-algorithms.png',
      description: 'Mastered arrays, trees, graphs, and sorting/searching algorithms. Built problem-solving skills essential for efficient coding, optimization, and competitive programming.',
      duration: '4 months',
      level: 'Advanced',
      rating: 4.8,
      students: 1200,
      category: 'Programming',
      skills: ['Arrays', 'Trees', 'Graphs', 'Sorting', 'Searching', 'Optimization']
    },
    {
      id: 2,
      name: 'Mobile Application Development',
      image: '/assets/mobile-app-development.png',
      description: 'Explored tools, frameworks, and design principles for developing mobile applications. Built intuitive, responsive, and cross-platform apps with real-world use cases.',
      duration: '6 months',
      level: 'Intermediate',
      rating: 4.7,
      students: 950,
      category: 'Mobile Development',
      skills: ['Flutter', 'React Native', 'iOS', 'Android', 'Cross-platform', 'UI/UX']
    },
    {
      id: 3,
      name: 'Advanced Database Organization',
      image: '/assets/advanced-database.png',
      description: 'Focused on indexing strategies, query optimization, and data modeling. Learned advanced techniques for efficient storage and retrieval of large datasets.',
      duration: '3 months',
      level: 'Advanced',
      rating: 4.9,
      students: 800,
      category: 'Database',
      skills: ['SQL', 'Indexing', 'Query Optimization', 'Data Modeling', 'Performance', 'Scalability']
    },
    {
      id: 4,
      name: 'Software Project Management',
      image: '/assets/software-project-management.png',
      description: 'Studied methodologies like Agile and Waterfall. Gained knowledge of project scheduling, resource allocation, and effective team collaboration to deliver successful projects.',
      duration: '2 months',
      level: 'Beginner',
      rating: 4.6,
      students: 1100,
      category: 'Management',
      skills: ['Agile', 'Waterfall', 'Scheduling', 'Resource Allocation', 'Team Collaboration', 'Leadership']
    },
    {
      id: 5,
      name: 'Big Data Technology',
      image: '/assets/big-data-technology.png',
      description: 'Worked with distributed systems and big data frameworks to process large-scale datasets. Covered topics like real-time data pipelines, parallel computation, and analytics.',
      duration: '5 months',
      level: 'Advanced',
      rating: 4.8,
      students: 700,
      category: 'Data Science',
      skills: ['Hadoop', 'Spark', 'Kafka', 'Data Pipelines', 'Analytics', 'Distributed Systems']
    },
    {
      id: 6,
      name: 'Computer Networks',
      image: '/assets/computer-networks.png',
      description: 'Explored OSI and TCP/IP models, data transmission, and routing protocols. Understood network security, reliability, and real-world communication systems.',
      duration: '4 months',
      level: 'Intermediate',
      rating: 4.7,
      students: 900,
      category: 'Networking',
      skills: ['OSI Model', 'TCP/IP', 'Routing', 'Security', 'Protocols', 'Network Design']
    },
    {
      id: 7,
      name: 'Software Engineering',
      image: '/assets/software-engineering.png',
      description: 'Covered software development life cycle (SDLC), requirement analysis, testing methods, and design patterns. Learned to create scalable, maintainable, and robust applications.',
      duration: '6 months',
      level: 'Advanced',
      rating: 4.9,
      students: 1300,
      category: 'Software Development',
      skills: ['SDLC', 'Design Patterns', 'Testing', 'Architecture', 'Scalability', 'Maintainability']
    },
    {
      id: 8,
      name: 'Web Application Development',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop&crop=center',
      description: 'Designed and built modern, full-stack web applications with frontend and backend integration. Gained hands-on skills in authentication, APIs, and responsive UI.',
      duration: '5 months',
      level: 'Intermediate',
      rating: 4.8,
      students: 1500,
      category: 'Web Development',
      skills: ['React', 'Node.js', 'APIs', 'Authentication', 'Responsive Design', 'Full-stack']
    },
    {
      id: 9,
      name: 'Science of Programming',
      image: '/assets/science-of-programming.png',
      description: 'Studied programming paradigms, logic, and systematic approaches to writing clean, efficient, and reusable code.',
      duration: '3 months',
      level: 'Intermediate',
      rating: 4.6,
      students: 1000,
      category: 'Programming',
      skills: ['Paradigms', 'Logic', 'Clean Code', 'Efficiency', 'Reusability', 'Best Practices']
    },
    {
      id: 10,
      name: 'Data Preparation and Analysis',
      image: '/assets/data-preparation-analysis.png',
      description: 'Learned data cleaning, transformation, and statistical modeling. Developed skills in preparing raw data for visualization and decision-making.',
      duration: '4 months',
      level: 'Intermediate',
      rating: 4.7,
      students: 850,
      category: 'Data Analysis',
      skills: ['Data Cleaning', 'Transformation', 'Statistical Modeling', 'Visualization', 'Python', 'R']
    },
    {
      id: 11,
      name: 'Software Quality Management',
      image: '/assets/software-quality-management.png',
      description: 'Focused on software testing, defect prevention, and assurance strategies. Learned how to enforce quality standards throughout the SDLC.',
      duration: '3 months',
      level: 'Advanced',
      rating: 4.8,
      students: 750,
      category: 'Quality Assurance',
      skills: ['Testing', 'Defect Prevention', 'Quality Standards', 'Automation', 'CI/CD', 'Monitoring']
    },
    {
      id: 12,
      name: 'Embedded Systems Design',
      image: '/assets/embedded-systems.png',
      description: 'Covered microcontroller architecture, peripherals, and interfacing. Built hands-on projects with ARM-based and Arduino platforms.',
      duration: '4 months',
      level: 'Advanced',
      rating: 4.9,
      students: 600,
      category: 'Embedded Systems',
      skills: ['Microcontrollers', 'ARM', 'Arduino', 'Peripherals', 'Interfacing', 'Real-time Systems']
    }
  ];

  const categories = ['All', 'Programming', 'Mobile Development', 'Database', 'Management', 'Data Science', 'Networking', 'Software Development', 'Web Development', 'Quality Assurance', 'Embedded Systems'];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                <BookOpen className="w-16 h-16 sm:w-24 sm:h-24 text-white" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs sm:text-sm text-gray-300 mb-2">PLAYLIST</p>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">Academic Courses</h1>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Comprehensive academic courses and specialized training programs</p>
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                  <span>12 courses</span>
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
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#181818] border-gray-600 text-white placeholder-gray-400 h-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap text-xs sm:text-sm ${
                  selectedCategory === category 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'border-gray-600 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses List - Spotify Style */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6">
        <div className="bg-[#181818] rounded-lg overflow-hidden">
          {/* Header Row - Hidden on mobile */}
          <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-3 text-gray-400 text-sm border-b border-gray-700">
            <div className="col-span-1">#</div>
            <div className="col-span-5">TITLE</div>
            <div className="col-span-2">CATEGORY</div>
            <div className="col-span-2">DURATION</div>
            <div className="col-span-1">RATING</div>
            <div className="col-span-1">STUDENTS</div>
          </div>

          {/* Course Rows */}
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-4 py-3 hover:bg-[#282828] group cursor-pointer border-b border-gray-800 last:border-b-0"
            >
              {/* Mobile Layout */}
              <div className="sm:hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded overflow-hidden bg-gradient-to-br from-green-500 to-green-700 flex-shrink-0">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm truncate group-hover:text-green-400 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-gray-400 text-xs truncate">{course.description}</p>
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
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{course.students}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                    {course.category}
                  </Badge>
                </div>
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
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-medium truncate group-hover:text-green-400 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-gray-400 text-sm truncate">{course.description}</p>
                  </div>
                </div>
                <div className="col-span-2 flex items-center">
                  <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                    {course.category}
                  </Badge>
                </div>
                <div className="col-span-2 flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="col-span-1 flex items-center text-gray-400 text-sm">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  {course.rating}
                </div>
                <div className="col-span-1 flex items-center text-gray-400 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  {course.students}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Courses - Album Style */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8 sm:mt-12 mb-20">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Featured Courses</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {courses.slice(0, 6).map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-2 sm:mb-3">
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-green-500 to-green-700 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  size="icon"
                  className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-8 h-8 sm:w-12 sm:h-12 bg-green-500 hover:bg-green-600 text-black rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <Play className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>
              </div>
              <div>
                <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 truncate group-hover:text-green-400 transition-colors">
                  {course.name}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-2 hidden sm:block">
                  {course.description}
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
              <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-medium text-sm">Academic Courses</p>
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

export default Courses;
