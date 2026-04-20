/**
 * ARCHIVO DE RESEÑAS DE GOOGLE (Manual)
 * -----------------------------------------------------
 * INSTRUCCIONES:
 * Para agregar una nueva reseña, simplemente copia y pega el bloque entre llaves {}
 * y reemplaza los datos. 
 * 
 * CAMPOS:
 * - id: Un número o texto único.
 * - author_name: Nombre del cliente.
 * - rating: Número de estrellas (1 al 5).
 * - text: El comentario del cliente.
 * - time: Texto de fecha (ej: "hace 1 semana").
 * - profile_photo_url: Link a la foto.
 * 
 * NOTA: Después de guardar este archivo, debes hacer DEPLOY para que se vean los cambios.
 */

export interface GoogleReview {
    id: string;
    author_name: string;
    author_url: string;
    rating: number;
    text: string;
    profile_photo_url: string;
    time: string;
}

export const GOOGLE_REVIEWS_MOCK: GoogleReview[] = [
    {
        id: "jess-dector",
        author_name: "Jess Dector",
        author_url: "#",
        rating: 5,
        text: "La atención es muy profesional and puntual, en ningún momento me hicieron esperar y siempre se mantuvieron comunicados. En mi caso solicité aplicar la garantía y respondieron rápido y de manera eficiente, incluso vino alguien especialmente a revisar y orientar para buscar mayor efectividad. Estoy totalmente satisfecho, lo recomiendo y los contrataría de nuevo.",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXbJsHQcVV-GQ894pSfjDETlLG70eygiJO9UWAVxN9iSjJebftjBQ=w32-h32-p-rp-mo-ba4-br100",
        time: "Local Guide · 182 opiniones · Hace 5 años"
    },
    {
        id: "martha-medina",
        author_name: "Martha Alicia Medina McCormick",
        author_url: "#",
        rating: 5,
        text: "Muy profesionales y razonables, excelente servicio al cliente.",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocKSLQrcFUMHbXoaNQyu1Vx4zvufMuSqHsCkVpa6AYB4RxvPYQ=w32-h32-p-rp-mo-br100",
        time: "10 opiniones · Hace un año"
    },
    {
        id: "jenny-luna",
        author_name: "Jenny Luna",
        author_url: "#",
        rating: 5,
        text: "Súper profesional, me resolvieron mi problema, me gustó mucho como me explicaron los procesos, me quitaron toda mi plaga con garantía.",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjX_71YYWnUbT2-LJle8gQ4SWuV6JkUPkQhNE0SLJeZToG6_RtQ=w32-h32-p-rp-mo-br100",
        time: "8 opiniones · Hace un año"
    },
    {
        id: "juanpablo-salcedo",
        author_name: "JuanPablo Salcedo",
        author_url: "#",
        rating: 5,
        text: "Es un buen servicio, profesional.",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIyS0lKe3xp7Fz_-rPMghN_4rf-F6hoKoRqFZ1X5Zg0_E6_dg=w32-h32-p-rp-mo-br100",
        time: "1 opinión · Hace 5 años"
    },
    {
        id: "peter-neri",
        author_name: "Peter Neri",
        author_url: "#",
        rating: 5,
        text: "Muy bien servicio, rápido, eficaz y buen precio.",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVPTe9lZuk7YMHSIDz_FLzWM1nimFycgu5EuDN38XylOlxjs7_k=w32-h32-p-rp-mo-ba4-br100",
        time: "Local Guide · 74 opiniones · Hace 3 años"
    },
    {
        id: "oscar-ruiz",
        author_name: "Oscar Ruiz Zea",
        author_url: "#",
        rating: 5,
        text: "Excelente servicio y atención a los detalles, lo recomiendo.",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXd-9Uwm_E4SoFpl2--usZTmOhnDYWvBQ9opjo9gxSz6pWHg4Ah=w32-h32-p-rp-mo-ba2-br100",
        time: "Local Guide · 21 opiniones · Hace 5 años"
    },
    {
        id: "fran-alvarez",
        author_name: "Fran Álvarez Varela",
        author_url: "#",
        rating: 5,
        text: "Excelente servicio y atención rápida. Los recomiendo ampliamente.",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXq2KV-V6S6eQ2v4eeOlgXplXwtcgilOgUqWBVCghh6UwjOs2aX3w=w32-h32-p-rp-mo-ba2-br100",
        time: "Local Guide · 30 opiniones · Hace 5 años"
    }
];
