import { Component } from '@angular/core';

@Component({
  selector: 'manager',
  template: `
    <manager-sidebar-menu></manager-sidebar-menu>
    <router-outlet></router-outlet>
  `,
})

export class ManagerComponent {

}
