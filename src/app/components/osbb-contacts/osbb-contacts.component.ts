import { Component, OnInit } from '@angular/core';

import { OsbbDTO } from '../../models/osbbDTO';
import { User } from '../../models/User';
import { OsbbService } from '../../services/osbb.service';
import { LoginService } from '../../shared/login/login.service';

@Component({
    selector: 'user-menu-osbb-contacts',
    templateUrl: './osbb-contacts.html',
    styleUrls: ['./osbb-contacts.css'],
})
export class OsbbContactsComponent implements OnInit {

    private userOsbb: OsbbDTO;
    private user: User;
    private osbbRetrieved = false;

    constructor(private osbbService: OsbbService, private userSevice: LoginService) {
        this.userOsbb = null;
     }

    ngOnInit(): any {
        this.getUser();
        this.getOsbb();
    }

    getUser() {
        this.user = this.userSevice.getUser();
    }

    getOsbb() {
        this.osbbService.getDTOOsbbById(this.user.osbbId)
            .then(osbb => {
                this.userOsbb = osbb;
                this.osbbRetrieved = true;
            });
    }
}
