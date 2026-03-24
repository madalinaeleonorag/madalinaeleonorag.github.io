import { Component, signal } from '@angular/core';
import { SvgIcon } from './components/svg-icon/svg-icon';
import { Chip } from './components/chip/chip';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SvgIcon, Chip],
})
export class App {
  readonly socialLinks = [
    { type: 'email', url: 'mailto:madalinaeleonora.gheorghe@gmail.com' },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/madalinaeleonorag/',
    },
    {
      type: 'github',
      url: 'https://github.com/madalinaeleonorag',
    },
    // TODO maybe change medium with another more dev related platform
    {
      type: 'medium',
      url: 'https://madalinaeleonorag.medium.com/',
    },
  ];

  readonly expertise = [
    {
      icon: 'layers',
      title: 'Frontend Arhitecture',
      description:
        'Designing scalable and decoupled systems using Micro-Frontends and modern reactive state management patterns.',
      techStack: ['Micro-Frontends (MFE)', 'Module Federation', 'Signals', 'State Management'],
    },
    {
      icon: 'lightning',
      title: 'Ecosystem & Performance',
      description:
        'Building high-performance, accessible enterprise applications capable of handling complex data visualization.',
      techStack: ['Angular 20', 'TypeScript', 'RxJs', 'Sass'],
    },
    {
      icon: 'shield',
      title: 'Engineering & Leadership',
      description:
        'Driving E2E project delivery, ensuring zero-incident deployments, and fostering a culture of technical mentorship.',
      techStack: ['E2E Delivery', 'CI/CD Pipelines', 'Technical Mentoring', 'UI/UX Collaboration'],
    },
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
