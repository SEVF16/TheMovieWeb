import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/core/models/Cast.interface';
import { Movie } from 'src/app/core/models/Movie.interface';
import { GetmoviesService } from 'src/app/core/shared/services/getmovies.service';

@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.component.html',
  styleUrls: ['./detailmovie.component.css']
})
export class DetailmovieComponent implements OnInit {
  movie: Movie[] = [];
  cast: Cast[] = [];
  idM: any;
  urlImg: string;
  constructor(private route: ActivatedRoute, private serviceMovie: GetmoviesService ) {
    //this.movie = [];
    this.urlImg = 'https://image.tmdb.org/t/p/original'

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.idM = params.get('id')
      this.serviceMovie.getDetailMovie(this.idM).subscribe( ([movie, credits]) => {
        this.movie.push(movie)
        this.cast = credits.cast
        console.log(this.cast);
      })

    })
  }

}
