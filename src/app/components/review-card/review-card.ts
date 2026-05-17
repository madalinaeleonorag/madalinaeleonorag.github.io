import { Component, inject, input } from '@angular/core';
import { IReview } from '../../interfaces/review';
import { SvgIcon } from '../svg-icon/svg-icon';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-review-card',
  imports: [SvgIcon, HighlightPipe, NgClass],
  templateUrl: './review-card.html',
  styleUrl: './review-card.scss',
})
export class ReviewCard {
  review = input.required<IReview>();
  showCompany = input<boolean>(false);
  showRole = input<boolean>(false);
  fullReview = input<boolean>(false);
  searchTerm = input<string>('');

  private readonly sanitizer = inject(DomSanitizer);

  getHighlightedReview(review: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(review);
  }
}
