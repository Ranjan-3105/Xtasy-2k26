import { motion } from 'framer-motion';
import { useScrollDepth } from '../hooks/useScrollDepth';
import { Music, Gauge, Code, Gamepad2, Sparkles, BookOpen } from 'lucide-react';

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
      className="min-h-screen bg-black py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{
        perspective: '1500px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] uppercase leading-none">
            <span className="text-white">THE</span>
            <br />
            <span className="text-hot-pink">EVENTS</span>
          </h2>
          <div className="w-48 h-2 bg-neon-yellow mt-6" />
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
      className="group relative"
      style={{
        transform: `rotate(${event.angle}deg)`,
      }}
    >
      <motion.div
        className={`border-4 ${getBorderColor()} bg-black p-8 relative overflow-hidden cursor-pointer h-full`}
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
          <Icon className={`w-12 h-12 ${getTextColor()}`} />
        </motion.div>

        <div className="relative z-10">
          <h3 className={`font-display text-3xl md:text-4xl ${getTextColor()} uppercase mb-4 leading-tight`}>
            {event.title}
          </h3>

          <div className={`w-16 h-1 ${event.color === 'white' ? 'bg-white' : `bg-${event.color}`} mb-6`} />

          <p className="text-white text-sm md:text-base leading-relaxed uppercase tracking-wide">
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

      <div className={`absolute inset-0 border-4 ${getBorderColor()} -z-10`}
           style={{ transform: 'translate(8px, 8px)' }}
      />
    </motion.div>
  );
};
