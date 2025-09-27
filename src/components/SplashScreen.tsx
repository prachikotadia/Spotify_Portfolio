import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
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
            animate={{ 
              scale: 3, 
              opacity: 1,
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }
            }}
            className="relative z-10"
          >
            <motion.img
              src="/assets/image copy 8.png"
              alt="Prachi Kotadia Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl scale-150"></div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6, 
                delay: 0.8
              }
            }}
            className="absolute bottom-1/4 text-white/80 text-sm font-medium tracking-wider"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Welcome to my Portfolio
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
