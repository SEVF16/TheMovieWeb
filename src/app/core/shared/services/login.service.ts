import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private url = 'https://api.themoviedb.org/3';
  public apiKey = '233c5170639560f779bf7fe831e4f54e';
  private requestToken: string = '';


  constructor( private http: HttpClient) {}

  public getRequestToken(): Observable<{ request_token: string }> {
    const url = `${this.url}/authentication/token/new?api_key=${this.apiKey}`;
    return this.http.get<{ request_token: string }>(url);
  }

  public login(username: string, password: string, requestToken: string): Observable<{ request_token: string }> {
    const url = `${this.url}/authentication/token/validate_with_login?api_key=${this.apiKey}`;
    const body = {
      username,
      password,
      request_token: requestToken
    };
    return this.http.post<{ request_token: string }>(url, body).pipe(
      tap((response: { request_token: string }) => {
        localStorage.setItem('tmdbToken', response.request_token);
      }),
      catchError((error: any) => {
        console.error(error);
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }

  public getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('tmdbToken');
  }
  }



  // getRequestToken(): Observable<any> {
  //   const getTokeUrl = `${this.url}/authentication/token/new?api_key=${this.apiKey}`;
  //   return this.http.get<any>(getTokeUrl);
  // }

  // login(username: string, password: string, requestToken: string): Observable<any> {
  //   const loginUrl = `${this.url}/authentication/token/validate_with_login?api_key=${this.apiKey}`;
  //   const body = {
  //     username,
  //     password,
  //     request_token: requestToken
  //   };
  //   return this.http.post<any>(loginUrl, body)
  //   .pipe(tap((response: any) => {
  //     localStorage.setItem('tmdbToken', response.request_token)
  //   }),catchError(this.handleError)
  // );
  // }

  // getTokenFromLocalStorage() {
  //   return localStorage.getItem('tmdbToken');
  // }

  // private handleError(error: any): Observable<never> {
  //   console.error(error);
  //   return throwError(() => new Error ('Something went wrong'));
  // }


  //---------------------------------------------------------------------------------------

