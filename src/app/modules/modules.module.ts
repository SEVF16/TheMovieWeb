import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
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
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class ModulesModule { }
