interface Language {
  name: string;
  color: string;
}
export interface GithubProject {
  description: string;
  homepageUrl: string;
  languages: { nodes: Language[] };
  name: string;
  openGraphImageUrl: string;
  url: string;
}

export interface GithubProjectsResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: GithubProject[];
      };
    };
  };
}
