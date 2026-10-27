import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, PlayCircle, Phone, CheckCircle, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TOTAL_SEDES, MAS_DE_CIUDADES } from '../constants';
import { ESTADOS_CON_SEDE } from '../src/data/sedes';

// "Nuevo León, Coahuila, … y Ciudad de México": sale de la lista de sedes.
const REGIONES = `${ESTADOS_CON_SEDE.slice(0, -1).join(', ')} y ${ESTADOS_CON_SEDE[ESTADOS_CON_SEDE.length - 1]}`;

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-48 md:pt-40 lg:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.webp" 
          alt="Servicio profesional de control de plagas y fumigación residencial Big Cat" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          
          {/* Content */}
          <div className="w-full space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded-full border border-brand-red/20"
            >
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-red">
                <span>Protección Residencial Profesional</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold leading-[1.1] tracking-tighter text-brand-dark"
            >
              <span className="text-brand-red">Big Cat:</span> Fumigación y control de plagas en el norte y centro de México.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-3xl text-gray-600 max-w-2xl leading-tight font-normal"
            >
              Soluciones eficaces y <span className="text-brand-dark font-medium underline decoration-brand-red/30">100% seguras para su familia y negocio</span>. Más de 29 años de experiencia con el respaldo de PCP Internacional.
              <span className="block text-base md:text-xl text-gray-500 mt-4">
                <Link to="/sedes/" className="text-brand-dark font-medium hover:text-brand-red transition-colors">{TOTAL_SEDES} sedes</Link> en {REGIONES}, y servicio en más de {MAS_DE_CIUDADES} ciudades.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 md:gap-4 pt-4"
            >
              <a 
                href="#contacto"
                className="bg-brand-red text-white px-6 py-4 md:px-10 md:py-6 rounded-2xl font-semibold text-sm md:text-lg uppercase tracking-widest hover:bg-brand-dark transition-all duration-500 shadow-2xl shadow-brand-red/20 flex items-center gap-3 group"
              >
                Cotizar Servicio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicios"
                className="bg-white text-brand-dark border border-gray-200 px-6 py-4 md:px-10 md:py-6 rounded-2xl font-semibold text-sm md:text-lg uppercase tracking-widest hover:bg-gray-50 transition-all duration-500 flex items-center gap-3"
              >
                Ver Servicios
              </a>
            </motion.div>

            {/* Trust Badges Simplified */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 pb-20 lg:pb-0"
            >
              {[
                { icon: ShieldCheck, label: "Seguridad", sub: "100% Familiar" },
                { icon: Award, label: "Experiencia", sub: "29+ Años" },
                { icon: Target, label: "Cobertura", sub: `${TOTAL_SEDES} sedes` },
                { icon: CheckCircle, label: "Certificación", sub: "COFEPRIS" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-200 shadow-sm">
                    <item.icon className="text-brand-red w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-widest leading-tight text-brand-dark">{item.label} <br/>{item.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

