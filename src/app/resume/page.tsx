import { SitePage } from '../_components/site-page';
import { ResumeBrowser } from './_components/resume-browser';
import { ResumeHero } from './_components/resume-hero';

export default function ResumePage() {
  return (
    <SitePage footerClassName="mt-auto">
      <ResumeHero />
      <ResumeBrowser />
    </SitePage>
  );
}
