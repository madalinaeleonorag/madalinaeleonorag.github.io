import { Component, input } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { AssignmentComponent } from './assignment/assignment.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@Component({
  selector: 'experience',
  imports: [AssignmentComponent, TechnologiesComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experience = input.required<Experience>();

  public getUniqueTechnologiesByCompany(): string[] {
    const allTechnologies = this.experience().assignments.flatMap(
      (assignment: any) => assignment.technologies
    );

    return Array.from(new Set(allTechnologies));
  }
}
