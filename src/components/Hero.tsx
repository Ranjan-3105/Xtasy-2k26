import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Zap, Play, Pause } from 'lucide-react';
import Tlogo from '../assets/XTASY_TRANSPARENT_RED.png'
import eye from '../assets/eye.png';
import starSkull from '../assets/starSkull.png';
import heroVideo from '../assets/XTC bnw Backdrop.mp4';
import { Countdown } from './Countdown';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Explicitly mute and attempt to play for strict mobile browsers
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay was blocked (usually battery saver or strict policy)
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity }}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="w-full h-full object-cover opacity-40 md:opacity-50 pointer-events-none"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 bg-hot-pink opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-yellow opacity-20 blur-[100px]" />

      <motion.img
        src={eye}
        alt=""
        className="absolute top-[10%] left-[5%] md:top-[20%] md:left-[10%] w-16 h-16 md:w-24 md:h-24 object-contain opacity-50 md:opacity-60 pointer-events-none z-0"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={starSkull}
        alt=""
        className="absolute bottom-[15%] right-[5%] md:bottom-[20%] md:right-[10%] w-24 h-24 md:w-32 md:h-32 object-contain opacity-30 md:opacity-40 blur-[1px] pointer-events-none z-0"
        animate={{ y: [0, 30, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center"
        >
          <motion.img
            src={Tlogo}
            alt="Xtasy Logo"
            className="w-32 h-auto md:w-56 lg:w-64 mb-7 object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.4 }}
          />

          <motion.div
            className="absolute -top-8 -right-4 md:-top-12 md:-right-8"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
          </motion.div>
        </motion.div>

        <Countdown />
      </div>

      <a href="#about" className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <Zap className="w-8 h-8 text-hot-pink fill-hot-pink rotate-180" />
          <p className="text-white text-xs tracking-widest mt-2">SCROLL</p>
        </motion.div>
      </a>

      {/* Video Play/Pause Toggle */}
      <button 
        onClick={toggleVideo}
        className="absolute bottom-12 left-6 md:left-12 z-50 bg-black/50 hover:bg-black/80 backdrop-blur-sm border border-white/20 p-3 rounded-full text-white transition-all duration-300 pointer-events-auto shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
      >
        {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6" /> : <Play className="w-5 h-5 md:w-6 md:h-6" />}
      </button>

      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-transparent to-black opacity-30 pointer-events-none"
           style={{
             clipPath: 'polygon(0 0, 100% 0, 100% 20%, 95% 25%, 90% 20%, 85% 25%, 80% 20%, 75% 25%, 70% 20%, 65% 25%, 60% 20%, 55% 25%, 50% 20%, 45% 25%, 40% 20%, 35% 25%, 30% 20%, 25% 25%, 20% 20%, 15% 25%, 10% 20%, 5% 25%, 0 20%)'
           }}
      />
    </motion.section>
  );
};
