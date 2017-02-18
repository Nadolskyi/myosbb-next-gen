import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/toPromise";
import { externalServerLink } from '../../../shared/models/localhost.config';
import { LoginService } from '../../login/login.service';

@Injectable()

export class EventsService {

  constructor(
    private http: Http,
    public login: LoginService
  ) { }
  //
  // getEventData(): Observable<any> {
  //   return this.http.get(`${externalServerLink}/restful/event/`, this.login.getRequestOptionArgs())
  //     .map((res: Response) => res.json())
  //     .catch((error) => Observable.throw(error));
  // }

  // getEventData(): Observable<any> {
  //   return this.http.get(`${externalServerLink}/restful/ticket/`, this.login.getRequestOptionArgs())
  //     .map((res: Response) => res.json())
  //     .catch((error) => Observable.throw(error));
  // }
  getEventData(): Observable<any> {
    return this.http.get(`${externalServerLink}/restful/contract?pageNum=1&&actv=false`, this.login.getRequestOptionArgs())
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
}
