import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { GrainTexture } from './components/GrainTexture';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Schedule } from './components/Schedule';
import { Gallery } from './components/Gallery';
import { Register } from './components/Register';
import { Navbar } from './components/Navbar';
import { TornEdge } from './components/TornEdge';
import { Team } from './components/Team';
import { EventsPage } from './components/EventsPage';
import { AboutPage } from './components/AboutPage';
import { SponsorsPage } from './components/SponsorsPage';
import { MerchPage } from './components/MerchPage';

function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Navbar />
      <ScrollProgress />

      <main className="relative">
        <Hero />
        <div id="about"><About /></div>
        <div id="events"><Events /></div>
        <Schedule />
        <Gallery />
        <Register />
        
        {/* Adds the punk/grunge torn paper edge before the footer */}
        <TornEdge />
      </main>

      <footer id="contact" className="bg-black border-t-4 border-neon-yellow py-12 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-3xl text-neon-yellow mb-4">XTASY</h3>
              <p className="text-white text-sm uppercase tracking-wider">
                Annual Cultural Fest 2026
              </p>
            </div>

            <div className="border-t border-white pt-8 text-center space-y-3">
  <p className="text-white text-sm uppercase tracking-wider">
    Contact Information
  </p>

  <div className="text-white text-sm space-y-1">
    <p>
      <span className="font-semibold">Coordinator:</span> Sarthak Mohapatra — 6370848789
    </p>
    <p>
      <span className="font-semibold">Co-Coordinator:</span> Jagrat Sahoo — 8249365883
    </p>
    <p>
      <span className="font-semibold">Email:</span>{" "}
      <a
        href="mailto:cultsec@outr.ac.in"
        className="underline hover:opacity-80 transition duration-300"
      >
        cultsec@outr.ac.in
      </a>
    </p>
  </div>
</div>

           <div>
  <h4 className="font-bold text-hot-pink mb-4 uppercase tracking-wider">
    Follow Us
  </h4>

  <div className="flex items-center gap-3">
    <a
      href="https://www.instagram.com/xtasyoutr/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-white text-sm uppercase tracking-wide transition-all duration-300"
    >
      {/* Instagram SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 transition-all duration-300 group-hover:text-neon-yellow group-hover:scale-110"
      >
        <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm5.25-.88a1.12 1.12 0 1 1-1.12 1.12 1.12 1.12 0 0 1 1.12-1.12z"/>
      </svg>

      <span className="group-hover:text-neon-yellow transition-colors duration-300">
        Instagram
      </span>
    </a>
  </div>
</div>

          </div>

          <div className="border-t border-white pt-8 text-center">
  <p className="text-white text-sm tracking-wide">
    © 2026 XTASY. Designed & developed by{" "}
    <a
      href="https://linkedin.com/in/soumya-ranjan-nanda-849489214"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:opacity-80 transition duration-300"
    >
      SRN
    </a>
    .
  </p>
</div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = 'XTASY 2026 - Annual Cultural Fest';
  }, []);

  return (
    <>
      <CustomCursor />
      <GrainTexture />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/merch" element={<MerchPage />} />
      </Routes>
    </>
  );
}

export default App;
