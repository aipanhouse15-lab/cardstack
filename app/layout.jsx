import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: {
    default: "Assure Fintech — India's Smartest Credit Card Tool",
    template: "%s | Assure Fintech",
  },
  description: "Stop leaving rewards on the table. Assure Fintech tells you exactly which credit card to swipe for every purchase. 25+ Indian cards, real savings math, zero tracking.",
  keywords: ["credit card comparison India", "best credit card India 2026", "credit card rewards optimizer", "which credit card to use", "Assure Fintech"],
  openGraph: {
    title: "Assure Fintech — India's Smartest Credit Card Tool",
    description: "Tell us which cards you have. We'll tell you exactly which one to swipe — for every purchase, every time.",
    type: "website",
    locale: "en_IN",
    siteName: "Assure Fintech",
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
    description: "India's smartest credit card optimization tool. Compare 25+ Indian credit cards, find the best card for every purchase, and maximize your rewards.",
    url: "https://assurefintech.com",
    foundingDate: "2026",
    areaServed: { "@type": "Country", name: "India" },
    sameAs: [],
    knowsAbout: [
      "Credit Cards", "Credit Card Rewards", "Cashback", "Indian Banking",
      "HDFC Credit Cards", "SBI Credit Cards", "ICICI Credit Cards", "Axis Credit Cards",
      "Credit Card Comparison", "Reward Optimization"
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Assure Fintech",
    url: "https://assurefintech.com",
    description: "Compare 25+ Indian credit cards. Find the best card for every purchase with real savings math.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://assurefintech.com/compare?q={search_term_string}",
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
      </body>
    </html>
  );
}
