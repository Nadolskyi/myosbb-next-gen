/**
 * Created by stadn on 2/12/2017.
 */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { routes } from './manager.routes';

import { ManagerComponent } from './manager.component';
import { ManagerSidebarMenuComponent } from "./sidebarmenu/sidebarmenu.component";
import { UserProfileManagerComponent } from "./user";
import { WallComponent } from './wall';
import { HouseShowManagerComponent } from  './house';
import { EventsComponent } from './events';
import { WallService } from './wall/wall.service';
import { OsbbBillsComponent } from './osbbBils';
import { ContractsComponent } from  './contracts';
import { TicketSingleManagerComponent } from './ticket';

@NgModule({
  declarations: [
    ManagerComponent,
    WallComponent,
    HouseShowManagerComponent,
    EventsComponent,
    OsbbBillsComponent,
    ContractsComponent,
    TicketSingleManagerComponent,
    ManagerSidebarMenuComponent,
    UserProfileManagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ManagerModule {
  public static routes = routes;
}
