import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { OSBBComponent } from './admin/osbb';
import { HousesComponent } from './admin/houses';
import { ProjectsComponent } from './admin/projects';
import { ApartmentsComponent } from './admin/apartments';
import { EventsComponent } from './admin/events';
import { UsersComponent } from './admin/users';
import { HousesAboutComponent } from './houses';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'admin/osbb',  component: OSBBComponent },
  { path: 'admin/houses',  component: HousesComponent },
  { path: 'houses',  component: HousesAboutComponent },
  { path: 'admin/projects',  component: ProjectsComponent },
  { path: 'admin/apartments',  component: ApartmentsComponent },
  { path: 'admin/events',  component: EventsComponent },
  { path: 'admin/users',  component: UsersComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
