import { Component, OnInit, Input} from "@angular/core";
import { Http, Response } from '@angular/http';


@Component(
  {
    selector: 'breadcrumb',
    // styleUrls: ['../../../assets/css/manager.page.layout.scss'],
    template: `
      <ol class="breadcrumb">
        <li class="breadcrumb-item active"><a [routerLink]="['../wall']">{{'Manager'}}</a></li>
        <li class="breadcrumb-item active">{{header}}</li>
      </ol>
      `
  }
)

export class BreadcrumbComponent {
  public resData: any;
  constructor() {}
  @Input() header: string;
}
