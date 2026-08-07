import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeatureCards({ currentSlide, onCardClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 border-t border-white/10 pt-6">
      {currentSlide.cards.map((card, idx) => {
        const IconComponent = card.icon;
        return (
          <motion.div
            key={`${currentSlide.id}-card-${idx}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onClick={() => onCardClick(card)}
            className="group relative bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-lg p-4 sm:p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded bg-white/5 group-hover:bg-[#e64a19]/20 group-hover:text-[#e64a19] text-white/80 transition-colors">
                  <IconComponent size={18} />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white/90 line-clamp-1">
                  {card.title}
                </h3>
              </div>

              <p className="text-xs text-white/60 line-clamp-2 font-light leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-xs font-bold tracking-widest text-white/80 group-hover:text-[#e64a19] transition-colors">
              <span>{card.tag}</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}