import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';
import { WORK_EXPERIENCE } from '../../database/experience';
import { ReviewCard } from '../../components/review-card/review-card';

/** 'Nov 2025', '2025-11-01' or 'Present' → 2025. Empty when there is no year. */
function yearOf(value: string | undefined): string {
  if (!value) {
    return '';
  }
  if (value.toLowerCase() === 'present') {
    return String(new Date().getFullYear());
  }
  return value.match(/\d{4}/)?.[0] ?? '';
}

/**
 * All reviews with search and filters. Links can preselect filters through query params,
 * bound to the inputs below (withComponentInputBinding): ?assignmentId=…, ?company=…,
 * ?startDate=… and ?endDate=… (a year, 'Nov 2025' or 'Present').
 */
@Component({
  selector: 'app-reviews',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReviewCard],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  private readonly router = inject(Router);

  readonly assignmentId = input<string>();
  readonly company = input<string>();
  readonly startDate = input<string>();
  readonly endDate = input<string>();

  private readonly all = STAKEHOLDER_REVIEWS;

  readonly searchTerm = signal('');
  readonly selectedCategory = signal('');
  readonly selectedCompany = linkedSignal(() => this.company() ?? '');
  readonly fromYear = linkedSignal(() => yearOf(this.startDate()));
  readonly toYear = linkedSignal(() => yearOf(this.endDate()));

  readonly companies = [...new Set(this.all.map((review) => review.company))].sort();
  readonly categories = [...new Set(this.all.map((review) => review.category))].sort();
  readonly years = [...new Set(this.all.map((review) => String(review.date.getFullYear())))].sort(
    (a, b) => Number(b) - Number(a),
  );

  readonly assignment = computed(() => {
    const id = this.assignmentId();
    return id
      ? WORK_EXPERIENCE.flatMap((job) => job.assignments).find((item) => item.id === id)
      : undefined;
  });

  readonly reviewsForAssignment = computed(() => {
    const assignment = this.assignment();
    if (!assignment) {
      return this.all;
    }
    const ids = new Set(assignment.reviewIds ?? []);
    return this.all.filter((review) => ids.has(review.id));
  });

  readonly filteredReviews = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const company = this.selectedCompany();
    const category = this.selectedCategory();
    const from = Number(this.fromYear()) || 0;
    const to = Number(this.toYear()) || Infinity;

    return this.reviewsForAssignment().filter((review) => {
      const year = review.date.getFullYear();
      return (
        (!company || review.company === company) &&
        (!category || review.category === category) &&
        year >= from &&
        year <= to &&
        (!term || `${review.reviewer ?? ''} ${review.review}`.toLowerCase().includes(term))
      );
    });
  });

  readonly hasFilters = computed(
    () =>
      !!(
        this.searchTerm() ||
        this.selectedCategory() ||
        this.selectedCompany() ||
        this.fromYear() ||
        this.toYear()
      ),
  );

  clearFilters() {
    this.searchTerm.set('');
    this.selectedCategory.set('');
    this.selectedCompany.set('');
    this.fromYear.set('');
    this.toYear.set('');
  }

  showAllAssignments() {
    this.router.navigate([], {
      queryParams: { assignmentId: null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  valueOf(event: Event): string {
    return (event.target as HTMLInputElement | HTMLSelectElement).value;
  }
}
