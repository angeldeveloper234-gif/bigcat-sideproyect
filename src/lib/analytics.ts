/**
 * Google Analytics 4 — helper de eventos.
 *
 * Mismo patrón que mosquitomex (rama feat/ga4-tracking): un solo `trackEvent`
 * y un listener delegado (components/AnalyticsListener.tsx) que mide los
 * clics de contacto de todo el sitio sin instrumentar botón por botón.
 *
 * El gtag y el ID (G-05BP9YM1KM) siguen cargándose en index.html como antes;
 * este archivo no los toca, solo usa `window.gtag` si existe.
 *
 * Eventos:
 *   whatsapp_click  clic en cualquier enlace a wa.me / api.whatsapp.com
 *   phone_click     clic en cualquier enlace tel:
 *   generate_lead   envío correcto de un formulario de contacto
 *
 * Parámetros comunes: brand ("bigcat"), city (slug de la sede o vacío) y
 * page_path. Los de clic agregan link_url.
 *
 * DEPURACIÓN: en localhost, o con ?ga_debug=1 en la URL, los eventos salen
 * con debug_mode y aparecen en GA4 > Administrar > DebugView.
 */

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

const BRAND = 'bigcat';
const SEDE_RUTA = /^\/sedes\/([^/?#]+)/;

export type AnalyticsEvent = 'whatsapp_click' | 'phone_click' | 'generate_lead';

/** Slug de la sede de la página actual, o '' fuera de /sedes/{slug}/. */
export function sedeActual(pathname: string = window.location.pathname): string {
    return pathname.match(SEDE_RUTA)?.[1] ?? '';
}

function modoDepuracion(): boolean {
    const { hostname, search } = window.location;
    return hostname === 'localhost' || hostname === '127.0.0.1' || /[?&]ga_debug=1\b/.test(search);
}

/**
 * Envía un evento a GA4. Nunca lanza: si gtag no cargó (bloqueador de
 * anuncios, prerender) simplemente no hace nada.
 */
export function trackEvent(name: AnalyticsEvent, params: Record<string, string> = {}) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    // react-snap ejecuta la página para prerenderizarla: no es una visita.
    if (navigator.userAgent === 'ReactSnap') return;
    try {
        window.gtag('event', name, {
            brand: BRAND,
            city: sedeActual(),
            page_path: window.location.pathname,
            ...params,
            ...(modoDepuracion() ? { debug_mode: true } : {}),
        });
    } catch {
        // La analítica nunca debe romper la página.
    }
}
