import { booleanAttribute, Component, computed, input } from '@angular/core';
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
  isSummaryView = input(false, { transform: booleanAttribute });

  overallStartDate = computed(() => {
    const arr = this.job().assignments;
    return arr.length ? arr[arr.length - 1].startDate : '';
  });

  overallEndDate = computed(() => {
    const arr = this.job().assignments;
    return arr.length ? arr[0].endDate : '';
  });

  isCurrentJob = computed(() => this.overallEndDate() === 'Present');

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
