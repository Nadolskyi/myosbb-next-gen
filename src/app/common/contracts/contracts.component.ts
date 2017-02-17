import {Component} from '@angular/core';
import { myosbbLink } from '../../app.webpackHardcode.service';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ContractsConfig } from './contracts.config';

@Component({
  selector: 'contracts',
  styleUrls: ['../../../assets/css/manager.page.layout.scss'],
  templateUrl: './contracts.component.html'
})

export class ContractsComponent {
  public data = ContractsConfig;
  constructor(private http: Http) {
    console.log(ContractsConfig);

  }
  public hardcodedConfig() {
    //   return this.http.get('tsconfig.json')
    //     .subscribe(res => this.data = res.json());

  }



}

