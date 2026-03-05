import { motion } from 'framer-motion';
import { useScrollDepth } from '../hooks/useScrollDepth';
import { Link } from 'react-router-dom';
import {
  Music,
  Users,
  Zap,
  MessageSquare,
  Star,
  BookOpen,
  Landmark,
  Video
} from 'lucide-react';
import eye from '../assets/eye.png';
import guitar from '../assets/guitarElem1.png';

const events = [
  { title: 'BURNOUT', icon: Zap, color: 'neon-yellow', description: 'Dance Battle', rotationClass: 'md:rotate-2' },
  { title: 'RELAY ART CHALLENGE', icon: Star, color: 'white', description: 'Art Challenge', rotationClass: 'md:rotate-1' },
  { title: 'CHAURAHA', icon: Users, color: 'neon-yellow', description: 'Nukkad', rotationClass: 'md:-rotate-2' },
  { title: 'UNISON', icon: Zap, color: 'hot-pink', description: 'Group Dance', rotationClass: 'md:rotate-1' },
  { title: 'MDMA', icon: MessageSquare, color: 'white', description: 'The Xtasy Quiz', rotationClass: 'md:-rotate-1' },
  { title: 'NEWSPRINT', icon: BookOpen, color: 'neon-yellow', description: 'Journalism/Writing', rotationClass: 'md:rotate-2' },
  { title: 'BATTLE OF BANDS', icon: Music, color: 'hot-pink', description: 'Live Band Competition', rotationClass: 'md:-rotate-1' },
  { title: 'YUVA SANSAD', icon: Landmark, color: 'white', description: 'Parliament Debate', rotationClass: 'md:rotate-1' },
  { title: 'CINEFACTORY', icon: Video, color: 'neon-yellow', description: 'Short-Film Making', rotationClass: 'md:-rotate-2' },
];

export const Events = () => {
  const { ref, isInView } = useScrollDepth({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{
        perspective: '1500px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="hidden md:block absolute top-20 md:top-40 right-2 md:right-5 w-20 h-20 md:w-32 md:h-32 opacity-40 pointer-events-none z-0">
        <motion.img
           src={guitar}
           alt=""
           className="w-full h-full object-contain mix-blend-screen"
           animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="hidden md:block absolute bottom-20 md:bottom-40 left-2 md:left-5 w-24 h-24 md:w-40 md:h-40 opacity-20 pointer-events-none z-0">
        <motion.img
           src={eye}
           alt=""
           className="w-full h-full object-contain"
           animate={{ rotate: [-10, 10, -10], scale: [1, 1.1, 1] }}
           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="font-headingWide text-5xl md:text-8xl lg:text-[10rem] uppercase leading-none">
            <span className="text-white">THE</span>
            <br />
            <span className="text-hot-pink">EVENTS</span>
          </h2>
          <div className="w-32 md:w-48 h-2 bg-neon-yellow mt-4 md:mt-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0"
        >
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-16 md:mt-24 flex justify-center"
        >
          <Link
            to="/events"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-heading text-xl md:text-2xl text-black uppercase tracking-widest bg-neon-yellow overflow-hidden transition-transform hover:scale-105"
            onClick={() => window.scrollTo(0, 0)}
          >
             <span className="relative z-10 flex items-center gap-2">
                Browse All Events
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.span>
             </span>
             <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </Link>
        </motion.div>
      </div>

      <div className="hidden md:block absolute top-20 right-10 w-64 h-64 bg-hot-pink opacity-10 blur-[120px] rounded-full" />
      <div className="hidden md:block absolute bottom-20 left-10 w-64 h-64 bg-neon-yellow opacity-10 blur-[120px] rounded-full" />
    </section>
  );
};

interface EventCardProps {
  event: typeof events[0];
  index: number;
}

const EventCard = ({ event }: EventCardProps) => {
  const { ref, isInView, scrollProgress } = useScrollDepth({ threshold: 0.5 });
  const Icon = event.icon;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getBorderColor = () => {
    switch (event.color) {
      case 'neon-yellow':
        return 'border-neon-yellow';
      case 'hot-pink':
        return 'border-hot-pink';
      default:
        return 'border-white';
    }
  };

  const getTextColor = () => {
    switch (event.color) {
      case 'neon-yellow':
        return 'text-neon-yellow';
      case 'hot-pink':
        return 'text-hot-pink';
      default:
        return 'text-white';
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className={`group relative w-full will-change-transform ${event.rotationClass}`}
    >
      <motion.div
        className={`border-2 md:border-4 ${getBorderColor()} bg-[#080808] p-6 md:p-8 relative overflow-hidden cursor-pointer h-full md:backdrop-blur-sm transition-shadow duration-300 md:shadow-none hover:shadow-[0_0_10px_rgba(255,255,255,0.05)]`}
        whileHover={{
          scale: 1.05,
          rotate: 0,
          transition: { duration: 0.3 },
        }}
        animate={{
          scale: isInView ? 1 + scrollProgress * 0.05 : 0.9,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-50" />

        <motion.div
          className="absolute top-4 right-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className={`w-10 h-10 md:w-12 md:h-12 ${getTextColor()}`} />
        </motion.div>

        <div className="relative z-10 mt-2 md:mt-0">
          <h3 className={`font-heading text-2xl md:text-4xl ${getTextColor()} uppercase mb-3 md:mb-4 leading-tight`}>
            {event.title}
          </h3>

          <div className={`w-12 md:w-16 h-1 ${event.color === 'white' ? 'bg-white' : `bg-${event.color}`} mb-4 md:mb-6`} />

          <p className="text-white text-sm md:text-base font-bold uppercase tracking-wider mb-6 line-clamp-2 font-body">
            {event.description}
          </p>
        </div>

        <motion.div
          className={`absolute bottom-0 left-0 w-full h-1 ${event.color === 'white' ? 'bg-white' : `bg-${event.color}`}`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <div className={`absolute inset-0 border-2 md:border-4 ${getBorderColor()} -z-10 hidden md:block`}
           style={{ transform: 'translate(8px, 8px)' }}
      />
    </motion.div>
  );
};
