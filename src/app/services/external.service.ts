import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { GithubProject } from '../models/github-project.model';

interface GraphQLResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: GithubProject[];
      };
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  readonly MEDIUM_API_URL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madalinaeleonorag';
  readonly GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

  private http = inject(HttpClient);

  get githubProjects() {
    const query = `
      query {
        user(login: "madalinaeleonorag") {
          pinnedItems(first: 10, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      }
    `;
    return this.http
      .post<GraphQLResponse>(
        this.GITHUB_GRAPHQL_URL,
        { query },
        {
          headers: {
            Authorization: `Bearer ${environment.githubToken}`,
          },
        }
      )
      .pipe(
        map((response: GraphQLResponse) => {
          return response.data.user.pinnedItems.nodes;
        })
      );
  }

  get mediumArticles() {
    return this.http.get<any[]>(this.MEDIUM_API_URL);
  }
}
