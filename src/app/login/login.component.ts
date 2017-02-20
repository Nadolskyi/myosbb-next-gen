import {
  Component,
  OnInit
} from '@angular/core';
import { LoginService } from './login.service';
import { AppState } from '../app.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Http, Request, RequestOptionsArgs, Response,
 RequestOptions, ConnectionBackend, Headers } from '@angular/http';
@Component({
  selector: 'login',
  providers: [LoginService],
  styleUrls: [ './login.css' ],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
   public model = { username : '', password : ''};
   public authRole = 'not';
  constructor(
    public appState: AppState, public http: Http,
    public loginService: LoginService
  ) {}
  public  ngOnInit(): any {
    this.loginService.checkLogin();
  }
  public onDone(){
    this.loginService.onSubmit(this.model);
    this.model.username = '';
    this.model.password = '';
    this.loginService.setRole();
    this.authRole = this.loginService.getRole();
    console.log(this.authRole);
  }
}
