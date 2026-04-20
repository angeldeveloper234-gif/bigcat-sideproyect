import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PESTS_LIST } from '../../constants';
import { CheckCircle2, AlertCircle, ShieldCheck, Microscope } from 'lucide-react';
import Contact from '../../components/Contact';

const ServicePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = PESTS_LIST.find(p => p.slug === slug);

    if (!service) return <Navigate to="/" replace />;

    return (
        <div className="pt-20 bg-white min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[60vh] flex items-center overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-2xl text-white"
                    >
                        <span className="bg-brand-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full mb-6 inline-block">Eliminación Garantizada</span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">{service.name}</h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Information Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-16">
                            {/* Deep Info */}
                            <div>
                                <h2 className="text-3xl font-black text-brand-dark mb-8 flex items-center gap-3">
                                    <Microscope className="text-brand-primary" />
                                    El Problema y Nuestra Solución
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                                        <AlertCircle /> Riesgos Asociados
                                    </h3>
                                    <p className="text-red-900/70 leading-relaxed font-medium">
                                        {service.risks}
                                    </p>
                                </div>
                                <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                                    <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                                        <ShieldCheck /> Consejos de Prevención
                                    </h3>
                                    <p className="text-green-900/70 leading-relaxed font-medium">
                                        {service.prevention}
                                    </p>
                                </div>
                            </div>

                            {/* Process */}
                            <div className="bg-gray-50 p-12 rounded-[2rem]">
                                <h3 className="text-2xl font-black text-brand-dark mb-8">Protocolo de Aplicación Profesional</h3>
                                <p className="text-lg text-gray-600 mb-8 font-medium">
                                    {service.process}
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                                            <CheckCircle2 className="text-brand-primary w-5 h-5 flex-shrink-0" />
                                            <span className="font-bold text-brand-dark text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / CTA */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-32 bg-brand-dark p-8 rounded-3xl text-white">
                                <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda inmediata?</h3>
                                <p className="text-gray-400 mb-8 font-medium">Agenda una inspección hoy mismo y obtén un 10% de descuento en tu primer servicio.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                                        Atención 24/7 vía WhatsApp
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                                        Técnicos certificados
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                                        Garantía total de eliminación
                                    </li>
                                </ul>
                                <a 
                                    href="#contacto" 
                                    className="block w-full bg-brand-primary hover:bg-red-600 text-center py-4 rounded-xl font-bold transition-all"
                                >
                                    Solicitar Cotización
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default ServicePage;
