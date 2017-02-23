import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/toPromise";
import { LoginService } from '../../login/login.service'



@Injectable()
export class HousesService {
    constructor(private http: Http, private loginService: LoginService) {
    }
  getHouses(): Observable<any> {
    return this.http.get('http://localhost:8080/myosbb/restful/house/all', this.loginService.getRequestOptionArgs())
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
}