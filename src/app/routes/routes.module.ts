import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './passport/login/login.component';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class RoutesModule { }
