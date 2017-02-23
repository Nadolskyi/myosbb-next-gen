import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { IOsbb } from '../models/osbb';
import { OsbbDTO } from '../models/osbbDTO';
import { API_URL } from '../../shared/models/localhost.config';
import { LoginService } from '../shared/login/login.service';
import { Attachment } from '../models/attachment';

const attachmentUploadUrl = API_URL + '/restful/attachment';

@Injectable()
export class OsbbService {

    private url:string = API_URL + '/restful/osbb';
    constructor(private http: Http,
        private _loginservice: LoginService) {
    }

    getAllOsbb(): Promise<IOsbb[]> {
        return this.http.get(this.url)
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    public upload(file: File): Promise<Attachment> {
        return new Promise((resolve, reject) => {
            let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();
            formData.append('file', file, file.name);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', attachmentUploadUrl + '/logo', true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
            xhr.send(formData);
        });
    }

    getByAvailable(available:boolean): Promise<IOsbb[]> {
        return this.http.get(this.url + '/status/' + available)
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    getAllOsbbByNameContaining(osbbName: string ):Promise<IOsbb[]> {
        let url = this.url + '/search/' + osbbName;
        return this.http.get(url)
                 .toPromise()
                 .then(res => res.json())
                  .catch(this.handleError);
    }

   getAllOsbbByOrder(sortedBy: string, asc: boolean) {
        let url = this.url + '?sortedBy=' + sortedBy + '&&asc=' + asc;
        return this.http.get(url)
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    getDTOOsbbById(osbbId: number): Promise<OsbbDTO> {
         let url = this.url + '/dto/' + osbbId;
         return this.http.get(url, this._loginservice.getRequestOptionArgs())
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    getOsbbById(osbbId: number): Promise<IOsbb> {
         let url = this.url + '/' + osbbId;
         return this.http.get(url)
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    addOsbb(osbb:IOsbb): Promise<IOsbb> {
        return this.http.post(this.url, JSON.stringify(osbb))
                        .toPromise()
                        .then(res => res.json())
                        .catch(this.handleError);
    }

    editOsbb(osbb:IOsbb):Promise<IOsbb>  {
        return this.http.put(this.url, JSON.stringify(osbb))
                        .toPromise()
                        .then(res => res.json())
                        .catch(this.handleError);
    }

    deleteOsbb(osbb:IOsbb): Promise<IOsbb> {
        return this.http.delete(this.url + '/' + osbb.osbbId)
                    .toPromise()
                    .then(res => osbb)
                    .catch(this.handleError);
    }

    private handleError(error: any):Promise<any> {
        return Promise.reject(error.message || error);
    }

}
