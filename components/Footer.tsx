import React from 'react';
import { NAV_LINKS, LOGO_DARK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-16 border-b border-white/10">
          
          <div className="space-y-10">
            {/* Logo Empresa */}
            <a href="/" className="flex flex-col items-start select-none cursor-pointer">
              <div className="h-16 flex items-center mb-8 px-4 border-2 border-dashed border-white/20 rounded-lg">
                <span className="text-white/50 font-black tracking-widest text-sm uppercase">Insertar Logo</span>
              </div>
              <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md italic">
                Líderes en ingeniería de bioseguridad y servicios de sanidad profesional en todo el territorio mexicano.
              </p>
              <span className="text-white/70 text-[10px] font-black uppercase tracking-widest mt-4">Nombre Negocio™ Protection</span>
            </a>
            
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em]">
                <div className="flex flex-col gap-2">
                    <span className="text-brand-red">COFEPRIS</span>
                    <span className="text-white/40">CERTIFIED</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-brand-red">HACCP</span>
                    <span className="text-white/40">COMPLIANCE</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-brand-red">AIB</span>
                    <span className="text-white/40">STANDARDS</span>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
                <h4 className="text-brand-red font-black uppercase tracking-[0.2em] text-[10px]">Navegación</h4>
                <nav className="flex flex-col gap-4 text-sm font-bold text-gray-400">
                    {NAV_LINKS.map((link) => (
                    <a key={link.label} href={link.href} className="hover:text-white transition-colors flex items-center gap-2 group">
                        <div className="w-0 h-px bg-brand-red group-hover:w-4 transition-all" />
                        {link.label}
                    </a>
                    ))}
                </nav>
            </div>
            <div className="space-y-6">
                <h4 className="text-brand-red font-black uppercase tracking-[0.2em] text-[10px]">Especialidad</h4>
                <div className="flex flex-col gap-4 text-sm font-bold text-gray-400">
                    <span className="hover:text-white cursor-help">Control de Roedores</span>
                    <span className="hover:text-white cursor-help">Sanitización Grado Quirúrgico</span>
                    <span className="hover:text-white cursor-help">Manejo Integrado de Plagas</span>
                    <span className="hover:text-white cursor-help">Exterminio de Termita</span>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-12 pb-12 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5">
          <p className="text-[10px] text-white/30 font-black uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Nombre Negocio S.A. de C.V. <br/>
            Seguridad Sanitaria por Nombre Negocio
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/30">
              <button className="hover:text-brand-red transition-colors">Aviso de Privacidad</button>
              <button className="hover:text-brand-red transition-colors">Términos del Servicio</button>
          </div>
        </div>

        <div className="pt-12 pb-24 text-center">
            <p className="text-brand-red font-black text-xs tracking-[0.5em] uppercase transition-all hover:tracking-[0.8em] duration-700">
                HECHO POR ANGEL DESIGN STUDIO
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;