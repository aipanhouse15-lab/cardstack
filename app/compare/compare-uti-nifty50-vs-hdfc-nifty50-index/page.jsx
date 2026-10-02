import ProductComparison, { comparisonMetadata } from "@/components/ProductComparison";
export const metadata = comparisonMetadata("compare-uti-nifty50-vs-hdfc-nifty50-index");
export default function Page() { return <ProductComparison slug="compare-uti-nifty50-vs-hdfc-nifty50-index" />; }
