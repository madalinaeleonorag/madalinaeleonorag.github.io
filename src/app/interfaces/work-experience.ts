export interface IWorkExperience {
  company: string;
  role: string;
  period: string;
  logo: string;
  isCurrent?: boolean;
  techStack?: string[];
  summary?: string;
  descriptionPoints?: string[];
}
