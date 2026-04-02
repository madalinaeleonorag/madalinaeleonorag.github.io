interface IAssignment {
  summary?: string;
  techStack?: string[];
  descriptionPoints?: string[];
  stakeholderImpact?: string;
}

export interface IWorkExperience {
  company: string;
  role: string;
  period: string;
  logo: string;
  isCurrent?: boolean;
  assignments?: IAssignment[];
}
