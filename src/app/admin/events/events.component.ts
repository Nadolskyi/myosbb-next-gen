import {
  Component,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  public localState: any;
  public events: string[];
  constructor(
    public route: ActivatedRoute,public http:Http,public loginService:LoginService,private router: Router,
  ) {}

public getEvents(){ this.tratata().subscribe(
    data=>{
        let events:any=data.json()
        this.events = events;
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
  onNavigate(id: number) {
          this.router.navigate(['./admin/events/eventsDetail', id]);
        }
    ngOnInit(): any {
        this.getEvents();
    }

}