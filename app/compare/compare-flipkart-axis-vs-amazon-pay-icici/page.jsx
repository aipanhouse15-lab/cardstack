import EditorialCardComparison, { cardComparisonMetadata } from "@/components/EditorialCardComparison";
const ids=["axis-flipkart","amazon-icici"];
export const metadata=cardComparisonMetadata("compare-flipkart-axis-vs-amazon-pay-icici",ids);
export default function Page() {return <EditorialCardComparison slug="compare-flipkart-axis-vs-amazon-pay-icici" ids={ids} decision="Your actual marketplace split matters more than a headline rate. Amazon membership, the type of purchase and the Flipkart reward form can change the comparison. Refunds, excluded transactions and expiry conditions must be included before calling a voucher or platform reward equivalent to cash." />;}
