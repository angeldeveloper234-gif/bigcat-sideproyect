import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const StickyCTA: React.FC = () => {
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-[90vw] md:w-auto md:min-w-[400px] lg:hidden">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-brand-dark/95 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full shadow-3xl flex items-stretch gap-1.5"
            >
                <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex-1 flex flex-col items-center justify-center py-2.5 px-4 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all border border-white/5 group"
                >
                    <Phone size={18} className="text-brand-red mb-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-center leading-tight">Llamar<br/>Ahora</span>
                </a>

                <a 
                    href={`https://wa.me/52${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`}
                    className="flex-[2] flex items-center justify-center gap-2 py-2.5 px-6 rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/20 hover:bg-brand-red/90 transition-all active:scale-95"
                >
                    <MessageCircle size={20} className="animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-tight">Cotizar Ahora</span>
                </a>
            </motion.div>
        </div>
    );
};

export default StickyCTA;

