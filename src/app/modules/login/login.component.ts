import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  requestToken: string;
  constructor(private loginService: LoginService) {
    this.username = '';
    this.password = '';
    this.requestToken = '';
  }

  ngOnInit(): void {
    // this.loginService.getToken().subscribe(
    //   (token: string) => {
    //     console.log(token);
    //   }
    // )
    const token = this.loginService.getTokenFromLocalStorage();
    if (token) {
      this.requestToken = token;
    }


  }

  onSubmit(): void {
    if (!this.requestToken) {
      this.loginService.getRequestToken().subscribe((response : any ) =>{
        this.requestToken = response.request_token;
        this.login();
      });
    } else {
      this.login();
    }
    // this.loginService.getRequestToken().subscribe(
    //   (response: any) => {
    //     this.requestToken = response.request_token;
    //     this.loginService.login(this.username, this.password, this.requestToken).subscribe({
    //         next: response => console.log('Got response', response),
    //         error: error => console.error('Error logging in', error),
    //         complete: () => console.log('completed')
    //   });
    // })
  }

  private login(): void {
    this.loginService.login(this.username, this.password, this.requestToken).subscribe({
      next: response => console.log('Got response', response),
      error: error => console.error('Error logging in', error),
      complete: () => console.log('completed')
    });
  }
}

  // onSubmit(){
  //   //console.log(this.username);
  //   this.loginService.login(this.username, this.password).subscribe({
  //     next: response => console.log('Got response', response),
  //     error: error => console.error('Error logging in', error),
  //     complete: () => console.log('completed')
  //   })
  // }


    //   response => {
    //     console.log('Got response', response);
    //   },
    //   error => {
    //     console.error('Error logging in', error);
    //     this.errorMessage = 'Invalid username or password';
    //   }
    // );


//}
