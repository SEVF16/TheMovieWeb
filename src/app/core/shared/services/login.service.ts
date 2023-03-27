import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private url = 'https://api.themoviedb.org/3';
  private apiKey = '';
  private requestToken: string = '';


  constructor( private http: HttpClient) {}

    getRequestToken(): Observable<any> {
      const getTokeUrl = `${this.url}/authentication/token/new?api_key=${this.apiKey}`;
      return this.http.get<any>(getTokeUrl);
    }

    login(username: string, password: string, requestToken: string): Observable<any> {
      const loginUrl = `${this.url}/authentication/token/validate_with_login?api_key=${this.apiKey}`;
      const body = {
        username,
        password,
        request_token: requestToken
      };
      return this.http.post<any>(loginUrl, body)
      .pipe(tap((response: any) => {
        localStorage.setItem('tmdbToken', body.request_token)
      }),catchError(this.handleError)
    );
    }

    getTokenFromLocalStorage() {
      return localStorage.getItem('tmdbToken');
    }

    private handleError(error: any): Observable<never> {
      console.error(error);
      return throwError(() => new Error ('Something went wrong'));
    }


  }



  // login(username: string, password: string): Observable<any> {

  //   this.getToken().subscribe(
  //       (value: string) => {
  //         this.token = value;
  //         console.log(this.token);
  //       }
  //     ).
  //   console.log(this.token);
  //   const loginUrl = `${this.url}/authentication/token/validate_with_login`;
  //   const body = {
  //     username: username,
  //     password: password,
  //     "request_token": this.token,
  //   };
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post(loginUrl, body, { headers: headers }).pipe(
  //     map(res => res),
  //     catchError(this.handleError)
  //   );
  // }

  // getToken() {

  //   const getTokenUrl = `${this.url}/authentication/token/new?api_key=${this.apiKey}`;

  //   return this.http.get(getTokenUrl).pipe(
  //     map((response: any) => {
  //       return response.request_token;
  //     }),
  //     catchError(this.handleError)
  //   );
  // }




  //--------------------------------------------------------------------------------------------

      // login(username: string, password: string): Observable<any>{
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //     })
    //   };
    //     const Loginurl = `${this.url}/authentication/token/new?api_key=${this.apiKey}`;
    //     const body = {
    //       username: username,
    //       password: password,
    //       request_token: true
    //     };
    //     return this.http.get(Loginurl)
    //     .pipe(
    //       catchError(this.handleError)
    //     )
    //     .pipe(
    //       map( (data : any) =>
    //         {const token = data.request_token
    //           const validateUrl = `${this.url}/authentication/token/validate_with_login`;
    //           const validateBody = {
    //             username: username,
    //             password: password,
    //             request_token: token};
    //           return this.http.post(validateUrl, validateBody, httpOptions)
    //             .pipe(
    //               catchError(this.handleError)
    //             );
    //         }
    //       ),map((data:any) =>{
    //             const sessionUrl = `${this.url}/authentication/session/new`;
    //             const sessionBody = {
    //               request_token: data.request_token
    //             };
    //             return this.http.post(sessionUrl, sessionBody, httpOptions)
    //             .pipe(
    //               catchError(this.handleError)
    //             );
    //           }),tap((data: any) => {
    //             localStorage.setItem('session_id', data.session_id);
    //             this.loggedIn = true;
    //             return true;
    //           }),
    //           catchError(this.handleError)
    //   )
    // }

    // logout() {
    //   localStorage.removeItem('session_id');
    //   this.loggedIn = false;
    // }

    // isLoggedIn() {
    //   return this.loggedIn;
    // }

