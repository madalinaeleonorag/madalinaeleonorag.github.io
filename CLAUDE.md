# Portfolio: madalinaeleonorag.github.io

Personal portfolio of Madalina Eleonora Gheorghe, used for job applications including product design internships. Angular 21, zoneless, prerendered to static HTML (`outputMode: static`) with incremental hydration. Dark theme with its own colour tokens (no Angular Material), SCSS, Inter font self-hosted from `@fontsource-variable/inter`.

## Commands

```bash
npm start      # dev server at http://localhost:4200
npm test       # Vitest
npm run build  # writes to docs/, then copies docs/404/index.html to docs/404.html
```

Deployment: GitHub Pages serves `docs/` from `master`. The workflow in `.github/workflows` builds on every push and auto-commits `docs/` ("chore: auto-build output"). Do not commit a local `docs/` build by hand; to verify a build locally, use `npx ng build --output-path <temp dir>`.

On Windows, run `npm test` from a path with an uppercase drive letter (`C:\...`). From `c:\...` (how VS Code may open the folder) Vitest loads its modules twice and every test file fails with "Vitest failed to access its internal state".

## Structure

- `src/app/pages/`: `home` (single long page; its sections below the fold are components in `home/sections/`, loaded with `@defer (on viewport; hydrate on viewport)` so their code and data stay out of the first bundle), `work-experience` (overview of the roles; each role has its own page, `work-experience/job`, at `/work-experience/<company slug>` with previous and next links. `work-experience/jobs.ts` prepares the data; route resolvers set the page title, description and breadcrumb, and `app.routes.server.ts` prerenders one page per role), `reviews`, `dosesync` (case study), `project-case-study` (thesis projects), `not-found`.
- `src/app/database/`: all content as typed TypeScript data. Change text here, not in templates.
- `src/app/interfaces/`: types for that content.
- `src/app/components/`: `chip`, `review-card`, `svg-icon` (inline UI icons; company logos are files in `public/assets/logos/`, mapped by name in `svg-icon.ts`), `tab-bar` (accessible tabs for the case studies), `image-viewer`.
- Routes in `src/app/app.routes.ts`; every subpage sets `data: { breadcrumb: '...' }` for the back-link bar in `app.html`, and `data: { description: '...' }`, which `services/seo.ts` turns into the description, canonical and social tags of the prerendered page. A page can also set `data.breadcrumbParent: { label, link }` for a middle level. Add new pages to `public/sitemap.xml` (including a new role).
- Images go in `public/assets/` and are referenced with the `assetPath` pipe (`'name.webp'` → `/assets/name.webp`). Keep them close to their largest display size (about 1200 px wide for screenshots, 600 px for logos).
- In-page links on the home page call `scrollTo()` instead of relying on `href="#id"`: with `<base href="/">` a bare `#id` resolves to `/#id`.

## Styling

- Colours: `--md-sys-color-primary` is a light tint that is readable as text on the dark background; the brand colour is `--md-sys-color-primary-container` (fills, with `--md-sys-color-on-primary-container` text). Do not use the brand colour for text. Never hard-code colours in components: use the tokens: `rgb(var(--tint-rgb) / alpha)` for translucent backgrounds behind text (it never gets pale, even with near-white themes), `rgb(var(--brand-rgb) / alpha)` only for borders and glows, and `color-mix()` with a token for translucent surfaces.
- Themes: the theme button (top right, `components/theme-picker`) switches between Signature Burgundy (the stylesheet default) and the Pantone Colors of the Year in `database/pantone.ts`; add each new year at the top of that list in December. `theme/palette.ts` generates every colour token from the chosen colour in OKLCH, and `theme/palette.spec.ts` checks the contrast of every theme, so a new colour that fails is caught by `npm test`. `theme/theme.ts` applies the tokens on `<html>` and saves them in localStorage; an inline script in `index.html` re-applies them before the first paint.
- HDR headings: add `class="hdr-text"` to a white heading to make it brighter than white on HDR screens (Chrome 137+, Safari 26). CSS colours cannot exceed SDR white, so the rule in `styles.scss` paints the text with `public/assets/hdr-white.jpg`, a white JPEG with a gain map (up to 4x), through `background-clip: text`, inside `@media (dynamic-range: high)`. Other screens keep the normal colour. Use it on page titles only, not body text or coloured text.
- Shapes: `--radius-full` (pills) for anything you press: buttons, chips, fields, nav indicators. `--border-radius` (`--radius-lg`, 24px) for cards and panels; elements inside a card use `--radius-md`.
- Buttons: `<button>` for actions, `<a class="btn btn-primary|btn-secondary">` for navigation and downloads. Labels in sentence case.
- Motion: `.glass-card`, `.block` and `.reveal` fade in on scroll (CSS scroll-driven animations); project images share a `view-transition-name` with their case study hero. Everything respects `prefers-reduced-motion`.

## Analytics

`src/app/services/analytics.ts` uses GoatCounter (cookieless, no consent banner). It counts a page view on every route change and custom events through `Analytics.trackEvent()` (CV downloads, outbound links). It is off when `GOATCOUNTER_CODE` is empty and on localhost. Do not add Google Analytics or other cookie-based tracking without also adding a consent banner (EU visitors).

## Conventions

- Standalone components, `ChangeDetectionStrategy.OnPush`, new control flow (`@if`, `@for`).
- Use the global tokens in `src/styles/styles.scss` (`--space-*`, `--page-gutter`, `--border-radius`, `--md-sys-color-*`) and breakpoints from `src/styles/breakpoints.scss`.
- Component style budget: warning at 10 kB, error at 15 kB.
- Content is in English, plain and factual.

## DoseSync case study

`/projects/dosesync` presents the app in three tabs: **The App** (for potential users, replaces a product landing page), **Product** (design case study) and **Architecture & Development**. Tabs can be linked directly with `#app`, `#product`, `#architecture`.

- All content is in `src/app/database/dosesync.ts`. An empty `image` field renders a placeholder; real screenshots go in `public/assets/dosesync/`.
- The source of truth is `../DoseSync/docs/product-vision.md` plus the DoseSync code. Keep the case study consistent with both, and keep the "Where the code is today" section honest about what is built vs. planned.
- The DoseSync repo is private, so the page does not link to it.

## Thesis case studies

`/projects/waffic` (bachelor's, 2018) and `/projects/university-rating` (master's, 2020) share one data-driven page, `src/app/pages/project-case-study`, picked by `data.caseStudy` in the route. Tabs: **Product**, **Architecture & Development** and **Thesis** (shown only when `thesis` is set), linkable with `#product`, `#architecture`, `#thesis`.

- Content is in `src/app/database/waffic.ts` and `university-rating.ts`, typed by `src/app/interfaces/case-study.ts`. Screenshots are in `public/assets/waffic/` and `public/assets/university-rating/`.
- Sources: the public repos (Waffic is Vue 2 + Vuex, not Angular; UniversityRating is Angular 8, published as "UniView") and the thesis documents (both in Romanian). Keep "Looking back" honest about the weaknesses of the student code.
- Never publish screenshots that show real people's names, emails or birth dates (the admin messages, user search and profile screens).
- Layout shared with DoseSync lives in `src/styles/_case-study.scss`; each page adds only its own rules.
