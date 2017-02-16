import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AboutComponent } from './about';
import { adminRoutes } from "./admin/admin.routes";
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  ...adminRoutes,
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'}
];
