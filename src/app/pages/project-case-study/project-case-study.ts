import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { Chip } from '../../components/chip/chip';
import { Zoomable } from '../../components/image-viewer/zoomable';
import { AssetPathPipe } from '../../pipes/asset-path-pipe';
import { Analytics } from '../../services/analytics';
import { CaseStudy } from '../../interfaces/case-study';
import { WAFFIC } from '../../database/waffic';
import { UNIVERSITY_RATING } from '../../database/university-rating';

/** Case studies by the `caseStudy` key in the route data. */
const CASE_STUDIES: Record<string, CaseStudy> = {
  waffic: WAFFIC,
  'university-rating': UNIVERSITY_RATING,
};

/**
 * Case study page for the thesis projects (/projects/waffic, /projects/university-rating).
 * Tabs can be linked directly with #product, #architecture and #thesis.
 */
@Component({
  selector: 'app-project-case-study',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTabsModule, NgTemplateOutlet, Chip, AssetPathPipe, Zoomable],
  templateUrl: './project-case-study.html',
  styleUrl: './project-case-study.scss',
})
export class ProjectCaseStudy {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private analytics = inject(Analytics);

  readonly key: string = this.route.snapshot.data['caseStudy'];
  readonly project = CASE_STUDIES[this.key];

  private readonly fragments = ['product', 'architecture', ...(this.project.thesis ? ['thesis'] : [])];

  private fragment = toSignal(this.route.fragment.pipe(map((f) => f ?? '')), { initialValue: '' });
  selectedTab = computed(() => Math.max(this.fragments.indexOf(this.fragment()), 0));

  /** Moves the "More screens" carousel by most of its visible width. */
  scrollGallery(track: HTMLElement, direction: 1 | -1) {
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
  }

  selectTab(index: number) {
    this.router.navigate([], { fragment: this.fragments[index], replaceUrl: true });
  }

  trackLink(url: string) {
    this.analytics.trackEvent('outbound-link', url);
  }
}
