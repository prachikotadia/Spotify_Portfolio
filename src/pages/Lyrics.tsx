import { motion } from 'framer-motion';
import { ChevronDown, Play, Pause, ArrowLeft, Heart, SkipBack, SkipForward, Minus, Volume2, Upload, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';

const Lyrics = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime] = useState(450); // 7:30 in seconds
  const [readProgress, setReadProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const [userScrollPosition, setUserScrollPosition] = useState(0);
  const lyricsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const pauseTimeRef = useRef<number>(0);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTimeRef = useRef<number>(0);

  // Lyrics data with word-by-word timing
  const lyricsData = [
    { text: "I am a passionate Software Engineer", words: ["I", "am", "a", "passionate", "Software", "Engineer"], isBold: true },
    { text: "who loves building creative and practical solutions", words: ["who", "loves", "building", "creative", "and", "practical", "solutions"], isBold: true },
    { text: "that make an impact.", words: ["that", "make", "an", "impact."], isBold: true },
    { text: "My journey started with curiosity", words: ["My", "journey", "started", "with", "curiosity"], isBold: true },
    { text: "about how technology shapes everyday life,", words: ["about", "how", "technology", "shapes", "everyday", "life,"], isBold: true },
    { text: "and it quickly grew into a strong focus", words: ["and", "it", "quickly", "grew", "into", "a", "strong", "focus"], isBold: true },
    { text: "on software systems, web apps, and scalable solutions.", words: ["on", "software", "systems,", "web", "apps,", "and", "scalable", "solutions."], isBold: true },
    { text: "I enjoy solving problems", words: ["I", "enjoy", "solving", "problems"], isBold: false },
    { text: "with a balance of logic and creativity,", words: ["with", "a", "balance", "of", "logic", "and", "creativity,"], isBold: false },
    { text: "always striving for clean code and thoughtful design.", words: ["always", "striving", "for", "clean", "code", "and", "thoughtful", "design."], isBold: false },
    { text: "Along the way, I have worked on projects", words: ["Along", "the", "way,", "I", "have", "worked", "on", "projects"], isBold: false },
    { text: "that challenged me to think deeper", words: ["that", "challenged", "me", "to", "think", "deeper"], isBold: false },
    { text: "about performance, usability, and user experience.", words: ["about", "performance,", "usability,", "and", "user", "experience."], isBold: false },
    { text: "I believe technology should feel", words: ["I", "believe", "technology", "should", "feel"], isBold: false },
    { text: "seamless and intuitive,", words: ["seamless", "and", "intuitive,"], isBold: false },
    { text: "and that's the standard I aim for in my work.", words: ["and", "that's", "the", "standard", "I", "aim", "for", "in", "my", "work."], isBold: false },
    { text: "Outside of coding, I like exploring new ideas,", words: ["Outside", "of", "coding,", "I", "like", "exploring", "new", "ideas,"], isBold: false },
    { text: "learning continuously,", words: ["learning", "continuously,"], isBold: false },
    { text: "and keeping up with the latest in tech.", words: ["and", "keeping", "up", "with", "the", "latest", "in", "tech."], isBold: false },
    { text: "What excites me most is the opportunity", words: ["What", "excites", "me", "most", "is", "the", "opportunity"], isBold: false },
    { text: "to keep improving, collaborating,", words: ["to", "keep", "improving,", "collaborating,"], isBold: false },
    { text: "and pushing the boundaries of what software can do.", words: ["and", "pushing", "the", "boundaries", "of", "what", "software", "can", "do."], isBold: false }
  ];

  // Smooth auto-scroll to center current line
  const scrollToCurrentLine = useCallback((lineIndex: number, smooth = true) => {
    if (!lyricsRef.current) return;
    
    const container = lyricsRef.current;
    const lineElements = container.querySelectorAll('[data-line-index]');
    const targetElement = lineElements[lineIndex] as HTMLElement;
    
    if (targetElement) {
      const containerHeight = container.clientHeight;
      const lineTop = targetElement.offsetTop;
      const lineHeight = targetElement.offsetHeight;
      const targetScrollTop = lineTop - (containerHeight / 2) + (lineHeight / 2);
      
      if (smooth) {
        // Smooth scroll with better timing
        container.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      } else {
        container.scrollTop = targetScrollTop;
      }
    }
  }, []);

  // Detect manual scrolling
  const handleScroll = useCallback(() => {
    if (!lyricsRef.current) return;
    
    const now = Date.now();
    lastScrollTimeRef.current = now;
    
    // If user is scrolling manually, pause auto-scroll
    if (isPlaying && !isPaused) {
      setIsManualScrolling(true);
      
      // Clear any pending auto-scroll
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
      
      // Resume auto-scroll after user stops scrolling for 1 second (faster)
      autoScrollTimeoutRef.current = setTimeout(() => {
        setIsManualScrolling(false);
        scrollToCurrentLine(currentLineIndex, true);
      }, 1000); // Reduced from 2000ms to 1000ms for faster resume
    }
  }, [isPlaying, isPaused, currentLineIndex, scrollToCurrentLine]);

  // Update current line based on time
  const updateCurrentLine = useCallback((time: number) => {
    const currentLine = lyricsData.findIndex(line => 
      time >= line.progress && time < line.progress + line.duration
    );
    
    if (currentLine !== -1 && currentLine !== currentLineIndex) {
      setCurrentLineIndex(currentLine);
      
      // Auto-scroll to current line if not manually scrolling
      if (!isManualScrolling) {
        // Immediate scroll for faster response
        setTimeout(() => {
          scrollToCurrentLine(currentLine, true);
        }, 100); // Increased delay for better DOM update
      }
    }
  }, [currentLineIndex, isManualScrolling, scrollToCurrentLine]);

  // Text-to-speech functionality - word by word sync
  const startSpeech = (fromTime = 0) => {
    if ('speechSynthesis' in window) {
      // Start from beginning
      speakWordByWord(0, 0);
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  // Speak word by word for perfect sync
  const speakWordByWord = (lineIndex: number, wordIndex: number) => {
    if (lineIndex >= lyricsData.length) {
      setIsPlaying(false);
      setCurrentTime(totalTime);
      setReadProgress(100);
      return;
    }

    const currentLine = lyricsData[lineIndex];
    if (wordIndex >= currentLine.words.length) {
      // Move to next line
      setCurrentLineIndex(lineIndex + 1);
      setCurrentWordIndex(0);
      setTimeout(() => {
        speakWordByWord(lineIndex + 1, 0);
      }, 50); // Much faster delay between lines (3x faster)
      return;
    }

    const currentWord = currentLine.words[wordIndex];
    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.rate = 2.1; // 3x faster (0.7 * 3 = 2.1)
    utterance.pitch = 1.0;
    utterance.volume = 1.0; // Maximum volume
    
    // Update current word for highlighting
    setCurrentLineIndex(lineIndex);
    setCurrentWordIndex(wordIndex);
    
    // Wait for voices to load, then try to use a female voice
    const speakWithVoice = () => {
      const voices = speechSynthesis.getVoices();
      
      // Try to find a good voice (prefer female voices)
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Female') || 
        voice.name.includes('Samantha') || 
        voice.name.includes('Karen') ||
        voice.name.includes('Susan') ||
        voice.name.includes('Zira') ||
        voice.name.includes('Hazel') ||
        voice.name.includes('Microsoft') ||
        voice.name.includes('Google')
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      } else if (voices.length > 0) {
        utterance.voice = voices[0];
      }
      
      speechRef.current = utterance;
      
      utterance.onend = () => {
        // Move to next word after current word finishes
        if (isPlaying && !isPaused) {
          setTimeout(() => {
            speakWordByWord(lineIndex, wordIndex + 1);
          }, 10); // Much faster delay between words (3x faster)
        }
      };
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
        alert('Audio playback failed. Please check your browser audio settings and try again.');
      };
      
      // Try to speak
      try {
        speechSynthesis.speak(utterance);
      } catch (error) {
        console.error('Error starting speech synthesis:', error);
        alert('Audio playback failed. Please check your browser audio settings and try again.');
      }
    };
    
    // Wait for voices to load
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', speakWithVoice, { once: true });
    } else {
      speakWithVoice();
    }
  };

  const stopSpeech = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  };

  const pauseSpeech = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.pause();
      pauseTimeRef.current = currentTime;
      setIsPaused(true);
    }
  };

  const resumeSpeech = () => {
    if (speechSynthesis.speaking && speechSynthesis.paused) {
      speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  // Main playback and sync functionality
  useEffect(() => {
    if (isPlaying && !isPaused) {
      if (currentTime === 0) {
        startSpeech();
      }
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.1; // Update every 100ms for smoother sync
          const progress = (newTime / totalTime) * 100;
          setReadProgress(progress);
          
          // Update current line based on time
          updateCurrentLine(newTime);
          
          if (newTime >= totalTime) {
            setIsPlaying(false);
            setReadProgress(100);
            setCurrentLineIndex(lyricsData.length - 1);
            return totalTime;
          }
          return newTime;
        });
      }, 100); // Update every 100ms for smoother sync
    } else if (!isPlaying) {
      stopSpeech();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isPaused, currentTime, totalTime, updateCurrentLine]);

  // Sync current line with speech synthesis
  useEffect(() => {
    if (isPlaying && !isPaused) {
      // Update current line based on which line is being spoken
      const currentLine = lyricsData.findIndex(line => 
        currentTime >= line.progress && currentTime < line.progress + line.duration
      );
      
      if (currentLine !== -1 && currentLine !== currentLineIndex) {
        setCurrentLineIndex(currentLine);
        
        // Auto-scroll to current line if not manually scrolling
        if (!isManualScrolling) {
          setTimeout(() => {
            scrollToCurrentLine(currentLine, true);
          }, 100);
        }
      }
    }
  }, [currentTime, isPlaying, isPaused, currentLineIndex, isManualScrolling, scrollToCurrentLine]);

  // Add scroll event listener
  useEffect(() => {
    const container = lyricsRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

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
    const secs = Math.floor(seconds % 60); // Remove decimals
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      if (isPaused) {
        resumeSpeech();
        setIsPaused(false);
      } else {
        pauseSpeech();
        setIsPaused(true);
      }
    } else {
      // Check if audio is supported and show user-friendly message
      if (!('speechSynthesis' in window)) {
        alert('Text-to-speech is not supported in this browser. Please use Chrome, Firefox, Safari, or Edge.');
        return;
      }
      
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentLineIndex(0);
      setCurrentWordIndex(0);
      setIsManualScrolling(false);
      // Scroll to beginning when starting - immediate
      setTimeout(() => scrollToCurrentLine(0, true), 10);
    }
  };

  const handleSkipBack = () => {
    stopSpeech();
    const newTime = Math.max(0, currentTime - 10);
    setCurrentTime(newTime);
    setReadProgress((newTime / totalTime) * 100);
    setIsPaused(false);
    setIsManualScrolling(false);
    
    // Update current line based on new time
    updateCurrentLine(newTime);
    
    if (isPlaying) {
      // Restart speech from new position
      setTimeout(() => {
        startSpeech(newTime);
      }, 100);
    }
  };

  const handleSkipForward = () => {
    stopSpeech();
    const newTime = Math.min(totalTime, currentTime + 10);
    setCurrentTime(newTime);
    setReadProgress((newTime / totalTime) * 100);
    setIsPaused(false);
    setIsManualScrolling(false);
    
    // Update current line based on new time
    updateCurrentLine(newTime);
    
    if (isPlaying) {
      // Restart speech from new position
      setTimeout(() => {
        startSpeech(newTime);
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
      
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4 text-white/70 text-sm">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
            onClick={() => navigate('/')}
          >
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-white/70 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm"
          >
            Upgrade
          </Button>
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">P</span>
            </div>
            <span className="text-white/70 text-sm">Prachi</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Song Header */}
      <div className="px-6 py-4">
        <h1 className="text-white font-bold text-2xl mb-2">About Me</h1>
        <p className="text-white/80 text-lg">Prachi Kotadia</p>
      </div>

      {/* Lyrics Content - Spotify Style */}
      <div className="px-6 py-8 pb-48">
        <div 
          ref={lyricsRef}
          className="max-h-[60vh] overflow-y-auto scrollbar-hide"
        >
          <div className="text-center space-y-6">
            {lyricsData.map((line, index) => {
              const isRead = currentLineIndex > index;
              const isCurrent = currentLineIndex === index;
              const isUpcoming = currentLineIndex < index;
              
              return (
                <motion.div 
                  key={index}
                  data-line-index={index}
                  className={`text-2xl leading-relaxed transition-all duration-300 ease-in-out ${
                    isCurrent ? 'text-white' : isRead ? 'text-white' : 'text-white/40'
                  } ${line.isBold ? 'font-bold' : 'font-normal'}`}
                  animate={{
                    opacity: isCurrent ? 1 : isRead ? 0.9 : 0.4,
                    scale: isCurrent ? 1.02 : 1,
                    y: isCurrent ? -2 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  style={{
                    textShadow: isCurrent ? '0 0 15px rgba(255, 255, 255, 0.2)' : 'none'
                  }}
                >
                  <p className="mb-1">
                    {line.words.map((word, wordIndex) => {
                      const isCurrentWord = isCurrent && wordIndex === currentWordIndex;
                      const isReadWord = isCurrent && wordIndex < currentWordIndex;
                      const isUpcomingWord = isCurrent && wordIndex > currentWordIndex;
                      
                      return (
                        <motion.span
                          key={wordIndex}
                          className={`transition-all duration-200 ${
                            isCurrentWord 
                              ? 'text-white font-bold' 
                              : isReadWord 
                                ? 'text-white' 
                                : isUpcomingWord 
                                  ? 'text-white/40' 
                                  : isRead 
                                    ? 'text-white' 
                                    : 'text-white/40'
                          }`}
                          animate={{
                            scale: isCurrentWord ? 1.1 : 1,
                            opacity: isCurrentWord ? 1 : isReadWord ? 0.9 : 0.6
                          }}
                          transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                          }}
                          style={{
                            textShadow: isCurrentWord ? '0 0 10px rgba(255, 255, 255, 0.3)' : 'none'
                          }}
                        >
                          {word}{' '}
                        </motion.span>
                      );
                    })}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Media Player Interface - Spotify Style */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1E3A8A] px-6 py-4 z-50">
        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-white text-sm font-medium">{formatTime(currentTime)}</span>
          <div className="flex-1 h-1 bg-white/20 rounded-full relative">
            <div 
              className="h-1 bg-white rounded-full relative"
              style={{ width: `${(currentTime / totalTime) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
            </div>
          </div>
          <span className="text-white text-sm font-medium">{formatTime(totalTime)}</span>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-6 mb-4 relative z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
            onClick={handleSkipBack}
          >
            <SkipBack className="w-4 h-4" />
          </Button>
          <button 
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-white relative z-20"
            onClick={handlePlayPause}
            style={{ 
              backgroundColor: 'white', 
              color: 'black',
              minWidth: '64px',
              minHeight: '64px'
            }}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 text-black" />
            ) : (
              <Play className="w-7 h-7 text-black ml-0.5" />
            )}
          </button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
            onClick={handleSkipForward}
          >
            <SkipForward className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
          >
            <Minus className="w-4 h-4" />
          </Button>
        </div>

        {/* Device and Options */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-green-500" />
            <span className="text-green-500 text-xs font-medium">LIVING ROOM</span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
            >
              <Upload className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;