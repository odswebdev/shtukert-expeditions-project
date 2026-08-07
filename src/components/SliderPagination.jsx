import React from 'react';
import { motion } from 'framer-motion';

export default function SliderPagination({ slides, activeIndex, onSelectIndex }) {
  return (
    <div className="lg:col-span-4 flex justify-end items-center my-4 lg:my-0">
      <div className="flex flex-col items-end space-y-2 font-mono">
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={slide.id}
              onClick={() => onSelectIndex(idx)}
              className="group flex items-center cursor-pointer transition-all duration-300"
            >
              {isActive && (
                <motion.div
                  layoutId="activeSlideLine"
                  className="w-12 sm:w-16 h-[2px] bg-white mr-4 shadow-sm"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}

              <span
                className={`transition-all duration-300 font-bold ${
                  isActive
                    ? 'text-4xl sm:text-5xl lg:text-6xl text-white scale-110 tracking-tight'
                    : 'text-lg sm:text-xl text-white/40 hover:text-white/80'
                }`}
              >
                {slide.number}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}