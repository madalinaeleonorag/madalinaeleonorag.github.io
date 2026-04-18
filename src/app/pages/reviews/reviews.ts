import { Component, computed, signal } from '@angular/core';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '../../components/select/select';

@Component({
  selector: 'app-reviews',
  imports: [FormsModule, CommonModule, SelectComponent],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  ALL_REVIEWS = STAKEHOLDER_REVIEWS;

  searchTerm = signal<string>('');
  selectedCompany = signal<string>('');
  selectedPosition = signal<string>('');
  startDate = signal<string>('');
  endDate = signal<string>('');

  availableCompanies = computed(() => [...new Set(this.ALL_REVIEWS.map((r) => r.company))]);
  availablePositions = computed(() => [...new Set(this.ALL_REVIEWS.map((r) => r.position))]);

  filteredReviews = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const company = this.selectedCompany();
    const position = this.selectedPosition();

    const startTarget = this.startDate() ? new Date(this.startDate()).getTime() : null;
    const endTarget = this.endDate() ? new Date(this.endDate()).getTime() : null;

    return this.ALL_REVIEWS.filter((review) => {
      if (company && review.company !== company) return false;
      if (position && review.position !== position) return false;

      const reviewTime = review.date.getTime();
      if (startTarget && reviewTime < startTarget) return false;
      if (endTarget && reviewTime > endTarget) return false;

      if (term) {
        const searchableText = `
          ${review.reviewer ?? ''} 
          ${review.preview ?? ''} 
          ${review.review}
        `.toLowerCase();

        if (!searchableText.includes(term)) return false;
      }

      return true;
    });
  });
}
