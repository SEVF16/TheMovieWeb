import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';



@NgModule({
  declarations: [
    ModulesComponent,
    LoginComponent
  ],
  imports: [
    ModulesRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: []
})
export class ModulesModule { }
