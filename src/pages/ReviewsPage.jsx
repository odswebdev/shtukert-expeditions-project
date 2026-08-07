import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = [
    { name: 'Михаил Сетров', role: 'Предприниматель', text: 'Алтай на подготовленных внедорожниках — это совершенно другой уровень драйва и красоты. Команда Shtukert организовала всё безупречно!' },
    { name: 'Елена Воронцова', role: 'Фотограф', text: 'Камчатка превзошла все ожидания. Безопасность на высоте, еда невероятная, а пейзажи просто космические.' },
    { name: 'Артем Дьяков', role: 'Путешественник', text: 'Заполярный Кольский в зимней экипировке и охота за Авророй — эмоции, которые остаются на всю жизнь.' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold uppercase mb-8 text-center font-['Oswald',sans-serif]">ОТЗЫВЫ УЧАСТНИКОВ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="flex text-amber-400 mb-3">
              {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
            </div>
            <p className="text-sm text-white/80 italic mb-4">"{rev.text}"</p>
            <div className="border-t border-white/10 pt-3">
              <div className="font-bold text-sm text-white">{rev.name}</div>
              <div className="text-xs text-white/50">{rev.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
