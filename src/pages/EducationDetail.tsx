import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, Play, Pause, Heart, Share2, ExternalLink, GraduationCap, Building, MapPin, Clock, BookOpen, Award, Calendar, Shuffle, SkipBack, SkipForward, Repeat, List, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const EducationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [education, setEducation] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const educationData = {
    'masters': {
      id: 'masters',
      title: 'Master\'s in Computer Science',
      university: 'Illinois Institute of Technology',
      location: 'Chicago, IL, USA',
      duration: 'August 2023 - May 2025',
      image: '/src/assets/image copy.png',
      description: 'Advanced graduate program focusing on cutting-edge computer science concepts and practical applications.',
      longDescription: 'This comprehensive Master\'s program provides deep knowledge in computer science fundamentals, advanced algorithms, software engineering principles, and modern development practices. The curriculum emphasizes hands-on learning through projects, research opportunities, and industry collaborations.',
      courses: [
        'Mobile App Development',
        'Advanced Databases',
        'Software Engineering',
        'Science of Programming',
        'Data Structures & Algorithms',
        'Machine Learning',
        'Cloud Computing',
        'Computer Networks'
      ],
      skills: ['Mobile Development', 'Database Design', 'Software Engineering', 'Cloud Computing', 'Algorithms', 'Machine Learning'],
      website: 'https://www.iit.edu/',
      status: 'In Progress'
    },
    'bachelors': {
      id: 'bachelors',
      title: 'Bachelor of Technology',
      university: 'Charotar University of Science and Technology',
      location: 'Gujarat, India',
      duration: 'August 2019 - May 2023',
      image: '/src/assets/image.png',
      description: 'Comprehensive undergraduate program in Electronics and Communication Engineering.',
      longDescription: 'This rigorous undergraduate program provided a solid foundation in electronics, communication systems, signal processing, and embedded systems. The curriculum combined theoretical knowledge with extensive hands-on laboratory work, preparing students for careers in technology and engineering.',
      courses: [
        'Electronic Circuit Design',
        'Embedded Systems',
        'Signal Processing',
        'Communication Technologies',
        'Digital Electronics',
        'Microprocessors',
        'Control Systems',
        'VLSI Design'
      ],
      skills: ['Circuit Design', 'Embedded Systems', 'Signal Processing', 'Communication Tech', 'Digital Electronics', 'VLSI'],
      website: 'https://www.charusat.ac.in/',
      status: 'Completed'
    }
  };

  useEffect(() => {
    const foundEducation = educationData[id as keyof typeof educationData];
    setEducation(foundEducation || null);
  }, [id]);

  if (!education) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Education Not Found</h1>
          <Button onClick={() => navigate('/education')}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header - Playing From */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-4 z-10"
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/20 rounded-full"
          onClick={() => navigate(-1)}
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
        <div className="text-center">
          <p className="text-white/70 text-xs">PLAYING FROM EDUCATION</p>
          <h1 className="text-white font-bold text-lg">{education.title}</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
          <Share2 className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Education Image - Large Square */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center px-6 mb-8"
      >
        <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={education.image}
            alt={education.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Education Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-6 mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{education.title}</h2>
            <p className="text-white/70">{education.university}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsLiked(!isLiked)}
            className={`${isLiked ? 'text-red-500' : 'text-white/70'} hover:bg-white/10`}
          >
            <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-white/70 text-sm">0:00</span>
          <div className="flex-1 h-1 bg-white/20 rounded-full">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
          <span className="text-white/70 text-sm">3:45</span>
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
            <Shuffle className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
            <SkipBack className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-white text-black rounded-full hover:bg-white/90 flex items-center justify-center"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
            <SkipForward className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
            <Repeat className="w-6 h-6" />
          </Button>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-green-500">
            <Tv className="w-4 h-4" />
            <span className="text-sm font-medium">{education.status.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10">
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Education Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-6 mb-8"
      >
        <h3 className="text-xl font-bold text-white mb-4">About this program</h3>
        <p className="text-white/80 leading-relaxed mb-6">{education.longDescription}</p>
        
        {/* Education Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-[#181818] border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Building className="w-5 h-5 text-green-500" />
                <h4 className="text-lg font-semibold text-white">University</h4>
              </div>
              <p className="text-white/80">{education.university}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#181818] border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <h4 className="text-lg font-semibold text-white">Location</h4>
              </div>
              <p className="text-white/80">{education.location}</p>
            </CardContent>
          </Card>
        </div>

        {/* Duration */}
        <div className="mb-6">
          <Card className="bg-[#181818] border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-green-500" />
                <h4 className="text-lg font-semibold text-white">Duration</h4>
              </div>
              <p className="text-white/80">{education.duration}</p>
            </CardContent>
          </Card>
        </div>

        {/* Courses */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Key Courses</h4>
          <div className="flex flex-wrap gap-2">
            {education.courses.map((course, index) => (
              <Badge key={index} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                {course}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Skills Developed</h4>
          <div className="flex flex-wrap gap-2">
            {education.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Education Links */}
        <div className="flex gap-4">
          {education.website && (
            <Button
              onClick={() => window.open(education.website, '_blank')}
              className="bg-white text-black hover:bg-white/90 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Visit University Website
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationDetail;
