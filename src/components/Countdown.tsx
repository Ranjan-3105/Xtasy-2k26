import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Countdown = () => {
  const targetDate = new Date('2026-03-17T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="flex flex-col items-center justify-center mt-2 relative z-20"
    >
      <div className="text-white text-lg md:text-2xl font-bold uppercase tracking-[0.2em] mb-7 font-headingWide" style={{ textShadow: '2px 2px 0px #E6007E' }}>
        TIME TO <span className="text-neon-yellow">XTASY</span>
      </div>
      <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-2 md:gap-3 pb-4 text-xs sm:text-base">
        <TimeUnit value={timeLeft.days} label="DAYS" />
        <span className="text-lg sm:text-xl md:text-2xl font-body text-white/30 font-bold self-center">:</span>
        <TimeUnit value={timeLeft.hours} label="HRS" />
        <span className="text-lg sm:text-xl md:text-2xl font-body text-white/30 font-bold self-center">:</span>
        <TimeUnit value={timeLeft.minutes} label="MIN" />
        <span className="text-lg sm:text-xl md:text-2xl font-body text-white/30 font-bold self-center">:</span>
        <TimeUnit value={timeLeft.seconds} label="SEC" />
      </div>
    </motion.div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="relative group mx-0.5 sm:mx-1 md:mx-1.5">
    {/* Glassmorphism horizontal pill */}
    <div className="relative z-10 bg-white/5 backdrop-blur-md px-2 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 flex items-baseline gap-1 sm:gap-2 border border-white/10 rounded-full hover:border-hot-pink/50 transition-all duration-300">
      
      {/* Number Display */}
      <span 
        className="font-body text-lg sm:text-2xl md:text-4xl text-white font-black tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
      >
        {value.toString().padStart(2, '0')}
      </span>
      
      {/* Label Display */}
      <span className="font-body font-bold text-white/50 text-[8px] sm:text-[10px] md:text-[12px] tracking-widest uppercase group-hover:text-hot-pink transition-colors">
        {label}
      </span>
    </div>
  </div>
);
