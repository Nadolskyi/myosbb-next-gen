import {Injectable} from "@angular/core";
import {Http, Response, Headers,BaseRequestOptions,RequestOptions,RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs/Observable";
//import {User} from "../../shared/models/User";
//import {ApiService} from "./api.service";
//import {routes} from "../app.routes";
import {Component} from '@angular/core';

@Injectable()
export class LoginService extends BaseRequestOptions {
    
    private tokenName:string = "access_token";
    token:string;
    private _pathUrl = 'http://localhost:8080/myosbb';
    currentUser:User;
    client = {
        'client_pass': '123456',
        'client_id': 'clientapp',
        'grant_type': 'password',
        'scope': 'read%20write'
    };


    constructor(private http:Http) {
        super();
        this.headers.append('Authorization', 'Basic  Y2xpZW50YXBwOjEyMzQ1Ng==');
    }

    //Sending credentials{username ,password for getting token}
    sendCredentials(model) {
        console.log('Authentication pending...');
        let options=this.getRequestOptionArgs();
        //this.headers.append('Authorization', `Basic  Y2xpZW50YXBwOjEyMzQ1Ng==`);
        let tokenUrl = this._pathUrl + "/oauth/token";
        var data = 'username=' + encodeURIComponent(model.username) + '&password='
            + encodeURIComponent(model.password) + '&grant_type=password';
           // HeaderComponent.currentUser = 
        
           console.log(data);
            console.log(tokenUrl);
        return this.http.post(tokenUrl, data,options);
    }

    //sends token to SERVERS PROTECTED RESOURCES if THIS ONE WILL PASS EVERYTHING IS WORKING
    sendToken():Observable<any> {
        console.log("sendtoken");
        let options=this.getRequestOptionArgs();
        let userUrl = this._pathUrl + "/restful/user/getCurrent";
        console.log("sendtoken");
        return this.http.get(userUrl,options);
    }


    private extractData(res:Response) {
        let body = res.json();
        return body.data || {};
    }

    //cheking is there in localstorage data
    checkLogin():boolean {
        if ((localStorage.getItem("access_token") != null) && (localStorage.getItem("access_token") != "")) {
            console.log("checkLogintrue");
            return true;
        }
        else
            console.log("checkLoginfalse");
            return false;
    }

    //erasing everything from  local storage
    logOut() {
            localStorage.clear();
            
    }

    //gets UserName from  localStorage
    getUserName() {
        return localStorage.getItem("currentUserName");
    }

    validateEmail(data){
        let validate=this._pathUrl+"/validEmail";
        let headers=new Headers({'Content-Type':'application/json'});
        return this.http.post(validate, data,{headers:headers});
    }
    sendPassword(data){
        let url=this._pathUrl+"/sendEmailMail";
        let headers=new Headers({'Content-Type':'application/json'});
        return this.http.post(url, data,{headers:headers});
    }
    
    public static decodeAccessToken(access_token:string) {
        return JSON.parse(window.atob(access_token.split('.')[1]));
    }
   
    getRequestOptionArgs(options?:RequestOptionsArgs, url?:string):RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        if ((localStorage.getItem(this.tokenName) != null) && (localStorage.getItem(this.tokenName) != "")) {
            if (!options.headers.has("Authorization")) {
                options.headers.delete('Authorization');
                options.headers.append('Authorization', 'Bearer ' + localStorage.getItem(this.tokenName));
            } if(!options.headers.has("Content-Type"))
            options.headers.append('Content-Type', `application/json`);
        } else {
            options.headers.append('Authorization', `Basic  Y2xpZW50YXBwOjEyMzQ1Ng==`);
            if (!options.headers.has("Content-Type")) {
                options.headers.append('Content-Type', `application/x-www-form-urlencoded`);
                options.headers.append('Accept', `application/json`);
            }
        }
        console.log(options);
        return options;
    }
}
