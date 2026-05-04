import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const StickyCTA: React.FC = () => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92vw] md:w-auto md:min-w-[450px] lg:hidden">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-brand-dark/95 backdrop-blur-2xl border border-white/10 p-2 rounded-[2.5rem] shadow-3xl flex items-stretch gap-2"
            >
                <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex-1 flex flex-col items-center justify-center py-4 px-6 rounded-[2rem] bg-white/5 text-white hover:bg-white/10 transition-all border border-white/5 group"
                >
                    <Phone size={20} className="text-brand-red mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-center leading-tight">Llamar<br/>Ahora</span>
                </a>

                <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`}
                    className="flex-[2] flex items-center justify-center gap-3 py-4 px-8 rounded-[2rem] bg-brand-red text-white shadow-lg shadow-brand-red/20 hover:bg-brand-red/90 transition-all active:scale-95"
                >
                    <MessageCircle size={24} className="animate-pulse" />
                    <span className="text-sm md:text-base font-bold uppercase tracking-tight">Cotizar Ahora</span>
                </a>
            </motion.div>
        </div>
    );
};

export default StickyCTA;

