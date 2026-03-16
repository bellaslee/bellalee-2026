# AGENTS.md

## Project Overview

- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4.
- Styling is driven through
  [`src/app/globals.css`](/Users/bella/Developer/bellalee/bellalee-2026/src/app/globals.css)
  using Tailwind v4's `@import "tailwindcss"` flow plus project CSS variables.
- App routes live under
  [`src/app`](/Users/bella/Developer/bellalee/bellalee-2026/src/app).
- Shared UI currently lives in
  [`src/app/_components`](/Users/bella/Developer/bellalee/bellalee-2026/src/app/_components).
- Fonts are configured in
  [`src/app/layout.tsx`](/Users/bella/Developer/bellalee/bellalee-2026/src/app/layout.tsx)
  with `next/font`.

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
- Use TypeScript types for props and structured data. Prefer simple local types
  over overly abstract generics.
- Match the existing style: clear typography, editorial layouts, rounded cards,
  and palette usage through CSS variables instead of hardcoded one-off colors
  when possible.
- Prefer `next/link` for internal navigation and set `target`/`rel` explicitly
  for external links.
- Favor accessible markup: semantic sections, descriptive headings, button
  labels, and `aria-*` attributes where interaction needs them.

## Tailwind And CSS Guidance

- Prefer Tailwind utility classes in JSX for layout, spacing, and state styling.
- Reuse the design tokens already defined in `:root` and `@theme inline` inside
  `globals.css`.
- When adding new reusable visual patterns, extend
  [`src/app/globals.css`](/Users/bella/Developer/bellalee/bellalee-2026/src/app/globals.css)
  sparingly with small semantic utility classes rather than long custom CSS
  blocks.
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

## Change Checklist

- Run `npm run lint` after meaningful code changes.
- Run `npm run build` when changing routing, config, metadata, or anything that
  could affect production output.
- Do not remove or overwrite user-authored content, copy, or styling decisions
  unless the task explicitly asks for it.
- Keep edits focused. Avoid broad refactors unless they are necessary to
  complete the task safely.
