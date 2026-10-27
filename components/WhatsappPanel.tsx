import React, { useEffect, useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Branch } from '../src/data/sedes';
import { TIPOS_CLIENTE, PLAGAS_PANEL, mensajeCiudadDetallado, whatsappUrl } from '../src/lib/contacto';

/**
 * MINI FORMULARIO ANTES DE ABRIR WHATSAPP (páginas de ciudad)
 *
 * Dos preguntas opcionales con botones —para dónde es el servicio y qué
 * plaga— que se agregan al mensaje precargado. Si el usuario no elige nada,
 * WhatsApp se abre con el mensaje básico de la ciudad.
 *
 * Cómo se usa: un enlace de WhatsApp de una página de ciudad lleva
 * `data-panel` y en su onClick llama a `abrirPanelWhatsapp(e, ciudad)`. El
 * enlace conserva su href real (funciona sin JS y con clic central); con JS,
 * el clic abre este panel. El clic que se mide como whatsapp_click es el del
 * botón final del panel, con `tipo_cliente` y `plaga`.
 */

const EVENTO = 'bigcat:whatsapp-panel';

export function abrirPanelWhatsapp(e: React.MouseEvent, ciudad: Branch) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    window.dispatchEvent(new CustomEvent<Branch>(EVENTO, { detail: ciudad }));
}

const Opcion: React.FC<{ activa: boolean; onClick: () => void; children: React.ReactNode }> = ({ activa, onClick, children }) => (
    <button
        type="button"
        onClick={onClick}
        aria-pressed={activa}
        className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all ${activa
            ? 'bg-brand-red text-white border-brand-red'
            : 'bg-white text-brand-dark border-gray-200 hover:border-brand-red/40'
            }`}
    >
        {children}
    </button>
);

const WhatsappPanel: React.FC = () => {
    const [ciudad, setCiudad] = useState<Branch | null>(null);
    const [tipoCliente, setTipoCliente] = useState('');
    const [plaga, setPlaga] = useState('');

    useEffect(() => {
        const abrir = (e: Event) => {
            setCiudad((e as CustomEvent<Branch>).detail);
            setTipoCliente('');
            setPlaga('');
        };
        window.addEventListener(EVENTO, abrir);
        return () => window.removeEventListener(EVENTO, abrir);
    }, []);

    if (!ciudad) return null;

    const cerrar = () => setCiudad(null);
    const mensaje = mensajeCiudadDetallado(ciudad, tipoCliente || undefined, plaga || undefined);

    return (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Cotizar por WhatsApp">
            <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm" onClick={cerrar} />
            <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl p-6 sm:p-8">
                <button onClick={cerrar} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-dark rounded-full" aria-label="Cerrar">
                    <X size={22} />
                </button>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red mb-2">{ciudad.shortName}</p>
                <h3 className="text-xl font-semibold text-brand-dark mb-1">Cuéntanos un poco (opcional)</h3>
                <p className="text-sm text-gray-500 mb-6">Así te respondemos más rápido. Puedes saltarlo.</p>

                <p className="text-sm font-medium text-brand-dark mb-3">¿Para dónde es el servicio?</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {TIPOS_CLIENTE.map(t => (
                        <Opcion key={t.id} activa={tipoCliente === t.id} onClick={() => setTipoCliente(tipoCliente === t.id ? '' : t.id)}>
                            {t.label}
                        </Opcion>
                    ))}
                </div>

                <p className="text-sm font-medium text-brand-dark mb-3">¿Qué plaga?</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {PLAGAS_PANEL.map(p => (
                        <Opcion key={p} activa={plaga === p} onClick={() => setPlaga(plaga === p ? '' : p)}>
                            {p}
                        </Opcion>
                    ))}
                </div>

                <a
                    href={whatsappUrl(mensaje)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-city={ciudad.id}
                    data-tipo-cliente={tipoCliente}
                    data-plaga={plaga}
                    onClick={() => setTimeout(cerrar, 0)}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl font-semibold transition-all"
                >
                    <MessageCircle size={20} /> Abrir WhatsApp
                </a>
            </div>
        </div>
    );
};

export default WhatsappPanel;
