import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports:[
    SharedModule,


  ]
})
export class CoreModule { }
