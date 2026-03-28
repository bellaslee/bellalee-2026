import type { Metadata } from 'next';
import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';
import { ArtGallery } from './_components/art-gallery';
import { artEntries } from './art.content';

export const metadata: Metadata = {
  title: 'Art | Bella Lee',
  description:
    'A gallery of illustration and portrait studies, arranged as a quiet archive of recent work.',
};

export default function ArtPage() {
  return (
    <SitePage footerClassName="mt-8">
      <PageIntro
        eyebrow="Artwork"
        title="A gallery of character studies and portraits."
        description="A collection of drawings and paintings I want to keep together in one place, ordered by when they were made."
      />

      <ArtGallery art={artEntries} />
    </SitePage>
  );
}
