# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

`npm run dev` (port 3000), `npm run build` (also type-checks), `npm run lint`. No test suite; verify in the browser preview. Stale route types: `rm -rf .next/types`. Old photo still showing after replacing `public/profile.jpg`: `rm -rf .next/dev/cache/images`.

## Architecture

- Bilingual single page under `app/[lang]/`: Farsi (RTL, default) and English (LTR), same content with the layout mirrored. `/` redirects to `/fa` in `next.config.ts`.
- All text is in `lib/dictionaries/`; `fa.ts` defines the `Dict` type. Dictionaries reach client components, so strings only, no functions (use `{label}` placeholders). Language-independent data is in `lib/content.ts`.
- Mirroring comes from `dir` alone: use logical utilities (`ms-`, `ps-`, `border-s`, `start-`) and `col-start-*`, never left/right.
- The raw inline `<script>` in the layout `<head>` sets `.js`, `.dark` and `.loader-seen` before paint. Keep it raw (not `next/script`), and keep `LangToggle` a plain `<a>`, not `<Link>`, or React's script-tag warning returns.
- The loader plays once per session and on every language switch. Entrance animations wait on the CSS var `--reveal-start` (3200ms, 0 under `.loader-seen`), which must equal `LOADER_HOLD` in `lib/timing.ts`.
- In `app/globals.css`, `mookalaqi:*` blocks are hand-written; `vibefarsi:*` blocks belong to the VibeFarsi CLI. Never run `vibefarsi init`: it overwrites the theme and font.

## Conventions

- BEM class on every block, `id` on landmarks, alongside Tailwind.
- Brand red is exactly `#cc3333` in both themes; don't shift it for contrast. Dark background is near-black.
- Shadows using `oklch()` go in plain CSS; Tailwind arbitrary `shadow-[…]` renders transparent.
- Never add a phone number to the site.
