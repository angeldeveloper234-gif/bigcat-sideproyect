import fs from 'fs';
import path from 'path';

/**
 * El sitemap usa EXACTAMENTE la misma función que el canonical de cada página
 * (src/lib/urls.ts). No es una copia: es el mismo archivo importado.
 *
 * Esto es lo que impide que el sitio se vuelva a fragmentar. Mientras las dos
 * puntas salgan de `canonical()`, el canonical de una página y su entrada en
 * el sitemap no pueden diferir — ni en la barra final, ni en la ñ de /reseñas.
 */
import { canonical } from '../src/lib/urls.ts';
// Las ciudades salen de los mismos datos que las páginas: agregar una ciudad
// en src/data/sedes.ts la agrega acá sin tocar este archivo.
import { BRANCHES } from '../src/data/sedes.ts';

async function generateSitemap() {
  try {
    const today = new Date().toISOString().split('T')[0];

    // 1. Static Pages
    const staticPages = [
      '',
      '/nosotros',
      '/faq',
      '/reseñas',
      '/blog',
      '/sedes',
      '/cobertura'
    ];

    // 2. Services (Slugs from constants.ts)
    const serviceSlugs = [
      'control-de-plagas-comercial',
      'eliminacion-de-cucarachas',
      'control-de-hormigas',
      'control-de-termitas',
      'control-de-chinches',
      'control-de-roedores',
      'control-de-pulgas',
      'control-de-avispas',
      'control-de-garrapatas',
      'control-de-mosquitos',
      'control-de-alacranes',
      'control-de-aranas',
      'control-de-aves-y-palomas'
    ];

    // 3. Ciudades: sedes y ciudades con servicio primero (prioridad 0.9),
    //    red de aliados después (0.7).
    const prioritySlugs = BRANCHES.filter(c => c.tipo !== 'aliados').map(c => c.id);
    const otherSlugs = BRANCHES.filter(c => c.tipo === 'aliados').map(c => c.id);

    // 4. Blog Posts (Slugs from constants.ts BLOG_POSTS)
    const blogSlugs = [
      'control-plagas-invierno',
      'hormigas-invadiendo-hogar',
      'otono-cucarachas-casas',
      'insectos-comunes-mexico',
      'control-de-plagas-monterrey-calor',
      'alacranes-norte-mexico-prevencion',
      'como-elegir-empresa-control-de-plagas',
      'control-de-plagas-restaurantes-cofepris',
      'chinches-de-cama-deteccion-eliminacion',
      'mosquitos-dengue-zonas-calidas',
      'termitas-senales-riesgo-hogar',
      'cuanto-cuesta-fumigacion-mexico-2026'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  ${staticPages.map(page => `
  <url>
    <loc>${canonical(page || '/')}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('').trim()}

  <!-- Services -->
  ${serviceSlugs.map(slug => `
  <url>
    <loc>${canonical(`/servicios/${slug}`)}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('').trim()}

  <!-- Sedes y ciudades con servicio -->
  ${prioritySlugs.map(slug => `
  <url>
    <loc>${canonical(`/sedes/${slug}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('').trim()}

  <!-- Ciudades de la red de aliados -->
  ${otherSlugs.map(slug => `
  <url>
    <loc>${canonical(`/sedes/${slug}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('').trim()}

  <!-- Blog Posts -->
  ${blogSlugs.map(slug => `
  <url>
    <loc>${canonical(`/blog/${slug}`)}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('').trim()}
</urlset>`;

    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
    console.log('✅ sitemap.xml generado con éxito en /public');
  } catch (err) {
    console.error('❌ Error generando el sitemap:', err);
  }
}

generateSitemap();
