import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { EventConfigs } from './event.config';
import { LoginService } from '../../login/login.service';
import { EventsService } from './events.service';

@Component({
  selector: `events`,
  styleUrls: ['../../../assets/css/manager.page.layout.scss'],
  templateUrl: './events.template.html',
  providers: [ LoginService, EventsService ]
})
export class EventsComponent implements OnInit {
  public resData = EventConfigs.rows;
  public title: string = 'Events';

  constructor(
    public http: Http,
    public login: LoginService,
    public event: EventsService
  ) { }
  public ngOnInit() {
    this.event.getEventData().subscribe(data => {
      console.log(data);
    });
  };
}
