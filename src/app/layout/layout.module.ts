import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportComponent } from './passport/passport.component';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';



@NgModule({
  declarations: [PassportComponent, HomeComponent, HomeHeaderComponent, HomeFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }
