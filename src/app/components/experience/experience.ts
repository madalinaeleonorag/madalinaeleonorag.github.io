import { Component, input } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { AssignmentComponent } from './assignment/assignment';
import { TechnologiesComponent } from './technologies/technologies';

@Component({
  selector: 'experience',
  imports: [AssignmentComponent, TechnologiesComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
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
