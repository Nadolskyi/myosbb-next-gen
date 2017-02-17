/**
 * Created by stadn on 2/12/2017.
 */
import { ManagerComponent } from './manager.component';
import { WallComponent } from './wall';
import { HouseShowManagerComponent } from '../common/house';
import { EventsComponent } from '../common/events';
import { OsbbBillsComponent } from '../common/osbbBils';
import { ContractsComponent } from '../common/contracts';
import { TicketSingleManagerComponent } from '../common/ticket';
import { ProviderManagerComponent } from '../common/provider';
import { ApartmentComponent } from '../common/apartment';
import { CalendarComponent } from '../common/calendar';
import { ContactsComponent } from '../contacts';

export const routes = [
  { path: '',  component: ManagerComponent,
  children: [
    // { path: '', component: ManagerComponent },
    { path: '', redirectTo: 'wall', pathMatch: 'full' },
    { path: 'wall', component: WallComponent },
    { path: 'house', component: HouseShowManagerComponent },
    { path: 'events', component: EventsComponent },
    { path: 'osbb', component: OsbbBillsComponent },
    { path: 'contracts', component: ContractsComponent },
    { path: 'ticket', component: TicketSingleManagerComponent },
    { path: 'provider', component: ProviderManagerComponent },
    { path: 'apartment', component: ApartmentComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'contacts', component: ContactsComponent }
  ]},
];
