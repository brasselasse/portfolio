// Bygger en intern adress som fungerar både på github.io/portfolio och på egen domän.
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const [p, hash] = path.split('#');
  const clean = p.startsWith('/') ? p : '/' + p;
  const withSlash = clean === '/' || clean.endsWith('/') || /\.[a-z0-9]+$/i.test(clean) ? clean : clean + '/';
  return base + withSlash + (hash !== undefined ? '#' + hash : '');
}
