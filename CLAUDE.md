# Portfolio: madalinaeleonorag.github.io

Personal portfolio of Madalina Eleonora Gheorghe, used for job applications including product design internships. Angular 21 with SSR prerendering (`outputMode: static`), Angular Material dark theme (red palette), SCSS.

## Commands

```bash
npm start      # dev server at http://localhost:4200
npm test       # Vitest
npm run build  # writes to docs/
```

Deployment: GitHub Pages serves `docs/` from `master`. The workflow in `.github/workflows` builds on every push and auto-commits `docs/` ("chore: auto-build output"). Do not commit a local `docs/` build by hand; to verify a build locally, use `npx ng build --output-path <temp dir>`.

## Structure

- `src/app/pages/`: `home` (single long page with sections and side nav), `work-experience`, `reviews`, `dosesync` (case study).
- `src/app/database/`: all content as typed TypeScript data. Change text here, not in templates.
- `src/app/interfaces/`: types for that content.
- `src/app/components/`: `chip`, `review-card`, `svg-icon`.
- Routes in `src/app/app.routes.ts`; every subpage sets `data: { breadcrumb: '...' }` for the back-link bar in `app.html`.
- Images go in `public/assets/` and are referenced with the `assetPath` pipe (`'name.webp'` → `/assets/name.webp`).

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
