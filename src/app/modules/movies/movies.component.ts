import { Component, OnInit } from '@angular/core';
import { GetmoviesService } from 'src/app/core/shared/services/getmovies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private serviceMovie: GetmoviesService) { }

  ngOnInit(): void {

    this.serviceMovie.getMovie().subscribe((response: any ) =>{
      console.log(response);
  })
  }

}
