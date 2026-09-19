import { AfterViewInit, Component, computed, inject } from '@angular/core';
import { WORK_EXPERIENCE } from '../../database/experience';
import { getReviewsForAssignment } from '../../database/reviews';
import { IAssignment, IWorkExperience } from '../../interfaces/work-experience';
import { Chip } from '../../components/chip/chip';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewCard } from '../../components/review-card/review-card';

@Component({
  selector: 'app-work-experience',
  imports: [SvgIcon, Chip, ReviewCard],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience implements AfterViewInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (!fragment) {
        return;
      }

      setTimeout(() => {
        const target = document.getElementById(fragment);

        if (!target) {
          return;
        }

        const offset = 88;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'auto' });
      });
    });
  }

  enrichedWorkExperience = computed(() => {
    return WORK_EXPERIENCE.map((job) => {
      const enrichedAssignments = job.assignments.map((assignment) => ({
        ...assignment,
        topReviews: getReviewsForAssignment(
          job.company,
          assignment.startDate,
          assignment.endDate,
          3,
        ),
      }));
      return { ...job, assignments: enrichedAssignments };
    });
  });

  getOverallStartDate(job: IWorkExperience) {
    const arr = job.assignments;
    return arr.length ? arr[arr.length - 1].startDate : '';
  }

  getOverallEndDate(job: IWorkExperience) {
    const arr = job.assignments;
    return arr.length ? arr[0].endDate : '';
  }

  isCurrentJob(job: IWorkExperience) {
    return this.getOverallEndDate(job) === 'Present';
  }

  slugify(value: string): string {
    return value
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  viewReviews(job: IWorkExperience, assignment: IAssignment) {
    this.router.navigate(['/reviews'], {
      queryParams: {
        company: job.company,
        startDate: assignment.startDate,
        endDate: assignment.endDate,
      },
    });
  }
}
