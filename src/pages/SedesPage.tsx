import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { canonical } from '../lib/urls';
import { descripcion } from '../lib/descriptions';
import { breadcrumbSchema } from '../lib/schema';
import SedesLinks from '../../components/SedesLinks';

/** /sedes/ — listado de todas las ciudades, agrupadas por nivel y estado. */
const SedesPage: React.FC = () => {
    const title = 'Sedes y ciudades con servicio de fumigación | Big Cat';
    const description = descripcion('/sedes', '');

    return (
        <div className="pt-32 bg-white min-h-screen">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonical('/sedes')} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical('/sedes')} />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([['Inicio', '/'], ['Sedes', '/sedes/']]))}
                </script>
            </Helmet>

            <nav aria-label="Ruta de navegación" className="max-w-7xl mx-auto px-6 pt-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                    <li><Link to="/" className="hover:text-brand-primary">Inicio</Link></li>
                    <li aria-hidden="true">/</li>
                    <li className="text-brand-dark font-medium">Sedes</li>
                </ol>
            </nav>

            <header className="max-w-7xl mx-auto px-6 pt-10">
                <h1 className="text-4xl md:text-6xl font-normal text-brand-dark tracking-tight mb-6">
                    Sedes y ciudades donde damos servicio de fumigación
                </h1>
                <p className="text-xl text-gray-500 max-w-3xl">
                    Trabajamos en tres niveles: sedes con oficina propia, ciudades donde damos servicio sin tener oficina y ciudades que atiende nuestra red de aliados.{' '}
                    <Link to="/cobertura/" className="text-brand-red hover:underline">Cómo funciona cada uno</Link>.
                </p>
            </header>

            <SedesLinks titulo="Elige tu ciudad" />
        </div>
    );
};

export default SedesPage;
