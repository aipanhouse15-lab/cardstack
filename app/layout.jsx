import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: {
    default: "CardStack — India's Smartest Credit Card Tool",
    template: "%s | CardStack",
  },
  description: "Stop leaving rewards on the table. CardStack tells you exactly which credit card to swipe for every purchase. 25+ Indian cards, real savings math, zero tracking.",
  keywords: ["credit card comparison India", "best credit card India 2026", "credit card rewards optimizer", "which credit card to use", "CardStack"],
  openGraph: {
    title: "CardStack — India's Smartest Credit Card Tool",
    description: "Tell us which cards you have. We'll tell you exactly which one to swipe — for every purchase, every time.",
    type: "website",
    locale: "en_IN",
    siteName: "CardStack",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
