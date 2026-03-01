import { Navbar } from './Navbar';

export const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen pt-20 flex flex-col items-center justify-center text-center">
      <Navbar />
      <h2 className="font-headingWide text-4xl md:text-6xl text-white uppercase tracking-wider text-shadow-glow">
        About <span className="text-neon-yellow">Coming Soon</span>
      </h2>
      <p className="text-white mt-6 uppercase tracking-widest text-sm md:text-base">
        Check back shortly to learn more about Xtasy.
      </p>
    </div>
  );
};
