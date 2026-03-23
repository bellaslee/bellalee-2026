export type HomeAction = {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
};

export type HomeFeature = {
  title: string;
  description: string;
  items: string[];
  href: string;
  eyebrow: string;
  ctaLabel: string;
  emphasis: 'featured' | 'standard';
  surface: 'surface' | 'white' | 'muted';
};

export type LearningTopic = {
  title: string;
  tag: string;
  current: string;
  next: string;
};

export const homeActions: HomeAction[] = [
  {
    href: 'https://github.com/bellaslee/bellalee-2026',
    label: 'Follow the Dev Journey',
    variant: 'primary',
  },
];

export const identityPillars = [
  'Technical consulting',
  'Product management',
  'System architecture',
  'Learning in public',
];

export const featureCards: HomeFeature[] = [
  {
    title: 'Interactive Resume',
    description:
      'A structured view of consulting work, cross-functional delivery, and the technical decisions behind each engagement.',
    items: ['Experience', 'Engagement highlights'],
    href: '/resume',
    eyebrow: 'Featured Path',
    ctaLabel: 'Step inside',
    emphasis: 'featured',
    surface: 'surface',
  },
  {
    title: 'Learning Roadmap',
    description:
      'A working roadmap for what I am focused on now, what I want to move into next, and how those threads shape future projects and writing.',
    items: [
      'Current focus',
      'Next steps',
      'Structured findings and reflections',
    ],
    href: '/roadmap',
    eyebrow: 'Explore',
    ctaLabel: 'Learn more',
    emphasis: 'standard',
    surface: 'white',
  },
  {
    title: 'Working Notes',
    description:
      'A living notebook of technical explorations, reflections, and unfinished thinking that connects the work behind the work.',
    items: [
      'Essays and book logs',
      'Rough notes',
      'In-progress reflections on work and learning',
    ],
    href: 'https://garden.bellalee.com',
    eyebrow: 'Explore',
    ctaLabel: 'Learn more',
    emphasis: 'standard',
    surface: 'muted',
  },
];

export const learningTopics: LearningTopic[] = [
  {
    title: 'Salesforce Administration and Development',
    tag: 'Career',
    current:
      'Building fluency in configuration, data models, platform syntax, and certifications.',
    next: 'Work through deeper implementation patterns and exam prep.',
  },
  {
    title: 'Product Management',
    tag: 'Career',
    current:
      'Studying prioritization, stakeholder alignment, and product discovery.',
    next: 'Turn product thinking into reusable planning and scoping frameworks.',
  },
  {
    title: 'System Architecture',
    tag: 'Career',
    current:
      'Learning architecture patterns, scaling decisions, and technical tradeoffs.',
    next: 'Apply those patterns through case studies and system design writeups.',
  },
  {
    title: 'Marathi',
    tag: 'Language',
    current:
      'Learning the alphabet and using basic Hindi as an accessible entry point.',
    next: 'Build simple listening and speaking practice into the week.',
  },
  {
    title: 'Bread-Baking',
    tag: 'Craft',
    current: 'Practicing technique through repeat bakes and better dough feel.',
    next: 'Refine consistency and document the recipes worth keeping.',
  },
];
