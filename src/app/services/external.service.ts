import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  readonly MEDIUM_API_URL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madalinaeleonorag';
  readonly GITHUB_API_URL =
    'https://api.github.com/users/madalinaeleonorag/repos?type=public&sort=created&per_page=5&order=desc';

  private http = inject(HttpClient);

  get githubProjects() {
    return this.http.get<any[]>(this.GITHUB_API_URL);
  }

  get mediumArticles() {
    return this.http.get<any[]>(this.MEDIUM_API_URL);
  }
}
