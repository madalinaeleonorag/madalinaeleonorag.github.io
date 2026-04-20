import { Component, computed, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '../../components/select/select';
import { InputComponent } from '../../components/input/input';
import { HighlightPipe } from '../../pipes/highlight.pipe';

@Component({
  selector: 'app-reviews',
  imports: [FormsModule, CommonModule, SelectComponent, InputComponent, HighlightPipe],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  constructor(private readonly sanitizer: DomSanitizer) {}

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

    const startTarget = this.startDate() ? new Date(this.startDate()).getTime() : null;
    const endTarget = this.endDate() ? new Date(this.endDate()).getTime() : null;

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

  getHighlightedReview(review: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(review);
  }
}
