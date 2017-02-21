import { CommonComponent } from './common.component';
import { WallComponent } from '../components/wall';
import { HouseComponent } from '../components/house';
import { EventsComponent } from '../components/events';
import { OsbbBillsComponent } from '../components/osbbBils';
import { ContractsComponent } from '../components/contracts';
import { TicketComponent  } from '../components/ticket';
import { ProviderComponent } from '../components/provider';
import { ApartmentComponent } from '../components/apartment';
import { CalendarComponent } from '../components/calendar';
import { ContactsComponent } from '../components/contacts';

export const routes = [
  { path: '',  component: CommonComponent,
    children: [
      { path: '', redirectTo: 'wall', pathMatch: 'full' },
      { path: 'wall', component: WallComponent },
      { path: 'houses', component: HouseComponent },
      { path: 'events', component: EventsComponent },
      { path: 'osbb', component: OsbbBillsComponent },
      { path: 'contract', component: ContractsComponent },
      { path: 'ticket', component: TicketComponent  },
      { path: 'provider', component: ProviderComponent },
      { path: 'apartment', component: ApartmentComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'contacts', component: ContactsComponent }
    ]},
];
