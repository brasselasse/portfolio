// Läser alla case från src/cases/*.md. Ett nytt case = en ny .md-fil.
export interface CaseData {
  title: string; // Namnet på kortet, t.ex. "Bloem"
  headline: string; // Rubriken på case-sidan
  summary: string; // En mening till kortet och ingressen
  type: string; // "eget projekt", "frilansuppdrag" eller "producerad på …"
  year: string;
  role: string;
  delivered: string;
  url?: string; // Länk till livesajten
  cover: string; // Bild i public/img, t.ex. "/img/bloem-omslag.webp"
  coverAlt: string;
  order: number; // Lägre tal visas först
  flagship?: boolean; // Visas som eget block på startsidan
  draft?: boolean; // true = syns inte på sajten
  stats?: { value: string; label: string }[];
  seoTitle?: string; // Titel i Google, utan " | Lars Dahlberg" (max ~45 tecken)
  seoDescription?: string; // Beskrivning i Google (max ~155 tecken)
  chart?: string; // Namn på datafil i src/data, t.ex. "aimonkey-search"
}

type Mod = { frontmatter: CaseData; Content: any; file: string };

const modules = import.meta.glob<Mod>('../cases/*.md', { eager: true });

export const cases = Object.values(modules)
  .map((m) => ({
    slug: m.file.split('/').pop()!.replace(/\.md$/, ''),
    data: m.frontmatter,
    Content: m.Content,
  }))
  .filter((c) => !c.data.draft)
  .sort((a, b) => a.data.order - b.data.order);
