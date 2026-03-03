import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { GrainTexture } from './components/GrainTexture';
import { ScrollProgress } from './components/ScrollProgress';
import { LoaderHandler } from './components/LoaderHandler';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Schedule } from './components/Schedule';
import { Register } from './components/Register';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { TornEdge } from './components/TornEdge';

// Lazy load secondary pages
const EventsPage = lazy(() => import('./components/EventsPage').then(module => ({ default: module.EventsPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(module => ({ default: module.AboutPage })));
const SponsorsPage = lazy(() => import('./components/SponsorsPage').then(module => ({ default: module.SponsorsPage })));
const MerchPage = lazy(() => import('./components/MerchPage').then(module => ({ default: module.MerchPage })));
const TeamPage = lazy(() => import('./components/Team').then(module => ({ default: module.Team })));

function HomePage() {
  return (
    <div className="bg-black min-h-screen selection:bg-hot-pink selection:text-white">
      <Navbar />
      <ScrollProgress />

      <main className="relative">
        <Hero />
        <div id="about"><About /></div>
        <div id="events"><Events /></div>
        <div id="gallery"><Gallery /></div>
        <Schedule />
        <Register />
        
        {/* Adds the punk/grunge torn paper edge before the footer */}
        <TornEdge />
      </main>
      
      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div>
              <h3 className="font-heading text-3xl text-neon-yellow mb-6">CONTACT US</h3>
              <div className="space-y-4 flex flex-col items-center md:items-start text-white/70">
                <a href="mailto:info@xtasyfest.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-hot-pink" />
                  cultsec@outr.ac.in
                </a>
                <a href="tel:+918804928091" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-hot-pink" />
                  Sarthak Mohapatra: +91 6370848789
                </a>
                <a href="tel:+917608823126" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-hot-pink" />
                  Jagrat Sahoo: +91 8249365883
                </a>
                <div className="flex items-center gap-3 hover:text-white transition-colors mt-2">
                  <MapPin className="w-5 h-5 text-hot-pink flex-shrink-0" />
                  <span>College of Engineering and Technology, Bhubaneswar</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-heading text-3xl text-neon-yellow mb-6">FOLLOW US</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/xtasyoutr/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-hot-pink hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-heading text-3xl text-neon-yellow mb-6">QUICK LINKS</h3>
              <div className="space-y-3 flex flex-col items-center md:items-start text-white/70">
                <Link to="/events" className="hover:text-hot-pink transition-colors">Events</Link>
                <Link to="/about" className="hover:text-hot-pink transition-colors">About</Link>
                <Link to="/sponsors" className="hover:text-hot-pink transition-colors">Sponsors</Link>
                <Link to="/team" className="hover:text-hot-pink transition-colors">Team</Link>
                <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-hot-pink transition-colors text-neon-yellow">Register Now</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            <p>&copy; 2026 XTASY Fest. All rights reserved.</p>
            <p className="mt-2">Developed alongside the XTASY Tech Team.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'XTASY 2026 - Annual Cultural Fest';
  }, []);

  useEffect(() => {
    // Smooth scroll for hash links on the home page
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else if (location.pathname !== '/') {
      window.scrollTo(0, 0); // Scroll to top when navigating to a new page
    }
  }, [location]);

  return (
    <>
      <CustomCursor />
      <GrainTexture />
      <LoaderHandler />
      <Suspense fallback={null}> {/* Primary CSS loader handles the delay, React fallback can be null */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
