import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Star, Award, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SpotifyLogo from '@/components/SpotifyLogo';

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      name: 'Data Structures & Algorithms',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center',
      description: 'Covered microcontroller architecture, peripherals, and interfacing. Built hands-on projects with ARM-based and Arduino platforms.',
      duration: '4 months',
      level: 'Advanced',
      rating: 4.9,
      students: 600,
      category: 'Embedded Systems',
      skills: ['Microcontrollers', 'ARM', 'Arduino', 'Peripherals', 'Interfacing', 'Real-time Systems']
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="w-8 h-8 text-white hover:bg-white/10 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <SpotifyLogo size="sm" />
            <h1 className="text-lg sm:text-xl font-bold text-green-500">Courses</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">All Courses</h2>
          <p className="text-gray-400">Comprehensive academic courses and specialized training programs</p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#181818] border-gray-800 hover:bg-[#282828] transition-colors cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-green-500 to-green-700 flex-shrink-0">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-green-400 transition-colors">
                        {course.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                          {course.category}
                        </Badge>
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {course.skills.slice(0, 4).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        +{course.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
