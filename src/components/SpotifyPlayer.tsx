import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart, Monitor } from 'lucide-react';
import { useState } from 'react';

const SpotifyPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState(75);

  const currentTrack = {
    title: "About Me - Professional Bio",
    artist: "Prachi Kotadia",
    album: "Software Engineer",
    image: "/assets/image copy 7.png",
    duration: "2:45"
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-4 py-3 z-40"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Track Info */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-md overflow-hidden flex-shrink-0">
            <img
              src={currentTrack.image}
              alt={currentTrack.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-xs sm:text-sm font-medium truncate">{currentTrack.title}</div>
            <div className="text-gray-400 text-xs truncate">{currentTrack.artist}</div>
          </div>
          <motion.button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-1 ${isLiked ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isLiked ? 'fill-current' : ''}`} />
          </motion.button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 max-w-md">
          {/* Control Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.button
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Shuffle className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.button>
            
            <motion.button
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-6 h-6 sm:w-8 sm:h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />}
            </motion.button>
            
            <motion.button
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            
            <motion.button
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Repeat className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-gray-400">0:00</span>
            <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: '30%' }}
                animate={{ width: ['30%', '35%', '30%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-xs text-gray-400">{currentTrack.duration}</span>
          </div>
        </div>

        {/* Volume & Device Controls */}
        <div className="hidden sm:flex items-center gap-2 flex-1 justify-end">
          <motion.button
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Monitor className="w-4 h-4" />
          </motion.button>
          
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <div className="w-20 h-1 bg-gray-600 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${volume}%` }}
                whileHover={{ backgroundColor: '#1DB954' }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpotifyPlayer;
