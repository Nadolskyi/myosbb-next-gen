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
    selector: 'eventsDetail',
    templateUrl: './eventsDetail.html',
    styleUrls: ['../../styleTables.css'],
})
export class eventsDetailComponent implements OnInit {
    public localState: any;
    public eventsDetail: string[];
    public eventId: number;
    private sub: Subscription;
    constructor(
        public route: ActivatedRoute, public http: Http, public loginService: LoginService
    ) {}

    public getEventsDetail(eventId: number): Observable < any > {
        let options = this.loginService.getRequestOptionArgs();
        let userUrl = 'http://localhost:8080/myosbb/restful/event/' + eventId;
        return this.http.get(userUrl, options);
    }
    ngOnInit(): any {
        this.sub = this.route.params.subscribe((params)=> {
            this.eventId = +params['id'];
            this.getEventsDetail(this.eventId)
                .subscribe(data => {
                        let eventsDetail: any = data.json()
                        this.eventsDetail = Array.of(eventsDetail);
                    })}
                )}
}