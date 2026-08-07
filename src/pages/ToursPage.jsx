import React from 'react';
import { SLIDES } from '../data/slidesData';

export default function ToursPage({ onSelectTour }) {
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[#e64a19] text-xs font-bold tracking-widest uppercase">АВТОРСКИЕ ПРОГРАММЫ</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mt-2 font-['Oswald',sans-serif]">
          БЛИЖАЙШИЕ ЭКСПЕДИЦИИ
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SLIDES.slice(0, 3).map((tour, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#e64a19] transition group">
            <div className="h-48 overflow-hidden">
              <img src={tour.bgImage} alt={tour.location} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6">
              <span className="text-[10px] bg-[#e64a19] text-white px-2 py-0.5 rounded uppercase font-bold">10-14 ДНЕЙ</span>
              <h3 className="text-xl font-bold mt-2 font-['Oswald',sans-serif]">{tour.location}</h3>
              <p className="text-xs text-white/60 mt-2 line-clamp-2">{tour.poem.join(' ')}</p>
              <button 
                onClick={() => onSelectTour(tour)}
                className="mt-6 w-full py-2.5 bg-white/10 hover:bg-[#e64a19] text-white text-xs font-bold tracking-widest uppercase rounded transition"
              >
                Забронировать
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}