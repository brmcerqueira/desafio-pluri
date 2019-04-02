import { Component } from '@angular/core';
import {MoviesService} from "../movies.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  private _details: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    this._details = this.moviesService.details(parseInt(this.activatedRoute.snapshot.params.id))
  }

  public get details(): Observable<any> {
    return this._details;
  }
}
