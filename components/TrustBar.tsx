import React from 'react';
import { ShieldCheck, Star, Award, CheckCircle } from 'lucide-react';

const TrustBar: React.FC = () => {
    return (
        <div className="bg-brand-dark border-y border-white/5 py-10 relative overflow-hidden group">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-red/20 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-red/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-wrap justify-between items-center gap-12 lg:gap-8">
                    
                    {/* Trust Item: Google Guaranteed */}
                    <div className="flex items-center gap-4 group/item">
                        <div className="bg-brand-red/10 p-3.5 rounded-2xl border border-brand-red/20 text-brand-red group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-500 shadow-xl shadow-brand-red/5">
                            <CheckCircle size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-white uppercase tracking-[0.1em]">Google Guaranteed</p>
                            <div className="flex text-brand-red mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Trust Item: Licencia Sanitaria */}
                    <div className="flex items-center gap-4 group/item">
                        <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 text-brand-red group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-500">
                            <ShieldCheck size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-white uppercase tracking-[0.1em]">Licencia Federal</p>
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">COFEPRIS 2024-V2</p>
                        </div>
                    </div>

                    {/* Trust Item: Years Experience */}
                    <div className="flex items-center gap-4 group/item">
                        <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 text-brand-red group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-500">
                            <Award size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-white uppercase tracking-[0.1em]">15+ Años de Éxito</p>
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Soberanía Sanitaria</p>
                        </div>
                    </div>

                    {/* Trust Item: Real Reviews */}
                    <div className="hidden lg:flex items-center gap-5 group/item bg-white/5 px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
                        <div className="flex -space-x-3">
                            <img className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" alt="Client" />
                            <img className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="Client" />
                            <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-red flex items-center justify-center text-[10px] text-white font-black shadow-lg shadow-brand-red/20">+500</div>
                        </div>
                        <div>
                            <p className="text-sm font-black text-white uppercase tracking-[0.1em]">Reseñas en Google</p>
                            <p className="text-[10px] text-brand-red font-black uppercase tracking-widest mt-1">Puntuación 4.9/5.0</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustBar;
