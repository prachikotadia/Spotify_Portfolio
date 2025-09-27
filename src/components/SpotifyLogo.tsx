import { motion } from 'framer-motion';

interface SpotifyLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

const SpotifyLogo = ({ size = 'md', className = '', animated = false }: SpotifyLogoProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const containerSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const logo = (
    <img
      src="/assets/image copy 8.png"
      alt="Prachi Kotadia Logo"
      className={`${sizeClasses[size]} object-contain`}
    />
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`${containerSizes[size]} flex items-center justify-center ${className}`}
      >
        {logo}
      </motion.div>
    );
  }

  return (
    <div className={`${containerSizes[size]} flex items-center justify-center ${className}`}>
      {logo}
    </div>
  );
};

export default SpotifyLogo;
