import LoansClient from "./LoansClient";

export const metadata = {
  title: "Loans — The True Cost Banks Don't Show You",
  description: "Your 8.5% home loan actually costs 9.35% after processing fees, mandatory insurance, prepayment lock-in, and documentation charges. We calculate the honest number on every loan.",
};

export default function LoansPage() {
  return <LoansClient />;
}
