import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {
  private url = 'https://api.themoviedb.org/3';
  private apiKey = '';
  constructor(private http: HttpClient) { }

  getMovie() {
    const urlb = `${this.url}/movie/changes?api_key=${this.apiKey}&page=1`;
    return this.http.get(urlb);
  }
}
