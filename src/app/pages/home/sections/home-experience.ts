import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIcon } from '../../../components/svg-icon/svg-icon';
import { WORK_EXPERIENCE } from '../../../database/experience';
import { slugify } from '../../../utils/slugify';

/** One card per employer, linking to that role's page, /work-experience/<slug>. */
@Component({
  selector: 'app-home-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, SvgIcon],
  templateUrl: './home-experience.html',
  styleUrl: './home-experience.scss',
})
export class HomeExperience {
  readonly jobs = WORK_EXPERIENCE.map((job) => {
    const end = job.endDate || job.assignments[0]?.endDate;
    return {
      company: job.company,
      role: job.role,
      logo: job.logo,
      slug: slugify(job.company),
      start: job.startDate || job.assignments[0]?.startDate,
      end,
      current: end === 'Present',
    };
  });
}
