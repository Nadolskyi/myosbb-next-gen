import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { routes } from './manager.routes';
import { ComComponent } from './common.component';
import { Compo } from './component';

@NgModule({
  declarations: [
    ComComponent,
    Compo
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})

export class ComModule {

}
