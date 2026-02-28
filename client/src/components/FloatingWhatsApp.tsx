import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/218935720343"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 left-8 z-40 group"
    >
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg whitespace-nowrap text-sm font-semibold animate-fade-in">
          تحدث معنا على واتساب
        </div>
      )}

      {/* Button */}
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-50" />
        <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-25" />

        {/* Main Button */}
        <button
          className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </a>
  );
}
