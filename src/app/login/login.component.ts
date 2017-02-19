import {
  Component,
  OnInit
} from '@angular/core';
import {LoginService} from "./login.service";
import { AppState } from '../app.service';
import {ApiService} from "./api.service";
import {Router} from "@angular/router";
import {User} from './User'
import {Observable} from "rxjs/Observable";
import {Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
@Component({
  selector: 'login',
  providers: [LoginService],
  styleUrls: [ './login.css' ],
  templateUrl: './login.component.html',
  outputs: ['isLoggedIn']
})
export class LoginComponent implements OnInit {
ngOnInit():any {
        this.isLoggedIn = this.loginService.checkLogin();
    }
  constructor(
    public appState: AppState,private http:Http,private loginService:LoginService, private _router:Router
  ) {}
  public localState = { value: '' };
  private tokenName:string = "access_token";
  private _pathUrl = ApiService.serverUrl;
  private model={'username':'','password':''};
  private role:string = "";
  private isLoggedIn:boolean;
  private logInError:boolean = false;
  public currentUser:User

  public  decodeAccessToken(access_token:string) {
        return JSON.parse(window.atob(access_token.split('.')[1]));
    }
  public setUser(user:User) {
        this.currentUser = user;
    }
  public getRole():string {
      return this.role;
  }

  public setRole() {
      if (this.loginService.checkLogin()) {
          this.role = this.decodeAccessToken(localStorage.getItem("access_token"))["authorities"][0];
      }
  }
  public onSubmit(){
    this.loginService.sendCredentials(this.model).subscribe(
      data => {
        if (!this.loginService.checkLogin()) {
              this.tokenParseInLocalStorage(data.json());
              this.loginService.sendToken().subscribe(
                  data=> {
                      let user:User = <User>data.json();
                      this.setUser(user);
                      this.model.username = "";
                      this.model.password = "";
                      this.isLoggedIn = true;
                      this.setRole();
                      if (this.getRole() === "ROLE_USER") {
                          this._router.navigate(['home']);
                      }
                      if (this.getRole() === "ROLE_ADMIN") {
                          this._router.navigate(['/']);
                      }
                      if (this.getRole() === "ROLE_MANAGER") {
                          this._router.navigate(['manager']);
                      }
                  }
              )
         }
      }
    )
  }
  public tokenParseInLocalStorage(data:any) {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("token_type", data.token_type);
        localStorage.setItem("expires_in", new Date().setSeconds(data.expires_in));
        localStorage.setItem("scope", data.scope);
        localStorage.setItem("jti", data.jti);
        localStorage.setItem("refresh_token", data.refresh_token);
  }
  createAccount() {
     this._router.navigate(['registration']);
  }
}
