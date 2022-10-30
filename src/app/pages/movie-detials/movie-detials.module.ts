import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetialsPageRoutingModule } from './movie-detials-routing.module';

import { MovieDetialsPage } from './movie-detials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetialsPageRoutingModule
  ],
  declarations: [MovieDetialsPage]
})
export class MovieDetialsPageModule {}
