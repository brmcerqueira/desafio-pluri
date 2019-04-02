import { Component } from '@angular/core';
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private moviesService: MoviesService) {
    this.load();
  }

  public get movies(): any[] {
    return this.moviesService.movies;
  }

  public load(): void {
    this.moviesService.load().subscribe();
  }
}
