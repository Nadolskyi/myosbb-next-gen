import { Routes } from '@angular/router';

import { UserComponent } from './user';
import { LoginComponent } from './login';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'login',  component: LoginComponent },
];
