import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Chip } from '../../../components/chip/chip';
import { Zoomable } from '../../../components/image-viewer/zoomable';
import { FEATURED_PROJECTS } from '../../../database/projects';
import { AssetPathPipe } from '../../../pipes/asset-path-pipe';
import { Analytics } from '../../../services/analytics';

/**
 * Project cards. A project with a case study gives its image the view-transition-name
 * `project-<id>`; the case study hero uses the same name, so the image moves into place
 * when the case study opens.
 */
@Component({
  selector: 'app-home-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Chip, Zoomable, AssetPathPipe],
  templateUrl: './home-projects.html',
  styleUrl: './home-projects.scss',
})
export class HomeProjects {
  readonly projects = FEATURED_PROJECTS;
  private readonly analytics = inject(Analytics);

  trackOutbound(url: string) {
    this.analytics.trackEvent('outbound-link', url);
  }
}
