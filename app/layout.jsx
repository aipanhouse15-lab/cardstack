import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.assurefintech.com"),
  title: {
    default: "Assure Fintech — The Honest Number on Every Financial Product",
    template: "%s | Assure Fintech",
  },
  description: "Banks advertise one number. You take home another. Assure Fintech calculates cap-adjusted effective rates for credit cards, loans, insurance, FDs, and taxes....",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Assure Fintech",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@assurefintech",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-PHSZXX204P`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());gtag('config','G-PHSZXX204P');
        `}</Script>
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
