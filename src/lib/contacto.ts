/**
 * TELÉFONO, WHATSAPP Y MENSAJES PRECARGADOS — UN SOLO LUGAR
 * ════════════════════════════════════════════════════════════════════════════
 *
 * Todo el sitio arma sus enlaces de WhatsApp y de teléfono desde acá. Si el
 * número cambia, se cambia en `TELEFONO` y en ningún otro archivo.
 *
 * LOS MENSAJES NO SE TOCAN
 *
 * El bot de WhatsApp y el CRM leen la primera frase del mensaje para saber de
 * qué página viene el cliente ("vengo de la página de Monterrey"). Cambiar una
 * coma rompe esa lectura. Si hace falta otro mensaje, se agrega uno nuevo; los
 * de abajo se dejan como están.
 *
 * Este archivo no importa nada de React a propósito: también lo usan scripts
 * de Node (sitemap) y tiene que poder cargarse sin el navegador.
 */

export const TELEFONO = {
    /** Como se muestra en pantalla. */
    display: '81 1475 3426',
    /** E.164 — para `tel:` y para el `telephone` del JSON-LD. */
    e164: '+528114753426',
    /** El número que va en wa.me (sin + ni espacios). */
    whatsapp: '528114753426',
} as const;

/** La marca industrial del grupo: atiende empresas grandes en todo México. */
export const PCP = {
    nombre: 'PCP Internacional',
    url: 'https://pcpinternacional.com/',
    telefono: '81 1115 0958',
    telefonoE164: '+528111150958',
} as const;

export const TEL_HREF = `tel:${TELEFONO.e164}`;
export const PCP_TEL_HREF = `tel:${PCP.telefonoE164}`;

/** El mensaje de la página de una ciudad según su nivel. */
export function mensajeCiudad(ciudad: { shortName: string; tipo: string }): string {
    return ciudad.tipo === 'aliados' ? MENSAJES.aliados(ciudad.shortName) : MENSAJES.sede(ciudad.shortName);
}

/**
 * Opciones del mini formulario que se muestra antes de abrir WhatsApp en una
 * página de ciudad. `id` va a GA4 como `tipo_cliente`; `texto` va al mensaje.
 * "(empresa)" es la marca que usa el bot para derivar el contacto a PCP.
 */
export const TIPOS_CLIENTE = [
    { id: 'casa', label: 'Casa', texto: 'para mi casa' },
    { id: 'negocio', label: 'Negocio', texto: 'para mi negocio' },
    { id: 'restaurante', label: 'Restaurante', texto: 'para mi restaurante' },
    { id: 'empresa', label: 'Empresa / industria', texto: 'para mi empresa o industria (empresa)' },
] as const;

export const PLAGAS_PANEL = ['Cucarachas', 'Ratas o ratones', 'Alacranes', 'Chinches', 'Termitas', 'Otra / no sé'] as const;

/**
 * Mensaje de ciudad con las respuestas del mini formulario:
 *   "Hola, vengo de la página de Querétaro. Quiero cotizar un servicio de
 *    fumigación para mi restaurante. Plaga: cucarachas."
 * Sin respuestas, es el mensaje básico de la ciudad.
 */
export function mensajeCiudadDetallado(
    ciudad: { shortName: string; tipo: string },
    tipoCliente?: string,
    plaga?: string
): string {
    const tipo = TIPOS_CLIENTE.find(t => t.id === tipoCliente);
    if (!tipo && !plaga) return mensajeCiudad(ciudad);
    const pedido = ciudad.tipo === 'aliados' ? 'Necesito un servicio de fumigación' : 'Quiero cotizar un servicio de fumigación';
    let mensaje = `Hola, vengo de la página de ${ciudad.shortName}. ${pedido}${tipo ? ` ${tipo.texto}` : ''}.`;
    if (plaga) mensaje += ` Plaga: ${plaga.toLowerCase()}.`;
    return mensaje;
}

/** Enlace a WhatsApp con el mensaje codificado. Sin mensaje, abre el chat vacío. */
export function whatsappUrl(mensaje?: string): string {
    const base = `https://wa.me/${TELEFONO.whatsapp}`;
    return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export const MENSAJES = {
    /** Sedes y ciudades con servicio. */
    sede: (ciudad: string) =>
        `Hola, vengo de la página de ${ciudad}. Quiero cotizar un servicio de control de plagas.`,
    /** Ciudades de la red de aliados. */
    aliados: (ciudad: string) =>
        `Hola, vengo de la página de ${ciudad}. Necesito un servicio de control de plagas.`,
    servicio: (servicio: string) =>
        `Hola, vengo de la página de ${servicio}. Quiero cotizar.`,
    general: 'Hola, vengo de la página web de Big Cat. Quiero cotizar.',
    cobertura: 'Hola, vengo de la página de cobertura. Quiero saber si dan servicio en mi ciudad.',
} as const;
