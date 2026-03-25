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
  readonly sidenavLinks = [
    { label: 'Home', icon: 'home', href: '#hero' },
    { label: 'Expertise', icon: 'build', href: '#expertise' },
    { label: 'Work Experience', icon: 'work', href: '#experience' },
  ];

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
      title: 'Frontend Architecture',
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

  readonly jobs = [
    {
      company: 'SS&C Technologies',
      role: 'UI Engineer',
      period: 'Sep 2025 - Present',
      logo: 'SSNC',
      isCurrent: true,
      description: `
      <ul>
        <li>Upgraded the core Role-Based Access Control (RBAC) architecture to Angular 20.</li>
        <li>Refactored the codebase to implement reactive state management using Signals and NgRx SignalStore to
        optimize rendering speed and state predictability.</li>
        <li>Migrated existing micro-frontends into a centralized Nx Monorepo using Module Federation.</li>
        <li>Built and actively maintained a unified shared UI component library, eliminating duplicated component
        files.</li>
        <li>Migrated a production CMS feature and expanded its architecture to support dynamic, client-driven
        configuration.</li>
        <li>Resolved a critical bug in a separate production application during a rapid two-week cross-team allocation.</li>
      </ul>
      `,
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Frontend Developer & Interim Team Lead',
      period: 'Jan 2023 - Sep 2025',
      logo: 'Cognizant',
    },
    {
      company: 'Deloitte Digital Romania',
      role: 'Frontend Developer',
      period: 'Oct 2021 - Dec 2022',
      logo: 'Deloitte',
    },
    {
      company: 'IBM Romania',
      role: 'Frontend Developer',
      period: 'Dec 2018 - Oct 2021',
      logo: 'IBM',
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
