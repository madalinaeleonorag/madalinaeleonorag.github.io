import { Component, input } from '@angular/core';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'technologies',
  imports: [Icon],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class TechnologiesComponent {
  technologies = input.required<string[]>();
}
