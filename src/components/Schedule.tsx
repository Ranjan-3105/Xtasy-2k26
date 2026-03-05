import { motion } from 'framer-motion';
import { useScrollDepth } from '../hooks/useScrollDepth';
import { Calendar } from 'lucide-react';
import eye2 from '../assets/eye2.png';
import guitar1 from '../assets/guitarElem1.png';

const scheduleData = [
  {
    day: 'DAY 0',
    date: 'MARCH 17',
    events: [
      { time: 'TBD', name: 'BURNOUT (DANCE BATTLE)', highlight: true },
    ],
  },
  {
    day: 'DAY 1',
    date: 'MARCH 18',
    events: [
      { time: 'TBD', name: 'SINFONIETTA (SOLO SINGING)', highlight: true },
      { time: 'TBD', name: 'RELAY ART CHALLENGE', highlight: false },
      { time: 'TBD', name: 'CHAURAHA (NUKKAD)', highlight: true },
      { time: 'TBD', name: 'NRUTYA NAIVEDYA', highlight: false },
      { time: 'TBD', name: 'QUESTIONABLE: THE NSFW QUIZ', highlight: false },
      { time: 'TBD', name: 'GUESSWORK IN PROGRESS', highlight: false },
    ],
  },
  {
    day: 'DAY 2',
    date: 'MARCH 19',
    events: [
      { time: 'TBD', name: 'DIGICLASH', highlight: true },
      { time: 'TBD', name: 'SKETCHCLASH', highlight: false },
      { time: 'TBD', name: 'RANGAMANCH', highlight: true },
      { time: 'TBD', name: 'UNISON', highlight: false },
      { time: 'TBD', name: 'MDMA: THE XTASY QUIZ', highlight: false },
      { time: 'TBD', name: 'NEWSPRINT', highlight: false },
    ],
  },
  {
    day: 'DAY 3',
    date: 'MARCH 20',
    events: [
      { time: 'TBD', name: 'BATTLE OF BANDS', highlight: true },
    ],
  },
];

export const Schedule = () => {
  const { ref, isInView } = useScrollDepth({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <div className="hidden md:block absolute top-1/3 left-0 w-24 h-24 md:w-48 md:h-48 opacity-30 md:opacity-20 pointer-events-none z-0">
        <motion.img
          src={eye2}
          alt=""
          className="w-full h-full object-contain grayscale"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="hidden md:block absolute bottom-1/4 right-0 w-32 h-32 md:w-64 md:h-64 opacity-20 md:opacity-10 pointer-events-none z-0 -scale-x-100">
        <motion.img
          src={guitar1}
          alt=""
          className="w-full h-full object-contain grayscale"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-16 h-16 text-neon-yellow" />
          </div>
          <h2 className="font-headingWide text-6xl md:text-8xl lg:text-9xl uppercase text-white leading-none mb-4">
            SCHEDULE
          </h2>
          <div className="w-32 h-2 bg-hot-pink mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {scheduleData.map((daySchedule, dayIndex) => (
            <DaySchedule key={daySchedule.day} daySchedule={daySchedule} index={dayIndex} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface DayScheduleProps {
  daySchedule: typeof scheduleData[0];
  index: number;
}

const DaySchedule = ({ daySchedule, index }: DayScheduleProps) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className="relative">
      <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 ${
        index % 2 === 0 ? 'bg-neon-yellow' : 'bg-hot-pink'
      } transform md:-translate-x-1/2`} />

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${
        index % 2 === 0 ? '' : 'md:flex-row-reverse'
      }`}>
        <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
          <div className={`inline-block border-4 ${
            index % 2 === 0 ? 'border-neon-yellow' : 'border-hot-pink'
          } p-6 mb-6 bg-black`}>
            <h3 className="font-heading text-4xl md:text-6xl text-white uppercase mb-4 tracking-tighter">
              {daySchedule.day}
            </h3>
            <p className={`text-xl md:text-2xl font-bold ${
              index % 2 === 0 ? 'text-neon-yellow' : 'text-hot-pink'
            } tracking-widest`}>
              {daySchedule.date}
            </p>
          </div>
        </div>

        <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:col-start-1 md:row-start-1 md:pr-12 md:text-right'}`}>
          <div className="space-y-4">
            {daySchedule.events.map((event, eventIndex) => (
              <motion.div
                key={eventIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: eventIndex * 0.1 }}
                viewport={{ once: true }}
                className={`border-2 ${
                  event.highlight
                    ? index % 2 === 0
                      ? 'border-neon-yellow bg-neon-yellow'
                      : 'border-hot-pink bg-hot-pink'
                    : 'border-white'
                } p-4 hover:scale-105 transition-transform duration-300`}
              >
                <p className={`text-sm md:text-base font-bold mb-1 font-body ${
                  event.highlight ? 'text-black' : 'text-neon-yellow'
                }`}>
                  {event.time}
                </p>
                <p className={`font-bold uppercase text-base md:text-xl font-body ${
                  event.highlight ? 'text-black' : 'text-white'
                } tracking-tight`}>
                  {event.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className={`absolute ${
          index % 2 === 0 ? 'left-[10px] md:left-1/2' : 'left-[10px] md:left-1/2'
        } top-0 w-6 h-6 ${
          index % 2 === 0 ? 'bg-neon-yellow' : 'bg-hot-pink'
        } border-4 border-black transform -translate-x-1/2 md:-translate-x-1/2 rounded-full`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};
