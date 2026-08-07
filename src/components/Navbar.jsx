import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Volume2, VolumeX, FolderArchive } from 'lucide-react';
import { NAV_ITEMS } from '../data/slidesData';

export default function Navbar({ activeTab, onNavClick, isMuted, setIsMuted, onOpenSearch, onDownloadZip, isDownloading }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-30 pt-2">
      <div className="flex items-center justify-between pb-4 border-b border-white/20">
        {/* Logo */}
        <div 
          onClick={() => onNavClick('home')}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-[#e64a19] shadow-[0_0_12px_rgba(230,74,25,0.8)] transition-transform duration-300 group-hover:scale-125" />
          <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white">
            Shtukert<span className="text-[#e64a19]">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold tracking-widest uppercase">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="relative py-1 text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-[#e64a19] shadow-[0_0_8px_rgba(230,74,25,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onDownloadZip}
            disabled={isDownloading}
            className="flex items-center space-x-2 px-3 py-1.5 rounded bg-[#e64a19]/20 hover:bg-[#e64a19] border border-[#e64a19]/50 text-white text-xs font-bold tracking-wider transition-all duration-300 group shadow-lg"
            title="Скачать исходный проект ZIP"
          >
            {isDownloading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <FolderArchive size={16} className="text-[#e64a19] group-hover:text-white transition-colors" />
            )}
            <span className="hidden sm:inline uppercase">
              {isDownloading ? 'Сборка ZIP...' : 'СКАЧАТЬ ZIP'}
            </span>
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all hidden sm:block"
            title={isMuted ? "Включить фоновый звук" : "Выключить звук"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-[#e64a19]" />}
          </button>

          <button
            onClick={onOpenSearch}
            className="p-2 text-white/80 hover:text-white hover:scale-110 transition-transform"
            aria-label="Поиск"
          >
            <Search size={20} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/90 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden absolute top-16 left-6 right-6 z-50 bg-neutral-950/95 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col space-y-3"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-bold tracking-widest uppercase py-2 border-b border-white/10 ${
                  activeTab === item.id ? 'text-[#e64a19]' : 'text-white/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}