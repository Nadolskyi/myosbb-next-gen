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

export class ContractsService {

  constructor(
    private http: Http,
    public login: LoginService
  ) { }

  getContractsData(): Observable<any> {
    return this.http.get(`${externalServerLink}/restful/contract?pageNum=1&&actv=false`, this.login.getRequestOptionArgs())
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
}
