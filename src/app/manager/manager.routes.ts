/**
 * Created by stadn on 2/12/2017.
 */
import { ManagerComponent } from './manager.component';
import { UserProfileManagerComponent } from './user';
import { WallComponent } from './wall';
import { HouseShowManagerComponent } from './house';
import { EventsComponent } from './events';
import { OsbbBillsComponent } from './osbbBils';
import { ContractsComponent } from './contracts';
import { TicketSingleManagerComponent } from './ticket';

export const routes = [
  { path: '',  component: ManagerComponent,
  children: [
    // { path: '', component: ManagerComponent },
    { path: 'user', component: UserProfileManagerComponent },
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'wall', component: WallComponent },
    { path: 'manager-house-show', component: HouseShowManagerComponent },
    { path: 'event', component: EventsComponent },
    { path: 'osbb', component: OsbbBillsComponent},
    { path: 'contracts', component: ContractsComponent},
    { path: 'ticket-manager', component: TicketSingleManagerComponent}
  ]},
];
