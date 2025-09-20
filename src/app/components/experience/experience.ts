import { Component, Input } from '@angular/core';
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
  @Input() experience: Experience = {} as Experience;

  public getUniqueTechnologiesByCompany(experience: any): string[] {
    const allTechnologies = experience.assignments.flatMap(
      (assignment: any) => assignment.technologies
    );

    return Array.from(new Set(allTechnologies));
  }

  public switchShowMore(experience: any): void {
    experience.showMore = !experience.showMore;
  }
}
