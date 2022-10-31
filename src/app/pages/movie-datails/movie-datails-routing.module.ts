import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsPage } from './movie-datails.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDatailsPageRoutingModule {}
