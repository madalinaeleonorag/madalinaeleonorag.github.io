import { Component } from '@angular/core';
import { Icon } from './components/icon/icon';
import { WORK_EXPERIENCES } from '../assets/infos/work-experiences';
import { ExperienceComponent } from './components/experience/experience';
import { SOCIAL_LINKS } from '../assets/infos/social-links';
import { SKILLS } from '../assets/infos/skills';

@Component({
  selector: 'app-root',
  imports: [Icon, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public links = SOCIAL_LINKS;
  public skills = SKILLS;

  public readonly WORK_EXPERIENCES = WORK_EXPERIENCES;

  public open(link: string): void {
    window.open(link, '_blank');
  }
}
