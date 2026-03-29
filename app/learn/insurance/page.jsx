import InsuranceClient from "./InsuranceClient";

export const metadata = {
  title: "Insurance — Your ₹10L Policy Actually Covers ₹4.2L",
  description: "Co-pay clauses, room rent sub-limits, disease waiting periods, and claim settlement ratios — we break down what your health insurance policy actually pays.",
};

export default function InsurancePage() {
  return <InsuranceClient />;
}
