"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import soumyaImg from "../assets/dev/soumya.jpeg";
import hiteshImg from "../assets/dev/hitesh.jpeg";
import adityaImg from "../assets/dev/aditya.jpeg";
import tanavImg from "../assets/dev/tanav.jpeg";
import sidhantImg from "../assets/dev/sidhant.jpeg";

type Dev = {
  id: number;
  name: string;
  role: string;
  image: string;
  contribution: string;
  github: string;
  linkedin: string;
  instagram: string;
};

const developers: Dev[] = [
  {
    id: 1,
    name: "Soumya Ranjan Nanda",
    role: "Full Stack Developer",
    image: soumyaImg,
    contribution:
      "Designed and developed the main website architecture, animations, and interactive UI components including event pages and developer profiles.",
    github: "https://github.com/Ranjan-3105",
    linkedin: "https://linkedin.com/in/soumya-ranjan-nanda-849489214",
    instagram: "https://www.instagram.com/im_s.r.n/"
  },
  {
    id: 2,
    name: "Hitesh Kumar Nayak",
    role: "Frontend Developer",
    image: hiteshImg,
    contribution:
      "Implemented responsive layouts, UI components, and optimized performance across different devices.",
    github: "https://github.com/Hiteshpy07",
    linkedin: "https://www.linkedin.com/in/hitesh-kumar-nayak-40653b373/",
    instagram: "https://www.instagram.com/_hitesh_.27._/"
  },
  {
    id: 3,
    name: "Aditya Acharya",
    role: "Component Designer",
    image: adityaImg,
    contribution:
      "Contributed creative ideas for various components and assisted in designing several UI elements to enhance the overall user experience.",
    github: "#",
    linkedin: "https://www.linkedin.com/in/aditya-prakash-acharya-a1b971277",
    instagram: "https://www.instagram.com/aditya._acharya._/"
  },
  {
    id: 4,
    name: "Tanav",
    role: "Component Designer",
    image: tanavImg,  
    contribution:
      "Contributed creative ideas for various components and assisted in designing several UI elements to enhance the overall user experience.",
    github: "#",
    linkedin: "#",
    instagram: "https://www.instagram.com/thenvw/"
  },
  {
    id: 5,
    name: "Sidhant Pandey",
    role: "Budget & Deployment Manager",
    image: sidhantImg,  
    contribution:
      "Managed the project budget and oversaw the financial planning for website deployment, ensuring resources were allocated efficiently and deployment costs were handled effectively.",
    github: "https://github.com/Sidhant-pandey1",
    linkedin: "https://www.linkedin.com/in/sidhant-pandey-1/",
    instagram: "https://www.instagram.com/sidhant_pandey1/"
  },
];

export default function Card() {
  const [active, setActive] = useState<Dev | null>(null);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {developers.map((dev) => (
          <motion.div
            key={dev.id}
            layoutId={`card-${dev.id}`}
            onClick={() => setActive(dev)}
            className="cursor-pointer bg-neutral-900 rounded-2xl overflow-hidden hover:scale-105 transition"
          >
            <motion.img
              layoutId={`image-${dev.id}`}
              src={dev.image}
              loading="lazy"
              className="h-72 w-full object-cover object-top"
            />

            <div className="p-4">
              <motion.h3
                layoutId={`name-${dev.id}`}
                className="text-lg font-bold text-white group-hover:text-neon-yellow transition-colors"
              >
                {dev.name}
              </motion.h3>

              <motion.p
                layoutId={`role-${dev.id}`}
                className="text-sm text-neutral-400 font-medium tracking-wide"
              >
                {dev.role}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EXPANDED CARD */}
      <AnimatePresence>
        {active && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            {/* CARD */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <motion.div
                layoutId={`card-${active.id}`}
                className="bg-neutral-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
              >
                <div className="w-full bg-black/50 flex justify-center flex-shrink-0 p-4">
                  <motion.img
                    layoutId={`image-${active.id}`}
                    src={active.image}
                    loading="lazy"
                    className="h-48 sm:h-64 md:h-80 w-full object-contain rounded-xl"
                  />
                </div>

                <div className="p-5 sm:p-8 space-y-3 sm:space-y-5">
                  <motion.h2
                    layoutId={`name-${active.id}`}
                    className="text-3xl font-bold"
                  >
                    {active.name}
                  </motion.h2>

                  <motion.p
                    layoutId={`role-${active.id}`}
                    className="text-lg text-hot-pink font-bold uppercase tracking-widest"
                  >
                    {active.role}
                  </motion.p>

                  <div>
                    <h4 className="text-sm uppercase text-neutral-500 mb-2">
                      Contribution
                    </h4>
                    <p className="text-neutral-300 leading-relaxed">
                      {active.contribution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={active.github}
                      target="_blank"
                      className="px-4 py-2 bg-white text-black hover:bg-neutral-200 transition-colors rounded-lg font-semibold"
                    >
                      GitHub
                    </a>

                    <a
                      href={active.linkedin}
                      target="_blank"
                      className="px-4 py-2 border border-neutral-600 hover:text-neon-yellow hover:border-neon-yellow transition-colors rounded-lg"
                    >
                      LinkedIn
                    </a>

                    {active.instagram && (
                      <a
                        href={active.instagram}
                        target="_blank"
                        className="px-4 py-2 border border-neutral-600 text-hot-pink hover:bg-hot-pink hover:text-white hover:border-hot-pink transition-all rounded-lg font-semibold"
                      >
                        Instagram
                      </a>
                    )}

                    <button
                      onClick={() => setActive(null)}
                      className="ml-auto text-neutral-400 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}