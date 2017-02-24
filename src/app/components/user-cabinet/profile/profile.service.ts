import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from '../../../models/User';
import {ApiService} from "../../../shared/login/api.service";
import {LoginService } from "../../../shared/login/login.service";
@Injectable()
export class ProfileService{

    private url = ApiService.serverUrl + '/restful/user/';
    private updateUrl:string;
    constructor(private http:Http, private loginUserService: LoginService){
    }

    updateUser(user:User){
        this.updateUrl=this.url + user.userId;
        console.log('Updating user with id: ' + user.userId);
        console.log("sending http PUT to " +this.updateUrl);    
        console.log("json obj: " + JSON.stringify(user));
        return this.http.put(this.updateUrl,user,this.loginUserService.getRequestOptionArgs());
    }

}