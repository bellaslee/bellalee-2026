# AGENTS.md

## Architecture Summary

- Next.js App Router project using Server Components by default.
- Styling uses Tailwind v4 CSS-first setup via `src/app/globals.css`.
- Design system is driven by CSS variables and editorial layout patterns.
- Shared UI is intentionally co-located under `app/_components`.

## Commands

- Install deps: `npm install`
- Start dev server: `npm run dev`
- Build production app: `npm run build`
- Run linter: `npm run lint`

## Working Conventions

- Preserve the existing App Router structure. New pages should be added under
  `src/app/<route>/page.tsx`.
- Default to Server Components. Add `'use client'` only when a component needs
  browser-only state, effects, or event handlers.
- Keep route files focused on page composition. Extract reusable UI into
  `src/app/_components` or a nearby route-level component file whenever possible
  for repeated elements.
- Prefer a three-layer split for substantial pages when it helps clarity:
  route composition, structured content/data, and small presentational section
  components.
- Use TypeScript types for props and structured data. Prefer simple local types
  over overly abstract generics.
- Match the existing style: clear typography, editorial layouts, rounded cards,
  and palette usage through CSS variables instead of hardcoded one-off colors
  when possible.
- Prefer `next/link` for internal navigation and set `target`/`rel` explicitly
  for external links.
- Favor accessible markup: semantic sections, descriptive headings, button
  labels, and `aria-*` attributes where interaction needs them.
- Separate content from styling concerns. Do not store raw Tailwind class
  strings inside content objects unless there is a strong reason to do so.
- When shared UI needs visual flexibility, prefer explicit props such as
  `variant`, `size`, `tone`, or semantic element props like `titleAs` over
  generic `className`-driven styling APIs.
- When a route contains repeated card bodies or repeated text structures,
  extract small presentational subcomponents instead of repeating the interior
  JSX inline.
- Keep heading hierarchy intentional: page title as `h1`, section titles as
  `h2`, and card/item titles as `h3` when nested beneath a section.
- Use semantic lists for repeated collections of peer items (`ul`/`li`) and
  description lists for labeled value pairs when appropriate.
- Mark decorative UI, such as ornamental backgrounds or bullet dots, with
  `aria-hidden="true"` when they do not convey meaning.

## Tailwind And CSS Guidance

- Prefer Tailwind utility classes in JSX for layout, spacing, and state styling.
- Reuse the design tokens already defined in `:root` and `@theme inline` inside
  `globals.css`.
- When adding new reusable visual patterns, extend `src/app/globals.css`
  sparingly with small semantic utility classes rather than long custom CSS
  blocks.
- Keep styling decisions inside presentational components where possible so data
  modules can stay content-focused and reusable.
- Keep animations subtle and intentional; follow the current aesthetic instead
  of introducing generic motion.
- Do not add a legacy `tailwind.config.*` unless the project truly needs it.
  This repo is using Tailwind v4's CSS-first setup.

## MDX Guidance

- If a task requires MDX, first wire it into Next.js intentionally, update the
  relevant config, and document the content location and authoring pattern.
- Keep MDX content separate from presentational components. If you introduce
  MDX, define where content files live and how shared MDX components are
  registered.

## State Management

- Prefer URL state, server state, or local component state.
- Do not introduce global state libraries without explicit task requirement.

## Performance Expectations

- Avoid large client component trees.
- Prefer static rendering where possible.
- Be mindful of bundle size when adding libraries.

## SEO and Metadata

- Each route should export `generateMetadata` when meaningful.
- Prefer descriptive titles and concise social preview descriptions.

## Change Checklist

- Run `npm run lint` after meaningful code changes.
- Run `npm run build` when changing routing, config, metadata, or anything that
  could affect production output.
- Do not remove or overwrite user-authored content, copy, or styling decisions
  unless the task explicitly asks for it.
- Keep edits focused. Avoid broad refactors unless they are necessary to
  complete the task safely.
  - Verify no new client boundaries were introduced unnecessarily.
- Confirm new components follow existing typography + spacing patterns.
- Confirm route files remain mostly compositional and are not carrying repeated
  card internals or style-heavy content objects.
- Ensure accessibility labels exist for interactive elements.

## Content Philosophy

- Content tone should remain thoughtful, minimal, and non-corporate.
- Avoid marketing-heavy UI patterns.
- Prefer long-form single pages with sections unless navigation clarity requires
  a new route.

## Animation

- Prefer opacity, translate, and blur transitions.
- Avoid spring physics or playful motion styles.
