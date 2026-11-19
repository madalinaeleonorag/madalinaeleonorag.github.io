import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { Chip } from '../../components/chip/chip';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { SOCIAL_LINKS } from '../../database/social-links';
import { EXPERTISE } from '../../database/expertise';
import { Analytics } from '../../services/analytics';
import { HomeExperience } from './sections/home-experience';
import { HomeCredentials } from './sections/home-credentials';
import { HomeProjects } from './sections/home-projects';
import { HomeReviews } from './sections/home-reviews';

/**
 * The landing page. The hero and expertise render with the first JavaScript bundle;
 * the sections below are in `@defer` blocks: prerendered as HTML, with their code and data
 * loaded only when they scroll into view.
 */
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIcon, Chip, HomeExperience, HomeCredentials, HomeProjects, HomeReviews],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly sections = [
    { id: 'hero', label: 'Home', short: 'Home', icon: 'home' },
    { id: 'expertise', label: 'Expertise', short: 'Expertise', icon: 'build' },
    { id: 'experience', label: 'Work Experience', short: 'Work', icon: 'work' },
    { id: 'projects', label: 'Projects & Case Studies', short: 'Projects', icon: 'folder' },
    { id: 'reviews', label: 'Reviews', short: 'Reviews', icon: 'star' },
    {
      id: 'credentials',
      label: 'Education & Credentials',
      short: 'Credentials',
      icon: 'certificate',
    },
  ];
  readonly socialLinks = SOCIAL_LINKS;
  readonly expertise = EXPERTISE;

  /** The section currently on screen, highlighted in the side / bottom navigation. */
  readonly activeSection = signal('hero');

  private readonly analytics = inject(Analytics);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      // At most one update per frame while scrolling. Sections are looked up by id on every
      // update rather than kept, because hydration and hot reload can replace those elements.
      let frame = 0;
      const schedule = () => {
        frame ||= requestAnimationFrame(() => {
          frame = 0;
          this.activeSection.set(this.currentSection());
        });
      };
      addEventListener('scroll', schedule, { passive: true });
      addEventListener('resize', schedule, { passive: true });
      schedule();
      destroyRef.onDestroy(() => {
        removeEventListener('scroll', schedule);
        removeEventListener('resize', schedule);
        cancelAnimationFrame(frame);
      });
    });
  }

  /** The last section whose top has passed the middle of the screen; the last one at the very bottom. */
  private currentSection(): string {
    const ids = this.sections.map((section) => section.id);
    const root = document.documentElement;
    if (scrollY > 0 && scrollY + innerHeight >= root.scrollHeight - 2) {
      return ids[ids.length - 1];
    }
    let current = ids[0];
    for (const id of ids) {
      const top = document.getElementById(id)?.getBoundingClientRect().top;
      if (top !== undefined && top <= innerHeight / 2) {
        current = id;
      }
    }
    return current;
  }

  /** In-page links: `href="#id"` would resolve against <base href="/"> on other pages, so scroll here. */
  scrollTo(id: string, event: Event) {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    target.scrollIntoView({ block: 'start' });
    history.replaceState(history.state, '', `#${id}`);
    this.activeSection.set(id);
  }

  trackDownload(file: string) {
    this.analytics.trackEvent(`download-${file}`, `Downloaded ${file}`);
  }

  trackOutbound(url: string) {
    this.analytics.trackEvent('outbound-link', url);
  }
}
