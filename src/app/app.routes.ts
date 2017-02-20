import { Routes } from '@angular/router';
import { LoginComponent } from './login';
import { CommonComponent } from './common';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'common', component: CommonComponent }
];
