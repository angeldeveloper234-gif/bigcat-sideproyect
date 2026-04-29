import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { CONTACT_INFO, BRANCHES } from '../constants';

const QuoteSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    ciudad: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\s+/g, '');
    const message = `*Nueva Solicitud de Cotización - Big Cat*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Teléfono:* ${formData.telefono}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Ciudad:* ${formData.ciudad}%0A` +
      `*Mensaje:* ${formData.mensaje}`;

    window.open(`https://wa.me/52${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="cotizacion" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/[0.02] -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-red/[0.01] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-[10px] font-normal uppercase tracking-[0.2em] mb-6">
                Presupuesto Inmediato
              </span>
              <h2 className="text-4xl lg:text-6xl font-normal text-brand-dark tracking-tighter leading-[0.9] mb-8">
                Protege tu Hogar <br />
                <span className="text-brand-red">Hoy Mismo.</span>
              </h2>
              <p className="text-xl text-gray-500 font-normal leading-relaxed max-w-lg">
                No permitas que las plagas comprometan la tranquilidad de tu familia. Obtén un diagnóstico profesional y una cotización personalizada en minutos.
              </p>
            </motion.div>

                <div className="grid grid-cols-2 gap-6 pb-4">
                   <div className="space-y-2">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                        <ShieldCheck className="text-brand-red" size={20} />
                      </div>
                      <p className="text-xs font-normal text-brand-dark uppercase tracking-widest">Protección Total</p>
                      <p className="text-[10px] text-gray-400 font-normal uppercase">Respaldo Profesional</p>
                   </div>
                   <div className="space-y-2">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                        <Zap className="text-brand-red" size={20} />
                      </div>
                      <p className="text-xs font-normal text-brand-dark uppercase tracking-widest">Atención Express</p>
                      <p className="text-[10px] text-gray-400 font-normal uppercase">Respuesta <br />Inmediata</p>
                   </div>
                </div>

                <div className="p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm flex items-center gap-6">
                    <div className="flex -space-x-3">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" className="w-full h-full object-cover" />
                         </div>
                       ))}
                    </div>
                    <div>
                       <p className="text-sm font-normal text-brand-dark">+1,200 Hogares Protegidos</p>
                       <p className="text-[10px] text-gray-400 font-normal uppercase tracking-widest">Este mes en México</p>
                    </div>
                </div>
              </div>
    
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:ml-auto w-full max-w-xl"
              >
                <div className="bg-white rounded-[3rem] p-10 lg:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
                    
                    <div className="mb-8">
                        <h3 className="text-3xl font-normal text-brand-dark tracking-tighter mb-2">Cotización Residencial</h3>
                        <p className="text-sm text-gray-400 font-normal uppercase tracking-widest">Servicio 100% libre de olores</p>
                    </div>
    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Tu Nombre"
                                required
                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-red outline-none transition-all font-normal"
                                value={formData.nombre}
                                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-red outline-none transition-all font-normal"
                                    value={formData.telefono}
                                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                                />
                                <input
                                    type="email"
                                    placeholder="Tu E-mail"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-red outline-none transition-all font-normal"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <select 
                                required
                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-red outline-none transition-all font-normal text-gray-500"
                                value={formData.ciudad}
                                onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                            >
                                <option value="">¿En qué ciudad te encuentras?</option>
                                {BRANCHES.map(city => (
                                    <option key={city.id} value={city.name}>{city.name}</option>
                                ))}
                            </select>
                            <textarea
                                placeholder="¿Qué problema tienes en casa? (Hormigas, Cucarachas, etc.)"
                                rows={3}
                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-red outline-none transition-all font-normal resize-none"
                                value={formData.mensaje}
                                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                            />
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full py-6 rounded-2xl bg-brand-red text-white font-normal text-lg uppercase tracking-widest hover:bg-brand-dark transition-all duration-500 shadow-xl shadow-brand-red/20 group/btn"
                        >
                            Solicitar Presupuesto
                            <ArrowRight size={20} className="inline-block ml-3 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        
                        <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between opacity-50">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={14} className="text-green-500" />
                                <span className="text-[10px] font-normal uppercase tracking-widest leading-none">Datos Seguros</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={14} className="text-green-500" />
                                <span className="text-[10px] font-normal uppercase tracking-widest leading-none">Evaluación Profesional</span>
                            </div>
                        </div>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

