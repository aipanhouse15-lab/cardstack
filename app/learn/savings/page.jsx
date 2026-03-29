import SavingsClient from "./SavingsClient";

export const metadata = {
  title: "Savings & FDs — Your 7.5% FD Returns 0.15% After Tax & Inflation",
  description: "Banks advertise 7.5% FD rates. After TDS and inflation, your real return is nearly zero. We show you the honest number on every savings product.",
};

export default function SavingsPage() {
  return <SavingsClient />;
}
