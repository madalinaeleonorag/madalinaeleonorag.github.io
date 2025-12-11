import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

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

    return this.http.post<any>(
      this.GITHUB_GRAPHQL_URL,
      { query },
      {
        headers: {
          Authorization: `Bearer ${environment.githubToken}`,
        },
      }
    );
  }

  get mediumArticles() {
    return this.http.get<any[]>(this.MEDIUM_API_URL);
  }
}
