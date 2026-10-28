import React, { useEffect } from 'react';
import { trackEvent } from '../src/lib/analytics';

const WHATSAPP = /wa\.me|api\.whatsapp\.com/i;

/**
 * Un único listener delegado en `document` que mide los clics de contacto de
 * todo el sitio (botón flotante, header, tarjetas, páginas de sede…):
 *  - whatsapp_click → enlaces a wa.me / api.whatsapp.com
 *  - phone_click    → enlaces tel:
 *
 * La ciudad sale de la URL (/sedes/{slug}/). Un enlace puede indicar otra con
 * `data-city`: lo usa el selector de sedes, donde la ciudad la elige el
 * usuario y no la página. El mini formulario de WhatsApp agrega
 * `data-tipo-cliente` y `data-plaga`, que salen como tipo_cliente y plaga.
 *
 * Escucha en fase de captura para registrar el clic aunque algún componente
 * detenga la propagación. `auxclick` cubre el clic con la rueda (nueva pestaña).
 */
const AnalyticsListener: React.FC = () => {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (e.type === 'auxclick' && e.button !== 1) return;
            const link = (e.target as Element | null)?.closest?.('a[href]');
            if (!link) return;
            // Un enlace con data-panel solo abre el mini formulario: el clic
            // que cuenta es el del botón final del panel.
            if (e.type === 'click' && link.hasAttribute('data-panel')) return;
            const href = link.getAttribute('href') ?? '';
            const city = link.getAttribute('data-city');
            const params: Record<string, string> = { link_url: href };
            if (city !== null) params.city = city;
            if (link.hasAttribute('data-tipo-cliente')) {
                params.tipo_cliente = link.getAttribute('data-tipo-cliente') ?? '';
                params.plaga = link.getAttribute('data-plaga') ?? '';
            }

            if (WHATSAPP.test(href)) trackEvent('whatsapp_click', params);
            else if (href.toLowerCase().startsWith('tel:')) trackEvent('phone_click', params);
        };

        document.addEventListener('click', onClick, true);
        document.addEventListener('auxclick', onClick, true);
        return () => {
            document.removeEventListener('click', onClick, true);
            document.removeEventListener('auxclick', onClick, true);
        };
    }, []);

    return null;
};

export default AnalyticsListener;
