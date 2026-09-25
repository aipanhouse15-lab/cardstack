import LoanCalculatorClient from "./LoanCalculatorClient";

export const metadata = {
  title: "Loan Repayment & Cost Calculator | Assure Fintech",
  description: "Estimate loan EMIs and the effect of hypothetical upfront fees. Calculator results are illustrations, not lender quotations or regulatory APR disclosures.",
  alternates: { canonical: "/loan-calculator" },
};

export default function LoanCalculatorPage() {
  return <LoanCalculatorClient />;
}
