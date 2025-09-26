import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ExternalLink, Building, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Education = () => {
  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header Section */}
      <div className="pt-12 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block border-2 border-[#20B2AA] rounded-lg px-6 py-2 mb-4">
            <h1 className="text-3xl font-bold text-white">Education</h1>
          </div>
          <p className="text-gray-400 text-lg">
            My academic journey and qualifications.
          </p>
        </motion.div>
      </div>

      <div className="px-6">
        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Master's Degree Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-6"
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-xl font-bold text-white">Master's in Computer Science</h2>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-white">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">Illinois Institute of Technology</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Chicago, IL, USA</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">August 2023 - May 2025</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed mb-6">
                Coursework includes Mobile App Development, Advanced Databases, Software Engineering, and Science of Programming. Focused on full-stack systems and cloud-native solutions.
              </p>

              {/* Button */}
              <Button 
                variant="outline" 
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit University Website
              </Button>
            </div>
          </motion.div>

          {/* Bachelor's Degree Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-green-800 p-6"
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-xl font-bold text-white">Bachelor of Technology in Electronics and Communication</h2>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-white">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">Charotar University of Science and Technology</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">August 2019 - May 2023</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed mb-6">
                Gained comprehensive knowledge in electronic circuit design, embedded systems, signal processing, and communication technologies. Developed strong analytical and problem-solving skills through hands-on lab work, technical projects, and interdisciplinary coursework.
              </p>

              {/* Button */}
              <Button 
                variant="outline" 
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit University Website
              </Button>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Education;
