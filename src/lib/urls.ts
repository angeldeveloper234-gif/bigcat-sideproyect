/**
 * LA FORMA CANÓNICA DE UNA URL DE bigcat.mx — UNA SOLA, GENERADA, NUNCA ESCRITA
 * ════════════════════════════════════════════════════════════════════════════
 *
 * POR QUÉ EXISTE ESTE ARCHIVO
 *
 * Google tenía indexadas casi todas las páginas del sitio DOS VECES, una con
 * barra final y otra sin ella, porque el código y el servidor no se ponían de
 * acuerdo:
 *
 *   - Los 55 enlaces internos del HTML iban SIN barra  (/sedes/monterrey)
 *   - Las 52 URLs del sitemap iban SIN barra
 *   - Netlify servía CON barra                         (/sedes/monterrey/)
 *
 * Gana la forma CON barra, y no por gusto: es la que el servidor ya sirve y
 * donde se acumuló el historial. /sedes/monterrey/ tiene 3.328 apariciones
 * contra 78 de la versión sin barra; /sedes/saltillo/, 862 contra 204. Migrar
 * hacia la forma sin barra tiraría ese historial a la basura.
 *
 * LA REGLA
 *
 * Nadie escribe una URL absoluta a mano. Canonical, og:url, sitemap y JSON-LD
 * salen todos de `canonical()`. Un canonical tipeado a mano es exactamente
 * cómo se fragmenta un sitio: basta que uno solo quede sin la barra para que
 * esa página vuelva a competir consigo misma.
 *
 * SOBRE LA Ñ DE /reseñas
 *
 * La ruta NO se renombra: en el router sigue siendo `/reseñas`. Lo que cambia
 * es cómo se ESCRIBE en el HTML y en el XML, donde la forma correcta es la
 * codificada: `/rese%C3%B1as/`. Como canonical y sitemap salen los dos de acá,
 * los dos dicen exactamente el mismo string, que es el criterio de "bien
 * hecho".
 */

export const SITE = 'https://bigcat.mx';

/**
 * Devuelve la URL absoluta y canónica de una ruta del sitio.
 *
 *   canonical('/')                  -> 'https://bigcat.mx/'
 *   canonical('/sedes/monterrey')   -> 'https://bigcat.mx/sedes/monterrey/'
 *   canonical('/sedes/monterrey/')  -> 'https://bigcat.mx/sedes/monterrey/'
 *   canonical('reseñas')            -> 'https://bigcat.mx/rese%C3%B1as/'
 *
 * Es idempotente a propósito: da igual si la ruta viene con barra o sin ella,
 * con acentos o ya codificada. Siempre sale la misma forma.
 */
export function canonical(path: string = '/'): string {
    // 1. Barra inicial garantizada.
    let ruta = path.startsWith('/') ? path : `/${path}`;

    // 2. Sin query ni ancla: el canonical apunta al documento, no a una
    //    posición dentro de él.
    ruta = ruta.split('?')[0].split('#')[0];

    // 3. Barra final garantizada (el home queda en '/').
    if (!ruta.endsWith('/')) ruta = `${ruta}/`;

    // 4. Codificación. `decodeURI` primero para no codificar dos veces si la
    //    ruta ya venía escapada (%C3%B1 -> ñ -> %C3%B1, no %25C3%25B1).
    let codificada: string;
    try {
        codificada = encodeURI(decodeURI(ruta));
    } catch {
        // decodeURI revienta ante un % suelto; en ese caso se usa tal cual.
        codificada = encodeURI(ruta);
    }

    return `${SITE}${codificada}`;
}

/**
 * La misma ruta, relativa y con barra final, para los enlaces internos del
 * sitio (`<Link to>` / `<a href>`). Sin el dominio: un enlace interno absoluto
 * obliga al navegador a una vuelta de más.
 *
 *   ruta('/sedes/monterrey') -> '/sedes/monterrey/'
 *   ruta('/')                -> '/'
 */
export function ruta(path: string = '/'): string {
    return canonical(path).slice(SITE.length);
}
