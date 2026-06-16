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

// New static blog pages (June 2026 content batch)
const STATIC_BLOG_SLUGS = [
  "7-credit-card-mistakes-india", "ai-changing-credit-card-picks", "amazon-hack", "annual-fee-when-worth-paying",
  "beginners-guide", "best-card-high-spenders-2026", "best-card-insurance-premiums-2026", "best-card-low-spenders-2026",
  "best-card-students-2026", "best-free-cards", "bnpl-vs-credit-cards-india", "build-3-card-stack-guide",
  "cashback-rate-is-a-lie", "cibil-score-101-india", "credit-card-vs-debit-card", "credit-utilization-ratio-guide",
  "digital-wallets-vs-credit-cards", "first-card-decision-framework", "fuel-trick", "future-credit-card-rewards-india",
  "get-annual-fee-waived-scripts", "how-reward-points-work-india", "maximize-dining", "metal-credit-cards-india",
  "minimum-transaction-traps", "rbi-latest-guidelines-credit-cards", "read-credit-card-statement", "regalia-vs-infinia",
  "reward-points-vs-cashback", "right-way-pay-credit-card-bill", "should-you-close-old-credit-card",
  "upi-vs-credit-cards-india", "why-reward-rates-dropping-india",
];

// New static best-for pages
const STATIC_BESTFOR_SLUGS = [
  "best-cashback-credit-card-no-annual-fee", "best-credit-card-for-beginners-india", "best-credit-card-for-bill-payments",
  "best-credit-card-for-dining-restaurants", "best-credit-card-for-emi-purchases", "best-credit-card-for-health-insurance-payment",
  "best-credit-card-for-high-income-earners", "best-credit-card-for-insurance-premium", "best-credit-card-for-lounge-access",
  "best-credit-card-for-movie-entertainment", "best-credit-card-for-rent-payment", "best-credit-card-for-students-india",
  "best-credit-card-for-upi-payments", "best-credit-card-for-women-india", "best-credit-card-under-500-annual-fee",
  "best-credit-card-with-no-forex-markup", "credit-card-for-amazon", "credit-card-for-flipkart", "credit-card-for-fuel",
  "credit-card-for-groceries", "credit-card-for-international-spending", "credit-card-for-online-shopping",
  "credit-card-for-swiggy-zomato", "credit-card-for-travel", "credit-card-for-utility-bills",
];

// New static compare pages
const STATIC_COMPARE_SLUGS = [
  "compare-aditya-birla-activ-vs-icici-lombard-complete", "compare-amex-platinum-travel-vs-hdfc-diners-privilege",
  "compare-flipkart-axis-vs-amazon-pay-icici", "compare-hdfc-click2protect-vs-icici-iprotect",
  "compare-hdfc-millennia-vs-axis-ace", "compare-hdfc-optima-secure-vs-niva-bupa-reassure",
  "compare-hdfc-regalia-vs-axis-magnus", "compare-icici-pru-baf-vs-hdfc-balanced-advantage",
  "compare-mirae-tax-saver-vs-sbi-long-term-equity", "compare-parag-parikh-flexi-cap-vs-axis-bluechip",
  "compare-quant-small-cap-vs-nippon-small-cap", "compare-sbi-cashback-vs-amazon-pay-icici",
  "compare-star-comprehensive-vs-care-supreme", "compare-tata-neu-plus-vs-amazon-pay-icici",
  "compare-uti-nifty50-vs-hdfc-nifty50-index",
];

export default function sitemap() {
  const base = "https://www.assurefintech.com";

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/cards`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },

    // Tools (5 original + 5 calculators)
    { url: `${base}/smart-swipe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/stack-builder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gap-finder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/swipe-check`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/loan-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fd-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tax-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/insurance-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sip-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

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

  // Card pages (dynamic from data)
  const cardPages = CARDS.map(card => ({
    url: `${base}/cards/${card.id}`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8,
  }));

  // Best-for pages — dynamic from data + new static pages (deduped)
  const dynamicBestFor = new Set(BEST_FOR_CATEGORIES.map(c => c.slug));
  const allBestForSlugs = [...new Set([...dynamicBestFor, ...STATIC_BESTFOR_SLUGS])];
  const bestForPages = allBestForSlugs.map(slug => ({
    url: `${base}/best/${slug}`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85,
  }));

  // Comparison pages — dynamic + new static (deduped)
  const dynamicCompare = new Set(COMPARISONS.map(c => c.slug));
  const allCompareSlugs = [...new Set([...dynamicCompare, ...STATIC_COMPARE_SLUGS])];
  const comparisonPages = allCompareSlugs.map(slug => ({
    url: `${base}/compare/${slug}`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8,
  }));

  // Blog pages — dynamic from data + new static (deduped)
  const dynamicBlog = new Set(BLOG_POSTS.map(p => p.id));
  const allBlogSlugs = [...new Set([...dynamicBlog, ...STATIC_BLOG_SLUGS])];
  const blogPages = allBlogSlugs.map(slug => ({
    url: `${base}/blog/${slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6,
  }));

  // Learn article pages
  const learnArticlePages = Object.entries(LEARN_ARTICLES).flatMap(([category, articles]) =>
    articles.map(slug => ({
      url: `${base}/learn/${category}/${slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75,
    }))
  );

  return [...staticPages, ...cardPages, ...bestForPages, ...comparisonPages, ...blogPages, ...learnArticlePages];
}
