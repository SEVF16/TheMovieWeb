import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesGuard } from '../guards/movies.guard';
import { DetailmovieComponent } from './detailmovie/detailmovie.component';
import { LoginComponent } from './login/login.component';
import { ModulesComponent } from './modules.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [{

  path: '', component: ModulesComponent, children:
  [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'movies', component: MoviesComponent, canActivate:[MoviesGuard]},
    {path: ':id', component: DetailmovieComponent, canActivate:[MoviesGuard]}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
