// Läser alla blogginlägg från src/blog/*.md. Ett nytt inlägg = en ny .md-fil.
export interface PostData {
  title: string; // Rubriken på sidan
  seoTitle?: string; // Titel i Google, utan " | Lars Dahlberg" (max ~50 tecken)
  description: string; // Beskrivning i Google och på listsidan (max ~155 tecken)
  lead: string; // Ingress under rubriken
  date: string; // Publiceringsdag, ÅÅÅÅ-MM-DD
  updated?: string; // Senast ändrad, ÅÅÅÅ-MM-DD
  tags?: string[];
  cover?: string; // Bild i public/img
  coverAlt?: string;
  case?: string; // Slug för ett relaterat case
  draft?: boolean; // true = syns inte på sajten
}

type Mod = { frontmatter: PostData; Content: any; file: string; getHeadings: () => { depth: number; text: string }[] };

const modules = import.meta.glob<Mod>('../blog/*.md', { eager: true });

export const posts = Object.values(modules)
  .map((m) => ({
    slug: m.file.split('/').pop()!.replace(/\.md$/, ''),
    data: m.frontmatter,
    Content: m.Content,
  }))
  .filter((p) => !p.data.draft)
  .sort((a, b) => b.data.date.localeCompare(a.data.date));

const months = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];
export const formatDate = (d: string) => {
  const [y, m, day] = d.split('-').map(Number);
  return `${day} ${months[m - 1]} ${y}`;
};

// Ungefärlig lästid utifrån råtexten (cirka 200 ord per minut).
const raw = import.meta.glob<string>('../blog/*.md', { eager: true, query: '?raw', import: 'default' });
export const readingTime = (slug: string) => {
  const text = (raw[`../blog/${slug}.md`] ?? '').replace(/^---[\s\S]*?---/, '').replace(/<[^>]+>/g, ' ');
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));
};
