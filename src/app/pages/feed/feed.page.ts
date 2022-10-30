import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { MovieService } from '../../services/getapi.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {
  movies = [];
  currentPage = 1;
  imageBaseUrl = environment.images;
 
  constructor(
    private getapiService: MovieService,
    private loadingCtrl: LoadingController
  ) {}
 
  ngOnInit() {
    this.loadMovies();
  }
 
  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
 
    this.getapiService.getTopRatedMovies(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        this.movies.push(...res.results);
 
        event?.target.complete();
        if (event) {
          event.target.disabled = res.total_pages === this.currentPage;
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
 
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}