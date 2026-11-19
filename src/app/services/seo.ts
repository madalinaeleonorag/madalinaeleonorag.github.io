import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export const SITE_URL = 'https://madalinaeleonorag.github.io';
const DEFAULT_IMAGE = `${SITE_URL}/assets/portfolio-preview.png`;
const DEFAULT_DESCRIPTION =
  'Portfolio of Mădălina-Eleonora Gheorghe, a UX-focused digital professional in transition, learning product strategy, design thinking, and business-aligned digital delivery.';

/**
 * Per-page description, canonical URL and social preview tags.
 * Runs during prerendering too, so every static page ships with its own tags.
 * Pages set `data: { description }` in app.routes.ts; the title comes from the route `title`.
 */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  init() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.update());
  }

  private update() {
    let route: ActivatedRouteSnapshot = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const description: string = route.data['description'] ?? DEFAULT_DESCRIPTION;
    // GitHub Pages serves each prerendered page as a folder, so the final URL ends with '/'.
    const path = this.router.url.split(/[?#]/)[0].replace(/\/?$/, '/');
    const url = SITE_URL + path;
    const title = route.title ?? this.title.getTitle();

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'robots',
      content: route.data['noindex'] ? 'noindex' : 'index, follow',
    });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: DEFAULT_IMAGE });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    // The not-found page is served at any URL, so it gets no canonical.
    this.setCanonical(route.data['noindex'] ? null : url);
  }

  private setCanonical(url: string | null) {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!url) {
      link?.remove();
      return;
    }
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }
}
