import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { TIPOS, ciudadesDeTipo, porEstado, TOTAL_SEDES, MAS_DE_CIUDADES } from '../src/data/sedes';

interface SedesLinksProps {
    /** 'seccion': bloque grande (home, /sedes/). 'bloque': caja compacta (blog). */
    variante?: 'seccion' | 'bloque';
    titulo?: string;
}

/**
 * Enlaces a todas las ciudades, agrupados por nivel (sede / con servicio /
 * aliados) y por estado, con el texto "Fumigación en {Ciudad}".
 *
 * El texto del enlace es a propósito: "fumigaciones saltillo" posicionaba la
 * home (posición 56) en vez de la página de Saltillo, porque la home no le
 * decía a Google cuál de sus páginas trata de fumigación en Saltillo.
 */
const SedesLinks: React.FC<SedesLinksProps> = ({ variante = 'seccion', titulo }) => {
    const enlace = (id: string, ciudad: string, clase: string) => (
        <Link to={`/sedes/${id}/`} className={clase}>
            Fumigación en {ciudad}
        </Link>
    );

    if (variante === 'bloque') {
        return (
            <aside className="mt-16 bg-gray-50 border border-gray-100 rounded-[2rem] p-8 md:p-10">
                <h2 className="text-2xl font-normal text-brand-dark mb-6">{titulo ?? 'Sedes'}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {TIPOS.map(({ tipo, titulo: tituloTipo }) => (
                        <div key={tipo}>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">{tituloTipo}</p>
                            <ul className="space-y-1.5">
                                {ciudadesDeTipo(tipo).map(c => (
                                    <li key={c.id}>{enlace(c.id, c.shortName, 'text-gray-600 hover:text-brand-red transition-colors')}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-sm text-gray-500">
                    ¿Tu ciudad no aparece? <Link to="/cobertura/" className="text-brand-red hover:underline">Consulta nuestra cobertura</Link>.
                </p>
            </aside>
        );
    }

    return (
        <section id="sedes" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <span className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-[10px] font-medium uppercase tracking-[0.2em] mb-6">
                        <MapPin size={14} /> {TOTAL_SEDES} sedes · servicio en más de {MAS_DE_CIUDADES} ciudades
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-semibold text-brand-dark tracking-tighter leading-[0.95] mb-6">
                        {titulo ?? 'Fumigación en tu ciudad'}
                    </h2>
                    <p className="text-xl text-gray-500 font-normal leading-relaxed">
                        Elige tu ciudad para ver los servicios, las zonas y cotizar por WhatsApp.
                    </p>
                </div>
                <div className="space-y-12">
                    {TIPOS.map(({ tipo, titulo: tituloTipo, descripcion }) => (
                        <div key={tipo}>
                            <h3 className="text-2xl font-semibold text-brand-dark mb-1">{tituloTipo}</h3>
                            <p className="text-gray-500 mb-6">{descripcion}</p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {porEstado(ciudadesDeTipo(tipo)).map(({ estado, ciudades }) => (
                                    <div key={estado} className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red mb-4">{estado}</p>
                                        <ul className="space-y-3">
                                            {ciudades.map(c => (
                                                <li key={c.id} className="flex items-center gap-2">
                                                    <MapPin size={16} className="text-brand-red shrink-0" />
                                                    {enlace(c.id, c.shortName, 'font-medium text-brand-dark hover:text-brand-red transition-colors')}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-10 text-gray-500">
                    ¿Estás en otra ciudad? <Link to="/cobertura/" className="text-brand-red font-medium hover:underline">Revisa nuestra cobertura</Link>: las empresas e industrias de todo México las atiende PCP Internacional.
                </p>
            </div>
        </section>
    );
};

export default SedesLinks;
