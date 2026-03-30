import TaxCalculatorClient from "./TaxCalculatorClient";

export const metadata = {
  title: "Tax Regime Calculator — Old vs New, Which Saves More? | Assure Fintech",
  description: "Enter your salary and deductions. See exactly how much you save under old vs new tax regime. Breakeven analysis included.",
};

export default function TaxCalculatorPage() {
  return <TaxCalculatorClient />;
}
