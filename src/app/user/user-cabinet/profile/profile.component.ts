import {Component, OnInit} from '@angular/core'
import { User } from '../../../common/models/User';
import { CurrentUserService } from '../../../common/services/current.user.service';
import {Router} from '@angular/router';
//import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
//import {CapitalizeFirstLetterPipe} from "../../../shared/pipes/capitalize-first-letter"
//import MaskedInput from 'angular2-text-mask';
//import emailMask from 'node_modules/text-mask-addons/dist/emailMask.js';
import {ProfileService} from "./profile.service";

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [ProfileService],
    //directives: [REACTIVE_FORM_DIRECTIVES, MaskedInput, HeaderComponent, ROUTER_DIRECTIVES],
    
    //pipes: [TranslatePipe, CapitalizeFirstLetterPipe]

})
export class ProfileComponent implements OnInit {
    currentUser:User;
    updateUser:User = new User();
    private expToken:string;
    //public emailMask = emailMask;
    //public textmask = [/[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/];
    //public phoneMask = ['(', /[0]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(private router:Router, private currentUserService:CurrentUserService, private profileService:ProfileService) {
        this.currentUser = currentUserService.currentUser;
        this.updateUser = Object.assign({}, this.currentUser);
        console.log('constructore');
        this.expToken = localStorage.getItem('expires_in');
        this.expToken = new Date(parseInt(this.expToken)).toLocaleString();
        console.log(this.currentUser);
    }

    ngOnInit():any {
        // this.currentUser.birthDate = new Date(this.currentUser.birthDate).toLocaleDateString();
    }

    getTime(time:Date):string {
        return new Date(time).toLocaleDateString();
    }

    getUser() {
        this.currentUser = this.currentUserService.getUser();
        console.log('Current user is ' + this.currentUser.firstName + ' ' + this.currentUser.lastName);
    }

     changeUser() {
        let osbbId = this.updateUser.osbbId;
        let user:User;
        this.profileService.updateUser(this.updateUser).subscribe((data)=>{
            user = <User>data.json();
            user.osbbId = osbbId;
            this.currentUserService.setUser(user);
            this.currentUser=this.currentUserService.currentUser;
            this.updateUser = Object.assign({}, this.currentUser);
        });
    }
    
}