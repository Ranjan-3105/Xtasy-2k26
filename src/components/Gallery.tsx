import { motion } from 'framer-motion';
import { useScrollDepth } from '../hooks/useScrollDepth';
import { Camera } from 'lucide-react';

import img1 from '../assets/AMUZA 2 1.png';
import img2 from '../assets/AcrossTheSpiderVerse 1.png';
import img3 from '../assets/INKVENT 2 1.png';
import img4 from '../assets/PARTHO_3 1.png';
import img5 from '../assets/PF 3 1.png';
import img6 from '../assets/PF 4.png';
import img7 from '../assets/PHOTOFACTORY 1.png';
import img8 from '../assets/QUIZ 01 1.png';

const galleryImages = [
  { id: 1, src: img1, height: 'h-64', overlay: 'neon-yellow' },
  { id: 2, src: img2, height: 'h-80', overlay: 'hot-pink' },
  { id: 3, src: img3, height: 'h-72', overlay: 'neon-yellow' },
  { id: 4, src: img4, height: 'h-64', overlay: 'hot-pink' },
  { id: 5, src: img5, height: 'h-96', overlay: 'neon-yellow' },
  { id: 6, src: img6, height: 'h-72', overlay: 'hot-pink' },
  { id: 7, src: img7, height: 'h-80', overlay: 'neon-yellow' },
  { id: 8, src: img8, height: 'h-64', overlay: 'hot-pink' },
];

export const Gallery = () => {
  const { ref, isInView } = useScrollDepth({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-6 mb-6">
            <Camera className="w-12 h-12 md:w-16 md:h-16 text-hot-pink" />
            <h2 className="font-headingWide text-6xl md:text-8xl lg:text-9xl uppercase text-white leading-none">
              GALLERY
            </h2>
          </div>
          <div className="w-48 h-2 bg-neon-yellow" />
          <p className="text-white text-lg md:text-xl mt-6 uppercase tracking-widest font-heading">
            GLIMPSES FROM PAST EDITIONS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute top-40 left-20 w-96 h-96 bg-hot-pink opacity-5 blur-[150px] rounded-full" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-neon-yellow opacity-5 blur-[150px] rounded-full" />
    </section>
  );
};

interface GalleryItemProps {
  image: typeof galleryImages[0];
  index: number;
}

const GalleryItem = ({ image, index }: GalleryItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <motion.div
        className={`${image.height} bg-gray-900 relative`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={image.src} alt={`Gallery ${image.id}`} className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />

        <motion.div
          className={`absolute inset-0 ${
            image.overlay === 'neon-yellow' ? 'bg-neon-yellow' : 'bg-hot-pink'
          } mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
        />

        <motion.div
          className="absolute inset-0 border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          whileHover={{
            scale: 0.95,
          }}
        />

        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <div className={`w-8 h-8 ${
            image.overlay === 'neon-yellow' ? 'bg-neon-yellow' : 'bg-hot-pink'
          }`} />
        </motion.div>
      </motion.div>

      <div className={`absolute bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}>
        <p className="text-white text-sm font-bold uppercase tracking-widest font-body">
          EVENT HIGHLIGHT #{image.id}
        </p>
      </div>
    </motion.div>
  );
};
