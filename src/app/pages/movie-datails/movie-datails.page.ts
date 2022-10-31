import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/getapi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-datails',
  templateUrl: './movie-datails.page.html',
  styleUrls: ['./movie-datails.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie = null;
  imageBaseUrl = environment.images;
 
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
 
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
    });
  }
 
  openHomepage(url) {
    window.open(url, '_blank');
  }
}
