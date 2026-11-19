import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewCard } from '../../../components/review-card/review-card';
import { STAKEHOLDER_REVIEWS } from '../../../database/reviews';

/** The reviews marked `featuredOnHomepage`, with a link to the full list. */
@Component({
  selector: 'app-home-reviews',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ReviewCard],
  template: `
    <div class="cards-grid">
      @for (review of reviews; track review.id) {
        <app-review-card [review]="review" [showCompany]="true" />
      }
    </div>
    <a class="btn btn-primary" routerLink="/reviews">Read all reviews</a>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-lg);
      width: 100%;
    }
  `,
})
export class HomeReviews {
  readonly reviews = STAKEHOLDER_REVIEWS.filter((review) => review.featuredOnHomepage);
}
