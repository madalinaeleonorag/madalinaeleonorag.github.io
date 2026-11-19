import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { JOBS } from '../jobs';
import { Job } from './job';

describe('Job', () => {
  const render = async (company: string) => {
    await TestBed.configureTestingModule({
      imports: [Job],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(Job);
    fixture.componentRef.setInput('company', company);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  };

  it('shows the role, and only a next link on the first role', async () => {
    const el = await render(JOBS[0].slug);
    expect(el.querySelector('h1')?.textContent).toContain(JOBS[0].company);
    expect(el.querySelector('[rel="prev"]')).toBeNull();
    expect(el.querySelector('[rel="next"]')?.getAttribute('href')).toBe(
      `/work-experience/${JOBS[1].slug}`,
    );
  });

  it('links back to the previous role, and has no next link on the last role', async () => {
    const last = JOBS.length - 1;
    const el = await render(JOBS[last].slug);
    expect(el.querySelector('[rel="prev"]')?.getAttribute('href')).toBe(
      `/work-experience/${JOBS[last - 1].slug}`,
    );
    expect(el.querySelector('[rel="next"]')).toBeNull();
  });

  it('gives every role a unique slug', () => {
    expect(new Set(JOBS.map((job) => job.slug)).size).toBe(JOBS.length);
  });
});
