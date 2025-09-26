import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Heart, MoreHorizontal, Award, Calendar, ExternalLink, Download, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Certificates = () => {
  const navigate = useNavigate();
  const [likedCertificates, setLikedCertificates] = useState<Set<string>>(new Set());

  const certificates = [
    {
      id: '1',
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: 'December 2024',
      description: 'Validates technical expertise in developing and maintaining applications on the AWS platform.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
      skills: ['AWS', 'Cloud Computing', 'Serverless', 'DevOps'],
      verificationUrl: 'https://aws.amazon.com/verification',
      status: 'Active'
    },
    {
      id: '2',
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'November 2023',
      description: 'Comprehensive certification covering React fundamentals, hooks, state management, and modern React patterns.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
      skills: ['React', 'JavaScript', 'JSX', 'Hooks'],
      verificationUrl: 'https://meta.com/verification',
      status: 'Active'
    },
    {
      id: '3',
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: 'October 2023',
      description: 'Complete full-stack development certification covering frontend, backend, and database technologies.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      verificationUrl: 'https://freecodecamp.org/verification',
      status: 'Active'
    },
    {
      id: '4',
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'September 2023',
      description: 'Advanced JavaScript certification focusing on algorithms, data structures, and problem-solving.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
      verificationUrl: 'https://freecodecamp.org/verification',
      status: 'Active'
    },
    {
      id: '5',
      title: 'Python for Data Science',
      issuer: 'Coursera',
      date: 'August 2023',
      description: 'Specialized certification in Python programming for data science and machine learning applications.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
      skills: ['Python', 'Data Science', 'Pandas', 'NumPy', 'Matplotlib'],
      verificationUrl: 'https://coursera.org/verification',
      status: 'Active'
    },
    {
      id: '6',
      title: 'Git and GitHub Fundamentals',
      issuer: 'GitHub',
      date: 'July 2023',
      description: 'Comprehensive certification in version control, Git workflows, and collaborative development.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      verificationUrl: 'https://github.com/verification',
      status: 'Active'
    }
  ];

  const toggleLike = (certificateId: string) => {
    setLikedCertificates(prev => {
      const newSet = new Set(prev);
      if (newSet.has(certificateId)) {
        newSet.delete(certificateId);
      } else {
        newSet.add(certificateId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-30 bg-[#121212]/95 backdrop-blur-xl border-b border-white/5"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10 rounded-full"
            onClick={() => navigate(-1)}
          >
            <MoreHorizontal className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-white">Certificates</h1>
          <div className="w-8"></div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-6 py-8"
      >
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Professional Certifications</h2>
            <p className="text-yellow-100 text-lg mb-4">Industry-recognized certifications and achievements</p>
            <div className="flex items-center gap-4 text-yellow-100 text-sm">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>{certificates.length} Certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>All Active</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <Card className="bg-[#181818] border-white/10 hover:bg-[#282828] transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute bottom-2 right-2 w-10 h-10 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                  
                  {/* Like Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(certificate.id);
                    }}
                  >
                    <Heart className={`w-4 h-4 ${likedCertificates.has(certificate.id) ? 'text-red-500 fill-current' : 'text-white'}`} />
                  </Button>

                  {/* Status Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-green-500 text-black text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {certificate.status}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">{certificate.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{certificate.issuer}</p>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{certificate.description}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-white/10 text-white">
                        {skill}
                      </Badge>
                    ))}
                    {certificate.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-white/10 text-white">
                        +{certificate.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Certificate Links */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-white/30 text-white hover:bg-white/10 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(certificate.verificationUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Verify
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-green-500 text-black hover:bg-green-400 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Download certificate logic
                      }}
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  </div>
                  
                  {/* Certificate Stats */}
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{certificate.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certificates;
