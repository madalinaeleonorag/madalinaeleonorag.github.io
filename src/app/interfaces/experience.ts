export interface Assignment {
  applicationTitle: string;
  clientCountry: string;
  description: string;
  endDate: string;
  position: string;
  startDate: string;
  technologies: string[];
}

export interface Experience {
  assignments: Assignment[];
  companyName: string;
  logo: string;
  shortDescriptionOfAssessments: string;
  showMore?: boolean;
}
