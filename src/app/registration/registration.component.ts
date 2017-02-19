import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { RegisterService } from './register.service';
import { UserRegistration } from "./user_registration";

@Component({
  selector: 'app-registration',
  providers: [ RegisterService ],
  styleUrls: [ './registration.component.css' ],
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

  newUser: UserRegistration = new UserRegistration();

  constructor(private http:Http, public registerService:RegisterService) {
    this.newUser.password = '1234';
    this.newUser.activated = true;
    this.newUser.firstName = 'Hard';
    this.newUser.lastName = 'Coded';
    this.newUser.email = 'person@gmail.com';
    this.newUser.phoneNumber = '+38(039)493-9439';
    this.newUser.gender = 'Male';
    this.newUser.birthDate ="2017-02-06";
  }

  public ngOnInit() {
    console.log(this.newUser)
  }

  SenderJoin(): any {
    this.registerService.registerUser(this.newUser)
      .subscribe(
        data => {
          this.newUser = data;
            console.log(this.newUser);
        },
        error => {
          console.log(error)
        }
      )
  }
}
