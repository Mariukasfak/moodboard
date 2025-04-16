import fs from 'fs';
import path from 'path';

const generateSitemap = () => {
  const baseUrl = 'https://transportuok.lt';
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Pagrindinis puslapis -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Paslaugų puslapiai -->
  <url>
    <loc>${baseUrl}/paslaugos/buitines-technikos-isvezimas</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/paslaugos/elektronikos-atlieku-isvezimas</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/paslaugos/baldu-isvezimas</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/paslaugos/metalo-lauzo-isvezimas</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Naujienos ir straipsniai -->
  <url>
    <loc>${baseUrl}/naujienos</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/naujienos/kaip-teisingai-utilizuoti-saldytuva-kaunieciai</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/naujienos/kodel-svarbu-tinkamai-ismesti-elektronikos-atliekas</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/naujienos/kaip-teisingai-utilizuoti-buitine-technika-kaune</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/naujienos/5-dalykai-pries-ismetant-skalbimo-masina</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/naujienos/elektronikos-atlieku-perdirbimo-procesas</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/naujienos/kaip-lengvai-ir-atsakingai-isvezti-senus-baldus-kaune</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Kiti puslapiai -->
  <url>
    <loc>${baseUrl}/apie-mus</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/kontaktai</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();