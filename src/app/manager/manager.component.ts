import { Component } from '@angular/core';

@Component({
  selector: 'manager',
  template: `
    <sidebar-component></sidebar-component>
    <router-outlet></router-outlet>
  `,
})

export class ManagerComponent {

}
