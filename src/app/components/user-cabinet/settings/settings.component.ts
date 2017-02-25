import {Component,OnInit,Input} from '@angular/core';

import {Settings} from './Settings';
import {User}     from '../../../models/User';

import {SettingsService} from './settings.service';
import {LoginService }   from "../../../shared/login/login.service";

@Component({
  selector: 'settings',  
  providers: [SettingsService],
  templateUrl: './settings.component.html',
  styleUrls: [ './settings.component.css' ],
  
})

export class SettingsComponent implements OnInit {

	private currentUser:User;
    private settings:Settings;

    constructor(private settingsService:SettingsService,
                private currentUserService:LoginService,
                
    ) {
        this.currentUser = this.currentUserService.getUser();
        this.settings = new Settings();
            }

    ngOnInit() {
       this.settingsService.getSettingsForUser()
       .then(settings => this.settings = settings);
    }

    save(){
        this.settingsService.save(this.settings);
    }

    changeAssigned(){
      this.settings.assigned  = !this.settings.assigned; 
    }

    changeCreator(){
        this.settings.creator  = !this.settings.creator;
    }

    changeComment(){
        this.settings.comment  = !this.settings.comment;  
    }

    changeAnswer(){
        this.settings.answer  = !this.settings.answer;       
    }

    
}