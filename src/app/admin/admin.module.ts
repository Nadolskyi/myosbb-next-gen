import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';

import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})

export class AdminModule {
  public static routes = routes;
}
