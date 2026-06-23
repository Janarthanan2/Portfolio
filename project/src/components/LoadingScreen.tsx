import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1000; // ms (reduced for better LCP)
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Corner marks */}
      <div className="loading-corner loading-corner-tl">+</div>
      <div className="loading-corner loading-corner-tr">+</div>
      <div className="loading-corner loading-corner-bl">+</div>
      <div className="loading-corner loading-corner-br">+</div>

      {/* Center box */}
      <div className="loading-center">
        {/* Animated logo initials */}
        <motion.div
          className="loading-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          <span className="loading-logo-text">JANA</span>
          <motion.div
            className="loading-logo-ring"
            initial={{ pathLength: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="loading-tagline"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          BUILD · INNOVATE · CREATE
        </motion.p>

        {/* Progress bar */}
        <div className="loading-progress-track">
          <motion.div
            className="loading-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter */}
        <motion.div
          className="loading-counter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {Math.floor(progress)}%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
