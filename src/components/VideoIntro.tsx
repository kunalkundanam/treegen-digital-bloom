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
        className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      >
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={handleSkip}
          className="absolute bottom-8 right-8 px-6 py-3 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full font-medium transition-all backdrop-blur-sm"
        >
          Skip Intro
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoIntro;
