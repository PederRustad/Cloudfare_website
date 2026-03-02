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
    slug: "first-principles",
    title: "Bitcoin First Principles, Without the Noise",
    description:
      "A beginner-friendly breakdown of scarcity, decentralization, and self-custody.",
    category: "Foundations",
    published: "2026-03-02",
    readTime: "5 min read",
    bullets: [
      "What problem Bitcoin solves",
      "Why fixed supply matters",
      "How custody changes your risk profile"
    ]
  },
  {
    slug: "cycle-plan",
    title: "Build a Cycle Plan You Can Actually Follow",
    description:
      "A practical framework for buy rules, risk limits, and emotional control.",
    category: "Planning",
    published: "2026-03-02",
    readTime: "6 min read",
    bullets: [
      "Set contribution rules before volatility starts",
      "Use position sizing instead of prediction",
      "Design your plan for bad days, not good days"
    ]
  },
  {
    slug: "portfolio-hygiene",
    title: "Portfolio Hygiene: 7 Checks Before You Add Risk",
    description:
      "A short checklist to keep your Bitcoin plan disciplined and boring.",
    category: "Risk",
    published: "2026-03-02",
    readTime: "4 min read",
    bullets: [
      "Recheck your time horizon",
      "Audit custody and backups",
      "Avoid leverage if your plan is long-term"
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
