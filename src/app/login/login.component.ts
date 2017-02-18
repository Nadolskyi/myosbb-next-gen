import {
  Component,
  OnInit
} from '@angular/core';
import { LoginService } from './login.service';
import { AppState } from '../app.service';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
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
  public tokenName: string = 'access_token';
  public model = { username : '', password : ''};
  public role: string = '';
  public isLoggedIn: boolean;
  public logInError: boolean = false;
  public currentUser: any;
  constructor(
    public appState: AppState, public http: Http,
    public loginService: LoginService, public _router: Router
  ) {}
  public  ngOnInit(): any {
    this.isLoggedIn = this.loginService.checkLogin();
  }
  public  decodeAccessToken( accessToken: string) {
    return JSON.parse(window.atob(accessToken.split('.')[1]));
   }
  public setUser(user: any) {
    this.currentUser = user;
   }
  public getRole(): string {
    return this.role;
  }
  public setRole() {
    if (this.loginService.checkLogin()) {
      this.role = this.decodeAccessToken(localStorage.getItem(this.tokenName))['authorities'][0];
    }
  }
  public tester() {
    this.tratata().subscribe(
    (data) => {
      let dupa: any = data.json();
      console.log(dupa);
    }
    );
  }
  public tratata(): Observable<any> {
    let options = this.loginService.getRequestOptionArgs();
    let userUrl = 'http://localhost:8080/myosbb/restful/event/';
    return this.http.get(userUrl, options);
  }
  public onSubmit() {
    this.loginService.sendCredentials(this.model).subscribe(
      (data) => {
        if (!this.loginService.checkLogin()) {
          this.tokenParseInLocalStorage(data.json());
          this.loginService.sendToken().subscribe(
            (data) => {
              let user: any = data.json();
              this.setUser(user);
              this.model.username = '';
              this.model.password = '';
              this.isLoggedIn = true;
              this.setRole();
              switch (this.getRole()) {
                case 'ROLE_ADMIN':
                this._router.navigate(['./admin']);
                break;
                case 'ROLE_MANAGER':
                this._router.navigate(['./manager']);
                break;
                case 'ROLE_USER':
                this._router.navigate(['./user']);
                break;
                default :
                this._router.navigate(['./login']);
                break;
              }
            }
          );
         }
      }
    );
  }
  public tokenParseInLocalStorage(data: any) {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('token_type', data.token_type);
    localStorage.setItem('scope', data.scope);
    localStorage.setItem('jti', data.jti);
    localStorage.setItem('refresh_token', data.refresh_token);
    }
}
