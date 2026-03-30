import { Component } from '@angular/core';
import { Chip } from '../../components/chip/chip';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { RouterLink } from '@angular/router';
import { WORK_EXPERIENCE } from '../../database/experience';
import { WorkComponent } from '../../components/work/work';
import { SOCIAL_LINKS } from '../../database/social-links';
import { EXPERTISE } from '../../database/expertise';
import { IWorkExperience } from '../../interfaces/work-experience';

@Component({
  selector: 'app-home',
  imports: [SvgIcon, Chip, RouterLink, WorkComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly sidenavLinks = [
    { label: 'Home', icon: 'home', href: '#hero' },
    { label: 'Expertise', icon: 'build', href: '#expertise' },
    { label: 'Work Experience', icon: 'work', href: '#experience' },
  ];

  readonly socialLinks = SOCIAL_LINKS;

  readonly expertise = EXPERTISE;

  readonly workExperience: IWorkExperience[] = [
    {
      ...WORK_EXPERIENCE[0],
      descriptionPoints: [],
      techStack: [],
    },
    ...WORK_EXPERIENCE.slice(1).map((job) => ({
      ...job,
      descriptionPoints: [],
      summary: '',
      techStack: [],
    })),
  ];

  downloadFile(type: 'CV' | 'Recommendations') {
    const fileName =
      type === 'CV'
        ? 'Madalina-Eleonora-Gheorghe-CV'
        : 'Madalina-Eleonora-Gheorghe-Recommendations';
    const fileUrl = `/${fileName}.pdf`;
    window.open(fileUrl, '_blank');
  }
}
