"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Dev = {
  id: number;
  name: string;
  role: string;
  image: string;
  contribution: string;
  github: string;
  linkedin: string;
};

const developers: Dev[] = [
  {
    id: 1,
    name: "Soumya Ranjan Nanda",
    role: "Full Stack Developer",
    image: "/src/assets/dev/soumya.jpeg",
    contribution:
      "Designed and developed the main website architecture, animations, and interactive UI components including event pages and developer profiles.",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/"
  },
  {
    id: 2,
    name: "Developer Name",
    role: "Frontend Developer",
    image: "/src/assets/dev/dev2.jpg",
    contribution:
      "Implemented responsive layouts, UI components, and optimized performance across different devices.",
    github: "#",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Developer Name",
    role: "Backend Developer",
    image: "/src/assets/dev/dev3.jpg",
    contribution:
      "Handled backend logic, integrations, and data flow for registrations and system operations.",
    github: "#",
    linkedin: "#"
  }
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
              className="h-72 w-full object-cover"
            />

            <div className="p-4">
              <motion.h3
                layoutId={`name-${dev.id}`}
                className="text-lg font-semibold"
              >
                {dev.name}
              </motion.h3>

              <motion.p
                layoutId={`role-${dev.id}`}
                className="text-sm text-neutral-400"
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
                className="bg-neutral-900 rounded-2xl max-w-2xl w-full overflow-hidden"
              >
                <motion.img
                  layoutId={`image-${active.id}`}
                  src={active.image}
                  className="h-80 w-full object-cover"
                />

                <div className="p-8 space-y-5">
                  <motion.h2
                    layoutId={`name-${active.id}`}
                    className="text-3xl font-bold"
                  >
                    {active.name}
                  </motion.h2>

                  <motion.p
                    layoutId={`role-${active.id}`}
                    className="text-neutral-400"
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

                  <div className="flex gap-4 pt-4">
                    <a
                      href={active.github}
                      target="_blank"
                      className="px-4 py-2 bg-white text-black rounded-lg font-semibold"
                    >
                      GitHub
                    </a>

                    <a
                      href={active.linkedin}
                      target="_blank"
                      className="px-4 py-2 border border-neutral-600 rounded-lg"
                    >
                      LinkedIn
                    </a>

                    <button
                      onClick={() => setActive(null)}
                      className="ml-auto text-neutral-400"
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