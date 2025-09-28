import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, BookOpen, Clock, Star, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CourseDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: number;
    name: string;
    image: string;
    description: string;
    duration: string;
    level: string;
    rating: number;
    students: number;
    category: string;
    skills: string[];
    learned: string[];
    projects: string[];
    achievements: string[];
  } | null;
}

const CourseDetailModal = ({ isOpen, onClose, course }: CourseDetailModalProps) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-[#1a1a1a] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-green-600 to-green-800 p-6">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={onClose}
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{course.name}</h2>
                  <p className="text-green-100">{course.category}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Course Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#2a2a2a] rounded-lg p-3 text-center">
                  <Clock className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Duration</p>
                  <p className="text-white font-semibold">{course.duration}</p>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-3 text-center">
                  <Award className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Level</p>
                  <p className="text-white font-semibold">{course.level}</p>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-3 text-center">
                  <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Rating</p>
                  <p className="text-white font-semibold">{course.rating}/5</p>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-3 text-center">
                  <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Students</p>
                  <p className="text-white font-semibold">{course.students.toLocaleString()}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Course Overview</h3>
                <p className="text-gray-300 leading-relaxed">{course.description}</p>
              </div>

              {/* What I Learned */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-400" />
                  What I Learned
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.learned.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-[#2a2a2a] rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects & Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Projects</h3>
                  <div className="space-y-2">
                    {course.projects.map((project, index) => (
                      <div key={index} className="bg-[#2a2a2a] rounded-lg p-3">
                        <p className="text-gray-300 text-sm">{project}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Achievements</h3>
                  <div className="space-y-2">
                    {course.achievements.map((achievement, index) => (
                      <div key={index} className="bg-[#2a2a2a] rounded-lg p-3">
                        <p className="text-gray-300 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Skills Gained</h3>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-500/20 text-green-300 border-green-400/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#2a2a2a] px-6 py-4 flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={() => window.open('/courses', '_blank')}
                className="bg-green-600 hover:bg-green-700"
              >
                View All Courses
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseDetailModal;
