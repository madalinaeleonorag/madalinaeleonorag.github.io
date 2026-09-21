import { AfterViewInit, Component, computed, inject } from '@angular/core';
import { WORK_EXPERIENCE } from '../../database/experience';
import { REVIEW_BY_ID } from '../../database/reviews';
import { IAssignment, IWorkExperience } from '../../interfaces/work-experience';
import { IReview } from '../../interfaces/review';
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
        topReviews: (assignment.reviewIds ?? [])
          .map((reviewId) => REVIEW_BY_ID[reviewId])
          .filter((review): review is IReview => Boolean(review))
          .slice(0, 3),
      }));
      return { ...job, assignments: enrichedAssignments };
    });
  });

  isCurrentJob(job: IWorkExperience) {
    return job.endDate === 'Present';
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

  viewReviews(assignment: IAssignment) {
    this.router.navigate(['/reviews'], {
      queryParams: {
        assignmentId: assignment.id,
      },
    });
  }
}
