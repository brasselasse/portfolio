import { defineConfig } from 'astro/config';

// När larsdahlberg.nu pekar hit: sätt CUSTOM_DOMAIN till true och lägg filen
// public/CNAME med innehållet "larsdahlberg.nu". Då byggs sajten för roten "/".
// Fram till dess publiceras den på brasselasse.github.io/portfolio.
const CUSTOM_DOMAIN = false;

const site = CUSTOM_DOMAIN ? 'https://larsdahlberg.nu' : 'https://brasselasse.github.io';
const base = CUSTOM_DOMAIN ? '/' : '/portfolio';

// Lägger till base-sökvägen på bilder och interna länkar i case-texterna,
// så att "/img/x.webp" och "/case/bloem/" fungerar oavsett var sajten ligger.
function rehypeBasePaths() {
  const prefix = base === '/' ? '' : base;
  const fix = (v) => (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') ? prefix + v : v);
  const walk = (node) => {
    if (node.type === 'element') {
      if (node.tagName === 'img' && node.properties) node.properties.src = fix(node.properties.src);
      if (node.tagName === 'a' && node.properties) node.properties.href = fix(node.properties.href);
    }
    (node.children || []).forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  markdown: { rehypePlugins: [rehypeBasePaths] },
});
