import {Component, OnInit} from '@angular/core';
import { myosbbLink } from '../../app.webpackHardcode.service';
import {Http, Response} from "@angular/http";
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
export class EventsComponent implements OnInit {
  public resData = EventConfigs.rows;

  constructor(
    public http: Http
  ) {
    console.log(this.resData);
  }
  public ngOnInit() {
  //   this.resData = EventConfig.rows;
  //   // this.http.get('http://localhost:8080/myosbb/restful/event/4').forEach(val => {
  //   //   this.responseVerif(val);
  //   // });
  }
  // public responseVerif(res: Response) {
  //   this.resData = res.json();
  // }
}
