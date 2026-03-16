'use client';

import Link from 'next/link';
import { startTransition, useState } from 'react';
import { SiteFooter } from '../_components/site-footer';
import { SiteNav } from '../_components/site-nav';

type SectionId =
  | 'overview'
  | 'experience'
  | 'case-studies'
  | 'skills'
  | 'writing'
  | 'education-certifications';

type NavItem = {
  id: SectionId;
  label: string;
  summary: string;
};

type ExperienceItem = {
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

const navItems: NavItem[] = [
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

const overviewStats = [
  {
    label: 'Years in consulting-adjacent work',
    value: '1',
  },
  {
    label: 'Core domains',
    value: 'Systems, integrations, tooling',
  },
  {
    label: 'Current learning focus',
    value: 'Architecture, Salesforce, AI workflows',
  },
  {
    label: 'Work style',
    value: 'Structured, calm, cross-functional',
  },
];

const keyStrengths = [
  'System design thinking',
  'Stakeholder communication',
  'Ambiguity navigation',
  'Rapid onboarding',
  'Clear technical storytelling',
];

const experienceItems: ExperienceItem[] = [
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

const experienceFilters = Array.from(
  new Set(experienceItems.flatMap((item) => item.capabilities)),
).sort();

const caseStudies = [
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

const skillClusters = [
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

const writingItems = [
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

const educationItems = [
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

const certificationItems = [
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

function ResumeArrowLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]"
    >
      {children}
      <span aria-hidden="true">{'->'}</span>
    </Link>
  );
}

function BulletList({
  items,
  tone = 'default',
}: {
  items: string[];
  tone?: 'default' | 'muted';
}) {
  const textClassName =
    tone === 'muted'
      ? 'text-[var(--foreground-muted)]'
      : 'text-[var(--foreground)]';

  return (
    <ul className="mt-3 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
          />
          <span className={`text-base leading-7 ${textClassName}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview');
  const [expandedRoleId, setExpandedRoleId] = useState<string>('');
  const [selectedCapability, setSelectedCapability] = useState<string | null>(
    null,
  );

  const currentIndex = navItems.findIndex((item) => item.id === activeSection);
  const activeItem = navItems[currentIndex];

  const filteredExperience = selectedCapability
    ? experienceItems.filter((item) =>
        item.capabilities.includes(selectedCapability),
      )
    : experienceItems;

  return (
    <div className="site-shell min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <SiteNav className="mb-12" />

        <section className="border-b border-[color:var(--border)] pb-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--primary)]">
                Resume
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)] sm:text-6xl">
                Bella Lee
              </h1>
              <p className="mt-5 text-lg uppercase tracking-[0.24em] text-[var(--secondary)]">
                Technical Consultant / Systems-Minded Builder
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
                I like work that turns complexity into something people can
                understand and use, especially where technical delivery, product
                thinking, and communication all need to stay connected.
              </p>
            </div>

            <aside className="rounded-[2rem] border border-[color:var(--border)] bg-white/70 p-6 shadow-[0_24px_60px_rgba(33,53,72,0.05)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
                Purpose
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--foreground-muted)]">
                An explorable resume designed to show experience, technical
                thinking, impact, and depth of capability in a calmer, more
                product-like format.
              </p>
            </aside>
          </div>
        </section>

        <section className="grid gap-8 py-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[2rem] border border-[color:var(--border)] bg-white/70 p-4 shadow-[0_24px_60px_rgba(33,53,72,0.05)]">
              <p className="px-3 text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
                Navigate
              </p>

              <div
                role="tablist"
                aria-label="Resume sections"
                className="mt-4 flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
              >
                {navItems.map((item, index) => {
                  const isActive = item.id === activeSection;

                  return (
                    <button
                      key={item.id}
                      id={`resume-tab-${item.id}`}
                      type="button"
                      role="tab"
                      aria-controls={`resume-panel-${item.id}`}
                      aria-selected={isActive}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() =>
                        startTransition(() => setActiveSection(item.id))
                      }
                      className={`min-w-[230px] rounded-[1.5rem] border px-4 py-4 text-left transition-all duration-300 lg:min-w-0 ${
                        isActive
                          ? 'border-[color:var(--primary)] bg-[var(--primary)] text-[var(--background)] shadow-[0_20px_45px_rgba(28,41,133,0.18)]'
                          : 'border-[color:var(--border)] bg-[var(--surface)]/65 text-[var(--foreground)] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium">{item.label}</p>
                          <p
                            className={`mt-2 text-sm leading-6 ${
                              isActive
                                ? 'text-[var(--background)]/80'
                                : 'text-[var(--foreground-muted)]'
                            }`}
                          >
                            {item.summary}
                          </p>
                        </div>
                        <span
                          className={`text-xs uppercase tracking-[0.2em] ${
                            isActive
                              ? 'text-[var(--background)]/75'
                              : 'text-[var(--secondary)]'
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div
            key={activeSection}
            id={`resume-panel-${activeSection}`}
            role="tabpanel"
            aria-labelledby={`resume-tab-${activeSection}`}
            className="rounded-[2rem] border border-[color:var(--border)] bg-white/75 p-6 shadow-[0_28px_70px_rgba(33,53,72,0.06)] animate-[fadePanel_280ms_ease-out] sm:p-8"
          >
            <div className="flex flex-col gap-6 border-b border-[color:var(--border)] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--secondary)]">
                  Section {currentIndex + 1}
                </p>
                <h2 className="mt-3 font-serif text-4xl leading-none text-[var(--foreground)] sm:text-5xl">
                  {activeItem.label}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[var(--foreground-muted)]">
                {activeItem.summary}
              </p>
            </div>

            {activeSection === 'overview' ? (
              <div className="mt-8 space-y-8">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {overviewStats.map((item) => (
                    <article
                      key={item.label}
                      className="rounded-[1.75rem] border border-[color:var(--border)] bg-[var(--surface)]/75 p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                        {item.label}
                      </p>
                      <p className="mt-4 font-serif text-3xl leading-none text-[var(--foreground)]">
                        {item.value}
                      </p>
                    </article>
                  ))}
                </div>

                <article className="rounded-[1.75rem] border border-[color:var(--border)] bg-[var(--surface)]/75 p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
                    Key strengths
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {keyStrengths.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                        />
                        <span className="text-base leading-7 text-[var(--foreground)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ) : null}

            {activeSection === 'experience' ? (
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
                    Filter by capability
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCapability(null)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        selectedCapability === null
                          ? 'border-[color:var(--primary)] bg-[var(--primary)] text-[var(--background)]'
                          : 'border-[color:var(--border)] bg-white/80 text-[var(--foreground)]'
                      }`}
                    >
                      All roles
                    </button>
                    {experienceFilters.map((capability) => (
                      <button
                        key={capability}
                        type="button"
                        onClick={() => setSelectedCapability(capability)}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                          selectedCapability === capability
                            ? 'border-[color:var(--primary)] bg-[var(--primary)] text-[var(--background)]'
                            : 'border-[color:var(--border)] bg-white/80 text-[var(--foreground)]'
                        }`}
                      >
                        {capability}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5">
                  {filteredExperience.map((item) => {
                    const isExpanded = expandedRoleId === item.id;

                    return (
                      <article
                        key={item.id}
                        className="rounded-[1.75rem] border border-[color:var(--border)] bg-[var(--surface)]/75 p-6"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-[var(--secondary)]">
                              {item.company}
                            </p>
                            <h3 className="mt-2 font-serif text-3xl leading-none text-[var(--foreground)]">
                              {item.role}
                            </h3>
                            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--foreground-muted)]">
                              {item.scope}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="whitespace-nowrap text-sm text-[var(--foreground-muted)]">
                              {item.period}
                            </p>
                          </div>
                        </div>

                        {isExpanded ? (
                          <div className="mt-6 grid gap-6 border-t border-[color:var(--border)] pt-6 animate-[fadePanel_220ms_ease-out]">
                            <div>
                              <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
                                Context
                              </p>
                              <BulletList items={item.context} tone="muted" />
                            </div>

                            <div>
                              <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
                                Responsibilities
                              </p>
                              <BulletList items={item.responsibilities} />
                            </div>

                            <div>
                              <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
                                Impact highlights
                              </p>
                              <BulletList items={item.impact} />
                            </div>

                            <div>
                              <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
                                Capabilities demonstrated
                              </p>
                              <div className="mt-4 flex flex-wrap gap-3">
                                {item.capabilities.map((capability) => (
                                  <button
                                    key={capability}
                                    type="button"
                                    onClick={() =>
                                      setSelectedCapability(capability)
                                    }
                                    className="rounded-full border border-[color:var(--border)] bg-white/85 px-4 py-2 text-sm text-[var(--foreground)]"
                                  >
                                    {capability}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <ResumeArrowLink href={item.caseStudyHref}>
                              View related case study
                            </ResumeArrowLink>

                            <div className="flex justify-end">
                              <button
                                type="button"
                                onClick={() =>
                                  setExpandedRoleId((current) =>
                                    current === item.id ? '' : item.id,
                                  )
                                }
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--primary)] bg-[var(--primary)] text-lg font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
                                aria-expanded={isExpanded}
                                aria-label={`Collapse ${item.role}`}
                              >
                                -
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-6 flex justify-end border-t border-[color:var(--border)] pt-6">
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedRoleId((current) =>
                                  current === item.id ? '' : item.id,
                                )
                              }
                              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--primary)] bg-[var(--primary)] text-lg font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
                              aria-expanded={isExpanded}
                              aria-label={`Expand ${item.role}`}
                            >
                              +
                            </button>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {activeSection === 'case-studies' ? (
              <div className="mt-8 grid gap-5 xl:grid-cols-3">
                {caseStudies.map((item) => (
                  <article
                    key={item.title}
                    className="card-sheen rounded-[1.75rem] border border-[color:var(--border)] bg-[var(--surface)]/75 p-6"
                  >
                    <div className="relative z-10 flex h-full flex-col">
                      <h3 className="font-serif text-3xl leading-none text-[var(--foreground)]">
                        {item.title}
                      </h3>
                      <div className="mt-5 space-y-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                            Problem
                          </p>
                          <p className="mt-2 text-base leading-7 text-[var(--foreground-muted)]">
                            {item.problem}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                            Constraints
                          </p>
                          <p className="mt-2 text-base leading-7 text-[var(--foreground-muted)]">
                            {item.constraints}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">
                            Role
                          </p>
                          <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <ResumeArrowLink href={item.href}>
                          View deep dive
                        </ResumeArrowLink>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {activeSection === 'skills' ? (
              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {skillClusters.map((cluster) => (
                  <article
                    key={cluster.title}
                    className="rounded-[1.75rem] border border-[color:var(--border)] bg-[var(--surface)]/75 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
                      Skill cluster
                    </p>
                    <h3 className="mt-3 font-serif text-3xl leading-none text-[var(--foreground)]">
                      {cluster.title}
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {cluster.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[color:var(--border)] bg-white/85 px-4 py-2 text-sm text-[var(--foreground)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {activeSection === 'writing' ? (
              <div className="mt-8 space-y-6">
                <article className="rounded-[1.75rem] border border-[color:var(--border)] bg-[var(--surface)]/75 p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
                    Editorial focus
                  </p>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--foreground-muted)]">
                    I use writing to make technical thinking visible: essays,
                    notes, and in-progress fragments that help connect
                    decisions, learning, and implementation work.
                  </p>
                </article>

                <div className="grid gap-5 xl:grid-cols-3">
                  {writingItems.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.75rem] border border-[color:var(--border)] bg-white/80 p-6"
                    >
                      <h3 className="font-serif text-3xl leading-none text-[var(--foreground)]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-[var(--foreground-muted)]">
                        {item.description}
                      </p>
                      <div className="mt-6">
                        <ResumeArrowLink href={item.href}>
                          {item.cta}
                        </ResumeArrowLink>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {activeSection === 'education-certifications' ? (
              <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="grid gap-5">
                  {educationItems.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.75rem] border border-[color:var(--border)] bg-[var(--surface)]/75 p-6"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <h3 className="font-serif text-3xl leading-none text-[var(--foreground)]">
                          {item.title}
                        </h3>
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--secondary)]">
                          {item.institution}
                        </p>
                      </div>
                      <p className="mt-4 text-base leading-8 text-[var(--foreground-muted)]">
                        {item.detail}
                      </p>
                    </article>
                  ))}
                </div>

                <aside className="rounded-[1.75rem] border border-[color:var(--border)] bg-white/80 p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
                    Certifications and milestones
                  </p>
                  <div className="mt-5 grid gap-4">
                    {certificationItems.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1.25rem] border border-[color:var(--border)] bg-[var(--surface)]/70 p-4"
                      >
                        <p className="text-sm font-medium text-[var(--foreground)]">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                          {item.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            ) : null}
          </div>
        </section>

        <SiteFooter className="mt-auto" />
      </main>
    </div>
  );
}
