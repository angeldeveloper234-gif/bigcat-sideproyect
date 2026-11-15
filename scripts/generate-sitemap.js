import fs from 'fs';
import path from 'path';

/**
 * El sitemap usa EXACTAMENTE la misma función que el canonical de cada página
 * (src/lib/urls.ts). No es una copia: es el mismo archivo importado.
 *
 * Esto es lo que impide que el sitio se vuelva a fragmentar. Mientras las dos
 * puntas salgan de `canonical()`, el canonical de una página y su entrada en
 * el sitemap no pueden diferir — ni en la barra final, ni en la ñ de /reseñas.
 *
 * Además de sitemap.xml, este script:
 *   - escribe public/llms.txt (resumen del sitio para asistentes de IA), y
 *   - CORTA EL BUILD si la lista de rutas de react-snap (package.json →
 *     reactSnap.include) no coincide con las páginas reales. Una página que
 *     falta en esa lista no se prerenderiza: en producción devuelve 404.
 */
import { canonical, ruta } from '../src/lib/urls.ts';
// Ciudades y servicios salen de los mismos datos que las páginas: agregar uno
// en src/data lo agrega acá sin tocar este archivo.
import { BRANCHES, TIPOS, ciudadesDeTipo } from '../src/data/sedes.ts';
import { SERVICIOS } from '../src/data/servicios.ts';
import { TELEFONO, PCP } from '../src/lib/contacto.ts';

const raiz = process.cwd();

// constants.ts importa componentes de React y no se puede cargar desde Node:
// los artículos del blog se leen del texto del archivo.
function leerBlog() {
  const fuente = fs.readFileSync(path.join(raiz, 'constants.ts'), 'utf8');
  const blog = fuente.slice(fuente.indexOf('export const BLOG_POSTS'));
  const posts = [];
  const re = /slug: '([^']+)',[\s\S]*?title: "([^"]+)",[\s\S]*?published_at: "([^"]+)"/g;
  let m;
  while ((m = re.exec(blog))) posts.push({ slug: m[1], title: m[2], fecha: m[3].split('T')[0] });
  return posts;
}

function generar() {
  const today = new Date().toISOString().split('T')[0];
  const staticPages = ['', '/nosotros', '/faq', '/reseñas', '/blog', '/sedes', '/cobertura'];
  const serviceSlugs = Object.keys(SERVICIOS);
  const posts = leerBlog();
  if (posts.length === 0) throw new Error('No se pudo leer ningún artículo de BLOG_POSTS en constants.ts');

  // Sedes y ciudades con servicio primero (prioridad 0.9), aliados después (0.7).
  const prioritySlugs = BRANCHES.filter(c => c.tipo !== 'aliados').map(c => c.id);
  const otherSlugs = BRANCHES.filter(c => c.tipo === 'aliados').map(c => c.id);

  // ── Verificación contra react-snap ────────────────────────────────────────
  const rutas = [
    ...staticPages.map(p => p || '/'),
    ...serviceSlugs.map(s => `/servicios/${s}`),
    ...BRANCHES.map(c => `/sedes/${c.id}`),
    ...posts.map(p => `/blog/${p.slug}`),
  ].map(p => ruta(p));
  const pkg = JSON.parse(fs.readFileSync(path.join(raiz, 'package.json'), 'utf8'));
  const include = new Set(pkg.reactSnap.include.map(p => ruta(p)));
  const faltan = rutas.filter(r => !include.has(r));
  const sobran = [...include].filter(r => !rutas.includes(r));
  if (faltan.length || sobran.length) {
    throw new Error(
      'reactSnap.include (package.json) no coincide con las páginas del sitio.\n' +
        (faltan.length ? `  Faltan en include: ${faltan.map(decodeURI).join(', ')}\n` : '') +
        (sobran.length ? `  Sobran en include: ${sobran.map(decodeURI).join(', ')}\n` : '')
    );
  }

  const url = (loc, { lastmod, changefreq, priority }) => `
  <url>
    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  ${staticPages.map(page => url(canonical(page || '/'), { changefreq: 'monthly', priority: page === '' ? '1.0' : '0.8' })).join('').trim()}

  <!-- Services -->
  ${serviceSlugs.map(slug => url(canonical(`/servicios/${slug}`), { lastmod: today, changefreq: 'monthly', priority: '0.9' })).join('').trim()}

  <!-- Sedes y ciudades con servicio -->
  ${prioritySlugs.map(slug => url(canonical(`/sedes/${slug}`), { lastmod: today, changefreq: 'weekly', priority: '0.9' })).join('').trim()}

  <!-- Ciudades de la red de aliados -->
  ${otherSlugs.map(slug => url(canonical(`/sedes/${slug}`), { lastmod: today, changefreq: 'monthly', priority: '0.7' })).join('').trim()}

  <!-- Blog Posts: lastmod es la fecha de publicación, no la del build -->
  ${posts.map(p => url(canonical(`/blog/${p.slug}`), { lastmod: p.fecha, changefreq: 'monthly', priority: '0.7' })).join('').trim()}
</urlset>`;

  fs.writeFileSync(path.join(raiz, 'public', 'sitemap.xml'), sitemap);
  console.log(`✅ sitemap.xml generado (${rutas.length} URLs, coincide con reactSnap.include)`);

  // ── llms.txt ──────────────────────────────────────────────────────────────
  // Resumen en texto plano para asistentes de IA. Sale de los mismos datos que
  // las páginas, así que no puede decir algo distinto de lo que dice el sitio.
  const lista = tipo => ciudadesDeTipo(tipo).map(c => `- [${c.name}](${canonical(`/sedes/${c.id}`)})`).join('\n');
  const [sede, servicio, aliados] = TIPOS;
  const llms = `# Big Cat Control de Plagas

> Empresa de fumigación y control de plagas para casas, departamentos, negocios y restaurantes en el norte y centro de México. Forma parte del grupo de ${PCP.nombre}, que atiende a empresas grandes e industrias.

Contacto: teléfono y WhatsApp ${TELEFONO.display} (${TELEFONO.e164}). La cotización se pide por WhatsApp y no tiene costo.
Big Cat trabaja en tres niveles de ciudades; es importante no confundirlos.

## ${sede.titulo}
${sede.descripcion}
${lista('sede')}

## ${servicio.titulo}
${servicio.descripcion}
${lista('servicio')}

## ${aliados.titulo}
En estas ciudades Big Cat no tiene oficina ni técnicos propios: conecta al cliente con un especialista de su red de aliados.
${lista('aliados')}

## Servicios
${serviceSlugs.map(s => `- [${SERVICIOS[s].h1}](${canonical(`/servicios/${s}`)}): ${SERVICIOS[s].respuesta}`).join('\n')}

## Guías
${posts.map(p => `- [${p.title}](${canonical(`/blog/${p.slug}`)})`).join('\n')}

## Más
- [Cobertura: dónde damos servicio](${canonical('/cobertura')})
- [Preguntas frecuentes](${canonical('/faq')})
- Empresas grandes e industrias: [${PCP.nombre}](${PCP.url}), teléfono ${PCP.telefono}
`;
  fs.writeFileSync(path.join(raiz, 'public', 'llms.txt'), llms);
  console.log('✅ llms.txt generado');
}

try {
  generar();
} catch (err) {
  console.error('❌ Error generando el sitemap:', err.message);
  process.exit(1);
}
