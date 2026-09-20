import { ruta } from './urls';

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
 * Los escribió el cliente y van LITERALES. No se reescriben, no se "mejoran"
 * y no se les agrega nada.
 *
 * LO QUE NO DICEN, A PROPÓSITO
 *
 * Ninguna menciona "COFEPRIS", "29 años de experiencia", "garantía" ni
 * certificaciones. No es un olvido: esas afirmaciones estaban en la
 * description vieja del home sin verificar, y replicarlas sin confirmar en 22
 * páginas de ciudad era exactamente lo que no había que hacer. Si el cliente
 * las confirma, se agregan acá.
 *
 * El orden de las sedes es por apariciones perdidas en los últimos 3 meses:
 * las primeras seis son el 70% del problema.
 */

const SEDES: Record<string, string> = {
    'monterrey':
        'Fumigaciones y control de plagas en Monterrey y su área metropolitana. Cucarachas, ratas, alacranes y chinches. Cotización sin costo y servicio el mismo día.',
    'hermosillo':
        'Fumigaciones en Hermosillo: control de plagas para casa y negocio. Cucarachas, alacranes, ratas y mosquitos. Pida su cotización sin costo por teléfono o WhatsApp.',
    'saltillo':
        'Fumigaciones en Saltillo, Coahuila. Control de plagas residencial y comercial: cucarachas, roedores, alacranes y chinches. Cotización sin costo, atención el mismo día.',
    'juarez':
        'Fumigaciones en Ciudad Juárez: control de plagas para casa, oficina y negocio. Cucarachas, ratas, chinches y arañas. Cotización sin costo y visita el mismo día.',
    'san-juan-del-rio':
        'Fumigaciones en San Juan del Río, Querétaro. Control de plagas en casa y negocio: cucarachas, roedores, alacranes y termitas. Cotización sin costo.',
    'queretaro':
        'Fumigaciones en Querétaro: control de plagas residencial y comercial. Cucarachas, ratas, chinches y termitas. Cotización sin costo y servicio el mismo día.',
    'san-miguel-de-allende':
        'Fumigaciones en San Miguel de Allende. Control de plagas para casa, hotel y restaurante: cucarachas, roedores, alacranes y termitas. Cotización sin costo.',
    'reynosa':
        'Fumigaciones en Reynosa, Tamaulipas. Control de plagas en casa y negocio: cucarachas, ratas, mosquitos y chinches. Cotización sin costo, atención el mismo día.',
    'tampico':
        'Fumigaciones en Tampico y la zona conurbada. Control de plagas: cucarachas, roedores, mosquitos y termitas. Cotización sin costo y servicio el mismo día.',
    'guadalajara':
        'Fumigaciones en Guadalajara y su zona metropolitana. Control de plagas para casa y negocio: cucarachas, ratas, chinches y hormigas. Cotización sin costo.',
    'matamoros':
        'Fumigaciones en Matamoros, Tamaulipas. Control de plagas residencial y comercial: cucarachas, roedores, mosquitos y chinches. Cotización sin costo.',
    'tijuana':
        'Fumigaciones en Tijuana, Baja California. Control de plagas en casa y negocio: cucarachas, ratas, arañas y chinches. Cotización sin costo y visita el mismo día.',
    'san-pedro-garza-garcia':
        'Fumigaciones en San Pedro Garza García, Nuevo León. Control de plagas residencial y comercial: cucarachas, alacranes, ratas y chinches. Cotización sin costo.',
    'mexicali':
        'Fumigaciones en Mexicali, Baja California. Control de plagas para casa y negocio: cucarachas, ratas, arañas y mosquitos. Cotización sin costo.',
    'puebla':
        'Fumigaciones en Puebla: control de plagas residencial y comercial. Cucarachas, roedores, chinches y hormigas. Cotización sin costo y servicio el mismo día.',
    'culiacan':
        'Fumigaciones en Culiacán, Sinaloa. Control de plagas en casa y negocio: cucarachas, ratas, mosquitos y alacranes. Cotización sin costo.',
    'aguascalientes':
        'Fumigaciones en Aguascalientes: control de plagas para casa, oficina y negocio. Cucarachas, roedores, chinches y arañas. Cotización sin costo.',
    'cdmx':
        'Fumigaciones en Ciudad de México. Control de plagas residencial y comercial: cucarachas, ratas, chinches y hormigas. Cotización sin costo.',
    'sanluis':
        'Fumigaciones en San Luis Potosí. Control de plagas en casa y negocio: cucarachas, roedores, alacranes y termitas. Cotización sin costo.',
    'torreon':
        'Fumigaciones en Torreón, Coahuila. Control de plagas residencial y comercial: cucarachas, ratas, alacranes y chinches. Cotización sin costo.',
    'leon':
        'Fumigaciones en León, Guanajuato. Control de plagas para casa y negocio: cucarachas, roedores, chinches y hormigas. Cotización sin costo.',
    'merida':
        'Fumigaciones en Mérida, Yucatán. Control de plagas: cucarachas, mosquitos, termitas y roedores. Cotización sin costo y servicio el mismo día.',
};

/**
 * Las 28 descriptions literales, indexadas por ruta canónica.
 * Las claves pasan por ruta() para que coincidan exactamente con la forma que
 * usan el canonical y el sitemap: con barra final.
 */
export const DESCRIPCIONES: Record<string, string> = {
    [ruta('/')]:
        'Big Cat, control de plagas y fumigación en México. Cobertura en Monterrey, Querétaro, Saltillo, Tampico, Hermosillo y 17 ciudades más. Cotización sin costo.',

    ...Object.fromEntries(
        Object.entries(SEDES).map(([slug, texto]) => [ruta(`/sedes/${slug}`), texto])
    ),

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
 * literal de arriba. Los 28 textos del cliente no pasan por acá: van tal cual
 * los escribió, aunque alguno se pase de largo.
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
