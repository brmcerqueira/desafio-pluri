import { Component } from '@angular/core';
import {MoviesService} from "../movies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private router: Router, private moviesService: MoviesService) {

  }

  public get movies(): any[] {
    return this.moviesService.movies;
  }

  public load(): void {
    this.moviesService.load().subscribe();
  }

  public details(id: number): void {
    this.router.navigate([`details/${id}`]);
  }
}
