import { motion } from 'framer-motion';
import { useScrollDepth } from '../hooks/useScrollDepth';
import eye from '../assets/eye.png';

export const About = () => {
  const { ref, isInView } = useScrollDepth({ threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black py-24 px-4 md:px-8 lg:px-16 relative"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="absolute top-20 right-5 md:right-10 w-24 h-24 md:w-48 md:h-48 opacity-30 md:opacity-20 pointer-events-none z-0">
        <motion.img
          src={eye}
          alt=""
          className="w-full h-full object-contain"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute bottom-20 left-5 md:left-10 w-20 h-20 md:w-32 md:h-32 opacity-40 md:opacity-30 pointer-events-none z-0">
        <motion.img
          src={eye}
          alt=""
          className="w-full h-full object-contain grayscale"
          animate={{ scale: [1, 1.2, 1], y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="font-headingWide text-6xl md:text-8xl lg:text-9xl uppercase text-neon-yellow mb-4 leading-none">
            THIS IS
            <br />
            <span className="text-white">XTASY</span>
          </h2>
          <div className="w-32 h-2 bg-hot-pink mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-hot-pink p-8 md:p-12 -rotate-1 relative"
          >
            <div className="absolute -top-2 -left-2 w-full h-full border-2 border-neon-yellow" />
            <div className="relative z-10">
              <p className="text-white text-2xl md:text-4xl font-bold leading-tight uppercase mb-6">
                WHERE CHAOS MEETS CREATIVITY
              </p>
              <p className="text-white text-base md:text-lg leading-relaxed">
                XTASY isn't just another college fest. It's a three-day rebellion against the ordinary.
                A sonic boom of talent. A visual explosion of creativity. Where boundaries blur and
                possibilities ignite.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            <div className="border-4 border-white p-6 md:p-8 rotate-1">
              <h3 className="font-heading text-3xl md:text-4xl text-neon-yellow uppercase mb-4">
                5000+
              </h3>
              <p className="text-white text-sm md:text-base uppercase tracking-wider">
                EXPECTED PARTICIPANTS
              </p>
            </div>

            <div className="border-4 border-neon-yellow p-6 md:p-8 -rotate-1 bg-white">
              <h3 className="font-heading text-3xl md:text-4xl text-black uppercase mb-4">
                50+
              </h3>
              <p className="text-black text-sm md:text-base uppercase tracking-wider font-bold">
                ELECTRIFYING EVENTS
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {['COMPETE', 'CREATE', 'CELEBRATE'].map((word, index) => (
            <div
              key={word}
              className="border-2 border-hot-pink p-8 text-center hover:bg-hot-pink transition-all duration-300 group"
              style={{ transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})` }}
            >
              <h4 className="font-heading text-3xl md:text-4xl text-white group-hover:text-black transition-colors">
                {word}
              </h4>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
