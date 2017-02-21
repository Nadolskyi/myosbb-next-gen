import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from "@angular/http";
import { LoginService } from '../../../login/login.service'
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs";

@Component({
    providers: [LoginService],
    selector: 'house',
    templateUrl: './house.html',
    styleUrls: ['../../styleTables.css'],
})
export class HouseAboutComponent implements OnInit {
    public localState: any;
    public house: string[];
    public houseId: number;
    private sub: Subscription;
    constructor(
        public route: ActivatedRoute, public http: Http, public loginService: LoginService
    ) {}

    public getHouseById(houseId: number): Observable < any > {
        let options = this.loginService.getRequestOptionArgs();
        let userUrl = 'http://localhost:8080/myosbb/restful/house/' + houseId;
        return this.http.get(userUrl, options);
    }
    ngOnInit(): any {
        this.sub = this.route.params.subscribe((params)=> {
            this.houseId = +params['id'];
            this.getHouseById(this.houseId)
                .subscribe(data => {
                        let house: any = data.json()
                        this.house = Array.of(house);
                    })}
                )}
}