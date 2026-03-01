import { Navbar } from './Navbar';

export const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen pt-20 flex flex-col items-center justify-center text-center">
      <Navbar />
      <h2 className="font-headingWide text-4xl md:text-6xl text-white uppercase tracking-wider text-shadow-glow">
        Contact Us <span className="text-neon-yellow">Coming Soon</span>
      </h2>
      <p className="text-white mt-6 uppercase tracking-widest text-sm md:text-base">
        Our contact information will be available shortly.
      </p>
    </div>
  );
};
