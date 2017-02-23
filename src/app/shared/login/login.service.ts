import { Injectable } from '@angular/core';
import { Http, Response, Headers,
 RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Injectable()
export class LoginService {
  public _pathUrl = ApiService.serverUrl;
  private getUrl: string = ApiService.serverUrl + '/restful/user';
  public tokenName: string = 'access_token';
  public role: string = '';
  public isLoggedIn: boolean;
  public currentUser: User;

  constructor(public http: Http, public _router: Router,
    ) {
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

  public onSubmit(model) {
    this.sendCredentials(model).subscribe(
      (data) => {
        if (!this.checkLogin()) {
          this.tokenParseInLocalStorage(data.json());
          this.sendToken().subscribe(
            (subData) => {
              let user: any = subData.json();
              this.isLoggedIn = true;
              this.setRole();
              localStorage.setItem('user', user.userId);
              this.setUser(user);
              switch (this.getRole()) {
                case "ROLE_USER":
                  this._router.navigate(['./user']);
                  break;
                case "ROLE_ADMIN":
                  this._router.navigate(['./admin']);
                  break;
                case "ROLE_MANAGER":
                  this._router.navigate(['./manager']);
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


  setUser(user:User) {

        this.currentUser = user;
    }

    setUserPromise(user:User) {
        this.currentUser = user;
        return this.currentUser;
    }

    getUser():User {
        return this.currentUser;
    }

    initUser() {
        if (this.checkLogin()) {
            this.sendToken().subscribe(data=> {
                this.setUser(<User>data.json());
            })
        }
    }

    getRole():string {
        return this.role;
    }

    setRole() {
        if (this.checkLogin()) {
            this.role = this.decodeAccessToken(localStorage.getItem("access_token"))["authorities"][0];
        }
    }

    getUserById(id:number):Observable<any> {
          let url = `${this.getUrl}/${id}`;
        return this.http.get(url)
            .map((response)=> response.json())
            .catch((error)=>Observable.throw(error));
    }
}
