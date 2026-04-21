export interface IAssignment {
  descriptionPoints?: string[];
  endDate: string;
  stakeholderImpact?: string;
  startDate: string;
  summary?: string;
  techStack?: string[];
}

export interface IWorkExperience {
  assignments: IAssignment[];
  company: string;
  logo: string;
  role: string;
}
