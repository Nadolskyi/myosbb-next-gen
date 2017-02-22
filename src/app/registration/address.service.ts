import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const attachmentUploadUrl = 'http://localhost:8080/myosbb/restful/attachment';

@Injectable()
export class AddressService {

  public addressUrl: string = 'http://localhost:8080/myosbb/restful/address';

  constructor(private http: Http) {
  }

  public getAllRegions(): Observable<any[]> {
    let url = this.addressUrl + '/region';
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
  public getAllCitiesOfRegion(regionID: number): Observable<any[]> {
    let url = this.addressUrl + '/city/' + regionID;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
  public getAllStreetsOfCity(cityID: number): Observable<any[]> {
    let url = this.addressUrl + '/street/' + cityID;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
  public getStreetById(streetID: number): Observable<any> {
    let url = this.addressUrl + '/street/id/' + streetID;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
  public getAllDistrictsOfCity(cityID: number): Observable<any[]> {
    let url = this.addressUrl + '/district/' + cityID;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
  public getDistrictById(districtID: number): Observable<any> {
    let url = this.addressUrl + '/district/id/' + districtID;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error));
  }
}
