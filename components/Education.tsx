import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Bug, Thermometer, Calendar, HelpCircle, ArrowRight } from 'lucide-react';

const Education: React.FC = () => {
    return (
        <section id="educacion" className="py-24 bg-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Editorial Alerts */}
                    <div className="lg:w-2/3 space-y-16">
                        <div>
                            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-red/10 text-brand-red font-black tracking-[0.2em] uppercase text-[10px] mb-8 border border-brand-red/20">
                                <Bug size={14} /> Biosecurity Intelligence
                            </span>
                            <h2 className="text-5xl lg:text-8xl font-black text-brand-dark leading-[0.85] tracking-tighter mb-10">
                                Centro de <br />
                                <span className="text-brand-red">Vigilancia Biológica.</span>
                            </h2>
                            <p className="text-2xl text-gray-500 font-medium max-w-2xl leading-relaxed italic">
                                Pronósticos estacionales y protocolos de mitigación para la industria alimentaria en México.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            <article className="group relative bg-brand-gray/30 p-10 rounded-[3rem] border border-transparent hover:border-brand-red/20 hover:bg-white hover:shadow-3xl transition-all duration-700">
                                <div className="absolute top-8 right-8 text-brand-red opacity-10 group-hover:opacity-100 transition-opacity">
                                    <Bug size={48} />
                                </div>
                                <div className="space-y-8">
                                    <div className="w-16 h-16 bg-brand-red text-white rounded-2xl flex items-center justify-center shadow-xl shadow-brand-red/20">
                                        <Thermometer size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-brand-dark leading-tight mb-4">Estrés Térmico: <br/>Blattella Germanica</h3>
                                        <p className="text-gray-500 font-bold leading-relaxed">
                                            Las temperaturas &gt;28°C reducen el tiempo de incubación de ootecas. Implementamos <span className="text-brand-red underline decoration-2">bloqueo hormonal (IGR)</span> preventivo.
                                        </p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">Prioridad: Máxima</span>
                                            <ArrowRight className="text-brand-red opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={20} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            
                            <article className="group relative bg-brand-gray/30 p-10 rounded-[3rem] border border-transparent hover:border-brand-red/20 hover:bg-white hover:shadow-3xl transition-all duration-700">
                                <div className="absolute top-8 right-8 text-brand-red opacity-10 group-hover:opacity-100 transition-opacity">
                                    <ShieldCheck size={48} />
                                </div>
                                <div className="space-y-8">
                                    <div className="w-16 h-16 bg-brand-dark text-white rounded-2xl flex items-center justify-center shadow-xl shadow-brand-dark/20 group-hover:bg-brand-red transition-colors">
                                        <Calendar size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-brand-dark leading-tight mb-4">Migración Subterránea: <br/>Rhodotermes</h3>
                                        <p className="text-gray-500 font-bold leading-relaxed">
                                            Actualización de barreras químicas ante sismos de baja intensidad y cambios freáticos. Monitoreo acústico incluido.
                                        </p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Próxima Revisión: Mayo</span>
                                            <ArrowRight className="text-brand-red opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={20} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* Quick Access Card */}
                    <div className="lg:w-1/3 h-full">
                        <div className="sticky top-32 bg-brand-dark rounded-[3.5rem] p-12 text-white overflow-hidden shadow-3xl group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px]" />
                            
                            <div className="relative z-10 space-y-12">
                                <div>
                                    <div className="w-20 h-20 bg-brand-red/20 rounded-3xl flex items-center justify-center text-brand-red mb-10 border border-brand-red/30">
                                        <HelpCircle size={40} />
                                    </div>
                                    <h3 className="text-4xl font-black leading-[1.1] tracking-tighter">Bio-Soporte <br /> Especializado</h3>
                                    <p className="text-gray-400 mt-6 text-lg font-bold leading-relaxed italic">
                                        Documentación técnica para auditorías de Sanidad e Higiene.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { t: "Fichas de Seguridad (MSDS)", c: "brand-red" },
                                        { t: "Normativa Distintivo H", c: "gray-400" },
                                        { t: "Certificados de Bioseguridad", c: "gray-400" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest border-b border-white/5 pb-6 last:border-0">
                                            <div className={`w-2 h-2 rounded-full bg-${item.c}`} />
                                            {item.t}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <Link 
                                        to="/faq"
                                        className="w-full bg-brand-red text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-white hover:text-brand-dark transition-all shadow-2xl shadow-brand-red/20"
                                    >
                                        Centro de Ayuda <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
