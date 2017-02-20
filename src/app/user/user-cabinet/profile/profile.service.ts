import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { User } from '../../../common/models/User';
import {ApiService} from "../../../common/services/api.service.ts";
import {LoginService } from "../../../login/login.service";
@Injectable()
export class ProfileService{

    private url = ApiService.serverUrl + '/restful/user/';
    private updateUrl:string;
    constructor(private http:Http, private _loginservice: LoginService){
    }

    updateUser(user:User){
        this.updateUrl=this.url + user.userId;
        console.log('Updating user with id: ' + user.userId);
        console.log("sending http PUT to " +this.updateUrl);    
        console.log("json obj: " + JSON.stringify(user));
        return this.http.put(this.updateUrl,user,this._loginservice.getRequestOptionArgs());
    }

}