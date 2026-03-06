import { motion } from 'framer-motion';
import { useScrollDepth } from '../hooks/useScrollDepth';
import { Zap, ArrowRight } from 'lucide-react';
import starSkull from '../assets/starSkull.png';
import guitar2 from '../assets/guitarelem2.png';

export const Register = () => {
  const { ref, isInView } = useScrollDepth({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-neon-yellow py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-10 left-10 w-64 h-64 bg-black opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-hot-pink opacity-30 blur-[100px] rounded-full" />
      </div>

      <div className="hidden md:block absolute top-[8%] right-[5%] w-24 h-24 md:top-[15%] md:w-48 md:h-48 opacity-20 md:opacity-30 pointer-events-none z-0">
        <motion.img
          src={starSkull}
          alt=""
          className="w-full h-full object-contain md:mix-blend-multiply"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="hidden md:block absolute bottom-[5%] left-[5%] w-32 h-32 md:bottom-[10%] md:w-56 md:h-56 opacity-15 md:opacity-20 pointer-events-none z-0">
        <motion.img
          src={guitar2}
          alt=""
          className="w-full h-full object-contain md:mix-blend-multiply"
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="mb-6 md:mb-8 inline-block will-change-transform"
        >
          <Zap className="w-16 h-16 md:w-32 md:h-32 text-black fill-black" />
        </motion.div>

        <motion.h2
          className="font-headingWide text-5xl md:text-8xl lg:text-[12rem] uppercase leading-none text-black mb-6 md:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          JOIN THE
          <br />
          <span className="text-hot-pink">CHAOS</span>
        </motion.h2>

        <motion.p
          className="text-black text-lg md:text-3xl font-bold mb-8 md:mb-12 uppercase tracking-wider max-w-3xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          DON'T JUST WATCH. BE PART OF THE REVOLUTION.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="bg-black text-neon-yellow font-heading text-2xl md:text-4xl uppercase px-12 md:px-20 py-6 md:py-8 border-4 border-black relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open('https://drive.google.com/file/d/1E1sIhPTRkmCO4k-P0Y1K_dBGlqpDvGcL/view?usp=drivesdk', '_blank');
            }}
          >
            <span className="relative z-10 flex items-center gap-4 text-neon-yellow">
              BROCHURE
              <ArrowRight className="w-8 h-8" />
            </span>

            <motion.div
              className="absolute inset-0 bg-hot-pink"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.span
              className="absolute inset-0 z-20 flex items-center justify-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              REGISTER NOW
              <ArrowRight className="w-8 h-8" />
            </motion.span>
          </motion.button>

          <motion.p
            className="text-black text-sm md:text-base mt-6 uppercase tracking-wider font-bold"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            LIMITED SPOTS AVAILABLE
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16 flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4 md:px-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="border-4 border-black p-6 bg-white will-change-transform transform hover:scale-105 transition-transform duration-300">
            <h3 className="font-heading text-4xl text-black mb-2">10,000+</h3>
            <p className="text-black font-bold uppercase text-sm">FOOTFALL</p>
          </div>

          <div className="border-4 border-black p-6 bg-hot-pink will-change-transform transform hover:scale-105 transition-transform duration-300">
            <h3 className="font-heading text-4xl text-white mb-2">₹75K+</h3>
            <p className="text-white font-bold uppercase text-sm">PRIZE POOL</p>
          </div>

          <div className="border-4 border-black p-6 bg-black will-change-transform transform hover:scale-105 transition-transform duration-300">
            <h3 className="font-heading text-4xl text-neon-yellow mb-2">3</h3>
            <p className="text-neon-yellow font-bold uppercase text-sm">DAYS OF MADNESS</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-[20%] left-[5%] hidden md:block will-change-transform"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-black" />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[5%] hidden md:block will-change-transform"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-8 h-8 md:w-12 md:h-12 bg-hot-pink" />
      </motion.div>
    </section>
  );
};
