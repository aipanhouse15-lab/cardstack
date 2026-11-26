import RecoveredArticle, { recoveredMetadata } from '@/components/RecoveredArticle';

export const metadata = recoveredMetadata('reward-points-vs-cashback');

export default function Page() {
  return <RecoveredArticle slug="reward-points-vs-cashback" />;
}
