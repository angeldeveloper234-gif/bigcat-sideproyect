import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Navigation, Map as MapIcon, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { COVERAGE_AREAS, BRANCHES, RESTAURANT_CLIENTS } from '../constants';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const Coverage: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const markersRef = useRef<mapboxgl.Marker[]>([]);

    useEffect(() => {
        if (!mapContainer.current) return;
        mapboxgl.accessToken = MAPBOX_TOKEN;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-102.5528, 23.6345], // Center of Mexico
            zoom: 4.5,
            pitch: 30,
            attributionControl: false
        });

        const COVERED_STATES = [
            'Jalisco',
            'Guanajuato',
            'Querétaro',
            'Queretaro',
            'Distrito Federal',
            'Ciudad de México',
            'Nuevo León'
        ];

        map.current.on('load', () => {
            if (!map.current) return;

            // Add States Source
            map.current.addSource('mexico-states', {
                type: 'geojson',
                data: 'https://raw.githubusercontent.com/strotgen/mexico-leaflet/master/states.geojson'
            });

            // Add Fill Layer for Covered States
            map.current.addLayer({
                id: 'states-fill',
                type: 'fill',
                source: 'mexico-states',
                paint: {
                    'fill-color': '#E53935',
                    'fill-opacity': [
                        'case',
                        ['in', ['get', 'state_name'], ['literal', COVERED_STATES]],
                        0.08,
                        0
                    ]
                }
            });

            // Add Outline Layer for Covered States
            map.current.addLayer({
                id: 'states-outline',
                type: 'line',
                source: 'mexico-states',
                paint: {
                    'line-color': '#E53935',
                    'line-width': [
                        'case',
                        ['in', ['get', 'state_name'], ['literal', COVERED_STATES]],
                        2,
                        0
                    ],
                    'line-opacity': 0.6
                }
            });

            // Add Branches with explicit cleanup path
            BRANCHES.forEach((branch) => {
                const el = document.createElement('div');
                el.className = 'national-marker-v2'; // Unique class to avoid cached styles

                const marker = new mapboxgl.Marker(el)
                    .setLngLat(branch.coords as [number, number])
                    .setPopup(new mapboxgl.Popup({ offset: 20 }).setHTML(`
                        <div class="p-4 min-w-[180px]">
                            <p class="text-[10px] font-black text-brand-red uppercase tracking-widest mb-1">Sede Operativa Principal</p>
                            <h4 class="text-xl font-black text-brand-dark leading-tight mb-2">${branch.name}</h4>
                            <div class="flex items-center gap-2 text-[9px] font-bold text-gray-500 uppercase">
                                <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                Centro de Logística Avanzada 24/7
                            </div>
                        </div>
                    `))
                    .addTo(map.current!);
                markersRef.current.push(marker);
            });

            // Add Restaurant Clients with explicit cleanup path
            Object.values(RESTAURANT_CLIENTS).forEach((cityRestaurants) => {
                cityRestaurants.forEach((rest) => {
                    const el = document.createElement('div');
                    el.className = 'client-dot-v2';

                    const marker = new mapboxgl.Marker(el)
                        .setLngLat(rest.coords as [number, number])
                        .setPopup(new mapboxgl.Popup({ offset: 10 }).setHTML(`
                            <div class="px-3 py-2">
                                <p class="text-[8px] font-black text-brand-red uppercase tracking-tighter mb-0.5">Cliente Protegido</p>
                                <h5 class="text-xs font-black text-brand-dark">${rest.name}</h5>
                            </div>
                        `))
                        .addTo(map.current!);
                    markersRef.current.push(marker);
                });
            });

            map.current?.resize();
            // Extra resize after layout settles — critical for mobile
            setTimeout(() => map.current?.resize(), 100);
            setTimeout(() => map.current?.resize(), 500);
        });

        const resizeObserver = new ResizeObserver(() => {
            map.current?.resize();
        });
        if (mapContainer.current) {
            resizeObserver.observe(mapContainer.current);
        }

        // IntersectionObserver: resize map when it scrolls into view on mobile
        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        map.current?.resize();
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (mapContainer.current) {
            intersectionObserver.observe(mapContainer.current);
        }

        return () => {
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            markersRef.current.forEach(m => m.remove());
            markersRef.current = [];
            map.current?.remove();
        };
    }, []);

    const flyToCity = (coords: number[]) => {
        map.current?.flyTo({
            center: coords as [number, number],
            zoom: 12,
            pitch: 60,
            duration: 3500,
            essential: true
        });
    };

    return (
        <section id="cobertura" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Map Visual — shown first on mobile via order */}
                    <div className="w-full lg:w-3/5 relative group order-first lg:order-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-gray-50 bg-gray-50"
                            style={{ height: '480px' }}
                        >
                            <div ref={mapContainer} className="absolute inset-0 w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Floating Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="absolute -bottom-10 -left-10 bg-brand-dark text-white p-10 rounded-[2.5rem] shadow-3xl z-20 hidden md:block border border-white/10"
                        >
                            <div className="flex items-center gap-6">
                                <div className="bg-brand-red p-5 rounded-3xl shadow-2xl shadow-brand-red/40 animate-bounce-slow">
                                    <Navigation size={32} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-4xl font-black tracking-tighter">50+</p>
                                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Unidades <br /> Estratégicas</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="absolute top-12 right-12 bg-white/80 backdrop-blur-xl border border-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
                            <Shield size={18} className="text-brand-red" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark">Protección Federal Certificada</span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-2/5 space-y-12">
                        <div className="space-y-6">
                            <span className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-5 py-2 rounded-full font-black tracking-widest uppercase text-[10px] border border-brand-red/20 shadow-sm">
                                <MapIcon size={14} /> Red Operativa Nacional
                            </span>
                            <h2 className="text-4xl lg:text-6xl font-black text-brand-dark leading-[0.85] tracking-tighter">
                                Presencia Real. <br />
                                <span className="text-brand-red italic truncate">Impacto Local.</span>
                            </h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed">
                                Nuestra infraestructura logística nos permite garantizar tiempos de respuesta récord. Seleccione una sede para visualizar su radio de acción.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {BRANCHES.map((branch, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => flyToCity(branch.coords)}
                                    className="flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border-2 border-transparent hover:border-brand-red/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-brand-red transition-all duration-500 scale-95 group-hover:scale-100">
                                            <MapPin size={24} className="text-brand-red group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <span className="block font-black text-brand-dark text-xl tracking-tight group-hover:translate-x-1 transition-transform">{branch.name}</span>
                                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Centro de despacho Activo</span>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
                                        <ChevronRight size={18} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <button className="flex items-center gap-4 text-brand-dark font-black uppercase tracking-widest hover:text-brand-red transition-all group group-hover:translate-x-2">
                                <span className="text-xs">Ver todas las subestaciones</span>
                                <div className="w-12 h-[2px] bg-brand-red origin-left scale-x-75 group-hover:scale-x-125 transition-all"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .national-marker-v2 {
                    width: 14px;
                    height: 14px;
                    background-color: #E53935;
                    border-radius: 50%;
                    border: 2.5px solid white;
                    box-shadow: 0 0 15px rgba(229, 57, 53, 0.4);
                    animation: soft-pulse-v2 2.5s infinite;
                    cursor: pointer;
                    transition: transform 0.2s ease;
                    z-index: 5;
                }

                .national-marker-v2:hover {
                    transform: scale(1.4);
                    z-index: 10;
                }

                @keyframes soft-pulse-v2 {
                    0% {
                        box-shadow: 0 0 0 0 rgba(229, 57, 53, 0.6);
                    }
                    70% {
                        box-shadow: 0 0 0 15px rgba(229, 57, 53, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(229, 57, 53, 0);
                    }
                }
                
                .client-dot-v2 {
                    width: 8px;
                    height: 8px;
                    background: #FBC02D;
                    border: 1.5px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }

                .client-dot-v2:hover {
                    transform: scale(2.2);
                    background: #E53935;
                    z-index: 20;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 4s infinite ease-in-out;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                .mapboxgl-popup-content {
                    border-radius: 24px !important;
                    padding: 4px !important;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important;
                    border: 1px solid rgba(0,0,0,0.05) !important;
                }
                .mapboxgl-popup-tip {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Coverage;
