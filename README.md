# WIZNYU / ARCHIVE 001

A monochrome personal archive built around an archival-system metaphor: records,
manifest, signal, and a small set of unclassified files. The UI keeps English
structural labels and Indonesian body copy.

## Stack

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS 4
- Sharp for image derivatives and Open Graph output
- FFmpeg (via `ffmpeg-static`) for the muted workbench loop and Rei clip

No CMS, auth, database, analytics, contact backend, WebGL, audio, shadcn, icon
package, or animation library.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run typecheck
npm run build
npm run start
```

There is no lint or test suite in this repo yet. Do not invent commands or claim
a suite passes.

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before a
production deploy. Without it, canonical URLs and the sitemap fall back to
`http://localhost:3000`.

## Content still pending

The site intentionally renders visible pending states instead of inventing
content. Fill these before calling the archive finished:

- `lib/projects.ts` — real project records, roles, years, outcomes, links.
- `lib/stack.ts` — the owner's real tools; empty categories render
  `AWAITING INPUT`.
- `lib/site.ts` — email, social links, final bio/positioning, production URL.
- `lib/artifacts.ts` — BELONG/BURN/LUSH year and medium if the owner wants them.
- `lib/personal.ts` — origin captions and Rei note revisions.

BELONG/BURN/LUSH are personal artworks, not professional case studies. Do not
assign clients, roles, metrics, awards, or quotes that the owner has not
confirmed.

## Assets

Originals live in `assets/` and are read-only. Public derivatives are generated
into `public/images/`, `public/media/`, and `public/textures/`.

```bash
npm run images:optimize
```

This rewrites the derivatives from the originals and requires Sharp plus the
`ffmpeg-static` binary. It does not modify `assets/`, `prd/`, or `prompts/`.

- BURN and LUSH keep their original color; the rest of the UI is monochrome.
- BELONG, BURN, and LUSH contain baked-in text. No headings or overlays cover it;
  the mobile layouts were checked for readability.
- The childhood photo has a pixel-baked redaction over the eyes. The original is
  never copied into `public/`.
- The SMP photo is grayscale and masked by the balaclava in the image itself.
- Rei Ayanami is a third-party character, presented as a personal artifact, not
  branding. Rights should be confirmed before public launch.
- The winged icon is used only as a faint colophon ornament; its source and
  permission are still unconfirmed. It is not presented as a logo.

## Structure

```text
app/
  layout.tsx        fonts, metadata, skip link, header, intro
  page.tsx          composed static sections
  globals.css       tokens, grain, star field, reveals, reduced motion
  not-found.tsx
  robots.ts
  sitemap.ts
components/
  sections/         server-rendered page sections
  archive-intro.tsx client, session-scoped star intro
  site-header.tsx   client, active chapter + mobile index
  workbench-video.tsx client, muted autoplay with pause control
  signal-clip.tsx   client, click-to-play Rei clip
  ...               server cards, icons, headers
lib/                content and media metadata
scripts/            reproducible image/video derivative pipeline
public/             optimized derivatives only
```

Static page content stays in Server Components. Client components are limited to
the intro, header state, and media controls.

## Behavior and accessibility

- The star intro runs once per session, can be skipped, never blocks content
  permanently, shows no fake loading progress, and is disabled under
  `prefers-reduced-motion`.
- Core content, images, and copy remain readable with JavaScript disabled.
- No scroll-jacking or scroll lock. Hash targets account for the sticky header.
- The workbench video is muted, has no audio track, stops when offscreen, and has
  a visible `PAUSE`/`PLAY` control. Under reduced motion it does not autoplay.
- The Rei clip is click-to-play only and has no audio.
- Scroll reveals use CSS scroll-driven animation where supported; otherwise the
  static content is visible immediately.
- There are no trackers, cookies, external media URLs, or autoplay audio. The
  intro uses `sessionStorage` only to remember that it has been seen.
