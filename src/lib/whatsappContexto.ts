import { useLocation } from 'react-router-dom';
import { PESTS_LIST } from '../../constants';
import { buscarSede, Branch } from '../data/sedes';
import { MENSAJES, mensajeCiudad, whatsappUrl } from './contacto';

export interface ContextoWhatsapp {
    /** De qué tipo de página sale el mensaje. */
    tipo: 'sede' | 'servicio' | 'cobertura' | 'general';
    mensaje: string;
    url: string;
    /** Slug de la sede, o '' fuera de una página de sede. */
    city: string;
    sede?: Branch;
}

/**
 * El mensaje de WhatsApp que corresponde a una ruta:
 *   /sedes/{slug}/      → "Hola, vengo de la página de {Ciudad}. …" (el de
 *                          aliados termina distinto: ver MENSAJES)
 *   /servicios/{slug}/  → "Hola, vengo de la página de {Servicio}. …"
 *   /cobertura/         → mensaje de cobertura
 *   resto               → mensaje general
 */
export function contextoWhatsapp(pathname: string): ContextoWhatsapp {
    const [, seccion, slug] = decodeURI(pathname).split('/');

    if (seccion === 'sedes') {
        const sede = buscarSede(slug);
        if (sede) {
            const mensaje = mensajeCiudad(sede);
            return { tipo: 'sede', mensaje, url: whatsappUrl(mensaje), city: sede.id, sede };
        }
    }
    if (seccion === 'servicios') {
        const servicio = PESTS_LIST.find(p => p.slug === slug);
        if (servicio) {
            const mensaje = MENSAJES.servicio(servicio.name);
            return { tipo: 'servicio', mensaje, url: whatsappUrl(mensaje), city: '' };
        }
    }
    if (seccion === 'cobertura') {
        return { tipo: 'cobertura', mensaje: MENSAJES.cobertura, url: whatsappUrl(MENSAJES.cobertura), city: '' };
    }
    return { tipo: 'general', mensaje: MENSAJES.general, url: whatsappUrl(MENSAJES.general), city: '' };
}

export function useWhatsapp(): ContextoWhatsapp {
    return contextoWhatsapp(useLocation().pathname);
}
