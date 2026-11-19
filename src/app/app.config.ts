import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
  withIncrementalHydration,
} from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withViewTransitions({ skipInitialTransition: true }),
      // Query params bind to component inputs of the same name (used by the Reviews filters).
      withComponentInputBinding(),
      // New pages open at the top; Back restores the previous position.
      // Anchor scrolling keeps fragment-only changes (case study tabs) from jumping to the top.
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
    // Prerendered HTML is reused; `@defer (hydrate on ...)` blocks load their JavaScript only when needed.
    provideClientHydration(withEventReplay(), withIncrementalHydration()),
  ],
};
