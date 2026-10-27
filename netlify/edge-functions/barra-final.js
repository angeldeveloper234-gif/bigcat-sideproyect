/**
 * UNA SOLA URL POR PÁGINA: SIEMPRE CON BARRA FINAL
 *
 * Netlify servía /sedes/monterrey y /sedes/monterrey/ con 200 los dos, y
 * Google indexaba las dos. Esta función manda la forma sin barra a la forma
 * con barra (301), que es la del canonical y la del sitemap.
 *
 * Solo redirige cuando la página existe: primero deja que Netlify resuelva la
 * URL tal cual (`context.next()`). Si responde 200, redirige a la versión con
 * barra; si responde otra cosa (un 301 de netlify.toml, un 404), devuelve esa
 * respuesta sin tocarla, así no hay dos saltos seguidos.
 *
 * Los archivos (/sitemap.xml, /assets/x.js, /logo/x.png) no se tocan.
 */
export default async (request, context) => {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname.endsWith('/') || /\.[a-z0-9]+$/i.test(pathname)) return;
    if (request.method !== 'GET' && request.method !== 'HEAD') return;

    const respuesta = await context.next();
    if (respuesta.status !== 200) return respuesta;

    url.pathname = `${pathname}/`;
    return Response.redirect(url.toString(), 301);
};

export const config = {
    path: '/*',
    excludedPath: ['/assets/*', '/images/*', '/logo/*', '/services/*', '/articulos/*', '/testimonios/*'],
};
