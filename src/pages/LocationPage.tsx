import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { canonical, SITE } from '../lib/urls';
import { descripcion, componer } from '../lib/descriptions';
import { motion } from 'framer-motion';
import { PESTS_LIST } from '../../constants';
import { buscarSede, Branch, SERVICIO_POR_PLAGA } from '../data/sedes';
import { TELEFONO, TEL_HREF, PCP, mensajeCiudad, whatsappUrl } from '../lib/contacto';
import { localBusinessSchema, serviceAreaSchema, faqSchema, breadcrumbSchema } from '../lib/schema';
import { MapPin, Phone, Clock, Bug, CheckCircle2, MessageCircle, Star, ArrowRight } from 'lucide-react';
import NotFound from './NotFound';
import { abrirPanelWhatsapp } from '../../components/WhatsappPanel';

/**
 * PÁGINA DE CIUDAD — /sedes/{slug}/
 *
 * Cambia según el nivel de la ciudad (`tipo` en src/data/sedes.ts):
 *   'sede'      estructura completa, con datos de la sede (dirección, horario, mapa)
 *   'servicio'  la misma estructura, sin el bloque 2: "damos servicio en X", sin
 *               dirección ni mención de oficina
 *   'aliados'   página corta: "te conectamos con un especialista certificado de
 *               nuestra red de aliados"; no habla de técnicos ni oficina propia
 *
 * Estructura de sede y servicio (Monterrey es el modelo):
 *   1. H1 + subtítulo + WhatsApp con el mensaje de la ciudad + teléfono
 *   2. Datos de la sede: dirección, horario, mapa        (oculto si no hay datos)
 *   3. Servicios de fumigación en {Ciudad}
 *   4. Plagas frecuentes en {Ciudad}
 *   5. Zonas que atendemos
 *   6. ¿Cuánto cuesta una fumigación en {Ciudad}?        (sin cifras)
 *   7. Reseñas                                           (oculto si no hay reseñas)
 *   8. Preguntas frecuentes + FAQPage
 *   9. CTA final de WhatsApp
 *
 * Todo el contenido variable sale de src/data/sedes.ts.
 */

const LARGO_MAXIMO_TITLE = 60;

/** `Fumigaciones en {Ciudad} | Control de Plagas – Big Cat`, sin pasar de 60. */
export function tituloSede(sede: Branch): string {
    const ciudad = sede.tituloCiudad ?? sede.shortName;
    const completo = `Fumigaciones en ${ciudad} | Control de Plagas – Big Cat`;
    return completo.length <= LARGO_MAXIMO_TITLE ? completo : `Fumigaciones en ${ciudad} | Control de Plagas`;
}

/** "a, b y c" */
const enumerar = (items: string[]) =>
    items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}`;

const ALIADOS = 'te conectamos con un especialista certificado de nuestra red de aliados';

function introPorTipo(sede: Branch): string {
    if (sede.intro) return sede.intro;
    const ciudad = sede.shortName;
    if (sede.tipo === 'aliados') {
        return `En ${ciudad} ${ALIADOS}. Escríbenos por WhatsApp qué plaga tienes y te ponemos en contacto.`;
    }
    if (sede.tipo === 'servicio') {
        return `Damos servicio de fumigación a casas y negocios en ${ciudad}. Escríbenos por WhatsApp qué plaga tienes y te mandamos la cotización sin costo.`;
    }
    return `Fumigaciones para casas, departamentos y negocios en ${ciudad}. Escríbenos por WhatsApp qué plaga tienes y te mandamos la cotización sin costo.`;
}

function preguntasAliados(sede: Branch): { q: string; a: string }[] {
    const ciudad = sede.shortName;
    return [
        {
            q: `¿Big Cat tiene oficina en ${ciudad}?`,
            a: `No. En ${ciudad} ${ALIADOS}, que es quien hace el servicio.`,
        },
        {
            q: '¿Cómo funciona?',
            a: `Nos escribes por WhatsApp o llamas al ${TELEFONO.display}, nos cuentas qué plaga tienes y en qué colonia estás, y te ponemos en contacto con el especialista de la red.`,
        },
        {
            q: `¿Cuánto cuesta el servicio en ${ciudad}?`,
            a: 'El precio lo define el especialista según la plaga, el tamaño y el tipo de inmueble y qué tan avanzada esté la infestación. Pídele la cotización antes de agendar.',
        },
        {
            q: '¿Y si es para una empresa o una industria?',
            a: `Las empresas grandes e industrias de cualquier parte de México las atiende ${PCP.nombre}, la marca industrial de nuestro grupo: ${PCP.telefono}.`,
        },
    ];
}

function preguntasFrecuentes(sede: Branch, plagas: string[]): { q: string; a: string }[] {
    if (sede.tipo === 'aliados') return preguntasAliados(sede);
    const ciudad = sede.shortName;
    const otrosServicios = PESTS_LIST
        .filter(s => s.slug !== 'control-de-plagas-comercial' && !plagas.some(p => SERVICIO_POR_PLAGA[p] === s.slug))
        .map(s => s.name.toLowerCase());
    const zonas = sede.municipios?.map(z => z.nombre) ?? [];

    let respuestaZonas = `Atendemos casas y negocios en ${ciudad}. Escríbenos por WhatsApp con tu colonia y te confirmamos si llegamos.`;
    if (zonas.length > 1) {
        respuestaZonas = `Damos servicio de fumigación en ${enumerar(zonas)}. Si tu colonia está en otro municipio cercano, pregúntanos por WhatsApp.`;
    } else if (sede.neighborhoods?.length) {
        respuestaZonas = `Atendemos ${ciudad}, incluidas colonias como ${enumerar(sede.neighborhoods.slice(0, 5))}. Si no ves la tuya, pregúntanos por WhatsApp.`;
    }

    return [
        {
            q: `¿Cuánto cuesta una fumigación en ${ciudad}?`,
            a: `Depende del tamaño del inmueble, la plaga, el tipo de inmueble y qué tan avanzada esté la infestación. La cotización es gratis: mándanos por WhatsApp qué plaga ves, el tamaño aproximado y tu colonia, y te respondemos con el precio.`,
        },
        {
            q: `¿Qué plagas atienden en ${ciudad}?`,
            a: `En ${ciudad} las consultas más frecuentes son por ${enumerar(plagas.map(p => p.toLowerCase()))}. También damos servicio de ${enumerar(otrosServicios)}.`,
        },
        {
            q: `¿En qué zonas de ${ciudad} dan servicio?`,
            a: respuestaZonas,
        },
        {
            q: `¿Fumigan negocios, restaurantes y bodegas en ${ciudad}?`,
            a: `Sí. Además de casas y departamentos, fumigamos comercios, oficinas, restaurantes y bodegas. Para industrias y empresas grandes, el servicio lo da ${PCP.nombre}, la marca industrial de nuestro grupo.`,
        },
        {
            q: '¿Tengo que salir de mi casa durante la fumigación?',
            a: 'Depende del tratamiento. Con gel y cebos no hace falta salir. Con aspersión o nebulización, el técnico te indica cuánto tiempo mantener el área desocupada, normalmente de 2 a 4 horas.',
        },
        {
            q: `¿Cómo agendo una fumigación en ${ciudad}?`,
            a: `Escríbenos por WhatsApp o llama al ${TELEFONO.display}. Cuéntanos qué plaga tienes, el tipo y tamaño del inmueble y tu colonia; con eso te mandamos la cotización y agendamos la visita.`,
        },
    ];
}

/** Botón de WhatsApp de la página de ciudad: abre el mini formulario. */
const BotonWhatsapp: React.FC<{ href: string; ciudad: Branch; children: React.ReactNode; className?: string }> = ({ href, ciudad, children, className = '' }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-panel
        onClick={e => abrirPanelWhatsapp(e, ciudad)}
        className={`inline-flex items-center gap-3 bg-brand-primary hover:bg-red-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-brand-red/30 ${className}`}
    >
        <MessageCircle size={20} /> {children}
    </a>
);

const LocationPage: React.FC = () => {
    const { city } = useParams<{ city: string }>();
    const sede = buscarSede(city);

    // Una sede que no existe es un 404, no una copia de la home.
    if (!sede) return <NotFound />;

    const ciudad = sede.shortName;
    const url = canonical(`/sedes/${sede.id}`);
    const wa = whatsappUrl(mensajeCiudad(sede));
    // Teléfono local de la sede si está cargado; si no, el general.
    // El WhatsApp siempre va al número central.
    const telefono = sede.tipo === 'sede' && sede.telefonoLocal ? sede.telefonoLocal : TELEFONO.display;
    const telHref = sede.tipo === 'sede' && sede.telefonoLocal ? `tel:+52${sede.telefonoLocal.replace(/\D/g, '')}` : TEL_HREF;
    const esAliados = sede.tipo === 'aliados';
    const zonaDe = sede.zonaDe ? buscarSede(sede.zonaDe) : undefined;
    const migas: [string, string][] = [
        ['Inicio', '/'],
        ['Sedes', '/sedes/'],
        ...(zonaDe ? [[zonaDe.shortName, `/sedes/${zonaDe.id}/`] as [string, string]] : []),
        [ciudad, `/sedes/${sede.id}/`],
    ];
    const etiqueta = {
        sede: `Sede ${ciudad}`,
        servicio: zonaDe ? `Zona ${zonaDe.shortName}` : `Damos servicio en ${ciudad}`,
        aliados: 'Red de aliados',
    }[sede.tipo];
    const schemaNegocio =
        sede.tipo === 'sede' ? localBusinessSchema(sede) : sede.tipo === 'servicio' ? serviceAreaSchema(sede) : null;

    const title = tituloSede(sede);
    const description = descripcion(
        `/sedes/${sede.id}`,
        componer(`Fumigación para casas y negocios en ${ciudad}, ${sede.state}. Cotiza por WhatsApp`)
    );

    const plagas = sede.plagas?.map(p => p.nombre) ?? sede.commonPests;
    const faqs = preguntasFrecuentes(sede, plagas);
    // Dirección, horario y mapa existen solo en las sedes físicas.
    const tieneDatosSede = sede.tipo === 'sede' && Boolean(sede.direccion || sede.horario || sede.mapaEmbedUrl);
    const zonas = sede.municipios ?? [];

    return (
        <div className="pt-20 bg-white min-h-screen">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={url} />
                <meta name="geo.region" content="MX" />
                <meta name="geo.placename" content={ciudad} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_MX" />
                <meta property="og:image" content={`${SITE}/logo/BIG CAT - Control de plagas.png`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {schemaNegocio && <script type="application/ld+json">{JSON.stringify(schemaNegocio)}</script>}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(migas))}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema(faqs))}</script>
            </Helmet>

            <nav aria-label="Ruta de navegación" className="container mx-auto px-6 pt-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                    {migas.slice(0, -1).map(([nombre, ruta]) => (
                        <React.Fragment key={ruta}>
                            <li><Link to={ruta} className="hover:text-brand-primary">{nombre}</Link></li>
                            <li aria-hidden="true">/</li>
                        </React.Fragment>
                    ))}
                    <li className="text-brand-dark font-medium">{ciudad}</li>
                </ol>
            </nav>

            {/* 1. H1 + subtítulo + WhatsApp + teléfono */}
            <header className="bg-brand-dark py-20 md:py-24 text-white relative overflow-hidden mt-4">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 text-brand-primary mb-6">
                            <MapPin />
                            <span className="font-normal uppercase tracking-[0.2em] text-sm">{sede.state} · {etiqueta}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-normal mb-8 leading-tight">
                            Fumigación y control de plagas en <span className="text-brand-primary">{ciudad}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-normal leading-relaxed max-w-3xl">{introPorTipo(sede)}</p>
                        {zonaDe && (
                            <p className="mt-4 text-gray-400">
                                Parte de la zona de nuestra <Link to={`/sedes/${zonaDe.id}/`} className="text-white underline hover:text-brand-primary">sede {zonaDe.shortName}</Link>.
                            </p>
                        )}

                        <div className="mt-10 flex flex-wrap gap-4">
                            <BotonWhatsapp href={wa} ciudad={sede}>{esAliados ? 'Pedir contacto por WhatsApp' : 'Cotizar por WhatsApp'}</BotonWhatsapp>
                            <a
                                href={telHref}
                                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-medium transition-all"
                            >
                                <Phone size={20} /> {telefono}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </header>

            <div className="container mx-auto px-6">
                {/* 2. Datos de la sede (solo si están cargados en src/data/sedes.ts) */}
                {tieneDatosSede && (
                    <section className="pt-20 grid lg:grid-cols-2 gap-10 items-start">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-normal text-brand-dark">Sede Big Cat en {ciudad}</h2>
                            {sede.direccion && (
                                <p className="flex items-start gap-4 text-lg text-gray-600">
                                    <MapPin className="text-brand-primary shrink-0 mt-1" /> {sede.direccion}
                                </p>
                            )}
                            {sede.horario && (
                                <p className="flex items-start gap-4 text-lg text-gray-600">
                                    <Clock className="text-brand-primary shrink-0 mt-1" /> {sede.horario}
                                </p>
                            )}
                            <p className="flex items-start gap-4 text-lg text-gray-600">
                                <Phone className="text-brand-primary shrink-0 mt-1" />
                                <a href={telHref} className="hover:text-brand-primary">{telefono}</a>
                            </p>
                        </div>
                        {sede.mapaEmbedUrl && (
                            <iframe
                                src={sede.mapaEmbedUrl}
                                title={`Mapa de la sede de Big Cat en ${ciudad}`}
                                className="w-full h-80 rounded-3xl border-0 shadow-sm"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        )}
                    </section>
                )}

{!esAliados && (
<>
                {/* 3. Servicios */}
                <section className="pt-20">
                    <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-6">Servicios de fumigación en {ciudad}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-10">
                        {sede.serviciosIntro ??
                            `Hacemos fumigaciones para casas, departamentos, comercios, oficinas, restaurantes y bodegas en ${ciudad}. Primero vemos qué plaga hay y por dónde entra, y con eso elegimos el tratamiento. Estos son nuestros servicios:`}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {PESTS_LIST.map(servicio => (
                            <Link
                                key={servicio.slug}
                                to={`/servicios/${servicio.slug}/`}
                                className="group flex flex-col gap-2 p-6 bg-gray-50 hover:bg-white rounded-2xl border border-gray-100 hover:border-brand-red/30 hover:shadow-md transition-all"
                            >
                                <span className="flex items-center justify-between font-medium text-brand-dark group-hover:text-brand-primary transition-colors">
                                    {servicio.name}
                                    <ArrowRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </span>
                                <span className="text-sm text-gray-500 leading-relaxed">{servicio.description}</span>
                            </Link>
                        ))}
                    </div>
                </section>

</>
)}
                                {/* Aliados: qué significa y cómo funciona. Sin técnicos ni oficina propios. */}
                {esAliados && (
                    <section className="pt-20 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-6">Control de plagas en {ciudad} con nuestra red de aliados</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Big Cat no tiene oficina en {ciudad}. Para que no te quedes sin servicio, {ALIADOS}: una empresa local que hace el trabajo en tu casa o negocio.
                        </p>
                        <ol className="space-y-3 text-gray-600 mb-8 list-decimal pl-6">
                            <li>Escríbenos por WhatsApp con la plaga que tienes y tu colonia.</li>
                            <li>Te ponemos en contacto con el especialista de la red en {ciudad}.</li>
                            <li>El especialista te cotiza y agenda contigo.</li>
                        </ol>
                        <p className="text-gray-600 mb-8">
                            ¿Es para una empresa o una industria? La atiende <a href={PCP.url} target="_blank" rel="noopener" className="text-brand-primary hover:underline">{PCP.nombre}</a>, la marca industrial de nuestro grupo, en cualquier parte de México.
                        </p>
                        <BotonWhatsapp href={wa} ciudad={sede}>Pedir contacto por WhatsApp</BotonWhatsapp>
                    </section>
                )}

                {/* 4. Plagas frecuentes */}
                <section className="pt-20">
                    <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-6">Plagas frecuentes en {ciudad}</h2>
                    {sede.plagas ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            {sede.plagas.map(plaga => (
                                <article key={plaga.nombre} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                    <h3 className="flex items-center gap-3 text-xl font-medium text-brand-dark mb-3">
                                        <Bug className="text-brand-primary shrink-0" size={22} /> {plaga.nombre} en {ciudad}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{plaga.texto}</p>
                                    {plaga.servicio && (
                                        <Link
                                            to={`/servicios/${plaga.servicio}/`}
                                            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-brand-primary hover:underline"
                                        >
                                            Fumigación de {plaga.nombre.toLowerCase()} <ArrowRight size={14} />
                                        </Link>
                                    )}
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-3">
                            {sede.commonPests.map(plaga => {
                                const slug = SERVICIO_POR_PLAGA[plaga];
                                const contenido = (
                                    <>
                                        <CheckCircle2 size={16} className="text-brand-primary" /> {plaga}
                                    </>
                                );
                                const clase = 'inline-flex items-center gap-2 text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full';
                                return slug ? (
                                    <Link key={plaga} to={`/servicios/${slug}/`} className={`${clase} hover:bg-brand-red/10 hover:text-brand-primary transition-colors`}>
                                        {contenido}
                                    </Link>
                                ) : (
                                    <span key={plaga} className={clase}>{contenido}</span>
                                );
                            })}
                        </div>
                    )}
                    {sede.seasonalNote && (
                        <div className="flex items-start gap-4 p-6 mt-8 bg-brand-red/5 border border-brand-red/10 rounded-2xl max-w-4xl">
                            <Bug className="text-brand-primary w-8 h-8 flex-shrink-0" />
                            <p className="text-gray-700 leading-relaxed">{sede.seasonalNote}</p>
                        </div>
                    )}
                </section>

{!esAliados && (
<>
                {/* 5. Zonas */}
                {(zonas.length > 0 || (sede.neighborhoods?.length ?? 0) > 0) && (
                    <section className="pt-20">
                        <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-4">Zonas que atendemos</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-4xl">
                            {zonas.length > 0
                                ? `Nuestros fumigadores dan servicio en ${ciudad} y en estos municipios y zonas cercanas:`
                                : `Nuestros fumigadores dan servicio en todo ${ciudad}. Algunas de las colonias donde trabajamos:`}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {zonas.length > 0
                                ? zonas.map(zona =>
                                      zona.sede ? (
                                          <Link
                                              key={zona.nombre}
                                              to={`/sedes/${zona.sede}/`}
                                              className="inline-flex items-center gap-2 text-sm bg-white border border-brand-red/30 text-brand-primary px-4 py-2 rounded-full shadow-sm hover:bg-brand-red/5"
                                          >
                                              <MapPin size={16} /> {zona.nombre} (ver página)
                                          </Link>
                                      ) : (
                                          <span key={zona.nombre} className="inline-flex items-center gap-2 text-sm bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-sm">
                                              <MapPin size={16} className="text-brand-primary" /> {zona.nombre}
                                          </span>
                                      )
                                  )
                                : sede.neighborhoods!.map(n => (
                                      <span key={n} className="inline-flex items-center gap-2 text-sm bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-sm">
                                          <MapPin size={16} className="text-brand-primary" /> {n}
                                      </span>
                                  ))}
                        </div>
                    </section>
                )}

                {/* 6. Precio — sin cifras: los precios los carga el dueño */}
                <section className="pt-20 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-6">¿Cuánto cuesta una fumigación en {ciudad}?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        No hay un precio único: cada fumigación se cotiza según cuatro cosas.
                    </p>
                    <ul className="space-y-3 text-gray-600 mb-6">
                        <li className="flex gap-3"><CheckCircle2 className="text-brand-primary shrink-0 mt-0.5" size={20} /><span><strong className="font-medium text-brand-dark">Tamaño del inmueble:</strong> metros cuadrados, número de cuartos y si hay patio, jardín o azotea.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-brand-primary shrink-0 mt-0.5" size={20} /><span><strong className="font-medium text-brand-dark">Tipo de plaga:</strong> no es lo mismo un tratamiento de cucarachas que uno de termitas o chinches, que llevan más trabajo y equipo.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-brand-primary shrink-0 mt-0.5" size={20} /><span><strong className="font-medium text-brand-dark">Tipo de inmueble:</strong> casa, departamento, restaurante, oficina o bodega.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-brand-primary shrink-0 mt-0.5" size={20} /><span><strong className="font-medium text-brand-dark">Nivel de infestación:</strong> si es preventivo o si la plaga ya está activa y necesita más de una visita.</span></li>
                    </ul>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        La cotización es gratis por WhatsApp: mándanos qué plaga ves, el tamaño aproximado del lugar y tu colonia, y te respondemos con el precio antes de agendar. Si quieres una referencia de cómo se arma el precio, lee nuestra guía{' '}
                        <Link to="/blog/cuanto-cuesta-fumigacion-mexico-2026/" className="text-brand-primary hover:underline">¿Cuánto cuesta una fumigación en México?</Link>.
                    </p>
                    <BotonWhatsapp href={wa} ciudad={sede}>Pedir cotización gratis</BotonWhatsapp>
                </section>

                {/* 7. Reseñas — solo reseñas reales cargadas en src/data/sedes.ts */}
                {sede.resenas.length > 0 && (
                    <section className="pt-20">
                        <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-8">Reseñas de clientes en {ciudad}</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sede.resenas.map((r, i) => (
                                <figure key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                                    <div className="flex mb-3" aria-label={`${r.calificacion} de 5 estrellas`}>
                                        {[1, 2, 3, 4, 5].map(n => (
                                            <Star key={n} size={16} className={n <= r.calificacion ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'} />
                                        ))}
                                    </div>
                                    <blockquote className="text-gray-600 leading-relaxed">"{r.texto}"</blockquote>
                                    <figcaption className="mt-4 text-sm text-gray-500">
                                        {r.autor} · {r.fuente}{r.fecha ? ` · ${r.fecha}` : ''}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>
                )}

</>
)}
                                {/* 8. Preguntas frecuentes (coinciden con el FAQPage del <head>) */}
                <section className="pt-20 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-10 text-center">Preguntas frecuentes sobre fumigación en {ciudad}</h2>
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
                </section>
            </div>

            {/* 9. CTA final */}
            <section className="mt-24 bg-brand-dark py-20 text-white text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-normal mb-6">
                        {esAliados ? `Control de plagas en ${ciudad}` : `Cotiza tu fumigación en ${ciudad}`}
                    </h2>
                    <p className="text-lg text-gray-300 mb-10">
                        {esAliados
                            ? 'Escríbenos por WhatsApp con la plaga y tu colonia, y te conectamos con el especialista de nuestra red.'
                            : 'Escríbenos por WhatsApp con la plaga y el tamaño del lugar. La cotización no tiene costo.'}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <BotonWhatsapp href={wa} ciudad={sede}>Escribir por WhatsApp</BotonWhatsapp>
                        <a href={telHref} className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-medium transition-all">
                            <Phone size={20} /> {telefono}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationPage;
