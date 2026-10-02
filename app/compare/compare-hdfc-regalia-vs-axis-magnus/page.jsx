import EditorialCardComparison, { cardComparisonMetadata } from "@/components/EditorialCardComparison";
const ids=["hdfc-regalia","axis-magnus"];
export const metadata=cardComparisonMetadata("compare-hdfc-regalia-vs-axis-magnus",ids);
export default function Page() {return <EditorialCardComparison slug="compare-hdfc-regalia-vs-axis-magnus" ids={ids} decision="Premium travel value depends on redemption and the benefits you actually use. Compare renewal cost, transfer partners and reward eligibility separately. Lounge visits or points transferred to a program you never use should not justify a higher fee in the baseline." />;}
