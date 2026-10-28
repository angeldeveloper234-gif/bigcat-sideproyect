import { ruta } from './urls';
import { BRANCHES, TOTAL_SEDES, MAS_DE_CIUDADES } from '../data/sedes';

/**
 * DESCRIPTIONS POR PÁGINA
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * EL PROBLEMA QUE RESUELVE
 *
 * Las 52 páginas servían la misma description: la del home, escrita a mano en
 * index.html, que react-helmet-async no borra. Alguien que buscaba
 * "fumigaciones saltillo" veía un texto genérico nacional que nombraba ocho
 * ciudades. Ese es el CTR de 1,4%.
 *
 * DE DÓNDE SALEN ESTOS TEXTOS
 *
 * Las de las sedes viven con el resto de los datos de cada sede, en
 * src/data/sedes.ts (`metaDescription`): fumigación para casas y negocios,
 * una zona o municipio y la cotización por WhatsApp, en 155 caracteres o
 * menos y sin precios. Las demás están abajo.
 *
 * LO QUE NO DICEN, A PROPÓSITO
 *
 * Ninguna menciona "COFEPRIS", "29 años de experiencia", "garantía" ni
 * certificaciones. No es un olvido: esas afirmaciones estaban en la
 * description vieja del home sin verificar, y replicarlas sin confirmar en
 * todas las páginas de ciudad era exactamente lo que no había que hacer. Si el
 * cliente las confirma, se agregan acá.
 */

/**
 * Las descriptions literales, indexadas por ruta canónica.
 * Las claves pasan por ruta() para que coincidan exactamente con la forma que
 * usan el canonical y el sitemap: con barra final.
 */
export const DESCRIPCIONES: Record<string, string> = {
    [ruta('/')]:
        `Big Cat: fumigación y control de plagas para casas y negocios. ${TOTAL_SEDES} sedes y servicio en más de ${MAS_DE_CIUDADES} ciudades del norte y centro de México. Cotiza gratis.`,

    ...Object.fromEntries(BRANCHES.map(sede => [ruta(`/sedes/${sede.id}`), sede.metaDescription])),

    [ruta('/sedes')]:
        'Sedes, ciudades con servicio y red de aliados de Big Cat: fumigación y control de plagas para casas y negocios en México. Cotiza por WhatsApp.',
    [ruta('/cobertura')]:
        '¿Big Cat da servicio en tu ciudad? Sedes, ciudades con servicio y red de aliados. Empresas e industrias de todo México, con PCP Internacional.',

    [ruta('/servicios/control-de-aves-y-palomas')]:
        'Control de aves y palomas para naves industriales, bodegas y edificios. Redes, púas y sistemas de exclusión sin dañar a las aves. Cotización sin costo.',
    [ruta('/servicios/control-de-avispas')]:
        'Retiro de panales de avispas y avispones en casa y negocio, con equipo y protección profesional. Atención el mismo día. Cotización sin costo.',

    [ruta('/blog/cuanto-cuesta-fumigacion-mexico-2026')]:
        '¿Cuánto cuesta una fumigación en México en 2026? Rangos de precio por tipo de plaga y por metro cuadrado, y qué factores hacen subir o bajar el presupuesto.',
    [ruta('/blog/alacranes-norte-mexico-prevencion')]:
        'Alacranes en el norte de México: por qué aparecen en casa, en qué meses hay más, cómo prevenirlos y cuándo conviene llamar a un servicio profesional.',
    [ruta('/blog/insectos-comunes-mexico')]:
        'Los insectos más comunes en las casas de México: cómo identificarlos, qué los atrae y qué hacer con cada uno antes de que se vuelvan una plaga.',
};

/**
 * Devuelve la description de una ruta.
 *
 * Si la ruta está en la lista literal, gana esa. Si no, se usa el texto propio
 * que genere la página a partir de su contenido real. Lo que NUNCA se devuelve
 * es la del home: ese era el bug.
 */
export function descripcion(path: string, propia: string): string {
    return DESCRIPCIONES[ruta(path)] ?? propia;
}

/**
 * Arma una description de largo correcto a partir de texto real de la página.
 *
 * Google recorta alrededor de los 155-160 caracteres. Una description de 190
 * no dice más: dice lo mismo y se corta a la mitad de una frase. Esta función
 * recorta por frase o por palabra —nunca a mitad de palabra— y deja lugar
 * para el cierre.
 *
 * Solo se usa como RESPALDO, para las páginas que no están en la lista
 * literal de arriba. Los textos literales de arriba no pasan por acá.
 */
export function componer(base: string, cierre = 'Cotización sin costo.', max = 158): string {
    const limite = max - cierre.length - 1;
    let t = base.replace(/\s+/g, ' ').trim();

    if (t.length > limite) {
        t = t.slice(0, limite);
        const corte = Math.max(t.lastIndexOf('. '), t.lastIndexOf(', '), t.lastIndexOf(' '));
        if (corte > 0) t = t.slice(0, corte);
        t = t.replace(/[.,;:\s]+$/, '');
        // Si el corte dejó colgando una conjunción o preposición ("...Comercios y"),
        // se va también: si no, la frase queda partida a la vista del usuario.
        t = t.replace(/\s+(y|e|o|u|de|del|la|el|los|las|con|para|en|a|por)$/i, '');
    }
    if (!/[.!?]$/.test(t)) t += '.';

    return `${t} ${cierre}`;
}
