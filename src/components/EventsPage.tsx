import { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

const InfiniteMenu = lazy(() => import('./InfiniteMenu'));

const items = [
  { image: 'https://picsum.photos/300/300?grayscale', link: '#', title: 'BURNOUT', description: '17 March 2026' },
  { image: 'https://picsum.photos/400/400?grayscale', link: '#', title: 'SINFONIETTA', description: '18 March 2026' },
  { image: 'https://picsum.photos/500/500?grayscale', link: '#', title: 'RELAY ART', description: '18 March 2026' },
  { image: 'https://picsum.photos/600/600?grayscale', link: '#', title: 'CHAURAHA', description: '18 March 2026' },
  { image: 'https://picsum.photos/300/400?grayscale', link: '#', title: 'NRUTYA', description: '18 March 2026' },
  { image: 'https://picsum.photos/400/300?grayscale', link: '#', title: 'QUESTIONABLE', description: '18 March 2026' },
  { image: 'https://picsum.photos/500/400?grayscale', link: '#', title: 'GUESSWORK', description: '18 March 2026' },
  { image: 'https://picsum.photos/400/500?grayscale', link: '#', title: 'DIGICLASH', description: '19 March 2026' },
  { image: 'https://picsum.photos/350/350?grayscale', link: '#', title: 'SKETCHCLASH', description: '19 March 2026' },
  { image: 'https://picsum.photos/450/450?grayscale', link: '#', title: 'RANGAMANCH', description: '19 March 2026' },
  { image: 'https://picsum.photos/550/550?grayscale', link: '#', title: 'UNISON', description: '19 March 2026' },
  { image: 'https://picsum.photos/300/500?grayscale', link: '#', title: 'MDMA', description: '19 March 2026' },
  { image: 'https://picsum.photos/500/300?grayscale', link: '#', title: 'NEWSPRINT', description: '19 March 2026' },
  { image: 'https://picsum.photos/400/350?grayscale', link: '#', title: 'BATTLE OF BANDS', description: '20 March 2026' },
];

export const EventsPage = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Scale up the globe moderately on smaller screens
      if (window.innerWidth < 768) {
        setScale(1.4);
      } else {
        setScale(1);
      }
    };
    
    handleResize(); // Set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center overflow-hidden pt-24 relative">
      <Navbar />

      {/* Decorative Background Elements for professional feel */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-hot-pink opacity-5 md:opacity-10 blur-[100px] rounded-full point-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-neon-yellow opacity-5 md:opacity-10 blur-[100px] rounded-full point-events-none" />
      
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 text-white/20 font-heading text-sm uppercase tracking-[0.5em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
        <span>Interact</span>
        <span className="w-[1px] h-12 bg-white/20 mx-auto"></span>
        <span>Drag to rotate</span>
      </div>

      <div className="w-full text-center px-4 relative z-10 mb-2 md:mb-8 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headingWide text-5xl md:text-7xl lg:text-[10rem] text-white uppercase tracking-wider text-shadow-glow leading-none">
            <span className="md:hidden">THE<br/></span>
            <span className="text-neon-yellow">EVENTS</span>
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-2 bg-hot-pink mx-auto mt-4 md:mt-6" />
          <p className="text-white/70 mt-4 md:mt-8 uppercase tracking-[0.2em] md:tracking-widest text-xs md:text-base font-bold">
            Scroll and drag to discover what's coming
          </p>
        </motion.div>
      </div>

      <div className="w-full flex-1 relative z-0 flex items-center justify-center -mt-10 md:mt-0" style={{ minHeight: '500px' }}>
        <Suspense fallback={<div className="text-white/50 animate-pulse font-heading tracking-widest">LOADING 3D MODULE...</div>}>
          <InfiniteMenu items={items} scale={scale} />
        </Suspense>
      </div>
    </div>
  );
};
