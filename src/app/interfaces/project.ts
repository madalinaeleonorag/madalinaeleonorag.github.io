export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}
