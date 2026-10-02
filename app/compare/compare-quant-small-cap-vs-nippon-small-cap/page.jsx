import ProductComparison, { comparisonMetadata } from "@/components/ProductComparison";
export const metadata = comparisonMetadata("compare-quant-small-cap-vs-nippon-small-cap");
export default function Page() { return <ProductComparison slug="compare-quant-small-cap-vs-nippon-small-cap" />; }
