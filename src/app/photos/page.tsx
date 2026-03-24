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
        title="The most beautiful moment in life."
        description="I like capturing photos on my digital camera that emphasize the weight of a place and a moment."
      />

      <PhotoStack photos={photoEntries} />
    </SitePage>
  );
}
