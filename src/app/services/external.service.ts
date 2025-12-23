import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { GITHUB_API_URL, MEDIUM_API_URL } from '../constants/api-url';
import { GithubProject } from '../models/github-project.model';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  private http = inject(HttpClient);

  // TODO fix this to get only pinned repositories using GraphQL API - currently not working due to authentication issues
  // get githubProjects() {
  //   return this.http
  //     .post<GithubProjectsResponse>(
  //       GITHUB_GRAPHQL_URL,
  //       { query: GET_PINNED_GITHUB_REPOSITORIES },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${environment.githubToken}`,
  //         },
  //       }
  //     )
  //     .pipe(
  //       map((response: GithubProjectsResponse) => {
  //         return response.data.user.pinnedItems.nodes;
  //       })
  //     );
  // }

  get githubProjects() {
    const IDs = [
      124085630, 206401229, 312567859, 181836705, 157966192, 311027833,
    ];

    return this.http.get<any>(GITHUB_API_URL).pipe(
      map((response) => response.filter((item: any) => IDs.includes(item.id))),
      map((objectItem: any) =>
        objectItem.map(
          (item: any): GithubProject => ({
            name: item.name,
            description: item.description,
            languages: { nodes: [{ name: item.language, color: '' }] },
            url: item.url,
            openGraphImageUrl: `https://raw.githubusercontent.com/${item.full_name}/${item.default_branch}/demo.png`,
            homepageUrl: item.homepage,
          })
        )
      )
    );
  }

  get mediumArticles() {
    return this.http.get<any[]>(MEDIUM_API_URL);
  }
}
