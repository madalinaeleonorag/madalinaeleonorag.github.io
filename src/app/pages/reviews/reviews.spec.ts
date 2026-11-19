import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Reviews } from './reviews';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';
import { WORK_EXPERIENCE } from '../../database/experience';

describe('Reviews', () => {
  let component: Reviews;
  let fixture: ComponentFixture<Reviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reviews],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Reviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('shows every review without filters', () => {
    expect(component.filteredReviews().length).toBe(STAKEHOLDER_REVIEWS.length);
    expect(fixture.nativeElement.querySelectorAll('app-review-card').length).toBe(
      STAKEHOLDER_REVIEWS.length,
    );
  });

  it('filters by company and clears the filters', () => {
    const company = STAKEHOLDER_REVIEWS[0].company;
    component.selectedCompany.set(company);
    expect(component.filteredReviews().every((review) => review.company === company)).toBe(true);
    expect(component.hasFilters()).toBe(true);

    component.clearFilters();
    expect(component.filteredReviews().length).toBe(STAKEHOLDER_REVIEWS.length);
  });

  it('preselects filters from query params', async () => {
    const assignment = WORK_EXPERIENCE.flatMap((job) => job.assignments).find(
      (item) => item.reviewIds?.length,
    )!;
    fixture.componentRef.setInput('assignmentId', assignment.id);
    fixture.componentRef.setInput('startDate', 'Nov 2025');
    await fixture.whenStable();

    expect(
      component
        .reviewsForAssignment()
        .map((review) => review.id)
        .sort(),
    ).toEqual([...assignment.reviewIds!].sort());
    expect(component.fromYear()).toBe('2025');
    expect(fixture.nativeElement.querySelector('.assignment-filter')?.textContent).toContain(
      assignment.title,
    );
  });

  it('matches the search term in the review text', () => {
    component.searchTerm.set('team player');
    expect(component.filteredReviews().length).toBeGreaterThan(0);
    expect(
      component
        .filteredReviews()
        .every((review) => review.review.toLowerCase().includes('team player')),
    ).toBe(true);
  });
});
