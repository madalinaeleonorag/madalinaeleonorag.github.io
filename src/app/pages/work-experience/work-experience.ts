import { Component, inject } from '@angular/core';
import { WORK_EXPERIENCE } from '../../database/experience';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';
import { IAssignment, IWorkExperience } from '../../interfaces/work-experience';
import { IReview } from '../../interfaces/review';
import { Chip } from '../../components/chip/chip';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  imports: [SvgIcon, Chip],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience {
  readonly workExperience = WORK_EXPERIENCE;

  private router = inject(Router);

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

  getTopReviewsForAssignment(company: string, assignment: IAssignment): IReview[] {
    const parseDate = (dateStr: string): number => {
      if (!dateStr || dateStr.toLowerCase() === 'present') {
        return new Date().getTime();
      }
      return new Date(`${dateStr} 1`).getTime();
    };

    const startTime = parseDate(assignment.startDate);
    const endTime = parseDate(assignment.endDate);

    return STAKEHOLDER_REVIEWS.filter((review) => {
      const reviewTime = review.date.getTime();

      const isSameCompany = review.company === company;
      const isInPeriod = reviewTime >= startTime && reviewTime <= endTime;
      const isTop = review.isTop === true;

      return isSameCompany && isInPeriod && isTop;
    }).slice(0, 3);
  }
}
