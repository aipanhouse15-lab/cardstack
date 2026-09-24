import FDCalculatorClient from "./FDCalculatorClient";

export const metadata = {
  title: "FD Real Return Calculator — Post-Tax, Post-Inflation",
  description: "Your 7.5% FD returns 0.15% after TDS and inflation. Enter your FD rate, tax bracket, and tenure to see your real return.",
  alternates: { canonical: "/fd-calculator" },
};

export default function FDCalculatorPage() {
  return <FDCalculatorClient />;
}
