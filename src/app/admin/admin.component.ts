import { Component } from '@angular/core';

@Component({
  selector: 'admin',
  template: `
    <sidebar-component></sidebar-component>
    <router-outlet></router-outlet>
  `,
})

export class AdminComponent {

}
