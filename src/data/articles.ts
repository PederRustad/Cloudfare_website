export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  readTime: string;
  bullets: string[];
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
  conclusion: string;
};

export const articles: Article[] = [
  {
    slug: "forste-prinsipper",
    title: "Bitcoin forklart med første prinsipper",
    description:
      "En enkel introduksjon til knapphet, desentralisering og hvorfor custody er avgjørende.",
    category: "Fundament",
    published: "2026-03-03",
    readTime: "8 min lesing",
    bullets: [
      "Hvilket problem Bitcoin prøver å løse",
      "Hvorfor fast tilbud betyr noe over tid",
      "Hva som skjer med risiko når du tar egen custody",
      "Hvordan du starter rolig uten å overkomplisere"
    ],
    intro:
      "Mange starter med bitcoin ved å se på kursgrafen. Et bedre utgangspunkt er å starte med første prinsipper: hvilket problem som løses, hvilke regler som gjelder, og hvordan du faktisk eier det du kjøper.",
    sections: [
      {
        heading: "Problemet: penger med svekket kjøpekraft",
        paragraphs: [
          "I et system med høy pengemengdevekst blir det vanskeligere å planlegge langt frem. Lønn og sparing må konkurrere med stigende priser, og terskelen for å ta mer risiko blir lavere.",
          "Bitcoin ble designet som et alternativ med forutsigbare regler: utstedelsen følger en kjent plan, og tilbudet stopper på 21 millioner. Det gjør det mulig å bygge en langsiktig sparelogikk uten å være avhengig av at noen endrer kurs underveis."
        ]
      },
      {
        heading: "Knapphet: hvorfor 21 millioner betyr noe",
        paragraphs: [
          "Knapphet alene skaper ikke verdi, men knapphet kombinert med etterspørsel og troverdige regler gjør et aktivum interessant. I Bitcoin kan ingen sentral aktør skru opp tilbudet for å løse kortsiktige problemer.",
          "Dette skiller Bitcoin fra aktiva der utvanning kan skje gjennom nye utstedelser. Over tid gir fast tilbud et tydelig rammeverk: du vet hva du eier som andel av totalen, og den andelen kan ikke fortynnes av ekstra utstedelse."
        ]
      },
      {
        heading: "Desentralisering: regler som er like for alle",
        paragraphs: [
          "Et desentralisert nettverk betyr at validering av regler ikke styres av én database eller én juridisk enhet. Transaksjoner må følge åpne regler som verifiseres av et globalt nettverk.",
          "For en investor betyr dette i praksis lavere motpartsrisiko i selve systemet. Du trenger fortsatt gode rutiner rundt kjøp og lagring, men protokollen er ikke avhengig av at én organisasjon holder løftet sitt."
        ]
      },
      {
        heading: "Custody: forskjellen på eksponering og eierskap",
        paragraphs: [
          "Hvis du lar en tredjepart holde nøklene dine, eier du ofte et krav på bitcoin, ikke nødvendigvis bitcoin direkte. I rolige perioder kan forskjellen virke liten, men i stressede perioder blir den stor.",
          "Egen custody flytter ansvar fra tredjepart til deg. Det øker den operative risikoen hvis rutinene er svake, men reduserer motpartsrisiko betydelig når rutinene er gode."
        ]
      },
      {
        heading: "En rolig startmodell i tre faser",
        paragraphs: [
          "Du trenger ikke gå fra null til avansert oppsett på én dag. Et bedre løp er å starte med små beløp, dokumentere rutiner og øke gradvis når prosessen sitter.",
          "Målet i startfasen er ikke maksimal avkastning, men å etablere en struktur du faktisk følger gjennom både oppgang og nedgang."
        ],
        checklist: [
          "Velg en fast kjøpsfrekvens som passer kontantstrømmen din",
          "Definer en øvre prosentandel bitcoin i totalporteføljen",
          "Test backup-rutiner med små beløp før du skalerer",
          "Lag et enkelt dokument med regler for kjøp, lagring og gjennomgang",
          "Gjennomfør månedlig kontroll i stedet for daglig prisfokus"
        ]
      }
    ],
    conclusion:
      "Første prinsipper gir en mer robust beslutningsmodell enn nyhetsdrevne signaler. Når du forstår problem, regler og custody, blir strategien enklere å holde over tid."
  },
  {
    slug: "syklusplan",
    title: "Slik lager du en syklusplan du faktisk følger",
    description:
      "Konkrete regler for kjøp, risikostyring og oppfølging gjennom hele markedssyklusen.",
    category: "Strategi",
    published: "2026-03-03",
    readTime: "9 min lesing",
    bullets: [
      "Bestem tidshorisont før du handler",
      "Bruk faste intervaller i stedet for magefølelse",
      "Definer tydelige grenser for risiko og likviditet",
      "Lag en vedlikeholdsrytme for planen din"
    ],
    intro:
      "De fleste planer feiler ikke fordi de er dårlige på papir, men fordi de er for kompliserte i praksis. En god syklusplan er enkel nok til å følges i støy, men konkret nok til å styre beslutninger.",
    sections: [
      {
        heading: "Start med mandat, ikke med kjøpsknapp",
        paragraphs: [
          "Før du bestemmer hvor mye du skal kjøpe, må du avklare hvorfor du eier bitcoin. Er målet langsiktig verdibevaring, asymmetrisk vekst, eller strategisk diversifisering?",
          "Skriv mandatet i én setning og legg på tidshorisont. Et tydelig mandat gjør det enklere å si nei til ad hoc-beslutninger når markedet beveger seg raskt."
        ]
      },
      {
        heading: "Definer kjøpsregler som tåler begge retninger",
        paragraphs: [
          "En vanlig modell er delt innkjøp: en fast del på kalender (ukentlig/månedlig) og en mindre del for ekstra kjøp på større fall. Da unngår du at hele planen blir reaktiv.",
          "Regelen må være tallfestet. Eksempel: 80 prosent av månedlig allokering på fast dato, 20 prosent holdes som taktisk buffer med tydelige kriterier."
        ]
      },
      {
        heading: "Sett risikobudsjett før markedet gjør det for deg",
        paragraphs: [
          "Du bør definere maksimum andel bitcoin i total formue, minimum kontantbuffer og hva som aldri skal brukes til risiko. Uten slike grenser blir du prisstyrt.",
          "Likviditet er en del av risiko. Hvis du kan bli tvunget til å selge i feil tidspunkt, er eksponeringen for høy selv om tesen din er god."
        ]
      },
      {
        heading: "Lag beslutningsprotokoll for eufori og panikk",
        paragraphs: [
          "Når markedet går hardt opp, øker presset om å avvike fra planen. Når markedet faller kraftig, øker presset om å avvikle hele strategien.",
          "En enkel beslutningsprotokoll reduserer denne støyen: Hva trigger handling? Hva trigger ingen handling? Hvilke hendelser krever ny vurdering?"
        ]
      },
      {
        heading: "Planen må ha vedlikeholdsvindu",
        paragraphs: [
          "Sett faste revisjoner, for eksempel hver 6. uke. Uten vedlikehold dør planen gradvis og erstattes av impuls.",
          "I revisjonen vurderer du ikke dagskurs, men om mandat, risikobudsjett og gjennomføring fortsatt henger sammen med livet ditt, kontantstrøm og mål."
        ],
        checklist: [
          "Sjekk at eksponeringen fortsatt er innenfor øvre grense",
          "Sjekk at kjøp faktisk er gjort i henhold til kalender",
          "Sjekk at custody-oppsett og backup fortsatt fungerer",
          "Sjekk om likviditetsbufferen er intakt",
          "Dokumenter eventuelle regelendringer med dato og begrunnelse"
        ]
      }
    ],
    conclusion:
      "En syklusplan skal ikke vinne hver måned, men beskytte prosessen gjennom hele syklusen. Stabil gjennomføring slår ofte perfekte prognoser."
  },
  {
    slug: "portefoljehygiene",
    title: "Porteføljehygiene: sjekkliste før du øker risiko",
    description:
      "Syv kontroller som holder beslutningene rolige når markedet er alt annet enn rolig.",
    category: "Risiko",
    published: "2026-03-03",
    readTime: "7 min lesing",
    bullets: [
      "Revurder total eksponering mot én aktivaklasse",
      "Dobbeltsjekk backup- og nøkkelrutiner",
      "Unngå gearing i en langsiktig strategi",
      "Kjør en enkel stresstest før ny allokering"
    ],
    intro:
      "God porteføljehygiene handler om å ta de kjedelige kontrollene før du øker innsats. Når markedet går fort, er det lett å hoppe over det grunnleggende. Det er da feilene blir dyre.",
    sections: [
      {
        heading: "Kontroll 1: total eksponering og konsentrasjon",
        paragraphs: [
          "Start med totalbildet: hvor stor andel av nettoformuen er allerede knyttet til høy volatilitet? Mange undervurderer samlet konsentrasjon når flere kontoer og plattformer er i spill.",
          "Hvis én posisjon dominerer totalen, øker både finansiell og emosjonell risiko. Et tak på konsentrasjon gjør beslutningene mer robuste."
        ]
      },
      {
        heading: "Kontroll 2: likviditet og tidshorisont",
        paragraphs: [
          "Høy risiko krever tid. Midler som kan trenges de neste 12 til 24 månedene bør normalt ikke bindes i en volatil strategi.",
          "Ha en kontantbuffer som dekker uforutsette hendelser. Da slipper du tvangssalg når markedet er svakt."
        ]
      },
      {
        heading: "Kontroll 3: custody og operasjonell sikkerhet",
        paragraphs: [
          "Før du øker beløp, må oppbevaringen tåle størrelsen. Har du testet gjenoppretting? Vet en eventuell medinnehaver hva som skjer hvis du ikke er tilgjengelig?",
          "Operasjonell risiko er ofte undervurdert. Et middels godt markedssyn hjelper lite hvis nøklene håndteres svakt."
        ]
      },
      {
        heading: "Kontroll 4: motpartsrisiko og struktur",
        paragraphs: [
          "Bruker du børs, megler eller tredjepartsforvalter, bør du vite hva du faktisk eier juridisk og operasjonelt. Les vilkår for uttak, begrensninger og hendelseshåndtering.",
          "Fordel gjerne risiko over færre, men tydelig validerte motparter i stedet for mange tilfeldige kontoer."
        ]
      },
      {
        heading: "Kontroll 5: atferdsrisiko under stress",
        paragraphs: [
          "Spør deg selv hvordan du reagerte sist markedet falt raskt. Historisk adferd er ofte bedre indikator enn intensjon.",
          "Hvis du vet at store intradag-bevegelser gir impulsive valg, bygg mekanismer som reduserer frekvensen av beslutninger."
        ],
        checklist: [
          "Ingen ny allokering uten 24 timers refleksjonsregel",
          "Ingen økning hvis likviditetsbuffer er under minimum",
          "Ingen økning før backup-rutiner er testet siste 30 dager",
          "Ingen gearing i langsiktig kjerneportefølje",
          "Skriv ned hva som skal til for å stoppe videre kjøp"
        ]
      }
    ],
    conclusion:
      "Porteføljehygiene virker konservativt i øyeblikket, men beskytter handlingsrommet ditt når det virkelig gjelder. Målet er å overleve lenge nok til at en god tese får tid til å virke."
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
