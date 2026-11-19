import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // One static page per role.
    path: 'work-experience/:company',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const { JOBS } = await import('./pages/work-experience/jobs');
      return JOBS.map((job) => ({ company: job.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
