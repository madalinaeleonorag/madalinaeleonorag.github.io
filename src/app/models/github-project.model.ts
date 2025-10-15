// There are many more fields available, but these are the ones needed
export interface GithubProject {
  name: string;
  description: string;
  fullName: string;
  branch: string;
  principalCodingLanguage: string;
  imageUrl: string;
  url: string;
  created: Date;
}
