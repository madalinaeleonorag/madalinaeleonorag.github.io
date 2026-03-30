import { Component } from '@angular/core';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { Chip } from '../../components/chip/chip';

@Component({
  selector: 'app-work-experience',
  imports: [SvgIcon, Chip],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience {
  readonly workExperience = [
    {
      company: 'SS&C Technologies',
      role: 'UI Engineer',
      period: 'Sep 2025 - Present',
      logo: 'SSNC',
      isCurrent: true,
      techStack: [
        'Angular 20+',
        'TypeScript',
        'RxJS',
        'Signals',
        'NgRx SignalStore',
        'Micro-Frontends (MFE)',
        'Nx Monorepo',
        'Module Federation',
        'Angular Material',
        'GraphQL',
        'Sass',
      ],
      descriptionPoints: [
        '<b>Architecture Modernization & Reactive State</b>: Upgraded the codebase to Angular 20, implementing modern reactive state management patterns using Signals and NgRx SignalStore to optimize application performance',
        '<b>Micro-Frontends (MFE) & UI Library</b>: Executed the migration and integration of MFE modules into the new architecture. Built and actively maintained the shared UI component library, eliminating code duplication and ensuring visual consistency across product teams.',
        '<b>Dynamic CMS Development</b>: Contributed to a client-facing CMS platform by successfully migrating an existing production feature and expanding it with dynamic, client-driven configuration capabilities.',
        '<b>Cross-Team Adaptability & Troubleshooting</b>: Demonstrated high adaptability through short-term cross-team allocations, including a rapid two-week assignment to investigate and resolve a bug in a separate production application.',
      ],
    },
  ];
}
