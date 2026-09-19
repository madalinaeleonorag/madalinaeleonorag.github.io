import { IReview } from './review';

export interface IAssignment {
  descriptionPoints?: string[];
  endDate: string;
  stakeholderImpact?: string;
  startDate: string;
  summary?: string;
  techStack?: string[];
  title: string;
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
