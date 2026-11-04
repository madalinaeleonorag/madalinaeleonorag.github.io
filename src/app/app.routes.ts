import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Mădălina-Eleonora Gheorghe | UX & Product Transition',
  },
  {
    path: 'work-experience',
    loadComponent: () =>
      import('./pages/work-experience/work-experience').then((m) => m.WorkExperience),
    title: 'Work Experience | Mădălina-Eleonora Gheorghe',
    data: { breadcrumb: 'Work Experience' },
  },
  {
    path: 'reviews',
    loadComponent: () => import('./pages/reviews/reviews').then((m) => m.Reviews),
    title: 'Reviews | Mădălina-Eleonora Gheorghe',
    data: { breadcrumb: 'Reviews' },
  },
  {
    path: 'projects/dosesync',
    loadComponent: () => import('./pages/dosesync/dosesync').then((m) => m.DoseSync),
    title: 'DoseSync: medication scheduling for complex treatment plans',
    data: { breadcrumb: 'DoseSync' },
  },
  {
    path: 'projects/dosesync/privacy',
    loadComponent: () => import('./pages/dosesync-legal/dosesync-legal').then((m) => m.DoseSyncLegal),
    title: 'DoseSync privacy policy',
    data: { breadcrumb: 'DoseSync privacy policy', document: 'privacy' },
  },
  {
    path: 'projects/dosesync/terms',
    loadComponent: () => import('./pages/dosesync-legal/dosesync-legal').then((m) => m.DoseSyncLegal),
    title: 'DoseSync terms of use',
    data: { breadcrumb: 'DoseSync terms of use', document: 'terms' },
  },
];
