import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Calendar, Quote } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const QuoteIcon = ({ className }: { className?: string }) => (
    <div className={`w-4 h-4 bg-brand-red rounded-full flex items-center justify-center ${className}`}>
        <Quote className="w-2 h-2 text-white" />
    </div>
);

const MIXED_REVIEWS = [
    {
        id: "magdalena-gamez",
        author_name: "Magdalena Gamez",
        rating: 5,
        text: "Puntuales, atentos y extraordinariamente profesionales. Con el respaldo de PCP Internacional en el control de plagas, puedo dormir tranquila.",
        profile_photo_url: "/testimonios/magdalenaGamez.png",
        time: "Cliente Residencial",
        isGoogle: false
    },
    {
        id: "katia-lucio",
        author_name: "Katia Lucio",
        rating: 5,
        text: "Excelente servicio, puntualidad y trato con el cliente. Destaco su capacidad de respuesta, la calidad y el profesionalismo en todo momento.",
        profile_photo_url: "/testimonios/katia-lucio.png",
        time: "En Google",
        isGoogle: true
    },
    {
        id: "blanca-rodriguez",
        author_name: "Blanca Rodriguez",
        rating: 5,
        text: "Recomiendo tener total confianza en sus servicios. Cuentan con un equipo de alto conocimiento técnico y operan bajo estándares internacionales y certificaciones de calidad (BBB). Hacen un gran trabajo.",
        profile_photo_url: "/testimonios/blanca-rodriguez.png",
        time: "En Google",
        isGoogle: true
    },
    {
        id: "andres-gomez",
        author_name: "Andrés Gómez",
        rating: 5,
        text: "Cuentan con un equipo muy profesional y tienen un altísimo conocimiento en los protocolos de control de plagas. Hemos notado una solución real y definitiva con sus servicios.",
        profile_photo_url: "/testimonios/andres-gomez.png",
        time: "Cliente Residencial",
        isGoogle: false
    },
    {
        id: "a-ramos",
        author_name: "A ramos",
        rating: 5,
        text: "La atención es muy profesional y puntual, en ningún momento me hicieron esperar y siempre se mantuvieron comunicados. Estoy totalmente satisfecho.",
        profile_photo_url: "/testimonios/A ramos.png",
        time: "En Google",
        isGoogle: true
    },
    {
        id: "ernesto-hinojosa",
        author_name: "Ernesto Hinojosa Rdz",
        rating: 5,
        text: "Muy buen servicio, rápido, eficaz y a un excelente precio. Me explicaron los procesos a detalle, lo recomiendo ampliamente.",
        profile_photo_url: "/testimonios/erneso-hinojosardz.png",
        time: "En Google",
        isGoogle: true
    },
    {
        id: "jose-roberto",
        author_name: "José Roberto Moyeda Afanador",
        rating: 5,
        text: "Excelente servicio y atención a los detalles, me resolvieron el problema por completo con una gran atención.",
        profile_photo_url: "/testimonios/joserobertomoyedaafanador.png",
        time: "En Google",
        isGoogle: true
    },
    {
        id: "juan-pablo",
        author_name: "Juan Pablo Tobada",
        rating: 5,
        text: "Súper profesionales, me gustó mucho cómo me explicaron los procesos, me quitaron toda mi plaga con resultados garantizados.",
        profile_photo_url: "/testimonios/juan-pablo-tobada.png",
        time: "En Google",
        isGoogle: true
    }
];

const TestimonialCard: React.FC<{ review: any }> = ({ review }) => (
    <div className="w-[320px] sm:w-[350px] flex-shrink-0 bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-50"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${review.author_name}&background=random`
                        }}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                        <QuoteIcon />
                    </div>
                </div>
                <div>
                    <h5 className="font-normal text-gray-900 text-[12px] tracking-tight truncate max-w-[120px]">{review.author_name}</h5>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} className={i < review.rating ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'} />
                        ))}
                    </div>
                </div>
            </div>
            <span className="text-[9px] text-gray-400 font-normal uppercase tracking-widest">{review.time}</span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed italic line-clamp-4">"{review.text}"</p>
    </div>
);

const Ticker = ({ reviews, speed = 40, reverse = false }: { reviews: any[], speed?: number, reverse?: boolean }) => (
    <div className="flex overflow-hidden relative py-4 mask-fade h-[150px]">
        <motion.div
            animate={{ x: reverse ? [-1000, 0] : [0, -1000] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max absolute"
        >
            {[...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews].map((review, idx) => (
                <TestimonialCard key={`${review.id}-${idx}`} review={review} />
            ))}
        </motion.div>
    </div>
);

const Testimonials: React.FC = () => {
    const row1 = MIXED_REVIEWS.slice(0, 4);
    const row2 = MIXED_REVIEWS.slice(4, 8);
    const row3 = [...MIXED_REVIEWS.slice(2, 6)];

    return (
        <section id="testimonios" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">
                    
                    {/* Tickers Column (Left) */}
                    <div className="relative order-last lg:order-first h-[500px] flex flex-col justify-center">
                        <div className="absolute inset-0 z-10 pointer-events-none">
                            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent" />
                            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
                        </div>
                        
                        <div className="space-y-2">
                            <p className="text-center text-xs font-normal text-gray-400 italic mb-4">
                                "Experiencias reales de clientes que confían en el respaldo del Grupo PCP"
                            </p>
                            <Ticker reviews={row1} speed={50} />
                            <Ticker reviews={row2} speed={60} reverse />
                            <Ticker reviews={row3} speed={55} />
                        </div>
                    </div>

                    {/* Content Column (Right) */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 text-brand-red font-normal uppercase tracking-[0.2em] text-[10px]"
                            >
                                <span className="w-8 h-px bg-brand-red"></span>
                                ESPECIALISTAS EN BLINDAJE SANITARIO RESIDENCIAL
                            </motion.div>
                            
                            <h2 className="text-6xl lg:text-7xl font-normal text-brand-dark leading-[0.85] tracking-tighter">
                                ¿POR QUÉ ELEGIR <br />
                                <span className="text-brand-red">BIG CAT?</span>
                            </h2>
                            
                            <p className="text-xl text-gray-500 font-normal leading-relaxed max-w-xl">
                                Ser la división residencial exclusiva de <span className="font-normal text-brand-dark">PCP Internacional</span> nos permite llevar protocolos de sanidad de nivel corporativo directamente a la puerta de tu hogar. Con más de <span className="font-normal text-brand-dark underline decoration-brand-red/40">29 años de experiencia</span> técnica respaldando a nuestro grupo, sabemos exactamente a qué te enfrentás y cómo proteger a tu familia de manera definitiva.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-start gap-2">
                                <div className="flex text-[#FBBC05]">
                                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
                                </div>
                                <p className="text-lg font-normal text-brand-dark tracking-tighter leading-none">CALIDAD GARANTIZADA</p>
                                <p className="text-[9px] font-normal text-gray-400 uppercase tracking-widest leading-tight">ESTÁNDARES INTERNACIONALES</p>
                            </div>
                            <div className="flex flex-col items-start gap-2 border-l border-gray-100 sm:pl-6">
                                <ShieldCheck className="text-brand-red w-5 h-5" />
                                <p className="text-lg font-normal text-brand-dark tracking-tighter leading-none">RESPALDO PCP</p>
                                <p className="text-[9px] font-normal text-gray-400 uppercase tracking-widest leading-tight">DIVISIÓN RESIDENCIAL EXCLUSIVA</p>
                            </div>
                            <div className="flex flex-col items-start gap-2 border-l border-gray-100 sm:pl-6">
                                <Calendar className="text-brand-red w-5 h-5" />
                                <p className="text-lg font-normal text-brand-dark tracking-tighter leading-none">29+ AÑOS</p>
                                <p className="text-[9px] font-normal text-gray-400 uppercase tracking-widest leading-tight">DE EXPERIENCIA TÉCNICA REAL</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a 
                                href={`https://wa.me/52${CONTACT_INFO.whatsapp.replace(/\s/g, '')}`}
                                className="inline-flex items-center justify-center px-10 py-5 bg-brand-red text-white font-normal uppercase tracking-widest text-xs rounded-xl hover:bg-brand-dark transition-all duration-500 shadow-xl shadow-brand-red/30 transform hover:-translate-y-1"
                            >
                                SABER MÁS
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                .mask-fade {
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
