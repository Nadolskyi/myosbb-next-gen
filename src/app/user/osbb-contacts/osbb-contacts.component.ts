import { Component, OnInit } from '@angular/core';

import { OsbbDTO } from '../../common/models/osbbDTO';
import { User } from '../../common/models/User';
// import { OsbbService } from './../common/services/osbb.service';
import { CurrentUserService } from './../common/services/current.user.service';


@Component({
    selector: 'user-menu-osbb-contacts',
    templateUrl: './osbb-contacts.html',
    styleUrls: ['./osbb-contacts.css'],
    // providers: [OsbbService],
})
export class OsbbContactsComponent {// implements OnInit {

/*    private userOsbb: OsbbDTO;
    private user: User;
    private osbbRetrieved = false;

    constructor(private osbbService: OsbbService, private userSevice: CurrentUserService) {
        this.userOsbb = null;
     }

    ngOnInit(): any {
        console.log('Initializing OSBB contacts...');
        this.getUser();
        this.getOsbb();
    }

    getUser() {
        this.user = this.userSevice.getUser();
        console.log('Current user is ' + this.user.firstName + ' ' + this.user.lastName+' '+this.user.osbbId);
    }

    getOsbb() {
        console.log(this.user);
        this.osbbService.getDTOOsbbById(this.user.osbbId)
            .then(osbb => {
                this.userOsbb = osbb;
                console.log('Retrieving OSBB for ' + this.user.firstName + ' ' + this.user.lastName);
                console.log(this.userOsbb);
                this.osbbRetrieved = true;
            });
    }*/
}
