import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import LocationModal from './LocationModal';

const FloatingWhatsApp: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 group">
        <button
          onClick={handleClick}
          className="relative flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-soft hover:shadow-lg hover:bg-[#20bd5a] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          style={{ padding: '12px 14px' }}
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={28} className="relative z-10" />
          
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-semibold text-sm pl-0 group-hover:pl-2">
            WhatsApp Inmediato
          </span>
        </button>
        
        {/* Pulse effect */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
      </div>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingWhatsApp;