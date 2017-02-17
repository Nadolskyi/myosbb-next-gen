import { Routes } from '@angular/router';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: NoContentComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'manager', loadChildren: './manager#ManagerModule'},
  { path: '**',    component: NoContentComponent },
];
