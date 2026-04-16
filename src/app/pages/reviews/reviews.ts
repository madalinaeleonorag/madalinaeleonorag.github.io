import { Component } from '@angular/core';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  reviews = STAKEHOLDER_REVIEWS;
}
