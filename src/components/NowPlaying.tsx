import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Heart,
  MonitorSpeaker 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([35]);

  // Current "tech stack song"
  const currentTrack = {
    title: "React + TypeScript + Tailwind",
    artist: "Full Stack Development",
    album: "Modern Web Portfolio",
    duration: "3:42",
    currentTime: "1:26"
  };

  return (
    <div className="now-playing-bar">
      {/* Track Info */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/60 rounded-md flex-shrink-0 flex items-center justify-center">
          <MonitorSpeaker className="w-6 h-6 text-white" />
        </div>
        
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-sm text-foreground truncate">
            {currentTrack.title}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {currentTrack.artist}
          </p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setLiked(!liked)}
          className="flex-shrink-0 hover:scale-110 transition-transform"
        >
          <Heart 
            className={`w-4 h-4 ${liked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
          />
        </Button>
      </div>

      {/* Playback Controls */}
      <div className="flex flex-col items-center gap-2 flex-1 max-w-md mx-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <SkipBack className="w-4 h-4" />
          </Button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" fill="currentColor" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            )}
          </motion.button>
          
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 w-full">
          <span className="text-xs text-muted-foreground tabular-nums">
            {currentTrack.currentTime}
          </span>
          <div className="flex-1">
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="cursor-pointer"
            />
          </div>
          <span className="text-xs text-muted-foreground tabular-nums">
            {currentTrack.duration}
          </span>
        </div>
      </div>

      {/* Volume & Additional Controls */}
      <div className="flex items-center gap-3 flex-1 justify-end">
        <div className="hidden md:flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <div className="w-24">
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;