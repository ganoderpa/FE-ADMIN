import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportComponent } from './passport/passport.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [PassportComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
