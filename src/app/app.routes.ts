import { Routes } from '@angular/router';
import { LoginComponent } from './login';
import { RegistrationComponent } from './registration';
import { DataResolver } from './app.resolver';
import { RegistrationSuccessComponent } from './registration/registration-sucess';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'registration',  component: RegistrationComponent },
  { path: 'registration/success', component: RegistrationSuccessComponent },
];
