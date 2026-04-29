import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const StickyCTA: React.FC = () => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[90vw] md:hidden">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-brand-dark/90 backdrop-blur-2xl border border-white/10 p-2 rounded-3xl shadow-3xl flex items-center justify-between"
            >
                <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex-1 flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-all border border-white/5"
                >
                    <Phone size={18} className="text-brand-primary mb-1" />
                    <span className="text-[10px] font-normal uppercase tracking-widest">Llamar</span>
                </a>

                <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`}
                    className="flex-[1.5] flex items-center justify-center gap-2 p-4 rounded-2xl bg-brand-primary text-white mx-2 shadow-lg shadow-brand-primary/20"
                >
                    <MessageCircle size={20} className="animate-bounce" />
                    <span className="text-sm font-normal uppercase tracking-tighter">Cotizar Ahora</span>
                </a>

                <a 
                    href="#contacto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 text-white border border-white/5 hover:bg-white/10 transition-all text-center"
                >
                    <Calendar size={18} className="text-brand-primary mb-1" />
                    <span className="text-[10px] font-normal uppercase tracking-widest leading-none">Agendar</span>
                </a>
            </motion.div>
        </div>
    );
};

export default StickyCTA;

