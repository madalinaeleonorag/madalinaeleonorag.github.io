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
}
