import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Handshake, Factory, MessageCircle, Phone } from 'lucide-react';
import { canonical } from '../lib/urls';
import { descripcion } from '../lib/descriptions';
import { breadcrumbSchema, faqSchema } from '../lib/schema';
import { MENSAJES, PCP, PCP_TEL_HREF, whatsappUrl } from '../lib/contacto';
import { TIPOS, TipoCiudad, ciudadesDeTipo, porEstado } from '../data/sedes';

/**
 * /cobertura/ — explica los tres niveles de servicio.
 *
 * Existe para las búsquedas de ciudades donde Big Cat no tiene sede
 * (Hermosillo, Tijuana, Juárez, Culiacán, Mexicali y Mérida suman ~7.600
 * impresiones en 3 meses): les dice con honestidad cómo se las atiende.
 */

const ICONOS: Record<TipoCiudad, React.ElementType> = {
    sede: Building2,
    servicio: MapPin,
    aliados: Handshake,
};

const EXPLICACION: Record<TipoCiudad, string> = {
    sede: 'Oficina de Big Cat con equipo propio. Atendemos casas y negocios de la ciudad y su zona.',
    servicio: 'No tenemos oficina en estas ciudades, pero damos el servicio directamente: se cotiza y se agenda igual que en una sede.',
    aliados: 'Ni oficina ni técnicos de Big Cat: te conectamos con un especialista certificado de nuestra red de aliados, que hace el servicio.',
};

const FAQS = [
    {
        q: '¿Cómo sé si Big Cat da servicio en mi ciudad?',
        a: 'Busca tu ciudad en esta página. Si no aparece, escríbenos por WhatsApp con tu ciudad y colonia y te decimos si te atendemos nosotros, un aliado de nuestra red o PCP Internacional.',
    },
    {
        q: '¿Qué diferencia hay entre una sede, una ciudad con servicio y la red de aliados?',
        a: 'En una sede tenemos oficina propia. En una ciudad con servicio no tenemos oficina, pero el servicio lo damos nosotros. En la red de aliados te conectamos con un especialista certificado que hace el servicio.',
    },
    {
        q: 'Tengo una empresa o industria en otra ciudad, ¿me pueden atender?',
        a: `Sí. Las empresas grandes e industrias de cualquier parte de México, y del extranjero, las atiende ${PCP.nombre}, la marca industrial de nuestro grupo. Teléfono: ${PCP.telefono}.`,
    },
];

const CoberturaPage: React.FC = () => {
    const title = 'Cobertura: ¿dónde damos servicio de fumigación? | Big Cat';
    const description = descripcion('/cobertura', '');
    const wa = whatsappUrl(MENSAJES.cobertura);

    return (
        <div className="pt-32 bg-white min-h-screen">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonical('/cobertura')} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical('/cobertura')} />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema([['Inicio', '/'], ['Cobertura', '/cobertura/']]))}
                </script>
                <script type="application/ld+json">{JSON.stringify(faqSchema(FAQS))}</script>
            </Helmet>

            <div className="max-w-6xl mx-auto px-6">
                <nav aria-label="Ruta de navegación" className="pt-6">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-brand-primary">Inicio</Link></li>
                        <li aria-hidden="true">/</li>
                        <li className="text-brand-dark font-medium">Cobertura</li>
                    </ol>
                </nav>

                <header className="pt-10 pb-12 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-normal text-brand-dark tracking-tight mb-6">
                        Cobertura de Big Cat: ¿dónde damos servicio?
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed mb-8">
                        Big Cat atiende casas y negocios en tres niveles: nuestras sedes, las ciudades donde damos servicio sin tener oficina y las ciudades donde te conectamos con nuestra red de aliados. Las empresas grandes e industrias de cualquier parte de México las atiende PCP Internacional.
                    </p>
                    <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-brand-red/20"
                    >
                        <MessageCircle size={20} /> Preguntar por mi ciudad
                    </a>
                </header>

                {TIPOS.map(({ tipo, titulo }) => {
                    const Icono = ICONOS[tipo];
                    return (
                        <section key={tipo} id={tipo} className="py-10 border-t border-gray-100">
                            <h2 className="flex items-center gap-3 text-3xl font-normal text-brand-dark mb-3">
                                <Icono className="text-brand-red" /> {titulo}
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-3xl">{EXPLICACION[tipo]}</p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {porEstado(ciudadesDeTipo(tipo)).map(({ estado, ciudades }) => (
                                    <div key={estado}>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">{estado}</p>
                                        <ul className="space-y-2">
                                            {ciudades.map(c => (
                                                <li key={c.id}>
                                                    <Link to={`/sedes/${c.id}/`} className="text-gray-700 hover:text-brand-red transition-colors">
                                                        Fumigación en {c.shortName}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}

                {/* Empresas: PCP Internacional */}
                <section className="my-12 bg-brand-dark text-white rounded-[2.5rem] p-8 md:p-12">
                    <h2 className="flex items-center gap-3 text-3xl font-normal mb-4">
                        <Factory className="text-brand-red" /> ¿Empresa o industria? PCP Internacional
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">
                        Las empresas grandes e industrias de cualquier parte de México —y del extranjero— las atiende {PCP.nombre}, la marca industrial de nuestro grupo: programas de manejo integrado de plagas para plantas, naves, bodegas y cadenas con varias sucursales.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href={PCP.url} target="_blank" rel="noopener" className="inline-flex items-center gap-3 bg-white text-brand-dark hover:bg-gray-100 px-8 py-4 rounded-xl font-medium transition-all">
                            Ir a pcpinternacional.com
                        </a>
                        <a href={PCP_TEL_HREF} className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-medium transition-all">
                            <Phone size={20} /> {PCP.telefono}
                        </a>
                    </div>
                </section>

                <section className="pb-24 max-w-4xl">
                    <h2 className="text-3xl font-normal text-brand-dark mb-8">Preguntas frecuentes</h2>
                    <div className="space-y-4">
                        {FAQS.map(f => (
                            <details key={f.q} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-lg text-brand-dark">
                                    {f.q}
                                    <span className="text-brand-red group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                    <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-flex items-center gap-3 bg-brand-red hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-medium transition-all"
                    >
                        <MessageCircle size={20} /> Escribir por WhatsApp
                    </a>
                </section>
            </div>
        </div>
    );
};

export default CoberturaPage;
