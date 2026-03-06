import { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

const InfiniteMenu = lazy(() => import('./InfiniteMenu'));

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

const items = [
  {
    image: burnoutImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSfR7jSt_zoEDOWsjwQ7qvsmv7dqBA623yUNSUXnKrZM2OXV8Q/viewform',
    title: 'BURNOUT',
    description: 'Dance Battle.',
    date: '17 March 2026'
  },

  {
    image: sinfoniettaImg,
    link: 'https://forms.gle/Cpy3fD7xYr4XsD6e9',
    title: 'SINFONIETTA',
    description: 'Solo Singing Competition.',
    date: '18 March 2026'
  },

  {
    image: relayArtImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSc62QAUHhQFdo7jy-hMwRvbGJF9yMCEHe32U_YPTPYW8LLyrw/viewform?usp=header',
    title: 'RELAY ART',
    description: 'Paint. Pass. Prevail.',
    date: '18 March 2026'
  },

  {
    image: chaurahaImg,
    link: 'https://forms.gle/fh5erTx21nxxmdoz7',
    title: 'CHAURAHA',
    description: 'Nukkad.',
    date: '18 March 2026'
  },

  {
    image: nrutyaImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf-OUwRoDF_evjy82fgntrfP7vLvcxfBKWFdEDkDXXrxyypBw/viewform',
    title: 'NRUTYA NAIVEDYA',
    description: 'Classical Dance Competition.',
    date: '18 March 2026'
  },

  {
    image: questionableImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdBogrVgIM3cLvId5rS96Mhw9QOCwTMyyRQs8QRTSN2kvXuHg/viewform',
    title: 'QUESTIONABLE',
    description: 'The NSFW Quiz.',
    date: '18 March 2026'
  },

  {
    image: guessworkImg,
    link: 'https://forms.gle/wk9euirFZ4xGkjvi9',
    title: 'GUESSWORK',
    description: 'Themed quiz.',
    date: '18 March 2026'
  },

  {
    image: digiclashImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdojDYOyN0DuTCrCQXuekE-htGWu52DYXqNZcucuNrSLapmpg/viewform?usp=header',
    title: 'DIGICLASH',
    description: 'Digital Illustration and Graphics design.',
    date: '19 March 2026'
  },

  {
    image: sketchclashImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdojDYOyN0DuTCrCQXuekE-htGWu52DYXqNZcucuNrSLapmpg/viewform?usp=header',
    title: 'SKETCHCLASH',
    description: 'Art competition',
    date: '19 March 2026'
  },

  {
    image: rangamanchImg,
    link: 'https://forms.gle/fh5erTx21nxxmdoz7',
    title: 'RANGAMANCH',
    description: 'Drama Competition',
    date: '19 March 2026'
  },

  {
    image: fofImg,
    link: 'https://forms.gle/dzrxS3DeLW47BVAZ7',
    title: 'FACTORY OF FRAMES',
    description: 'Photography Competition',
    date: '19 March 2026'
  },

  {
    image: mdmaImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdBogrVgIM3cLvId5rS96Mhw9QOCwTMyyRQs8QRTSN2kvXuHg/viewform',
    title: 'MDMA',
    description: 'The Xtasy quiz.',
    date: '19 March 2026'
  },

  {
    image: reelVisionImg,
    link: 'https://forms.gle/YFxcYHdq1E27wAm7A',
    title: 'REEL VISION',
    description: 'Short Video making competition',
    date: '19 March 2026'
  },

  {
    image: newsprintImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe37ou2mWrBnFlYmyLE11W6WCkpvsXkVfPOX-g4JNZG-lY1Sw/viewform?usp=header',
    title: 'NEWSPRINT',
    description: 'Live Reporting event.',
    date: '19 March 2026'
  },

  {
    image: bobImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeBfNEo3Qd-lteFVQldzYQXMBTnL7Bb4j3Qy0IHp0J0rhYclg/viewform',
    title: 'BATTLE OF BANDS',
    description: 'Where music meets mayhem !',
    date: '20 March 2026'
  },

  {
    image: unisonImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfmPc36pjPqZq3Ky8X-T4taUIPp8GRvhnVD09-Hjqbs-WvhNw/viewform',
    title: 'UNISON',
    description: 'Group Dance Competition',
    date: '20 March 2026'
  },

  {
    image: yuvaImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSenWAPnUSU8mWU0UcYrgxHLiT4Zeq15jvBgnXTt_bALs6RaRQ/viewform',
    title: 'YUVA SANSAD',
    description: 'Parliamentary Debate.',
    date: '20 March 2026'
  },

  {
    image: cinefactoryImg,
    link: 'https://forms.gle/s6vTmeKPX42WNxz5A',
    title: 'CINEFACTORY',
    description: 'Short-Film Competition',
    date: '20 March 2026'
  },

  {
    image: frontpageFrenzyImg,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeEbx2tclHZGgYhCkkomMkvNSnCtUHqaXQrHK-YclS9ffEogA/viewform',
    title: 'FRONTPAGE FRENZY',
    description: 'Newspaper frontpage designing competition.',
    date: '19 March 2026'
  },

  {
    image: overthinkTankImg,
    link: 'http://docs.google.com/forms/d/e/1FAIpQLSenWAPnUSU8mWU0UcYrgxHLiT4Zeq15jvBgnXTt_bALs6RaRQ/viewform',
    title: 'OVERTHINK TANK',
    description: 'Defend The Undefendable.',
    date: '20 March 2026'
  },
];

export const EventsPage = () => {
  const [scale, setScale] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => {
      // Scale down the globe on smaller screens so the side text fits
      if (window.innerWidth < 768) {
        setScale(1.1);
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
            <span className="md:hidden">THE<br /></span>
            <span className="text-neon-yellow">EVENTS</span>
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-2 bg-hot-pink mx-auto mt-4 md:mt-6" />
          <p className="text-white/80 mt-6 md:mt-10 uppercase tracking-[0.3em] text-sm md:text-xl font-bold italic">
            Scroll and drag to discover what's coming
          </p>
        </motion.div>
      </div>

      <div className="w-full flex-1 relative z-0 flex items-center justify-center -mt-10 md:mt-0" style={{ minHeight: '500px' }}>
        <Suspense fallback={<div className="text-white/50 animate-pulse font-heading tracking-widest">LOADING 3D MODULE...</div>}>
          <InfiniteMenu items={items} scale={scale} onActionClick={setSelectedEvent} />
        </Suspense>
      </div>

      {/* Side Panel */}
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: selectedEvent ? 0 : '100%', opacity: selectedEvent ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[600px] bg-black/90 backdrop-blur-3xl border-l border-white/10 z-[200] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col pt-24 pb-10 overflow-y-auto"
        style={{ pointerEvents: selectedEvent ? 'auto' : 'none' }}
      >
        {selectedEvent && (
          <>
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-hot-pink transition-all group z-50 p-2 bg-black/50 rounded-full backdrop-blur-md hover:scale-110 active:scale-95"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:rotate-90 transition-transform duration-300">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="px-6 md:px-10 flex flex-col">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-headingWide text-3xl md:text-4xl text-white uppercase tracking-wider text-shadow-glow mb-2"
              >
                {selectedEvent.title}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '80px' }}
                className="h-1 bg-hot-pink mb-4 shadow-[0_0_15px_rgba(255,20,147,0.5)]"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/60 text-sm font-body uppercase tracking-[0.2em] mb-2 italic"
              >
                {selectedEvent.date}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-base font-body mb-5 leading-relaxed"
              >
                {selectedEvent.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-5"
              >
                <a
                  href={selectedEvent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center px-8 py-4 bg-hot-pink text-black font-heading text-lg uppercase tracking-widest overflow-hidden group w-full text-center shadow-[0_0_20px_rgba(255,47,166,0.3)] hover:shadow-[0_0_30px_rgba(255,47,166,0.5)] transition-all transform"
                >
                  <span className="relative z-10 font-bold">Register Now</span>
                  <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-6 bg-black flex items-center justify-center"
              >
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full max-h-[95vh] object-contain"
                />
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
