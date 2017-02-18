import { Injectable } from '@angular/core';
import { Http, Response, Headers,
 RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Injectable()
export class LoginService{
  private _pathUrl = ApiService.serverUrl;
  private tokenName: string = 'access_token';
  constructor(private http: Http) {
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
  }
