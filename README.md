# larsdahlberg.nu

Portfolio för Lars Dahlberg, digital art director. Byggd med [Astro](https://astro.build) och publicerad med GitHub Pages.

## Kom igång lokalt

```bash
npm install
npm run dev      # förhandsvisning på http://localhost:4321/portfolio/
npm run build    # bygger den färdiga sajten till dist/
```

## Lägga till ett case

1. Lägg omslagsbilden (1600 × 1000, webp) i `public/img/`.
2. Kopiera en fil i `src/cases/`, till exempel `bloem.md`, och byt namn. Filnamnet blir adressen: `src/cases/deleo.md` → `/case/deleo/`.
3. Fyll i uppgifterna överst i filen och skriv texten under. Varje `##`-rubrik blir en numrerad sektion (01|, 02| …).
4. `order` bestämmer ordningen på startsidan. `draft: true` döljer caset.

Bilder i texten skrivs som `![Beskrivning](/img/filnamn.webp)`. Text inom `<span class="todo">…</span>` markeras gult tills den är ifylld.

## Inställningar

Allt som gäller hela sajten finns i `src/config.ts`: e-post, telefon, LinkedIn, bokningslänk, CV och kontaktformulärets adress.

- **Kontaktformuläret** är i testläge tills `formEndpoint` har en adress, till exempel från Formspree eller Tally.
- **Google:** sajten har `noindex` tills `indexable` sätts till `true`.

## Egen domän (larsdahlberg.nu)

1. Sätt `CUSTOM_DOMAIN = true` i `astro.config.mjs`.
2. Skapa filen `public/CNAME` med innehållet `larsdahlberg.nu`.
3. Hos domänleverantören: fyra A-poster för `@` till `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` och en CNAME-post för `www` till `brasselasse.github.io`.
4. I GitHub: Settings → Pages → Custom domain → `larsdahlberg.nu`, och kryssa i Enforce HTTPS.

## Designsystem

Färger, typsnitt och mått följer designsystemet "Kontrast + markör". Tokens finns som CSS-variabler i `src/styles/global.css` med samma namn som i designsystemet. Typsnitten (Familjen Grotesk och JetBrains Mono) ligger på sajten själv via Fontsource – inga anrop till Google Fonts.
