import { Component, Input } from '@angular/core';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'technologies',
  imports: [Icon],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class TechnologiesComponent {
  @Input() technologies: string[] = [];
}
