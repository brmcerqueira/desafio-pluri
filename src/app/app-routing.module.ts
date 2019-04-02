import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  { path: 'movies', component: MainComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', redirectTo: 'movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
