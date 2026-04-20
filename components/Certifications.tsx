import React from 'react';
import { ShieldCheck, FileCheck, Droplets, Award, BadgeCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certificaciones" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <span className="inline-block bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-red/20">
                 Validación Oficial COFEPRIS
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-none mb-8">
                Autoridad en <br />
                <span className="text-brand-red">Bioseguridad</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                Operamos bajo los marcos legales más exigentes. Entregamos carpetas técnicas completas digitales y físicas para auditorías de salubridad inmediata.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-5 items-start">
                <div className="bg-brand-red/5 p-4 rounded-2xl text-brand-red border border-brand-red/10">
                  <FileCheck size={28} />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark text-lg">Licencia Federal</h4>
                  <p className="text-sm text-gray-500 font-medium mt-1">SISP-04-26-MX Vigilancia permanente.</p>
                </div>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="bg-brand-red/5 p-4 rounded-2xl text-brand-red border border-brand-red/10">
                  <Droplets size={28} />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark text-lg">Químicos EPA</h4>
                  <p className="text-sm text-gray-500 font-medium mt-1">Sustentables y Grado Alimenticio.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative group">
               <div className="bg-brand-dark rounded-[3rem] p-12 lg:p-20 relative overflow-hidden transition-all duration-700 hover:shadow-3xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-[100px]" />
                  
                  <div className="relative z-10 text-center space-y-6">
                     <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                         <Award size={48} className="text-brand-red" />
                     </div>
                     <h3 className="text-4xl font-black text-white leading-tight">Garantía por Escrito <br /> FE™ Protection</h3>
                     <p className="text-gray-400 text-lg font-medium max-w-xs mx-auto">
                         Si detectas una sola plaga después del servicio, regresamos sin costo en menos de 24h.
                     </p>
                     <div className="flex justify-center gap-2 pt-6">
                         <BadgeCheck className="text-brand-red" size={24} />
                         <span className="font-black text-white uppercase tracking-widest text-xs">Póliza de Calidad 100%</span>
                     </div>
                  </div>
               </div>
              
              {/* Stats Card Overlay */}
               <div className="absolute -bottom-10 -right-6 lg:-right-10 bg-white p-8 rounded-3xl shadow-3xl max-w-xs border border-gray-100 hidden md:block group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="flex items-center gap-5">
                     <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-red/30">
                         <ShieldCheck size={32} />
                     </div>
                     <div>
                         <p className="text-3xl font-black text-brand-dark leading-none">Zero</p>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Incidentes Sanitarios</p>
                     </div>
                  </div>
               </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
