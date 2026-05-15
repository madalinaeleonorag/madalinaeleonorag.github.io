export interface IReview {
  company: string;
  date: Date;
  position: string;
  category: string;
  reviewer?: string;
  preview?: string;
  review: string;
  isTop?: boolean;
}
