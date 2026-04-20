import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { GOOGLE_REVIEWS_MOCK } from '../src/data/googleReviewsMock';

const GoogleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

const TestimonialCard = ({ review }: { review: any }) => (
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
                        <GoogleIcon className="w-3 h-3" />
                    </div>
                </div>
                <div>
                    <h5 className="font-bold text-gray-900 text-[12px] tracking-tight truncate max-w-[120px]">{review.author_name}</h5>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} className={i < review.rating ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'} />
                        ))}
                    </div>
                </div>
            </div>
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{review.time.includes('Hace') ? review.time.split('·').pop() : 'Reciente'}</span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed italic line-clamp-3">"{review.text}"</p>
    </div>
);

const Ticker = ({ reviews, speed = 40, reverse = false }: { reviews: any[], speed?: number, reverse?: boolean }) => (
    <div className="flex overflow-hidden relative py-4 mask-fade h-[140px]">
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
    const row1 = GOOGLE_REVIEWS_MOCK.slice(0, 3);
    const row2 = GOOGLE_REVIEWS_MOCK.slice(3, 6);
    const row3 = [GOOGLE_REVIEWS_MOCK[6], ...GOOGLE_REVIEWS_MOCK.slice(0, 2)];

    return (
        <section id="testimonios" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">
                    
                    {/* Tickers Column (Left) */}
                    <div className="relative order-last lg:order-first h-[480px] flex flex-col justify-center">
                        <div className="absolute inset-0 z-10 pointer-events-none">
                            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent" />
                            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
                        </div>
                        
                        <div className="space-y-4">
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
                                className="flex items-center gap-3 text-brand-red font-black uppercase tracking-[0.2em] text-[10px]"
                            >
                                <span className="w-8 h-px bg-brand-red"></span>
                                Listos para resolver tus problemas de plagas
                            </motion.div>
                            
                            <h2 className="text-6xl lg:text-8xl font-black text-brand-dark leading-[0.85] tracking-tighter">
                                ¿POR QUÉ <br />
                                <span className="text-brand-red">NOMBRE NEGOCIO?</span>
                            </h2>
                            
                            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                                Ser una empresa con operación nacional nos permite adaptar nuestros tratamientos a las necesidades específicas de tu hogar y vecindario. Con más de <span className="text-brand-dark font-bold underline decoration-brand-red/30">12 años de experiencia</span> técnica, sabemos exactamente a qué te enfrentas.
                            </p>
                        </div>

                        {/* Stats Grid - Inspired by the red card but modernized */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-start gap-2">
                                <div className="flex text-brand-yellow">
                                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                                </div>
                                <p className="text-xl font-black text-brand-dark tracking-tighter">4.9 ESTRELLAS</p>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Calificación Media</p>
                            </div>
                            <div className="flex flex-col items-start gap-2 border-l border-gray-100 sm:pl-6">
                                <GoogleIcon className="w-5 h-5" />
                                <p className="text-xl font-black text-brand-dark tracking-tighter">+300 RESEÑAS</p>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">En Google Maps</p>
                            </div>
                            <div className="flex flex-col items-start gap-2 border-l border-gray-100 sm:pl-6">
                                <ShieldCheck className="text-brand-red w-5 h-5" />
                                <p className="text-xl font-black text-brand-dark tracking-tighter">FAVORITO 2024</p>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Voto Residencial</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a 
                                href="https://wa.me/3312345678"
                                className="inline-flex items-center justify-center px-10 py-5 bg-brand-red text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-brand-dark transition-all duration-500 shadow-xl shadow-brand-red/20 transform hover:-translate-y-1"
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