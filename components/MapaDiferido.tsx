import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { TOTAL_SEDES, MAS_DE_CIUDADES } from '../src/data/sedes';

/**
 * EL MAPA DE LA HOME, CARGADO SOLO CUANDO SE VA A VER
 *
 * mapbox-gl pesa 1,77 MB (487 kB comprimido). Importado de forma directa
 * quedaba atado al paquete principal y se descargaba en las 56 páginas del
 * sitio, aunque el mapa solo existe en la home y está muy abajo.
 *
 * Acá se carga con import() recién cuando el usuario se acerca a la sección.
 *
 * Por qué no un React.lazy a secas: react-snap guarda el HTML ya renderizado
 * y al cargar la página React lo hidrata. Si el HTML guardado tuviera el mapa
 * y la hidratación encontrara un componente todavía sin descargar, React
 * descartaría el HTML y lo volvería a pintar. Por eso el estado inicial es
 * siempre el marcador de posición —en el prerender y en el navegador— y el
 * mapa entra después, ya hidratada la página.
 */
const RestaurantMap = lazy(() => import('./RestaurantMap'));

const Marcador: React.FC = () => (
    <section id="mapa" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <span className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-[10px] font-medium uppercase tracking-[0.2em] mb-6">
                <MapPin size={14} /> Sedes Big Cat
            </span>
            <h2 className="text-4xl lg:text-6xl font-semibold text-brand-dark tracking-tighter leading-[0.95] mb-6">
                Mapa de cobertura
            </h2>
            <p className="text-xl text-gray-500 font-normal max-w-3xl leading-relaxed">
                {TOTAL_SEDES} sedes y servicio en más de {MAS_DE_CIUDADES} ciudades.{' '}
                <Link to="/cobertura/" className="text-brand-red font-medium hover:underline">
                  Revisa si damos servicio en tu ciudad
                </Link>.
            </p>
            <div className="mt-10 h-[420px] rounded-[2.5rem] bg-gray-100 border border-gray-200" aria-hidden="true" />
        </div>
    </section>
);

const MapaDiferido: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // En el prerender (react-snap) el mapa no se carga nunca.
        if (navigator.userAgent === 'ReactSnap') return;
        const nodo = ref.current;
        if (!nodo || !('IntersectionObserver' in window)) {
            setVisible(true);
            return;
        }
        const observador = new IntersectionObserver(
            entradas => {
                if (entradas.some(e => e.isIntersecting)) {
                    setVisible(true);
                    observador.disconnect();
                }
            },
            { rootMargin: '600px 0px' }
        );
        observador.observe(nodo);
        return () => observador.disconnect();
    }, []);

    return (
        <div ref={ref}>
            {visible ? (
                <Suspense fallback={<Marcador />}>
                    <RestaurantMap />
                </Suspense>
            ) : (
                <Marcador />
            )}
        </div>
    );
};

export default MapaDiferido;
