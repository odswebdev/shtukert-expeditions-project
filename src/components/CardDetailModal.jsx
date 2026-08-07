import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function CardDetailModal({ selectedCard, onClose, onRequestAction }) {
  if (!selectedCard) return null;

  const IconComponent = selectedCard.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-neutral-900 border border-white/20 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-[#e64a19]/20 text-[#e64a19] rounded-lg">
              <IconComponent size={24} />
            </div>
            <span className="text-xs font-bold tracking-widest text-[#e64a19] uppercase">
              {selectedCard.tag}
            </span>
          </div>

          <h3 className="text-2xl font-bold font-['Oswald',sans-serif] text-white mb-2">
            {selectedCard.title}
          </h3>

          <p className="text-sm text-white/70 leading-relaxed mb-6">
            {selectedCard.desc} Каждая экспедиция проходит тщательный аудит безопасности, включает спутниковую связь и сопровождение медицинского специалиста.
          </p>

          <button
            onClick={() => {
              onClose();
              onRequestAction();
            }}
            className="w-full py-3 bg-[#e64a19] hover:bg-[#d84315] text-white text-xs font-bold tracking-widest uppercase rounded-lg transition"
          >
            ЗАПРОСИТЬ ПОДРОБНОСТИ
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}