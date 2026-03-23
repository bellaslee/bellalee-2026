import type { Metadata } from 'next';
import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';
import { PhotoStack } from './_components/photo-stack';
import { photoEntries } from './photos.content';

export const metadata: Metadata = {
  title: 'Photos | Bella Lee',
  description:
    'A scrollable photo diary of landscape-oriented frames, arranged as a quiet overlapping stack.',
};

export default function PhotosPage() {
  return (
    <SitePage footerClassName="mt-8">
      <PageIntro
        eyebrow="Photo Diary"
        title="Landscape frames arranged like pages in a moving stack."
        description="A quiet place for photographs that are mostly composed in a 16:9 landscape format. As you move down the page, each image settles over the last one instead of filing away into a standard grid."
        asideEyebrow="Format"
        asideDescription="Built for local images and minimal notes, with room to swap in future photographs without changing the component structure."
      />

      <PhotoStack photos={photoEntries} />
    </SitePage>
  );
}
