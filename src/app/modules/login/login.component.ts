import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private loginService: LoginService, private router: Router) {
    this.username = '';
    this.password = '';
    this.requestToken = '';
  }

  ngOnInit(): void {
    const data = this.loginService.getAllDataFromLocalStorage();
    if (data) {
      this.username = data['tmdbUsername'];
      this.password = data['tmdbPassword'];
      this.requestToken = data['tmdbToken'];
      this.loginComponent(); // Iniciar sesión automáticamente con los datos del LocalStorage
    }
  }

  onSubmit(): void {
    if (!this.requestToken) {
      this.loginService.getRequestToken().subscribe((response: any) => {
        this.requestToken = response.request_token;
        this.loginComponent();
      });}
    else {
      this.loginComponent();
    }
  }

  private loginComponent(): void {
    this.loginService.login(this.requestToken, this.username, this.password).subscribe({
      next: response => {
        console.log('Got response', response);
        this.router.navigate(['movies']); // Redirigir a la página de películas después de iniciar sesión
      },
      error: error => console.error('Error logging in', error),
      complete: () => console.log('completed')
    });
  }

}

