import { motion } from 'framer-motion';
import { useScrollDepth } from '../hooks/useScrollDepth';
import eye2 from '../assets/eye2.png';
import guitar2 from '../assets/guitarelem2.png';
import aboutBg from '../assets/about_bg.png';

export const About = () => {
  const { ref } = useScrollDepth({ threshold: 0.3 });

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
      className="min-h-screen bg-black py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ filter: 'grayscale(100%)' }}
          whileInView={{ filter: 'grayscale(40%)' }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={aboutBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black" />
      </div>

      <div className="absolute top-20 right-5 md:right-10 w-24 h-24 md:w-48 md:h-48 opacity-30 md:opacity-20 pointer-events-none z-0">
        <motion.img
          src={guitar2}
          alt=""
          className="w-full h-full object-contain"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute bottom-20 left-5 md:left-10 w-20 h-20 md:w-32 md:h-32 opacity-40 md:opacity-30 pointer-events-none z-0">
        <motion.img
          src={eye2}
          alt=""
          className="w-full h-full object-contain grayscale"
          animate={{ scale: [1, 1.2, 1], y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
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
              <p className="text-white text-2xl md:text-3xl font-heading leading-tight uppercase mb-6">
                ANNUAL CULTURAL FEST OF OUTR
              </p>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 font-body">
              XTASY is the heartbeat of OUTR, where artistic expression meets
              unbridled passion. It's more than just a festival; it's a movement
              that celebrates the raw talent and creative spirit of our students.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            <div className="border-4 border-white p-6 md:p-8 rotate-1 bg-black/50 backdrop-blur-sm">
              <h3 className="font-heading text-3xl md:text-4xl text-neon-yellow uppercase mb-4">
                10000+
              </h3>
              <p className="text-white text-sm md:text-base uppercase tracking-wider font-body">
                EXPECTED FOOTFALL
              </p>
            </div>

            <div className="border-4 border-neon-yellow p-6 md:p-8 -rotate-1 bg-white">
              <h3 className="font-heading text-3xl md:text-4xl text-black uppercase mb-4">
                75K+
              </h3>
              <p className="text-black text-sm md:text-base uppercase tracking-wider font-bold font-body">
                PRIZE POOL
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
              className="border-2 border-hot-pink p-8 text-center hover:bg-hot-pink transition-all duration-300 group bg-black/30 backdrop-blur-sm"
              style={{ transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})` }}
            >
              <h4 className="font-heading text-2xl md:text-4xl text-white group-hover:text-black transition-colors">
                {word}
              </h4>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
