import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './passport/login/login.component';
import { PassportComponent } from '../layout/passport/passport.component';



const routes: Routes = [
  { path: '', redirectTo: 'passport/login', pathMatch: 'full' },
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent }
    ]
  }

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
