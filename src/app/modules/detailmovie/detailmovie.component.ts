import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetmoviesService } from 'src/app/core/shared/services/getmovies.service';

@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.component.html',
  styleUrls: ['./detailmovie.component.css']
})
export class DetailmovieComponent implements OnInit {
  movie: any[];
  idM: any;
  urlImg: string;
  constructor(private route: ActivatedRoute, private serviceMovie: GetmoviesService ) {
    this.movie = [];
    this.urlImg = 'https://image.tmdb.org/t/p/original'

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.idM = params.get('id')
      this.serviceMovie.getDetailMovie(this.idM).subscribe( result => {
        this.movie.push(result)
      })
      console.log(this.movie);
    })
  }

}
