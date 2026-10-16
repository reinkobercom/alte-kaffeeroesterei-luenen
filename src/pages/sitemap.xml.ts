import type { APIRoute } from 'astro';
import { site } from '../data/site';

const pages = [
  '/',
  '/ueber-uns',
  '/fruehstueck',
  '/cafe',
  '/gutscheine',
  '/kontakt-anfahrt',
  '/beerdigungen',
  '/fruehstueck-in-dortmund',
  '/fruehstueck-in-werne',
  '/impressum',
  '/datenschutz',
];

export const GET: APIRoute = () => {
  const urls = pages
    .map((p) => `  <url><loc>${site.url}${p === '/' ? '/' : p}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
