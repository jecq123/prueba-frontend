import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListbooksRoutingModule } from './listbooks-routing.module';
import { ListbooksComponent } from './listbooks.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListbooksComponent
  ],
  imports: [
    CommonModule,
    ListbooksRoutingModule,
    HttpClientModule
  ],
  providers:[HttpClientModule]
})
export class ListbooksModule { }
