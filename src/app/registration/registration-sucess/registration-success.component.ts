import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from 'ng2-translate';
import { Router } from '@angular/router';

@Component({
    selector: 'register-success',
    templateUrl: './registration-success.html',
    styleUrls: ['../registration.component.scss'],
})

export class RegistrationSuccessComponent {

  constructor(private router: Router) {

  }
}
