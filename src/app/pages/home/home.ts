import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { Chip } from '../../components/chip/chip';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { Router, RouterLink } from '@angular/router';
import { WORK_EXPERIENCE } from '../../database/experience';
import { WorkComponent } from '../../components/work/work';
import { SOCIAL_LINKS } from '../../database/social-links';
import { EXPERTISE } from '../../database/expertise';
import { IWorkExperience } from '../../interfaces/work-experience';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';
import { interval, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [SvgIcon, Chip, RouterLink, WorkComponent],
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
  readonly workExperience: IWorkExperience[] = [
    {
      ...WORK_EXPERIENCE[0],
      assignments: WORK_EXPERIENCE[0].assignments?.map((assignment) => ({
        ...assignment,
        techStack: [],
        descriptionPoints: [],
      })),
    },
    ...WORK_EXPERIENCE.slice(1).map((job) => ({
      ...job,
      assignments: [],
    })),
  ];
  reviewsSlides = [
    STAKEHOLDER_REVIEWS.slice(0, 3),
    STAKEHOLDER_REVIEWS.slice(3, 6),
    STAKEHOLDER_REVIEWS.slice(6, 9),
  ];

  currentSlideIndex = signal<number>(0);

  private autoPlayInterval = 6000;
  private timerSubscription?: Subscription;
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  constructor() {
    afterNextRender(() => {
      this.startAutoPlay();
    });
  }

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

  nextSlide(): void {
    this.currentSlideIndex.update((index) =>
      index === this.reviewsSlides.length - 1 ? 0 : index + 1,
    );
    this.resetTimer();
  }

  prevSlide(): void {
    this.currentSlideIndex.update((index) =>
      index === 0 ? this.reviewsSlides.length - 1 : index - 1,
    );
    this.resetTimer();
  }

  goToSlide(index: number): void {
    this.currentSlideIndex.set(index);
    this.resetTimer();
  }

  startAutoPlay(): void {
    if (this.timerSubscription && !this.timerSubscription.closed) return;

    this.timerSubscription = interval(this.autoPlayInterval)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.nextSlide();
      });
  }

  pauseAutoPlay(): void {
    this.timerSubscription?.unsubscribe();
  }

  private resetTimer(): void {
    this.pauseAutoPlay();
    this.startAutoPlay();
  }
}
