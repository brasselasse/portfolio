// Innehållet i det digitala CV:t (/cv/). Ändra här, inte i sidan.
// Text inom [hakparentes] visas som gul platshållare tills den är ifylld.

export const CV = {
  intro:
    'Produktägare och designer med närmare 20 års erfarenhet av att skapa användarvänliga digitala tjänster. Jag tar webbprojekt hela vägen – från behovsanalys och grafisk identitet till färdigbyggd, sökbar sajt och uppföljning – och gör komplexa idéer till enkla, engagerande upplevelser.',

  // Tidslinjen: spår (jobb/utbildning över tid) och händelser (vad som gjordes).
  // year kan vara decimal för att placera händelsen inom året (2024.8 = hösten 2024).
  // col = vilket spår (kolumn) till vänster; legend = förklaring ovanför tidslinjen.
  tracks: [
    { id: 'viaplay', col: 0, label: 'Viaplay Group Radio', legend: 'Heltid på Viaplay Group Radio, sedan 2010', segments: [[2010.7, 2027]] },
    { id: 'frilans', col: 1, label: 'Frilans', legend: 'Frilans vid sidan av, sedan 2021', segments: [[2021, 2027]] },
    { id: 'aimonkey', col: 2, label: 'AImonkey', legend: 'Eget projekt, sedan 2026', segments: [[2026, 2027]] },
    { id: 'bonsai', col: 0, label: 'Bonsai Branding', segments: [[2008.5, 2010.7]] },
    { id: 'utb', col: 0, label: 'Utbildning', segments: [[2003.7, 2004.4], [2005.6, 2008.5]] },
  ],
  milestones: [
    { year: 2026.2, label: '2026', track: 'aimonkey', kind: 'projekt', title: 'Startar AImonkey', text: 'En svensk guide till AI med promptgenerator, promptbibliotek och mallar – mitt eget projekt vid sidan av jobbet. Idé, varumärke, design, bygge, SEO och drift.', case: 'aimonkey' },
    { year: 2026.3, label: '2026', track: 'viaplay', kind: 'projekt', title: 'dabradio.nu', text: 'Viaplay Radios guide till DAB+ – sök kanaler där du bor och se hur du lyssnar i bilen, med guider per bilmärke, och hemma. Byggd i Webflow.' },
    { year: 2025.3, label: '2025', track: 'frilans', kind: 'projekt', title: 'Guldörat', text: 'Sajten för Sveriges radio- och poddpris, som byter fokus med årshjulet. 85 600 klick från Google på 16 månader.', case: 'guldorat' },
    { year: 2024.85, label: '2024', track: 'frilans', kind: 'projekt', title: 'Matchedin', text: 'Lekfull men professionell sajt för två målgrupper – arbetssökande och arbetsgivare.', case: 'matchedin' },
    { year: 2024.4, label: '2024', track: 'viaplay', kind: 'projekt', title: 'Annonssajten och Radiopedia', text: 'B2B-sajt för radioreklam och en ordlista som utbildar och drar trafik. Etta–tvåa på Google för ”radioreklam”.', case: 'viaplay-group-radio' },
    { year: 2023.85, label: '2023', track: 'frilans', kind: 'projekt', title: 'IDLA Fastigheter', text: 'Sajt för ett fastighetsbolag med hyresbostäder för bofasta i Åredalen – med bostäder, nyheter, hållbarhet och en portal för felanmälan. Byggd i Webflow.' },
    { year: 2021.3, label: '2021', track: 'frilans', kind: 'projekt', title: 'Bloem – första frilansuppdraget', text: 'Frilansandet börjar, vid sidan av heltidsjobbet. Från kontaktsida till blomsterbutik online, med Stripe och Airtable. Förvaltad sedan dess.', case: 'bloem' },
    { year: 2019.5, label: '2019', track: 'viaplay', kind: 'utmärkelse', title: 'Guld på In House-galan', text: 'Förstaplats i kategorin DR-utskick för ”Den stora flytten”.' },
    { year: 2018.7, label: '2018/19', track: 'viaplay', kind: 'utmärkelse', title: 'Challenger Program', text: 'Utvald till Viaplay Groups program för koncernens största talanger, tillsammans med åtta andra medarbetare.' },
    { year: 2017.5, label: '2017', track: 'viaplay', kind: 'projekt', title: 'RIX FM Festival', text: 'Sajten för RIX FM Festival, byggd i Webflow – den första av eventsajterna för radiobolagets stora evenemang.' },
    { year: 2010.7, label: '2010', track: 'viaplay', kind: 'jobb', title: 'Produktägare på MTG Radio', text: 'Ansvar för radiobolagets alla digitala B2C-plattformar och interna system – genom bytena till Nordic Entertainment Group och Viaplay Group.' },
    { year: 2008.5, label: '2008', track: 'bonsai', kind: 'jobb', title: 'Webbdesigner i Perth', text: 'Designade och byggde webbplatser i WordPress för kunder i Perth, Australien, på Bonsai Branding.' },
    { year: 2008.4, label: '2008', track: 'utb', kind: 'utbildning', title: 'Kandidatexamen i kommunikation', text: 'Berghs School of Communication och Edith Cowan University, med fokus på media och design.' },
    { year: 2004.3, label: '2004', track: 'utb', kind: 'utmärkelse', title: 'Dean’s List på Hawaii', text: 'Ett studieår på Hawaii Pacific University gav en plats på Dean’s List.' },
  ],

  experience: [
    {
      period: '2026 –',
      role: 'Grundare',
      org: 'AImonkey',
      text: 'Idé, varumärke, design, bygge, CMS, SEO, innehåll och drift av AImonkey.se – en svensk guide till AI med promptgenerator, promptbibliotek och mallar.',
      cases: ['aimonkey'],
    },
    {
      period: '2021 –',
      role: 'Frilansande designer och webbutvecklare',
      org: 'Egen verksamhet',
      text: 'Vid sidan av heltidstjänsten: sajter i Webflow för bland andra Guldörat, Matchedin, IDLA Fastigheter, Bloem, CFVM och Hammarby Handboll – från struktur och design i Figma till bygge, e-handel, CMS och SEO.',
      cases: ['guldorat', 'matchedin', 'bloem'],
    },
    {
      period: 'sep 2010 –',
      role: 'Produktägare',
      org: 'Viaplay Group Radio',
      text: 'Produktägare för radiobolagets alla digitala B2C-plattformar och interna system, under tiden som MTG Radio, Nordic Entertainment Group och Viaplay Group. Designar och bygger eventsajter för radioevent som RIX FM Festival, samt annonssajten annonsera.viaplayradio.se och Radiopedia.',
      cases: ['viaplay-group-radio'],
    },
    {
      period: '2008 – 2010',
      role: 'Webbdesigner och utvecklare',
      org: 'Bonsai Branding, Perth',
      text: 'Designade och byggde webbplatser i WordPress för olika kunder i Perth, Australien.',
      cases: [],
    },
  ],

  skills: [
    { area: 'Strategi och ledning', items: ['Produktägarskap', 'Projektledning', 'Behovsanalys', 'Informationsarkitektur'] },
    { area: 'Design', items: ['UI/UX', 'Grafisk identitet', 'Designsystem', 'Figma'] },
    { area: 'Bygge', items: ['Webflow och CMS', 'HTML, CSS och JavaScript', 'WordPress', 'CRM-system och integrationer'] },
    { area: 'SEO och analys', items: ['Teknisk SEO', 'Innehåll och sökord', 'Google Search Console', 'Strukturerad data'] },
    { area: 'Verktyg', items: ['Jira', 'Trello', 'Airtable', 'Stripe'] },
  ],

  awards: [
    { year: '2019', title: 'Guld på In House-galan', text: 'Förstaplats i kategorin DR-utskick för ”Den stora flytten”.' },
    { year: '2018/19', title: 'Challenger Program, Viaplay Group', text: 'Utvald till programmet för koncernens största talanger, tillsammans med åtta andra medarbetare.' },
    { year: '2004', title: 'Dean’s List, Hawaii Pacific University', text: 'För studieresultaten under året i Hawaii.' },
  ],

  education: [
    { period: '2005 – 2008', title: 'Kandidatexamen i kommunikation', org: 'Berghs School of Communication och Edith Cowan University. Fokus på media och design. Första terminen i Stockholm, resten i Perth.' },
    { period: '2003 – 2004', title: 'Ett studieår', org: 'Hawaii Pacific University' },
    { period: '1997 – 2000', title: 'Gymnasium', org: 'Södra Latins gymnasium, Stockholm' },
  ],

  languages: [
    { lang: 'Svenska', level: 'modersmål' },
    { lang: 'Engelska', level: 'flytande – studerat och arbetat över fem år utomlands' },
  ],
};
