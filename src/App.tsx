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
import { ContactPage } from './components/ContactPage';

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

            <div>
              <h4 className="font-bold text-hot-pink mb-4 uppercase tracking-wider">Contact</h4>
              <p className="text-white text-sm mb-2">Email: info@xtasy2026.com</p>
              <p className="text-white text-sm">Phone: +91 1234567890</p>
            </div>

            <div>
              <h4 className="font-bold text-hot-pink mb-4 uppercase tracking-wider">Follow Us</h4>
              <div className="flex gap-4">
                {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white hover:text-neon-yellow transition-colors text-sm uppercase"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white pt-8 text-center">
            <p className="text-white text-sm uppercase tracking-wider">
              © 2026 XTASY. ALL RIGHTS RESERVED.
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
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
