import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './core/shared/components/notfound/notfound.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/modules.module').then( m => m.ModulesModule)},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
