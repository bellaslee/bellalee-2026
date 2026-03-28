---
name: art-content-sync
description: Add newly added files from `public/art` into `src/app/art/art.content.ts` without changing existing entry metadata. Use when Codex needs to detect art files that are present on disk but missing from the `artEntries` array, infer their created-date ordering, gather image dimensions, and insert new objects while preserving the current content and structure of existing entries.
---

# Art Content Sync

Use this skill to keep `src/app/art/art.content.ts` aligned with `public/art`.

## Workflow

1. Inspect `public/art` and `src/app/art/art.content.ts`.
2. Run `scripts/find_missing_art.py` from this skill to list files that exist in `public/art` but do not yet appear in `artEntries`.
3. Treat existing objects in `art.content.ts` as immutable metadata:
   - Do not rewrite titles, dates, descriptions, widths, or heights for entries that already exist.
   - Do not reformat unrelated entries unless the task explicitly asks for it.
4. For each missing file, add one new object to `artEntries`.
5. Insert new objects in descending created-date order:
   - First prefer a leading filename date in `YYMMDD` or `YYYYMMDD` form.
   - If no parseable date is present, fall back to filesystem creation time reported by the helper script.
6. Keep `src` as the web path, for example `'/art/example.jpg'`.
7. Confirm dimensions before writing width and height.

## Helper Script

Run:

```bash
python3 .agent/skills/art-content-sync/scripts/find_missing_art.py
```

The script reports:

- existing `src` values already represented in `artEntries`
- missing `public/art` files
- inferred sort dates
- image dimensions gathered with `sips`
- starter object blocks for the missing entries

Use the script output as a drafting aid, not as authority for title or description quality.

## Editing Rules

- Preserve existing metadata exactly as written.
- Ignore hidden files such as `.DS_Store`.
- Keep the array in newest-first order.
- If a filename-derived title is awkward, replace it with a better human title for the new entry only.
- If the date cannot be inferred confidently, say so and use the filesystem-created date as a best effort.

## Verification

After editing, re-run the helper script. It should report no missing art files.
