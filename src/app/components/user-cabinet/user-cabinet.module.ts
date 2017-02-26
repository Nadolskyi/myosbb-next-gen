import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RouterModule }       from '@angular/router';
import { routesCabinet }      from './user-cabinet.routes.ts';
import { TextMaskModule }     from 'angular2-text-mask';

import { UserBillsComponent }        from './user-bills/user-bills.component';
import { ProfileComponent }          from './profile/profile.component';
import { ProfileSidebarComponent }   from './profile-sidebar/profile-sidebar.component';
import { SettingsComponent }         from './settings/settings.component';
import { UserCabinetComponent }      from './user-cabinet.component';
import { ApiService }                from '../../shared/login/api.service';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    TextMaskModule,
    RouterModule.forChild(routesCabinet),
  ],
  declarations: [
    UserBillsComponent,
    ProfileComponent,
    ProfileSidebarComponent,
    SettingsComponent,
    UserCabinetComponent,
  ],
  providers: [ApiService],
})
export class UserCabinetModule { }
