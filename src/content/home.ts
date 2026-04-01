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
  href: string;
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
  currentlyExploringLabel: 'Currently Working On',
  currentlyExploringTitle: 'Adding project documentation',
  details: [
    {
      title: 'Context',
      body: "I've got most of my website architecture built out, so all that's left is to add more content.",
      surface: 'surface',
    },
    {
      title: 'Approach',
      body: "Heads down grindin', I guess.",
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
  title:
    'A snapshot of what I am focused on now and what I want to move into next.',
  description: '',
};

export const featureCards: HomeFeature[] = [
  {
    title: 'Interactive Resume',
    description: 'A structured view of the work I do.',
    href: '/resume',
    ctaLabel: 'Learn more',
    emphasis: 'standard',
    surface: 'surface',
  },
  {
    title: 'Photo Diary',
    description:
      'A time capsule of sorts featuring photos I take on my childhood digital camera.',
    href: '/photos',
    ctaLabel: 'Explore',
    emphasis: 'standard',
    surface: 'white',
  },
  {
    title: 'Digital Garden',
    description:
      'A living notebook of technical explorations, reflections, and unfinished thinking.',
    href: 'https://garden.bellalee.com',
    ctaLabel: 'Step inside',
    emphasis: 'standard',
    surface: 'muted',
  },
];

export const learningTopics: LearningTopic[] = [
  {
    title: 'Salesforce Administration and Development',
    tag: 'Career',
    current:
      'Building fluency in configuration, data models, and platform syntax.',
    next: 'Work through deeper implementation patterns and exam prep.',
  },
  {
    title: 'Product Management',
    tag: 'Career',
    current: 'Honing my discovery, design, and build skills.',
    next: 'Turn product thinking into reusable planning and scoping frameworks.',
  },
  {
    title: 'Marathi',
    tag: 'Language',
    current:
      'Learning the alphabet and using basic Hindi as an accessible entry point.',
    next: 'Practice more vocabulary, grammar, and pronunciation.',
  },
  {
    title: 'Bread-Baking',
    tag: 'Craft',
    current: 'Practicing technique through repeat bakes.',
    next: 'Eat a lot of bread and document the recipes worth keeping.',
  },
];
