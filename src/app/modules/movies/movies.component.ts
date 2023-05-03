import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetmoviesService } from 'src/app/core/shared/services/getmovies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;
  urlImg: string;
  constructor(private serviceMovie: GetmoviesService, private router: Router) {
    this.urlImg = 'https://image.tmdb.org/t/p/original'
   }

  ngOnInit(): void {

    this.serviceMovie.getMovie().subscribe((response: any ) =>{
      this.movies = response.results

  })
  }


  seeDetail(id:number){
    console.log(id);
    this.router.navigate([id])
  }
}
