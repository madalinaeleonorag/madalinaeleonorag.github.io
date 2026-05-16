import { Component, input } from '@angular/core';
import { IReview } from '../../interfaces/review';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.html',
  styleUrl: './review-card.scss',
})
export class ReviewCard {
  review = input.required<IReview>();
  showCompany = input<boolean>(false);
  showRole = input<boolean>(false);
}
