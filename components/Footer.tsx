import React from 'react';
import { NAV_LINKS, LOGO_LIGHT, LOGO_DARK, BRANCHES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-brand-dark pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-16 border-b border-gray-100">

          <div className="space-y-10">
            {/* Logo Empresa */}
            <a href="/" className="flex flex-col items-start select-none cursor-pointer">
              <div className="h-[120px] flex items-center mb-6">
                <img
                  src={LOGO_DARK}
                  alt="Big Cat - Control de Plagas Logo"
                  className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-gray-500 text-lg font-normal leading-relaxed max-w-md italic">
                En Big Cat priorizamos un servicio amigable, rápido y efectivo. Somos expertos en el control de plagas en México con el respaldo de PCP Internacional.
              </p>
              <span className="text-brand-dark/70 text-[10px] font-medium uppercase tracking-widest mt-4">PCP Internacional & Big Cat - Control de Plagas™</span>
            </a>

            {/*
              EMPRESA ASOCIADA A PCP INTERNACIONAL.

              El pie ya nombraba a PCP tres veces, pero en texto suelto: sin
              logo y, sobre todo, SIN ENLACE. Para Google una marca nombrada y
              no enlazada no conecta los dos sitios.

              Hasta ahora la relación iba en una sola dirección:
              pcpinternacional.com enlaza a Big Cat y a MosquitoMEX, y ninguno
              de los dos le devolvía el enlace.

              Va fuera del <a href="/"> de arriba a propósito: ese anchor
              envuelve el logo y el lema, y un enlace dentro de otro enlace es
              HTML inválido.
            */}
            <a
              href="https://pcpinternacional.com"
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-6 rounded-xl border border-gray-200 p-6 max-w-lg hover:border-brand-red hover:shadow-md transition-all"
            >
              <img
                src="/logo/pcp-internacional.png"
                alt="PCP Internacional - Control de Plagas"
                width={315}
                height={192}
                loading="lazy"
                className="h-16 w-auto object-contain shrink-0 sm:h-20"
              />
              <span className="text-sm leading-relaxed text-gray-500">
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-brand-red mb-1">
                  Empresa asociada
                </span>
                Big Cat forma parte de la red de{' '}
                <span className="font-bold text-brand-dark group-hover:text-brand-red transition-colors">
                  PCP Internacional
                </span>
                , que capacita, certifica y respalda a sus empresas asociadas.
              </span>
            </a>

            <div className="flex gap-10 text-[10px] font-medium uppercase tracking-[0.3em]">
              <div className="flex flex-col gap-2">
                <span className="text-brand-red font-medium">COFEPRIS</span>
                <span className="text-brand-dark/40">CERTIFIED</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-brand-red font-medium">HACCP</span>
                <span className="text-white/40">COMPLIANCE</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-brand-red font-medium">AIB</span>
                <span className="text-white/40">STANDARDS</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-brand-red font-semibold uppercase tracking-[0.2em] text-[10px]">Navegación</h4>
              <nav className="flex flex-col gap-4 text-sm font-medium text-gray-500">
                {NAV_LINKS.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-brand-red transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-px bg-brand-red group-hover:w-4 transition-all" />
                    {link.label}
                  </a>
                ))}

                {/*
                  PÁGINAS QUE NO RECIBÍAN NI UN ENLACE INTERNO.

                  Verificado en producción el 20/09: desde el home de bigcat.mx
                  había CERO enlaces a /reseñas/, /faq/ y /nosotros/, y a
                  /reseñas/ no la enlazaba ninguna página del sitio — existía
                  sólo en el router. Una página que el propio sitio no enlaza
                  es una página que Google entiende que no importa, y no la
                  posiciona.

                  El "Nosotros" de NAV_LINKS no cuenta: apunta a '/#nosotros',
                  que es un ancla del home, no la página /nosotros/. Son dos
                  URLs distintas y sólo una existe como página.

                  Se agregan acá y no en el menú de arriba porque el pie sale
                  en las 52 páginas: así las cuatro reciben enlaces desde todo
                  el sitio sin tocar la navegación principal.

                  El último es el artículo de precios. No es un enlace
                  decorativo: es la única página del sitio que responde
                  "cuánto cuesta una fumigación" (193 apariciones en 3 meses,
                  posición 8,4) y hasta ahora recibía sólo 2 enlaces internos,
                  los dos automáticos — el carrusel del home y el listado del
                  blog. Ninguna página la enlazaba a propósito.
                */}
                <a href="/nosotros/" className="hover:text-brand-red transition-colors flex items-center gap-2 group">
                  <div className="w-0 h-px bg-brand-red group-hover:w-4 transition-all" />
                  Quiénes somos
                </a>
                <a href="/faq/" className="hover:text-brand-red transition-colors flex items-center gap-2 group">
                  <div className="w-0 h-px bg-brand-red group-hover:w-4 transition-all" />
                  Preguntas frecuentes
                </a>
                {/*
                  La ñ va CODIFICADA en el href, igual que en el canonical y en
                  el sitemap. No es un capricho: el archivo que sirve esta
                  página vive en /rese%C3%B1as/, y pedir la forma sin codificar
                  devuelve 404. Las tres puntas tienen que decir el mismo
                  string — es la misma regla que usa canonical() en
                  src/lib/urls.ts.
                */}
                <a href="/rese%C3%B1as/" className="hover:text-brand-red transition-colors flex items-center gap-2 group">
                  <div className="w-0 h-px bg-brand-red group-hover:w-4 transition-all" />
                  Reseñas de clientes
                </a>
                <a href="/blog/" className="hover:text-brand-red transition-colors flex items-center gap-2 group">
                  <div className="w-0 h-px bg-brand-red group-hover:w-4 transition-all" />
                  Blog
                </a>
                <a href="/blog/cuanto-cuesta-fumigacion-mexico-2026/" className="hover:text-brand-red transition-colors flex items-center gap-2 group">
                  <div className="w-0 h-px bg-brand-red group-hover:w-4 transition-all" />
                  ¿Cuánto cuesta una fumigación?
                </a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-brand-red font-semibold uppercase tracking-[0.2em] text-[10px]">Nuestros Servicios</h4>
              <div className="flex flex-col gap-3 text-sm font-medium text-gray-500">
                <a href="/servicios/control-de-plagas-comercial/" className="hover:text-brand-red transition-colors">Control Comercial</a>
                <a href="/servicios/eliminacion-de-cucarachas/" className="hover:text-brand-red transition-colors">Cucarachas</a>
                <a href="/servicios/control-de-hormigas/" className="hover:text-brand-red transition-colors">Hormigas</a>
                <a href="/servicios/control-de-termitas/" className="hover:text-brand-red transition-colors">Termitas</a>
                <a href="/servicios/control-de-chinches/" className="hover:text-brand-red transition-colors">Chinches</a>
                <a href="/servicios/control-de-roedores/" className="hover:text-brand-red transition-colors">Roedores</a>
                <a href="/servicios/control-de-alacranes/" className="hover:text-brand-red transition-colors">Alacranes</a>
              </div>
            </div>
          </div>
        </div>

        {/* Cobertura por ciudad — enlazado interno a todas las sedes (SEO local) */}
        <div className="pt-16 pb-16 border-b border-gray-100">
          <h4 className="text-brand-red font-semibold uppercase tracking-[0.2em] text-[10px] mb-8">Control de Plagas por Ciudad</h4>
          <nav aria-label="Cobertura por ciudad" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
            {BRANCHES.map((branch) => (
              <a
                key={branch.id}
                href={`/sedes/${branch.id}/`}
                className="hover:text-brand-red transition-colors flex items-center gap-2 group"
              >
                <div className="w-0 h-px bg-brand-red group-hover:w-4 transition-all" />
                Control de Plagas en {branch.shortName || branch.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-12 pb-12 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-50">
          <p className="text-[10px] text-brand-dark/30 font-medium uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Big Cat - Control de Plagas (PCP Internacional). <br />
            Fumigaciones y Seguridad Sanitaria Profesional
          </p>
        </div>

        <div className="pt-12 pb-24 text-center">
          <p className="text-brand-red font-medium text-xs tracking-[0.5em] uppercase transition-all hover:tracking-[0.8em] duration-700">
            Hecho por{' '}
            <a 
              href="https://www.angelstudio.design/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
            >
              Angel Design Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
