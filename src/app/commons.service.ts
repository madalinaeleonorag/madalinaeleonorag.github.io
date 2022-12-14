import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProjectModel, PublicationModel } from './data.model';
import { map } from 'rxjs/operators';
import { Octokit } from '@octokit/core';


@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  public publications = new Subject<PublicationModel[]>();
  public publications$ = this.publications.asObservable();
  public repositories = new BehaviorSubject<ProjectModel[]>([]);
  public repositories$ = this.repositories.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getDataFromAPIs(): void {
    this.getPublications();
    this.getRepositories();
  }

  public getPublications(): void {

    let articlesToShow: PublicationModel[] = [];

    this.http.get<any>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madalinaeleonorag').subscribe(data => {
      switch (true) {
        case data.items.length > 7: articlesToShow = [...data.items.slice(0, 6)];
                                    break;
        default: articlesToShow = [...data.items];
                 break;
      }

      this.publications.next(articlesToShow);
    });
  }

  public openNewTab(link: string): void {
    window.open(link);
  }

  public navigateToURL(url: string): void {
    this.router.navigateByUrl(url);
    this.goToTop();
  }

  private goToTop(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  public getRepositories(): void {

    let dataMapped: ProjectModel[] = [];

    this.http.get<any>('https://api.github.com/users/madalinaeleonorag/repos?type=public&sort=pushed&per_page=9').pipe(map(data => {

      dataMapped = [];

      data.forEach(element => {
        const newProject: ProjectModel = new ProjectModel();

        newProject.name = element.name;
        newProject.code = element.html_url;
        newProject.live = element.homepage;
        newProject.technologies = [element.languages_url];
        newProject.noDetails = true;
        newProject.logo = `./../assets/projects/github/${element.name}.png`;
        dataMapped.push(newProject);
      });

      return dataMapped;
    }))
      .subscribe(data => {

        data.forEach(element => {
          this.http.get<any>(element.technologies[0])
            .subscribe(response => {
              element.technologies = response ? Object.keys(response) : [];
            });
        });

        this.repositories.next(dataMapped);
      });
  }

  public cookieConsoleMessage(): void {

    const consoleSignatureStyle = 'font-size: 12px;' +
      'background: #a50c0c;' +
      'color: white;' +
      'text-align: center;' +
      'padding: 5px 10px;' +
      'margin: 5px 0;' +
      'width: 100%;' +
      'border-radius: 20px;';

    const consoleSignatureText = '%cDon\'t steal my cookies! ????';

    console.log(consoleSignatureText, consoleSignatureStyle);
  }
}
