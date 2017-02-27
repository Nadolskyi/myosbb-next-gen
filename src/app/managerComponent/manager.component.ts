import {
  Component,
  OnInit,
} from '@angular/core';
import { ManagerRoutes } from './manager.routes';

@Component({
  selector: 'manager',
  template: `
  <sidebar-component></sidebar-component>
  <router-outlet></router-outlet>
`
})
export class ManagerComponent {
  public static routes = ManagerRoutes;
}
