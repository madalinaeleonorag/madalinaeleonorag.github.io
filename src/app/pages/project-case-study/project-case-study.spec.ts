import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { ProjectCaseStudy } from './project-case-study';

describe('ProjectCaseStudy', () => {
  for (const key of ['waffic', 'university-rating']) {
    describe(key, () => {
      let fixture: ComponentFixture<ProjectCaseStudy>;

      beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ProjectCaseStudy],
          providers: [
            provideRouter([]),
            { provide: ActivatedRoute, useValue: { snapshot: { data: { caseStudy: key } }, fragment: of(null) } },
          ],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectCaseStudy);
        await fixture.whenStable();
      });

      it('renders the title and the tabs', () => {
        const el: HTMLElement = fixture.nativeElement;
        expect(el.querySelector('h1')?.textContent).toBe(fixture.componentInstance.project.title);
        expect(el.querySelectorAll('[role="tab"]').length).toBe(fixture.componentInstance.project.thesis ? 3 : 2);
      });
    });
  }
});
