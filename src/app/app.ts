import { Component } from '@angular/core';
import { Icon } from './components/icon/icon';
import { WORK_EXPERIENCES } from '../assets/infos/work-experiences';
import { ExperienceComponent } from './components/experience/experience';
import { SOCIAL_LINKS } from '../assets/infos/social-links';
import { GENERAL_SKILLS } from '../assets/infos/general-skills';
import { CERTIFICATIONS } from '../assets/infos/certifications';
import { CertificationComponent } from './components/certification/certification';

@Component({
  selector: 'app-root',
  imports: [Icon, ExperienceComponent, CertificationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public links = SOCIAL_LINKS;
  public skills = GENERAL_SKILLS;
  public certifications = CERTIFICATIONS;

  public readonly WORK_EXPERIENCES = WORK_EXPERIENCES;

  public open(link: string): void {
    window.open(link, '_blank');
  }
}
