import StackBuilderClient from "./StackBuilderClient";

export const metadata = {
  title: "Stack Builder — Find Your Perfect Card Combo | CardStack",
  description: "Enter your spending and we'll find the optimal 2 or 3 credit card combination that maximizes your total cashback. Cap-aware calculations. No Indian site does this.",
};

export default function StackBuilderPage() {
  return <StackBuilderClient />;
}
