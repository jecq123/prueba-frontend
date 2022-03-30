import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbooksRoutingModule } from './addbooks-routing.module';
import { AddbooksComponent } from './addbooks.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddbooksComponent
  ],
  imports: [
    CommonModule,
    AddbooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddbooksModule { }
