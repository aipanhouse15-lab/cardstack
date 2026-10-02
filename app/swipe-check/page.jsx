import SwipeCheckClient from "./SwipeCheckClient";

export const metadata = {
  title: "Swipe Check — Compare Cards by Merchant and Payment Route",
  description: "Compare credit-card options for shopping, dining, travel and bills. See eligible payment routes, reward caps and redemption rules before choosing a card.",
  alternates: { canonical: "/swipe-check" },
};

export default function SwipeCheckPage() {
  return <SwipeCheckClient />;
}
