import { Routes } from '@angular/router';
import { LoginComponent } from './login';
import { CommonComponent } from './common';
// import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  // { path: '',      component: NoContentComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'common', component: CommonComponent },
 // { path: 'manager', loadChildren: './manager#ManagerModule'}
  // { path: '**',    component: NoContentComponent },
];
