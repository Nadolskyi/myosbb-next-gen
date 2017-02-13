import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { OSBBComponent } from './admin/osbb';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'admin/osbb',  component: OSBBComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
