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
  const [readProgress, setReadProgress] = useState(0);
  const lyricsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Human-like speech with natural pauses and "umm" sounds
  const startSpeech = () => {
    if ('speechSynthesis' in window) {
      const humanLikeText = `I'm a passionate Software Engineer... umm... with a Master's in Computer Science from Illinois Institute of Technology. Currently... I'm working as a Software Engineer at GroupedIn in New Jersey. My journey in technology... umm... spans across multiple domains including web development, mobile applications, AI/ML, and embedded systems. With expertise in React, Flutter, Python, C++... and cloud technologies like AWS, I've built scalable applications serving thousands of users. I'm particularly passionate about... umm... AI-driven solutions, having integrated NLP and machine learning models to enhance user experiences and boost engagement by 25%. My work involves full-stack development... from designing e-commerce systems handling 500+ daily transactions to building high-performance Linux kernel modules that reduce latency by 15%. I'm also experienced in IoT integration, real-time data processing, and automated CI/CD pipelines. Beyond technical skills... umm... I'm a continuous learner who stays updated with the latest technologies. I believe in the power of open-source collaboration and have contributed to various projects. When I'm not coding... you'll find me exploring new technologies, contributing to research, or curating the perfect coding playlist on Spotify. I'm always excited to work on challenging problems, learn new technologies, and contribute to innovative projects that make a real impact. Let's connect and build something amazing together!`;
      
      const utterance = new SpeechSynthesisUtterance(humanLikeText);
      utterance.rate = 0.7; // Slower, more natural pace
      utterance.pitch = 1.1; // Slightly higher pitch for more human-like sound
      utterance.volume = 0.9;
      
      // Try to use the most natural-sounding voice
      const voices = speechSynthesis.getVoices();
      const naturalVoice = voices.find(voice => 
        voice.name.includes('Samantha') || 
        voice.name.includes('Karen') ||
        voice.name.includes('Susan') ||
        voice.name.includes('Female') ||
        voice.name.includes('Microsoft') ||
        voice.name.includes('Google')
      );
      
      if (naturalVoice) {
        utterance.voice = naturalVoice;
      }
      
      // Add natural pauses and emphasis
      utterance.onboundary = (event) => {
        if (event.name === 'sentence') {
          // Add slight pause after sentences
          setTimeout(() => {}, 200);
        }
      };
      
      speechRef.current = utterance;
      
      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentTime(totalTime);
        setReadProgress(100);
      };
      
      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeech = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isPlaying) {
      startSpeech();
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          const progress = (newTime / totalTime) * 100;
          setReadProgress(progress);
          
          if (newTime >= totalTime) {
            setIsPlaying(false);
            setReadProgress(100);
            return totalTime;
          }
          return newTime;
        });
      }, 1000);
    } else {
      stopSpeech();
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

  // Auto-scroll lyrics with smooth animation
  useEffect(() => {
    if (lyricsRef.current && isPlaying) {
      const scrollProgress = currentTime / totalTime;
      const maxScroll = lyricsRef.current.scrollHeight - lyricsRef.current.clientHeight;
      const targetScroll = maxScroll * scrollProgress;
      
      // Smooth scroll with easing
      const startScroll = lyricsRef.current.scrollTop;
      const distance = targetScroll - startScroll;
      const duration = 1000; // 1 second smooth scroll
      let startTime: number;
      
      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeInOutCubic = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        const currentScroll = startScroll + (distance * easeInOutCubic);
        lyricsRef.current!.scrollTop = currentScroll;
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  }, [currentTime, totalTime, isPlaying]);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const handleSkipBack = () => {
    stopSpeech();
    const newTime = Math.max(0, currentTime - 30);
    setCurrentTime(newTime);
    if (isPlaying) {
      // Restart speech from new position
      setTimeout(() => {
        startSpeech();
      }, 100);
    }
  };

  const handleSkipForward = () => {
    stopSpeech();
    const newTime = Math.min(totalTime, currentTime + 30);
    setCurrentTime(newTime);
    if (isPlaying) {
      // Restart speech from new position
      setTimeout(() => {
        startSpeech();
      }, 100);
    }
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
          className="space-y-6 max-h-[60vh] overflow-y-auto scrollbar-hide"
        >
          {[
            { text: "I'm a passionate Software Engineer... umm...", progress: 0 },
            { text: "with a Master's in Computer Science", progress: 6.25 },
            { text: "from Illinois Institute of Technology", progress: 12.5 },
            { text: "Currently... I'm working as a Software Engineer", progress: 18.75 },
            { text: "at GroupedIn in New Jersey", progress: 25 },
            { text: "My journey in technology... umm...", progress: 31.25 },
            { text: "spans across multiple domains including", progress: 37.5 },
            { text: "web development, mobile applications", progress: 43.75 },
            { text: "AI/ML, and embedded systems", progress: 50 },
            { text: "With expertise in React, Flutter, Python, C++...", progress: 56.25 },
            { text: "and cloud technologies like AWS", progress: 62.5 },
            { text: "I've built scalable applications", progress: 68.75 },
            { text: "serving thousands of users", progress: 75 },
            { text: "I'm particularly passionate about... umm...", progress: 81.25 },
            { text: "AI-driven solutions", progress: 87.5 },
            { text: "having integrated NLP and machine learning", progress: 93.75 },
            { text: "Let's connect and build something amazing together!", progress: 100 }
          ].map((line, index) => (
            <div 
              key={index}
              className={`text-2xl font-bold leading-relaxed transition-colors duration-500 ${
                readProgress >= line.progress 
                  ? 'text-white' 
                  : 'text-gray-400'
              }`}
            >
              <div>{line.text}</div>
            </div>
          ))}
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