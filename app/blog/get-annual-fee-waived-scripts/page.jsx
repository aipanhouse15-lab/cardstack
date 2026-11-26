import RecoveredArticle, { recoveredMetadata } from '@/components/RecoveredArticle';

export const metadata = recoveredMetadata('get-annual-fee-waived-scripts');

export default function Page() {
  return <RecoveredArticle slug="get-annual-fee-waived-scripts" />;
}
