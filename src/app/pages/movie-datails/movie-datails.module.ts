import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDatailsPageRoutingModule } from './movie-datails-routing.module';

import { MovieDetailsPage } from './movie-datails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDatailsPageRoutingModule
  ],
  declarations: [MovieDetailsPage]
})
export class MovieDatailsPageModule {}
