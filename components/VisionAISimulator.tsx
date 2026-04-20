import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Search, CheckCircle2, AlertTriangle, ScanLine } from 'lucide-react';

const VisionAISimulator: React.FC = () => {
    const [step, setStep] = useState<'idle' | 'scanning' | 'result'>('idle');
    const [selectedPest, setSelectedPest] = useState<any>(null);

    const pests = [
        { name: "Cucaracha Alemana", confidence: "98.5%", risk: "Alto", icon: "🪳" },
        { name: "Termita Subterránea", confidence: "94.2%", risk: "Estructural", icon: "🐜" },
        { name: "Chinche de Cama", confidence: "91.8%", risk: "Sanitario", icon: "🦗" }
    ];

    const startScan = () => {
        setStep('scanning');
        setTimeout(() => {
            setSelectedPest(pests[Math.floor(Math.random() * pests.length)]);
            setStep('result');
        }, 3000);
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <span className="text-brand-red font-black uppercase tracking-widest text-xs mb-4 block">Tecnología de Vanguardia</span>
                            <h2 className="text-3xl lg:text-5xl font-black text-brand-dark leading-tight">Identificación con <span className="text-brand-red">Vision AI</span></h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed">
                                ¿Encontraste un insecto y no sabes qué es? Sube una foto y nuestra Inteligencia Artificial lo identificará al instante para sugerirte el tratamiento adecuado.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 grayscale group-hover:grayscale-0 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                                    <Camera className="text-gray-400" />
                                </div>
                                <p className="font-bold text-gray-700">Toma una foto clara del ejemplar</p>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                                    <Search className="text-gray-400" />
                                </div>
                                <p className="font-bold text-gray-700">Análisis instantáneo de patrones</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative w-full max-w-md mx-auto bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-3xl overflow-hidden">
                            <AnimatePresence mode="wait">
                                {step === 'idle' && (
                                    <motion.div 
                                        key="idle"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="min-h-[380px] flex flex-col items-center justify-center p-12 text-center"
                                    >
                                        <div className="w-24 h-24 bg-brand-red/20 rounded-full flex items-center justify-center mb-8 border border-brand-red/30">
                                            <Camera size={48} className="text-brand-red" />
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4">Simulador de Escaneo</h3>
                                        <button 
                                            onClick={startScan}
                                            className="bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-black transition-all"
                                        >
                                            Iniciar Análisis
                                        </button>
                                    </motion.div>
                                )}

                                {step === 'scanning' && (
                                    <motion.div 
                                        key="scanning"
                                        className="min-h-[380px] relative bg-[url('https://images.unsplash.com/photo-1541339907198-e08756eaa539?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"
                                    >
                                        <div className="absolute inset-0 bg-brand-dark/40" />
                                        <motion.div 
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-1 bg-brand-red shadow-[0_0_20px_#e53935] z-10"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <ScanLine size={64} className="text-white animate-pulse mb-4 mx-auto" />
                                                <p className="text-white font-black uppercase tracking-[0.3em]">Analizando...</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 'result' && (
                                    <motion.div 
                                        key="result"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="p-8 flex flex-col gap-6 bg-white"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-8">
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                                    <CheckCircle2 size={12} /> Identificado
                                                </span>
                                                <span className="text-gray-400 font-bold text-xs">Confianza: {selectedPest?.confidence}</span>
                                            </div>
                                            
                                            <div className="text-6xl mb-6">{selectedPest?.icon}</div>
                                            <h3 className="text-4xl font-black text-brand-dark mb-2">{selectedPest?.name}</h3>
                                            
                                            <div className="flex items-center gap-2 text-red-600 font-bold mb-8">
                                                <AlertTriangle size={18} />
                                                Riesgo {selectedPest?.risk}
                                            </div>
                                            
                                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                                <p className="text-sm text-gray-500 font-medium">Tratamiento recomendado:</p>
                                                <p className="text-brand-dark font-bold">Protocolo de Desinfección ULV + Cebado Activo</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <button className="w-full bg-brand-red text-white py-4 rounded-xl font-black transition-all hover:bg-red-600">
                                                Agendar tratamiento
                                            </button>
                                            <button 
                                                onClick={() => setStep('idle')}
                                                className="w-full text-gray-400 py-2 font-bold text-sm"
                                            >
                                                Nuevo escaneo
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionAISimulator;

