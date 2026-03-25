import { CARDS } from "@/data/cards";
import { BLOG_POSTS } from "@/data/content";
import { BEST_FOR_CATEGORIES } from "@/data/bestfor";
import { COMPARISONS } from "@/data/comparisons";

export default function sitemap() {
  const base = "https://www.assurefintech.com";

  // Static pages
  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/cards`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/smart-swipe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/stack-builder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gap-finder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/swipe-check`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/whats-changed`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/how-we-earn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/editorial-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];

  // Learn — category landing pages
  const learnLandingPages = [
    { url: `${base}/learn/loans`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/learn/insurance`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/learn/savings`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/learn/tax`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/learn/mutual-funds`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
  ];

  // Learn — individual articles
  const learnArticles = [
    // Loans (6)
    "loans/home-loan-true-cost",
    "loans/personal-loan-actual-apr",
    "loans/fixed-vs-floating-rate",
    "loans/sbi-vs-hdfc-vs-icici-home-loan",
    "loans/prepayment-penalty-trap",
    "loans/education-loan-real-cost",
    // Insurance (6)
    "insurance/health-insurance-effective-coverage",
    "insurance/claim-settlement-ratios-2026",
    "insurance/term-insurance-real-value",
    "insurance/room-rent-trap",
    "insurance/health-insurance-for-parents",
    "insurance/copay-vs-no-copay",
    // Savings (5)
    "savings/fd-real-return",
    "savings/ppf-vs-fd-vs-debt-fund",
    "savings/best-fd-rates-2026",
    "savings/senior-citizen-fd",
    "savings/tax-saving-fd-vs-elss-vs-ppf",
    // Tax (4)
    "tax/old-vs-new-regime",
    "tax/80c-beyond-the-obvious",
    "tax/hra-calculation",
    "tax/tax-on-credit-card-rewards",
    // Mutual Funds (3)
    "mutual-funds/cagr-vs-actual-return",
    "mutual-funds/direct-vs-regular",
    "mutual-funds/sip-advertised-vs-actual",
  ].map(slug => ({
    url: `${base}/learn/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

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

  return [...staticPages, ...learnLandingPages, ...learnArticles, ...cardPages, ...bestForPages, ...comparisonPages, ...blogPages];
}
