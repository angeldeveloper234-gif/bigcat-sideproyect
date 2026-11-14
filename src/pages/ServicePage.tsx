import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { canonical } from '../lib/urls';
import { breadcrumbSchema as migas, faqSchema, servicioSchema, urlAbsoluta, LOGO_URL } from '../lib/schema';
import { motion } from 'framer-motion';
import { PESTS_LIST, BLOG_POSTS } from '../../constants';
import { contenidoServicio } from '../data/servicios';
import { BRANCHES, SERVICIO_POR_PLAGA } from '../data/sedes';
import { useWhatsapp } from '../lib/whatsappContexto';
import { TELEFONO, TEL_HREF, PCP } from '../lib/contacto';
import { CheckCircle2, AlertCircle, ShieldCheck, Microscope, MessageCircle, Phone, MapPin, ArrowRight, CalendarDays, Search } from 'lucide-react';
import Contact from '../../components/Contact';
import NotFound from './NotFound';

/**
 * PÁGINA DE SERVICIO — /servicios/{slug}/
 *
 * La ficha corta (nombre, imagen, riesgos, proceso) sale de PESTS_LIST en
 * constants.ts. Título, H1, description, señales, temporada, lugares y
 * preguntas frecuentes salen de src/data/servicios.ts.
 *
 * Estructura:
 *   1. H1 + respuesta directa + WhatsApp (mensaje del servicio) + teléfono
 *   2. Cómo lo resolvemos (ficha) + riesgos + prevención
 *   3. Señales
 *   4. Temporada
 *   5. Dónde aparece (tipos de inmueble)
 *   6. Protocolo
 *   7. Preguntas frecuentes + FAQPage
 *   8. Ciudades donde damos el servicio  → /sedes/{slug}/
 *   9. Guías del blog y servicios relacionados
 */
const ServicePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = PESTS_LIST.find(p => p.slug === slug);
    const contenido = contenidoServicio(slug);
    const wa = useWhatsapp();

    // Un servicio que no existe es un 404, no una copia de la home.
    if (!service || !contenido) return <NotFound />;

    // Generado, nunca escrito: es la misma funcion que alimenta el sitemap.
    const url = canonical(`/servicios/${service.slug}`);
    const image = service.image ? urlAbsoluta(service.image) : LOGO_URL;
    const title = contenido.titulo;
    const description = contenido.metaDescription;

    const schemaServicio = servicioSchema({
        slug: service.slug,
        nombre: contenido.h1,
        descripcion: description,
        imagen: service.image ? image : undefined,
    });
    const breadcrumbSchema = migas([['Inicio', '/'], [contenido.h1, `/servicios/${service.slug}/`]]);

    // Ciudades donde el servicio lo da Big Cat (sedes y ciudades con servicio).
    // Primero las que tienen esta plaga entre las más frecuentes.
    const propias = BRANCHES.filter(c => c.tipo !== 'aliados');
    const esFrecuente = (c: typeof BRANCHES[number]) =>
        (c.plagas?.map(p => p.servicio) ?? c.commonPests.map(p => SERVICIO_POR_PLAGA[p])).includes(service.slug);
    const frecuentes = propias.filter(esFrecuente);
    const ciudades = [...propias.filter(c => c.tipo === 'sede'), ...propias.filter(c => c.tipo !== 'sede')];

    const guias = BLOG_POSTS.filter(
        p => p.servicioRelacionado === service.slug || p.content.includes(`/servicios/${service.slug}/`)
    ).slice(0, 4);
    const relacionados = contenido.relacionados
        .map(s => ({ ficha: PESTS_LIST.find(p => p.slug === s), texto: contenidoServicio(s) }))
        .filter(r => r.ficha && r.texto);

    return (
        <div className="pt-20 bg-white min-h-screen">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_MX" />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <script type="application/ld+json">{JSON.stringify(schemaServicio)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema(contenido.faqs))}</script>
            </Helmet>

            {/* 1. H1 + respuesta directa + contacto */}
            <header className="relative min-h-[60vh] flex items-center overflow-hidden bg-brand-dark py-16">
                {service.image && (
                    <img
                        src={service.image}
                        alt={contenido.h1}
                        fetchPriority="high"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover scale-105"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl text-white"
                    >
                        <nav aria-label="Ruta de navegación" className="mb-6">
                            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
                                <li><Link to="/" className="hover:text-white underline-offset-4 hover:underline">Inicio</Link></li>
                                <li aria-hidden="true">/</li>
                                <li className="text-white">{contenido.h1}</li>
                            </ol>
                        </nav>
                        <span className="bg-brand-primary text-[10px] sm:text-xs font-normal uppercase tracking-[0.3em] px-3 py-1 rounded-full mb-6 inline-block">Eliminación Garantizada</span>
                        <h1 className="text-4xl md:text-6xl font-normal mb-6 leading-tight">{contenido.h1}</h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
                            {contenido.respuesta}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href={wa.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-brand-primary hover:bg-red-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-brand-red/30"
                            >
                                <MessageCircle size={20} /> Cotizar por WhatsApp
                            </a>
                            <a
                                href={TEL_HREF}
                                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-medium transition-all"
                            >
                                <Phone size={20} /> {TELEFONO.display}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </header>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-16 min-w-0">
                            {/* 2. Ficha del servicio */}
                            <div>
                                <h2 className="text-3xl font-normal text-brand-dark mb-8 flex items-center gap-3">
                                    <Microscope className="text-brand-primary shrink-0" />
                                    El problema y nuestra solución
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed mb-4">{service.description}</p>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                                    <h3 className="text-xl font-normal text-red-700 mb-4 flex items-center gap-2">
                                        <AlertCircle /> Riesgos asociados
                                    </h3>
                                    <p className="text-red-900/70 leading-relaxed font-normal">
                                        {service.risks}
                                    </p>
                                </div>
                                <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                                    <h3 className="text-xl font-normal text-green-700 mb-4 flex items-center gap-2">
                                        <ShieldCheck /> Consejos de prevención
                                    </h3>
                                    <p className="text-green-900/70 leading-relaxed font-normal">
                                        {service.prevention}
                                    </p>
                                </div>
                            </div>

                            {/* 3. Señales */}
                            <div>
                                <h2 className="text-3xl font-normal text-brand-dark mb-8 flex items-center gap-3">
                                    <Search className="text-brand-primary shrink-0" />
                                    {contenido.senalesTitulo}
                                </h2>
                                <ul className="space-y-4">
                                    {contenido.senales.map(senal => (
                                        <li key={senal} className="flex gap-3 text-lg text-gray-600 leading-relaxed">
                                            <CheckCircle2 className="text-brand-primary shrink-0 mt-1" size={20} />
                                            <span>{senal}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Temporada */}
                            <div>
                                <h2 className="text-3xl font-normal text-brand-dark mb-6 flex items-center gap-3">
                                    <CalendarDays className="text-brand-primary shrink-0" />
                                    {contenido.temporadaTitulo}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">{contenido.temporada}</p>
                            </div>

                            {/* 5. Dónde aparece */}
                            <div>
                                <h2 className="text-3xl font-normal text-brand-dark mb-6 flex items-center gap-3">
                                    <MapPin className="text-brand-primary shrink-0" />
                                    {contenido.lugaresTitulo}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">{contenido.lugares}</p>
                            </div>

                            {/* 6. Protocolo */}
                            <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem]">
                                <h2 className="text-2xl font-normal text-brand-dark mb-8">Cómo es el servicio, paso a paso</h2>
                                <p className="text-lg text-gray-600 mb-8 font-normal">
                                    {service.process}
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                                            <CheckCircle2 className="text-brand-primary w-5 h-5 flex-shrink-0" />
                                            <span className="font-normal text-brand-dark text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 7. Preguntas frecuentes (coinciden con el FAQPage del <head>) */}
                            <div>
                                <h2 className="text-3xl font-normal text-brand-dark mb-8">Preguntas frecuentes</h2>
                                <div className="space-y-4">
                                    {contenido.faqs.map(f => (
                                        <details key={f.q} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-lg text-brand-dark">
                                                <h3 className="font-medium">{f.q}</h3>
                                                <span className="text-brand-primary group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                                            </summary>
                                            <p className="mt-4 text-gray-600 leading-relaxed">{f.a}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>

                            {/* 8. Ciudades: enlace de cada servicio a cada sede */}
                            <div>
                                <h2 className="text-3xl font-normal text-brand-dark mb-6">¿En qué ciudades damos este servicio?</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Damos este servicio desde nuestras sedes y en las ciudades cercanas a cada una.
                                    {frecuentes.length > 0 && ` Es de las consultas más frecuentes en ${frecuentes.slice(0, 4).map(c => c.shortName).join(', ')}.`}
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {ciudades.map(c => (
                                        <li key={c.id}>
                                            <Link
                                                to={`/sedes/${c.id}/`}
                                                className="group flex items-center justify-between gap-3 px-5 py-3 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:border-brand-red/30 text-brand-dark hover:text-brand-primary transition-all"
                                            >
                                                <span>{contenido.ancla} en {c.shortName}</span>
                                                <ArrowRight size={16} className="shrink-0 opacity-40 group-hover:opacity-100" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-gray-600 leading-relaxed">
                                    ¿Estás en otra ciudad? En varias más te conectamos con un especialista de nuestra red de aliados:{' '}
                                    <Link to="/cobertura/" className="text-brand-primary hover:underline">revisa la cobertura</Link>.
                                    Las empresas grandes e industrias las atiende{' '}
                                    <a href={PCP.url} target="_blank" rel="noopener" className="text-brand-primary hover:underline">{PCP.nombre}</a>.
                                </p>
                            </div>

                            {/* 9. Guías y servicios relacionados */}
                            {guias.length > 0 && (
                                <div>
                                    <h2 className="text-3xl font-normal text-brand-dark mb-6">Guías relacionadas</h2>
                                    <ul className="space-y-3">
                                        {guias.map(post => (
                                            <li key={post.slug}>
                                                <Link to={`/blog/${post.slug}/`} className="text-lg text-brand-primary hover:underline">
                                                    {post.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div>
                                <h2 className="text-3xl font-normal text-brand-dark mb-6">Otros servicios</h2>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {relacionados.map(({ ficha, texto }) => (
                                        <Link
                                            key={ficha!.slug}
                                            to={`/servicios/${ficha!.slug}/`}
                                            className="p-5 bg-gray-50 hover:bg-white rounded-2xl border border-gray-100 hover:border-brand-red/30 hover:shadow-md transition-all"
                                        >
                                            <span className="block font-medium text-brand-dark">{texto!.ancla}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / CTA */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-32 bg-brand-dark p-8 rounded-3xl text-white">
                                <h2 className="text-2xl font-normal mb-4">¿Necesitas ayuda inmediata?</h2>
                                <p className="text-gray-400 mb-8 font-normal">Agenda una inspección hoy mismo y obtén un 10% de descuento en tu primer servicio.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                                        Atención 24/7 vía WhatsApp
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                                        Técnicos certificados
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                                        Garantía total de eliminación
                                    </li>
                                </ul>
                                <a
                                    href={wa.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full bg-brand-primary hover:bg-red-600 text-center py-4 rounded-xl font-normal transition-all"
                                >
                                    <MessageCircle size={18} /> Cotizar por WhatsApp
                                </a>
                                <a
                                    href="#contacto"
                                    className="block w-full mt-3 bg-white/10 hover:bg-white/20 text-center py-4 rounded-xl font-normal transition-all"
                                >
                                    Solicitar cotización
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default ServicePage;
