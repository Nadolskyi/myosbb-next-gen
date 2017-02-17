import {
  Component,
  OnInit
} from '@angular/core';
import { myosbbLink } from '../../app.webpackHardcode.service';
import {
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ContractsConfig } from './contracts.config'
import { EventConfigs } from './event.config';

@Component({
  selector: `events`,
  styleUrls: ['../../../assets/css/manager.page.layout.scss'],
  templateUrl: './events.template.html'
})
export class EventsComponent {
  public resData = EventConfigs.rows;
  public title: string = 'Events';

  constructor(public http: Http) { }
}
