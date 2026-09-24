import CompareClient from "./CompareClient";

export const metadata = {
  title: "Compare Credit Cards — Head-to-Head",
  description: "Compare any two Indian credit cards side by side across 8 spending categories, fees, lounge access, and benefits.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return <CompareClient />;
}
