import { CARDS } from "@/data/cards";
import { BLOG_POSTS } from "@/data/content";
import { BEST_FOR_CATEGORIES } from "@/data/bestfor";
import { COMPARISONS } from "@/data/comparisons";

const LEARN_ARTICLES = {
  loans: ["home-loan-true-cost", "personal-loan-actual-apr", "fixed-vs-floating-rate", "sbi-vs-hdfc-vs-icici-home-loan", "prepayment-penalty-trap", "education-loan-real-cost"],
  insurance: ["health-insurance-effective-coverage", "claim-settlement-ratios-2026", "term-insurance-real-value", "room-rent-trap", "health-insurance-for-parents", "copay-vs-no-copay"],
  savings: ["fd-real-return", "ppf-vs-fd-vs-debt-fund", "best-fd-rates-2026", "senior-citizen-fd", "tax-saving-fd-vs-elss-vs-ppf"],
  tax: ["old-vs-new-regime", "80c-beyond-the-obvious", "hra-calculation", "tax-on-credit-card-rewards"],
  "mutual-funds": ["cagr-vs-actual-return", "direct-vs-regular", "sip-advertised-vs-actual"],
};

export default function sitemap() {
  const base = "https://www.assurefintech.com";

  // Static pages
  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/cards`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },

    // Tools (5 original + 4 new calculators)
    { url: `${base}/smart-swipe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/stack-builder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gap-finder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/swipe-check`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/loan-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fd-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tax-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/insurance-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Learn category landing pages
    { url: `${base}/learn/loans`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/learn/insurance`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/learn/savings`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/learn/tax`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/learn/mutual-funds`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },

    { url: `${base}/whats-changed`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/how-we-earn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/editorial-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Card pages
  const cardPages = CARDS.map(card => ({
    url: `${base}/cards/${card.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Best-for category pages
  const bestForPages = BEST_FOR_CATEGORIES.map(cat => ({
    url: `${base}/best/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Comparison pages
  const comparisonPages = COMPARISONS.map(comp => ({
    url: `${base}/compare/${comp.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Blog pages
  const blogPages = BLOG_POSTS.map(post => ({
    url: `${base}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Learn article pages
  const learnArticlePages = Object.entries(LEARN_ARTICLES).flatMap(([category, articles]) =>
    articles.map(slug => ({
      url: `${base}/learn/${category}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    }))
  );

  return [...staticPages, ...cardPages, ...bestForPages, ...comparisonPages, ...blogPages, ...learnArticlePages];
}
