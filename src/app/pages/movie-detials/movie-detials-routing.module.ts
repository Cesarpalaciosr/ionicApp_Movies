import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetialsPage } from './movie-detials.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDetialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetialsPageRoutingModule {}
