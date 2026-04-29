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
                            <p className="text-sm font-normal text-white uppercase tracking-[0.1em]">Google Guaranteed</p>
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
                            <p className="text-sm font-normal text-white uppercase tracking-[0.1em]">Licencia Federal</p>
                            <p className="text-[10px] text-gray-400 font-normal uppercase tracking-widest mt-1">COFEPRIS 2024-V2</p>
                        </div>
                    </div>

                    {/* Trust Item: Years Experience */}
                    <div className="flex items-center gap-4 group/item">
                        <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 text-brand-red group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-500">
                            <Award size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-normal text-white uppercase tracking-[0.1em]">29+ Años de Éxito</p>
                            <p className="text-[10px] text-gray-400 font-normal uppercase tracking-widest mt-1">Soberanía Sanitaria</p>
                        </div>
                    </div>

                    {/* Trust Item: Calidad Garantizada */}
                    <div className="hidden lg:flex items-center gap-4 group/item">
                        <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 text-brand-red group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-500">
                            <Star size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-normal text-white uppercase tracking-[0.1em]">Calidad Garantizada</p>
                            <p className="text-[10px] text-gray-400 font-normal uppercase tracking-widest mt-1">Servicio de Excelencia</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustBar;

