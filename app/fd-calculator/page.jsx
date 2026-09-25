import FDCalculatorClient from "./FDCalculatorClient";

export const metadata = {
  title: "FD Real Return Calculator — Post-Tax, Post-Inflation",
  description: "Estimate a fixed deposit's post-tax and inflation-adjusted return using your assumptions. Tax liability and bank TDS are different; verify applicable tax-year rules.",
  alternates: { canonical: "/fd-calculator" },
};

export default function FDCalculatorPage() {
  return <FDCalculatorClient />;
}
