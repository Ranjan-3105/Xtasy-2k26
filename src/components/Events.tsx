import { useState } from 'react';
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
  Video,
  ArrowRight
} from 'lucide-react';
import eye from '../assets/eye.png';
import guitar from '../assets/guitarElem1.png';

// Import event images for the data update
import burnoutImg from '../assets/events/Burnout.webp';
import sinfoniettaImg from '../assets/events/Sinfonietta.webp';
import relayArtImg from '../assets/events/Relay_art_challenge.webp';
import chaurahaImg from '../assets/events/Chauraha.webp';
import nrutyaImg from '../assets/events/Nrutya_naivedya.webp';
import questionableImg from '../assets/events/Questionable.webp';
import guessworkImg from '../assets/events/Guesswork_in_progress.webp';
import digiclashImg from '../assets/events/DIgiclash.webp';
import sketchclashImg from '../assets/events/Sketchclash.webp';
import rangamanchImg from '../assets/events/Rangmanch.webp';
import unisonImg from '../assets/events/Unison.webp';
import mdmaImg from '../assets/events/Mdma.webp';
import newsprintImg from '../assets/events/Newsprint.webp';
import bobImg from '../assets/events/Battle_of_bands.webp';
import yuvaImg from '../assets/events/Yuva_sansad.webp';
import cinefactoryImg from '../assets/events/Cinefactory.webp';
import fofImg from '../assets/events/Factory_of_frames.webp';
import reelVisionImg from '../assets/events/Reel_vision.webp';
import frontpageFrenzyImg from '../assets/events/FrontPageFrenzy.webp';
import overthinkTankImg from '../assets/events/TheOverthinkTank.webp';

const events = [
  {
    title: 'BURNOUT',
    icon: Zap,
    color: 'neon-yellow',
    description: 'Dance Battle.',
    image: burnoutImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfR7jSt_zoEDOWsjwQ7qvsmv7dqBA623yUNSUXnKrZM2OXV8Q/viewform',
    date: '17 March 2026',
    rotationClass: 'md:rotate-2'
  },
  {
    title: 'RELAY ART',
    icon: Star,
    color: 'white',
    description: 'Paint. Pass. Prevail.',
    image: relayArtImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSc62QAUHhQFdo7jy-hMwRvbGJF9yMCEHe32U_YPTPYW8LLyrw/viewform?usp=header',
    date: '18 March 2026',
    rotationClass: 'md:rotate-1'
  },
  {
    title: 'CHAURAHA',
    icon: Users,
    color: 'neon-yellow',
    description: 'Nukkad.',
    image: chaurahaImg,
    link: 'https://forms.gle/fh5erTx21nxxmdoz7',
    date: '18 March 2026',
    rotationClass: 'md:-rotate-2'
  },
  {
    title: 'UNISON',
    icon: Zap,
    color: 'hot-pink',
    description: 'Group Dance Competition',
    image: unisonImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfmPc36pjPqZq3Ky8X-T4taUIPp8GRvhnVD09-Hjqbs-WvhNw/viewform',
    date: '20 March 2026',
    rotationClass: 'md:rotate-1'
  },
  {
    title: 'MDMA',
    icon: MessageSquare,
    color: 'white',
    description: 'The Xtasy quiz.',
    image: mdmaImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdBogrVgIM3cLvId5rS96Mhw9QOCwTMyyRQs8QRTSN2kvXuHg/viewform',
    date: '19 March 2026',
    rotationClass: 'md:-rotate-1'
  },
  {
    title: 'NEWSPRINT',
    icon: BookOpen,
    color: 'neon-yellow',
    description: 'Live Reporting event.',
    image: newsprintImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe37ou2mWrBnFlYmyLE11W6WCkpvsXkVfPOX-g4JNZG-lY1Sw/viewform?usp=header',
    date: '19 March 2026',
    rotationClass: 'md:rotate-2'
  },
  {
    title: 'BATTLE OF BANDS',
    icon: Music,
    color: 'hot-pink',
    description: 'Where music meets mayhem !',
    image: bobImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeBfNEo3Qd-lteFVQldzYQXMBTnL7Bb4j3Qy0IHp0J0rhYclg/viewform',
    date: '20 March 2026',
    rotationClass: 'md:-rotate-1'
  },
  {
    title: 'YUVA SANSAD',
    icon: Landmark,
    color: 'white',
    description: 'Parliamentary Debate.',
    image: yuvaImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSenWAPnUSU8mWU0UcYrgxHLiT4Zeq15jvBgnXTt_bALs6RaRQ/viewform',
    date: '20 March 2026',
    rotationClass: 'md:rotate-1'
  },
  {
    title: 'CINEFACTORY',
    icon: Video,
    color: 'neon-yellow',
    description: 'Short-Film Competition',
    image: cinefactoryImg,
    link: 'https://forms.gle/s6vTmeKPX42WNxz5A',
    date: '20 March 2026',
    rotationClass: 'md:-rotate-2'
  },
  { title: 'SINFONIETTA', icon: Music, color: 'white', description: 'Solo Singing Competition.', image: sinfoniettaImg, link: 'https://forms.gle/Cpy3fD7xYr4XsD6e9', date: '18 March 2026', rotationClass: 'md:rotate-1' },
  { title: 'NRUTYA NAIVEDYA', icon: Zap, color: 'hot-pink', description: 'Classical Dance Competition.', image: nrutyaImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSf-OUwRoDF_evjy82fgntrfP7vLvcxfBKWFdEDkDXXrxyypBw/viewform', date: '18 March 2026', rotationClass: 'md:rotate-2' },
  { title: 'QUESTIONABLE', icon: MessageSquare, color: 'white', description: 'The NSFW Quiz.', image: questionableImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSdBogrVgIM3cLvId5rS96Mhw9QOCwTMyyRQs8QRTSN2kvXuHg/viewform', date: '18 March 2026', rotationClass: 'md:-rotate-1' },
  { title: 'GUESSWORK', icon: Zap, color: 'neon-yellow', description: 'Themed quiz.', image: guessworkImg, link: 'https://forms.gle/wk9euirFZ4xGkjvi9', date: '18 March 2026', rotationClass: 'md:rotate-1' },
  { title: 'DIGICLASH', icon: Star, color: 'white', description: 'Digital Illustration and Graphics design.', image: digiclashImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSdojDYOyN0DuTCrCQXuekE-htGWu52DYXqNZcucuNrSLapmpg/viewform?usp=header', date: '19 March 2026', rotationClass: 'md:-rotate-2' },
  { title: 'SKETCHCLASH', icon: Zap, color: 'neon-yellow', description: 'Art competition', image: sketchclashImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSdojDYOyN0DuTCrCQXuekE-htGWu52DYXqNZcucuNrSLapmpg/viewform?usp=header', date: '19 March 2026', rotationClass: 'md:rotate-1' },
  { title: 'RANGAMANCH', icon: Users, color: 'hot-pink', description: 'Drama Competition', image: rangamanchImg, link: 'https://forms.gle/fh5erTx21nxxmdoz7', date: '19 March 2026', rotationClass: 'md:-rotate-1' },
  { title: 'FACTORY OF FRAMES', icon: BookOpen, color: 'white', description: 'Photography Competition', image: fofImg, link: 'https://forms.gle/dzrxS3DeLW47BVAZ7', date: '19 March 2026', rotationClass: 'md:rotate-2' },
  { title: 'REEL VISION', icon: Zap, color: 'neon-yellow', description: 'Short Video making competition', image: reelVisionImg, link: 'https://forms.gle/YFxcYHdq1E27wAm7A', date: '19 March 2026', rotationClass: 'md:-rotate-2' },
  { title: 'FRONTPAGE FRENZY', icon: MessageSquare, color: 'white', description: 'Newspaper frontpage designing competition.', image: frontpageFrenzyImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSeEbx2tclHZGgYhCkkomMkvNSnCtUHqaXQrHK-YclS9ffEogA/viewform', date: '19 March 2026', rotationClass: 'md:rotate-1' },
  { title: 'OVERTHINK TANK', icon: Users, color: 'hot-pink', description: 'Defend The Undefendable.', image: overthinkTankImg, link: 'http://docs.google.com/forms/d/e/1FAIpQLSenWAPnUSU8mWU0UcYrgxHLiT4Zeq15jvBgnXTt_bALs6RaRQ/viewform', date: '20 March 2026', rotationClass: 'md:-rotate-1' },
];

export const Events = () => {
  const { ref, isInView } = useScrollDepth({ threshold: 0.2 });
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

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
    <>
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
            loading="lazy"
            className="w-full h-full object-contain mix-blend-screen"
            animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="hidden md:block absolute bottom-20 md:bottom-40 left-2 md:left-5 w-24 h-24 md:w-40 md:h-40 opacity-20 pointer-events-none z-0">
          <motion.img
            src={eye}
            alt=""
            loading="lazy"
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
              <EventCard key={event.title} event={event} index={index} onClick={() => setSelectedEvent(event)} />
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
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </Link>
          </motion.div>
        </div>

        <div className="hidden md:block absolute top-20 right-10 w-64 h-64 bg-hot-pink opacity-10 blur-[120px] rounded-full" />
        <div className="hidden md:block absolute bottom-20 left-10 w-64 h-64 bg-neon-yellow opacity-10 blur-[120px] rounded-full" />
      </section>

      {/* Side Panel — placed OUTSIDE <section> to avoid perspective/transform breaking position:fixed */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: selectedEvent ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        className="fixed right-0 top-[88px] h-[calc(100vh-88px)] w-full md:w-[500px] lg:w-[600px] bg-black/95 backdrop-blur-2xl border-l border-white/10 z-[999] shadow-[0_0_60px_rgba(0,0,0,0.6)] flex flex-col overflow-y-auto"
        style={{ pointerEvents: selectedEvent ? 'auto' : 'none' }}
      >
        {selectedEvent && (
          <>
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-hot-pink transition-all group z-50 p-2 bg-black/50 rounded-full backdrop-blur-md hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Panel Content */}
            <div className="flex flex-col px-6 md:px-10 pt-20 pb-10">

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-headingWide text-3xl md:text-4xl text-white uppercase tracking-wider mb-2"
              >
                {selectedEvent.title}
              </motion.h3>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                className="h-1 bg-neon-yellow mb-4"
              />

              <p className="text-white/60 text-sm uppercase tracking-[0.2em] italic mb-2">
                {selectedEvent.date}
              </p>

              <p className="text-white/80 text-base mb-6">
                {selectedEvent.description}
              </p>

              <a
                href={selectedEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-hot-pink text-black font-heading text-lg uppercase tracking-widest overflow-hidden group w-full text-center shadow-[0_0_20px_rgba(255,47,166,0.25)] hover:shadow-[0_0_35px_rgba(255,47,166,0.45)] transition-all mb-8"
              >
                <span className="relative z-10 font-bold">Register Now</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </a>

              {/* Poster */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full flex justify-center"
              >
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full max-h-[70vh] object-contain rounded-lg border border-white/10"
                />
              </motion.div>

            </div>
          </>
        )}
      </motion.div>
    </>
  );
};

interface EventCardProps {
  event: typeof events[0];
  index: number;
  onClick: () => void;
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className={`border-2 md:border-4 ${getBorderColor()} bg-[#080808]/80 backdrop-blur-md p-6 md:p-8 relative overflow-hidden cursor-pointer h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: { duration: 0.3 },
        }}
        animate={{
          scale: isInView ? 1 : 0.95,
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
          <h3 className={`font-headingWide text-xl md:text-3xl ${getTextColor()} uppercase mb-3 md:mb-4 leading-tight tracking-wider`}>
            {event.title}
          </h3>

          <div className={`w-12 md:w-16 h-1 ${event.color === 'white' ? 'bg-white' : `bg-${event.color}`} mb-4 md:mb-6 transition-all duration-300 ${isHovered ? 'w-full' : 'w-16'}`} />

          <p className="text-white/60 text-xs md:text-sm font-body uppercase tracking-[0.2em] mb-4 italic">
            {event.date}
          </p>

          <p className="text-white text-sm md:text-base font-body mb-6 line-clamp-2">
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
