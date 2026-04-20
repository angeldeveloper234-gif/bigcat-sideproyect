import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home } from 'lucide-react';
import { PESTS_LIST } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-brand-gray/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-4 rounded-full bg-brand-red/10 text-brand-red font-black tracking-widest uppercase text-[10px] mb-6 border border-brand-red/20">
              Silos de Especialización
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-[0.9]">
              Nuestras <span className="text-brand-red">Soluciones</span> <br /> 
              Certificadas FE™
            </h2>
          </div>
          <p className="text-xl text-gray-500 font-medium max-w-sm md:text-right leading-relaxed">
            Eliminación científica diseñada para cada tipo de reto sanitario en la hostelería de México.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PESTS_LIST.map((pest, index) => {
             const Icon = pest.icon;
             return (
              <div 
                key={index}
                className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-gray-200/50 hover:shadow-brand-red/10 transition-all duration-700 group relative overflow-hidden flex flex-col min-h-[480px] border border-gray-100"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <img 
                        src={pest.image} 
                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]" 
                        alt={pest.name} 
                    />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                        <div className="bg-brand-red text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl shadow-brand-red/20 group-hover:scale-110 transition-transform duration-500">
                            <Icon size={32} strokeWidth={1.5} />
                        </div>
                        {pest.id === 'control-comercial' && (
                            <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg shadow-red-500/30 animate-pulse">
                                Más Solicitado
                            </span>
                        )}
                    </div>
                    
                    <div className="space-y-6 flex-grow">
                        <h3 className="font-black text-3xl leading-tight text-brand-dark">{pest.name}</h3>
                        <p className="text-lg leading-relaxed text-gray-500 font-medium">
                          {pest.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-4">
                            {pest.features.slice(0, 2).map((f, i) => (
                                <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <Link 
                           to={`/servicios/${pest.slug}`} 
                           className="inline-flex items-center gap-4 font-black text-sm uppercase tracking-widest text-brand-dark hover:text-brand-red transition-all group/btn"
                        >
                            Explorar Silo <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sector Summary Bar */}
        <div className="mt-20 bg-brand-dark rounded-[3rem] p-12 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-3xl text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-[100px]" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Building2 className="text-brand-red" size={32} />
                    </div>
                    <div>
                    <p className="font-black text-2xl leading-none">Sector Comercial</p>
                    <p className="text-gray-400 text-sm mt-1 font-bold italic tracking-wide">+300 Restaurantes Protegidos</p>
                    </div>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Home className="text-brand-red" size={32} />
                    </div>
                    <div>
                    <p className="font-black text-2xl leading-none">Sector Residencial</p>
                    <p className="text-gray-400 text-sm mt-1 font-bold italic tracking-wide">Privacidad & Garantía Total</p>
                    </div>
                </div>
            </div>

            <Link 
              to="/nosotros" 
              className="relative z-10 bg-brand-red hover:bg-red-600 text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl shadow-brand-red/30"
            >
                Sobre Nosotros
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
