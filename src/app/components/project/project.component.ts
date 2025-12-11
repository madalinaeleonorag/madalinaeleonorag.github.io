import { Component, input } from '@angular/core';
import { GithubProject } from '../../models/github-project.model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  project = input.required<GithubProject>();

  shorterDescription(): string {
    return this.project().description && this.project().description?.length < 50
      ? this.project().description
      : this.project().description?.slice(0, 50) + '...';
  }
}
