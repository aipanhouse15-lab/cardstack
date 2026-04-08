import MutualFundsClient from "./MutualFundsClient";

export const metadata = {
  title: "Mutual Funds — Your 15% CAGR Fund Gives You 11.8% After Charges",
  description: "Expense ratios, exit loads, and LTCG tax silently eat your mutual fund returns. We show you the net investor return — the number fund houses don't advertise.",
  alternates: { canonical: "/learn/mutual-funds" },
};

export default function MutualFundsPage() {
  return <MutualFundsClient />;
}
