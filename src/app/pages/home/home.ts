import { Component, inject, signal } from '@angular/core';
import { Chip } from '../../components/chip/chip';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { Router, RouterLink } from '@angular/router';
import { WORK_EXPERIENCE } from '../../database/experience';
import { SOCIAL_LINKS } from '../../database/social-links';
import { EXPERTISE } from '../../database/expertise';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';
import { ReviewCard } from '../../components/review-card/review-card';

@Component({
  selector: 'app-home',
  imports: [SvgIcon, Chip, RouterLink, ReviewCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly sidenavLinks = [
    { label: 'Home', icon: 'home', href: '#hero' },
    { label: 'Expertise', icon: 'build', href: '#expertise' },
    { label: 'Work Experience', icon: 'work', href: '#experience' },
    { label: 'Reviews', icon: 'star', href: '#reviews' },
  ];
  readonly socialLinks = SOCIAL_LINKS;
  readonly expertise = EXPERTISE;
  readonly workExperience = WORK_EXPERIENCE;
  readonly topReviews = STAKEHOLDER_REVIEWS.slice(0, 3);

  currentSlideIndex = signal<number>(0);

  private router = inject(Router);

  downloadFile(type: 'CV' | 'Recommendations') {
    const fileName =
      type === 'CV'
        ? 'Madalina-Eleonora-Gheorghe-CV'
        : 'Madalina-Eleonora-Gheorghe-Recommendations';
    const fileUrl = `/${fileName}.pdf`;
    window.open(fileUrl, '_blank');
  }

  goToReviewDetail(date: Date, reviewer?: string, position?: string): void {
    this.router.navigate(['/reviews'], {
      queryParams: { date: date.toISOString(), reviewer, position },
    });
  }
}
