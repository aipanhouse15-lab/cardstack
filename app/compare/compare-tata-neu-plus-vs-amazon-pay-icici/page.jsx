import EditorialCardComparison, { cardComparisonMetadata } from "@/components/EditorialCardComparison";
const ids=["hdfc-tata-neu-plus","amazon-icici"];
export const metadata=cardComparisonMetadata("compare-tata-neu-plus-vs-amazon-pay-icici",ids);
export default function Page() {return <EditorialCardComparison slug="compare-tata-neu-plus-vs-amazon-pay-icici" ids={ids} decision="NeuCoins inside a retail ecosystem and Amazon Pay balance have different usage constraints. For UPI, identify the RuPay variant and the eligible payment channel; owning a RuPay card alone does not guarantee a promoted rate on every UPI transaction." />;}
