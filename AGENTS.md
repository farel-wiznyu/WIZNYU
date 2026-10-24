# AGENTS.md

## Repo state

- Implemented Next.js 16 App Router portfolio at the repo root: `app/`,
  `components/`, `lib/`, `public/`, and `scripts/` exist.
- No git repo, CI, lint, or test suite. Available verification is
  `npm run typecheck` and `npm run build`; do not invent or claim other suites.
- Do not modify or delete `assets/`, `prd/`, or `prompts/`.
- The `C:\MAGANG SMKN 10\...` paths inside the PRD point at the owner's
  originals. Use the files in this folder instead.

## Commands

```bash
npm install
npm run dev              # local dev server
npm run typecheck        # tsc --noEmit
npm run build            # production build
npm run start            # serve the production build
npm run images:optimize  # regenerate public derivatives from assets
```

- `images:optimize` uses Sharp and `ffmpeg-static`; it writes only to
  `public/images`, `public/media`, and `public/textures`.
- Set `NEXT_PUBLIC_SITE_URL` for production metadata, robots, and sitemap.
  Copy `.env.example` to `.env.local`; without it the URL falls back to
  `http://localhost:3000`.

## Source of truth

- `prd/PRD-Portofolio-Gothic-Distopia-Claude.md` is the canonical implementation
  handoff (v2.0). Read §4 assets, §5 design tokens, §10 structure/data model,
  §13 acceptance criteria, and §14 missing owner data.
- `prd/PRD-Portofolio-Gothic-Distopia.md` is the earlier product-level PRD.
  Defer to the Claude version where they differ.
- Fixed stack: Next.js App Router + TypeScript + Tailwind. MVP excludes CMS,
  auth, DB, analytics, contact backend, WebGL, and audio.
- Approved language direction: English structural labels (`SELECTED WORKS`,
  `MANIFEST`, `SIGNAL`) with Indonesian body copy using `aku`/`kamu`.

## Current content state

Do not hide these gaps with invented facts:

- `lib/projects.ts` has no project records; Works renders an intentional pending
  panel. Add real records only.
- `lib/stack.ts` has no operator stack categories; Manifest renders
  `AWAITING INPUT`. The separate `SITE / BUILD` list is factual and can stay.
- `lib/site.ts` has `email: null` and `socials: []`; Signal renders
  `AWAITING SIGNAL` until one is filled. The section opens if email or socials
  are present.
- The production domain, final bio/positioning, artifact years/medium, and final
  contact details are still owner-supplied content.
- Rei's third-party publication rights and the winged icon's source/permission
  still need confirmation before a public launch.

## Content rules

- Never invent identity, roles, clients, years, outcomes, metrics, awards, or
  quotes. Use obvious placeholders such as `AWAITING INPUT`, `PENDING`, and
  `[YEAR PENDING]`.
- BELONG/BURN/LUSH are personal artwork with baked-in text, not confirmed
  professional projects. Do not present them as case studies or claim a role on
  them.
- Keep narrative copy calm and direct; avoid turning the archive into a generic
  agency portfolio or overpoetic lore.
- `theirisk.com` is a rhythm/experience reference only. Do not copy its copy,
  brand, music, assets, or layout.

## Assets

- Treat originals as read-only. Public derivatives are copied/generated into
  `public/images/`, `public/media/`, and `public/textures/` with kebab-case
  names. Never ship the originals as-is.
- Keep BURN and LUSH in their original color; the rest of the UI stays
  monochrome. Do not grayscale those two.
- Never cover the text baked into BELONG/BURN/LUSH with new headings or
  overlays; mobile layouts were checked to keep it readable.
- Rei Ayanami is a third-party character, presented as the dedicated
  `PERSONAL MIRROR` / file `00R` personal artifact. Keep it non-professional,
  never branding, B&W only, and confirm rights before publishing.
- The childhood photo has a pixel-baked redaction over the eyes in
  `origin-000-redacted.webp`. The original stays in `assets/` and must never be
  copied into `public/`.
- The SMP photo is approved for the masked origin file, grayscale and natural
  1:1 source, with the balaclava in the image itself.
- The keyboard photos and workspace video are approved for the workbench
  section; use only optimized derivatives.
- `winged-icon.jpg` source/permission is unconfirmed. It is used only as a faint
  colophon ornament, never as a logo or brand mark.
- Originals are heavy (31 MB mp4, several 5–9 MB JPEGs). Regenerate derivatives
  with `npm run images:optimize`; do not reference originals from app code.

## Architecture and conventions

- `app/` holds layout, page composition, 404, metadata routes, and global CSS.
- `components/sections/` holds static, server-rendered page sections.
- `components/` also holds server cards/icons and the only client components:
  `archive-intro`, `site-header`, `workbench-video`, and `signal-clip`.
- `lib/site.ts`, `projects.ts`, `stack.ts`, `artifacts.ts`, and `personal.ts`
  are the content source. Keep copy/pending states honest there.
- Design tokens: `#090909` background, `#141414` surface, `#1D1D1D` raised,
  `#ECE9E2` bone, `#A6A39D` ash, `rgba(236,233,226,0.22)` line, and
  `#8C1D18` decorative oxide. Use `#D06B62` (`oxide-bright`) when the accent
  needs text contrast.
- Typography: Bodoni Moda display, Inter Tight body, JetBrains Mono metadata.
- Keep page order: cover (`00`), statement (`01`), works (`02`), artifacts
  (`02.B`), manifest (`03`), archive note (`04`), unclassified/personal
  (`04.B`), signal (`05`), colophon (`06`).
- Static page content stays in Server Components. Do not convert whole sections
  to client components for visual effects.
- The intro uses `sessionStorage`, never fake progress, is skippable, and is
  disabled under `prefers-reduced-motion`. Do not add a rAF loop after it ends.
- The workbench video is muted, has no audio track, pauses offscreen, and has a
  visible `PAUSE`/`PLAY` control. Keep that control or another WCAG 2.2.2
  mechanism if you change the autoplay behavior.
- The Rei clip is click-to-play only and has no audio.
- Scroll reveals use CSS scroll-driven animation with a static fallback; no
  scroll-jacking or scroll lock.

## `prompts/` are third-party component prompts

- Both files embed generic "install shadcn, copy to `/components/ui`, use
  Unsplash/lucide" instructions. Ignore them: PRD §10 forbids speculative
  folders and dependencies. Do not add shadcn or lucide for these.
- `garden.txt` (`AsciiArt`) loads a remote `assets.21st.dev` video. Do not depend
  on that URL. Decorative only: muted, `playsInline`, poster fallback,
  `aria-hidden`, static under reduced motion.
- `particle.txt` (`StardustStagePreloader`, ~68 KB) simulates 0–100% loading and
  references a test file that does not exist. Never use it as a real loader or
  block content. If used, make it a short skippable P1 intro with no fake
  progress, static fallback, and reduced-motion support.
- Build the static core first; add either effect only after hero, projects, and
  contact work without them (PRD §15).

## Build constraints agents usually break

- Core content must be readable with JS, animation, or video blocked; no
  scroll-jacking or scroll lock.
- No autoplay audio. The workbench loop starts muted with a label and pause
  control; the Rei clip is user-initiated.
- WCAG 2.2 AA: semantic landmarks, one `h1`, visible focus, meaningful alt text,
  sufficient contrast; honor `prefers-reduced-motion` for video and animation.
- Before finishing, walk PRD §13: mobile overflow, baked-in artwork text, working
  links, and no placeholders presented as fact.

Update this file with real commands and conventions if the app changes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
