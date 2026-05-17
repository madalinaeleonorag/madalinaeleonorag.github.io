import { Component, computed, signal, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewCard } from '../../components/review-card/review-card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-reviews',
  imports: [
    FormsModule,
    CommonModule,
    ReviewCard,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  templateUrl: './reviews.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './reviews.scss',
})
export class Reviews {
  private readonly route = inject(ActivatedRoute);
  private readonly queryParams = toSignal(this.route.queryParams, {
    initialValue: { company: '', startDate: '', endDate: '' },
  });

  constructor() {
    effect(() => {
      const params = this.queryParams();
      if (params) {
        if (params['company']) {
          this.selectedCompany.set(params['company']);
        }
        if (params['startDate']) {
          this.startDate.set(this.formatToHTMLDate(params['startDate']));
        }
        if (params['endDate']) {
          this.endDate.set(this.formatToHTMLDate(params['endDate']));
        }
      }
    });
  }

  private formatToHTMLDate(dateStr: string): string {
    if (!dateStr) return '';

    if (dateStr.toLowerCase() === 'present') {
      return new Date().toISOString().split('T')[0];
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return dateStr;
    }

    const parsed = new Date(`${dateStr} 1`);
    if (!isNaN(parsed.getTime())) {
      const year = parsed.getFullYear();
      const month = String(parsed.getMonth() + 1).padStart(2, '0');
      return `${year}-${month}-01`;
    }

    return '';
  }

  private parseDateString(dateStr: string): number | null {
    if (!dateStr) return null;

    const isoMatch = dateStr.match(/^\d{4}-\d{2}-\d{2}$/);
    if (isoMatch) {
      return new Date(dateStr).getTime();
    }

    const monthYearMatch = dateStr.match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (monthYearMatch) {
      return new Date(`${monthYearMatch[1]} 1, ${monthYearMatch[2]}`).getTime();
    }

    const parsedDate = new Date(dateStr).getTime();
    return isNaN(parsedDate) ? null : parsedDate;
  }

  ALL_REVIEWS = STAKEHOLDER_REVIEWS;

  searchTerm = signal<string>('');
  selectedCompany = signal<string>('');
  selectedCategory = signal<string>('');
  startDate = signal<string>('');
  endDate = signal<string>('');

  availableCompanies = computed(() => [...new Set(this.ALL_REVIEWS.map((r) => r.company))]);
  availableCategories = computed(() => [...new Set(this.ALL_REVIEWS.map((r) => r.category))]);

  filteredReviews = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const company = this.selectedCompany();
    const category = this.selectedCategory();

    const startTarget = this.parseDateString(this.startDate());
    const endTarget = this.parseDateString(this.endDate());

    return this.ALL_REVIEWS.filter((review) => {
      if (company && review.company !== company) return false;
      if (category && review.category !== category) return false;

      const reviewTime = review.date.getTime();
      if (startTarget && reviewTime < startTarget) return false;
      if (endTarget && reviewTime > endTarget) return false;

      if (term) {
        const searchableText = `
          ${review.reviewer ?? ''} 
          ${review.review}
        `.toLowerCase();

        if (!searchableText.includes(term)) return false;
      }

      return true;
    });
  });
}
