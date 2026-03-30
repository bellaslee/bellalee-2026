import type { Metadata } from 'next';
import {
  photoEntries,
  photosPageIntro,
  photosPageMetadata,
} from '@/content/photos';
import { PageIntro } from '../_components/page-intro';
import { SitePage } from '../_components/site-page';
import { PhotoStack } from './_components/photo-stack';

export const metadata: Metadata = photosPageMetadata;

export default function PhotosPage() {
  return (
    <SitePage footerClassName="mt-8" showDoodles={false}>
      <PageIntro
        eyebrow={photosPageIntro.eyebrow}
        title={photosPageIntro.title}
        description={photosPageIntro.description}
      />

      <PhotoStack photos={photoEntries} />
    </SitePage>
  );
}
