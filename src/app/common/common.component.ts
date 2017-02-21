import { Component } from '@angular/core';

@Component({
  selector: 'common',
  template: `
    <sidebar-component></sidebar-component>
    <router-outlet></router-outlet>
  `,
})

export class CommonComponent {

}
