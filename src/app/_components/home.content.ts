export type HomeAction = {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
};

export type HeroDetail = {
  title: string;
  body: string;
  surface: 'surface' | 'white';
};

export type HomeHeroContent = {
  title: string;
  description: string;
  currentlyExploringLabel: string;
  currentlyExploringTitle: string;
  details: HeroDetail[];
};

export type SectionHeadingContent = {
  eyebrow: string;
  title: string;
  description: string;
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

export const homeHeroContent: HomeHeroContent = {
  title: "Hi, I'm Bella!",
  description:
    'I am a consultant, artist, writer, and lifelong learner. This site is a place for the projects, photos, and ongoing learning that matter to me.',
  currentlyExploringLabel: 'Currently Exploring',
  currentlyExploringTitle: 'Creating reusable AI workflows.',
  details: [
    {
      title: 'Focus',
      body: 'Experimenting with AI workflows to create repeatable and effective frameworks.',
      surface: 'surface',
    },
    {
      title: 'Approach',
      body: 'Process and product-minded problem solving, future-state considerations, and documentation that keeps ideas visible.',
      surface: 'white',
    },
  ],
};

export const homeActions: HomeAction[] = [
  {
    href: '/resume',
    label: 'View Resume',
    variant: 'primary',
  },
  {
    href: '/projects',
    label: 'Explore Projects',
    variant: 'secondary',
  },
];

export const identityPillars = [
  'Product management',
  'Learning in public',
  'Drawing and painting',
  'Photography',
];

export const identityPillarsHeading = 'Core focus areas';

export const learningTopicsSectionContent: SectionHeadingContent = {
  eyebrow: 'Current Learning',
  title: 'A compact view into the ideas shaping how I work and live.',
  description:
    'A snapshot of what I am focused on now and what I want to move into next.',
};

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
    title: 'Photo Diary',
    description:
      'A time capsule of sorts featuring photos I take on my childhood digital camera.',
    items: [''],
    href: '/photos',
    eyebrow: 'Explore',
    ctaLabel: 'Learn more',
    emphasis: 'standard',
    surface: 'white',
  },
  {
    title: 'Digital Garden',
    description:
      'A living notebook of technical explorations, reflections, and unfinished thinking.',
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
