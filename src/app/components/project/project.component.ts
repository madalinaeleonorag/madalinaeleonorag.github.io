import { Component, input } from '@angular/core';
import { GithubProject } from '../../models/github-project.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [JsonPipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  project = input.required<GithubProject>();
}
