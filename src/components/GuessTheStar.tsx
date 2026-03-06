import { motion } from 'framer-motion';
import { useScrollDepth } from '../hooks/useScrollDepth';
import guessTheStarImg from '../assets/guess_the_star.png';

export const GuessTheStar = () => {
  const { ref, isInView } = useScrollDepth({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-black py-12 flex justify-center items-center relative z-10 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <img 
          src={guessTheStarImg} 
          alt="Guess the Star" 
          loading="lazy" 
          className="w-full h-auto object-cover object-center shadow-[0_0_40px_rgba(254,234,7,0.15)] border-y border-white/5"
        />
      </motion.div>
    </section>
  );
};
