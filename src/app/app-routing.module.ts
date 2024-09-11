import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo : 'welcome',
    pathMatch:'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path:'login/:email',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login-successful',
    component: LoginSuccessComponent
  },
  {
    path: 'signup-successful',
    component: SignupSuccessComponent
  },
  {
    path: 'profile',
    component: ProfileHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
