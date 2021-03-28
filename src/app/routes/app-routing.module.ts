import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassportComponent } from '../layout/passport/passport.component';
import { LoginComponent } from './passport/login/login.component';
import { HomeComponent } from '../layout/home/home.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { AuthManageComponent } from './auth-manage/auth-manage.component';
import { DynamicCpComponent } from './dynamic-cp/dynamic-cp.component';



const routes: Routes = [
  { path: '', redirectTo: 'passport/login', pathMatch: 'full' },
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'user',
        component: UserManageComponent,
      },
      {
        path: 'auth',
        component: AuthManageComponent,
      },
      {
        path: 'dynamic',
        component: DynamicCpComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
    useHash: false,
    scrollPositionRestoration: 'top'
  }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
