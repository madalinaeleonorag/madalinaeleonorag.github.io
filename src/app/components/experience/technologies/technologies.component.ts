import { Component, input } from '@angular/core';
import { Icon } from '../../icon/icon.component';

@Component({
  selector: 'technologies',
  imports: [Icon],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  technologies = input.required<string[]>();
}
