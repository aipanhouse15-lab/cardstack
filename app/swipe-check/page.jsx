import SwipeCheckClient from "./SwipeCheckClient";

export const metadata = {
  title: "Swipe Check — Best Card for Every Merchant",
  description: "Pick where you're spending — Swiggy, Amazon, Zomato, or any merchant — and get the exact best card to use with pro tips.",
  alternates: { canonical: "/swipe-check" },
};

export default function SwipeCheckPage() {
  return <SwipeCheckClient />;
}
