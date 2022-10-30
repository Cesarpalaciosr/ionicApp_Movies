import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
// import { HttpClientJsonpModule } from "@angular/common/http";
// import { GetapiService } from './services/getapi.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, /*HttpClientJsonpModule, GetapiService,*/ IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
