export type SectionId =
  | 'overview'
  | 'experience'
  | 'case-studies'
  | 'skills'
  | 'writing'
  | 'education-certifications';

export type NavItem = {
  id: SectionId;
  label: string;
  summary: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  scope: string;
  context: string[];
  responsibilities: string[];
  impact: string[];
  capabilities: string[];
  caseStudyHref: string;
};

export const navItems: NavItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    summary: 'Positioning, strengths, and current focus.',
  },
  {
    id: 'experience',
    label: 'Experience',
    summary: 'Expandable role cards with impact and capability signals.',
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    summary: 'Problem framing, tradeoffs, and delivery examples.',
  },
  {
    id: 'skills',
    label: 'Skills',
    summary: 'Clustered strengths across technical and collaborative work.',
  },
  {
    id: 'writing',
    label: 'Writing / Notes',
    summary: 'Reflective writing and ongoing technical thinking.',
  },
  {
    id: 'education-certifications',
    label: 'Education & Certifications',
    summary: 'Academic background and structured learning milestones.',
  },
];

export const overviewStats = [
  {
    label: 'Years in consulting-adjacent work',
    value: '3',
  },
  {
    label: 'Core domains',
    value: 'Platform enablement, system architecture, product management',
  },
  {
    label: 'Current learning focus',
    value: 'Architecture, Salesforce, AI workflows',
  },
];

export const keyStrengths = [
  'System design thinking',
  'Stakeholder communication',
  'Ambiguity navigation',
  'Rapid onboarding',
  'Clear technical storytelling',
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'west-monroe-consultant',
    company: 'West Monroe',
    role: 'Technology Consultant',
    period: 'Sep. 2025 - Present',
    scope:
      'Drive product definition, roadmap shaping, AI workflow design, and executive decision support across consulting engagements in legal and financial services contexts.',
    context: [
      'Supporting post-merger legal CRM vendor selection and implementation work where product, systems, and operational decisions are tightly connected.',
      'Working across business stakeholders, delivery teams, and go-to-market priorities in environments that require both strategic clarity and execution detail.',
    ],
    responsibilities: [
      'Author 100+ product and system requirements that determine roadmap scope, engineering estimates, and release sequencing.',
      'Define financial services use cases for Agentforce, translate business requirements into AI workflows, and own supporting product documentation.',
    ],
    impact: [
      'Reduced deployment time by 25% through AI enablement documentation and workflow definition.',
      'Produce executive decision decks and reports that drive approval of vendor selection, roadmap, and process decisions.',
      'Maintain backlogs, delivery plans, and RAID logs, improving deliverable turnaround time by 10% across the engagement team.',
    ],
    capabilities: [
      'product requirements',
      'roadmap planning',
      'AI workflows',
      'enterprise constraints',
      'executive communication',
    ],
    caseStudyHref: '/projects',
  },
  {
    id: 'uw-it',
    company: 'UW Information Technology',
    role: 'Brand Strategy & Marketing Analyst',
    period: 'Oct. 2023 - Jun. 2024; Aug. 2024 - Jun. 2025',
    scope:
      'Led communications operations and content strategy work spanning workflow design, information architecture, and digital performance reporting.',
    context: [
      'Worked inside a university technology organization where communications needed to serve a broader institutional ecosystem.',
      'Balanced stakeholder needs, analytics, and usability concerns across a large public-facing web presence.',
    ],
    responsibilities: [
      'Led the initiative to integrate UW-IT’s LinkedIn into the broader communications ecosystem by standardizing team workflows.',
      'Reorganized information architecture and content across 100+ WordPress pages using stakeholder input and analytics.',
    ],
    impact: [
      'Improved accessibility, navigation, and engagement across the site experience.',
      'Analyzed digital engagement metrics to produce monthly reports that informed content prioritization and communications planning.',
      'Created more consistent communication practices across channels and team processes.',
    ],
    capabilities: [
      'technical storytelling',
      'information architecture',
      'analytics',
      'cross-functional alignment',
      'workflow design',
    ],
    caseStudyHref: '/projects',
  },
  {
    id: 'smirk-president',
    company: 'Smirk UW',
    role: 'President',
    period: 'May 2023 - Nov. 2024',
    scope:
      'Led a student-run organization through governance, revenue, campaign, and team operations work while scaling structure for continuity.',
    context: [
      'Oversaw a 7-person organization with responsibilities spanning content, design, operations, and leadership succession.',
      'Built on earlier roles as Chief Design Officer and Graphic Designer to move from execution into organization-wide leadership.',
    ],
    responsibilities: [
      'Wrote governance framework and bylaws enabling leadership succession and scalable operations.',
      'Led a cross-functional team using structured agendas, documentation, and role clarity to support content and design operations.',
    ],
    impact: [
      'Directed data-informed campaigns that generated $4,750 per year in ad revenue and increased engagement by 15%.',
      'Created operating structure that made leadership transitions and team coordination more sustainable.',
      'Established design standards and workflows that improved consistency and execution across the team.',
    ],
    capabilities: [
      'leadership',
      'governance',
      'campaign strategy',
      'technical storytelling',
    ],
    caseStudyHref: '/projects',
  },
  {
    id: 'west-monroe-intern',
    company: 'West Monroe',
    role: 'Technology Consulting Intern',
    period: 'Jun. 2024 - Aug. 2024',
    scope:
      'Built onboarding assets and Salesforce workflow improvements that supported private-bank servicing and implementation consistency.',
    context: [
      'Worked in a financial-services consulting setting with a strong focus on enablement, process clarity, and scalable platform behavior.',
      'Contributed across documentation, UAT synthesis, and Salesforce solution configuration.',
    ],
    responsibilities: [
      'Created 7 job aids by synthesizing documentation and UAT insights to improve onboarding clarity.',
      'Built Salesforce automations using Flows, OmniStudio, OmniScripts, LWC, object customization, and Experience Cloud.',
    ],
    impact: [
      'Reduced support overhead by making onboarding guidance easier to use and easier to trust.',
      'Improved process consistency for private-bank onboarding and servicing workflows.',
      'Strengthened implementation support through clear enablement materials and platform configuration.',
    ],
    capabilities: [
      'Salesforce',
      'automation design',
      'documentation',
      'financial services',
    ],
    caseStudyHref: '/projects',
  },
  {
    id: 'seal-lab',
    company: 'Sensors, Energy, and Automation Laboratory',
    role: 'Web Development Team Lead & UX Designer',
    period: 'Feb. 2022 - Aug. 2022',
    scope:
      'Managed student web delivery work while contributing UX research and design recommendations for a healthcare-related machine learning product.',
    context: [
      'Led an 8-person student team responsible for the SEAL Lab and Industrial Assessment Center websites.',
      'Worked across web delivery and usability testing in a research-oriented environment.',
    ],
    responsibilities: [
      'Managed the team designing, developing, and maintaining two lab websites.',
      'Designed and conducted UX usability tests for a machine learning wound management system.',
    ],
    impact: [
      'Created clearer design recommendations by synthesizing usability findings into actionable guidance.',
      'Improved team coordination and delivery structure across student contributors.',
      'Balanced technical website maintenance with research-informed UX work.',
    ],
    capabilities: [
      'UX research',
      'team leadership',
      'web development',
      'design systems',
    ],
    caseStudyHref: '/projects',
  },
  {
    id: 'freelance-illustrator',
    company: 'Independent Business',
    role: 'Freelance Illustrator',
    period: 'Feb. 2022 - Sep. 2025',
    scope:
      'Ran an independent digital illustration business covering product creation, marketing, analytics, and financial operations end to end.',
    context: [
      'Managed both creative output and business operations as a solo operator.',
      'Used performance data to guide product and marketing decisions rather than relying on intuition alone.',
    ],
    responsibilities: [
      'Operate the business across product creation, marketing, fulfillment, and financial tracking.',
      'Analyze engagement and revenue data to forecast demand and optimize product mix.',
    ],
    impact: [
      'Reached up to 100K impressions per post with a 15% engagement rate.',
      'Built a sustainable operating model for independent creative work.',
      'Strengthened decision-making through data-informed experimentation and iteration.',
    ],
    capabilities: [
      'analytics',
      'business operations',
      'creative strategy',
      'self-direction',
    ],
    caseStudyHref: '/projects',
  },
];

export const experienceFilters = Array.from(
  new Set(experienceItems.flatMap((item) => item.capabilities)),
).sort();

export const caseStudies = [
  {
    title: 'Interactive Resume Experience',
    problem:
      'Present resume material in a format that reveals thought process instead of flattening everything into a PDF.',
    constraints:
      'Needed to stay concise, visually calm, and respectful of limited public project detail.',
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
  {
    title: 'Working Notes and Digital Garden',
    problem:
      'Create a place for unfinished technical thinking that still communicates rigor and curiosity.',
    constraints:
      'Needed a format that could hold essays, fragments, and experiments without requiring everything to be polished.',
    role: 'Used writing as both synthesis practice and a public-facing artifact of how I reason through work.',
    href: 'https://garden.bellalee.com',
  },
];

export const skillClusters = [
  {
    title: 'Industries',
    items: ['Legal', 'Financial services'],
  },
  {
    title: 'Technical',
    items: [
      'API design',
      'Debugging complex systems',
      'Onboarding into legacy codebases',
      'Integration thinking',
      'Architecture tradeoff analysis',
    ],
  },
  {
    title: 'Collaboration & Leadership',
    items: [
      'Technical storytelling',
      'Aligning stakeholders',
      'Mentoring through documentation',
      'Cross-functional translation',
      'Scope and prioritization clarity',
    ],
  },
];

export const writingItems = [
  {
    title: 'Technical reflections and unfinished thinking',
    description:
      'A digital garden for essays, experiments, working notes, and ideas that are still taking shape.',
    href: 'https://garden.bellalee.com',
    cta: 'Visit the notes archive',
  },
  {
    title: 'Featured thread: AI workflows',
    description:
      'Notes on making AI-assisted drafting and implementation more repeatable, useful, and grounded in real work.',
    href: 'https://garden.bellalee.com',
    cta: 'Read workflow notes',
  },
  {
    title: 'Featured thread: architecture learning',
    description:
      'Ongoing writing that connects systems thinking, constraints, and practical design tradeoffs.',
    href: 'https://garden.bellalee.com',
    cta: 'Read architecture notes',
  },
];

export const educationItems = [
  {
    title: 'Bachelor of Arts in Sociology',
    institution: 'University of California, Berkeley',
    detail:
      'Built a strong analytical and communication foundation with continued relevance to systems thinking, institutions, and cross-functional work.',
  },
  {
    title: 'Relevant independent coursework',
    institution: 'Ongoing study',
    detail:
      'System architecture, product strategy, Salesforce administration and development, and AI-assisted workflow design.',
  },
];

export const certificationItems = [
  {
    title: 'Salesforce Administrator',
    status: 'In progress',
  },
  {
    title: 'Salesforce Platform Developer I',
    status: 'Planned next',
  },
  {
    title: 'Architecture and AI workflow milestones',
    status: 'Tracked through roadmap work',
  },
];
