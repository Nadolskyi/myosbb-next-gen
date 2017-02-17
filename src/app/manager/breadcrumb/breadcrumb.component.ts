import {Component, OnInit, Input} from "@angular/core";
// import { HouseShowComponent } from "house.show.component";
import {Http, Response } from '@angular/http';
import { myosbbLink } from '../../../shared/models/localhost.config';


@Component(
  {
    selector: 'breadcrumb',
    template: `
      <ol class="breadcrumb">
        <li class="breadcrumb-item active"><a [routerLink]="['../wall']">{{'manager'}}</a></li>
        <li class="breadcrumb-item active">{{header}}</li>
      </ol>
      `
  }
)
export class BreadcrumbComponent {
  public resData: any;
  constructor(public http: Http) {}
  @Input() header: string;

}
