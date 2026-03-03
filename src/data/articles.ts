export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  readTime: string;
  bullets: string[];
};

export const articles: Article[] = [
  {
    slug: "forste-prinsipper",
    title: "Bitcoin forklart med første prinsipper",
    description:
      "En enkel introduksjon til knapphet, desentralisering og hvorfor custody er avgjørende.",
    category: "Fundament",
    published: "2026-03-03",
    readTime: "5 min lesing",
    bullets: [
      "Hvilket problem Bitcoin prøver å løse",
      "Hvorfor fast tilbud betyr noe over tid",
      "Hva som skjer med risiko når du tar egen custody"
    ]
  },
  {
    slug: "syklusplan",
    title: "Slik lager du en syklusplan du faktisk følger",
    description:
      "Konkrete regler for kjøp, risikostyring og oppfølging gjennom hele markedssyklusen.",
    category: "Strategi",
    published: "2026-03-03",
    readTime: "6 min lesing",
    bullets: [
      "Bestem tidshorisont før du handler",
      "Bruk faste intervaller i stedet for magefølelse",
      "Definer tydelige grenser for risiko og likviditet"
    ]
  },
  {
    slug: "portefoljehygiene",
    title: "Porteføljehygiene: sjekkliste før du øker risiko",
    description:
      "Syv kontroller som holder beslutningene rolige når markedet er alt annet enn rolig.",
    category: "Risiko",
    published: "2026-03-03",
    readTime: "4 min lesing",
    bullets: [
      "Revurder total eksponering mot én aktivaklasse",
      "Dobbeltsjekk backup- og nøkkelrutiner",
      "Unngå gearing i en langsiktig strategi"
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
