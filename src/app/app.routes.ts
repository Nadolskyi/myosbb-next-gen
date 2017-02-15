import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: UserComponent },
  { path: 'user', component: UserComponent },
  { path: '**',    component: NoContentComponent },
];
