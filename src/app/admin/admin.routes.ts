import { AdminComponent } from './admin.component';
import { WallComponent } from '../components/wall';

export const routes = [
  { path: '',  component: AdminComponent,
    children: [
      { path: '', redirectTo: 'wall', pathMatch: 'full' },
      { path: 'wall', component: WallComponent }
    ]},
];
