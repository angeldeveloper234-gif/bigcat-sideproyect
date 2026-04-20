import React from 'react';
import { METHODS } from '../constants';

const Methods: React.FC = () => {
  return (
    <section id="metodos" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="max-w-3xl">
            <span className="text-brand-red font-black tracking-widest uppercase text-xs mb-4 block">Manejo Integrado de Plagas (MIP)</span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none mb-6">
                Ingeniería en <span className="text-brand-red">Bioseguridad</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium leading-relaxed">
                No fumigamos al azar. Aplicamos protocolos científicos basados en la biología de la plaga y el entorno específico de su negocio.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
             <p className="text-xs font-black uppercase tracking-widest text-brand-red mb-2">Certificación</p>
             <p className="text-sm font-bold leading-tight">Cumple con normativas COFEPRIS y Estándares HACCP</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {METHODS.map((method, index) => (
            <div key={index} className="group flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500 shadow-xl group-hover:shadow-brand-red/20">
                    <method.icon size={28} strokeWidth={1.5} className="text-brand-red group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black tracking-tight group-hover:text-brand-red transition-colors">{method.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;
