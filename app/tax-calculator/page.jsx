import TaxCalculatorClient from "./TaxCalculatorClient";

export const metadata = {
  title: "Old vs New Tax Regime Calculator — Indicative Estimate",
  description: "Compare an indicative old- and new-regime tax estimate. The result is simplified; verify current tax-year rules and eligibility with official guidance before filing.",
  alternates: { canonical: "/tax-calculator" },
};

export default function TaxCalculatorPage() {
  return <TaxCalculatorClient />;
}
