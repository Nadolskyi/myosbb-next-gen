import { Routes } from '@angular/router';
import { OSBBComponent } from './osbb';
import { HousesComponent } from './houses';
import { ProjectsComponent } from './projects';
import { ApartmentsComponent } from './apartments';
import { EventsComponent } from './events';
import { UsersComponent } from './users';
import { HouseAboutComponent } from './houses/house';


export const adminRoutes: Routes = [
    {
        path: 'admin',
        children: [
            { path: 'osbb', component: OSBBComponent },
            { path: '', redirectTo: 'osbb', pathMatch: 'full' },
            { path: 'houses', component: HousesComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'houses/house', component: HouseAboutComponent },
            { path: 'apartments', component: ApartmentsComponent },
            { path: 'events', component: EventsComponent },
            { path: 'users', component: UsersComponent },
        ]
    },
];
