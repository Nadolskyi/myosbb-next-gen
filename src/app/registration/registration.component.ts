import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { RegisterService } from './register.service';
import { UserRegistration } from "./user_registration";
import { ToasterService } from 'angular2-toaster';
import * as moment from 'moment';

@Component({
  selector: 'app-registration',
  providers: [ RegisterService ],
  styleUrls: [ './registration.component.scss' ],
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

  newUser: UserRegistration = new UserRegistration();
  public textmask = [/[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/];
  public phoneMask = ['+','3','8','(', /[0]/, /\d/, /\d/, ')',/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  public genders: string[];
  private isSelectGender:boolean = false;
  private IsRegistered: boolean;
  confirmPassword: string = "";
  checkOnUserPassword: boolean = false;
  birthDateError: boolean = false;
  lengthError: boolean = false;
  matchError: boolean = false;


  constructor(private http:Http, public registerService:RegisterService, private toasterService: ToasterService,) {
    this.newUser.firstName = '';
    this.newUser.lastName = '';
    this.newUser.password = '';
    this.newUser.activated = true;
    this.newUser.email = '';
    this.newUser.phoneNumber = '';
    this.newUser.gender = '';
    this.newUser.birthDate ="";
  }

  public ngOnInit() {
    this.IsRegistered = true;
    this.genders = ['Female', 'Male'];
  }
  SenderJoin(): any {
    this.toasterService.pop('success', 'created', this.newUser.firstName);
    this.registerService.registerUser(this.newUser)
      .subscribe(
        data => {
          this.newUser = data;
        },
        error => {
          console.log(error)
        }
      )
  }
  selectedGender(value: any) {
        let gender: string = value.text;
        if( gender == 'Female' || gender =='Жінка' ) {
            this.newUser.gender = 'Female';
        }
        else{
            this.newUser.gender = 'Male';
        }
        this.isSelectGender = true;
  }
  matchCheck() {
        this.checkOnUserPassword = false;
        let passwordConfirm: string = this.confirmPassword;
        let userPassword: string = this.newUser.password;
        if (passwordConfirm.length != 0) {
            this.matchError = passwordConfirm != userPassword;
        }
    }
  confirmPassLength() {
        let userPassword: string = this.newUser.password;
        this.lengthError = userPassword.length < 4 || userPassword.length > 16;
        this.matchCheck();
        if (this.matchError) {
            this.checkOnUserPassword = true;
        }
  }
  removedGender() {
    this.isSelectGender = false;
  }
  castBirthDateStringToDate(): Date {
        return moment(this.newUser.birthDate).toDate();
  }
  checkDate() {
    let date = new Date();
    let res = this.castBirthDateStringToDate().valueOf() - date.valueOf();
    if (res >= 0) {
        this.birthDateError = true;
    }
    else this.birthDateError = false;
  }
}
