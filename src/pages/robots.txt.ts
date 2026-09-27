// robots.txt – pekar ut sitemapen. Indexeringen styrs av SITE.indexable (noindex i sidhuvudet),
// så att Google kan läsa noindex-taggen i stället för att sidorna blockeras helt.
import type { APIRoute } from 'astro';
import { url } from '../lib/url';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(url('/sitemap.xml'), site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
