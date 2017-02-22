import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <sidebar-component></sidebar-component>
    <router-outlet></router-outlet>
  `,
})

export class UserComponent {

}
