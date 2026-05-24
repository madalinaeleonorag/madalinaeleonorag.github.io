import { Component, inject, signal } from '@angular/core';
import { Chip } from '../../components/chip/chip';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
import { Router, RouterLink } from '@angular/router';
import { WORK_EXPERIENCE } from '../../database/experience';
import { SOCIAL_LINKS } from '../../database/social-links';
import { EXPERTISE } from '../../database/expertise';
import { STAKEHOLDER_REVIEWS } from '../../database/reviews';
import { ReviewCard } from '../../components/review-card/review-card';
import { CERTIFICATIONS } from '../../database/certifications';
import { EDUCATION } from '../../database/education';
import { AssetPathPipe } from '../../pipes/asset-path-pipe';
import { FEATURED_PROJECTS } from '../../database/projects';

@Component({
  selector: 'app-home',
  imports: [SvgIcon, Chip, RouterLink, ReviewCard, AssetPathPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly sidenavLinks = [
    { label: 'Home', icon: 'home', href: '#hero' },
    { label: 'Expertise', icon: 'build', href: '#expertise' },
    { label: 'Work Experience', icon: 'work', href: '#experience' },
    { label: 'Credentials', icon: 'certificate', href: '#credentials' },
    { label: 'Personal Projects', icon: 'folder', href: '#projects' },
    { label: 'Reviews', icon: 'star', href: '#reviews' },
  ];
  readonly socialLinks = SOCIAL_LINKS;
  readonly expertise = EXPERTISE;
  readonly workExperience = WORK_EXPERIENCE;
  readonly featuredProjects = FEATURED_PROJECTS;
  readonly topReviews = STAKEHOLDER_REVIEWS.filter((review) => review.isTop).slice(0, 3);
  readonly timelineItems = this.buildChronologicalTimeline();

  currentSlideIndex = signal<number>(0);

  private router = inject(Router);

  downloadFile(type: 'CV' | 'Recommendations') {
    const fileName =
      type === 'CV'
        ? 'Madalina-Eleonora-Gheorghe-CV'
        : 'Madalina-Eleonora-Gheorghe-Recommendations';
    const fileUrl = `/${fileName}.pdf`;

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_download', {
        event_category: 'Engagement',
        event_label: type,
        value: 1,
      });
    } else {
      console.log(`[Analytics] Tracked download event for: ${type}`);
    }

    window.open(fileUrl, '_blank');
  }

  openGitHub(url?: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_external_github', {
        event_category: 'Outbound Link',
        event_label: 'Main Portfolio Footer Button',
      });
    }
    window.open(url || 'https://github.com/madalinaeleonorag', '_blank', 'noopener,noreferrer');
  }

  goToReviewDetail(date: Date, reviewer?: string, position?: string): void {
    this.router.navigate(['/reviews'], {
      queryParams: { date: date.toISOString(), reviewer, position },
    });
  }

  private buildChronologicalTimeline() {
    const mappedEdu = EDUCATION.map((edu, index) => {
      const year = parseInt(edu.period.split('-')[1]?.trim() || edu.period.split('-')[0]?.trim());
      return {
        id: `edu-${index}`,
        type: 'education',
        sortYear: year,
        date: edu.period,
        title: edu.degree,
        subtitle: edu.institution,
        meta: edu.grade,
        logo: edu.logo,
        url: '',
      };
    });

    const mappedCerts = CERTIFICATIONS.map((cert, index) => {
      const yearStr = cert.issueDate.split(' ')[1] || cert.issueDate;
      return {
        id: `cert-${index}`,
        type: 'certification',
        sortYear: parseInt(yearStr),
        date: cert.issueDate,
        title: cert.name,
        subtitle: cert.organization,
        meta: '',
        description: '',
        logo: cert.logo,
        url: cert.url,
      };
    });

    return [...mappedEdu, ...mappedCerts].sort((a, b) => b.sortYear - a.sortYear);
  }
}
