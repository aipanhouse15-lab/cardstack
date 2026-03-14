import { CARDS } from "@/data/cards";
import { BLOG_POSTS } from "@/data/content";
import { BEST_FOR_CATEGORIES } from "@/data/bestfor";

export default function sitemap() {
  const base = "https://assurefintech.com";

  // Static pages
  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/cards`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/smart-swipe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/stack-builder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gap-finder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/swipe-check`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/how-we-earn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/editorial-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
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

  // Blog pages
  const blogPages = BLOG_POSTS.map(post => ({
    url: `${base}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...cardPages, ...bestForPages, ...blogPages];
}
