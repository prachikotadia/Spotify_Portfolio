import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Share2, MoreHorizontal, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import SpotifyLogo from '@/components/SpotifyLogo';

const Lyrics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/20 rounded-full"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-3">
          <SpotifyLogo size="sm" />
          <h1 className="text-xl font-bold text-white">Lyrics</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
            <Share2 className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Song Info */}
      <div className="px-4 py-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/Add_a_subheading__1_-removebg-preview-removebg-preview.png"
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">About Me</h1>
          <p className="text-lg text-gray-400">Prachi Kotadia</p>
        </motion.div>

        {/* Lyrics Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/5 rounded-xl p-8 text-left">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">About Me</h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a passionate Software Engineer with a Master's in Computer Science from Illinois Institute of Technology, 
                currently working as a Software Engineer at GroupedIn in New Jersey. My journey in technology spans 
                across multiple domains including web development, mobile applications, AI/ML, and embedded systems.
              </p>
              
              <p className="text-lg">
                With expertise in React, Flutter, Python, C++, and cloud technologies like AWS, I've built scalable 
                applications serving thousands of users. I'm particularly passionate about AI-driven solutions, 
                having integrated NLP and machine learning models to enhance user experiences and boost engagement by 25%.
              </p>
              
              <p className="text-lg">
                My work involves full-stack development, from designing e-commerce systems handling 500+ daily transactions 
                to building high-performance Linux kernel modules that reduce latency by 15%. I'm also experienced in 
                IoT integration, real-time data processing, and automated CI/CD pipelines.
              </p>
              
              <p className="text-lg">
                Beyond technical skills, I'm a continuous learner who stays updated with the latest technologies. 
                I believe in the power of open-source collaboration and have contributed to various projects. 
                When I'm not coding, you'll find me exploring new technologies, contributing to research, 
                or curating the perfect coding playlist on Spotify.
              </p>
              
              <p className="text-lg">
                I'm always excited to work on challenging problems, learn new technologies, and contribute to 
                innovative projects that make a real impact. Let's connect and build something amazing together!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Player Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-md mx-auto"
        >
          <div className="bg-white/5 rounded-xl p-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                <SkipBack className="w-5 h-5" />
              </Button>
              <Button className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full">
                <Play className="w-6 h-6 text-white ml-1" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                <SkipForward className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="flex-1 h-1 bg-gray-600 rounded-full">
                <div className="h-1 bg-green-500 rounded-full w-1/3"></div>
              </div>
              <span className="text-xs text-gray-400">3:45</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Lyrics;