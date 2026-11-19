import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Tab, TabBar } from '../../components/tab-bar/tab-bar';
import { Chip } from '../../components/chip/chip';
import { Zoomable } from '../../components/image-viewer/zoomable';
import { AssetPathPipe } from '../../pipes/asset-path-pipe';
import { DOSESYNC } from '../../database/dosesync';

// Fragments let each tab be shared directly, e.g. /projects/dosesync#architecture
const TABS: Tab[] = [
  { id: 'app', label: 'The App' },
  { id: 'product', label: 'Product' },
  { id: 'architecture', label: 'Architecture & Development' },
];
const TAB_FRAGMENTS = TABS.map((tab) => tab.id);

@Component({
  selector: 'app-dosesync',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TabBar, NgTemplateOutlet, Chip, AssetPathPipe, Zoomable, RouterLink],
  templateUrl: './dosesync.html',
  styleUrl: './dosesync.scss',
})
export class DoseSync {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  readonly project = DOSESYNC;
  readonly tabs = TABS;

  selectedTab = toSignal(
    this.route.fragment.pipe(map((fragment) => Math.max(TAB_FRAGMENTS.indexOf(fragment ?? ''), 0))),
    { initialValue: 0 },
  );

  /** Moves the "More screens" carousel by most of its visible width. */
  scrollGallery(track: HTMLElement, direction: 1 | -1) {
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
  }

  selectTab(index: number) {
    this.router.navigate([], {
      fragment: TAB_FRAGMENTS[index],
      replaceUrl: true,
    });
  }
}
