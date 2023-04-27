import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable, forkJoin } from 'rxjs';
import { Movie } from '../../models/Movie.interface';
import { AllCast, Cast } from '../../models/Cast.interface';
@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {
  private url = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient, private serviceKey: LoginService) { }

  getMovie() {
    const urlb = `${this.url}/movie/popular?api_key=${this.serviceKey.apiKey}`;
    return this.http.get(urlb);
  }

  getDetailMovie(id: number): Observable<[Movie, AllCast]>{
    const urlmovie = `${this.url}/movie/${id}?api_key=${this.serviceKey.apiKey}`;
    const urlCredit = `${this.url}//movie/${id}/credits?api_key=${this.serviceKey.apiKey}`;

    const movie = this.http.get<Movie>(urlmovie);
    const credits = this.http.get<AllCast>(urlCredit)

    return forkJoin([movie, credits])
  }


}
