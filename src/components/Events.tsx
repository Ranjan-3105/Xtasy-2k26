import { motion } from 'framer-motion';
import { useScrollDepth } from '../hooks/useScrollDepth';
import { Music, Gauge, Code, Gamepad2, Sparkles, BookOpen } from 'lucide-react';
import eye from '../assets/eye.png';

const events = [
  {
    title: 'MUSIC NIGHT',
    icon: Music,
    color: 'neon-yellow',
    description: 'Battle of the bands. Sonic warfare. Pure energy.',
    angle: 2,
  },
  {
    title: 'DANCE BATTLE',
    icon: Gauge,
    color: 'hot-pink',
    description: 'Body language revolution. Movement meets madness.',
    angle: -1,
  },
  {
    title: 'CODING HACKATHON',
    icon: Code,
    color: 'white',
    description: '36 hours. Infinite possibilities. Digital dreams.',
    angle: 1,
  },
  {
    title: 'GAMING ARENA',
    icon: Gamepad2,
    color: 'neon-yellow',
    description: 'E-sports championships. Virtual domination.',
    angle: -2,
  },
  {
    title: 'FASHION SHOW',
    icon: Sparkles,
    color: 'hot-pink',
    description: 'Runway rebellion. Style meets substance.',
    angle: 1,
  },
  {
    title: 'LITERARY ARENA',
    icon: BookOpen,
    color: 'white',
    description: 'Spoken word. Slam poetry. Word warriors.',
    angle: -1,
  },
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
      <div className="absolute top-20 md:top-40 left-2 md:left-5 w-20 h-20 md:w-28 md:h-28 opacity-40 pointer-events-none z-0">
        <motion.img
           src={eye}
           alt=""
           className="w-full h-full object-contain mix-blend-screen"
           animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute bottom-20 md:bottom-40 right-2 md:right-5 w-24 h-24 md:w-40 md:h-40 opacity-20 pointer-events-none z-0">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </motion.div>
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-hot-pink opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-neon-yellow opacity-10 blur-[120px] rounded-full" />
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
      y: 100,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
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
      className="group relative w-full will-change-transform"
      style={{
        transform: `rotate(${event.angle}deg)`,
      }}
    >
      <motion.div
        className={`border-2 md:border-4 ${getBorderColor()} bg-black/95 p-6 md:p-8 relative overflow-hidden cursor-pointer h-full backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow duration-300 md:shadow-none`}
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

          <p className="text-white text-xs md:text-base leading-relaxed uppercase tracking-wide">
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
