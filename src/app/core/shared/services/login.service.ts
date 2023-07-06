import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private url = 'https://api.themoviedb.org/3';
  public apiKey = '';
  private requestToken: string = '';


  constructor( private http: HttpClient) {}

  public getRequestToken(): Observable<{ request_token: string }> {
    const url = `${this.url}/authentication/token/new?api_key=${this.apiKey}`;
    return this.http.get<{ request_token: string }>(url);
  }

  public login(requestToken: string, username?: string, password?: string): Observable<{ request_token: string }> {
    const url = `${this.url}/authentication/token/validate_with_login?api_key=${this.apiKey}`;
    const body = {
      username,
      password,
      request_token: requestToken
    };
    return this.http.post<{ request_token: string }>(url, body).pipe(
      tap((response: { request_token: string }) => {
        localStorage.setItem('tmdbToken', response.request_token);
        localStorage.setItem('tmdbUsername', username || '');
        localStorage.setItem('tmdbPassword', password || '');
      }),
      catchError((error: any) => {
        console.error(error);
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }

  public getAllDataFromLocalStorage(): { [key: string]: string } {
    const data: { [key: string]: string } = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        const value = localStorage.getItem(key);
        if (value) {
          data[key] = value;
        }
      }
    }
    return data;
  }


}


