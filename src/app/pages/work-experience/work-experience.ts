import { Component, computed, inject } from '@angular/core';
import { WORK_EXPERIENCE } from '../../database/experience';
import { getReviewsForAssignment } from '../../database/reviews';
import { IAssignment, IWorkExperience } from '../../interfaces/work-experience';
import { Chip } from '../../components/chip/chip';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { Router } from '@angular/router';
import { ReviewCard } from '../../components/review-card/review-card';

@Component({
  selector: 'app-work-experience',
  imports: [SvgIcon, Chip, ReviewCard],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience {
  private router = inject(Router);

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
