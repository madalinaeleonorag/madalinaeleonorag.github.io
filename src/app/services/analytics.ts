import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

// GoatCounter: free, cookieless visitor counting, so no consent banner is needed.
// Create a site at https://www.goatcounter.com and put its code here
// (the "madalina" in https://madalina.goatcounter.com). Empty disables tracking.
const GOATCOUNTER_CODE = 'madalinaeleonorag';

interface GoatCounter {
  count(vars: { path: string; title?: string; event?: boolean }): void;
}

@Injectable({ providedIn: 'root' })
export class Analytics {
  private router = inject(Router);
  private document = inject(DOCUMENT);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  init() {
    if (!this.isBrowser || !GOATCOUNTER_CODE || this.isLocalhost()) {
      return;
    }

    const script = this.document.createElement('script');
    script.async = true;
    script.src = 'https://gc.zgo.at/count.js';
    script.dataset['goatcounter'] = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
    // Page views are counted on each route change below, so skip the automatic one.
    script.dataset['goatcounterSettings'] = JSON.stringify({ no_onload: true });
    // Count the first page once, whether the script or the first navigation finishes first.
    let navigated = false;
    script.onload = () => navigated && this.trackPage(this.router.url);
    this.document.head.appendChild(script);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        navigated = true;
        this.trackPage(event.urlAfterRedirects);
      });
  }

  trackEvent(name: string, title?: string) {
    this.goatcounter()?.count({ path: name, title: title ?? name, event: true });
  }

  private trackPage(url: string) {
    this.goatcounter()?.count({ path: url.split('#')[0].split('?')[0] || '/' });
  }

  private goatcounter(): GoatCounter | undefined {
    return this.isBrowser
      ? (window as unknown as { goatcounter?: GoatCounter }).goatcounter
      : undefined;
  }

  private isLocalhost() {
    return ['localhost', '127.0.0.1'].includes(this.document.location.hostname);
  }
}
