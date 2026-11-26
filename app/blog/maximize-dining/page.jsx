import RecoveredArticle, { recoveredMetadata } from '@/components/RecoveredArticle';

export const metadata = recoveredMetadata('maximize-dining');

export default function Page() {
  return <RecoveredArticle slug="maximize-dining" />;
}
