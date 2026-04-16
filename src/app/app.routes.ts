import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { WorkExperience } from './pages/work-experience/work-experience';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'work-experience',
    loadComponent: () =>
      import('./pages/work-experience/work-experience').then((m) => m.WorkExperience),
  },
  {
    path: 'reviews',
    loadComponent: () => import('./pages/reviews/reviews').then((m) => m.Reviews),
  },
];
