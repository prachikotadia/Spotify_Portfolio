import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Play, Pause, Shuffle, SkipBack, SkipForward, Repeat, Cast, Share, List, Calendar, MapPin, Building2, Award, Code, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { workExperience } from '@/data/mockData';

const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const experience = workExperience.find(exp => exp.id === id);

  if (!experience) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
          <Button onClick={() => navigate('/experience')}>
            Back to Experience
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/experience')}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-white truncate max-w-xs">
            {experience.position}
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <Share className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Experience Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="w-full h-80 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
            <div className="text-center text-white">
              <Building2 className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl font-bold">{experience.company}</h2>
              <p className="text-lg opacity-80">{experience.position}</p>
            </div>
          </div>
        </motion.div>

        {/* Experience Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{experience.position}</h1>
              <p className="text-xl text-gray-300">{experience.company}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLiked(!isLiked)}
              className={`text-white hover:bg-white/10 ${isLiked ? 'text-green-500' : ''}`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-1 mb-4">
            <div className="bg-green-500 h-1 rounded-full" style={{ width: '0%' }}></div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Shuffle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white text-black hover:bg-gray-200 w-12 h-12 rounded-full"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <SkipForward className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Repeat className="w-5 h-5" />
            </Button>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Cast className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Share className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <List className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* About the Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">About the Experience</h2>
          <p className="text-gray-300 leading-relaxed mb-6">{experience.description}</p>
          
          {/* Experience Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-300">Duration</span>
              </div>
              <p className="text-white">{experience.duration}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-300">Location</span>
              </div>
              <p className="text-white">{experience.location}</p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-green-500" />
              Key Achievements
            </h3>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-500" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-700 text-white hover:bg-gray-600">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-3">Company Information</h3>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-green-500" />
              <span className="text-white">{experience.company}</span>
            </div>
            <div className="mt-2">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-gray-600 hover:bg-gray-700"
                onClick={() => window.open('https://www.linkedin.com/company/groupedin', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Company
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
