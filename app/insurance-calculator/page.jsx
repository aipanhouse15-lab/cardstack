import InsuranceCalculatorClient from "./InsuranceCalculatorClient";

export const metadata = {
  title: "Insurance Coverage Calculator — What Your Policy Actually Pays",
  description: "Enter your health insurance details. See your effective coverage after co-pay, room rent sub-limits, disease caps, and waiting periods.",
  alternates: { canonical: "/insurance-calculator" },
};

export default function InsuranceCalculatorPage() {
  return <InsuranceCalculatorClient />;
}
