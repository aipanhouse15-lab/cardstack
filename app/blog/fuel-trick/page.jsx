import RecoveredArticle, { recoveredMetadata } from '@/components/RecoveredArticle';

export const metadata = recoveredMetadata('fuel-trick');

export default function Page() {
  return <RecoveredArticle slug="fuel-trick" />;
}
