import { type SectionId } from '@/content/resume';
import { ResumeCaseStudiesSection } from './resume-case-studies-section';
import { ResumeEducationSection } from './resume-education-section';
import { ResumeExperienceSection } from './resume-experience-section';

export function ResumeSectionContent({
  activeSection,
}: {
  activeSection: SectionId;
}) {
  if (activeSection === 'experience') {
    return <ResumeExperienceSection />;
  }

  if (activeSection === 'case-studies') {
    return <ResumeCaseStudiesSection />;
  }

  return <ResumeEducationSection />;
}
