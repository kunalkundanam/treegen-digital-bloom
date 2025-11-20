import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Auto-skip after 10 seconds if video doesn't end
    const timer = setTimeout(() => {
      if (!videoEnded) {
        onComplete();
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [videoEnded, onComplete]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          >
            <source src="/intro-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={handleSkip}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 px-4 py-2 sm:px-6 sm:py-3 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full font-medium transition-all backdrop-blur-sm text-sm sm:text-base"
        >
          Skip Intro
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoIntro;
