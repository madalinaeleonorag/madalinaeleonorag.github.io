import { Project } from '../interfaces/project';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'dosesync',
    title: 'DoseSync',
    type: 'Product Case Study · In Progress',
    description:
      "An offline-first, privacy-first medication app for treatment plans that don't fit a simple daily reminder. From problem discovery and market analysis to a composable schedule rule engine and native reminders, running as an MVP on Android.",
    techStack: ['Angular 21', 'Signals', 'Ionic', 'Capacitor', 'Product Discovery'],
    imageUrl: '',
    caseStudyUrl: '/projects/dosesync',
  },
  {
    id: 'university-rating',
    title: 'UniversityRating',
    type: "Master's Thesis Architecture",
    description:
      'A highly scalable platform designed with Role-Based Workflows. It integrates AI-driven validation using Microsoft Text Analytics to process and filter user-generated content, coupled with Google Maps API for geolocation and Firestore for real-time data synchronization.',
    techStack: [
      'Angular',
      'TypeScript',
      'Microsoft Text Analytics (AI)',
      'Firestore',
      'Google Maps API',
    ],
    imageUrl: 'university-rating.webp',
    githubUrl: 'https://github.com/madalinaeleonorag/UniversityRating',
    liveUrl: 'https://universityraking.web.app/',
  },
  {
    id: 'wafflic',
    title: 'Wafflic',
    type: "Bachelor's Thesis Product",
    description:
      'A dynamic web application focused on complex state management and multi-API synchronization. Built to handle heavy real-time data streams efficiently using Firebase as the primary backend engine.',
    techStack: ['Angular', 'RxJS', 'Firebase', 'Multi-API Sync', 'REST Architecture'],
    imageUrl: 'wafflic.webp',
    githubUrl: 'https://github.com/madalinaeleonorag/Waffic',
    liveUrl: 'https://waffic1997.web.app/',
  },
  {
    id: 'hackathons',
    title: 'Award-Winning Prototypes',
    type: 'DevHacks & Rau-DevHack (1st & 2nd Place)',
    description:
      'Rapidly engineered, high-performance prototypes developed under extreme time constraints. Projects like RapJobs, PhotoBooking, and SmileSharing demonstrate the ability to quickly bootstrap robust UI architectures, integrate external services, and deliver polished UX/UI within 24-48 hours.',
    techStack: ['Angular', 'Rapid Prototyping', 'UX/UI Architecture', 'Third-party APIs'],
    imageUrl: 'hackathons.webp',
    githubUrl:
      'https://github.com/madalinaeleonorag?tab=repositories&q=hackathon&type=&language=&sort=',
  },
];
