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
      <div className="text-white text-sm md:text-xl font-bold uppercase tracking-widest mb-6 font-headingWide" style={{ textShadow: '2px 2px 0px #E6007E' }}>
        TIME TO <span className="text-neon-yellow">XTASY</span>
      </div>
      <div className="flex gap-1 md:gap-2 -skew-x-12 transform-gpu pb-4">
        <TimeUnit value={timeLeft.days} label="DAYS" />
        <span className="text-3xl md:text-5xl font-headingWide text-white font-bold self-center animate-pulse" style={{ textShadow: '2px 2px 0px #E6007E' }}>:</span>
        <TimeUnit value={timeLeft.hours} label="HRS" />
        <span className="text-3xl md:text-5xl font-headingWide text-white font-bold self-center animate-pulse" style={{ textShadow: '2px 2px 0px #E6007E' }}>:</span>
        <TimeUnit value={timeLeft.minutes} label="MIN" />
        <span className="text-3xl md:text-5xl font-headingWide text-white font-bold self-center animate-pulse" style={{ textShadow: '2px 2px 0px #E6007E' }}>:</span>
        <TimeUnit value={timeLeft.seconds} label="SEC" />
      </div>
    </motion.div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="relative group mx-1 md:mx-1.5 perspective-1000">
    {/* Shadow / distressed background layer block */}
    <div className="absolute inset-0 bg-[#E6007E] translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 z-0 border-2 md:border-[3px] border-black" />
    
    {/* Main container */}
    <div className="relative z-10 bg-[#FEEA07] px-2 py-1.5 md:px-4 md:py-3 flex flex-col items-center justify-center border-2 md:border-[3px] border-black shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:-translate-x-1 transition-transform">
      
      {/* Number Display */}
      <span 
        className="font-headingWide text-3xl md:text-5xl text-white font-black tracking-tighter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" 
        style={{ WebkitTextStroke: '1px black' }}
      >
        {value.toString().padStart(2, '0')}
      </span>
      
      {/* Label Display */}
      <span className="font-headingWide font-bold text-black text-[10px] md:text-[14px] tracking-widest mt-1 border-t-2 md:border-t-4 border-black w-full text-center pt-1 md:pt-1.5">
        {label}
      </span>
    </div>
  </div>
);
