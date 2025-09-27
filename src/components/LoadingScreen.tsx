import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation to complete before calling onComplete
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-green-900 to-black"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-400/30 rounded-full blur-lg animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-300/40 rounded-full blur-md animate-ping"></div>
          </div>

          {/* Spotify Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2
            }}
            className="relative z-10"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 sm:w-32 sm:h-32"
            >
              <img
                src="/assets/205-2056187_spotify-icon-by-beanmelon-transparent-cool-spotify-icons-removebg-preview.png"
                alt="Spotify Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              ease: "easeOut"
            }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white/80 text-sm font-medium tracking-wider"
            >
              Loading...
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute bottom-10 left-0 right-0 mx-8 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
