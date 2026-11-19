import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RedirectCommand, Router, Routes } from '@angular/router';
import { Home } from './pages/home/home';

// Each page sets `title` and `data.description`; services/seo.ts turns them into the
// description, canonical and social preview tags of the prerendered HTML.
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Mădălina-Eleonora Gheorghe | UX & Product Transition',
    data: {
      description:
        'Portfolio of Mădălina-Eleonora Gheorghe, a UX-focused digital professional in transition, learning product strategy, design thinking, and business-aligned digital delivery.',
    },
  },
  {
    path: 'work-experience',
    loadComponent: () =>
      import('./pages/work-experience/work-experience').then((m) => m.WorkExperience),
    title: 'Work Experience | Mădălina-Eleonora Gheorghe',
    data: {
      breadcrumb: 'Work Experience',
      description:
        'Roles and assignments at SS&C Technologies, Cognizant, Deloitte Digital, IBM and Renault Group: what I built, the technologies and the impact.',
    },
  },
  {
    // One page per role. The resolvers load the role data only when this page opens; an
    // unknown company goes back to the overview. Prerendered for every role
    // (app.routes.server.ts).
    path: 'work-experience/:company',
    loadComponent: () => import('./pages/work-experience/job/job').then((m) => m.Job),
    title: async (route) => {
      const job = (await import('./pages/work-experience/jobs')).findJob(route.params['company']);
      return `${job?.role} at ${job?.company} | Mădălina-Eleonora Gheorghe`;
    },
    resolve: {
      breadcrumb: async (route: ActivatedRouteSnapshot) => {
        const router = inject(Router);
        const job = (await import('./pages/work-experience/jobs')).findJob(
          route.params['company'],
        );
        return job?.company ?? new RedirectCommand(router.parseUrl('/work-experience'));
      },
      description: async (route: ActivatedRouteSnapshot) => {
        const job = (await import('./pages/work-experience/jobs')).findJob(
          route.params['company'],
        );
        if (!job) {
          return '';
        }
        const projects = `${job.assignments.length} ${job.assignments.length === 1 ? 'project' : 'projects'}`;
        return `${job.role} at ${job.company}, ${job.start} – ${job.end}: ${projects}, built with ${job.techStack.slice(0, 5).join(', ')}.`;
      },
    },
    data: { breadcrumbParent: { label: 'Work Experience', link: '/work-experience' } },
  },
  {
    path: 'reviews',
    loadComponent: () => import('./pages/reviews/reviews').then((m) => m.Reviews),
    title: 'Reviews | Mădălina-Eleonora Gheorghe',
    data: {
      breadcrumb: 'Reviews',
      description:
        'Recommendations from tech leads, managers and clients, searchable by company, domain and year.',
    },
  },
  {
    path: 'projects/dosesync',
    loadComponent: () => import('./pages/dosesync/dosesync').then((m) => m.DoseSync),
    title: 'DoseSync: medication scheduling for complex treatment plans',
    data: {
      breadcrumb: 'DoseSync',
      description:
        'DoseSync is an offline-first, privacy-first medication app for treatment plans that a simple daily reminder cannot handle. Product case study and architecture.',
    },
  },
  {
    path: 'projects/waffic',
    loadComponent: () =>
      import('./pages/project-case-study/project-case-study').then((m) => m.ProjectCaseStudy),
    title: 'Waffic: weather and traffic in one web app | Bachelor’s thesis',
    data: {
      breadcrumb: 'Waffic',
      caseStudy: 'waffic',
      description:
        'Waffic, my bachelor’s thesis (2018): a Vue.js web app showing a driving route with live weather at the start and destination.',
    },
  },
  {
    path: 'projects/university-rating',
    loadComponent: () =>
      import('./pages/project-case-study/project-case-study').then((m) => m.ProjectCaseStudy),
    title: 'UniversityRating: university reviews with AI moderation | Master’s thesis',
    data: {
      breadcrumb: 'UniversityRating',
      caseStudy: 'university-rating',
      description:
        'UniversityRating, my master’s thesis (2020): an Angular platform for comparing Romanian universities, with reviews moderated by sentiment analysis.',
    },
  },
  {
    path: 'projects/dosesync/privacy',
    loadComponent: () =>
      import('./pages/dosesync-legal/dosesync-legal').then((m) => m.DoseSyncLegal),
    title: 'DoseSync privacy policy',
    data: {
      breadcrumb: 'DoseSync privacy policy',
      document: 'privacy',
      description: 'Privacy policy of the DoseSync medication app.',
    },
  },
  {
    path: 'projects/dosesync/terms',
    loadComponent: () =>
      import('./pages/dosesync-legal/dosesync-legal').then((m) => m.DoseSyncLegal),
    title: 'DoseSync terms of use',
    data: {
      breadcrumb: 'DoseSync terms of use',
      document: 'terms',
      description: 'Terms of use of the DoseSync medication app.',
    },
  },
  // `/404` is prerendered to 404/index.html and copied to 404.html (scripts/copy-404.mjs), which
  // GitHub Pages serves for any missing URL. `**` shows the same page for unknown in-app links.
  ...['404', '**'].map((path) => ({
    path,
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found | Mădălina-Eleonora Gheorghe',
    data: { breadcrumb: 'Page not found', noindex: true },
  })),
];
