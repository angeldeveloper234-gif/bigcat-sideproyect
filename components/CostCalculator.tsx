import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const CostCalculator: React.FC = () => {
    const [sqm, setSqm] = useState(0);
    const [pestType, setPestType] = useState('cucarachas');
    
    const basePrices: Record<string, number> = {
        'cucarachas': 12,
        'termitas': 45,
        'roedores': 18,
        'hormigas': 10,
        'chinches': 35,
        'mosquitos': 15,
        'general': 10
    };

    const estimate = sqm * basePrices[pestType];

    const generateWhatsAppLink = () => {
        const message = `Hola, me interesa una cotización de fumigación. Mi casa es de approx ${sqm}m² y tengo un problema con ${pestType}. El cotizador me dio un estimado de $${estimate.toLocaleString()} MXN.`;
        return `https://wa.me/52${CONTACT_INFO.phone.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="py-24 bg-white border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <span className="inline-block py-1.5 px-4 rounded-full bg-brand-red/10 text-brand-red font-black tracking-widest uppercase text-[10px] mb-6 border border-brand-red/20">
                        Presupuesto Inmediato
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-[0.8] mb-6">
                        Calcula tu inversión en <span className="text-brand-red">10 segundos</span>.
                    </h2>
                    <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
                        Transparencia total. Sin costos ocultos. Obtén un estimado rápido y agenda tu servicio hoy mismo.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-gray-200">
                    <div className="p-8 lg:p-14 space-y-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-black uppercase text-gray-500 mb-2">Tamaño de la Propiedad (Metros Cuadrados)</label>
                                <input 
                                    type="number" 
                                    placeholder="Ej. 120"
                                    className="w-full bg-white border-2 border-gray-200 p-5 rounded-2xl focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none font-bold text-xl transition-all shadow-sm"
                                    onChange={(e) => setSqm(Number(e.target.value))}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-black uppercase text-gray-500 mb-2">Plaga a Erradicar</label>
                                <select 
                                    className="w-full bg-white border-2 border-gray-200 p-5 rounded-2xl focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none font-bold text-xl appearance-none transition-all shadow-sm"
                                    onChange={(e) => setPestType(e.target.value)}
                                    value={pestType}
                                >
                                    <option value="cucarachas">Cucarachas</option>
                                    <option value="termitas">Termitas y Polillas</option>
                                    <option value="roedores">Ratas y Ratones</option>
                                    <option value="hormigas">Hormigas</option>
                                    <option value="chinches">Chinches de Cama</option>
                                    <option value="mosquitos">Mosquitos y Jardín</option>
                                    <option value="general">Mantenimiento General Preventivo</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-dark p-8 lg:p-14 text-white flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 text-brand-red mb-8">
                                <Calculator />
                                <span className="font-black uppercase tracking-widest text-sm">Tu Cotización</span>
                            </div>
                            
                            <div className="space-y-2">
                                <span className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
                                    ${estimate > 0 ? estimate.toLocaleString() : '0'}
                                </span>
                                <span className="text-xl text-gray-400 font-bold ml-2">MXN</span>
                            </div>
                            <p className="text-gray-400 mt-4 text-sm font-medium leading-relaxed">
                                *Valor aproximado sugerido. El precio final se confirmará mediante WhatsApp o llamada con nuestros expertos.
                            </p>
                        </div>

                        <div className="pt-12 space-y-6">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 mb-4">
                                <Zap className="text-brand-red shrink-0" size={24} />
                                <span className="text-sm font-bold text-gray-300">Técnicos listos en tu zona para atención inmediata.</span>
                            </div>
                            <a 
                                href={generateWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full relative group bg-brand-red hover:bg-red-600 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-brand-red/30 flex items-center justify-center gap-3 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                Congelar Precio por WhatsApp
                                <ArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostCalculator;
