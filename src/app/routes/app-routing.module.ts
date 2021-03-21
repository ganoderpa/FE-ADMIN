import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassportComponent } from '../layout/passport/passport.component';
import { LoginComponent } from './passport/login/login.component';
import { HomeComponent } from '../layout/home/home.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { UserManageComponent } from './user-manage/user-manage.component';



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
    component: HomeAdminComponent,
    children: [
      {
        path: 'user',
        component: UserManageComponent,
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
