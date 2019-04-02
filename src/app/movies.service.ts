import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";

type LoadOutputDto = {
  page: number,
  results: any[]
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly _movies: any[];
  private _index: number;

  constructor(private http: HttpClient, private translateService: TranslateService) {
    this._movies = [];
    this._index = 1;
    this.load().subscribe();
  }

  public load(): Observable<void> {
    return this.http.get<LoadOutputDto>(MoviesService.uri("movie/now_playing"), {
      params: this.params.append("page", this._index.toString())
    }).pipe(map(d => {
        this._index = d.page + 1;
        d.results.forEach(i => this._movies.push(i));
    }));
  }

  public details(id: number): Observable<any> {
    return this.http.get<any>(MoviesService.uri(`movie/${id}`), {
      params: this.params
    });
  }

  public get movies(): any[] {
    return this._movies;
  }

  private get params(): HttpParams {
    return new HttpParams()
      .append("api_key", environment.apiKey)
      .append("language", this.translateService.getBrowserLang());
  }

  private static uri(path: string): string {
    return `https://api.themoviedb.org/3/${path}`
  }
}
