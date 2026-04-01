export type SectionId = 'experience' | 'case-studies' | 'education-skills';

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
  summary: string;
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
  context: string;
  approach: string;
  outcome: string;
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
    summary: 'Role history with contributions and skill signals.',
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    summary: 'Selected project snapshots with context, approach, and outcome.',
  },
  {
    id: 'education-skills',
    label: 'Education & Skills',
    summary: 'Degree details, certifications, and skills.',
  },
];

export const resumeHero = {
  eyebrow: 'Resume',
  title: 'Bella Lee',
  role: 'Technical Consultant / Product-Focused Analyst',
  summary:
    'I like work that turns chaos into organized systems, especially where technology, product thinking, and communication all need to stay connected.',
};

export const experienceItems: ExperienceItem[] = [
  {
    id: 'west-monroe-consultant',
    company: 'West Monroe',
    location: 'Seattle, WA',
    role: 'Technology Consultant',
    period: 'Sep. 2025 - Present',
    summary:
      'Support consulting work across product requirements, AI workflow planning, and delivery coordination for client engagements.',
    contributions: ['Coming soon'],
    skills: [
      'Salesforce',
      'AI enablement',
      'product management',
      'management consulting',
    ],
  },
  {
    id: 'uw-it',
    company: 'UW Information Technology',
    location: 'Seattle, WA',
    role: 'Brand Strategy & Marketing Analyst',
    period: 'Oct. 2023 - Jun. 2024; Aug. 2024 - Jun. 2025',
    summary:
      'Supported communications and web content work with a focus on structure, reporting, and day-to-day workflow improvement.',
    contributions: [
      'Led initiative to integrate UW-IT’s LinkedIn into the broader communications ecosystem by standardizing team workflows',
      'Reorganized information architecture and content across 100+ WordPress pages using stakeholder input and analytics to improve accessibility, navigation, and engagement',
      'Analyzed digital engagement metrics to produce monthly reports that informed content prioritization and communications planning',
    ],
    skills: ['information architecture', 'data analysis', 'marketing'],
  },
  {
    id: 'smirk-president',
    company: 'Smirk UW',
    location: 'Seattle, WA',
    role: 'President',
    period: 'May 2023 - Nov. 2024',
    summary:
      'Led student organization operations across governance, campaigns, and team coordination while helping formalize how the group worked.',
    contributions: [
      'Wrote governance framework and bylaws enabling leadership succession and scalable operations for a 7-person organization',
      'Directed data-informed campaigns that generated $4,750/year in ad revenue and increased engagement by 15%',
      'Led cross-functional team overseeing content and design operations using structured agendas, documentation, and role clarity',
      'Designed campaign visuals and digital content for Instagram, contributing to measurable engagement growth',
      'Established design standards and workflows that improved consistency and execution across the team',
    ],
    skills: ['leadership', 'marketing'],
  },
  {
    id: 'west-monroe-intern',
    company: 'West Monroe',
    location: 'Seattle, WA',
    role: 'Technology Consulting Intern',
    period: 'Jun. 2024 - Aug. 2024',
    summary:
      'Built onboarding materials and Salesforce workflow improvements in a financial services consulting environment.',
    contributions: [
      'Created 7 job aids by synthesizing documentation and UAT insights, improving onboarding clarity and reducing support overhead',
      'Built Salesforce automations for private-bank onboarding and servicing workflows using Flows, OmniStudio, OmniScripts, LWC, object customization, and Experience Cloud to improve process consistency',
    ],
    skills: ['Salesforce', 'management consulting'],
  },
  {
    id: 'seal-lab',
    company: 'Sensors, Energy, and Automation Laboratory',
    location: 'Seattle, WA',
    role: 'Web Development Team Lead & UX Designer',
    period: 'Feb. 2022 - Aug. 2022',
    summary:
      'Managed student web work while contributing UX research and design recommendations for a healthcare-focused project.',
    contributions: [
      'Managed an 8-person student team to design, develop, and maintain the SEAL Lab and Industrial Assessment Center websites',
      'Designed and conducted UX usability tests for a machine learning wound management system, synthesizing findings into design recommendations',
    ],
    skills: ['web development', 'leadership'],
  },
  {
    id: 'freelance-illustrator',
    company: 'Independent Business',
    location: 'Seattle, WA',
    role: 'Freelance Illustrator',
    period: 'Feb. 2022 - Sep. 2025',
    summary:
      'Ran an independent illustration business covering creative work, marketing, and basic business operations.',
    contributions: [
      'Operate an independent digital illustration business managing product creation, marketing, and financial operations end-to-end',
      'Analyzed engagement and revenue data to forecast demand and optimize product mix, reaching up to 100K impressions per post with 15% engagement rate',
    ],
    skills: ['marketing', 'financial operations', 'data analysis'],
  },
];

export const experienceSkillFilters = Array.from(
  new Set(experienceItems.flatMap((item) => item.skills)),
).sort();

export const caseStudies: CaseStudyItem[] = [
  {
    title: 'Personal Website',
    context:
      'Wanted a portfolio that could balance expressive design with scalable architecture instead of choosing between personality and maintainability.',
    approach:
      'Built it with Next.js App Router and MDX, separating content from route composition and layering in hand-drawn visuals from my sketchbook.',
    outcome:
      'A portfolio that feels distinctly mine while staying easy to extend with new case studies and content.',
    href: '/projects/personal-website',
  },
];

export const educationItems: EducationItem[] = [
  {
    title: 'BS in Informatics',
    institution: 'University of Washington, Seattle, WA',
    period: 'Sep. 2021 - Jun. 2025',
    detail:
      'Studied user-centered design principles, user experience research methods, software development, product and information system management, and data analysis and visualization.',
  },
  {
    title: 'Certifications',
    institution: '',
    period: '',
    detail:
      'Salesforce Certified Platform Admnistrator, Salesforce Certified Agentforce Specialist',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Technical',
    items: [
      'SQL',
      'Python',
      'R',
      'JavaScript',
      'HTML/CSS',
      'React',
      'Node.js',
      'D3.js',
      'Java',
    ],
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
