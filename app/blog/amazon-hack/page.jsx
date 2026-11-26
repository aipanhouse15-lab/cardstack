import RecoveredArticle, { recoveredMetadata } from '@/components/RecoveredArticle';

export const metadata = recoveredMetadata('amazon-hack');

export default function Page() {
  return <RecoveredArticle slug="amazon-hack" />;
}
