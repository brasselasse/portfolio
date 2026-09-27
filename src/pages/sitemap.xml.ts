// sitemap.xml – listar alla sidor. Ligger på <base>/sitemap.xml.
import type { APIRoute } from 'astro';
import { cases } from '../lib/cases';
import { url } from '../lib/url';

export const GET: APIRoute = ({ site }) => {
  const paths = ['/', '/cv/', ...cases.map((c) => `/case/${c.slug}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${new URL(url(p), site).href}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
