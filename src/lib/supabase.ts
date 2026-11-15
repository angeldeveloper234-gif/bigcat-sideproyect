import type { SupabaseClient } from '@supabase/supabase-js';

/**
 * CLIENTE DE SUPABASE, CARGADO SOLO CUANDO SE USA
 *
 * El sitio usa Supabase para una sola cosa: registrar en `contact_attempts`
 * qué sede eligió alguien en el selector de ciudades. Importar la librería de
 * forma directa la metía en el paquete principal y se descargaba en todas las
 * páginas, la use el visitante o no.
 *
 * `supabase.from(tabla).insert(filas)` se usa igual que antes; la librería se
 * descarga recién en el primer insert.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let cliente: Promise<SupabaseClient> | null = null;

function obtenerCliente(): Promise<SupabaseClient> {
    if (!cliente) {
        if (!supabaseUrl || !supabaseAnonKey) {
            console.warn('Supabase URL or Key missing in environment variables. Application may not function correctly.');
        }
        cliente = import('@supabase/supabase-js').then(({ createClient }) =>
            // Valores de respaldo para que la falta de variables no rompa la página.
            createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder')
        );
    }
    return cliente;
}

export const supabase = {
    from(tabla: string) {
        return {
            async insert(filas: Record<string, unknown>[]) {
                const db = await obtenerCliente();
                return db.from(tabla).insert(filas);
            },
        };
    },
};
