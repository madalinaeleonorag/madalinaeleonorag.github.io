import { Component, Input } from '@angular/core';
import { Assignment } from '../../../interfaces/experience';
import { TechnologiesComponent } from '../technologies/technologies';

@Component({
  selector: 'assignment',
  imports: [TechnologiesComponent],
  templateUrl: './assignment.html',
  styleUrl: './assignment.scss',
})
export class AssignmentComponent {
  @Input() assignment: Assignment = {} as Assignment;
}
