import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Target, ShieldCheck, Home, MapPin, Zap, Clock, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANCHES } from '../constants';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const RestaurantMap: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [activeCity, setActiveCity] = useState(BRANCHES[0]);
    const [isLoading, setIsLoading] = useState(true);

    const clearIsochrones = () => {
        if (!map.current) return;
        [10, 20, 30].forEach(m => {
            if (map.current?.getLayer(`iso-layer-${m}`)) map.current.removeLayer(`iso-layer-${m}`);
            if (map.current?.getLayer(`iso-border-${m}`)) map.current.removeLayer(`iso-border-${m}`);
            if (map.current?.getSource(`isochrone-${m}`)) map.current.removeSource(`isochrone-${m}`);
        });
    };

    const fetchIsochrones = async (lng: number, lat: number) => {
        const minutes = [10, 20, 30];
        const colors = ['#E53935', '#C62828', '#B71C1C'];

        for (let i = 0; i < minutes.length; i++) {
            const m = minutes[i];
            const color = colors[i];
            const url = `https://api.mapbox.com/isochrone/v1/mapbox/driving/${lng},${lat}?contours_minutes=${m}&polygons=true&access_token=${MAPBOX_TOKEN}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (map.current && map.current.getStyle()) {
                    map.current.addSource(`isochrone-${m}`, { type: 'geojson', data: data });
                    map.current.addLayer({
                        'id': `iso-layer-${m}`,
                        'type': 'fill',
                        'source': `isochrone-${m}`,
                        'paint': { 'fill-color': color, 'fill-opacity': 0.1 }
                    }, 'add-3d-buildings');
                    map.current.addLayer({
                        'id': `iso-border-${m}`,
                        'type': 'line',
                        'source': `isochrone-${m}`,
                        'paint': { 'line-color': color, 'line-width': 1.5, 'line-dasharray': [3, 2] }
                    }, 'add-3d-buildings');
                }
            } catch (e) {
                console.error('Error fetching isochrone', e);
            }
        }
    };

    useEffect(() => {
        if (!mapContainer.current) return;
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const isMobile = window.innerWidth < 1024;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-102.5528, 23.6345],
            zoom: 4,
            pitch: 30,
            bearing: 0,
            antialias: true,
            attributionControl: false,
            dragPan: !isMobile,
            dragRotate: !isMobile,
            scrollZoom: false,
            touchZoomRotate: false,
            cooperativeGestures: true
        });

        map.current.on('load', async () => {
            if (!map.current) return;
            setIsLoading(false);

            // Add Mexico State Boundaries using the built-in composite source
            // This is more reliable than external GeoJSON if the filter is correct
            map.current.addLayer({
                'id': 'mexico-states-fill',
                'type': 'fill',
                'source': 'composite',
                'source-layer': 'admin',
                'filter': ['all', 
                    ['==', ['get', 'admin_level'], 1],
                    ['==', ['get', 'iso_3166_1'], 'MX']
                ],
                'paint': {
                    'fill-color': '#E53935',
                    'fill-opacity': 0.2
                }
            });

            map.current.addLayer({
                'id': 'mexico-states-outline',
                'type': 'line',
                'source': 'composite',
                'source-layer': 'admin',
                'filter': ['all', 
                    ['==', ['get', 'admin_level'], 1],
                    ['==', ['get', 'iso_3166_1'], 'MX']
                ],
                'paint': {
                    'line-color': '#E53935',
                    'line-width': 1,
                    'line-opacity': 0.4
                }
            });

            // Adjust base map opacity for labels to focus on coverage
            const layers = map.current.getStyle()?.layers;
            if (layers) {
                layers.forEach(layer => {
                    if (layer.type === 'symbol' && !layer.id.includes('label')) {
                        map.current?.setPaintProperty(layer.id, 'icon-opacity', 0.2);
                    }
                });
            }

            // We still fetch isochrones for the 'response area' concept but keep them subtle
            await fetchIsochrones(activeCity.coords[0], activeCity.coords[1]);
            map.current?.resize();
            setTimeout(() => map.current?.resize(), 100);
        });

        const resizeObserver = new ResizeObserver(() => {
            map.current?.resize();
        });
        if (mapContainer.current) {
            resizeObserver.observe(mapContainer.current);
        }

        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    map.current?.resize();
                }
            });
        });
        if (mapContainer.current) {
            intersectionObserver.observe(mapContainer.current);
        }

        return () => {
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            map.current?.remove();
        };
    }, []);

    const handleCityChange = async (city: typeof BRANCHES[0]) => {
        if (!map.current) return;
        setActiveCity(city);
        map.current.flyTo({
            center: city.coords as [number, number],
            zoom: 13.5,
            pitch: 60,
            duration: 3000,
            essential: true
        });

        clearIsochrones();
        await fetchIsochrones(city.coords[0], city.coords[1]);
    };

    return (
        <section id="mapa" className="py-24 bg-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
                    <div className="lg:col-span-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <Target size={14} /> Red de Cobertura Residencial Nacional
                            </span>
                            <h2 className="text-4xl lg:text-7xl font-black text-brand-dark tracking-tighter leading-[0.85] mb-8">
                                15+ Ciudades. <br />
                                <span className="text-brand-red italic truncate">Cobertura Total.</span>
                            </h2>
                            <p className="text-xl text-gray-500 font-medium max-w-4xl leading-relaxed">
                                Explore nuestra infraestructura operativa en los estados más importantes de México. Visualizamos nuestro <span className="text-brand-dark font-black italic">rango de atención especializada</span> para garantizar la sanidad de tu familia.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:min-h-[700px] lg:h-[800px]">
                    {/* Sidebar: City List */}
                    <div className="lg:col-span-3 flex flex-col gap-6 lg:h-full order-last lg:order-none">
                        {/* City Selector Header - Moved Above */}
                        <div className="bg-brand-red/5 border border-brand-red/10 rounded-[2.5rem] p-6 flex flex-col justify-center relative overflow-hidden shrink-0">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck size={28} className="text-brand-red shrink-0" />
                                <h4 className="font-black text-brand-dark text-sm uppercase tracking-[0.2em] leading-tight flex flex-col pt-1">
                                    Cobertura
                                    <span className="text-brand-red">Nacional Directa</span>
                                </h4>
                            </div>
                            <p className="text-gray-500 text-[11px] font-bold leading-relaxed mb-4 relative z-10 italic">
                                Haz clic en una ciudad para visualizar su área de cobertura en el mapa.
                            </p>
                        </div>

                        {/* City Selector */}
                        <div className="bg-gray-50 border border-gray-100 p-2 rounded-[2.5rem] flex flex-col gap-1 overflow-y-auto custom-scrollbar relative z-10 flex-grow">
                            {BRANCHES.map((city) => (
                                <button
                                    key={city.id}
                                    onClick={() => handleCityChange(city)}
                                    className={`flex items-center justify-between px-6 py-4 rounded-[2rem] font-black text-[11px] uppercase tracking-widest transition-all duration-300 ${activeCity.id === city.id
                                            ? 'bg-brand-red text-white shadow-xl shadow-brand-red/20 scale-[1.02]'
                                            : 'text-gray-500 hover:text-brand-dark hover:bg-white'
                                        }`}
                                >
                                    {city.name}
                                    <ChevronRight size={14} className={activeCity.id === city.id ? 'opacity-100' : 'opacity-0'} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Map Interface */}
                    <div className="lg:col-span-9 relative rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden border-8 border-gray-50 shadow-3xl group bg-white h-[480px] lg:h-full w-full order-first lg:order-none">
                        {isLoading && (
                            <div className="absolute inset-0 z-50 flex items-center justify-center bg-white">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-16 h-16 border-4 border-brand-red border-t-transparent rounded-full"
                                />
                            </div>
                        )}
                        <div ref={mapContainer} className="absolute inset-0 z-0 w-full h-full transition-all duration-1000" />

                        {/* Active HQ Badge */}
                        <div className="absolute top-8 left-8 z-10">
                            <div className="bg-white text-brand-dark pl-6 pr-8 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border-l-4 border-brand-red">
                                <div className="w-10 h-10 bg-brand-red/10 rounded-2xl flex items-center justify-center">
                                    <MapPin size={20} className="text-brand-red" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black leading-none tracking-tighter uppercase">{activeCity.name}</p>
                                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-1">Visualización de Cobertura</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(0,0,0,0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(229,57,53,0.5);
                }
            `}</style>
        </section>
    );
};

export default RestaurantMap;
