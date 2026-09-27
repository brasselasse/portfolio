// Innehållet i det digitala CV:t (/cv/). Ändra här, inte i sidan.
// Text inom [hakparentes] visas som gul platshållare tills den är ifylld.

export const CV = {
  intro:
    'Digital art director som tar webbprojekt hela vägen – från behovsanalys och grafisk identitet till färdigbyggd, sökbar sajt och uppföljning. Van att leda projekt, formge i Figma, bygga i Webflow och kod, och mäta resultatet i Google.',

  experience: [
    {
      period: '2026 –',
      role: 'Grundare',
      org: 'AImonkey',
      text: 'Idé, varumärke, design, bygge, CMS, SEO, innehåll och drift av AImonkey.se – en svensk guide till AI med promptgenerator, promptbibliotek och mallar.',
      cases: ['aimonkey'],
    },
    {
      period: '[år] –',
      role: '[titel]',
      org: 'Viaplay Group Radio',
      text: '[Kort om rollen och ansvaret.] Bland annat projektledning, design, bygge och SEO för annonssajten annonsera.viaplayradio.se och Radiopedia.',
      cases: ['viaplay-group-radio'],
    },
    {
      period: '2021 –',
      role: 'Frilansande art director och webbutvecklare',
      org: 'Egen verksamhet',
      text: 'Sajter i Webflow för bland andra Guldörat, Matchedin och Bloem – från struktur och design i Figma till bygge, e-handel, CMS och SEO.',
      cases: ['guldorat', 'matchedin', 'bloem'],
    },
    {
      period: '[år – år]',
      role: '[titel]',
      org: '[arbetsgivare]',
      text: '[Kort om rollen.]',
      cases: [],
    },
  ],

  skills: [
    { area: 'Strategi', items: ['Behovsanalys', 'Målgrupper och sökintention', 'Informationsarkitektur', 'Projektledning'] },
    { area: 'Design', items: ['Grafisk identitet', 'Webbdesign och UX', 'Designsystem', 'Figma'] },
    { area: 'Bygge', items: ['Webflow och CMS', 'HTML, CSS och JavaScript', 'Astro', 'Integrationer: Stripe, Airtable'] },
    { area: 'SEO och analys', items: ['Teknisk SEO', 'Innehåll och sökord', 'Google Search Console', 'Strukturerad data'] },
  ],

  education: [
    { period: '[år – år]', title: '[utbildning]', org: '[skola]' },
  ],

  languages: [
    { lang: 'Svenska', level: 'modersmål' },
    { lang: 'Engelska', level: '[nivå]' },
  ],
};
