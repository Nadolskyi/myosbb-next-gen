import {
  Component, OnInit
} from '@angular/core';
import { LoginService } from './login.service';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  styleUrls: [ './login.css' ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public model = { username : '', password : ''};
    constructor(public loginService: LoginService,
                private router: Router
    ) {}
  public logIn() {
    this.loginService.onSubmit(this.model);
    this.model.username = '';
    this.model.password = '';
  }
  public registrationPage() {
    this.router.navigate(['registration']);
  }
}
