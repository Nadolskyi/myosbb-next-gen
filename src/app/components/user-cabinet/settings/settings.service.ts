import {Injectable}    from "@angular/core";
import {Http}          from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import {ApiService}    from "../../../shared/login/api.service";
import {User}          from '../../../models/User';
import {Settings}      from './settings';
import {Observable}    from "rxjs/Observable";
import {LoginService } from "../../../shared/login/login.service";


@Injectable()
export class SettingsService {

    private getUrl:string = ApiService.serverUrl + '/restful/settings';
    private url:string = ApiService.serverUrl + '/restful/settings';

    constructor(private http:Http, private currentUserService:LoginService) {
    }

    save(settings:Settings):Promise<Settings> {
        return this.http.put(this.url, JSON.stringify(settings), this.currentUserService.getRequestOptionArgs())
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    createForNewUser(id:number):Promise<Settings> {
        return this.http.post(this.url, JSON.stringify(id), this.currentUserService.getRequestOptionArgs())
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    getSettingsForUser():Promise<Settings> {
        return this.http.get(this.getUrl, this.currentUserService.getRequestOptionArgs())
            .toPromise()
            .then(res => 
                { console.log(res.json());
                    return res.json()}
                )
            .catch(this.handleError);
    }

     private handleError(error:any):Promise<any> {
        console.log('HandleError', error);
        return Promise.reject(error.message || error);
    }

}