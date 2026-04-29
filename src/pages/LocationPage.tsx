import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BRANCHES, CONTACT_INFO } from '../../constants';
import { MapPin, Phone, ShieldCheck, Clock, Award } from 'lucide-react';
import Contact from '../../components/Contact';

import MapCoverage from '../../components/MapCoverage';

const LocationPage: React.FC = () => {
    const { city } = useParams<{ city: string }>();
    const branch = BRANCHES.find(b => b.id === city);

    if (!branch) return <Navigate to="/" replace />;

    return (
        <div className="pt-20 bg-white min-h-screen">
            <Helmet>
                <title>Control de Plagas en {branch.name} | Big Cat Fumigaciones</title>
                <meta name="description" content={`Servicios profesionales de fumigación y control de plagas en ${branch.name}. Atención inmediata, técnicos certificados y resultados garantizados.`} />
                <link rel="canonical" href={`https://bigcat.mx/sedes/${branch.id}`} />
                <meta property="og:title" content={`Control de Plagas en ${branch.name} | Big Cat`} />
                <meta property="og:description" content={`Soluciones profesionales de fumigación en ${branch.name}. 29+ años de experiencia.`} />
                <meta property="og:url" content={`https://bigcat.mx/sedes/${branch.id}`} />
            </Helmet>
            <header className="bg-brand-dark py-24 text-white relative overflow-hidden">
                {/* Abstract Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 text-brand-primary mb-6">
                            <MapPin />
                            <span className="font-normal uppercase tracking-[0.2em] text-sm">Cobertura Estratégica</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-normal mb-8 leading-tight">
                            Control de Plagas en <br/>
                            <span className="text-brand-primary">{branch.name}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-normal leading-relaxed max-w-2xl">
                            Servicio profesional de fumigación con protocolos corporativos para la zona de {branch.name} y alrededores.
                        </p>
                    </motion.div>
                </div>
            </header>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-normal text-brand-dark">Protegiendo los negocios de {branch.name}</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-normal">
                                Ofrecemos tiempos de respuesta récord para emergencias en {branch.name}. Nuestro equipo local está capacitado para atender desde residencias premium hasta complejos industriales y cadenas de restaurantes.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                                    <Clock className="text-brand-primary w-8 h-8 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-normal text-lg mb-1">Mismo Día</h4>
                                        <p className="text-gray-500 text-sm">Agenda antes de las 12pm y te visitamos hoy mismo.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                                    <Award className="text-brand-primary w-8 h-8 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-normal text-lg mb-1">Local & Experto</h4>
                                        <p className="text-gray-500 text-sm">Conocemos las plagas estacionales de {branch.name}.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-dark rounded-[2.5rem] p-12 text-white shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                <ShieldCheck size={120} />
                            </div>
                            <h3 className="text-3xl font-normal mb-8">Información de Contacto Local</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                        <Phone className="text-brand-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-normal uppercase tracking-widest mb-1">Línea Directa</p>
                                        <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="text-2xl font-normal hover:text-brand-primary transition-colors">{CONTACT_INFO.phone}</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                        <MapPin className="text-brand-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-normal uppercase tracking-widest mb-1">Área de Servicio</p>
                                        <p className="text-xl font-normal">{branch.name} y Zona Metropolitana</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 pt-12 border-t border-white/10">
                                <p className="text-gray-400 mb-6 font-normal italic">"Garantía total por escrito en cada servicio realizado en esta sede."</p>
                                <a 
                                    href="#contacto" 
                                    className="inline-block bg-brand-primary hover:bg-red-600 px-8 py-4 rounded-xl font-normal transition-all"
                                >
                                    Solicitar inspección gratuita
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* New Map Section */}
                    <div className="space-y-12">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl font-normal text-brand-dark mb-4 tracking-tight">Mapa de Cobertura y Clientes Premium</h2>
                            <p className="text-lg text-gray-500 font-normal">
                                Visualice nuestras zonas de respuesta rápida y los establecimientos que confían en nuestro protocolo de fumigación especializada.
                            </p>
                        </div>
                        <MapCoverage center={branch.coords} cityId={branch.id} />

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default LocationPage;


