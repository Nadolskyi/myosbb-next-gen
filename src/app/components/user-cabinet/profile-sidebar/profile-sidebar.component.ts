import { Component, OnInit, Input } from '@angular/core';
import { LoginService }             from '../../../shared/login/login.service';
import { User }                     from '../../../models/user.model';
@Component({
  selector: 'profile-sidebar',
  styleUrls: [ './profile-sidebar.component.css' ],
  templateUrl: './profile-sidebar.component.html',
})

export class ProfileSidebarComponent implements OnInit {
  public currentUser: User;

    constructor(private currentUserService: LoginService) {}

    public ngOnInit() {
        this.getCurrentUser();
    }

    public getCurrentUser() {
        this.currentUser = this.currentUserService.getUser();
    }
}
