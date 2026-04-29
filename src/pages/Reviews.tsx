import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import InfiniteReviewsTicker from '../../components/InfiniteReviewsTicker';

const Reviews: React.FC = () => {
    const [rating, setRating] = useState<number>(0);
    const [hoveredRating, setHoveredRating] = useState<number>(0);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const googleMapsLink = "https://www.google.com.mx/maps/place/PCP+Internacional/@25.6601429,-100.3547842,17z/data=!4m8!3m7!1s0x8662bd936a29e79f:0x5e08b1f5e8281313!8m2!3d25.6601381!4d-100.3522093!9m1!1b1!16s%2Fg%2F1tcwn7z_?entry=ttu";

    const handleStarClick = (selectedRating: number) => {
        setRating(selectedRating);
        setFormSubmitted(false); // Reset form if rating changes
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const nameInput = form.querySelector('input') as HTMLInputElement;
        const messageInput = form.querySelector('textarea') as HTMLTextAreaElement;

        const name = nameInput.value;
        const message = messageInput.value;

        const subject = encodeURIComponent(`Feedback Negativo de Cliente - ${name}`);
        const body = encodeURIComponent(
            `Nombre: ${name}\n` +
            `Calificación: ${rating} estrellas\n` +
            `Mensaje: ${message}`
        );

        window.location.href = `mailto:contacto@bigcat.mx?subject=${subject}&body=${body}`;

        setFormSubmitted(true);
    };

    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-full mx-auto overflow-hidden">
            {/* SECTION 1: FUNNEL */}
            <div className="text-center mb-24 max-w-2xl mx-auto px-4">
                <h1 className="text-4xl font-normal text-brand-dark mb-6">Déjanos tu Calificación</h1>
                <p className="text-gray-600 mb-8 text-lg">Tu opinión es vital para nosotros. Por favor, califica tu experiencia.</p>

                <div className="flex justify-center gap-4 mb-12">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={() => handleStarClick(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="transition-transform hover:scale-110 focus:outline-none"
                        >
                            <Star
                                size={48}
                                className={`${star <= (hoveredRating || rating)
                                    ? 'fill-brand-yellow text-brand-yellow'
                                    : 'text-gray-300'
                                    } transition-colors duration-200`}
                            />
                        </button>
                    ))}
                </div>

                {/* LOGIC: 4-5 STARS */}
                {rating >= 4 && (
                    <div className="animate-fade-in bg-green-50 p-8 rounded-2xl border border-green-100">
                        <h3 className="text-2xl font-normal text-green-800 mb-4">¡Muchas Gracias! nos alegra oír eso</h3>
                        <p className="text-green-700 mb-6">Nos ayudarías mucho si compartes tu experiencia en Google.</p>
                        <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand-red text-white font-normal py-4 px-8 rounded-xl shadow-lg hover:bg-brand-darkRed transition-all hover:scale-105"
                        >
                            <Star fill="currentColor" />
                            ¡Genial! Compártelo en Google
                        </a>
                    </div>
                )}

                {/* LOGIC: 1-3 STARS */}
                {rating > 0 && rating <= 3 && !formSubmitted && (
                    <div className="animate-fade-in bg-orange-50 p-8 rounded-2xl border border-orange-100">
                        <h3 className="text-2xl font-normal text-orange-800 mb-2">Lamentamos esto</h3>
                        <p className="text-orange-700 mb-6">Cuéntanos qué pasó para solucionarlo inmediatamente.</p>

                        <form onSubmit={handleFormSubmit} className="text-left space-y-4">
                            <div>
                                <label className="block text-sm font-normal text-gray-700 mb-1">Tu Nombre</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none" placeholder="Juan Pérez" />
                            </div>
                            <div>
                                <label className="block text-sm font-normal text-gray-700 mb-1">¿Qué sucedió?</label>
                                <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none" placeholder="Detalles de tu experiencia..." />
                            </div>
                            <button type="submit" className="w-full bg-brand-dark text-white font-normal py-3 rounded-lg hover:bg-black transition-colors flex justify-center items-center gap-2">
                                <Send size={18} />
                                Enviar Mensaje al Equipo
                            </button>
                        </form>
                    </div>
                )}

                {rating > 0 && rating <= 3 && formSubmitted && (
                    <div className="animate-fade-in bg-green-50 p-8 rounded-2xl border border-green-100">
                        <h3 className="text-xl font-normal text-green-800">Mensaje Enviado</h3>
                        <p className="text-green-700">Gracias por darnos la oportunidad de mejorar. Te contactaremos pronto.</p>
                    </div>
                )}
            </div>

            {/* SECTION 2: INFINITE TICKER */}
            <div className="border-t border-gray-200 pt-12">
                <InfiniteReviewsTicker />
            </div>
        </div>
    );
};

export default Reviews;

