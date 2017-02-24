import {
  Component, OnInit
} from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  styleUrls: [ './login.css' ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public model = { username : '', password : ''};
    constructor(public loginService: LoginService,
    ) {}
  public logIn() {
    this.loginService.onSubmit(this.model);
    this.model.username = '';
    this.model.password = '';
  }
}

