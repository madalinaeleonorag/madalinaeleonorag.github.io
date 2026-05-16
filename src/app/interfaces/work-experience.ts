import { IReview } from './review';

export interface IAssignment {
  descriptionPoints?: string[];
  endDate: string;
  startDate: string;
  summary?: string;
  stakeholderImpact?: string;
  techStack?: string[];
  topReviews?: IReview[];
}

export interface IWorkExperience {
  assignments: IAssignment[];
  company: string;
  logo: string;
  role: string;
}
