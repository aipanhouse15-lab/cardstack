import EditorialCardComparison, { cardComparisonMetadata } from "@/components/EditorialCardComparison";
const ids=["sbi-cashback","amazon-icici"];
export const metadata=cardComparisonMetadata("compare-sbi-cashback-vs-amazon-pay-icici",ids);
export default function Page() {return <EditorialCardComparison slug="compare-sbi-cashback-vs-amazon-pay-icici" ids={ids} decision="For Amazon-heavy spending, membership and eligible purchase type matter. For broad online shopping, examine SBI's statement-cycle cap and excluded merchant categories. Compare annual net value after the SBI fee, not just the same headline percentage." />;}
