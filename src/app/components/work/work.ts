import { Component, computed, input } from '@angular/core';
import { Router } from '@angular/router';
import { Chip } from '../chip/chip';
import { SvgIcon } from '../svg-icon/svg-icon';
import { IAssignment, IWorkExperience } from '../../interfaces/work-experience';

@Component({
  selector: 'app-work',
  imports: [SvgIcon, Chip],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class WorkComponent {
  job = input.required<IWorkExperience>();
  showReviewsButton = input<boolean>(false);

  lastAssignmentEndDate = computed(() => {
    const lastAssignment = this.job().assignments[this.job().assignments.length - 1];
    return lastAssignment ? lastAssignment.endDate : null;
  });

  totalAssignments = computed(() => this.job().assignments?.length || 0);

  constructor(private readonly router: Router) {}

  viewReviews(assignment: IAssignment) {
    this.router.navigate(['/reviews'], {
      queryParams: {
        company: this.job().company,
        startDate: assignment.startDate,
        endDate: assignment.endDate,
      },
    });
  }
}
