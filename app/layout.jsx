import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://www.assurefintech.com"),
  title: {
    default: "Assure Fintech — The Honest Number on Every Financial Product",
    template: "%s | Assure Fintech",
  },
  description: "Banks advertise one number. You take home another. Assure Fintech shows you the honest number on credit cards, loans, insurance, and savings. 75+ cards, real math, zero tracking.",
  keywords: [
    "credit card comparison India", "best credit card India 2026", "credit card rewards optimizer",
    "which credit card to use", "Assure Fintech", "honest number fintech",
    "home loan true cost India", "health insurance effective coverage",
    "FD real return after tax", "loan truth calculator India",
    "credit card cashback after caps", "financial truth platform India",
  ],
  openGraph: {
    title: "Assure Fintech — The Honest Number on Every Financial Product",
    description: "Banks advertise one number. You take home another. We calculate the gap — across credit cards, loans, insurance, and savings.",
    type: "website",
    locale: "en_IN",
    siteName: "Assure Fintech",
    url: "https://www.assurefintech.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Assure Fintech — The Honest Number on Every Financial Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assure Fintech — The Honest Number on Every Financial Product",
    description: "Banks advertise one number. You take home another. We calculate the gap.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Assure Fintech",
    description: "India's financial truth platform. We show you the honest number on every financial product — credit cards, loans, insurance, and savings. Cap-adjusted math, verified data, zero tracking.",
    url: "https://www.assurefintech.com",
    foundingDate: "2026",
    areaServed: { "@type": "Country", name: "India" },
    sameAs: [],
    knowsAbout: [
      "Credit Cards", "Credit Card Rewards", "Cashback", "Indian Banking",
      "HDFC Credit Cards", "SBI Credit Cards", "ICICI Credit Cards", "Axis Credit Cards",
      "Credit Card Comparison", "Reward Optimization",
      "Home Loans", "Personal Loans", "Loan Interest Rates", "Effective APR",
      "Health Insurance", "Term Insurance", "Claim Settlement Ratio",
      "Fixed Deposits", "PPF", "Tax Planning", "Mutual Funds",
      "Financial Literacy India", "Honest Financial Advice",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Assure Fintech",
    url: "https://www.assurefintech.com",
    description: "The honest number on every financial product in India. Compare credit cards, loans, insurance, and savings with real math — not advertised rates.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.assurefintech.com/compare?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PHSZXX204P" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-PHSZXX204P');` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
