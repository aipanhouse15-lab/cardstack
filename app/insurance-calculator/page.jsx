import InsuranceCalculatorClient from "./InsuranceCalculatorClient";

export const metadata = {
  title: "Insurance Coverage Calculator — What Your Policy Actually Pays | Assure Fintech",
  description: "Enter your health insurance details. See your effective coverage after co-pay, room rent sub-limits, disease caps, and waiting periods.",
};

export default function InsuranceCalculatorPage() {
  return <InsuranceCalculatorClient />;
}
