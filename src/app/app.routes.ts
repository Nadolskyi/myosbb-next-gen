import { Routes } from '@angular/router';
import { LoginComponent } from './common/login';

export const ROUTES: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'manager', loadChildren: './manager#ManagerModule' },
  { path: 'admin', loadChildren: './admin#AdminModule' },
  { path: 'user', loadChildren: './user#UserModule' }
];
