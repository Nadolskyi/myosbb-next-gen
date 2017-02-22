import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './user.routes';

import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})

export class UserModule {
  public static routes = routes;
}
