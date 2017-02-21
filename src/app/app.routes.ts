import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login';

export const ROUTES: Routes = [

  { path: 'login',  component: LoginComponent },
  { path: 'common', loadChildren: './common#CommontModule'}

];
