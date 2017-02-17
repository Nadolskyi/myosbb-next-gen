import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";
import { LoginService } from '../../login/login.service';
import { Observable } from "rxjs/Observable";

@Component({
  providers: [LoginService],
  selector: 'events',
  templateUrl: './events.html',
  styleUrls: ['../styleTables.css'],
})
export class EventsComponent implements OnInit {
console.log(mockData);
  public localState: any;
  constructor(
    public route: ActivatedRoute,public http:Http,public loginService:LoginService
  ) {}

public getEvents(){ this.tratata().subscribe(
    data=>{
        let dupa:any=data.json()
        this.mockData = dupa;
      },
    )
  }
  public tratata():Observable<any> {
    if (this.loginService.checkLogin()){
        let options=this.loginService.getRequestOptionArgs();
        let userUrl = 'http://localhost:8080/myosbb/restful/event/';
        return this.http.get(userUrl,options);
    }
  }
    ngOnInit(): any {
        this.getEvents();
    }

}