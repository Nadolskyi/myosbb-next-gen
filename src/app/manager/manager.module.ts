import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './manager.routes';

import { ManagerComponent } from './manager.component';
import { ManagerSidebarMenuComponent } from "./sidebarmenu/sidebarmenu.component";
import { WallComponent } from './wall';
import { HouseComponent } from  '../common/house';
import { EventsComponent } from '../common/events';
import { OsbbBillsComponent } from '../common/osbbBils';
import { ContractsComponent } from  '../common/contracts';
import { TicketComponent } from '../common/ticket';
import { ProviderManagerComponent } from '../common/provider';
import { ApartmentComponent } from '../common/apartment';
import { CalendarComponent } from '../common/calendar';
import { ContactsComponent } from '../contacts';
import { BreadcrumbComponent } from './breadcrumb';

@NgModule({
  declarations: [
    ManagerComponent,
    WallComponent,
    HouseComponent,
    EventsComponent,
    ApartmentComponent,
    ContactsComponent,
    BreadcrumbComponent,
    CalendarComponent,
    ProviderManagerComponent,
    OsbbBillsComponent,
    ContractsComponent,
    TicketComponent,
    ManagerSidebarMenuComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})

export class ManagerModule {
  public static routes = routes;
}
