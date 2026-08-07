import React from 'react';

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-[#e64a19] text-xs font-bold tracking-widest uppercase">О КЛУБЕ ЭКСПЕДИЦИЙ</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mt-2 font-['Oswald',sans-serif]">
          МЫ ОТКРЫВАЕМ НЕВЕДОМУЮ РОССИЮ
        </h2>
        <p className="mt-6 text-white/70 text-sm sm:text-base font-light leading-relaxed">
          Shtukert — это сообщество профессиональных путешественников, гидов-спасателей и пилотов внедорожной техники. Мы разрабатываем авторские маршруты высшей категории сложности по самым отдаленным регионам.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="border border-white/10 p-4 rounded bg-white/5">
            <div className="text-3xl font-extrabold text-[#e64a19]">12+</div>
            <div className="text-xs text-white/60 mt-1">Лет опыта</div>
          </div>
          <div className="border border-white/10 p-4 rounded bg-white/5">
            <div className="text-3xl font-extrabold text-[#e64a19]">140+</div>
            <div className="text-xs text-white/60 mt-1">Экспедиций</div>
          </div>
          <div className="border border-white/10 p-4 rounded bg-white/5">
            <div className="text-3xl font-extrabold text-[#e64a19]">100%</div>
            <div className="text-xs text-white/60 mt-1">Безопасность</div>
          </div>
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden border border-white/20 aspect-video shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=1200" 
          alt="О нас" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
