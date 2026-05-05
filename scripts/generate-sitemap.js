import fs from 'fs';
import path from 'path';

const siteUrl = 'https://bigcat.mx';

async function generateSitemap() {
  try {
    // 1. Static Pages
    const staticPages = [
      '',
      '/nosotros',
      '/faq',
      '/reseñas',
      '/blog'
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

    // 3. Locations (Slugs from constants.ts BRANCHES)
    const locationSlugs = [
      'guadalajara', 'leon', 'queretaro', 'cdmx', 'monterrey', 
      'puebla', 'tijuana', 'merida', 'sanluis', 'aguascalientes', 
      'hermosillo', 'mexicali', 'culiacan', 'juarez'
    ];

    // 4. Blog Posts (Slugs from constants.ts BLOG_POSTS)
    const blogSlugs = [
      'control-plagas-invierno',
      'hormigas-invadiendo-hogar',
      'otono-cucarachas-casas',
      'insectos-comunes-mexico'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  ${staticPages.map(page => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('').trim()}

  <!-- Services -->
  ${serviceSlugs.map(slug => `
  <url>
    <loc>${siteUrl}/servicios/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('').trim()}

  <!-- Sedes -->
  ${locationSlugs.map(slug => `
  <url>
    <loc>${siteUrl}/sedes/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('').trim()}

  <!-- Blog Posts -->
  ${blogSlugs.map(slug => `
  <url>
    <loc>${siteUrl}/blog/${slug}</loc>
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
