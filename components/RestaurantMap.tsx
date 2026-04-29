import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Target, ShieldCheck, Home, MapPin, Zap, Clock, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANCHES } from '../constants';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const RestaurantMap: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const [activeCity, setActiveCity] = useState(BRANCHES[0]);
    const [isLoading, setIsLoading] = useState(true);
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const [isLocating, setIsLocating] = useState(false);
    const [coverageStatus, setCoverageStatus] = useState<'checking' | 'in' | 'out' | null>(null);
    const [isochroneData, setIsochroneData] = useState<any[]>([]);

    const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
    const [searchZip, setSearchZip] = useState('');

    const checkCoverage = (point: [number, number], isochrones: any[]) => {
        if (!isochrones || isochrones.length === 0) return false;

        const isPointInPolygon = (pt: [number, number], polygonCoords: number[][][]) => {
            const coords = polygonCoords[0];
            let inside = false;
            for (let i = 0, j = coords.length - 1; i < coords.length; j = i++) {
                const xi = coords[i][0], yi = coords[i][1];
                const xj = coords[j][0], yj = coords[j][1];
                const intersect = ((yi > pt[1]) !== (yj > pt[1]))
                    && (pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi);
                if (intersect) inside = !inside;
            }
            return inside;
        };

        return isochrones.some(iso => {
            const feat = iso.features?.[0] || iso;
            if (!feat.geometry) return false;

            if (feat.geometry.type === 'Polygon') {
                return isPointInPolygon(point, feat.geometry.coordinates);
            } else if (feat.geometry.type === 'MultiPolygon') {
                return feat.geometry.coordinates.some((poly: number[][][]) => isPointInPolygon(point, poly));
            }
            return false;
        });
    };

    const fetchAllIsochrones = async () => {
        const allPolygons: any[] = [];
        const CHUNK_SIZE = 3; // Parallelize requests to speed up load

        for (let i = 0; i < BRANCHES.length; i += CHUNK_SIZE) {
            const chunk = BRANCHES.slice(i, i + CHUNK_SIZE);
            const promises = chunk.map(async (branch) => {
                const url = `https://api.mapbox.com/isochrone/v1/mapbox/driving/${branch.coords[0]},${branch.coords[1]}?contours_minutes=30&polygons=true&denoise=1&generalize=20&access_token=${MAPBOX_TOKEN}`;
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    if (data.features && data.features.length > 0) {
                        data.features[0].properties = { ...data.features[0].properties, branchId: branch.id };
                        return data.features[0];
                    }
                } catch (e) {
                    console.error(`Error fetching isochrone for ${branch.name}`, e);
                }
                return null;
            });

            const results = await Promise.all(promises);
            allPolygons.push(...results.filter(r => r !== null));
        }

        if (mapRef.current && allPolygons.length > 0) {
            const collection = { type: 'FeatureCollection', features: allPolygons };
            if (!mapRef.current.getSource('global-coverage')) {
                mapRef.current.addSource('global-coverage', { type: 'geojson', data: collection });

                mapRef.current.addLayer({
                    'id': 'global-coverage-fill',
                    'type': 'fill',
                    'source': 'global-coverage',
                    'paint': {
                        'fill-pattern': 'coverage-pattern',
                        'fill-opacity': 0.2
                    }
                }, 'add-3d-buildings');

                mapRef.current.addLayer({
                    'id': 'global-coverage-outline',
                    'type': 'line',
                    'source': 'global-coverage',
                    'paint': {
                        'line-color': '#E53935',
                        'line-width': 2,
                        'line-dasharray': [2, 2],
                        'line-opacity': 0.4
                    }
                }, 'add-3d-buildings');
            } else {
                (mapRef.current.getSource('global-coverage') as mapboxgl.GeoJSONSource).setData(collection as any);
            }
            setIsochroneData(allPolygons);
        }
    };

    const handleGetUserLocation = () => {
        setIsLocating(true);
        setCoverageStatus('checking');

        if (!navigator.geolocation) {
            alert("Tu navegador no soporta geolocalización");
            setIsLocating(false);
            setCoverageStatus(null);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { longitude, latitude } = position.coords;
                const coords: [number, number] = [longitude, latitude];
                setUserLocation(coords);
                setIsLocating(false);

                if (mapRef.current) {
                    mapRef.current.flyTo({
                        center: coords,
                        zoom: 13,
                        pitch: 45,
                        duration: 3000,
                        essential: true
                    });

                    if (userMarkerRef.current) userMarkerRef.current.remove();

                    const el = document.createElement('div');
                    el.className = 'user-marker';
                    el.innerHTML = '<div class="pulse-ring"></div><div class="user-dot"></div>';

                    userMarkerRef.current = new mapboxgl.Marker({
                        element: el,
                        anchor: 'center'
                    })
                        .setLngLat(coords)
                        .addTo(mapRef.current);
                }

                const hasCoverage = checkCoverage(coords, isochroneData);
                setCoverageStatus(hasCoverage ? 'in' : 'out');
            },
            (error) => {
                console.error("Geolocation error:", error);
                setIsLocating(false);
                setCoverageStatus(null);
                let msg = "No pudimos obtener tu ubicación.";
                if (error.code === 1) msg = "Por favor, permite el acceso a tu ubicación en los ajustes del navegador.";
                alert(msg);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
        );
    };

    const handleZipSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const foundBranch = BRANCHES.find(b =>
            b.zipCodes?.includes(searchZip) ||
            (b.range && searchZip >= b.range.split(' - ')[0] && searchZip <= b.range.split(' - ')[1])
        );

        if (foundBranch) {
            handleCityChange(foundBranch);
            setCoverageStatus('in');
        } else {
            setCoverageStatus('out');
        }
    };

    useEffect(() => {
        if (!mapContainer.current) return;
        mapboxgl.accessToken = MAPBOX_TOKEN;

        mapRef.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-102.5528, 23.6345],
            zoom: 4.8,
            pitch: 30,
            antialias: true,
            attributionControl: false
        });

        const loadPattern = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.strokeStyle = '#E53935';
                ctx.lineWidth = 2.5;
                ctx.globalAlpha = 0.4;
                // Elegant horizontal stripes (franjas)
                for (let i = 0; i <= 64; i += 16) {
                    ctx.beginPath();
                    ctx.moveTo(0, i);
                    ctx.lineTo(64, i);
                    ctx.stroke();
                }
            }
            const imgData = ctx?.getImageData(0, 0, 64, 64);
            if (imgData && mapRef.current) {
                if (mapRef.current.hasImage('coverage-pattern')) {
                    mapRef.current.removeImage('coverage-pattern');
                }
                mapRef.current.addImage('coverage-pattern', imgData);
            }
        };

        mapRef.current.on('load', async () => {
            if (!mapRef.current) return;
            loadPattern();

            // Add Mexico Focus Mask with extreme contrast
            if (mapRef.current) {
                // Dim everything except Mexico
                mapRef.current.addLayer({
                    'id': 'world-dimmer',
                    'type': 'fill',
                    'source': 'composite',
                    'source-layer': 'admin_0_boundary_disputed_low_res',
                    'paint': {
                        'fill-color': '#f8f9fa', // Light gray/white for washed out look
                        'fill-opacity': 0.8
                    },
                    'filter': ['!=', ['get', 'iso_3166_1'], 'MX']
                }, 'country-label');

                // Clear focus for Mexico
                mapRef.current.addLayer({
                    'id': 'mexico-highlight-fill',
                    'type': 'fill',
                    'source': 'composite',
                    'source-layer': 'admin_0_boundary_disputed_low_res',
                    'paint': {
                        'fill-color': '#fff',
                        'fill-opacity': 0
                    },
                    'filter': ['==', ['get', 'iso_3166_1'], 'MX']
                }, 'country-label');

                // Strong border for Mexico
                mapRef.current.addLayer({
                    'id': 'mexico-border',
                    'type': 'line',
                    'source': 'composite',
                    'source-layer': 'admin_0_boundary_disputed_low_res',
                    'paint': {
                        'line-color': '#E53935',
                        'line-width': 2,
                        'line-opacity': 0.6
                    },
                    'filter': ['==', ['get', 'iso_3166_1'], 'MX']
                }, 'country-label');
            }

            setIsLoading(false);

            // Add all branch markers
            BRANCHES.forEach(branch => {
                const el = document.createElement('div');
                el.className = 'branch-marker';
                el.addEventListener('click', () => handleCityChange(branch));

                new mapboxgl.Marker({ element: el })
                    .setLngLat(branch.coords as [number, number])
                    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3 class="font-normal">${branch.name}</h3><p class="text-xs">${branch.address}</p>`))
                    .addTo(mapRef.current!);
            });

            // Fetch all coverage zones
            await fetchAllIsochrones();
            mapRef.current.resize();
        });

        return () => {
            mapRef.current?.remove();
        };
    }, []);

    const handleCityChange = async (city: typeof BRANCHES[0]) => {
        if (!mapRef.current) return;
        setActiveCity(city);
        mapRef.current.flyTo({
            center: city.coords as [number, number],
            zoom: 11,
            pitch: 45,
            duration: 2500,
            essential: true
        });
    };

    return (
        <>
            <section id="mapa" className="py-24 bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
                        <div className="lg:col-span-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-[10px] font-medium uppercase tracking-[0.2em] mb-6">
                                    <Target size={14} /> Red Nacional de Control de Plagas
                                </span>
                                <h2 className="text-4xl lg:text-7xl font-semibold text-brand-dark tracking-tighter leading-[0.85] mb-8">
                                    Cobertura <br />
                                    <span className="text-brand-red italic">Total.</span>
                                </h2>
                                <p className="text-xl text-gray-500 font-normal max-w-4xl leading-relaxed">
                                    Explore nuestra red de servicio técnico. Las <span className="text-brand-dark font-medium underline decoration-brand-red/30">franjas horizontales</span> representan nuestras zonas de atención prioritaria de 30 minutos.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:h-auto">
                        {/* Sidebar */}
                        <div className="lg:col-span-3 flex flex-col gap-6 lg:h-[850px] order-last lg:order-none">
                            {/* Zip Search */}
                            <div className="bg-brand-dark text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group shrink-0">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-red/20 transition-colors" />
                                <h4 className="font-semibold text-[10px] uppercase tracking-[0.3em] mb-6 text-brand-red relative z-10">Verificar por C.P.</h4>
                                <form onSubmit={handleZipSearch} className="relative z-10">
                                    <input
                                        type="text"
                                        placeholder="Ej. 66220"
                                        value={searchZip}
                                        onChange={(e) => setSearchZip(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg font-medium focus:outline-none focus:border-brand-red focus:bg-white/10 transition-all placeholder:text-white/20"
                                    />
                                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-red p-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-red/20">
                                        <ChevronRight size={20} />
                                    </button>
                                </form>
                                <p className="text-[9px] text-white/40 mt-4 font-medium uppercase tracking-wider">Ingrese su código postal para validación instantánea</p>
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <p className="text-[8px] text-brand-red font-medium uppercase tracking-[0.2em] leading-relaxed opacity-60">
                                        Nota: Las zonas con franjas indican cobertura probable sujeta a validación técnica final.
                                    </p>
                                </div>
                            </div>

                            {/* City List */}
                            <div className="bg-gray-50 border border-gray-100 p-3 rounded-[3rem] flex flex-col gap-1 overflow-y-auto custom-scrollbar relative z-10 flex-grow">
                                <div className="px-6 py-4 mb-2">
                                    <h4 className="font-semibold text-brand-dark text-[10px] uppercase tracking-[0.2em]">Sedes Disponibles</h4>
                                </div>
                                {BRANCHES.map((city) => (
                                    <button
                                        key={city.id}
                                        onClick={() => handleCityChange(city)}
                                        className={`flex items-center justify-between px-6 py-5 rounded-[2rem] font-semibold text-[11px] uppercase tracking-widest transition-all duration-500 ${activeCity.id === city.id
                                            ? 'bg-white text-brand-red shadow-xl shadow-gray-200/50 scale-[1.02] border border-gray-100'
                                            : 'text-gray-400 hover:text-brand-dark hover:bg-white/50'
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full ${activeCity.id === city.id ? 'bg-brand-red animate-pulse' : 'bg-gray-300'}`} />
                                            {city.name}
                                        </span>
                                        <ChevronRight size={14} className={activeCity.id === city.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Map Interface */}
                        <div className="lg:col-span-9 relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-[12px] border-gray-50 shadow-3xl group bg-brand-dark h-[550px] lg:h-[850px] w-full order-first lg:order-none">
                            {isLoading && (
                                <div className="absolute inset-0 z-50 flex items-center justify-center bg-brand-dark">
                                    <div className="flex flex-col items-center gap-6">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            className="w-20 h-20 border-2 border-brand-red/30 border-t-brand-red rounded-full"
                                        />
                                        <p className="text-white/30 font-normal text-[10px] uppercase tracking-[0.4em] animate-pulse">Iniciando Red Nacional</p>
                                    </div>
                                </div>
                            )}
                            <div ref={mapContainer} className="absolute inset-0 z-0 w-full h-full" />

                            {/* Top Info Bar - Hidden on mobile, compact on desktop */}
                            <div className="absolute top-6 left-6 right-6 z-10 flex justify-between items-start pointer-events-none">
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="hidden lg:flex bg-white/95 backdrop-blur-xl text-brand-dark px-6 py-4 rounded-3xl shadow-xl items-center gap-4 border border-gray-100 pointer-events-auto"
                                >
                                    <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold leading-none tracking-tighter uppercase">{activeCity.name}</p>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-brand-red mt-1 opacity-60">{activeCity.address}</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Floating Action Button - Simplified & Adaptive */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-6 pointer-events-none flex flex-col items-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleGetUserLocation}
                                    disabled={isLocating}
                                    className="pointer-events-auto bg-brand-dark text-white p-4 lg:px-8 lg:py-5 rounded-full lg:rounded-3xl font-semibold text-[10px] lg:text-xs uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3 border border-white/10"
                                >
                                    {isLocating ? (
                                        <div className="w-4 h-4 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <Target size={18} className="text-brand-red" />
                                    )}
                                    <span className={isLocating ? 'opacity-50' : ''}>
                                        {isLocating ? 'Validando...' : 'Mi ubicación'}
                                    </span>
                                </motion.button>

                                <AnimatePresence>
                                    {coverageStatus && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="mt-4 w-full"
                                        >
                                            <div className={`px-6 py-4 rounded-2xl backdrop-blur-xl border flex items-center gap-4 shadow-xl ${coverageStatus === 'in' ? 'bg-white border-green-500 text-brand-dark' : 'bg-white border-brand-red text-brand-dark'
                                                }`}>
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${coverageStatus === 'in' ? 'bg-green-500 text-white' : 'bg-brand-red text-white'
                                                    }`}>
                                                    {coverageStatus === 'in' ? <ShieldCheck size={20} /> : <Zap size={20} />}
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold uppercase tracking-tight text-xs">
                                                        {coverageStatus === 'in' ? 'Cobertura Confirmada' : 'Fuera de Rango'}
                                                    </p>
                                                    <p className="text-[9px] font-medium text-gray-500 uppercase">
                                                        {coverageStatus === 'in' ? 'Llegamos en < 60 min' : 'Sujeto a disponibilidad'}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.05); border-radius: 10px; }
                
                .user-marker {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100;
                    pointer-events: none;
                }
                .user-dot {
                    width: 14px;
                    height: 14px;
                    background: #E53935;
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow: 0 0 15px rgba(229,57,53,0.8);
                    z-index: 2;
                }
                .pulse-ring {
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    border: 2px solid #E53935;
                    border-radius: 50%;
                    animation: marker-pulse 2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
                    z-index: 1;
                }
                @keyframes marker-pulse {
                    0% { transform: scale(0.5); opacity: 1; }
                    100% { transform: scale(2.5); opacity: 0; }
                }

                .branch-marker {
                    width: 14px;
                    height: 14px;
                    background: #E53935;
                    border: 2px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 0 10px rgba(0,0,0,0.3);
                    transition: all 0.3s;
                }
                .branch-marker:hover {
                    transform: scale(1.5);
                    box-shadow: 0 0 20px rgba(229,57,53,0.5);
                }
                
                .animate-spin-slow { animation: spin 3s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>
        </>
    );
};

export default RestaurantMap;

