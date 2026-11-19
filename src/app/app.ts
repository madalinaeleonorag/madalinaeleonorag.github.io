import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { ImageViewerDialog } from './components/image-viewer/image-viewer';
import { ThemePicker } from './components/theme-picker/theme-picker';
import { Analytics } from './services/analytics';
import { Seo } from './services/seo';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, ImageViewerDialog, ThemePicker],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);

  constructor() {
    inject(Analytics).init();
    inject(Seo).init();

    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const stop = trackCardSpotlight();
      destroyRef.onDestroy(stop);
    });
  }

  private readonly urlSignal = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url),
    ),
  );

  readonly isHomePage = computed(() => {
    const basePath = (this.urlSignal() || '').split(/[?#]/)[0];
    return basePath === '/' || basePath === '';
  });

  /** `href="#main"` would resolve against <base href="/"> and leave the page, so focus directly. */
  skipToContent(event: Event) {
    event.preventDefault();
    document.getElementById('main')?.focus();
  }

  private readonly leafData = computed(() => {
    this.urlSignal();
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.data;
  });

  readonly breadcrumb = computed<string>(() => this.leafData()['breadcrumb'] ?? '');
  /** Optional middle level, e.g. Home / Work Experience / Cognizant. */
  readonly breadcrumbParent = computed<{ label: string; link: string } | undefined>(
    () => this.leafData()['breadcrumbParent'],
  );
}

/**
 * Moves the light inside `.glass-card` elements with the pointer (see styles.scss).
 * One passive listener for the whole page; it touches only the card under the pointer.
 */
function trackCardSpotlight(): () => void {
  if (typeof matchMedia !== 'function' || !matchMedia('(hover: hover)').matches) {
    return () => {};
  }
  const onMove = (event: PointerEvent) => {
    const card = (event.target as Element | null)?.closest?.<HTMLElement>('.glass-card');
    if (!card) {
      return;
    }
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };
  document.addEventListener('pointermove', onMove, { passive: true });
  return () => document.removeEventListener('pointermove', onMove);
}
