import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

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


}
