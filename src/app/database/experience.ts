import { IWorkExperience } from '../interfaces/work-experience';

export const WORK_EXPERIENCE: IWorkExperience[] = [
  {
    company: 'SS&C Technologies',
    role: 'UI Engineer',
    logo: 'SSNC',
    assignments: [
      {
        startDate: 'Sep 2025',
        endDate: 'Present',
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
    ],
  },
  {
    company: 'Cognizant',
    role: 'Frontend Developer & Interim Team Lead',
    logo: 'Cognizant',
    assignments: [
      {
        startDate: 'Jan 2023',
        endDate: 'Sep 2025',
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
        stakeholderImpact:
          'Recognized by Application and Process Managers for taking extreme E2E ownership and stepping into a "key position after replacing the old Tech Lead." Described as an "unofficial screen designer" who delivers "more than expected from a frontend developer" by proactively identifying business gaps, proposing smart architecture solutions, and rapidly delivering complex applications with exceptional quality.',
      },
    ],
  },
  {
    company: 'Deloitte Digital',
    role: 'Frontend Developer',
    logo: 'Deloitte',
    assignments: [
      {
        startDate: 'Feb 2022',
        endDate: 'Dec 2022',
        techStack: ['React', 'TypeScript', 'Mambu', 'Thymeleaf', 'AWS Services', 'Java'],
        summary:
          'Served as the sole frontend developer for an internal banking application, building robust client and loan management workflows while navigating the strict architectural constraints of the Mambu interface.',
        descriptionPoints: [
          '<b>Standalone Frontend Delivery</b>: Designed and implemented critical banking features from scratch using React and TypeScript, collaborating closely with all involved roles to ensure seamless integration.',
          '<b>Workflow Optimization</b>: Refactored and enhanced complex UI flows enabling agents to efficiently manage client profiles, process loan creations/refinancing, and drive client onboarding.',
          '<b>Full-Stack Accountability</b>: Bridged the gap between frontend and backend teams by taking ownership of the Java-based PDF banking report generation code.',
          '<b>Proactive Troubleshooting</b>: Demonstrated technical versatility by proactively investigating and resolving various backend bugs when backend developers were unavailable, ensuring continuous and stable delivery.',
        ],
        stakeholderImpact: `Recognized by Team Leads and Senior Consultants for rapidly becoming a fully independent technical pillar who "managed to surpass everyone's expectations." Praised for accelerating the delivery of complex features, seamlessly handling cross-functional tasks (including Cloud configurations), and actively improving Agile processes by challenging requirements to define better-structured stories for the entire team.`,
      },
      {
        startDate: 'Oct 2021',
        endDate: 'Jan 2022',
        techStack: ['Angular', 'TypeScript', 'RxJS', 'Sass'],
        summary:
          'Contributed to an insurance platform by delivering responsive, interactive features that allowed users to efficiently manage active policies directly from their profiles.',
        descriptionPoints: [
          '<b>Dynamic UI Implementation</b>: Engineered interactive modules enabling users to create, view, edit, and deactivate policies, including handling complex Mid-Term policy adjustments.',
          '<b>UX/UI Collaboration</b>: Worked tightly with the product designer to map out and improve application flows, directly enhancing the overall user experience.',
          '<b>Cross-Functional Communication</b>: Maintained efficient and proactive communication with both frontend and backend engineering teams, ensuring smooth project delivery and a highly collaborative environment.',
        ],
        stakeholderImpact: `Described by Project Managers and Tech Leads as an "overnight expert" who brought a "huge boost to Web app development" and rapidly increased team production. Recognized for operating "at the next level" across multiple industries (Banking to Insurance) by not only delivering complex features and Cloud integrations with exceptional speed, but also actively mentoring junior developers and instilling engineering best practices across the entire team.`,
      },
    ],
  },
  {
    company: 'IBM',
    role: 'Frontend Developer',
    logo: 'IBM',
    assignments: [
      {
        startDate: 'Apr 2020',
        endDate: 'Oct 2021',
        techStack: [
          'Angular',
          'TypeScript',
          'RxJS',
          'AEM (Adobe Experience Manager)',
          'Vanilla JavaScript',
          'Sass',
          'CSS',
          'Jenkins',
        ],
        summary:
          'Part of a micro-frontend team for a major US retailer, managing frontend development of a comprehensive e-commerce platform serving 6 distinct websites with a shared core application and brand-customized configurations.',
        descriptionPoints: [
          '<b>Operational Architecture</b>: Contributed to the design and implementation of feature toggling (flags) for beta programs, enabling controlled experimentation and safe, phased rollout of new functionalities.',
          '<b>Efficiency and Performance</b>: Managed performance optimization across all 6 brands, ensuring responsiveness, efficiency on poor connections, and full ARIA, keyboard navigation, and screen reader accessibility.',
          '<b>Critical Incident Leadership</b>: Proactively collaborated with the backend and frontend teams to investigate and resolve a critical live incident where the checkout system went down in production for one of the brand sites.',
          '<b>Engineering Process</b>: Took ownership of daily builds, led product feature demos for stakeholders, and provided on-call production support while adapting to US time zones.',
          '<b>Feature Development</b>: Implemented high-impact features including omnichannel support (stock checking, delivery/in-store pickup), "What You See Is What You Get" real-time discount feedback (with animations), and a personalized reorder feature.',
        ],
        stakeholderImpact: `Commended by Project Managers and peers for a "constant strong contribution" to project delivery and an exceptional "determination to never give up." Praised for rapidly acquiring an extensive technical skillset and acting as a key mentor who guides and brings "new talent to our wider iX IBM team," standing out from other developers through relentless drive, adaptability, and high reliability.`,
      },
      {
        startDate: 'Mar 2020',
        endDate: 'Mar 2020',
        techStack: ['React.js', 'GraphQL', 'Material UI'],
        summary:
          'Delivered a fast-paced, high-stakes MVP for the retail recycling sector, building a dynamic purchasing platform that successfully converted a prospect into a long-term company partner.',

        descriptionPoints: [
          '<b>Strategic MVP Delivery</b>: Redesigned the purchasing flow from scratch using dynamic, step-dependent forms that adapt based on prior inputs, serving as the core technical proof-of-concept for the client.',
        ],
      },
      {
        startDate: 'Mar 2019',
        endDate: 'Mar 2020',
        techStack: ['Angular', 'Ionic', 'TypeScript', 'Capacitor', 'RxJs', 'Sass', 'Unit Testing'],
        summary:
          'Navigated both highly autonomous and team-based enterprise projects, taking full technical ownership of several critical applications. Delivered secure internal knowledge bases and offline-capable mobile/tablet tools used by insurance field staff.',
        descriptionPoints: [
          '<b>End-to-End Ownership</b>: Developed a mobile app for work phone enrollment, ensuring vulnerability assessment and strict compliance tracking.',
          '<b>Internal Tooling & Security</b>: Built a Wikipedia-style internal application to securely centralize company documents, featuring an advanced search filter for complex document content and metadata.',
          '<b>Offline-First Architecture</b>: Created a modern, fully responsive tablet application optimized for field staff operating on low-speed or unstable connections. Engineered robust local storage that automatically synced changes once connectivity was restored.',
          '<b>Feature Integration</b>: Enabled field agents to seamlessly add photos of repaired items, create new insurance entries, and view detailed insurance histories by item or customer.',
          '<b>Client Alignment</b>: Regularly presented new features during demo sessions and conducted multiple onsite visits to the client in Munich, Germany, maintaining a strong, collaborative technical partnership.',
        ],
        stakeholderImpact: `Commended by Project and People Managers for successfully taking charge of "very hard projects" and acting as the direct line of communication with enterprise clients. Consistently praised for receiving excellent project feedback, making a "constant strong contribution," and showing an exceptional "determination to never give up." Recognized as a key mentor who actively brings "new talent to the wider iX IBM team" through an outstanding "drive and attitude" and a continuous investment in professional growth.`,
      },
      {
        startDate: 'Dec 2018',
        endDate: 'Feb 2019',
        summary:
          'Rapidly onboarded to a new project and delivered a critical feature within the first two weeks, demonstrating exceptional adaptability and technical versatility.',
        techStack: ['Angular', 'Ionic', 'TypeScript', 'RxJs'],
        descriptionPoints: [
          'Quickly acquired necessary technologies to align with project requirements and ensure a smooth onboarding process. Contributed to client project by handling initial development tasks and integrating into the team workflow.',
        ],
      },
    ],
  },
];
