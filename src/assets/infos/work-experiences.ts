import { Experience } from '../../app/interfaces/experience';

export const WORK_EXPERIENCES: Experience[] = [
  {
    assignments: [
      {
        applicationTitle:
          'Internal Applications for Financial Services Clients',
        clientCountry: 'United States',
        description: `Contributing to the development of an in-house platform with two user types (employee/employer). Responsible for building features, improving scalability, and enhancing a customer-facing CSM module that allows clients to configure their own application templates. Collaborating cross-functionally to deliver secure, compliant, and high-quality solutions.`,
        endDate: 'Present',
        position: 'Frontend developer',
        startDate: '15 Sep 2025',
        technologies: ['Angular', 'TypeScript', 'RxJS', 'HTML', 'CSS', 'Sass'],
      },
    ],
    companyName: 'SS&C Technologies',
    logo: './assets/images/ssc.png',
    shortDescriptionOfAssessments: `Contributing to the development of an in-house platform with two user types (employee/employer). Responsible for building features, improving scalability, and enhancing a customer-facing CSM module that allows clients to configure their own application templates. Collaborating cross-functionally to deliver secure, compliant, and high-quality solutions.`,
  },
  {
    assignments: [
      {
        applicationTitle: 'Fraud Monitoring & Access Management Applications',
        clientCountry: 'Belgium',
        description: `
          I have led and contributed to the development of complex internal web applications, with a strong focus on creating intuitive and functional user interfaces, and robust solutions for critical business challenges.

          I initiated and led the development of two major internal operations applications from scratch:
          <ul>
            <li>Banking Fraud Targeting Application: A web app for real-time fraud monitoring, offering user-centric dashboards, advanced search, fraud detection tools (robotic/human fraud), and law enforcement access to support rapid investigations.</li>
            <li>Employee Access Management Application: A self-service tool enabling employees to request and manage access for internal systems, streamlining approval processes.</li>
          </ul>
          Focused primarily on the fraud platform, I built a modular, scalable 11-flow application with distinct access levels, leveraging efficient component reusability to manage complexity. Some of the most complex functionalities for my application are:
          <ul>
            <li>Complex Data Visualization & Decision Support: Developed dynamic tables with clear transaction layouts, where each row links to detailed pages. This empowers agents to make informed decisions (e.g., fraud declarations) and initiate downstream banking processes.</li>
            <li>Investigation Pages Development: Designed and implemented a complex AG Grid-based page (evolved from Kendo) supporting user-dependent bulk changes on 50,000+ transactions, featuring dynamic validations, advanced navigation, and context-based feature access.</li>
            <li>Real-time Monitoring Implementation: Developed a complex interface connected to the banking system in real-time, enabling on-call agents to monitor fraud and transactions proactively and intervene before automated triggers.</li>
            <li>Streamlined Transaction Search & Investigation: Implemented role-based search functionalities tailored for on-call agents, culminating in a powerful search interface. This enables agents to quickly locate specific fraudulent transactions, optimizing workflows and significantly improving the efficiency of fraud claim resolution. The solution empowers agents to access critical information and make informed decisions during live customer interactions.</li>
          </ul>
          Served as the lead frontend developer for over a year, while also taking on junior-level Java backend tasks when needed. Demonstrated a solid understanding of the full system architecture and a strong team-first mindset by stepping in to support cross-functional efforts.
          <br><br>
          Achieved strong production impact over time by eliminating incidents through a deepening understanding of banking processes. Replaced a legacy interface with a modern, user-friendly UI that improved agent experience. Played a key role in frontend deployments to test and production environments, ensuring application stability and availability.
          <br><br>
          Stepped in as Team Lead for another team for one month during the leader’s absence. Actively managed team activities, increased feature delivery, and optimized communication with management.
          <br><br>
          Maintained up-to-date tasks, sprints, and backlog to ensure smooth project flow. Led feature definition meetings, owned requirements, and proposed frontend solutions that enhanced development and team efficiency. Presented demos to clients, contributing to strategic decision-making. Facilitated communication and problem-solving across teams to ensure alignment, timely delivery, and continuous quality improvement.
          <br><br>
          Took full ownership of the application’s design and user experience, successfully adapting innovative ideas within technical constraints without a dedicated designer. Held complete decision-making authority over design and creative aspects in the past year.
          <br><br>
          Mentored new colleagues and fostered cross-team collaboration, promoting knowledge transfer and skill development focused on frontend best practices. Actively supported team members in learning unit testing with Jasmine.
        `,
        endDate: '9 Sep 2025',
        position: 'Frontend developer',
        startDate: '1 Jan 2023',
        technologies: ['Angular', 'TypeScript', 'RxJS', 'HTML', 'CSS', 'Sass'],
      },
    ],
    companyName: 'Cognizant',
    logo: './assets/images/cognizant.png',
    shortDescriptionOfAssessments: `
      <ul>    
        <li>Led frontend development of internal banking web applications focused on fraud detection and employee access management.</li>
        <li>Built modular, scalable applications with advanced data visualization, real-time monitoring, and complex search features.</li>
        <li>Served as lead frontend developer, contributed to backend tasks, and acted as interim team lead.</li>
        <li>Improved production stability, replaced legacy UI, and managed deployments.</li>
        <li>Owned design decisions, mentored colleagues, and facilitated cross-team collaboration.</li>
      </ul>
    `,
  },
  {
    assignments: [
      {
        applicationTitle: 'Client & Loan Management System',
        clientCountry: 'Germany',
        description: `
          <ul>
            <li> Sole frontend developer for an internal banking app, designing and implementing features using React and TypeScript, working within the constraints of the Mambu interface and collaborating closely with all involved roles. </li>
            <li> Refactored and enhanced features enabling agents to manage client profiles, create/refinance loans, update details, and onboard new clients. </li>
            <li> Worked closely with backend developers to deliver the banking report generation to PDF feature and took ownership of related Java backend code. </li>
            <li> Proactively fixed various backend bugs when backend developers were unavailable, ensuring continuous delivery. </li>
          </ul>
        `,
        endDate: '23 Dec 2022',
        position: 'Frontend Developer',
        startDate: '1 Feb 2022',
        technologies: [
          'React',
          'Thymeleaf',
          'Mambu',
          'TypeScript',
          'AWS Services',
          'Java',
        ],
      },
      {
        applicationTitle: 'Insurance Policy Management System',
        clientCountry: 'United Kingdom',
        description: `
          <ul>
            <li> Delivered responsive, interactive features allowing users to create, view, edit, and deactivate active policies directly from their profiles, including Mid-Term policy adjustments. </li>
            <li> Collaborated closely with the designer to improve application flows and enhance user experience. </li>
            <li> Maintained efficient and proactive communication with frontend and backend developers, making the project smooth to deliver and enjoyable to work on. </li>
          </ul>
        `,
        endDate: '1 Jan 2022',
        position: 'Frontend Developer',
        startDate: '18 Oct 2021',
        technologies: ['Angular', 'TypeScript', 'RxJs', 'Sass'],
      },
    ],
    companyName: 'Deloitte Digital',
    logo: './assets/images/deloitte-digital.png',
    shortDescriptionOfAssessments: `
      <ul>
        <li> Delivered and owned key features for internal banking and insurance platforms, includin client onboarding, loan management, and policy creation/editing. </li>
        <li> Refactored critical flows and improved UX through close collaboration with designers an cross-functional teams. </li>
        <li> Developed PDF report generation, contributing to both frontend and Java backend code. </li>
        <li> Ensured continuous delivery by proactively fixing backend issues and coordinating frontend-backend efforts. </li>
      </ul>
    `,
  },
  {
    assignments: [
      {
        applicationTitle: 'Public E-Commerce Website',
        clientCountry: 'United States',
        description: `
          <ul>
            <li>Built features as part of a micro-frontend team within an AEM application serving five retail stores, balancing shared infrastructure with brand-specific needs.</li>
            <li>Built a fully accessible app with ARIA support, VoiceOver compatibility, and keyboard navigation, optimized to remain usable on slow or unstable internet connections.</li>
            <li>Implemented support for feature toggling, enabling or disabling functionalities depending on whether users were part of beta testing programs, allowing safe rollout and controlled experimentation.</li>
            <li>Developed and integrated customer behavior tracking systems to gather detailed statistics: user flows, click events, and conversion paths, helping improve UX and business decision-making.</li>
            <li>Delivered "What You See Is What You Get", a feature showing real-time discount feedback with visual animations (confetti, coupon-cut effects), including coupon collection and usage across multiple pages.</li>
            <li>Created a personalized reorder feature to help customers rediscover and quickly re-add previously purchased items from the cart or product pages.</li>
            <li>Supported omnichannel functionality: customers could select physical stores, check real-time stock, and choose between delivery or in-store pickup at checkout.</li>
            <li>Managed daily development builds across environments and showcased new features during demo sessions.</li>
            <li>Maintained strong collaboration with backend and frontend teams, ensuring a productive and enjoyable development flow.</li>
            <li>Adapted to US time zones, attending late meetings and providing on-call support for production incidents.</li>
            <li>Successfully navigated a critical incident when the checkout system went down in production for one site.</li>
          </ul>
        `,
        endDate: '8 Oct 2021',
        position: 'Frontend Developer',
        startDate: '1 Apr 2020',
        technologies: [
          'Angular',
          'TypeScript',
          'RxJs',
          'Adobe Experience Manager',
          'VirtualBox',
          'Vanilla JavaScript',
          'Sass',
          'CSS',
          'Jenkins',
        ],
      },
      {
        applicationTitle: 'Public website for retail recyclable materials',
        clientCountry: 'United Kingdom',
        description: `
          <ul>
            <li>Redesigned the purchasing flow for recyclable materials from retailers using dynamic, stepdependent forms that adapt based on prior inputs; this app served as an MVP for a customer who subsequently partnered with the company.</li>
          </ul>
        `,
        endDate: '30 Mar 2020',
        position: 'Frontend Developer',
        startDate: '1 Mar 2020',
        technologies: ['React.js', 'GraphQL', 'Material UI'],
      },
      {
        applicationTitle:
          'Multi-Platform Enterprise Solutions for Insurance & Compliance',
        clientCountry: 'Germany',
        description: `
          <ul>
            <li>Involved in both individual and team-based assignments. </li>
            <li>Developed a mobile app for enrolling work phones, ensuring vulnerability assessment and compliance tracking. </li>
            <li>Built an internal Wikipedia-style application to securely centralize company documents and data, featuring an advanced search filter that could search both document content and metadata. </li>
            <li>Created a tablet application with a modern, fully responsive design, optimized for low-speed or unstable internet connections. The app stored edits locally and synced changes automatically when connectivity was restored. It enabled field staff to add photos of repaired items covered by insurance, create new insurance entries, view insurance history by item or customer. </li>
            <li>Regularly presented new features during demo sessions with the client.</li>
            <li>Conducted multiple onsite visits to the client in Munich, Germany, maintaining a strong, collaborative relationship.</li>
          </ul>
        `,
        endDate: '1 Mar 2020',
        position: 'Frontend Developer',
        startDate: '1 Mar 2019',
        technologies: [
          'Angular',
          'Ionic',
          'TypeScript',
          'Capacitor',
          'RxJs',
          'Sass',
          'Unit Testing',
        ],
      },
      {
        applicationTitle: '',
        clientCountry: '',
        description: `
          <ul>
            <li>Quickly acquired necessary technologies to align with project requirements and ensure a smooth onboarding process. Contributed to client project by handling initial development tasks and integrating into the team workflow. </li>
          </ul>
        `,
        endDate: '1 Mar 2019',
        position: 'Intern',
        startDate: '10 Dec 2018',
        technologies: ['Angular', 'Ionic', 'TypeScript', 'RxJs', 'Sass'],
      },
    ],
    companyName: 'IBM Romania',
    logo: './assets/images/ibm.png',
    shortDescriptionOfAssessments: `
      <ul>
        <li> Delivered feature-rich apps across e-commerce, retail, and enterprise compliance sectors.</li>
        <li> Implemented feature toggling and behavior tracking to support experimentation and UX improvement.</li>
        <li> Optimized for performance, accessibility, and offline support (ARIA, sync, low connectivity).</li>
        <li> Created interactive UI features like real-time discount feedback and personalized reordering.</li>
        <li> Enabled omnichannel checkout with real-time stock and delivery options.</li>
        <li> Redesigned purchasing flow for recyclable materials, delivering an MVP that secured a key client.</li>
        <li> Built mobile/tablet apps for compliance and insurance, with media upload and offline editing.</li>
        <li> Developed an internal knowledge base with metadata-aware advanced search.</li>
        <li> Managed builds, led demos, and resolved critical production issues (on-call).</li>
        <li> Fostered client trust via onsite collaboration in Munich.</li>
      </ul>
    `,
  },
];
