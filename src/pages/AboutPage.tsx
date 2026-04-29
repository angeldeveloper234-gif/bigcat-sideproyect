import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Users, History } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <Helmet>
                <title>Sobre Nosotros | Big Cat Fumigaciones</title>
                <meta name="description" content="Conoce la historia de Big Cat Fumigaciones, parte de PCP Internacional. 29+ años protegiendo hogares y negocios en todo México con soluciones seguras y profesionales." />
                <link rel="canonical" href="https://bigcat.mx/nosotros" />
                <meta property="og:title" content="Sobre Nosotros | Big Cat Fumigaciones" />
                <meta property="og:description" content="29+ años de experiencia en control de plagas profesional y seguro." />
                <meta property="og:url" content="https://bigcat.mx/nosotros" />
            </Helmet>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-brand-primary font-normal tracking-widest uppercase text-sm mb-4 block">Confianza & Especialización</span>
                    <h1 className="text-5xl md:text-6xl font-normal text-brand-dark mb-8 leading-tight">
                        Más que fumigación, <span className="text-brand-primary italic">protegemos</span> tu negocio.
                    </h1>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                Somos una familia de empresas que prioriza un servicio amigable, rápido y efectivo, e invertimos en el crecimiento y bienestar de nuestro equipo.
                            </p>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Bajo el respaldo de nuestra empresa madre, <span className="text-brand-dark font-normal">PCP Internacional</span>, implementamos productos 100% seguros para personas y mascotas, protegiendo tu entorno sin afectar el medio ambiente.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=800"
                                alt="Equipo profesional"
                                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-8 rounded-xl shadow-xl">
                                <p className="text-4xl font-normal">29+</p>
                                <p className="text-sm font-normal uppercase tracking-wider">Años de Expertis</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-50 rounded-2xl">
                            <History className="text-brand-primary mb-4 w-12 h-12" />
                            <h3 className="text-2xl font-normal mb-2">Nuestra Historia</h3>
                            <p className="text-gray-600">Fundada en 1995 como parte de PCP Internacional, nacimos con la misión de profesionalizar el servicio de fumigación en todo el territorio mexicano.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl">
                            <Users className="text-brand-primary mb-4 w-12 h-12" />
                            <h3 className="text-2xl font-normal mb-2">Enfoque Nacional</h3>
                            <p className="text-gray-600">Brindamos servicio residencial y comercial a nivel nacional, con técnicos plenamente identificados y capacitados.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl">
                            <Target className="text-brand-primary mb-4 w-12 h-12" />
                            <h3 className="text-2xl font-normal mb-2">Compromiso Seguro</h3>
                            <p className="text-gray-600">Garantizamos la erradicación total de plagas utilizando métodos que no dañan a tu familia, tus mascotas ni el planeta.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;

