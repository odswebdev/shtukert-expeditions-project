import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function HeroSection({ currentSlide }) {
  return (
    <div className="lg:col-span-8 flex flex-col justify-center">
      {/* Location Badge */}
      <motion.div 
        key={`loc-${currentSlide.id}`}
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#e64a19] uppercase mb-2"
      >
        <span>{currentSlide.location}</span>
      </motion.div>

      {/* Main Title */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`title-${currentSlide.id}`}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-['Oswald',sans-serif] uppercase leading-none tracking-tight text-white drop-shadow-2xl"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-normal">
            {currentSlide.titleMain}
          </h1>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-normal text-white/95">
            {currentSlide.titleSub}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Poem */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`poem-${currentSlide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 sm:mt-8 max-w-md text-sm sm:text-base text-white/80 font-light leading-relaxed tracking-wide italic border-l-2 border-white/20 pl-4"
        >
          {currentSlide.poem.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}