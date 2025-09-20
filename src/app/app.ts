import { Component } from '@angular/core';
import { Icon } from './components/icon/icon';
import { WORK_EXPERIENCES } from '../assets/experience';
import { ExperienceComponent } from './components/experience/experience';

@Component({
  selector: 'app-root',
  imports: [Icon, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public links = {
    CV: './assets/resumes/Gheorghe-Madalina-Eleonora-CV.pdf',
    EMAIL: 'madalinaeleonora.gheorghe@gmail.com',
    FACEBOOK: 'https://www.facebook.com/mdx.madalinaeleonora/',
    FULL_CV: './assets/resumes/Gheorghe-Madalina-Eleonora-FULL-CV.pdf',
    GITHUB: 'https://github.com/madalinaeleonorag',
    INSTAGRAM: 'https://www.instagram.com/madalinaeleonorag/',
    LINKEDIN: 'https://www.linkedin.com/in/madalinaeleonorag/',
    MEDIUM: 'https://madalinaeleonorag.medium.com/',
    PAYPAL: 'https://www.paypal.com/paypalme/madalinaeleonorag',
  };

  public readonly WORK_EXPERIENCES = WORK_EXPERIENCES;

  public open(link: string): void {
    window.open(link, '_blank');
  }
}
