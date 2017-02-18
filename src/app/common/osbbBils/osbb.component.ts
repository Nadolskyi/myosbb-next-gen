import {Component} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'osbb',
  styleUrls: ['../../../assets/css/manager.page.layout.scss'],
  templateUrl: './osbb.component.html'
})

export class OsbbBillsComponent {
  public data: any;
  public title: string = `Osbb`;

  constructor() { }
}

