export type SectionId =
  | 'experience'
  | 'case-studies'
  | 'education-skills';

export type NavItem = {
  id: SectionId;
  label: string;
  summary: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  contributions: string[];
  skills: string[];
  caseStudyHref?: string;
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  detail?: string;
};

export type CaseStudyItem = {
  title: string;
  problem: string;
  constraints: string;
  role: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const navItems: NavItem[] = [
  {
    id: 'experience',
    label: 'Experience',
    summary: 'Role history with exact contribution bullets and skill signals.',
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    summary: 'Selected project snapshots with framing, constraints, and role.',
  },
  {
    id: 'education-skills',
    label: 'Education & Skills',
    summary: 'Degree details, relevant coursework, and resume skill categories.',
  },
];

export const resumeHero = {
  title: 'Bella Lee',
  location: 'Seattle, WA 98105',
  contactLine: '(206) 802-5518 | bella@bellalee.com',
  linkLabel: 'linkedin.com/in/bellasylee',
  linkHref: 'https://linkedin.com/in/bellasylee',
  role: 'Product-focused analyst',
  summary:
    'Product-focused analyst experienced in requirements definition, workflow optimization, and system implementation. Skilled at translating business needs into executable documentation and process improvements that improve delivery clarity.',
};

export const experienceItems: ExperienceItem[] = [
  {
    id: 'west-monroe-consultant',
    company: 'West Monroe',
    location: 'Seattle, WA',
    role: 'Technology Consultant',
    period: 'Sep. 2025 - Present',
    contributions: [
      'Author 100+ product and system requirements that determine roadmap scope, engineering estimates, and release sequencing for post-merger legal CRM vendor selection and implementation',
      'Define financial services use cases for Agentforce, translate business requirements into AI workflows, and own product documentation to support go-to-market AI enablement strategy, reducing deployment time by 25%',
      'Produce executive decision decks and reports that drive approval of vendor selection, roadmap, and process decisions',
      'Maintain backlogs, delivery plans, and RAID logs, improving deliverable turnaround time by 10% across the engagement team',
    ],
    skills: [
      'Salesforce',
      'AI enablement',
      'product management',
      'management consulting'
    ],
  },
  {
    id: 'uw-it',
    company: 'UW Information Technology',
    location: 'Seattle, WA',
    role: 'Brand Strategy & Marketing Analyst',
    period: 'Oct. 2023 - Jun. 2024; Aug. 2024 - Jun. 2025',
    contributions: [
      'Led initiative to integrate UW-IT’s LinkedIn into the broader communications ecosystem by standardizing team workflows',
      'Reorganized information architecture and content across 100+ WordPress pages using stakeholder input and analytics to improve accessibility, navigation, and engagement',
      'Analyzed digital engagement metrics to produce monthly reports that informed content prioritization and communications planning',
    ],
    skills: [
      'information architecture',
      'data analysis',
    ],
  },
  {
    id: 'smirk-president',
    company: 'Smirk UW',
    location: 'Seattle, WA',
    role: 'President',
    period: 'May 2023 - Nov. 2024',
    contributions: [
      'Wrote governance framework and bylaws enabling leadership succession and scalable operations for a 7-person organization',
      'Directed data-informed campaigns that generated $4,750/year in ad revenue and increased engagement by 15%',
      'Led cross-functional team overseeing content and design operations using structured agendas, documentation, and role clarity',
      'Designed campaign visuals and digital content for Instagram, contributing to measurable engagement growth',
      'Established design standards and workflows that improved consistency and execution across the team',
    ],
    skills: [
      'leadership'
    ],
  },
  {
    id: 'west-monroe-intern',
    company: 'West Monroe',
    location: 'Seattle, WA',
    role: 'Technology Consulting Intern',
    period: 'Jun. 2024 - Aug. 2024',
    contributions: [
      'Created 7 job aids by synthesizing documentation and UAT insights, improving onboarding clarity and reducing support overhead',
      'Built Salesforce automations for private-bank onboarding and servicing workflows using Flows, OmniStudio, OmniScripts, LWC, object customization, and Experience Cloud to improve process consistency',
    ],
    skills: [
      'Salesforce',
      'management consulting'
    ],
  },
  {
    id: 'seal-lab',
    company: 'Sensors, Energy, and Automation Laboratory',
    location: 'Seattle, WA',
    role: 'Web Development Team Lead & UX Designer',
    period: 'Feb. 2022 - Aug. 2022',
    contributions: [
      'Managed an 8-person student team to design, develop, and maintain the SEAL Lab and Industrial Assessment Center websites',
      'Designed and conducted UX usability tests for a machine learning wound management system, synthesizing findings into design recommendations',
    ],
    skills: [
      'web development',
      'leadership'
    ],
  },
  {
    id: 'freelance-illustrator',
    company: 'Independent Business',
    location: 'Seattle, WA',
    role: 'Freelance Illustrator',
    period: 'Feb. 2022 - Sep. 2025',
    contributions: [
      'Operate an independent digital illustration business managing product creation, marketing, and financial operations end-to-end',
      'Analyzed engagement and revenue data to forecast demand and optimize product mix, reaching up to 100K impressions per post with 15% engagement rate',
    ],
    skills: [
      'marketing',
      'financial operations',
      'data analysis'
    ],
  },
];

export const experienceSkillFilters = Array.from(
  new Set(experienceItems.flatMap((item) => item.skills)),
).sort();

export const caseStudies: CaseStudyItem[] = [
  {
    title: 'Interactive Resume Experience',
    problem:
      'Present resume material in a format that reveals thought process instead of flattening everything into a PDF.',
    constraints:
      'Needed to stay concise, visually calm, and structured enough to support quick scanning.',
    role: 'Owned the information architecture, interaction model, and presentation choices.',
    href: '/resume',
  },
  {
    title: 'Learning Roadmap System',
    problem:
      'Connect long-term learning goals to visible milestones so growth areas do not stay vague or aspirational.',
    constraints:
      'The structure had to support multiple parallel tracks without turning into a backlog graveyard.',
    role: 'Defined the planning structure and tied it to concrete career themes like architecture and platform fluency.',
    href: '/roadmap',
  },
];

export const educationItems: EducationItem[] = [
  {
    title: 'BS in Informatics',
    institution: 'University of Washington, Seattle, WA',
    period: 'Sep. 2021 - Jun. 2025',
  },
  {
    title: 'Relevant Coursework',
    institution: 'University of Washington',
    period: '',
    detail:
      'Product and Information System Management, Design Methods, Research Methods, Web Development, Data Structures and Algorithms, Database Systems, Human-Computer Interaction, Machine Learning Concepts',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Technical',
    items: ['SQL', 'Python', 'R', 'JavaScript', 'HTML/CSS', 'React', 'Node.js', 'D3.js', 'Java'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Salesforce', 'Hubspot', 'Power BI', 'Tableau', 'Excel', 'Figma'],
  },
  {
    title: 'Business & Strategy',
    items: [
      'Product Requirements & Prioritization',
      'Vendor & Product Research',
      'Data Analysis',
      'Process Analysis',
      'Product Analytics',
      'UX Research & Design',
      'AI Enablement',
    ],
  },
];
