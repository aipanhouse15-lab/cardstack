import RecoveredArticle, { recoveredMetadata } from '@/components/RecoveredArticle';

export const metadata = recoveredMetadata('first-card-decision-framework');

export default function Page() {
  return <RecoveredArticle slug="first-card-decision-framework" />;
}
