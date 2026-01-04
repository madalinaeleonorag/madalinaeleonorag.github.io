import { Component, input } from '@angular/core';
import { Article } from '../../models/medium-article';
import { DatePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article = input.required<Article>();

  openUrl(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
