import type { Metadata } from 'next';
import { artEntries, artPageIntro, artPageMetadata } from '@/content/art';
import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';
import { ArtGallery } from './_components/art-gallery';

export const metadata: Metadata = artPageMetadata;

export default function ArtPage() {
  return (
    <SitePage footerClassName="mt-8">
      <PageIntro
        eyebrow={artPageIntro.eyebrow}
        title={artPageIntro.title}
        description={artPageIntro.description}
      />

      <ArtGallery art={artEntries} />
    </SitePage>
  );
}
