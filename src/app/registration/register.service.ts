import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserRegistration } from './models/user_registration';
import { OsbbRegistration } from './models/osbb_registration';
@Injectable()
export class RegisterService {

  public _pathUrlForUser = 'http://localhost:8080/myosbb/registration/';
  public _pathUrlForOsbb = 'http://localhost:8080/myosbb/registration/osbb';
  public houseAllURL: string = 'http://localhost:8080/myosbb/restful/house/all';
  public houseURL: string = 'http://localhost:8080/myosbb/restful/house';
  public apartmentURL: string = 'http://localhost:8080/myosbb/restful/apartment/';
  private creatorURL: string = 'http://localhost:8080/myosbb/restful/creator/osbb/';
  private osbbURL = 'http://localhost:8080/myosbb/restful/osbb';

  constructor(private http: Http) {}

  public registerOsbb(osbb: OsbbRegistration): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._pathUrlForOsbb, osbb, options)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
  public registerUser(user: UserRegistration): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._pathUrlForUser, user, options)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
  public getAllOsbb(): Observable<any> {
    return this.http.get(this.osbbURL)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error));
  }
  public getAllHouses(): Observable<any> {
    return this.http.get(this.houseAllURL)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error));
  }
  public getAllHousesByStreet(id: number): Observable<any> {
    return this.http.get(this.houseURL + '/street/' + id)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error));
  }
  public getHouseByNumberHouseAndStreetId(numberHouse: number, streetId: number): Observable<any> {
    return this.http.get(this.houseURL + '/numberHouse/' + numberHouse + '/street/' + streetId)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error));
  }
  public getAllHousesByOsbb(id: number): Observable<any> {
    return this.http.get(this.houseAllURL + '/' + id)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error));
  }
  public getAllApartments(): Observable<any> {
    return this.http.get(this.apartmentURL)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error));
  }
  public getAllApartmentsByHouse(houseId: number): Observable<any> {
    return this.http.get(this.houseURL + '/' + houseId + '/apartments')
      .map((response) => response.json())
      .catch((error) => Observable.throw(error));
  }
  public getCreatorOsbb(osbbId: number): Observable<any> {
    let url = this.creatorURL + osbbId;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
}
