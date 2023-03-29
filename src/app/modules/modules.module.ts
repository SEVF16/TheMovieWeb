import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { MoviesComponent } from './movies/movies.component';
import { CommonModule } from '@angular/common';
import { DetailmovieComponent } from './detailmovie/detailmovie.component';



@NgModule({
  declarations: [
    ModulesComponent,
    LoginComponent,
    MoviesComponent,
    DetailmovieComponent
  ],
  imports: [
    ModulesRoutingModule,
    CoreModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ModulesModule { }
