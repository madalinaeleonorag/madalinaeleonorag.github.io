export interface IReview {
  id: string;
  company: string;
  date: Date;
  position: string;
  category: string;
  reviewer?: string;
  preview?: string;
  review: string;
  isTop?: boolean;
  featuredOnHomepage?: boolean;
}
