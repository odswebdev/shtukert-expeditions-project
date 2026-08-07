import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-3 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <X size={24} />
        </button>

        <div className="w-full max-w-2xl">
          <h2 className="text-xs font-bold tracking-widest text-[#e64a19] uppercase mb-4">
            ПОИСК ПО МАРШРУТАМ И ТУРАМ
          </h2>
          <div className="relative border-b-2 border-white/30 focus-within:border-[#e64a19] transition-colors">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Введите регион (Алтай, Камчатка, Байкал)..."
              className="w-full bg-transparent py-4 text-2xl sm:text-3xl text-white outline-none placeholder-white/30 font-light"
              autoFocus
            />
            <Search size={28} className="absolute right-2 top-4 text-white/50" />
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
            <span className="text-white/40 self-center mr-2">Популярное:</span>
            {['Внедорожные туры', 'Камчатка 2026', 'Байкал лёд', 'Перевалы Алтая', 'Охота за сиянием'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#e64a19] hover:text-white transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}