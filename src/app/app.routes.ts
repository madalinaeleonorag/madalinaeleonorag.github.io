import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'work-experience',
    loadComponent: () =>
      import('./pages/work-experience/work-experience').then((m) => m.WorkExperience),
    data: { breadcrumb: 'Work Experience' },
  },
  {
    path: 'reviews',
    loadComponent: () => import('./pages/reviews/reviews').then((m) => m.Reviews),
    data: { breadcrumb: 'Reviews' },
  },
  {
    path: 'projects/dosesync',
    loadComponent: () => import('./pages/dosesync/dosesync').then((m) => m.DoseSync),
    data: { breadcrumb: 'DoseSync' },
  },
];
