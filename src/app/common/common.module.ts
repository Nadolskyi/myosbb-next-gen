import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './common.routes';

import { CommonComponent } from './common.component';
import { WallComponent } from '../components/wall';
import { HouseComponent } from  '../components/house';
import { EventsComponent } from '../components/events';
import { OsbbBillsComponent } from '../components/osbbBils';
import { ContractsComponent } from  '../components/contracts';
import { TicketComponent } from '../components/ticket';
import { ProviderComponent } from '../components/provider';
import { ApartmentComponent } from '../components/apartment';
import { CalendarComponent } from '../components/calendar';
import { ContactsComponent } from '../components/contacts';
import { BreadcrumbComponent } from '../components/breadcrumb';
import { SidebarComponent } from '../shared/sidebar';

@NgModule({
  declarations: [
    CommonComponent,
    WallComponent,
    HouseComponent,
    EventsComponent,
    ApartmentComponent,
    ContactsComponent,
    BreadcrumbComponent,
    CalendarComponent,
    ProviderComponent,
    OsbbBillsComponent,
    ContractsComponent,
    TicketComponent,
    SidebarComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})

export class CommontModule {
  public static routes = routes;
}
