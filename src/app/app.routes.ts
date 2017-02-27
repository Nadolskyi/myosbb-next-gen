import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login';
import { ManagerRoutes } from './managerComponent/manager.routes';
import { AdminRoutes } from './adminComponent/admin.routes';
import { UserRoutes } from './userComponent/user.routes';
export const ROUTES: Routes = [

  { path: 'login',  component: LoginComponent },
  ...ManagerRoutes,
  ...AdminRoutes,
  ...UserRoutes
];
