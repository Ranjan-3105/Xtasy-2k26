import { Navbar } from "./Navbar";
import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import aboutBg from "../assets/about_bg.png";

/* -----------------------------
   COUNT UP NUMBER COMPONENT
------------------------------ */

const CountUp = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

/* -----------------------------
   DONUT CHART COMPONENT
------------------------------ */

const Donut = ({
  percent,
  color,
  children,
}: {
  percent: number;
  color: string;
  children: React.ReactNode;
}) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-6">
      <svg width="220" height="220" className="-rotate-90">

        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#222"
          strokeWidth="16"
          fill="transparent"
        />

        <motion.circle
          cx="110"
          cy="110"
          r={radius}
          stroke={color}
          strokeWidth="16"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />

        <circle cx="110" cy="110" r="65" fill="black" />
      </svg>

      <div className="text-white/70 text-sm text-center font-body">{children}</div>
    </div>
  );
};

export const AboutPage = () => {

  /* -----------------------------
     PARALLAX BACKGROUND
  ------------------------------ */

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <div className="bg-black min-h-screen relative overflow-hidden font-body">
      <Navbar />

      {/* BACKGROUND WITH PARALLAX */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          style={{ y }}
          initial={{ filter: "grayscale(100%) blur(2px)" }}
          whileInView={{ filter: "grayscale(0%) blur(0px)" }}
          transition={{ duration: 2 }}
          src={aboutBg}
          alt="OUTR Campus"
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />

        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-32 relative z-10">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-4 py-1 border border-hot-pink text-hot-pink text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-hot-pink/5 font-body">
            Legacy of XTASY
          </div>

          <h2 className="font-headingWide text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter leading-none mb-16">
            THE PULSE OF <span className="text-neon-yellow">OUTR</span>
          </h2>
        </motion.div>

        {/* INTRO + STATS */}

        <div className="grid lg:grid-cols-2 gap-16 mb-40">

          <div className="space-y-8 text-white/70 text-xl leading-relaxed font-body">

            <p>
              XTASY is the flagship cultural festival of OUTR where creativity,
              music and innovation collide. For three electrifying days the
              campus transforms into a stage of talent and unforgettable
              moments.
            </p>

            <p>
              From Battle of Bands to dance competitions and hackathons, XTASY
              attracts participants and audiences from colleges across the
              region.
            </p>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 gap-6">

            {[
              { label: "Days of XTASY", value: 3 },
              { label: "Electrifying Events", value: 50 },
              { label: "Expected Footfall", value: 10000 },
              { label: "Years of Legacy", value: 25 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-white/5 border border-white/10 flex flex-col items-center justify-center p-6 hover:bg-hot-pink hover:text-black transition-all group"
              >
                <span className="text-5xl md:text-7xl font-heading text-neon-yellow group-hover:text-black transition-colors">
                  <CountUp value={stat.value} />+
                </span>

                <span className="text-xs text-white/60 tracking-[0.2em] uppercase mt-4 text-center font-bold font-body group-hover:text-black transition-colors">
                  {stat.label}
                </span>

              </motion.div>
            ))}
          </div>
        </div>

        {/* WHY SPONSOR US */}

        <section className="mb-40">

          <h3 className="font-headingWide text-5xl md:text-7xl text-white uppercase mb-16 underline decoration-hot-pink decoration-4 underline-offset-8">
            WHY <span className="text-neon-yellow">SPONSOR</span> US
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {[
              { value: 7000, label: "Footfall" },
              { value: 100, label: "Acres of Campus" },
              { value: 3, label: "Nights" },
              { value: 20, label: "Colleges" },
              { value: 30, label: "Events" },
              { value: 50, label: "Sponsors" },
            ].map((stat, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center hover:border-hot-pink hover:bg-hot-pink hover:text-black transition-all group"
              >
                <span className="text-4xl md:text-5xl font-heading text-neon-yellow group-hover:text-black transition-colors">
                  <CountUp value={stat.value} />+
                </span>

                <span className="mt-3 text-xs tracking-[0.2em] uppercase text-white/60 text-center font-bold font-body group-hover:text-black transition-colors">
                  {stat.label}
                </span>

              </motion.div>
            ))}
          </div>
        </section>

        {/* CROWD DEMOGRAPHICS */}

        <section>

          <h3 className="font-headingWide text-5xl md:text-7xl text-white uppercase mb-20 underline decoration-neon-yellow decoration-4 underline-offset-8">
            CROWD <span className="text-hot-pink">DEMOGRAPHICS</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-20">

            <Donut percent={80} color="#ff2fa6">
              <p>18-25 Years — 80%</p>
              <p>&gt;25 Years — 15%</p>
              <p>&lt;18 Years — 5%</p>
            </Donut>

            <Donut percent={70} color="#facc15">
              <p>Male — 70%</p>
              <p>Female — 30%</p>
            </Donut>

          </div>
        </section>
      </div>
    </div>
  );
};