import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { IReview } from '../../interfaces/review';
import { SvgIcon } from '../svg-icon/svg-icon';
import { HighlightPipe } from '../../pipes/highlight.pipe';

@Component({
  selector: 'app-review-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIcon, DatePipe],
  templateUrl: './review-card.html',
  styleUrl: './review-card.scss',
})
export class ReviewCard {
  readonly review = input.required<IReview>();
  readonly showCompany = input<boolean>(false);
  readonly showRole = input<boolean>(false);
  readonly fullReview = input<boolean>(false);
  readonly searchTerm = input<string>('');

  private readonly sanitizer = inject(DomSanitizer);
  private readonly highlight = new HighlightPipe();

  /**
   * Review texts are our own content from database/reviews.ts (with <strong> and lists), so they
   * are trusted; the search highlight only wraps text nodes in <span class="highlight">.
   */
  protected readonly body = computed(() => {
    const review = this.review();
    if (!this.fullReview()) {
      return review.preview ?? '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(
      this.highlight.transform(review.review, this.searchTerm()),
    );
  });
}
