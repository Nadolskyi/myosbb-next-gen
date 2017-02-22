import { Routes } from '@angular/router';
import { LoginComponent } from './login';
import { CommonComponent } from './common';
import { DataResolver } from './app.resolver';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  { path: '', component: AppComponent},
  { path: 'login',  component: LoginComponent },
  { path: 'common', component: CommonComponent }
];
