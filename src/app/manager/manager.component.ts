import {
  Component,
  OnInit,
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { myosbbLink } from '../../shared/models/localhost.config';

@Component({
  selector: 'manager',
  styles: [`
  manager-sidebar-menu {
    /*float: left;*/
  }
`],
  template: `
    <h1>Hello from Manager</h1>
    <manager-sidebar-menu></manager-sidebar-menu>
   
    <router-outlet></router-outlet>
  `,
})
export class ManagerComponent {

}
