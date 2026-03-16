# Personal Website Revamp Plan

## Overall Goal

Build a personal website that functions like a small product rather than a
static portfolio.\
It should clearly demonstrate: 1. How you think (projects) 2. What you know
(interactive resume) 3. How you learn (public roadmap) 4. How you think in
progress (notes / digital garden)

---

## Site Structure

Top Navigation:

- Home
- About
- Resume
- Roadmap
- Projects
- Notes

Treat the digital garden as a first-class section, not a side blog link. Use
`Notes` in navigation for a more polished, broadly legible label than
`Digital Garden`.

Navigation behavior:

- Open the external notes site in a new tab
- Add a small external-link icon
- Add hover microcopy such as: `Essays, experiments, and unfinished thinking.`

Suggested URL structure:

/ /about /resume /roadmap /projects /notes

Alternative naming options, depending on tone:

- Balanced: Notes, Field Notes
- More editorial: Journal, Writing, Notebook
- More engineering-forward: Garden, Lab Notes, Engineering Notes, Explorations

Preferred naming direction: `Notes` or `Field Notes`

---

## Homepage Design

### Hero Section

- Left column:
  - Eyebrow role label: `Technical Consultant`
  - Large value statement centered on bridging people, process, and technology
  - Short intro paragraph covering technical consulting, product management, and
    system architecture
- Primary call‑to‑action buttons:
  - View Resume
  - Explore Projects
- Right column:
  - `Currently Exploring` feature panel
  - Headline focused on reusable AI workflows
  - Two supporting callouts for `Focus` and `Approach`

### Identity Strip

Use a slim horizontal strip below the hero with four current positioning themes:

- Technical consulting
- Product management
- System architecture
- Learning in public

### Featured Cards

Display three primary entry points:

- Interactive Resume
- Learning Roadmap
- Working Notes

Layout direction:

- Large left card for the resume
- Two stacked right cards for roadmap and notes

Each card should include:

- A short label
- A clear headline
- One descriptive paragraph
- A compact list of what visitors will find
- A simple arrow-based CTA

Use the notes card on the homepage so the garden is integrated directly into the
main story of the site.

These three should work together as a coherent story:

- Roadmap = what you are learning
- Notes = how you think
- Projects = what you build

### Current Learning Preview

Use the homepage learning section as a compact snapshot of current interests.

Section structure:

- Intro copy explaining that the roadmap shapes projects, writing, and ways of
  working
- A list of learning cards linking to the roadmap page

Each learning card should include:

- Topic title
- Category tag
- `Current` state
- `Next` step
- CTA language pointing to notes and demos

---

## Interactive Resume Page

### Layout

- Left sidebar navigation:
  - Experience
  - Projects
  - Skills
  - Education
  - Certifications
- Main content panel updates dynamically

### Experience Sections

Each role expands to show: - Key achievements - Architecture diagram
(expandable) - Technology tags (clickable filters)

### Skill Filtering

Allow filtering experience and projects by: - Frontend - Backend -
Infrastructure - Data

### Deep Linking

Projects link to full case studies: /projects/project‑slug

### Writing / Thought Process

Add a dedicated subsection that reinforces writing as a professional signal.

Include:

- Link to notes / digital garden
- Two to three featured essays
- Lightweight tags such as systems, architecture, career growth

This section should position the notes as evidence of curiosity, communication
ability, and senior-leaning thinking rather than as casual blogging.

---

## Learning Roadmap Page

Purpose: act as a public engineering notebook.

### Categories

- Distributed Systems
- Programming Languages
- Applied Systems
- Research Topics

### Roadmap Items

Each topic includes: - Progress bar - Reading checklist - Project checklist -
Notes or experiments

### Timeline View

Show learning progress chronologically.

### Learning Artifacts

Each roadmap topic links to: - Notes - Related projects - Code repositories

---

## Projects Section

Each project should be structured as a case study:

- Problem
- Executive Summary
- Context
- Tools
- Methodology
- Key Findings
- Lessons Learned

Architecture diagrams should visually show system flow.

---

## Suggested Tech Stack

Frontend: - Next.js - React - Tailwind CSS - GSAP

Content: - MDX for projects and notes

Hosting: - Vercel

---

## Optional Advanced Features

- Global search across content

## Footer Reinforcement

Keep the footer lightweight and personal:

- Email
- LinkedIn
