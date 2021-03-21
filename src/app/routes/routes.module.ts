import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './passport/login/login.component';
import { SharedModule } from '../shared/shared.module';

import { TranslateModule } from '@ngx-translate/core';



// import { NzFormModule } from 'ng-zorro-antd/form';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    //懒加载原因?? 不在子module中引入会报 找不到translate 管道
    //https://blog.csdn.net/weixin_34304013/article/details/92973209
    // TranslateModule,
    // NzFormModule,
    SharedModule,
    TranslateModule
    
  ]
})
export class RoutesModule { }
