import {Injectable} from "@angular/core";
import {Http, Response, Headers,BaseRequestOptions,RequestOptions,RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ApiService} from "./api.service";
import {Component} from '@angular/core';

@Injectable()
export class LoginService extends BaseRequestOptions {

    private tokenName:string = "access_token";
    public token:string;
    private _pathUrl = ApiService.serverUrl;

    constructor(private http:Http) {
        super();
        this.headers.append('Authorization', 'Basic  Y2xpZW50YXBwOjEyMzQ1Ng==');
    }
    public sendCredentials(model) {
        let options=this.getRequestOptionArgs();
        let tokenUrl = this._pathUrl + "/oauth/token";
        var data = 'username=' + encodeURIComponent(model.username) + '&password=' + encodeURIComponent(model.password) + '&grant_type=password';
        return this.http.post(tokenUrl, data,options);
    }
    public sendToken():Observable<any> {
        let options=this.getRequestOptionArgs();
        let userUrl = this._pathUrl + "/restful/user/getCurrent";
        return this.http.get(userUrl,options);
    }
    public extractData(res:Response) {
        let body = res.json();
        return body.data || {};
    }
    public checkLogin():boolean {
          console.log( ((localStorage.getItem("access_token") != null) && (localStorage.getItem("access_token") != "")) ? "LogedIn":"LogOut" )
          return  ((localStorage.getItem("access_token") != null) && (localStorage.getItem("access_token") != "")) ? true:false;
     }
    public logOut() {
            localStorage.clear();
    }
    public getUserName() {
        return localStorage.getItem("currentUserName");
    }

    public validateEmail(data){
        let validate=this._pathUrl+"/validEmail";
        let headers=new Headers({'Content-Type':'application/json'});
        return this.http.post(validate, data,{headers:headers});
    }
    public sendPassword(data){
        let url=this._pathUrl+"/sendEmailMail";
        let headers=new Headers({'Content-Type':'application/json'});
        return this.http.post(url, data,{headers:headers});
    }

    public static decodeAccessToken(access_token:string) {
        return JSON.parse(window.atob(access_token.split('.')[1]));
    }

    public getRequestOptionArgs(options?:RequestOptionsArgs, url?:string):RequestOptionsArgs {
        if (!options) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        if ((localStorage.getItem(this.tokenName) != null) && (localStorage.getItem(this.tokenName) != "")) {
            if (!options.headers.has("Authorization")) {
                options.headers.append('Authorization', 'Bearer ' + localStorage.getItem(this.tokenName));
            }
            if(!options.headers.has("Content-Type"))
            options.headers.append('Content-Type', `application/json`);
        } else {
            options.headers.append('Authorization', `Basic  Y2xpZW50YXBwOjEyMzQ1Ng==`);
            if (!options.headers.has("Content-Type")) {
                options.headers.append('Content-Type', `application/x-www-form-urlencoded`);
                options.headers.append('Accept', `application/json`);
            }
        }
        return options;
    }
}
