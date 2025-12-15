import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { GithubProjectsResponse } from '../models/github-project.model';
import { GET_PINNED_GITHUB_REPOSITORIES } from '../components/graphql/getPinnedGithubRepositories';
import { GITHUB_GRAPHQL_URL, MEDIUM_API_URL } from '../constants/api-url';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  private http = inject(HttpClient);

  get githubProjects() {
    return this.http
      .post<GithubProjectsResponse>(
        GITHUB_GRAPHQL_URL,
        { query: GET_PINNED_GITHUB_REPOSITORIES },
        {
          headers: {
            Authorization: `Bearer ${environment.GITHUB_TOKEN}`,
          },
        }
      )
      .pipe(
        map((response: GithubProjectsResponse) => {
          return response.data.user.pinnedItems.nodes;
        })
      );
  }

  get mediumArticles() {
    return this.http.get<any[]>(MEDIUM_API_URL);
  }
}
