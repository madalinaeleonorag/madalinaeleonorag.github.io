import { Component, input } from '@angular/core';
import { GithubProject } from '../../models/github-project.model';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [SlicePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  project = input.required<GithubProject>();

  openUrl(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
