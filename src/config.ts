// Samlade inställningar för sajten. Ändra här, inte i sidorna.

export const SITE = {
  name: 'Lars Dahlberg',
  // Startsidans titel i Google och vid delning. Övriga sidor får "<sidtitel> | Lars Dahlberg".
  title: 'Webbdesign och Webflow för småföretag | Lars Dahlberg',
  description:
    'Webbdesign, grafisk identitet, bygge i Webflow och SEO för småföretag – från behovsanalys till färdig, sökbar sajt. Allt under ett och samma tak.',
  role: 'Digital Art Director',
  image: '/img/og/lars-dahlberg.jpg', // standardbild vid delning (1200×630)
  linkedin: 'https://www.linkedin.com/in/lars-dahlberg-2324036b/',
  email: 'hello@larsdahlberg.nu',
  phone: '', // tom = visas inte
  bookingUrl: '', // t.ex. en Calendly-länk
  cvUrl: '/cv/', // digitalt CV
  // Sätt till true när sajten ska synas i Google (tar bort noindex).
  indexable: false,
  // Tally-formulär i kontaktsektionen (mappen Lars i Tally). Tom sträng = visa bara e-post.
  tallyFormId: 'VLgOgy',
};
