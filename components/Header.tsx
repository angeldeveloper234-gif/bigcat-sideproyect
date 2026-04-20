import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, ChevronDown } from 'lucide-react';
import { CONTACT_INFO, LOGO_LIGHT, LOGO_DARK, NAV_LINKS } from '../constants';
import LocationModal from './LocationModal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || !isHome 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white/40 backdrop-blur-md shadow-sm py-5 border-b border-gray-100/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="relative">
                <div className="flex items-center px-4 h-10 border-2 border-dashed border-brand-red/30 rounded-lg">
                  <span className="text-[10px] font-black text-brand-dark/50 tracking-widest uppercase">Insertar Logo</span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className={`hidden lg:flex items-center gap-1 p-1 rounded-full transition-all duration-500 ${
              scrolled || !isHome ? 'bg-gray-100/50' : 'bg-gray-200/30'
            }`}>
              {NAV_LINKS.map((link) => (
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 text-gray-700 hover:text-brand-red hover:bg-white`}
                    >
                      {link.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left translate-y-2 group-hover:translate-y-0 overflow-hidden">
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-brand-red/5 hover:text-brand-red transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 text-gray-700 hover:text-brand-red hover:bg-white`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className={`flex items-center gap-2 font-black text-sm transition-colors text-brand-dark hover:text-brand-red`}
              >
                <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center">
                   <Phone size={14} className="text-brand-red" />
                </div>
                {CONTACT_INFO.phone}
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-red hover:bg-brand-dark text-white px-6 py-3 rounded-xl font-black text-sm transition-all transform hover:scale-105 shadow-xl shadow-brand-red/20 flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Agendar ahora
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors text-brand-dark bg-gray-100/50`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-[calc(100%-1px)] bg-white shadow-2xl transition-all duration-500 origin-top overflow-y-auto max-h-[85vh] ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}>
          <div className="p-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div className="group/mobile">
                    <button
                      className="w-full p-4 rounded-2xl text-lg font-bold text-gray-800 hover:bg-gray-50 hover:text-brand-red transition-all flex items-center justify-between"
                      onClick={(e) => {
                        const next = e.currentTarget.nextElementSibling;
                        if (next) next.classList.toggle('hidden');
                      }}
                    >
                      {link.label}
                      <ChevronDown size={18} className="text-gray-400" />
                    </button>
                    <div className="hidden pl-6 pb-2 pr-4 space-y-1">
                       {link.children.map(child => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block p-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-brand-red/5 hover:text-brand-red transition-all"
                          >
                            {child.label}
                          </Link>
                       ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block p-4 rounded-2xl text-lg font-bold text-gray-800 hover:bg-gray-50 hover:text-brand-red transition-all"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-gray-50 text-brand-dark font-black"
              >
                <Phone size={20} className="text-brand-red" />
                {CONTACT_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-brand-red text-white p-5 rounded-2xl font-black text-lg shadow-lg shadow-brand-red/30"
              >
                Sucursales WhatsApp
              </button>
            </div>
          </div>
        </div>
      </header>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;