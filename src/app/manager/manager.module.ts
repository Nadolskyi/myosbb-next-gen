import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './manager.routes';

import { ManagerComponent } from './manager.component';
import { WallComponent } from '../components/wall';
import { HouseComponent } from  '../components/house';
import { EventsComponent } from '../components/events';
// import { OsbbBillsComponent } from '../components/osbbBils';
import { ContractsComponent } from  '../components/contracts';
import { TicketComponent } from '../components/ticket';
import { ProviderComponent } from '../components/provider';
import { ApartmentComponent } from '../components/apartment';
import { CalendarComponent } from '../components/calendar';
import { ContactsComponent } from '../components/contacts';
import { BreadcrumbComponent } from '../components/breadcrumb';
import { SidebarComponent } from '../common/sidebar';
import { DocsComponent } from '../components/docs';
import { SubTicketComponent } from '../components/ticket/subticket';
import { ChartsModule } from "ng2-charts/ng2-charts";



@NgModule({
  declarations: [
    ManagerComponent,
    WallComponent,
    HouseComponent,
    EventsComponent,
    ApartmentComponent,
    ContactsComponent,
    DocsComponent,
    BreadcrumbComponent,
    CalendarComponent,
    ProviderComponent,
    // OsbbBillsComponent,
    ContractsComponent,
    TicketComponent,
    SidebarComponent,
    SubTicketComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
})

export class ManagerModule {
  public static routes = routes;
}
