import {Component} from '@angular/core';
import { myosbbLink } from '../../app.webpackHardcode.service';
import {
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { hardcodeData } from './osbb.hardcode';

@Component({
  selector: 'osbb',
  styleUrls: ['../../../assets/css/manager.page.layout.scss'],
  templateUrl: './osbb.component.html'
})

export class OsbbBillsComponent {
  public data = hardcodeData.rows;
  public title: string = `Osbb`;

  constructor(private http: Http) {

  }
}

