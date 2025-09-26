import { motion } from 'framer-motion';
import { ChevronDown, Play, Pause, ArrowLeft, Heart, SkipBack, SkipForward, Minus, Volume2, Upload, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Lyrics = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime] = useState(450); // 7:30 in seconds
  const lyricsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= totalTime) {
            setIsPlaying(false);
            return totalTime;
          }
          return newTime;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, totalTime]);

  // Auto-scroll lyrics
  useEffect(() => {
    if (lyricsRef.current && isPlaying) {
      const scrollProgress = currentTime / totalTime;
      const maxScroll = lyricsRef.current.scrollHeight - lyricsRef.current.clientHeight;
      const targetScroll = maxScroll * scrollProgress;
      
      lyricsRef.current.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [currentTime, totalTime, isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipBack = () => {
    setCurrentTime(Math.max(0, currentTime - 30));
  };

  const handleSkipForward = () => {
    setCurrentTime(Math.min(totalTime, currentTime + 30));
  };

  return (
    <div className="min-h-screen bg-[#1E3A8A]">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-white text-sm">
        <div className="text-white font-medium">11:34</div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20 rounded-full"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20 rounded-full"
            onClick={() => navigate('/')}
          >
            <ChevronDown className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Song Header */}
      <div className="px-4 py-2">
        <h1 className="text-white font-semibold text-lg">About Me</h1>
        <p className="text-white/80 text-sm">Prachi Kotadia</p>
      </div>

      {/* Lyrics Content */}
      <div className="px-4 py-6 pb-32">
        <div 
          ref={lyricsRef}
          className="space-y-6 text-white max-h-[60vh] overflow-y-auto scrollbar-hide"
        >
          <div className="text-2xl font-bold leading-relaxed">
            <div>I'm a passionate Software Engineer</div>
            <div>with a Master's in Computer Science</div>
            <div>from Illinois Institute of Technology</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Currently working as a Software Engineer</div>
            <div>at GroupedIn in New Jersey</div>
            <div>My journey in technology spans</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Across multiple domains including</div>
            <div>web development, mobile applications</div>
            <div>AI/ML, and embedded systems</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>With expertise in React, Flutter</div>
            <div>Python, C++, and cloud technologies</div>
            <div>I've built scalable applications</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Serving thousands of users</div>
            <div>I'm particularly passionate about</div>
            <div>AI-driven solutions</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Having integrated NLP and machine learning</div>
            <div>models to enhance user experiences</div>
            <div>and boost engagement by 25%</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>My work involves full-stack development</div>
            <div>from designing e-commerce systems</div>
            <div>handling 500+ daily transactions</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>To building high-performance</div>
            <div>Linux kernel modules that reduce</div>
            <div>latency by 15%</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>I'm also experienced in IoT integration</div>
            <div>real-time data processing</div>
            <div>and automated CI/CD pipelines</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Beyond technical skills</div>
            <div>I'm a continuous learner who stays</div>
            <div>updated with the latest technologies</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>I believe in the power of</div>
            <div>open-source collaboration</div>
            <div>and have contributed to various projects</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>When I'm not coding</div>
            <div>you'll find me exploring new technologies</div>
            <div>contributing to research</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>or curating the perfect coding</div>
            <div>playlist on Spotify</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>I'm always excited to work on</div>
            <div>challenging problems, learn new technologies</div>
            <div>and contribute to innovative projects</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>that make a real impact</div>
            <div>Let's connect and build</div>
            <div>something amazing together!</div>
          </div>
        </div>
      </div>

      {/* Media Player Interface */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1E3A8A] px-4 py-4">
        {/* Progress Bar */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-white text-sm">{formatTime(currentTime)}</span>
          <div className="flex-1 h-1 bg-white/30 rounded-full">
            <div 
              className="h-1 bg-white rounded-full relative"
              style={{ width: `${(currentTime / totalTime) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-white text-sm">-{formatTime(totalTime - currentTime)}</span>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-8 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20 rounded-full"
          >
            <Heart className="w-6 h-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20 rounded-full"
            onClick={handleSkipBack}
          >
            <SkipBack className="w-6 h-6" />
          </Button>
          <Button 
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-black" />
            ) : (
              <Play className="w-8 h-8 text-black ml-1" />
            )}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20 rounded-full"
            onClick={handleSkipForward}
          >
            <SkipForward className="w-6 h-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20 rounded-full"
          >
            <Minus className="w-6 h-6" />
          </Button>
        </div>

        {/* Device and Options */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-green-500" />
            <span className="text-green-500 text-sm font-medium">LIVING ROOM</span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20 rounded-full"
            >
              <Upload className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20 rounded-full"
            >
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;