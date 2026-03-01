import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/Xtasy_Logo.png';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
         <img src={logo} alt="Xtasy Logo" className="h-10 w-auto object-contain" />
         <Link to="/" className="font-heading text-2xl md:text-3xl text-neon-yellow hover:text-white transition-colors uppercase tracking-wider drop-shadow-[0_0_8px_rgba(254,234,7,0.5)]">
           XTASY
         </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="font-heading text-white text-lg uppercase tracking-wider hover:text-hot-pink transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-hot-pink transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#E6007E]"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button - simple version for now */}
      <div className="md:hidden flex items-center">
         <button className="text-neon-yellow hover:text-hot-pink transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
         </button>
      </div>
    </motion.nav>
  );
};
