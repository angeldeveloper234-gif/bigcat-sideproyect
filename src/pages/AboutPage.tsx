import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, History, ShieldEmoji } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Confianza & Especialización</span>
                    <h1 className="text-5xl md:text-6xl font-black text-brand-dark mb-8 leading-tight">
                        Más que fumigación, <span className="text-brand-primary italic">protegemos</span> tu negocio.
                    </h1>
                    
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                Somos una empresa mexicana dedicada al control avanzado de plagas con un enfoque especializado en el sector comercial y hostelería. 
                                Entendemos que para un restaurante o un hotel, una plaga no es solo un problema de higiene, es un riesgo para la viabilidad del negocio.
                            </p>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Por eso, implementamos el Manejo Integrado de Plagas (MIP), una metodología que combina ciencia, tecnología y estrategia para garantizar ambientes 100% libres de contaminantes.
                            </p>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=800" 
                                alt="Equipo profesional" 
                                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-8 rounded-xl shadow-xl">
                                <p className="text-4xl font-black">15+</p>
                                <p className="text-sm font-bold uppercase tracking-wider">Años de Expertis</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-50 rounded-2xl">
                            <History className="text-brand-primary mb-4 w-12 h-12" />
                            <h3 className="text-2xl font-bold mb-2">Nuestra Historia</h3>
                            <p className="text-gray-600">Fundada en Guadalajara, nacimos con la misión de profesionalizar el servicio de fumigación en el Occidente de México.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl">
                            <Users className="text-brand-primary mb-4 w-12 h-12" />
                            <h3 className="text-2xl font-bold mb-2">Equipo Certificado</h3>
                            <p className="text-gray-600">Todos nuestros técnicos están uniformados, plenamente identificados y capacitados en normativas COFEPRIS.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl">
                            <Target className="text-brand-primary mb-4 w-12 h-12" />
                            <h3 className="text-2xl font-bold mb-2">Misión 360°</h3>
                            <p className="text-gray-600">No solo eliminamos la plaga; auditamos tu espacio para evitar su reaparición de forma permanente.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;
