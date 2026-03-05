import { Navbar } from './Navbar';
import { motion } from 'framer-motion';
import aboutBg from '../assets/about_bg.png';

export const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <Navbar />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ filter: 'grayscale(100%) blur(2px)' }}
          whileInView={{ filter: 'grayscale(0%) blur(0px)' }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={aboutBg} 
          alt="OUTR Campus" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        
        {/* Animated Noise Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 border border-hot-pink text-hot-pink text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Legacy of XTASY
          </div>
          
          <h2 className="font-headingWide text-5xl md:text-7xl lg:text-9xl text-white uppercase tracking-tighter leading-none mb-12">
            THE PULSE OF <span className="text-neon-yellow">OUTR</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="p-8 border-l-4 border-hot-pink bg-white/5 backdrop-blur-md relative group">
                <div className="absolute inset-0 bg-hot-pink opacity-0 group-hover:opacity-5 transition-opacity" />
                <p className="text-xl md:text-2xl text-white font-bold leading-relaxed uppercase italic relative z-10">
                  "The annual cultural carnival of Odisha University of Technology and Research (OUTR), Bhubaneswar."
                </p>
              </div>
              
              <div className="space-y-8 text-white/70 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  XTASY is more than just a festival; it's a rebellion against the ordinary. As the flagship cultural extravaganza of OUTR, it serves as a melting pot of talent, where engineering precision meets artistic soul. For three days, our campus transforms into a vibrant epicenter of creativity, music, and raw emotion.
                </p>
                <p>
                  From the thunderous beats of the Battle of Bands to the spiritual grace of Nrutya Naivedya, XTASY provides a grand stage for students across the country to showcase their prowess. It's where memories are forged in the neon glow and legacies are born in the spotlight.
                </p>
              </div>

              <div className="pt-8">
                <a 
                  href="#register" 
                  className="inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest hover:text-neon-yellow transition-colors group"
                >
                  <span className="w-12 h-[2px] bg-hot-pink group-hover:w-16 transition-all" />
                  Experience the Chaos
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { label: 'Days of XTASY', value: '3', color: 'neon-yellow', hover: 'hot-pink' },
                { label: 'Electrifying Events', value: '50+', color: 'hot-pink', hover: 'neon-yellow', shift: true },
                { label: 'Expected Footfall', value: '10K+', color: 'neon-yellow', hover: 'white' },
                { label: 'Years of Legacy', value: '25+', color: 'hot-pink', hover: 'neon-yellow', shift: true },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className={`aspect-square bg-white/5 border border-white/10 flex flex-col items-center justify-center p-6 hover:bg-${stat.hover} group transition-all duration-500 cursor-default ${stat.shift ? 'md:translate-y-12' : ''}`}
                >
                  <span className={`text-4xl md:text-6xl font-heading text-${stat.color} group-hover:text-black transition-colors duration-500`}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs text-white/40 group-hover:text-black/60 tracking-[0.2em] uppercase mt-4 text-center font-bold">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative side text */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-10 text-white/10 font-heading text-xs uppercase tracking-[1em] rotate-180 pointer-events-none" style={{ writingMode: 'vertical-rl' }}>
        <span>OUTR BHUBANESWAR</span>
        <span className="w-[1px] h-20 bg-white/10 mx-auto"></span>
        <span>CULTURAL EXTRAVAGANZA</span>
      </div>
    </div>
  );
};
