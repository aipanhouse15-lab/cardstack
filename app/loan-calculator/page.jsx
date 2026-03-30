import LoanCalculatorClient from "./LoanCalculatorClient";

export const metadata = {
  title: "Loan Truth Calculator — Your Honest EMI & APR | Assure Fintech",
  description: "Input your home loan, personal loan, or education loan details. Get the honest effective APR after processing fees, insurance, and hidden charges.",
};

export default function LoanCalculatorPage() {
  return <LoanCalculatorClient />;
}
