import { UserComponent } from './user.component';
import { WallComponent } from '../components/wall';

export const routes = [
  { path: '',  component: UserComponent,
    children: [
      { path: '', redirectTo: 'wall', pathMatch: 'full' },
      { path: 'wall', component: WallComponent }
    ]},
];
