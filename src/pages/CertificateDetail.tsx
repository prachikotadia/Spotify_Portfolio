import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, Play, Pause, Heart, Share2, ExternalLink, Award, Calendar, Download, Shuffle, SkipBack, SkipForward, Repeat, List, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { mockCertificates } from '@/data/mockData';

const CertificateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [certificate, setCertificate] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const foundCertificate = mockCertificates.find(c => c.id === id);
    setCertificate(foundCertificate || null);
  }, [id]);

  if (!certificate) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Certificate Not Found</h1>
          <Button onClick={() => navigate('/library')}>Go Back</Button>
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
          <p className="text-white/70 text-xs">PLAYING FROM CERTIFICATE</p>
          <h1 className="text-white font-bold text-lg">{certificate.title}</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
          <Share2 className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Certificate Image - Large Square */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center px-6 mb-8"
      >
        <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Certificate Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-6 mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{certificate.title}</h2>
            <p className="text-white/70">{certificate.issuer}</p>
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
            <div className="w-1/4 h-full bg-white rounded-full"></div>
          </div>
          <span className="text-white/70 text-sm">2:30</span>
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
            <span className="text-sm font-medium">CERTIFIED</span>
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

      {/* Certificate Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-6 mb-8"
      >
        <h3 className="text-xl font-bold text-white mb-4">About this certificate</h3>
        <p className="text-white/80 leading-relaxed mb-6">{certificate.longDescription}</p>
        
        {/* Certificate Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-[#181818] border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-green-500" />
                <h4 className="text-lg font-semibold text-white">Issuer</h4>
              </div>
              <p className="text-white/80">{certificate.issuer}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#181818] border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-green-500" />
                <h4 className="text-lg font-semibold text-white">Date</h4>
              </div>
              <p className="text-white/80">{certificate.date}</p>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Skills Covered</h4>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certificate Links */}
        <div className="flex gap-4">
          {certificate.link && (
            <Button
              onClick={() => window.open(certificate.link, '_blank')}
              className="bg-white text-black hover:bg-white/90 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Credential
            </Button>
          )}
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificateDetail;
