---
title: "Så byggde jag AIMonkey: strukturen bakom en svensk AI-guide"
seoTitle: "Så byggde jag AIMonkey: struktur och CMS"
description: "Hur är en AI-sajt med närmare 500 prompter uppbyggd? Jag visar innehållsmodellen, Webflow-CMS:et, promptgeneratorn och SEO-strukturen bakom AIMonkey."
lead: "AIMonkey började som en enkel idé: AI på svenska, för folk som vill få saker gjorda. Åtta månader senare är det en sajt med närmare 500 prompter, ett 60-tal mallar, en ordlista med drygt 200 termer och en promptgenerator som binder ihop alltihop. Här går jag igenom hur det hänger ihop under huven: innehållsmodellen, CMS:et, koden ovanpå Webflow och hur jag driver sajten med ett team av AI-agenter."
date: "2026-11-27"
tags: ["AIMonkey", "Webflow", "SEO", "AI"]
cover: /img/aimonkey-omslag.webp
coverAlt: AIMonkeys startsida på dator och mobil
case: aimonkey
---

Vill du se resultaten i siffror finns de i mitt [case om AIMonkey](/case/aimonkey/). Det här inlägget handlar om *hur* sajten fungerar.

## Varför en till AI-sajt?

När jag började titta på svenskt AI-innehåll såg jag två saker. Det fanns gott om sidor, men många var maskinöversatta från engelska och kändes stela. Och nästan ingen hjälpte dig med det svåra steget: att faktiskt skriva en bra prompt för just din uppgift.

Så målet med [AIMonkey](https://www.aimonkey.se/) blev att vara praktiskt. Varje sida ska sluta med något du kan kopiera och använda direkt i ChatGPT, Claude eller Gemini. Det styr nästan alla beslut om strukturen.

## Grundidén: ingredienser, recept och kök

Den viktigaste modellen på sajten är en liknelse jag ofta återkommer till:

- **Promptbiblioteket är ingredienserna.** Enskilda prompter som löser en uppgift.
- **Mallarna är recepten.** Flera prompter i rätt ordning som tar dig från start till färdigt resultat.
- **Promptgeneratorn är köket.** Där du blandar ihop din egen prompt utifrån det du behöver.

Allt innehåll på sajten har en plats i den modellen. Det gör det lätt att avgöra var något nytt ska ligga, och det gör internlänkningen nästan självklar: en prompt länkar till mallen den ingår i, mallen länkar till generatorn och tillbaka till rätt målgruppssida.

## Tre nivåer: målgrupp, mall och prompt

Sajten är byggd i tre nivåer som var och en svarar på olika typer av sökningar:

1. **Pillarsidor** tar de breda sökorden, till exempel [AI för säljare](https://www.aimonkey.se/ai-for-saljare). De beskriver en hel resa för en målgrupp.
2. **Mallar** tar sökningar som ”mall” eller ”steg för steg”. En mall är en fas eller ett avgränsat problem, till exempel att kartlägga sina kunder.
3. **Prompter** tar de smala sökningarna. En prompt är ett enskilt steg i en mall.

<figure class="diagram">
  <svg class="d-wide" viewBox="0 0 720 300" role="img" aria-labelledby="niv-t niv-d">
    <title id="niv-t">AIMonkeys tre nivåer</title>
    <desc id="niv-d">Pillarsidan tar breda sökord och leder till mallar, som tar sökningar om steg för steg. Mallarna består av prompter, som tar smala sökningar. Promptgeneratorn används på alla nivåer.</desc>
    <g font-family="Familjen Grotesk, system-ui, sans-serif" fill="#121212">
      <rect x="1" y="1" width="470" height="80" fill="#fff" stroke="#121212" stroke-width="1.5"/>
      <text x="22" y="34" font-size="22" font-weight="600">Pillarsida</text>
      <text x="22" y="62" font-size="16" fill="#5A5A5A">breda sökord · ”AI för säljare”</text>
      <rect x="1" y="110" width="470" height="80" fill="#fff" stroke="#121212" stroke-width="1.5"/>
      <text x="22" y="143" font-size="22" font-weight="600">Mall</text>
      <text x="22" y="171" font-size="16" fill="#5A5A5A">”mall”, ”steg för steg” · en fas i resan</text>
      <rect x="1" y="219" width="470" height="80" fill="#fff" stroke="#121212" stroke-width="1.5"/>
      <text x="22" y="252" font-size="22" font-weight="600">Prompt</text>
      <text x="22" y="280" font-size="16" fill="#5A5A5A">smala sökningar · ett steg i mallen</text>
      <path d="M236 82 V108 M229 100 L236 108 L243 100 M236 191 V217 M229 209 L236 217 L243 209" stroke="#E8491D" stroke-width="2.5" fill="none"/>
      <rect x="520" y="1" width="199" height="298" fill="#E8491D"/>
      <text x="619" y="138" font-size="22" font-weight="600" text-anchor="middle">Prompt-</text>
      <text x="619" y="164" font-size="22" font-weight="600" text-anchor="middle">generatorn</text>
      <text x="619" y="196" font-size="15" text-anchor="middle">används på alla nivåer</text>
      <path d="M472 41 H518 M472 150 H518 M472 259 H518" stroke="#121212" stroke-width="1.5" stroke-dasharray="4 4"/>
    </g>
  </svg>
  <svg class="d-narrow" viewBox="0 0 340 420" role="img" aria-labelledby="niv-t2">
    <title id="niv-t2">AIMonkeys tre nivåer: pillarsida, mall och prompt, med promptgeneratorn på alla nivåer</title>
    <g font-family="Familjen Grotesk, system-ui, sans-serif" fill="#121212">
      <rect x="1" y="1" width="338" height="78" fill="#fff" stroke="#121212" stroke-width="1.5"/>
      <text x="18" y="34" font-size="22" font-weight="600">Pillarsida</text>
      <text x="18" y="60" font-size="15" fill="#5A5A5A">breda sökord · ”AI för säljare”</text>
      <rect x="1" y="107" width="338" height="78" fill="#fff" stroke="#121212" stroke-width="1.5"/>
      <text x="18" y="140" font-size="22" font-weight="600">Mall</text>
      <text x="18" y="166" font-size="15" fill="#5A5A5A">”steg för steg” · en fas i resan</text>
      <rect x="1" y="213" width="338" height="78" fill="#fff" stroke="#121212" stroke-width="1.5"/>
      <text x="18" y="246" font-size="22" font-weight="600">Prompt</text>
      <text x="18" y="272" font-size="15" fill="#5A5A5A">smala sökningar · ett steg i mallen</text>
      <path d="M170 80 V105 M163 97 L170 105 L177 97 M170 186 V211 M163 203 L170 211 L177 203" stroke="#E8491D" stroke-width="2.5" fill="none"/>
      <path d="M170 292 V320" stroke="#121212" stroke-width="1.5" stroke-dasharray="4 4"/>
      <rect x="1" y="322" width="338" height="96" fill="#E8491D"/>
      <text x="170" y="362" font-size="22" font-weight="600" text-anchor="middle">Promptgeneratorn</text>
      <text x="170" y="390" font-size="15" text-anchor="middle">används på alla nivåer</text>
    </g>
  </svg>
  <figcaption class="lbl">innehållsmodellen <span class="sig">|</span> varje nivå svarar på sin typ av sökning</figcaption>
</figure>

Pillarsidorna finns i tre varianter beroende på målgrupp:

- **Arbetsresa** för en roll med arbetsmoment i tidsordning, som säljare, chefer och marknadsförare. Säljarresan går från kundkartläggning via outreach och offert till uppföljning.
- **Lärresa** när målgruppen definieras av hur mycket de kan. [AI för nybörjare](https://www.aimonkey.se/ai-for-nyborjare) går från att kunna, via att förstå, till att behärska.
- **Samlingssida** när målgruppen har många roller, som småföretagare. Den lånar mallar från de andra resorna.

Alla pillarsidor följer samma skelett: en intro med målgruppens egna ord, resan i korthet, faskort med ”gör” (mall), ”förstå” (artikel) och snabbprompter, ingångar för olika mycket tid, promptkort, vanliga frågor och en avslutande kommentar från apan.

Regeln jag håller hårt i är **ett sökord per sida och nivå**. Varje innehåll har en kanonisk plats. Om två sidor börjar slåss om samma sökning slår jag ihop dem med en 301-omdirigering.

## Promptgeneratorn: navet

[Promptgeneratorn](https://www.aimonkey.se/promptgeneratorn) är sajtens hjärta och det som skiljer AIMonkey från en vanlig artikelsajt. Flödet ser ut så här:

1. **Du beskriver uppgiften** i ett stort textfält, skriver eller pratar in den. Medan du skriver söker generatorn i biblioteket och föreslår färdiga prompter som passar.
2. **Du fyller i luckorna.** Om prompten har platshållare som [DITT FÖRETAG] eller [MÅLGRUPP] blir varje lucka ett eget fält. Uppgifter om dig själv sparas i webbläsaren, så du slipper skriva dem igen.
3. **Du finjusterar om du vill:** läsare, ton, roll, underlag och format för text, eller stil och ljus för bilder.
4. **Du får en färdig prompt** med tydliga rubriker (uppgift, kontext, material, format och regler), kopierar den och skickas vidare till din AI-tjänst. För ChatGPT och Claude kan prompten klistras in åt dig.

![Promptgeneratorn på AIMonkey: skriv eller prata in vad du vill ha hjälp med, eller välj ett exempel](/img/aimonkey-promptgenerator.webp)

Generatorn har också ett kedjeläge för mallarna. Om du jobbar dig igenom en mall i flera steg sparas svaren från tidigare steg och fylls i automatiskt i nästa prompt. Det är där ”receptet” blir verkligt.

Tekniskt är generatorn ett eget skript som ritar hela gränssnittet ovanpå en vanlig Webflow-sida. Den kan ta emot parametrar i adressen, så att varje mall, artikel och promptkort på sajten kan skicka besökaren dit med uppgiften redan ifylld.

## Promptbiblioteket och ”klicka och kopiera”

[Promptbiblioteket](https://www.aimonkey.se/promptbiblioteket) har närmare 500 prompter. Varje prompt är en post i CMS:et och får en egen sida med exempel på svar, när du ska använda den, vanliga misstag och nästa drag.

Samma prompter dyker upp på flera ställen utan att jag behöver kopiera text:

- som **promptkort** på pillarsidorna (en kryssruta i CMS:et styr vilka sidor prompten syns på),
- som **stegkort** i mallarna,
- och som **promptkort inne i artiklarna**, där ett skript hittar prompten i texten och byter ut den mot ett kort med kopieringsknapp.

I alla korten kan du fylla i luckorna direkt. Kopiera-knappen skiftar färg från grå till grön ju mer du fyller i. Det är små detaljer, men ”klicka och kopiera” är hela löftet med sajten, så det är där jag lagt mest omsorg.

## Prompt, skill eller projekt?

När AI-tjänsterna började stödja skills och projekt lade jag till två nivåer till. Skillnaden förklaras i artikeln [Prompt, skill eller projekt?](https://www.aimonkey.se/artiklar/prompt-skill-eller-projekt), men kort:

- **En prompt** använder du för en uppgift, nu.
- **En skill** är en arbetsmetod som AI:n kommer ihåg. På [AI-skills](https://www.aimonkey.se/ai-skills) kan du anpassa en skill, ladda ner den som zip-fil och installera den i Claude, ChatGPT, Gemini eller Copilot.
- **En projektmall** ger bestående instruktioner, filer, startprompter och kopplingar till dina verktyg, till exempel en säljassistent eller en kundtjänst för webbshopen.

Båda bygger på samma CMS-princip: fälten beskriver innehållet (roll, regler, arbetssätt, exempel) och ett skript sätter ihop det till färdiga instruktioner för den tjänst du valt.

## Lär-delen: artiklar, ordlista och verktyg

Runt verktygen finns innehållet som förklarar:

- **Artiklar** med typerna nyhet, förklaring, jämförelse, trygghet och fördjupning. Varje artikel kopplas till en roll och en mall, så att läsaren alltid har ett nästa steg.
- **[AI-ordlistan](https://www.aimonkey.se/ai-termer)** med drygt 200 termer. Varje term har ett kort svar först, ett exempel och relaterade termer. Ordlistan är tänkt som sajtens länknav och är också det innehåll som oftast syns i Googles AI-svar.
- **[AI-verktyg](https://www.aimonkey.se/ai-verktyg)** med 20 verktyg som betygsatts på fyra delbetyg, med pris, för- och nackdelar och guider för varje verktyg.

## Webflow som grund, egen kod ovanpå

Hela sajten är byggd i Webflow. CMS:et har samlingar för prompter, mallar, artiklar, termer, verktyg, roller, projektmallar, skills och vanliga frågor, och de är kopplade till varandra med referensfält. En prompt vet vilken mall den hör till och vilket steg den är. En mall vet vilken roll den tillhör och vilken fas. En roll vet vilken pillarsida den har.

Webflow sköter layout, CMS och hosting. Det interaktiva är ett tiotal egna skript som läser data från CMS:et och ritar upp generatorn, biblioteket, stegkorten och skill-nedladdningarna. Skripten ligger versionshanterade i GitHub och laddas med en fast version, så att jag alltid vet exakt vad som är live.

Några lärdomar från den kombinationen:

- **Bygg med Webflow-element först.** Det som kan vara riktiga element i Designern blir det, så att det går att redigera utan kod. Skript används bara där Webflow inte räcker till.
- **CMS-listor har en gräns på 100 poster.** Sökdatan för biblioteket ligger därför på en dold sida med flera listor efter varandra, och jag behöver lägga till en ny lista innan biblioteket passerar nästa hundratal.
- **Allt går inte via API:t.** Vissa kopplingar måste sättas för hand i Designern, så en del av arbetet är att veta vad som är automatiserbart och vad som inte är det.

## SEO-strukturen

AIMonkey startade som en ny sajt utan auktoritet. Strategin har därför varit att vinna de smala sökningarna där konkurrensen är svag och bygga uppåt därifrån:

- **”Prompt för X”**, där X är ett yrke eller en uppgift.
- **Jämförelser och definitioner på svenska**, med svaret först.
- **Verktygssidor** med titlar som svarar på det folk faktiskt undrar, till exempel om verktyget är gratis.

Tekniskt har sidorna strukturerad data (FAQ, definitioner, artiklar, listor och mjukvara), kanoniska adresser och en tydlig länkstruktur nedåt och uppåt i de tre nivåerna. Längst ner på mallar och artiklar visar skript relevanta förslag från samma roll eller ämne, så att sökbesökare klickar vidare i stället för att lämna.

Allt mer handlar också om att synas i AI-svar. Därför skriver jag definitioner som går att citera, tabeller med fakta och priser i kronor, och följer varje vecka upp vilka svenska frågor i ChatGPT och Googles AI-läge som nämner AIMonkey.

## Mätning: kopierade prompter är huvudmåttet

Sidvisningar säger lite om en verktygssajt. Mitt huvudmått är i stället **kopierade prompter per vecka**. Varje kopiering, oavsett om den sker i generatorn, biblioteket, ett stegkort eller en artikel, samlas i en gemensam händelse i Google Analytics med information om var den skedde.

Varje ändring jag gör för att förbättra något loggas i en ändringslogg med en hypotes, ett mått, ett före-värde och ett datum för utvärdering, oftast tre veckor senare. Resultatet blir bättre, ingen skillnad, sämre eller för lite data. Det låter byråkratiskt, men det är det som gör att jag lär mig något i stället för att gissa.

## Arbetssättet: jag och ett team av AI-agenter

Jag driver AIMonkey på sidan av ett heltidsjobb. Det fungerar för att mycket av det löpande arbetet sköts av Claude-agenter som är kopplade till Webflow, Search Console, Google Analytics och ändringsloggen.

Ett tiotal schemalagda uppgifter rullar varje vecka:

- nya mallar och artiklar från en backlogg jag fyller på,
- dagens AI-nyhet tre gånger i veckan,
- nya ordlistetermer,
- innehålls- och faktakoll, språkgranskning och en lista över bilder som saknas,
- en SEO-veckorapport med förslag på förbättringar,
- utvärdering av projektmallar och skills.

Agenterna skriver utkast och rapporter, men **de publicerar inte själva**. Allt hamnar som utkast i CMS:et och i en lista med öppna trådar. Jag lägger in bild, granskar och trycker på publicera. Agenterna följer också samma skrivregler och samma tonläge, med apan som röst, så att sajten låter likadan oavsett vem eller vad som skrivit utkastet.

## Det jag lärt mig

- **Struktur före innehåll.** Modellen med pillarsida, mall och prompt gjorde att innehållet kunde växa från några tiotal till hundratals sidor utan att bli rörigt.
- **Ett innehåll, många platser.** Att låta CMS:et styra var en prompt syns sparar enormt med arbete och gör att rättningar slår igenom överallt.
- **Mät det som betyder något.** När jag bytte fokus från besök till kopieringar ändrades vilka sidor jag prioriterade.
- **AI som team, inte som autopilot.** Agenterna gör sajten möjlig att driva på kvällstid, men det är granskningen som gör den bra.

## Vad händer härnäst?

Nästa steg är fler yrkesresor, till exempel för skribenter och analytiker, inloggning så att man kan spara sina prompter och mallar, fler skills och en tätare koppling mellan generatorn och projektmallarna.

Har du frågor om hur något är byggt, eller funderar på en liknande lösning för din egen verksamhet i Webflow? [Hör av dig](/#kontakt). Och vill du testa själv: börja i [promptgeneratorn](https://www.aimonkey.se/promptgeneratorn) och se hur långt du kommer på fem minuter.
