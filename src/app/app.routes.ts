import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login';
import { RegistrationComponent } from './registration';
import { RegistrationSuccessComponent } from './registration/registration-sucess';
import { ManagerRoutes } from './manager/manager.routes';
import { AdminRoutes } from './admin/admin.routes';
import { UserRoutes } from "./user/user.routes";
export const ROUTES: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'registration',  component: RegistrationComponent },
  { path: 'registration/success', component: RegistrationSuccessComponent },
  ...ManagerRoutes,
  ...AdminRoutes,
  ...UserRoutes
];
