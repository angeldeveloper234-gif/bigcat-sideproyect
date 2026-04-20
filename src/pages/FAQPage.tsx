import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ShieldCheck, Clock, Zap } from 'lucide-react';

const faqs = [
    {
        question: "¿Es seguro para mis mascotas y familia?",
        answer: "Totalmente. Utilizamos productos de baja toxicidad y grado biodegradable que son seguros para mascotas y niños. En casos de aspersión residual, solo recomendamos desalojar el área por un periodo de 2 a 4 horas dependiendo del tratamiento.",
        icon: ShieldCheck
    },
    {
        question: "¿Tengo que lavar mis platos después de la fumigación?",
        answer: "Si utilizamos el método de 'Gel Activo', no es necesario. Si realizamos una nebulización, recomendamos cubrir utensilios de cocina o lavarlos posteriormente para mayor seguridad, aunque nuestros químicos no dejan residuos grasos.",
        icon: Zap
    },
    {
        question: "¿Cuánto tiempo tarda en hacer efecto?",
        answer: "El efecto de choque es inmediato para insectos voladores y rastreros visibles. Sin embargo, el control total de una colonia (como en el caso de hormigas o cucarachas) puede tomar de 3 a 7 días debido al efecto dominó de nuestros cebos.",
        icon: Clock
    },
    {
        question: "¿Entregan certificados para protección civil o salud?",
        answer: "Sí, emitimos certificados de fumigación oficiales válidos ante COFEPRIS y dependencias de salud local. También proporcionamos las Hojas de Seguridad (MSDS) de los productos aplicados.",
        icon: HelpCircle
    }
];

const FAQPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl lg:text-5xl font-black text-brand-dark mb-4">Preguntas Frecuentes</h1>
                        <p className="text-xl text-gray-600">Resolvemos tus dudas sobre seguridad, tiempos y normativas.</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-primary/10 p-3 rounded-xl">
                                        <faq.icon className="text-brand-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-dark mb-3">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 bg-brand-dark rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-6">¿Aún tienes dudas?</h2>
                        <p className="text-gray-400 mb-8 text-lg">Chatea con un experto ahora mismo y recibe asesoría personalizada.</p>
                        <a 
                            href="https://wa.me/3312345678" 
                            className="inline-block bg-brand-primary hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105"
                        >
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;

