import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

import { SLIDES } from './data/slidesData';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SliderPagination from './components/SliderPagination';
import FeatureCards from './components/FeatureCards';
import SearchModal from './components/SearchModal';
import CardDetailModal from './components/CardDetailModal';

import AboutPage from './pages/AboutPage';
import ToursPage from './pages/ToursPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactsPage from './pages/ContactsPage';

export default function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(2); // Начальный слайд 03
  const [activeTab, setActiveTab] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedCardDetail, setSelectedCardDetail] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const currentSlide = SLIDES[activeSlideIndex];

  // Динамическая загрузка JSZip и генерация архива
  const handleDownloadZip = async () => {
    try {
      setIsDownloading(true);

      let JSZipLib = window.JSZip;
      if (!JSZipLib) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        JSZipLib = window.JSZip;
      }

      const zip = new JSZipLib();
      zip.file('README.md', '# Shtukert Expeditions\n\nRun:\n`npm install`\n`npm run dev`');

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'shtukert-expeditions-project.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error(err);
      setIsDownloading(false);
    }
  };

  // Переключение клавиатурой
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalContent || isSearchOpen) return;
      if (e.key === 'ArrowUp') {
        setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : SLIDES.length - 1));
      } else if (e.key === 'ArrowDown') {
        setActiveSlideIndex((prev) => (prev < SLIDES.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalContent, isSearchOpen]);

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'home') {
      setModalContent(null);
    } else {
      setModalContent(tabId);
    }
  };

  return (
    <div className="relative w-full h-screen min-h-[700px] bg-neutral-900 text-white font-['Montserrat',sans-serif] overflow-hidden select-none">
      
      {/* Background Image Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0.3, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.2, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-neutral-900/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Main Grid */}
      <div className="relative z-10 flex flex-col justify-between w-full h-full px-6 sm:px-12 md:px-16 lg:px-20 py-6 md:py-8 max-w-[1600px] mx-auto">
        <Navbar 
          activeTab={activeTab} 
          onNavClick={handleNavClick} 
          isMuted={isMuted} 
          setIsMuted={setIsMuted} 
          onOpenSearch={() => setIsSearchOpen(true)}
          onDownloadZip={handleDownloadZip}
          isDownloading={isDownloading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto py-4">
          <HeroSection currentSlide={currentSlide} />
          <SliderPagination 
            slides={SLIDES} 
            activeIndex={activeSlideIndex} 
            onSelectIndex={setActiveSlideIndex} 
          />
        </div>

        <footer className="w-full pt-4">
          <FeatureCards 
            currentSlide={currentSlide} 
            onCardClick={(card) => setSelectedCardDetail(card)} 
          />

          <div className="mt-6 w-full flex justify-between items-center text-[10px] text-white/40 tracking-widest">
            <div className="w-1/4 h-[3px] bg-[#e64a19]" />
            <div className="hidden sm:block uppercase">SHTUKERT EXPEDITIONS © 2026 — ВСЕ ПРАВА ZАЩИЩЕНЫ</div>
            <div className="flex space-x-2">
              <span className="hover:text-white cursor-pointer" onClick={() => setActiveSlideIndex(prev => prev > 0 ? prev - 1 : SLIDES.length - 1)}>ПРЕД</span>
              <span>/</span>
              <span className="hover:text-white cursor-pointer" onClick={() => setActiveSlideIndex(prev => prev < SLIDES.length - 1 ? prev + 1 : 0)}>СЛЕД</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Zip Download Toast */}
      <AnimatePresence>
        {downloadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-emerald-950/90 border border-emerald-500/50 text-emerald-100 p-4 rounded-xl shadow-2xl backdrop-blur-md flex items-center space-x-3"
          >
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
              <Check size={20} />
            </div>
            <div>
              <div className="font-bold text-sm">Архив проекта успешно создан!</div>
              <div className="text-xs text-emerald-300/80">shtukert-expeditions-project.zip</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <CardDetailModal 
        selectedCard={selectedCardDetail} 
        onClose={() => setSelectedCardDetail(null)} 
        onRequestAction={() => handleNavClick('contacts')} 
      />

      {/* Pages Modal Overlay */}
      <AnimatePresence>
        {modalContent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-2xl overflow-y-auto p-6 sm:p-12 md:p-16 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center max-w-6xl mx-auto w-full pb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-[#e64a19]" />
                <span className="text-xs font-bold tracking-widest uppercase text-white/60">
                  SHTUKERT EXPEDITIONS / {modalContent.toUpperCase()}
                </span>
              </div>
              <button
                onClick={() => setModalContent(null)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="max-w-6xl mx-auto w-full py-12 my-auto">
              {modalContent === 'about' && <AboutPage />}
              {modalContent === 'tours' && <ToursPage onSelectTour={() => handleNavClick('contacts')} />}
              {modalContent === 'gallery' && <GalleryPage />}
              {modalContent === 'reviews' && <ReviewsPage />}
              {modalContent === 'contacts' && <ContactsPage onSubmitted={() => setModalContent(null)} />}
            </div>

            <div className="max-w-6xl mx-auto w-full pt-6 border-t border-white/10 text-center text-xs text-white/40">
              Нажмите крестик справа вверху для возврата
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}