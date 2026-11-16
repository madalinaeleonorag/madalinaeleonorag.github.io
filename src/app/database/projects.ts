import { Project } from '../interfaces/project';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'dosesync',
    title: 'DoseSync',
    type: 'Product Case Study · In Progress',
    description:
      "An offline-first, privacy-first medication app for treatment plans that don't fit a simple daily reminder. From problem discovery and market analysis to a composable schedule rule engine and native reminders, running as an MVP on Android.",
    techStack: ['Angular 21', 'Signals', 'Ionic', 'Capacitor', 'Product Discovery'],
    imageUrl: 'dosesync/preview.webp',
    caseStudyUrl: '/projects/dosesync',
  },
  {
    id: 'university-rating',
    title: 'UniversityRating',
    type: "Master's Thesis · 2020",
    description:
      'A platform for comparing Romanian universities, faculties and study programmes, with three roles: students, verified university representatives and administrators. Every review goes through sentiment analysis in Azure Text Analytics before it is published, and negative ones wait for an administrator.',
    techStack: ['Angular', 'TypeScript', 'Azure Text Analytics (AI)', 'Firestore', 'Google Maps API'],
    imageUrl: 'university-rating.webp',
    githubUrl: 'https://github.com/madalinaeleonorag/UniversityRating',
    caseStudyUrl: '/projects/university-rating',
  },
  {
    id: 'waffic',
    title: 'Waffic',
    type: "Bachelor's Thesis · 2018",
    description:
      'Weather and traffic in one web app: a driving route on the map with live weather at the start and the destination, a travel history, paid map pins for businesses with nearby alerts, and an admin area with statistics. Real-time state kept in sync with Firebase.',
    techStack: ['Vue.js', 'Vuex', 'Firebase', 'Google Maps API', 'AccuWeather API'],
    imageUrl: 'wafflic.webp',
    githubUrl: 'https://github.com/madalinaeleonorag/Waffic',
    caseStudyUrl: '/projects/waffic',
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
