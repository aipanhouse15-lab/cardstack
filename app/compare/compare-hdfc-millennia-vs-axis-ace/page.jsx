import EditorialCardComparison, { cardComparisonMetadata } from "@/components/EditorialCardComparison";
const ids=["hdfc-millennia","axis-ace"];
export const metadata=cardComparisonMetadata("compare-hdfc-millennia-vs-axis-ace",ids);
export default function Page() {return <EditorialCardComparison slug="compare-hdfc-millennia-vs-axis-ace" ids={ids} decision="Millennia's named merchant and reward buckets are not a universal online-shopping rate. ACE's bill-payment and accelerated routes are also conditional. Identify the transaction channel and monthly cap before shifting all online or utility spending to either card." />;}
