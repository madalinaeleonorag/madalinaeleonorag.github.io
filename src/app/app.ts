import { Component, inject, OnInit } from '@angular/core';
import { Icon } from './components/icon/icon.component';
import { WORK_EXPERIENCES } from '../assets/infos/work-experiences';
import { ExperienceComponent } from './components/experience/experience.component';
import { SOCIAL_LINKS } from '../assets/infos/social-links';
import { GENERAL_SKILLS } from '../assets/infos/general-skills';
import { CERTIFICATIONS } from '../assets/infos/certifications';
import { CertificationComponent } from './components/certification/certification.component';
import { AsyncPipe } from '@angular/common';
import { ExternalService } from './services/external.service';
import { ProjectComponent } from './components/project/project.component';

@Component({
  selector: 'app-root',
  imports: [
    Icon,
    ExperienceComponent,
    CertificationComponent,
    // AsyncPipe,
    // ProjectComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  externalService = inject(ExternalService);
  // githubProjects$ = this.externalService.githubProjects;
  mediumArticles$ = this.externalService.mediumArticles;

  readonly WORK_EXPERIENCES = WORK_EXPERIENCES;
  readonly GENERAL_SKILLS = GENERAL_SKILLS;
  readonly SOCIAL_LINKS = SOCIAL_LINKS;
  readonly CERTIFICATIONS = CERTIFICATIONS;

  open(link: string): void {
    window.open(link, '_blank');
  }
}
