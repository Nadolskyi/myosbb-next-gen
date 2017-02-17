import { Injectable } from "@angular/core";
import {
  Http,
  Response,
  Headers
} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/toPromise";
import { myosbbLink } from '../../../shared/models/localhost.config';

@Injectable()

export class HouseService {

  constructor(private http: Http) { }

  getHouseData(): Observable<any> {
    return this.http.get(`${myosbbLink}/restful/house/all`)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
}
