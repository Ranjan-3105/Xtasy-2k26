import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/XTASY_TRANSPARENT_white.png';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove body scroll lock so user can keep scrolling

  const navLinks = [
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Merch', href: '/merch' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${scrolled
        ? 'bg-black/90 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]'
        : 'bg-transparent'
        }`}
    >
      <div className="flex items-center gap-3 relative z-50">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Xtasy Logo" className="h-7 w-auto object-contain" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="font-body text-white text-lg uppercase tracking-wider hover:text-hot-pink transition-colors relative group font-bold"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-hot-pink transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#E6007E]"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center relative z-50">
        <button
          className="text-neon-yellow hover:text-hot-pink transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isOpen ? "open" : "closed"}
            initial={false}
          >
            <motion.path
              variants={{
                closed: { d: "M 4 6 L 20 6" },
                open: { d: "M 6 6 L 18 18" }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              variants={{
                closed: { d: "M 4 12 L 20 12", opacity: 1 },
                open: { d: "M 12 12 L 12 12", opacity: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              variants={{
                closed: { d: "M 4 18 L 20 18" },
                open: { d: "M 6 18 L 18 6" }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            y: 0,
            scale: 1,
            pointerEvents: "auto",
            transition: {
              type: "spring", stiffness: 300, damping: 24,
              staggerChildren: 0.07, delayChildren: 0.1
            }
          },
          closed: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            pointerEvents: "none",
            transition: {
              duration: 0.2,
              staggerChildren: 0.05, staggerDirection: -1
            }
          }
        }}
        className="absolute top-[80px] right-6 w-48 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-4 py-6 md:hidden origin-top-right z-40 overflow-hidden"
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.name}
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: -20 }
            }}
          >
            <Link
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="font-body text-white text-lg uppercase tracking-wider hover:text-hot-pink transition-colors relative group font-bold"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-hot-pink transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:shadow-[0_0_10px_#E6007E]"></span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};
