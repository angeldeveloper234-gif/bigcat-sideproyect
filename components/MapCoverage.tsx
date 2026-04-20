import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';
import { MapPin, Utensils, Zap, Clock, ShieldCheck, Target } from 'lucide-react';
import { RESTAURANT_CLIENTS } from '../constants';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

interface MapCoverageProps {
  center: [number, number];
  cityId: string;
}

const MapCoverage: React.FC<MapCoverageProps> = ({ center, cityId }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, lat] = center;
  const [isLoading, setIsLoading] = useState(true);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [lng, lat],
      zoom: 13,
      pitch: 60,
      bearing: -15,
      antialias: true,
      attributionControl: false
    });

    map.current.on('style.load', () => {
      if (!map.current) return;

      // Setup Fog for "Globe" feel when zooming out
      map.current.setFog({
        color: 'rgb(26, 26, 26)',
        'high-color': 'rgb(36, 36, 36)',
        'horizon-blend': 0.02,
        'space-color': 'rgb(11, 11, 11)',
        'star-intensity': 0.6
      });
    });

    map.current.on('load', async () => {
      if (!map.current) return;
      setIsLoading(false);

      // Add 3D buildings
      map.current.addLayer({
        'id': 'add-3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#333',
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'min_height'],
          'fill-extrusion-opacity': 0.6
        }
      });

      // Fetch Isochrones via Standard fetch
      const getIsochrones = async () => {
        const minutes = [10, 20, 30];
        const colors = ['#6abf40', '#bfaa40', '#bf4040'];

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
                'paint': { 'fill-color': color, 'fill-opacity': 0.12 }
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

      await getIsochrones();

      // HQ Marker
      const hqMarker = new mapboxgl.Marker({ color: '#E53935', scale: 1.5 })
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="p-2">
                <h4 class="font-black text-brand-dark uppercase text-xs">Sede Operativa</h4>
                <p class="text-[10px] text-gray-400">Punto de Despegue Logístico</p>
            </div>
        `))
        .addTo(map.current!);
      markersRef.current.push(hqMarker);

      // Restaurant Markers
      const activeRestaurants = RESTAURANT_CLIENTS[cityId as keyof typeof RESTAURANT_CLIENTS] || [];

      activeRestaurants.forEach((rest) => {
        const el = document.createElement('div');
        el.className = 'city-pulse-v2';

        const marker = new mapboxgl.Marker(el, { anchor: 'center' })
          .setLngLat(rest.coords as [number, number])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="p-3">
              <strong class="block text-brand-dark font-black text-sm mb-1">${rest.name}</strong>
              <span class="text-[10px] text-brand-red font-bold uppercase tracking-widest">Establecimiento Protegido</span>
            </div>
          `))
          .addTo(map.current!);
        markersRef.current.push(marker);
      });
      map.current?.resize();
    });

    const resizeObserver = new ResizeObserver(() => {
      map.current?.resize();
    });
    if (mapContainer.current) {
      resizeObserver.observe(mapContainer.current);
    }

    return () => {
      resizeObserver.disconnect();
      markersRef.current.forEach(m => m.remove());
      markersRef.current = [];
      map.current?.remove();
    };
  }, [lng, lat, cityId]);

  return (
    <div className="relative w-full h-[700px] rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-brand-dark">
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-brand-dark/80 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-brand-red border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" />

      {/* Premium UI Components on Map */}
      <div className="absolute top-8 left-8 z-10 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-brand-dark/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-xs"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck size={28} className="text-brand-red" />
            <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">Radio de <br /> Respuesta</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#6abf40] shadow-[0_0_10px_rgba(106,191,64,0.4)]" />
                <span className="text-gray-300 text-[10px] font-black uppercase tracking-widest">10 min</span>
              </div>
              <span className="text-white text-[10px] font-bold opacity-40 group-hover:opacity-100 transition-opacity">CRÍTICO</span>
            </div>
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#bfaa40] shadow-[0_0_10px_rgba(191,170,64,0.4)]" />
                <span className="text-gray-300 text-[10px] font-black uppercase tracking-widest">20 min</span>
              </div>
              <span className="text-white text-[10px] font-bold opacity-40 group-hover:opacity-100 transition-opacity">PRIORIDAD</span>
            </div>
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#bf4040] shadow-[0_0_10px_rgba(191,64,64,0.4)]" />
                <span className="text-gray-300 text-[10px] font-black uppercase tracking-widest">30 min</span>
              </div>
              <span className="text-white text-[10px] font-bold opacity-40 group-hover:opacity-100 transition-opacity">NORMAL</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-4 bg-brand-red text-white px-6 py-4 rounded-3xl shadow-2xl border-l-4 border-white/30"
        >
          <Zap size={20} className="animate-pulse" />
          <span className="text-xs font-black uppercase tracking-widest italic">Fast-Track™ Certificado</span>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 z-10">
        <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-[2rem] border border-white/20 shadow-2xl flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-dark">
            <Clock size={24} />
          </div>
          <div>
            <span className="block font-black text-sm uppercase tracking-tighter">Última Actualización</span>
            <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">Tiempo Real: Sincronizado</span>
          </div>
        </div>
      </div>

      <style>{`
        .city-pulse-v2 {
            width: 14px;
            height: 14px;
            background-color: #E53935;
            border-radius: 50%;
            border: 2.5px solid white;
            box-shadow: 0 0 10px rgba(229, 57, 53, 0.4);
            animation: soft-pulse-v2 2s infinite;
            cursor: pointer;
            transition: transform 0.2s ease;
        }
        .city-pulse-v2:hover {
            transform: scale(1.3);
        }
        @keyframes soft-pulse-v2 {
            0% {
                box-shadow: 0 0 0 0 rgba(229, 57, 53, 0.7);
            }
            70% {
                box-shadow: 0 0 0 12px rgba(229, 57, 53, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(229, 57, 53, 0);
            }
        }

        .mapboxgl-popup-content {
            border-radius: 20px !important;
            padding: 0 !important;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important;
        }
        .mapboxgl-popup-tip {
            display: none;
        }
      `}</style>
    </div>
  );
};

export default MapCoverage;
