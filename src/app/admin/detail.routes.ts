import { OSBBComponent } from './osbb.component';
import { HousesComponent } from './houses.component';

export const routes = [
  { path: '', children: [
    { path: '', component: DetailComponent },
    { path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
  ]},
];
