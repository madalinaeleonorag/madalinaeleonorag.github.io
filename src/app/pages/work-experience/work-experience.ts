import { Component } from '@angular/core';
import { WORK_EXPERIENCE } from '../../database/experience';
import { WorkComponent } from '../../components/work/work';

@Component({
  selector: 'app-work-experience',
  imports: [WorkComponent],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience {
  readonly workExperience = WORK_EXPERIENCE;
}
