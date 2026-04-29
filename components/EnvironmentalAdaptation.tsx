import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { RESIDENTIAL_PESTS, CONTACT_INFO } from '../constants';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EnvironmentalAdaptation: React.FC = () => {  
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-red/10 text-brand-red font-normal tracking-widest uppercase text-[10px] mb-6 border border-brand-red/20">
            Especialistas en el Hogar
          </span>
          <h2 className="text-4xl lg:text-7xl font-semibold text-brand-dark tracking-tighter leading-[0.8] mb-8">
            Protección de <span className="text-brand-red">Entornos</span> <br /> Residenciales
          </h2>
          <p className="text-xl text-gray-500 font-normal max-w-2xl mx-auto">
            Adaptamos nuestro despliegue táctico a cada área de tu propiedad, asegurando la eliminación total con tecnología avanzada.
          </p>
        </div>

        {/* Swiper implementation */}
        <div className="relative px-4 sm:px-12">
          {/* Custom Navigation Arrows - Fixed Position */}
          <button className="swiper-prev-btn absolute left-0 top-[35%] -translate-y-1/2 z-40 w-12 h-12 lg:w-16 lg:h-16 bg-white shadow-xl rounded-full flex items-center justify-center border border-gray-100 text-brand-dark hover:bg-brand-red hover:text-white transition-all transform active:scale-95 group">
             <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button className="swiper-next-btn absolute right-0 top-[35%] -translate-y-1/2 z-40 w-12 h-12 lg:w-16 lg:h-16 bg-white shadow-xl rounded-full flex items-center justify-center border border-gray-100 text-brand-dark hover:bg-brand-red hover:text-white transition-all transform active:scale-95 group">
             <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-prev-btn',
              nextEl: '.swiper-next-btn',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-16"
          >
            {RESIDENTIAL_PESTS.map((pest, index) => {
              const Icon = pest.icon;
              return (
                <SwiperSlide key={index} className="h-auto">
                  <div className="relative rounded-[3rem] overflow-hidden bg-white flex flex-col shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-brand-red/10 border border-gray-100 h-full group">
                    {/* Image Area */}
                    <div className="h-[280px] w-full relative overflow-hidden shrink-0">
                      <img
                        src={pest.image}
                        alt={pest.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-80" />
                      
                      {/* Floating Environment Tag */}
                      <div className="absolute top-6 left-6 z-20">
                        <span className="inline-flex py-1.5 px-3 rounded-full bg-white/20 backdrop-blur-md text-white font-medium uppercase tracking-widest text-[9px] border border-white/20">
                          {pest.environment}
                        </span>
                      </div>

                      {/* Circular Icon Overlay */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-3xl border border-white/20 group-hover:bg-brand-red transition-all duration-500 z-10">
                        <div className="text-white">
                          <Icon size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex-grow flex flex-col justify-between bg-white relative z-20">
                      <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-brand-dark leading-tight mb-3 group-hover:text-brand-red transition-colors">
                          {pest.name}
                        </h3>
                        <p className="text-sm text-gray-400 font-normal leading-relaxed">
                          {pest.description}
                        </p>
                      </div>
                      
                      <a 
                        href={`https://wa.me/52${CONTACT_INFO.phone.replace(/\s+/g, '')}?text=Hola,%20me%20interesa%20una%20cotizaci%C3%B3n%20para%20${encodeURIComponent(pest.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-max items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-brand-red bg-brand-red/5 px-5 py-3 rounded-full hover:bg-brand-red hover:text-white transition-all duration-300"
                      >
                        Cotizar Ahora <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Dots Navigation */}
          <div className="swiper-custom-pagination flex justify-center !relative !bottom-0 mt-8" />
        </div>

        {/* Lead Context Bar */}
        <div className="mt-20 bg-brand-gray/30 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 border border-gray-100">
          <div className="bg-brand-dark text-white p-6 rounded-3xl shrink-0 shadow-2xl">
            <Info size={40} className="text-brand-red" />
          </div>
          <div className="flex-grow">
            <p className="text-2xl font-semibold text-brand-dark mb-2">Cobertura Residencial Directa</p>
            <p className="text-gray-500 font-normal leading-relaxed max-w-3xl">
              Operamos con equipos tácticos distribuidos en las <span className="text-brand-red font-medium">15 ciudades clave de México</span>. Sanidad domiciliaria especializada con los más altos estándares de seguridad para tu familia.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #E2E8F0;
          opacity: 1;
          margin: 0 6px !important;
          border-radius: 9999px;
          transition: all 0.5s ease;
        }
        .swiper-custom-pagination .swiper-pagination-bullet-active {
          width: 40px;
          background: #E53935;
        }
        .swiper-prev-btn:disabled, .swiper-next-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          background: #F8FAFC !important;
          color: #94A3B8 !important;
        }
      `}</style>
    </section>
  );
};

export default EnvironmentalAdaptation;

