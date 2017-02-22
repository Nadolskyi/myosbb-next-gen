import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AboutComponent } from './about';
import { RegistrationComponent } from './registration';
import { DataResolver } from './app.resolver';
import { RegistrationSuccessComponent } from './registration/registration-sucess';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'registration',  component: RegistrationComponent },
  { path: 'registration/success', component: RegistrationSuccessComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'}
];
