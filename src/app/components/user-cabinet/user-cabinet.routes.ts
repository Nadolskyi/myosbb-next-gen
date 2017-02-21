import { UserBillsComponent }        from './user-bills/user-bills.component';
import { ProfileComponent }          from './profile/profile.component';
import { ProfileSidebarComponent }   from './profile-sidebar/profile-sidebar.component';
import { SettingsComponent }         from './settings/settings.component';
import { UserCabinetComponent }      from './user-cabinet.component';

export const routes = [
  { path: '',  component: UserCabinetComponent,
    children: [
      { path: 'cabinet', component: UserCabinetComponent },
      { path: '', redirectTo: 'cabinet', pathMatch: 'full' },
      { path: 'user_bills', component: UserBillsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'cabinet/settings', component: SettingsComponent },
      
    ]},
];
