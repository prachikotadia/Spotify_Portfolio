import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Bookmark, Mic, Share, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const Lyrics = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(58);
  const [totalTime] = useState(245);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const lyrics = [
    "Diving deeper into systems programming,",
    "databases, and AI. It's been quite a journey",
    "from building simple websites to working",
    "on embedded systems and AI applications.",
    "",
    "I enjoy working across the entire tech stack -",
    "from frontend interfaces to backend systems,",
    "and even down to the low-level stuff like",
    "database indexing and multimedia pipelines.",
    "There's something satisfying about understanding",
    "how everything connects, from the user interface",
    "all the way down to how data is stored and processed.",
    "",
    "Most of my work involves building scalable",
    "applications, whether that's web apps, mobile apps,",
    "or systems that need to handle real-time data.",
    "I've worked on projects ranging from expense",
    "management systems to multimedia pipelines,",
    "and I'm always learning something new with each project.",
    "",
    "When I'm not coding, I like contributing to",
    "open-source projects and exploring new technologies.",
    "I believe the best code is the kind that's easy",
    "to understand, maintain, and actually solves",
    "real problems for people."
  ];

  return (
    <div className="min-h-screen bg-[#20B2AA] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 pt-12">
        <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/20">
          <ChevronDown className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/20">
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>

      {/* Song Title and Artist */}
      <div className="text-center px-4 mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">My Journey</h1>
        <p className="text-white/80 text-lg">Prachi Kotadia</p>
      </div>

      {/* Lyrics Content */}
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-4">
          {lyrics.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`text-white text-lg leading-relaxed ${
                line === "" ? "h-4" : ""
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Bottom Player Controls */}
      <div className="px-6 py-6 bg-black/10">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-white text-sm mb-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalTime)}</span>
          </div>
          <Slider
            value={[currentTime]}
            onValueChange={(value) => setCurrentTime(value[0])}
            max={totalTime}
            step={1}
            className="w-full"
          />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="w-10 h-10 text-white hover:bg-white/20">
            <Mic className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/20">
              <SkipBack className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 bg-white rounded-full hover:bg-white/90 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-black" />
              ) : (
                <Play className="w-6 h-6 text-black ml-1" />
              )}
            </Button>
            
            <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/20">
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="w-10 h-10 text-white hover:bg-white/20">
            <Share className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
