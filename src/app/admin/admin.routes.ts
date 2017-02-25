import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { HouseComponent } from '../components/houses';
import { EventsComponent } from '../components/events';
import { ContractsComponent } from '../components/contracts';
import { TicketComponent  } from '../components/ticket';
import { ProviderComponent } from '../components/provider';
import { ApartmentComponent } from '../components/apartment';
import { CalendarComponent } from '../components/calendar';
import { ContactsComponent } from '../components/contacts';
import { SubTicketComponent } from '../components/ticket/subticket';
import { OSBBComponent } from '../components/osbb';
import { HouseAboutComponent } from '../components/house';
import { eventsDetailComponent } from '../components/events/eventsDetail';
import { UsersComponent } from '../components/users';

export const AdminRoutes: Routes = [
  { path: 'admin',  component: AdminComponent,
    children: [
      { path: '', redirectTo: 'osbb', pathMatch: 'full' },
      { path: 'houses', component: HouseComponent },
      { path: 'events/:id', component: eventsDetailComponent },
      { path: 'events', component: EventsComponent },
      { path: 'contract', component: ContractsComponent },
      { path: 'ticket', component: TicketComponent  },
      { path: 'ticket/:id', component: SubTicketComponent },
      { path: 'provider', component: ProviderComponent },
      { path: 'apartment', component: ApartmentComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'osbb', component: OSBBComponent },
      { path: 'house/:id', component: HouseAboutComponent },
      { path: 'users', component: UsersComponent }
    ]
  },
];
