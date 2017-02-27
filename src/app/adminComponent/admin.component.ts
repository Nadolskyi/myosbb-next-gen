import {
  Component,
  OnInit,
} from '@angular/core';
import { AdminRoutes } from './admin.routes';

@Component({
  selector: 'admin',
  template: `
  <sidebar-component></sidebar-component>
  <router-outlet></router-outlet>
`
})
export class AdminComponent {
  public static routes = AdminRoutes;
}
