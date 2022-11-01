import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private loadingCtrl: LoadingController,
    private router:Router,
  ) {}
 
  ngOnInit() {
    const token = localStorage.getItem('request_token')
    if (token == null) {
      this.router.navigateByUrl('/login',{replaceUrl:true})
      console.log(token);
      
    }
    console.log(JSON.parse(token));
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