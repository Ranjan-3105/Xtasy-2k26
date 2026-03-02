import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';
import logo from '../assets/Xtasy_Logo.png';
import eye from '../assets/eye.png';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity }}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black" />

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
        src={eye}
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
            src={logo}
            alt="Xtasy Logo"
            className="w-32 h-auto md:w-56 lg:w-64 mb-4 object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
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
            <Zap className="w-12 h-12 md:w-20 md:h-20 text-neon-yellow fill-neon-yellow" />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-xl md:text-3xl font-bold tracking-widest uppercase mb-8"
        >
          Annual Cultural Fest 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="border-2 border-neon-yellow px-8 py-3 inline-block"
        >
          <p className="text-white font-bold text-sm md:text-base tracking-wider">
            MARCH 15-17, 2026
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Zap className="w-8 h-8 text-hot-pink fill-hot-pink rotate-180" />
        <p className="text-white text-xs tracking-widest mt-2">SCROLL</p>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-transparent to-black opacity-30"
           style={{
             clipPath: 'polygon(0 0, 100% 0, 100% 20%, 95% 25%, 90% 20%, 85% 25%, 80% 20%, 75% 25%, 70% 20%, 65% 25%, 60% 20%, 55% 25%, 50% 20%, 45% 25%, 40% 20%, 35% 25%, 30% 20%, 25% 25%, 20% 20%, 15% 25%, 10% 20%, 5% 25%, 0 20%)'
           }}
      />
    </motion.section>
  );
};
