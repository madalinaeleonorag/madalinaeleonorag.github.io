import { IReview } from './review';

export interface IAssignment {
  id: string;
  descriptionPoints?: string[];
  endDate: string;
  stakeholderImpact?: string;
  startDate: string;
  summary?: string;
  techStack?: string[];
  title: string;
  reviewIds?: string[];
  topReviews?: IReview[];
}

export interface IWorkExperience {
  assignments: IAssignment[];
  company: string;
  endDate?: string;
  logo: string;
  role: string;
  startDate: string;
}
