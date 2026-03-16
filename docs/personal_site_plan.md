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
- Resume
- Roadmap
- Tools
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

/ /resume /roadmap /tools /projects /notes

Alternative naming options, depending on tone:

- Balanced: Notes, Field Notes
- More editorial: Journal, Writing, Notebook
- More engineering-forward: Garden, Lab Notes, Engineering Notes, Explorations

Preferred naming direction: `Notes` or `Field Notes`

---

## Homepage Design

### Hero Section

- Name + role
- Short one‑line value statement
- Current technical interests
- Primary call‑to‑action buttons:
  - View Resume
  - See Projects
  - Explore Tools

### Featured Cards

Display three primary entry points:

- Interactive Resume
- Learning Roadmap
- Notes

Use the notes card in place of a developer tools card on the homepage so the
garden is integrated directly into the main story of the site.

These three should work together as a coherent story:

- Roadmap = what you are learning
- Notes = how you think
- Projects = what you build

### Featured Project

Highlight one strong technical project including: - Screenshot - Short
description - Tech stack - Link to case study

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
- Lightweight tags such as systems, tooling, career growth

This section should position the notes as evidence of curiosity, communication
ability, and senior-leaning thinking rather than as casual blogging.

---

## Learning Roadmap Page

Purpose: act as a public engineering notebook.

### Categories

- Distributed Systems
- Programming Languages
- Developer Tools
- Research Topics

### Roadmap Items

Each topic includes: - Progress bar - Reading checklist - Project checklist -
Notes or experiments

### Timeline View

Show learning progress chronologically.

### Learning Artifacts

Each roadmap topic links to: - Notes - Demo tools - Code repositories

---

## Developer Tools Section

Grid layout listing small utilities such as: - JSON Diff Viewer - Regex
Playground - API Response Comparator - SQL Formatter

Each tool page includes: - Tool interface - Explanation of engineering concepts
demonstrated - Link to source code

---

## Projects Section

Each project should be structured as a case study:

- Problem
- Constraints
- Architecture
- Implementation
- Lessons Learned

Architecture diagrams should visually show system flow.

---

## Cross‑Linking Strategy

Connect all sections to create a knowledge graph:

- Resume → Project deep dive
- Roadmap → Tool demo
- Project → Supporting utilities
- Tools → Learning topics
- Resume → Featured essays or notes
- Homepage notes card → External notes site
- Roadmap topics → Related notes and experiments

The notes should feel integrated into the knowledge graph, not visually or
structurally isolated.

---

## Suggested Tech Stack

Frontend: - Next.js - React - Tailwind CSS - GSAP

Content: - MDX for projects and notes

Hosting: - Vercel

---

## Optional Advanced Features

- Skill graph visualization
- Global search across content
- Rich hover tooltips for external notes links

## Footer Reinforcement

Include notes in the footer navigation for lightweight discoverability:

- Notes
- Projects
- GitHub
- LinkedIn

This creates a secondary discovery path for visitors who scroll quickly.
