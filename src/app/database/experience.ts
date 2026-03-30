import { IWorkExperience } from '../interfaces/work-experience';

export const WORK_EXPERIENCE: IWorkExperience[] = [
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
    summary:
      'Key engineer in modernizing the frontend architecture of an enterprise ecosystem, focusing on a Role-Based Access Control (RBAC) platform and a dynamic, client-configurable CMS.',
    descriptionPoints: [
      '<b>Architecture Modernization & Reactive State</b>: Upgraded the codebase to Angular 20, implementing modern reactive state management patterns using Signals and NgRx SignalStore to optimize application performance',
      '<b>Micro-Frontends (MFE) & UI Library</b>: Executed the migration and integration of MFE modules into the new architecture. Built and actively maintained the shared UI component library, eliminating code duplication and ensuring visual consistency across product teams.',
      '<b>Dynamic CMS Development</b>: Contributed to a client-facing CMS platform by successfully migrating an existing production feature and expanding it with dynamic, client-driven configuration capabilities.',
      '<b>Cross-Team Adaptability & Troubleshooting</b>: Demonstrated high adaptability through short-term cross-team allocations, including a rapid two-week assignment to investigate and resolve a bug in a separate production application.',
    ],
  },
  {
    company: 'Cognizant',
    role: 'Frontend Developer & Interim Team Lead',
    period: 'Jan 2023 - Sep 2025',
    logo: 'Cognizant',
    isCurrent: false,
    techStack: [
      'Angular 17+',
      'TypeScript',
      'RxJS',
      'WebSockets',
      'Sass',
      'OpenShift',
      'Jenkins',
      'Nexus',
      'BitBucket',
      'AG Grid',
      'Kendo UI',
      'Jasmine',
    ],
    summary:
      'Led the end-to-end frontend architecture and development of two mission-critical enterprise applications from the ground up: a real-time Banking Fraud Targeting Platform and an Employee Access Management System.',
    descriptionPoints: [
      '<b>Application Architecture</b>: Architected a highly scalable, 11-flow modular Angular application. Designed the system with a strong focus on component reusability, strict Role-Based Access Control (RBAC), and long-term maintainability.',
      '<b>High-Volume Data Processing</b>: Engineered robust bulk-action investigation interfaces capable of seamlessly handling 50,000+ records via AG Grid, combined with live monitoring dashboards for proactive fraud intervention.',
      '<b>Technical Leadership & Delivery</b>: Served as Lead Frontend Developer and Interim Team Lead. Managed architectural decisions, sprint planning, and cross-team coordination, achieving zero production incidents from the very first release.',
      `<b>UX/UI & Product Ownership</b>:Held full decision-making authority over the platform's UI/UX direction, balancing intuitive design for fraud agents with technical feasibility.`,
      '<b>Quality & Mentorship</b>: Fostered a culture of engineering excellence by establishing Angular best practices, driving Jasmine unit testing adoption, and mentoring peers.',
    ],
  },
];
