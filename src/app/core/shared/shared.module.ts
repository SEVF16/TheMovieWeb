import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatRadioModule
  ],
  exports:[
    HttpClientModule,
    RouterModule,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,

  ]
})
export class SharedModule { }
