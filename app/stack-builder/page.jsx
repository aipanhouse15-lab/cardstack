import StackBuilderClient from "./StackBuilderClient";

export const metadata = {
  title: "Stack Builder — Find Your Perfect Card Combo",
  description: "Enter your spending and we'll find the optimal 2 or 3 credit card combination that maximizes your total cashback. Cap-aware calculations. No Indian site does this.",
  alternates: { canonical: "/stack-builder" },
};

export default function StackBuilderPage() {
  return <StackBuilderClient />;
}
