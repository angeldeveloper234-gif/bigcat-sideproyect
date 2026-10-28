import React, { useEffect, useState } from 'react';
import { X, MapPin, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRANCHES, CONTACT_INFO } from '../constants';
import { supabase } from '../src/lib/supabase';
import { mensajeCiudad, whatsappUrl } from '../src/lib/contacto';
import { TIPOS, ciudadesDeTipo } from '../src/data/sedes';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  // El enlace es un <a> real (no window.open) para que el listener de
  // analítica lo mida como whatsapp_click, con la ciudad elegida en data-city.
  // El mensaje es el de la página de esa sede: así el bot y el CRM reciben la
  // ciudad del cliente con el mismo formato.
  const logBranchClick = async (branch: typeof BRANCHES[0]) => {
    try {
      const { error } = await supabase
        .from('contact_attempts')
        .insert([
          {
            branch_id: branch.id,
            branch_name: branch.name,
            device_info: {
              userAgent: navigator.userAgent,
              screen: { width: window.screen.width, height: window.screen.height }
            }
          }
        ]);

      if (error) {
        console.error('Error logging contact attempt:', error);
      }
    } catch (err) {
      console.error('Unexpected error logging contact:', err);
    }
  };

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>

        {/* Header */}
        <div className="bg-brand-dark px-6 py-6 border-b border-white/10 flex justify-between items-center shrink-0">
          <div>
            <h3 className="font-semibold text-xl text-white flex items-center gap-2">
              <MessageCircle className="text-brand-red fill-brand-red/20" />
              ¡Selecciona tu localidad!
            </h3>
            <p className="text-xs text-brand-red font-medium mt-1 ml-8">Te atenderá un especialista local</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Branch List - Scrollable */}
        <div className="p-6 space-y-3 overflow-y-auto overscroll-contain">
          {TIPOS.map(({ tipo, titulo }) => (
            <div key={tipo} className="space-y-3">
              <p className="pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">{titulo}</p>
              {ciudadesDeTipo(tipo).map((branch) => (
                <a
                  key={branch.id}
                  href={whatsappUrl(mensajeCiudad(branch))}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-city={branch.id}
                  onClick={() => logBranchClick(branch)}
                  className="group flex items-center justify-between p-4 rounded-2xl border-2 border-gray-50 hover:border-brand-red/30 hover:bg-red-50/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <span className="block font-medium text-brand-dark text-lg group-hover:text-brand-red transition-colors">{branch.name}</span>
                      <span className="text-xs text-brand-red font-medium bg-red-50 px-2 py-0.5 rounded-full group-hover:bg-brand-red group-hover:text-white transition-colors">Cotizar por WhatsApp</span>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-300" size={20} />
                </a>
              ))}
            </div>
          ))}
          <Link
            to="/cobertura/"
            onClick={onClose}
            className="block text-center p-4 rounded-2xl text-sm font-medium text-gray-500 hover:text-brand-red transition-colors"
          >
            ¿Tu ciudad no está en la lista? Ver cobertura
          </Link>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 text-center border-t border-gray-100 shrink-0">
          <p className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">{CONTACT_INFO.name}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
