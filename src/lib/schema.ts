import { canonical, SITE } from './urls';
import { PCP, TELEFONO } from './contacto';
import { Branch } from '../data/sedes';

/**
 * JSON-LD del sitio. Igual que el canonical, las URLs salen de `canonical()`
 * y nunca se escriben a mano.
 *
 * Regla de los datos de sede: `address`, `geo` y `openingHours` se declaran
 * SOLO si están cargados en src/data/sedes.ts. Un dato estructurado inventado
 * es peor que uno que falta.
 */

const LOGO = `${SITE}/logo/BIG%20CAT%20-%20Control%20de%20plagas.png`;
const SAME_AS = [
    'https://web.facebook.com/profile.php?id=61561957291508',
    'https://www.instagram.com/bigcat.mx/',
];

const PCP_ORG = { '@type': 'Organization', name: PCP.nombre, url: PCP.url };

/** Organization de la home: quién es Big Cat, sin ubicación. */
export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${canonical('/')}#organization`,
        name: 'Big Cat Control de Plagas',
        alternateName: 'Big Cat',
        url: canonical('/'),
        logo: LOGO,
        telephone: TELEFONO.e164,
        sameAs: SAME_AS,
        parentOrganization: PCP_ORG,
    };
}

/** LocalBusiness de una sede física (tipo 'sede'). */
export function localBusinessSchema(sede: Branch) {
    const url = canonical(`/sedes/${sede.id}`);
    // Las zonas que tienen sede propia las declara esa sede, no esta.
    const municipios = (sede.municipios ?? [])
        .filter(z => !z.sede && z.nombre !== sede.shortName)
        .map(z => ({ '@type': 'Place', name: z.nombre }));

    return {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'PestControlService'],
        '@id': `${url}#business`,
        name: 'Big Cat Control de Plagas',
        url,
        image: LOGO,
        logo: LOGO,
        telephone: TELEFONO.e164,
        areaServed: [
            {
                '@type': 'City',
                name: sede.shortName,
                containedInPlace: { '@type': 'State', name: sede.state },
            },
            ...municipios,
        ],
        brand: { '@type': 'Brand', name: 'Big Cat' },
        parentOrganization: PCP_ORG,
        sameAs: SAME_AS,
        ...(sede.direccion
            ? {
                  address: {
                      '@type': 'PostalAddress',
                      streetAddress: sede.direccion,
                      addressLocality: sede.shortName,
                      addressRegion: sede.state,
                      addressCountry: 'MX',
                  },
              }
            : {}),
        ...(sede.geo
            ? { geo: { '@type': 'GeoCoordinates', latitude: sede.geo.lat, longitude: sede.geo.lng } }
            : {}),
        ...(sede.horarioSchema.length ? { openingHours: sede.horarioSchema } : {}),
    };
}

/**
 * Ciudad con servicio pero sin oficina: un Service con área atendida. No es un
 * LocalBusiness, porque eso declararía un local en esa ciudad.
 */
export function serviceAreaSchema(ciudad: Branch) {
    const url = canonical(`/sedes/${ciudad.id}`);
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Fumigación y control de plagas en ${ciudad.shortName}`,
        serviceType: 'Control de plagas',
        url,
        areaServed: {
            '@type': 'City',
            name: ciudad.shortName,
            containedInPlace: { '@type': 'State', name: ciudad.state },
        },
        provider: {
            '@type': 'Organization',
            '@id': `${canonical('/')}#organization`,
            name: 'Big Cat Control de Plagas',
            url: canonical('/'),
            telephone: TELEFONO.e164,
            parentOrganization: PCP_ORG,
        },
    };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };
}

/** Migas de pan: [['Inicio', '/'], ['Sedes', '/sedes/'], …] */
export function breadcrumbSchema(items: [string, string][]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map(([name, path], i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name,
            item: canonical(path),
        })),
    };
}
