import React from 'react';

export default function GalleryPage() {
  const images = [
    'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=800',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=800',
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800'
  ];

  return (
    <div>
      <h2 className="text-4xl font-extrabold uppercase mb-8 font-['Oswald',sans-serif]">ФОТОХРОНИКА ЭКСПЕДИЦИЙ</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-white/10 hover:border-[#e64a19] transition aspect-square group">
            <img src={img} alt="Галерея" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}