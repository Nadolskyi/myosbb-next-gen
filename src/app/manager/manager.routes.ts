import { ManagerComponent } from './manager.component';
import { WallComponent } from './wall';
import { HouseComponent } from '../common/house';
import { EventsComponent } from '../common/events';
import { OsbbBillsComponent } from '../common/osbbBils';
import { ContractsComponent } from '../common/contracts';
import { TicketComponent  } from '../common/ticket';
import { ProviderManagerComponent } from '../common/provider';
import { ApartmentComponent } from '../common/apartment';
import { CalendarComponent } from '../common/calendar';
import { ContactsComponent } from '../contacts';

export const routes = [
  { path: '',  component: ManagerComponent,
  children: [
    { path: '', redirectTo: 'wall', pathMatch: 'full' },
    { path: 'wall', component: WallComponent },
    { path: 'house', component: HouseComponent },
    { path: 'events', component: EventsComponent },
    { path: 'osbb', component: OsbbBillsComponent },
    { path: 'contracts', component: ContractsComponent },
    { path: 'ticket', component: TicketComponent  },
    { path: 'provider', component: ProviderManagerComponent },
    { path: 'apartment', component: ApartmentComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'contacts', component: ContactsComponent }
  ]},
];
