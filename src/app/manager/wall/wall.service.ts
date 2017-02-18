import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/toPromise";
import { externalServerLink } from '../../../shared/models/localhost.config';

@Injectable()

export class WallService {
  constructor(private http: Http) {  }
  getWallData(osbbId: number): Observable<any> {
    return this.http.get(`${externalServerLink}/restful/creator/osbb/${osbbId}`)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
}
