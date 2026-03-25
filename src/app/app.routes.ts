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
    component: WorkExperience,
  },
];
