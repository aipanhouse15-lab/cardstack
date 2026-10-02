import TaxCalculatorClient from "./TaxCalculatorClient";

export const metadata = {
  title: "Old vs New Tax Calculator — Tax Year 2026–27 & AY 2026–27",
  description: "Compare salary tax under old and new regimes for Tax Year 2026–27 or AY 2026–27, including standard deduction, eligible claims, rebate, marginal relief and cess.",
  alternates: { canonical: "/tax-calculator" },
};

export default function TaxCalculatorPage() {
  return <TaxCalculatorClient />;
}
