import { Routes } from '@angular/router';

import { UserComponent } from './user';
import { LoginComponent } from './login';
import { OsbbContactsComponent } from './user/osbb-contacts';
import { OsbbDocumentsAndReportsComponent } from './user/osbb-docs-and-reports';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/contacts', component: OsbbContactsComponent },
  { path: 'user/documents', component: OsbbDocumentsAndReportsComponent },
  { path: 'login',  component: LoginComponent },
];
