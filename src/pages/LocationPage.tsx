import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BRANCHES, CONTACT_INFO } from '../../constants';
import { MapPin, Phone, ShieldCheck, Clock, Award, Bug, Building2, CheckCircle2 } from 'lucide-react';
import Contact from '../../components/Contact';

import MapCoverage from '../../components/MapCoverage';

const SITE = 'https://bigcat.mx';
const PHONE_DIGITS = CONTACT_INFO.phone.replace(/\s+/g, '');
const PHONE_E164 = `+52${PHONE_DIGITS}`;

const LocationPage: React.FC = () => {
    const { city } = useParams<{ city: string }>();
    const branch = BRANCHES.find(b => b.id === city);

    if (!branch) return <Navigate to="/" replace />;

    const cityShort = branch.shortName || branch.name;
    const stateName = branch.state || 'México';
    const url = `${SITE}/sedes/${branch.id}`;

    // Contenido local: usa datos únicos por ciudad con respaldo genérico.
    const intro = branch.intro ||
        `Big Cat ofrece servicios profesionales de fumigación y control de plagas en ${cityShort}. Atención el mismo día, técnicos certificados ante COFEPRIS y resultados garantizados por escrito.`;
    const neighborhoods = branch.neighborhoods || [];
    const commonPests = branch.commonPests || ['Cucarachas', 'Roedores', 'Hormigas', 'Termitas', 'Mosquitos'];
    const seasonalNote = branch.seasonalNote;

    // SEO
    const title = `Control de Plagas en ${cityShort} | Fumigación Profesional | Big Cat`;
    const description = `Control de plagas y fumigación profesional en ${cityShort}, ${stateName}. Eliminación garantizada de ${commonPests.slice(0, 3).join(', ').toLowerCase()} y más. Servicio el mismo día, certificado COFEPRIS. ¡Cotiza gratis!`;
    const keywords = [
        `control de plagas ${cityShort}`,
        `fumigación ${cityShort}`,
        `fumigadora ${cityShort}`,
        `exterminador ${cityShort}`,
        `control de plagas ${stateName}`,
        ...commonPests.map(p => `${p.toLowerCase()} ${cityShort}`),
    ].join(', ');

    // Schema.org — LocalBusiness (por ciudad)
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["PestControlService", "LocalBusiness"],
        "@id": `${url}#business`,
        "name": `Big Cat - Control de Plagas en ${cityShort}`,
        "image": `${SITE}/logo/BIG CAT - Control de plagas.png`,
        "url": url,
        "telephone": PHONE_E164,
        "priceRange": "$$",
        "areaServed": {
            "@type": "City",
            "name": cityShort,
            "containedInPlace": { "@type": "State", "name": stateName }
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": branch.address,
            "addressLocality": cityShort,
            "addressRegion": stateName,
            "addressCountry": "MX",
            ...(branch.zipCodes && branch.zipCodes[0] ? { "postalCode": branch.zipCodes[0] } : {})
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": branch.coords[1],
            "longitude": branch.coords[0]
        },
        "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "20:00"
        }],
        "parentOrganization": { "@type": "Organization", "name": CONTACT_INFO.motherCompany }
    };

    // Schema.org — Breadcrumb
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": SITE },
            { "@type": "ListItem", "position": 2, "name": "Sedes", "item": `${SITE}/#mapa` },
            { "@type": "ListItem", "position": 3, "name": cityShort, "item": url }
        ]
    };

    // Schema.org — FAQ local (mejora aparición en Google + GEO/IA)
    const faqs = [
        {
            q: `¿Cuánto cuesta el control de plagas en ${cityShort}?`,
            a: `El costo del servicio de fumigación en ${cityShort} depende del tipo de plaga, el tamaño del inmueble y la infestación. En Big Cat ofrecemos una inspección y cotización gratuita sin compromiso. Llámanos al ${CONTACT_INFO.phone}.`
        },
        {
            q: `¿Atienden el mismo día en ${cityShort}?`,
            a: `Sí. Si agendas antes de las 12:00 pm, en la mayoría de los casos podemos brindar servicio de control de plagas el mismo día en ${cityShort} y su zona metropolitana.`
        },
        {
            q: `¿Los productos son seguros para niños y mascotas en ${cityShort}?`,
            a: `Totalmente. Utilizamos productos certificados ante COFEPRIS, de baja toxicidad y aplicación profesional, seguros para tu familia y mascotas cuando se siguen las indicaciones del técnico.`
        },
        {
            q: `¿Qué plagas controlan en ${cityShort}?`,
            a: `En ${cityShort} controlamos principalmente ${commonPests.join(', ').toLowerCase()}, además de termitas, chinches, pulgas, alacranes y aves. Ofrecemos control de plagas residencial, comercial e industrial.`
        }
    ];
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    };

    return (
        <div className="pt-20 bg-white min-h-screen">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={url} />
                <meta name="geo.region" content="MX" />
                <meta name="geo.placename" content={cityShort} />
                <meta name="geo.position" content={`${branch.coords[1]};${branch.coords[0]}`} />
                <meta name="ICBM" content={`${branch.coords[1]}, ${branch.coords[0]}`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_MX" />
                <meta property="og:image" content={`${SITE}/logo/BIG CAT - Control de plagas.png`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* Breadcrumb visible (SEO + UX) */}
            <nav aria-label="Ruta de navegación" className="container mx-auto px-6 pt-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                    <li><Link to="/" className="hover:text-brand-primary">Inicio</Link></li>
                    <li aria-hidden="true">/</li>
                    <li><Link to="/#mapa" className="hover:text-brand-primary">Sedes</Link></li>
                    <li aria-hidden="true">/</li>
                    <li className="text-brand-dark font-medium">{cityShort}</li>
                </ol>
            </nav>

            <header className="bg-brand-dark py-20 md:py-24 text-white relative overflow-hidden mt-4">
                {/* Abstract Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 text-brand-primary mb-6">
                            <MapPin />
                            <span className="font-normal uppercase tracking-[0.2em] text-sm">{stateName} · Cobertura Local</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-normal mb-8 leading-tight">
                            Control de Plagas en <br/>
                            <span className="text-brand-primary">{cityShort}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-normal leading-relaxed max-w-3xl">
                            {intro}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href={`https://wa.me/52${PHONE_DIGITS}?text=Hola,%20quiero%20una%20cotizaci%C3%B3n%20de%20control%20de%20plagas%20en%20${encodeURIComponent(cityShort)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-brand-primary hover:bg-red-600 px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-brand-red/30"
                            >
                                <Phone size={20} /> Cotización gratis en {cityShort}
                            </a>
                            <a
                                href={`tel:${PHONE_E164}`}
                                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-medium transition-all"
                            >
                                {CONTACT_INFO.phone}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </header>

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-normal text-brand-dark">Fumigación profesional para hogares y negocios en {cityShort}</h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                                Ofrecemos tiempos de respuesta récord para emergencias en {cityShort}. Nuestro equipo local está capacitado para atender desde residencias premium hasta complejos industriales y cadenas de restaurantes, con manejo integrado de plagas (MIP) certificado ante COFEPRIS.
                            </p>

                            {seasonalNote && (
                                <div className="flex items-start gap-4 p-6 bg-brand-red/5 border border-brand-red/10 rounded-2xl">
                                    <Bug className="text-brand-primary w-8 h-8 flex-shrink-0" />
                                    <p className="text-gray-700 leading-relaxed">{seasonalNote}</p>
                                </div>
                            )}

                            {/* Plagas más comunes en la ciudad */}
                            <div>
                                <h3 className="text-lg font-medium text-brand-dark mb-4">Plagas más comunes que controlamos en {cityShort}:</h3>
                                <div className="flex flex-wrap gap-3">
                                    {commonPests.map((pest, i) => (
                                        <span key={i} className="inline-flex items-center gap-2 text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                                            <CheckCircle2 size={16} className="text-brand-primary" /> {pest}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                                    <Clock className="text-brand-primary w-8 h-8 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-normal text-lg mb-1">Mismo Día</h4>
                                        <p className="text-gray-500 text-sm">Agenda antes de las 12pm y te visitamos hoy mismo en {cityShort}.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                                    <Award className="text-brand-primary w-8 h-8 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-normal text-lg mb-1">Local & Experto</h4>
                                        <p className="text-gray-500 text-sm">Conocemos las plagas estacionales de {cityShort}.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                <ShieldCheck size={120} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-normal mb-8">Servicio de Control de Plagas en {cityShort}</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-brand-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-normal uppercase tracking-widest mb-1">Línea Directa</p>
                                        <a href={`tel:${PHONE_E164}`} className="text-2xl font-normal hover:text-brand-primary transition-colors">{CONTACT_INFO.phone}</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-brand-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-normal uppercase tracking-widest mb-1">Área de Servicio</p>
                                        <p className="text-xl font-normal">{cityShort} y Zona Metropolitana</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Building2 className="text-brand-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-normal uppercase tracking-widest mb-1">Sectores</p>
                                        <p className="text-xl font-normal">Residencial · Comercial · Industrial</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 pt-12 border-t border-white/10">
                                <p className="text-gray-400 mb-6 font-normal italic">"Garantía total por escrito en cada servicio realizado en {cityShort}."</p>
                                <a
                                    href="#contacto"
                                    className="inline-block bg-brand-primary hover:bg-red-600 px-8 py-4 rounded-xl font-normal transition-all"
                                >
                                    Solicitar inspección gratuita
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Colonias / zonas atendidas */}
                    {neighborhoods.length > 0 && (
                        <div className="mb-24">
                            <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-4 tracking-tight">Zonas y colonias que atendemos en {cityShort}</h2>
                            <p className="text-lg text-gray-500 font-normal mb-8 max-w-3xl">
                                Damos servicio de fumigación y control de plagas en todas las colonias de {cityShort} y municipios conurbados. Estas son algunas de las zonas donde operamos:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {neighborhoods.map((n, i) => (
                                    <span key={i} className="inline-flex items-center gap-2 text-sm bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-sm">
                                        <MapPin size={16} className="text-brand-primary" /> {n}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Map Section */}
                    <div className="space-y-12 mb-24">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-4 tracking-tight">Mapa de Cobertura en {cityShort}</h2>
                            <p className="text-lg text-gray-500 font-normal">
                                Visualiza nuestras zonas de respuesta rápida y los establecimientos que confían en nuestro protocolo de fumigación especializada.
                            </p>
                        </div>
                        <MapCoverage center={branch.coords} cityId={branch.id} />
                    </div>

                    {/* FAQ local (visible + coincide con FAQ schema) */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-10 tracking-tight text-center">Preguntas frecuentes sobre control de plagas en {cityShort}</h2>
                        <div className="space-y-4">
                            {faqs.map((f, i) => (
                                <details key={i} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-lg text-brand-dark">
                                        {f.q}
                                        <span className="text-brand-primary group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 leading-relaxed">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default LocationPage;
