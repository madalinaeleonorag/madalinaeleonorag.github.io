import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Chip } from '../../../components/chip/chip';
import { ReviewCard } from '../../../components/review-card/review-card';
import { SvgIcon } from '../../../components/svg-icon/svg-icon';
import { JOBS } from '../jobs';

/**
 * One role at `/work-experience/:company`, with links to the previous and next role
 * (in the order of the overview: newest first). The route resolver has already checked
 * that the company exists.
 */
@Component({
  selector: 'app-job',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIcon, Chip, ReviewCard, RouterLink],
  templateUrl: './job.html',
  styleUrl: './job.scss',
})
export class Job {
  /** Route parameter (component input binding). */
  readonly company = input.required<string>();

  private readonly index = computed(() =>
    Math.max(
      0,
      JOBS.findIndex((job) => job.slug === this.company()),
    ),
  );
  readonly job = computed(() => JOBS[this.index()]);
  readonly position = computed(() => `${this.index() + 1} of ${JOBS.length}`);
  readonly previous = computed(() => JOBS[this.index() - 1]);
  readonly next = computed(() => JOBS[this.index() + 1]);
}
