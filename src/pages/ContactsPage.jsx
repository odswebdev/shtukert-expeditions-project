import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactsPage({ onSubmitted }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onSubmitted) onSubmitted();
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
      <div>
        <h2 className="text-4xl font-extrabold uppercase font-['Oswald',sans-serif]">СВЯЗАТЬСЯ С НАМИ</h2>
        <p className="mt-4 text-sm text-white/70 leading-relaxed">
          Оставьте заявку и наш старший гид свяжется с вами для уточнения деталей и формирования индивидуального маршрута.
        </p>
        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-3 text-sm">
            <Phone size={18} className="text-[#e64a19]" />
            <span>+7 (800) 555-35-35</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <Mail size={18} className="text-[#e64a19]" />
            <span>info@shtukert-expeditions.ru</span>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center p-8 bg-white/5 border border-emerald-500/40 rounded-xl text-center">
          <CheckCircle2 size={48} className="text-emerald-400 mb-3" />
          <h3 className="text-xl font-bold text-white">Заявка успешно принята!</h3>
          <p className="text-xs text-white/60 mt-2">Наш гид перезвонит вам в течение 15 минут.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Ваше имя" 
            required 
            className="w-full bg-white/5 border border-white/20 rounded p-3 text-sm outline-none focus:border-[#e64a19] text-white" 
          />
          <input 
            type="tel" 
            placeholder="Телефон" 
            required 
            className="w-full bg-white/5 border border-white/20 rounded p-3 text-sm outline-none focus:border-[#e64a19] text-white" 
          />
          <textarea 
            placeholder="Пожелания по маршруту..." 
            rows={4} 
            className="w-full bg-white/5 border border-white/20 rounded p-3 text-sm outline-none focus:border-[#e64a19] text-white" 
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-[#e64a19] hover:bg-[#d84315] text-white font-bold text-xs tracking-widest uppercase rounded transition flex items-center justify-center space-x-2"
          >
            <Send size={16} />
            <span>Отправить заявку</span>
          </button>
        </form>
      )}
    </div>
  );
}