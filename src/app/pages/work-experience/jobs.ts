import { WORK_EXPERIENCE } from '../../database/experience';
import { REVIEW_BY_ID } from '../../database/reviews';
import { IReview } from '../../interfaces/review';
import { slugify } from '../../utils/slugify';

/**
 * The roles as the work experience pages use them: newest first, each with its URL slug
 * (`/work-experience/<slug>`) and the top reviews of every assignment.
 * Imported only by those pages and their route resolvers, so the text stays out of the
 * first bundle.
 */
export const JOBS = WORK_EXPERIENCE.map((job) => {
  const end = job.endDate || job.assignments[0]?.endDate || '';
  const reviewIds = new Set(job.assignments.flatMap((assignment) => assignment.reviewIds ?? []));
  return {
    ...job,
    slug: slugify(job.company),
    start: job.startDate || job.assignments[0]?.startDate || '',
    end,
    current: end === 'Present',
    reviewCount: [...reviewIds].filter((id) => REVIEW_BY_ID[id]).length,
    // Distinct technologies across assignments, in order of first appearance.
    techStack: [...new Set(job.assignments.flatMap((assignment) => assignment.techStack ?? []))],
    assignments: job.assignments.map((assignment) => ({
      ...assignment,
      topReviews: (assignment.reviewIds ?? [])
        .map((reviewId) => REVIEW_BY_ID[reviewId])
        .filter((review): review is IReview => Boolean(review))
        .slice(0, 3),
    })),
  };
});

export type Job = (typeof JOBS)[number];

export function findJob(slug: string | null | undefined): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}
