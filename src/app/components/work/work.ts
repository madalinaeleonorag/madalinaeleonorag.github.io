import { Component, input } from '@angular/core';
import { Chip } from '../chip/chip';
import { SvgIcon } from '../svg-icon/svg-icon';
import { IWorkExperience } from '../../interfaces/work-experience';

@Component({
  selector: 'app-work',
  imports: [SvgIcon, Chip],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class WorkComponent {
  job = input.required<IWorkExperience>();
}
