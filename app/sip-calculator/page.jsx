import SipCalcClient from "./SipCalcClient";

export const metadata = {
  title: "SIP Calculator",
  description: "Model hypothetical SIP or lump-sum growth using effective annual returns and inflation-adjusted purchasing power. Before tax and exit loads.",
  alternates: { canonical: "/sip-calculator" },
  openGraph: {
    title: "SIP Calculator",
    description: "Explore hypothetical investment growth and purchasing power. Returns are assumptions, not forecasts.",
    type: "website",
    siteName: "Assure Fintech",
  },
};

export default function SipCalcPage() {
  return <SipCalcClient />;
}
