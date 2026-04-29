import React from 'react';
import { NAV_LINKS, LOGO_LIGHT, LOGO_DARK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-brand-dark pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-16 border-b border-gray-100">

          <div className="space-y-10">
            {/* Logo Empresa */}
            <a href="/" className="flex flex-col items-start select-none cursor-pointer">
              <div className="h-22 flex items-center mb-6">
                <img
                  src={LOGO_DARK}
                  alt="Big Cat Logo"
                  className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-gray-500 text-lg font-normal leading-relaxed max-w-md italic">
                Somos una familia de empresas que prioriza un servicio amigable, rápido y efectivo, e invertimos en el crecimiento y bienestar de nuestro equipo.
              </p>
              <span className="text-brand-dark/70 text-[10px] font-medium uppercase tracking-widest mt-4">PCP Internacional & Big Cat Fumigaciones™</span>
            </a>

            <div className="flex gap-10 text-[10px] font-medium uppercase tracking-[0.3em]">
              <div className="flex flex-col gap-2">
                <span className="text-brand-red font-medium">COFEPRIS</span>
                <span className="text-brand-dark/40">CERTIFIED</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-brand-red font-medium">HACCP</span>
                <span className="text-white/40">COMPLIANCE</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-brand-red font-medium">AIB</span>
                <span className="text-white/40">STANDARDS</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-brand-red font-semibold uppercase tracking-[0.2em] text-[10px]">Navegación</h4>
              <nav className="flex flex-col gap-4 text-sm font-medium text-gray-500">
                {NAV_LINKS.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-brand-red transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-px bg-brand-red group-hover:w-4 transition-all" />
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-brand-red font-semibold uppercase tracking-[0.2em] text-[10px]">Sectores</h4>
              <div className="flex flex-col gap-4 text-sm font-medium text-gray-500">
                <span className="hover:text-brand-red cursor-help transition-colors">Hogares y Residencias</span>
                <span className="hover:text-brand-red cursor-help transition-colors">Restaurantes y Comedores</span>
                <span className="hover:text-brand-red cursor-help transition-colors">Industria y Almacenes</span>
                <span className="hover:text-brand-red cursor-help transition-colors">Supermercados y Comercios</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 pb-12 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-50">
          <p className="text-[10px] text-brand-dark/30 font-medium uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Big Cat Fumigaciones (PCP Internacional). <br />
            Seguridad Sanitaria Profesional
          </p>
          <div className="flex gap-8 text-[10px] font-medium uppercase tracking-widest text-brand-dark/30">
            <button className="hover:text-brand-red transition-colors font-semibold">Aviso de Privacidad</button>
            <button className="hover:text-brand-red transition-colors font-semibold">Términos del Servicio</button>
          </div>
        </div>

        <div className="pt-12 pb-24 text-center">
          <p className="text-brand-red font-medium text-xs tracking-[0.5em] uppercase transition-all hover:tracking-[0.8em] duration-700">
            HECHO POR ANGEL DESIGN STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
