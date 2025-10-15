import { Component, Input } from '@angular/core';
import { Assignment } from '../../../models/experience.model';
import { TechnologiesComponent } from '../technologies/technologies.component';

@Component({
  selector: 'assignment',
  imports: [TechnologiesComponent],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss',
})
export class AssignmentComponent {
  @Input() assignment: Assignment = {} as Assignment;
}
