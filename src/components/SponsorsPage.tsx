import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

// Import sponsor images
import tm2s from '../assets/sponsors/tm2s.png';
import ohpc from '../assets/sponsors/OHPC_Logo.jpg.jpeg';
import wonderla from '../assets/sponsors/Wonderla.png';
import mcl from '../assets/sponsors/MCL_English.jpg.jpeg';
import cedrafil from '../assets/sponsors/Cedrafil.png';
import indane from '../assets/sponsors/Indane.jpg';
import powergrid from '../assets/sponsors/Power-Grid.jpg';
import opgc from '../assets/sponsors/opgc.jpeg';

const sponsorData = [
  {
    tier: "Title Sponsor",
    color: "text-neon-yellow",
    items: [
      { name: "Takeme2space", subtitle: "Title POWERED", image: tm2s }
    ]
  },
  {
    tier: "Platinum Sponsor",
    color: "text-gray-300 shadow-gray-300",
    items: [
      { name: "OHPC", subtitle: "power partner co powered by", image: ohpc },
      { name: "Wonderla", subtitle: "Entertainment Partner", image: wonderla }
    ]
  },
  {
    tier: "Gold Sponsor",
    color: "text-yellow-500 shadow-yellow-500",
    items: [
      { name: "Indane", subtitle: "fuel partner", image: indane },
      { name: "MCL", subtitle: "", image: mcl }
    ]
  },
  {
    tier: "Silver Sponsor",
    color: "text-gray-400 shadow-gray-400",
    items: [
      { name: "Powergrid", subtitle: "", image: powergrid },
      { name: "OPGC", subtitle: "energy partner", image: opgc },
      { name: "Cedrafil", subtitle: "fashion partner", image: cedrafil }
    ]
  }
];

export const SponsorsPage = () => {
  return (
    <div className="bg-black min-h-screen pt-20 pb-32 flex flex-col items-center text-center relative overflow-hidden">
      <Navbar />

      {/* Decorative background elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-neon-yellow opacity-5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-hot-pink opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 mb-20 px-4 relative z-10"
      >
        <h2 className="font-headingWide text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-wider text-shadow-glow">
          Our <span className="text-neon-yellow">Sponsors</span>
        </h2>
        <div className="w-32 h-1.5 bg-hot-pink mx-auto mt-8" />
      </motion.div>

      <div className="w-full max-w-7xl px-4 md:px-8 space-y-32 relative z-10">
        {sponsorData.map((tierData, index) => (
          <motion.div
            key={tierData.tier}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="flex flex-col items-center w-full"
          >
            <div className="relative mb-16">
              <h3 className={`font-headingWide text-3xl md:text-5xl uppercase tracking-widest px-8 py-4 ${tierData.color} relative z-10 bg-black`}>
                {tierData.tier}
              </h3>
              {/* Background gradient border line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-0" />
            </div>

            <div className={`grid gap-8 md:gap-12 w-full justify-center mx-auto ${tierData.items.length === 1
                ? "grid-cols-1 max-w-3xl"
                : tierData.items.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-5xl"
                  : tierData.items.length === 3
                    ? "grid-cols-1 md:grid-cols-3 max-w-6xl"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl"
              }`}>
              {tierData.items.map((sponsor, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center justify-start p-6 md:p-8 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-white/30 backdrop-blur-sm group shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-300 w-full"
                >
                  <div className={`w-full flex items-center justify-center rounded-xl p-4 md:p-6 mb-6 overflow-hidden ${tierData.tier === "Title Sponsor" ? "h-64 bg-white/5" : "h-48 bg-white/[0.02]"}`}>
                    {sponsor.image ? (
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className={`max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500`}
                      />
                    ) : (
                      <div className="text-white/20 font-headingWide text-2xl tracking-widest uppercase text-center px-4">
                        {sponsor.name}
                      </div>
                    )}
                  </div>
                  <h4 className="font-headingWide text-2xl md:text-3xl text-white uppercase tracking-wider mb-3 group-hover:text-neon-yellow transition-colors text-center leading-tight">
                    {sponsor.name}
                  </h4>
                  {sponsor.subtitle && (
                    <p className="text-white/60 text-sm md:text-base uppercase tracking-widest text-center font-bold">
                      {sponsor.subtitle}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
