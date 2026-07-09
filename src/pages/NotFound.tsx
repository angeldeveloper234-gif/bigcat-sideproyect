import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white px-6 pt-32 pb-24">
            <Helmet>
                <title>Página no encontrada (404) | Big Cat - Control de Plagas</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <div className="max-w-xl text-center">
                <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-sm mb-4">Error 404</p>
                <h1 className="text-4xl md:text-6xl font-normal text-brand-dark tracking-tight mb-6">
                    Esta página se escapó como una plaga
                </h1>
                <p className="text-lg text-gray-500 font-normal mb-10">
                    La página que buscas no existe o fue movida. Pero no te preocupes: en Big Cat sí sabemos dónde encontrar lo que buscas.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-xl font-medium transition-all"
                    >
                        <Home size={20} /> Volver al inicio
                    </Link>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-brand-dark px-8 py-4 rounded-xl font-medium transition-all"
                    >
                        <Search size={20} /> Ver el blog
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
