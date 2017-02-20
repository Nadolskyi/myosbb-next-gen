import { Injectable } from '@angular/core';
import { Http, Response, Headers,
 RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()
export class LoginService{
  private _pathUrl = ApiService.serverUrl;
  private tokenName: string = 'access_token';
  public role: string = '';
  public isLoggedIn: boolean;
  public logInError: boolean = false;
  public currentUser: any;

  constructor(private http: Http, public _router: Router) {
  }



  public sendCredentials(model) {
      let options = this.getRequestOptionArgs();
      let tokenUrl = this._pathUrl + '/oauth/token';
      let data = 'username=' + encodeURIComponent(model.username)
       + '&password=' + encodeURIComponent(model.password) + '&grant_type=password';
      return this.http.post(tokenUrl, data, options);
  }
  public sendToken(): Observable<any> {
      let options = this.getRequestOptionArgs();
      let userUrl = this._pathUrl + '/restful/user/getCurrent';
      return this.http.get(userUrl, options);
  }
  public checkLogin(): boolean {
        console.log( ((localStorage.getItem(this.tokenName) !== null)
         && (localStorage.getItem(this.tokenName) !== '') ) ? 'LogedIn' : 'LogOut' );
        return  ((localStorage.getItem(this.tokenName) !== null)
         && (localStorage.getItem(this.tokenName) !== '')) ? true : false;
   }
  public getRequestOptionArgs(options?: RequestOptionsArgs, url?: string): RequestOptionsArgs {
    if (!options) {
        options = new RequestOptions();
        options.headers = new Headers();
    }
    if ((localStorage.getItem(this.tokenName) !== null)
      && (localStorage.getItem(this.tokenName) !== '')) {
            options.headers.append(ApiService.AUTH, ApiService.BEARER
             + localStorage.getItem(this.tokenName));
            options.headers.append(ApiService.CONTENT_TYPE, ApiService.APP_JSON);
    } else {
        options.headers.append(ApiService.AUTH, ApiService.BASIC_TOKEN);
        options.headers.append(ApiService.CONTENT_TYPE, ApiService.APP_XWFU);
        options.headers.append(ApiService.ACCEPT, ApiService.APP_JSON);
    }
    return options;
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
    if (this.checkLogin()) {
      this.role = this.decodeAccessToken(localStorage.getItem(this.tokenName))['authorities'][0];
    }
  }
  public onSubmit(model) {
      this.sendCredentials(model).subscribe(
        (data) => {
          if (!this.checkLogin()) {
            this.tokenParseInLocalStorage(data.json());
            this.sendToken().subscribe(
              (data) => {
                let user: any = data.json();
                this.setUser(user);
                this.isLoggedIn = true;
                this.setRole();
                this._router.navigate(['./common']);
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
