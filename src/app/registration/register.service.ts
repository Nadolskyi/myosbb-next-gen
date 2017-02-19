import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {UserRegistration} from "./user_registration";

@Injectable()
export class RegisterService {
    public _pathUrlForUser = 'http://localhost:8080/myosbb/registration/';

    constructor(private http: Http) {}

    registerUser(user: UserRegistration): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this._pathUrlForUser, user, options)
            .map((res: Response) => res.json())
            .catch((error)=>Observable.throw(error));
    }
}
