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
  ArrowRight,
  Camera,
  Pen,
} from 'lucide-react';
import eye from '../assets/eye.png';
import guitar from '../assets/guitarElem1.png';

// Import event images
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

interface EventItem {
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  color: string;
  image: string;
  link: string;
}

interface DayGroup {
  day: string;
  date: string;
  accent: 'neon-yellow' | 'hot-pink';
  events: EventItem[];
}

const timeline: DayGroup[] = [
  {
    day: 'DAY 0',
    date: '17 MARCH',
    accent: 'neon-yellow',
    events: [
      { title: 'BURNOUT', subtitle: 'The Dance Battle', icon: Zap, color: 'neon-yellow', image: burnoutImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSfR7jSt_zoEDOWsjwQ7qvsmv7dqBA623yUNSUXnKrZM2OXV8Q/viewform' },
    ],
  },
  {
    day: 'DAY 1',
    date: '18 MARCH',
    accent: 'hot-pink',
    events: [
      { title: 'GUESSWORK IN PROGRESS', subtitle: 'Themed Quiz', icon: MessageSquare, color: 'neon-yellow', image: guessworkImg, link: 'https://forms.gle/wk9euirFZ4xGkjvi9' },
      { title: 'RELAY ART', subtitle: 'Team Painting Competition', icon: Star, color: 'white', image: relayArtImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSc62QAUHhQFdo7jy-hMwRvbGJF9yMCEHe32U_YPTPYW8LLyrw/viewform?usp=header' },
      { title: 'SINFONIETTA', subtitle: 'Solo Singing Competition', icon: Music, color: 'hot-pink', image: sinfoniettaImg, link: 'https://forms.gle/Cpy3fD7xYr4XsD6e9' },
      { title: 'CHAURAHA', subtitle: 'Nukkad Natak', icon: Users, color: 'neon-yellow', image: chaurahaImg, link: 'https://forms.gle/fh5erTx21nxxmdoz7' },
      { title: 'NRUTYA NAIVEDYA', subtitle: 'Solo Odissi Dance Competition', icon: Zap, color: 'hot-pink', image: nrutyaImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSf-OUwRoDF_evjy82fgntrfP7vLvcxfBKWFdEDkDXXrxyypBw/viewform' },
      { title: 'YUVA SANSAD', subtitle: 'Parliamentary Debate', icon: Landmark, color: 'white', image: yuvaImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSenWAPnUSU8mWU0UcYrgxHLiT4Zeq15jvBgnXTt_bALs6RaRQ/viewform' },
      { title: 'FACTORY OF FRAMES', subtitle: 'Photography Workshop', icon: Camera, color: 'neon-yellow', image: fofImg, link: 'https://forms.gle/dzrxS3DeLW47BVAZ7' },
      { title: 'REEL VISION', subtitle: 'Videography Workshop', icon: Video, color: 'hot-pink', image: reelVisionImg, link: 'https://forms.gle/YFxcYHdq1E27wAm7A' },
      { title: 'FRONTPAGE FRENZY', subtitle: 'Newspaper Frontpage Design Competition', icon: BookOpen, color: 'white', image: frontpageFrenzyImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSeEbx2tclHZGgYhCkkomMkvNSnCtUHqaXQrHK-YclS9ffEogA/viewform' },
    ],
  },
  {
    day: 'DAY 2',
    date: '19 MARCH',
    accent: 'neon-yellow',
    events: [
      { title: 'MDMA', subtitle: 'The Xtasy Quiz', icon: MessageSquare, color: 'neon-yellow', image: mdmaImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSdBogrVgIM3cLvId5rS96Mhw9QOCwTMyyRQs8QRTSN2kvXuHg/viewform' },
      { title: 'QUESTIONABLE', subtitle: 'The NSFW Quiz', icon: MessageSquare, color: 'hot-pink', image: questionableImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSdBogrVgIM3cLvId5rS96Mhw9QOCwTMyyRQs8QRTSN2kvXuHg/viewform' },
      { title: 'UNISON', subtitle: 'Group Dance Competition', icon: Zap, color: 'white', image: unisonImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSfmPc36pjPqZq3Ky8X-T4taUIPp8GRvhnVD09-Hjqbs-WvhNw/viewform' },
      { title: 'RANGAMANCH', subtitle: 'Monoact / Duoact Competition', icon: Users, color: 'neon-yellow', image: rangamanchImg, link: 'https://forms.gle/fh5erTx21nxxmdoz7' },
      { title: 'CINEFACTORY', subtitle: 'Short Film Making Competition', icon: Video, color: 'hot-pink', image: cinefactoryImg, link: 'https://forms.gle/s6vTmeKPX42WNxz5A' },
      { title: 'NEWSPRINT', subtitle: 'News Reporting Competition', icon: BookOpen, color: 'white', image: newsprintImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSe37ou2mWrBnFlYmyLE11W6WCkpvsXkVfPOX-g4JNZG-lY1Sw/viewform?usp=header' },
      { title: 'DIGICLASH', subtitle: 'Digital Art & Graphic Design Competition', icon: Pen, color: 'neon-yellow', image: digiclashImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSdojDYOyN0DuTCrCQXuekE-htGWu52DYXqNZcucuNrSLapmpg/viewform?usp=header' },
      { title: 'SKETCHCLASH', subtitle: 'Sketch Competition', icon: Star, color: 'hot-pink', image: sketchclashImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSdojDYOyN0DuTCrCQXuekE-htGWu52DYXqNZcucuNrSLapmpg/viewform?usp=header' },
      { title: 'OVERTHINKTANK', subtitle: 'Unpopular Opinion Courtroom', icon: Users, color: 'white', image: overthinkTankImg, link: 'http://docs.google.com/forms/d/e/1FAIpQLSenWAPnUSU8mWU0UcYrgxHLiT4Zeq15jvBgnXTt_bALs6RaRQ/viewform' },
    ],
  },
  {
    day: 'DAY 3',
    date: '20 MARCH',
    accent: 'hot-pink',
    events: [
      { title: 'BATTLE OF BANDS', subtitle: 'When Music Meets Mayhem', icon: Music, color: 'hot-pink', image: bobImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSeBfNEo3Qd-lteFVQldzYQXMBTnL7Bb4j3Qy0IHp0J0rhYclg/viewform' },
    ],
  },
];

export const Events = () => {
  const { ref, isInView } = useScrollDepth({ threshold: 0.05 });
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <>
      <section
        ref={ref}
        className="min-h-screen bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      >
        {/* Decorative elements */}
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

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
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

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-[2px] bg-white/10" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((group, groupIndex) => (
                <motion.div
                  key={group.day}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="relative"
                >
                  {/* Day Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`relative z-10 w-[38px] h-[38px] md:w-[46px] md:h-[46px] rounded-full flex items-center justify-center border-[3px] ${group.accent === 'neon-yellow' ? 'border-neon-yellow bg-neon-yellow/10' : 'border-hot-pink bg-hot-pink/10'
                      }`}>
                      <div className={`w-3 h-3 rounded-full ${group.accent === 'neon-yellow' ? 'bg-neon-yellow' : 'bg-hot-pink'
                        }`} />
                    </div>
                    <div>
                      <h3 className={`font-headingWide text-2xl md:text-4xl uppercase tracking-wider ${group.accent === 'neon-yellow' ? 'text-neon-yellow' : 'text-hot-pink'
                        }`}>
                        {group.day}
                      </h3>
                      <p className="text-white/50 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                        {group.date}
                      </p>
                    </div>
                  </div>

                  {/* Event items */}
                  <div className="ml-[18px] md:ml-[22px] pl-8 md:pl-10 border-l-[2px] border-white/5 space-y-3">
                    {group.events.map((event, eventIndex) => {
                      const Icon = event.icon;
                      return (
                        <motion.div
                          key={event.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: eventIndex * 0.05 }}
                          viewport={{ once: true }}
                          onClick={() => setSelectedEvent(event)}
                          className="group relative flex items-center gap-4 p-3 md:p-4 cursor-pointer rounded-sm
             bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15
             transition-all duration-300"
                        >
                          {/* Dot connector */}
                          <div
                            className={`absolute -left-[calc(2rem+5px)] md:-left-[calc(2.5rem+5px)] w-[8px] h-[8px] rounded-full ${event.color === "neon-yellow"
                                ? "bg-neon-yellow"
                                : event.color === "hot-pink"
                                  ? "bg-hot-pink"
                                  : "bg-white"
                              } opacity-40 group-hover:opacity-100 transition-opacity`}
                          />

                          {/* Icon */}
                          <div
                            className={`w-9 h-9 md:w-10 md:h-10 rounded flex items-center justify-center flex-shrink-0 ${event.color === "neon-yellow"
                                ? "bg-neon-yellow/10 text-neon-yellow"
                                : event.color === "hot-pink"
                                  ? "bg-hot-pink/10 text-hot-pink"
                                  : "bg-white/10 text-white"
                              }`}
                          >
                            <Icon className="w-4 h-4 md:w-5 md:h-5" />
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-headingWide text-lg md:text-xl text-white uppercase tracking-wider group-hover:text-neon-yellow transition-colors truncate">
                              {event.title}
                            </h4>

                            <p className="text-white/40 text-xs md:text-sm font-body truncate">
                              {event.subtitle}
                            </p>
                          </div>

                          {/* Arrow */}
                          <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Browse All Events CTA */}
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

      {/* Side Panel */}
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

              <p className="text-white/80 text-base mb-6">
                {selectedEvent.subtitle}
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
