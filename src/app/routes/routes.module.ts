import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './passport/login/login.component';
import{ LoginService} from './passport/login/login.service'

import { SharedModule } from '../shared/shared.module';

import { UserManageComponent } from './user-manage/user-manage.component';
import { AuthManageComponent } from './auth-manage/auth-manage.component';




// import { NzFormModule } from 'ng-zorro-antd/form';




@NgModule({
  declarations: [LoginComponent, UserManageComponent, AuthManageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,  
  ],
  providers:[LoginService]
})
export class RoutesModule { }
