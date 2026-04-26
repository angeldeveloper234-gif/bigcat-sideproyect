import React from 'react';
import { Building2, Home, Utensils, ShieldCheck, Users, ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
    return (
        <section id="nosotros" className="py-24 bg-white overflow-hidden relative">
            {/* Decorative Color Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/[0.02] transform skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-red/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Visual Element */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-3xl group">
                            <img 
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
                                alt="Hogar protegido y limpio" 
                                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60"></div>
                            
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-brand-red p-8 rounded-3xl shadow-2xl transform transition-transform group-hover:-translate-y-2">
                                    <p className="text-white text-xl font-bold leading-tight uppercase tracking-tight italic">
                                        "Garantizamos hogares libres de plagas para que tú disfrutes de tu tranquilidad."
                                    </p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="h-1 w-12 bg-white/30 rounded-full" />
                                        <span className="text-white/70 text-[10px] font-black uppercase tracking-widest">Big Cat Fumigaciones™ Protection Guarantee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Experience Badge */}
                        <div className="absolute -top-10 -right-6 bg-brand-dark p-10 rounded-[2.5rem] shadow-3xl animate-float border border-white/10 group">
                            <div className="relative">
                                <p className="text-brand-red font-black text-6xl leading-none">29+</p>
                                <p className="text-white font-bold text-xs uppercase tracking-[0.2em] mt-3">Años de <br/>Experiencia Real</p>
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-red/20 rounded-full blur-xl animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div>
                            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-red/10 text-brand-red font-black tracking-[0.2em] uppercase text-[10px] mb-6 border border-brand-red/20">
                                <ShieldCheck size={14} /> Elite Pest Protection
                            </span>
                            <h2 className="text-4xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-[0.9] mb-8">
                                Su tranquilidad en <br />
                                <span className="text-brand-red">Manos Expertas.</span>
                            </h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                                Desde 1995, <span className="text-brand-dark font-black">Big Cat - Control de plagas</span> (parte de la familia <span className="text-brand-dark font-black">PCP Internacional</span>) ha liderado el control de plagas en México con soluciones eficaces, asequibles y personalizadas.
                            </p>
                            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl mt-4">
                                Nos comprometemos con la seguridad total: utilizamos <span className="text-brand-dark font-black">productos 100% seguros para personas y mascotas</span> que no afectan el medio ambiente, garantizando resultados definitivos con un respaldo técnico de más de 29 años.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                            {[
                                { icon: Home, label: "Hogares y Residencias" },
                                { icon: Utensils, label: "Restaurantes y Comedores" },
                                { icon: Building2, label: "Industria y Almacenes" },
                                { icon: ShieldCheck, label: "Supermercados y Comercios" }
                            ].map((sector, idx) => (
                                <div key={idx} className="group p-4 bg-brand-gray/50 rounded-2xl border border-transparent hover:border-brand-red/20 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
                                    <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mb-3 group-hover:scale-110 transition-transform">
                                        <sector.icon size={20} />
                                    </div>
                                    <h4 className="font-bold text-xs text-brand-dark uppercase tracking-wider">{sector.label}</h4>
                                </div>
                            ))}
                        </div>
                        
                        <p className="text-sm text-gray-400 font-bold italic leading-relaxed">
                            "Nuestros servicios están diseñados bajo estándares HACCP con toda la documentación necesaria para sus auditorías."
                        </p>

                        <div className="pt-8 block">
                            <a 
                                href="#contacto" 
                                className="inline-flex items-center gap-4 bg-brand-dark text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-red transition-all shadow-2xl hover:shadow-brand-red/30 group/btn"
                            >
                                Nuestra Metodología <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;

