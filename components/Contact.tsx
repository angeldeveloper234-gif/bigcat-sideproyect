import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import LocationModal from './LocationModal';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\s+/g, '');
        const message = `*Nueva Solicitud de Diagnóstico - Big Cat*%0A%0A` +
            `*Nombre:* ${formData.name}%0A` +
            `*Teléfono:* ${formData.phone}%0A` +
            `*Servicio:* ${formData.service}%0A` +
            `*Detalles:* ${formData.message}`;

        // Open WhatsApp
        window.open(`https://wa.me/52${whatsappNumber}?text=${message}`, '_blank');

        // Show success message
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', phone: '', service: '', message: '' });
        }, 1000);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-12">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-brand-dark mb-6 tracking-tight">¿Listo para blindar su negocio contra las plagas?</h2>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                        Escríbanos y un experto le asesorará de inmediato para encontrar la solución ideal para sus instalaciones.
                    </p>
                </div>

                <div className="space-y-8">
                    <ContactItem 
                        icon={Phone} 
                        title="Llamada Directa" 
                        content="Ver Sucursales" 
                        onClick={handleOpenModal}
                    />
                    <ContactItem 
                        icon={Mail} 
                        title="Correo Electrónico" 
                        content={CONTACT_INFO.email} 
                        href={`mailto:${CONTACT_INFO.email}`} 
                    />
                    <ContactItem 
                        icon={Clock} 
                        title="Disponibilidad" 
                        content={`${CONTACT_INFO.schedule} - Respuesta Inmediata`} 
                    />
                    <ContactItem 
                        icon={MapPin} 
                        title="Base Operativa" 
                        content={CONTACT_INFO.address} 
                    />
                </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
                <div className="bg-brand-gray rounded-[2.5rem] p-8 md:p-12 shadow-sm">
                    <h3 className="text-2xl font-semibold text-brand-dark mb-8">Solicitar Diagnóstico</h3>
                    
                    {formStatus === 'success' ? (
                        <div className="bg-white p-8 rounded-3xl text-center shadow-sm py-16">
                            <div className="w-16 h-16 bg-red-100 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send size={32} />
                            </div>
                            <p className="font-semibold text-2xl text-brand-dark mb-2">¡Solicitud Generada!</p>
                            <p className="text-gray-500 mb-6">Se ha abierto WhatsApp para enviar la información.</p>
                            <button 
                                onClick={() => setFormStatus('idle')}
                                className="text-brand-red font-medium hover:underline"
                            >
                                Enviar nueva solicitud
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputGroup 
                                    label="Nombre" 
                                    id="name" 
                                    placeholder="Tu nombre completo" 
                                    type="text" 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <InputGroup 
                                    label="Teléfono" 
                                    id="phone" 
                                    placeholder="10 dígitos" 
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-brand-dark mb-2 ml-2">Servicio Requerido</label>
                                <div className="relative">
                                    <select 
                                        id="service" 
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-white border-0 rounded-2xl focus:ring-2 focus:ring-brand-red shadow-sm outline-none transition-all text-gray-700 appearance-none"
                                        required
                                    >
                                        <option value="">Selecciona el servicio...</option>
                                        <option value="Sector Gastronómico / Restaurante">Sector Gastronómico / Restaurante</option>
                                        <option value="Sector Hotelero">Sector Hotelero</option>
                                        <option value="Control de Plagas Comercial">Control de Plagas Comercial</option>
                                        <option value="Fumigación Residencial">Fumigación Residencial</option>
                                        <option value="Cucarachas / Chiripas">Cucarachas / Chiripas</option>
                                        <option value="Termitas">Termitas</option>
                                        <option value="Roedores">Roedores</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2 ml-2">Detalles</label>
                                <textarea 
                                    id="message" 
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4} 
                                    className="w-full px-6 py-4 bg-white border-0 rounded-2xl focus:ring-2 focus:ring-brand-red shadow-sm outline-none transition-all text-gray-700 resize-none"
                                    placeholder="¿Dónde viste la plaga? ¿Hace cuánto tiempo?"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-brand-dark text-white font-semibold py-5 rounded-2xl hover:bg-brand-red transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-red-900/20 transform hover:-translate-y-1"
                            >
                                Hablar con un especialista <ArrowRight size={20} />
                            </button>
                        </form>
                    )}
                </div>
            </div>

        </div>
      </div>
      
      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

interface ContactItemProps {
    icon: React.ElementType;
    title: string;
    content: string;
    href?: string;
    onClick?: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, title, content, href, onClick }) => (
    <div className="flex items-start gap-4 group">
        <div className="w-14 h-14 flex-none bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-red group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
            <Icon size={24} />
        </div>
        <div className="pt-1">
            <h4 className="font-semibold text-brand-dark text-lg">{title}</h4>
            {onClick ? (
                 <button onClick={onClick} className="text-gray-500 hover:text-brand-red transition-colors font-medium text-left">
                    {content}
                 </button>
            ) : href ? (
                <a href={href} className="text-gray-500 hover:text-brand-red transition-colors font-medium">{content}</a>
            ) : (
                <p className="text-gray-500 font-medium" dangerouslySetInnerHTML={{ __html: content }}></p>
            )}
        </div>
    </div>
);

interface InputGroupProps {
    label: string;
    id: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, id, placeholder, type, value, onChange }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-brand-dark mb-2 ml-2">{label}</label>
        <input 
            type={type} 
            id={id} 
            value={value}
            onChange={onChange}
            required 
            className="w-full px-6 py-4 bg-white border-0 rounded-2xl focus:ring-2 focus:ring-brand-red shadow-sm outline-none transition-all text-gray-700 placeholder-gray-300"
            placeholder={placeholder}
        />
    </div>
);

export default Contact;
