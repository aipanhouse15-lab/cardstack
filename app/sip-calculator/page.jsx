import SipCalcClient from "./SipCalcClient";

export const metadata = {
  title: "SIP Calculator",
  description: "The Numbers Your AMC Won't Show You Fund fact sheets advertise CAGR — but your real return is lower. A fund with 15% CAGR and 1.5% expense...",
  alternates: { canonical: "/sip-calculator" },
  openGraph: {
    title: "SIP Calculator",
    description: "The Numbers Your AMC Won't Show You Fund fact sheets advertise CAGR — but your real return is lower. A fund with 15% CAGR and 1.5% expense...",
    type: "website",
    siteName: "Assure Fintech",
  },
};

export default function SipCalcPage() {
  return <SipCalcClient />;
}
