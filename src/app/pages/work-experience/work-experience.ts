import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { JOBS, findJob } from './jobs';

/** Overview of all roles; each card opens that role's page (`/work-experience/<slug>`). */
@Component({
  selector: 'app-work-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIcon, RouterLink],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience {
  readonly jobs = JOBS.map((job) => ({
    ...job,
    techPreview: job.techStack.slice(0, 4),
    moreTech: Math.max(0, job.techStack.length - 4),
  }));

  constructor() {
    // Older links point at a company with a fragment (/work-experience#cognizant). The static
    // host never sends the fragment, so this runs in the browser once the page is drawn.
    const route = inject(ActivatedRoute);
    const router = inject(Router);
    afterNextRender(() => {
      const job = findJob(route.snapshot.fragment);
      if (job) {
        router.navigate(['/work-experience', job.slug], { replaceUrl: true });
      }
    });
  }
}
