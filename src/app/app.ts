import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { ImageViewerDialog } from './components/image-viewer/image-viewer';
import { Analytics } from './services/analytics';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ImageViewerDialog],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private router = inject(Router);

  constructor() {
    inject(Analytics).init();
  }

  private urlSignal = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url),
    ),
  );

  isHomePage = computed(() => {
    const currentUrl = this.urlSignal() || '';
    const basePath = currentUrl.split('#')[0].split('?')[0];

    return basePath === '/' || basePath === '';
  });

  breadcrumb = computed(() => {
    this.urlSignal();
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.data['breadcrumb'] ?? '';
  });
}
