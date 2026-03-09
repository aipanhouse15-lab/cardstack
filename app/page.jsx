import { CARDS } from "@/data/cards";
import { MONTHLY_UPDATES, DID_YOU_KNOW } from "@/data/content";
import SectionHeader from "@/components/SectionHeader";
import HomeClient from "@/components/HomeClient";

const FEATURED = CARDS.filter(c => ["hdfc-regalia","amazon-icici","au-lit","axis-ace","onecard","idfc-select"].includes(c.id));

export default function HomePage() {
  // Pick random tip server-side
  const tipIdx = Math.floor(Math.random() * DID_YOU_KNOW.length);
  const tip = DID_YOU_KNOW[tipIdx];

  return <HomeClient featured={FEATURED} updates={MONTHLY_UPDATES} tip={tip} />;
}
