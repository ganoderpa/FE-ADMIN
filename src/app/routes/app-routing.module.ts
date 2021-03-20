import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './passport/login/login.component';



const routes: Routes = [
  { path: '', redirectTo: 'passport/login', pathMatch: 'full' },
  {
    path: 'passport',
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
