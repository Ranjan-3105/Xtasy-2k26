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

const items = [
  { image: burnoutImg, link: 'https://forms.gle/5gUebDc1uUkm9LvB7', title: 'BURNOUT', description: '17 March 2026' },
  { image: sinfoniettaImg, link: 'https://forms.gle/rJmtrQNWWPG9exwk8', title: 'SINFONIETTA', description: '18 March 2026' },
  { image: relayArtImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSc62QAUHhQFdo7jy-hMwRvbGJF9yMCEHe32U_YPTPYW8LLyrw/viewform?usp=header', title: 'RELAY ART', description: '18 March 2026' },
  { image: chaurahaImg, link: '#', title: 'CHAURAHA', description: '18 March 2026' },
  { image: nrutyaImg, link: 'https://forms.gle/fRJNPna72HkMeidh9', title: 'NRUTYA', description: '18 March 2026' },
  { image: questionableImg, link: 'https://forms.gle/wk9euirFZ4xGkjvi9', title: 'QUESTIONABLE', description: '18 March 2026' },
  { image: guessworkImg, link: 'https://forms.gle/wk9euirFZ4xGkjvi9', title: 'GUESSWORK', description: '18 March 2026' },
  { image: digiclashImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSdojDYOyN0DuTCrCQXuekE-htGWu52DYXqNZcucuNrSLapmpg/viewform?usp=header', title: 'DIGICLASH', description: '19 March 2026' },
  { image: sketchclashImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSdojDYOyN0DuTCrCQXuekE-htGWu52DYXqNZcucuNrSLapmpg/viewform?usp=header', title: 'SKETCHCLASH', description: '19 March 2026' },
  { image: rangamanchImg, link: '#', title: 'RANGAMANCH', description: '19 March 2026' },
  { image: fofImg, link: 'https://forms.gle/dzrxS3DeLW47BVAZ7', title: 'FACTORY OF FRAMES', description: '19 March 2026' },
  { image: mdmaImg, link: 'https://forms.gle/SAPat5UtnUrGwohG7', title: 'MDMA', description: '19 March 2026' },
  { image: reelVisionImg, link: 'https://forms.gle/YFxcYHdq1E27wAm7A', title: 'REEL VISION', description: '19 March 2026' },
  { image: newsprintImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSe37ou2mWrBnFlYmyLE11W6WCkpvsXkVfPOX-g4JNZG-lY1Sw/viewform?usp=header', title: 'NEWSPRINT', description: '19 March 2026' },
  { image: bobImg, link: 'https://docs.google.com/forms/d/e/1FAIpQLSenWAPnUSU8mWU0UcYrgxHLiT4Zeq15jvBgnXTt_bALs6RaRQ/viewform?usp=header', title: 'BATTLE OF BANDS', description: '20 March 2026' },
  { image: unisonImg, link: 'https://forms.gle/waLV4rjXXyfDKyaT7', title: 'UNISON', description: '20 March 2026' },
  { image: yuvaImg, link: 'https://forms.gle/Cpy3fD7xYr4XsD6e9', title: 'YUVA SANSAD', description: '20 March 2026' },
  { image: cinefactoryImg, link: 'https://forms.gle/s6vTmeKPX42WNxz5A', title: 'CINEFACTORY', description: '20 March 2026' },
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
          <InfiniteMenu items={items} scale={scale} onActionClick={setSelectedEvent} />
        </Suspense>
      </div>

      {/* Side Panel */}
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: selectedEvent ? 0 : '100%', opacity: selectedEvent ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-full md:w-[600px] lg:w-[800px] bg-black/95 backdrop-blur-xl border-l border-hot-pink/30 z-[100] shadow-[0_0_50px_rgba(255,20,147,0.2)] flex flex-col pt-20 pb-10 overflow-y-auto"
        style={{ pointerEvents: selectedEvent ? 'auto' : 'none' }}
      >
        {selectedEvent && (
          <>
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-hot-pink transition-colors group z-50 p-2 bg-black/50 rounded-full backdrop-blur-md"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:rotate-90 transition-transform duration-300">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h3 className="font-headingWide text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider text-shadow-glow mb-6 px-6 md:px-10 text-center md:text-left mt-4">
              {selectedEvent.title}
            </h3>

            <div className="w-full flex-1 flex flex-col justify-start">
              <img
                src={selectedEvent.image}
                alt="Event Poster"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="px-6 md:px-10 mt-8">
              <a
                href={selectedEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-8 py-5 bg-transparent border-2 border-hot-pink text-white font-bold uppercase tracking-widest text-lg overflow-hidden group w-full text-center"
              >
                <div className="absolute inset-0 bg-hot-pink translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">Register Now</span>
              </a>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
